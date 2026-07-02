import { useState, useEffect } from "react";
import Input from "../../Input";
import type { ComponentType } from "react";
import { Search, HeartPulse, Brain, Eye, Bone, Baby, Stethoscope } from "lucide-react";
import type { IDoctor } from "../../../types/doctor";
// import { doctors } from "../../../data";
import { useDoctors } from "../../../Hooks/Doctors/useDoctors";

interface ISelectDep {
    icon: ComponentType<any>;
    iconCol: string;
    iconBg: string;
    department: string;
    availableDoctors: number;
}

const Card = ({
    icon: Icon,
    department,
    availableDoctors,
    iconCol,
    iconBg,
    isSelected,
    onClick,
}: ISelectDep & { isSelected?: boolean; onClick: () => void }) => {
    const isDisabled = availableDoctors === 0;

    return (
    <div
    onClick={!isDisabled ? onClick : undefined} className={`flex items-center gap-4 border rounded-lg p-4 cursor-pointer transition w-57.5
        ${isSelected ? "border-[#28574E] shadow-md" : "border-[#DDDDDD] hover:shadow-md hover:bg-[#F5F5F5]"} ${isDisabled ? "opacity-50 cursor-not-allowed hover:none" : ""}`}>
            <span className={`h-11 w-11 flex items-center justify-center rounded-full ${iconBg}`}>
                <Icon color={iconCol} size={21} />
            </span>
            
            <div className="flex flex-col gap-1">
                <p className="mt-2 font-semibold fontOutfit">{department}</p>
                <p className="text-[16px] font-light fontOutfit"> {availableDoctors === 0 
                ? "No doctors available" : `${availableDoctors} ${availableDoctors === 1 ? "Doctor" : "Doctors"}`}</p>
            </div>
    </div>
    );
};

export default function StepOne({ onSelect } : { onSelect : ( dep : string)=> void, DRs : IDoctor[]}) {
    const [selectedDep, setSelectedDep] = useState<string | null>(null);
    const { doctors, fetchDoctors, loading, error } = useDoctors();
    
    useEffect(() => {
        fetchDoctors();
    }, []);
    const departments: ISelectDep[] = [
        { icon: HeartPulse, iconCol: "#FC0707", iconBg: "bg-[#FFF4F3]", department: "Cardiology", availableDoctors: doctors.filter((d)=> d.department === "Cardiology").length },
        { icon: Brain, iconCol: "#00454B", iconBg: "bg-[#CFDFE0]", department: "Neurology", availableDoctors:  doctors.filter((d)=> d.department === "Neurology").length },
        { icon: Eye, iconCol: "#5F330E", iconBg: "bg-[#FAEFE7]", department: "Ophthalmology", availableDoctors: doctors.filter((d)=> d.department === "Ophthalmology").length },
        { icon: Bone, iconCol: "#8519FF", iconBg: "bg-[#FEE2FF]", department: "Orthopedics", availableDoctors: doctors.filter((d)=> d.department === "Orthopedics").length },
        { icon: Baby, iconCol: "#2B00FF", iconBg: "bg-[#ECE6FF]", department: "OB-GYN", availableDoctors: doctors.filter((d)=> d.department === "OB-GYN").length },
        { icon: Stethoscope, iconCol: "#F9A836", iconBg: "bg-[#FFF5E8]", department: "Pediatrics", availableDoctors: doctors.filter((d)=> d.department === "Pediatrics").length },
    ];
    
    return (
    <div>
        <h1 className="text-[18px] fontOutfit font-medium">What brings you in today?</h1>
        
        <div className="w-full relative pt-3 pb-6">
            <span className="absolute left-3 top-8 -translate-y-1/2 text-gray-400">
            <Search size={20} />
            </span>
            
            <Input placeholder="Search symptoms, department or condition..." className="pl-10 w-full" type="text" />
        </div>
        
        <h1 className="fontOutfit font-medium text-[18px] mb-4">Or Select a department</h1>
        
        {loading ? <p>Loading Doctors...</p> 
        : error ? <p>{error}</p>
        : <div className="grid grid-cols-2 gap-5">
            {departments.map((dep, idx) => (
                <Card key={idx} {...dep} isSelected={selectedDep === dep.department} onClick={() => {
                    setSelectedDep(dep.department);
                    onSelect(dep.department);
                }} /> 
                ))}
        </div>
        }

    </div>
  );
}
