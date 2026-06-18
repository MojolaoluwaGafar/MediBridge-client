import { useState } from "react";
import api from "../API"; 
import type { SetPasswordInput } from "../Validation/registerSchema";

export function useSetPassword() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<any>(null);

  const setPassword = async (formData: SetPasswordInput) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const token = localStorage.getItem("verificationToken")
      const response = await api.post("/api/auth/setPassword", formData, {
        headers : { Authorization : `Bearer ${token}`}
      });
      setSuccess(response.data);
      return response.data;
    } catch (err: any) {
      setError(err.response?.data?.error || "Failed To set password");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { setPassword, loading, error, success };
}
