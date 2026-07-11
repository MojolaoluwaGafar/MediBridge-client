import { useMemo, useState } from "react";
import {
  Heart,
  Brain,
  Eye,
  Bone,
  Baby,
  Venus,
  Stethoscope,
  Ambulance,
  Activity,
  ShieldPlus,
  Smile,
} from "lucide-react";
import type { ElementType } from "react";
import DepartmentCard from "../../DepartmentsPageComponents/DepartmentCard";
import { useDepartments } from "../../../Hooks/Departments/useDepartments";
import type { IDepartment } from "../../../types/department";

interface Props {
  searchTerm: string;
  selectedCategory?: string;
}

type DepartmentWithIcon = Omit<IDepartment, "icon"> & {
  icon: ElementType;
};

const departmentIcons: Record<string, ElementType> = {
  Heart,
  Brain,
  Eye,
  Bone,
  Baby,
  Venus,
  Stethoscope,
  Ambulance,
  Activity,
  ShieldPlus,
  Smile,
  Tooth: Smile,
  FirstAid: ShieldPlus,
  MentalHealth: Brain,
};

export default function DisplayDept({ searchTerm, selectedCategory = "All" }: Props) {
  const { data, loading } = useDepartments();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const departments = useMemo<DepartmentWithIcon[]>(() => {
    return (
      data?.map((department) => ({
        ...department,
        icon: departmentIcons[department.icon] ?? Heart,
      })) ?? []
    );
  }, [data]);

  const filteredDepartments = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return departments.filter((department) => {
      const matchesCategory =
        selectedCategory === "All" || department.category === selectedCategory;

      const searchableText = `${department.field} ${department.category} ${department.summary}`.toLowerCase();
      const matchesSearch =
        normalizedSearch.length === 0 || searchableText.includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [departments, searchTerm, selectedCategory]);

  const totalPages = Math.max(1, Math.ceil(filteredDepartments.length / itemsPerPage));

  const pagedDepartments = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredDepartments.slice(start, start + itemsPerPage);
  }, [filteredDepartments, currentPage]);

  useMemo(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  if (loading) {
    return <div className="py-8 text-center text-[#707070]">Loading departments...</div>;
  }

  if (!filteredDepartments.length) {
    return (
      <div className="rounded-xl border border-dashed border-[#D9D9D9] bg-[#FAFAFA] py-10 text-center text-[#707070]">
        No departments match your search.
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 py-4">
        {pagedDepartments.map((department) => (
          <DepartmentCard
            key={department._id}
            {...department}
            icon={department.icon}
          />
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#E6E3E3] pt-4 text-sm text-[#707070]">
        <p>
          Showing {filteredDepartments.length === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1}–
          {Math.min(currentPage * itemsPerPage, filteredDepartments.length)} of {filteredDepartments.length}
        </p>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className="rounded border border-[#D9D9D9] px-3 py-1 disabled:cursor-not-allowed disabled:opacity-50"
          >
            First
          </button>
          <button
            type="button"
            onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
            disabled={currentPage === 1}
            className="rounded border border-[#D9D9D9] px-3 py-1 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Prev
          </button>
          <span className="rounded bg-[#28574E] px-3 py-1 text-white">
            {currentPage} / {totalPages}
          </span>
          <button
            type="button"
            onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
            disabled={currentPage === totalPages}
            className="rounded border border-[#D9D9D9] px-3 py-1 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next
          </button>
          <button
            type="button"
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
            className="rounded border border-[#D9D9D9] px-3 py-1 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Last
          </button>
        </div>
      </div>
    </div>
  );
}