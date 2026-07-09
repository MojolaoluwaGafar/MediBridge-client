import { useMemo, useState } from "react";
import {
  // ChevronLeft,
  // ChevronsLeft,
  // ChevronRight,
  // ChevronsRight,
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

import DepartmentCard from "../../DepartmentsPageComponents/DepartmentCard";
import ViewDepartmentModal from "../../DepartmentsPageComponents/ViewDepartmentModal";
import { useDepartments } from "../../../Hooks/Departments/useDepartments";
import type { IDepartment } from "../../../types/department";
import type { ElementType } from "react";


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


interface Props {
  searchTerm: string;
}


type DepartmentWithIcon = Omit<IDepartment, "icon"> & {
  icon: ElementType;
  overview?: string;
  services?: string[];
  image?: string;
};


export default function DisplayDept({}: Props) {
        const [currentPage, setCurrentPage] = useState(1);
        const [selectedDepartment, setSelectedDepartment] =
          useState<DepartmentWithIcon | null>(null);
      
        const { data, loading } = useDepartments();
      
      
        const departments = useMemo<DepartmentWithIcon[]>(
        () =>
          data?.map((department) => ({
            ...department,
            icon: departmentIcons[department.icon] ?? Heart,
            overview: department.details?.overview,
            services: department.details?.services,
            image: department.details?.image,
          })) ?? [],
        [data]
      );
      
      
        const itemsPerPage = 8;
      
      
        const filteredDepartments = useMemo(
          () =>
            departments
              .filter(
                (d) => activeTab === "All" || d.category === activeTab
              )
              .filter((d) =>
                d.field
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              ),
          [departments, activeTab, searchTerm]
        );
      
      
        const totalItems = filteredDepartments.length;
      
        const totalPages = Math.max(
          1,
          Math.ceil(totalItems / itemsPerPage)
        );
      
      
        const displayedDepartments = filteredDepartments.slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
        );
      
        if (loading) {
          return <div className="py-20 text-center">Loading...</div>;
        }
      
  return (
    <div>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10 px-20">
                {displayedDepartments.map((department) => (
                  <DepartmentCard
                    key={department._id}
                    {...department}
                    onView={() => setSelectedDepartment(department)}
                  />
                ))}
              </div>
    </div>
  )
}