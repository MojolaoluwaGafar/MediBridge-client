import { useState } from "react";
import api from "../API";
import type { VerifyCodeInput } from "../Validation/registerSchema";

export function useVerifyCode() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<any>(null);

  const verifyCode = async (formData: VerifyCodeInput) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const token = localStorage.getItem("verificationToken")
      const response = await api.post("/api/auth/verifyCode", formData, {
        headers : { Authorization : `Bearer ${token}`}
      });
      setSuccess(response.data);
      return response.data;
    } catch (err: any) {
      setError(err.response?.data?.error || "OTP Verification failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { verifyCode, loading, error, success };
}
