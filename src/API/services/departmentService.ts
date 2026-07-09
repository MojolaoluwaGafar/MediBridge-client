import api from "../index";
import type { IDepartment } from "../../types/department";
import type {
//   IGetDepartmentsRes,
  IGetDepartmentRes,
} from "../../types/apiReqRes";

export const departmentService = {
  async getDepartments(): Promise<IDepartment[]> {
    const { data } = await api.get<IDepartment[]>(
      "/api/departments"
    );

    return data;
  },

  async getDepartment(id: string): Promise<IGetDepartmentRes> {
    const { data } = await api.get<IGetDepartmentRes>(
      `/api/departments/${id}`
    );

    return data;
  },
};