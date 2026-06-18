import { useState } from "react";
import api from "../API"; 
import type { RegisterInput } from "../Validation/registerSchema";

export function useVerifyUser() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<any>(null);

  const verifyUser = async (formData: RegisterInput) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await api.post("/api/auth/verifyUser", formData);
      setSuccess(response.data);
      return response.data;
    } catch (err: any) {
      setError(err.response?.data?.error || "ID verification failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { verifyUser, loading, error, success };
}
