import api from "../index";

import type {
  IBookAppointmentPayload,
  IBookAppointmentRes,
  IGetAppointmentsRes,
} from "../../types/apiReqRes";

export const appointmentService = {
  async getAppointments(): Promise<IGetAppointmentsRes> {
    const { data } = await api.get<IGetAppointmentsRes>(
      "/api/appointments"
    );

    return data;
  },

  async bookAppointment(
    payload: IBookAppointmentPayload
  ): Promise<IBookAppointmentRes> {
    const { data } = await api.post<IBookAppointmentRes>(
      "/api/bookAppointment",
      payload
    );

    return data;
  },

  // async cancelAppointment(id: string) {
  //   const { data } = await api.patch(
  //     `/api/appointments/${id}/cancel`
  //   );
  //
  //   return data;
  // },

  // async rescheduleAppointment(payload: IRescheduleAppointmentPayload) {
  //   const { data } = await api.patch<IRescheduleAppointmentRes>(
  //     `/api/appointments/${payload.id}/reschedule`,
  //     payload
  //   );
  //
  //   return data;
  // },
};