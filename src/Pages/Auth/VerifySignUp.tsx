import RegisterLayout from '../../Layout/RegisterLayout'
import Frame from "../../assets/Frame 2121455033.svg"
import Input from '../../Components/Input'
import Button from '../../Components/Button'
import { Link, useNavigate } from 'react-router'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { verifyCodeSchema, type VerifyCodeInput } from '../../Validation/registerSchema'
import { useVerifyCode } from '../../Hooks/useVerifyOTP'
import { showToast } from "../../utils/toastHelper";

export default function VerifySignUp() {
    const { register, handleSubmit, formState : { errors }, reset} = useForm<VerifyCodeInput>({
        resolver : zodResolver(verifyCodeSchema)
    })
    const { verifyCode, loading, error, success} = useVerifyCode()
    const navigate = useNavigate()

    const submit = async( formData : VerifyCodeInput)=>{
        try {
            const result = await verifyCode(formData);
            console.log("Code verification success :", result);
            showToast(success.message || "Code verifiied successfully", "success");
            reset()
            navigate("/setPassword")
        } catch (err) {
            console.error("Code verification error :", err, error)
            showToast(error || "Failed to verify code", "error");
        }
    }


  return (
    <RegisterLayout heading='Securing your healthcare journey.' subHeading='We use multi-factor authentication to ensure your  medical records and personal data remain private and protected at every step.' image={Frame}>
    <form onSubmit={handleSubmit(submit)} className='border border-[#D1D5D5] rounded-xl  w-full p-8 fontOutfit'>
        <div className='flex items-center justify-between'>
            <p className='flex items-center gap-2 text-[#28574E]'><span className='h-8 w-8 rounded-full flex items-center justify-center bg-[#28574E] text-white'>1</span> Identity</p>
            <span className='bg-[#28574E] w-[45.5px] h-0.5'></span>
            <p className='flex items-center gap-2 text-[#28574E]'><span className='h-8 w-8 rounded-full flex items-center justify-center bg-[#28574E] text-white'>2</span> OTP</p>
            <span className='bg-[#E1E3E3] w-[45.5px] h-0.5'></span>
            <p className='flex items-center gap-2'><span className='h-8 w-8 rounded-full flex items-center justify-center bg-[#E1E3E3] text-[#3E3B3B]'>3</span> Set Up</p>
        </div>
        <h1 className="text-[28px] font-semibold pt-5">Verify your account</h1>
        <p className="pb-5 text-[#757575] text-[18px]">We’ll send a 6-digit verification code to your email to verify your account.</p>

        <div className="flex gap-5 py-7">
            {Array.from({ length : 6}, (_,index)=>{
               return <Input {...register("code")} key={index}
                type='text' id={`otp- ${index}`}
                inputMode="numeric" pattern="\d"
                maxLength={1} className="flex items-center justify-center text-center border-[1.5px] border-[#D9D9D9] w-11 h-11 text-[18px] font-semibold" />
            })}
        </div>
        {errors.code && <p className='text-red-500 text-center'>{errors.code.message}</p>}
        
        <p className='text-center text-[#757575] pb-5'>Code expires in 5:00</p>

        <Button className='my-8' type='submit' content={loading ? "Verifying..." : "Verify Code"} />
        <p className='text-center'>Didn't receive the code? <Link to=""><span className='text-[#28574E] font-semibold'>Resend code</span></Link></p>

    </form>
    </RegisterLayout>
)
}