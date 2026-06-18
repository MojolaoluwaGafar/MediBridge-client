import RegisterLayout from '../../Layout/RegisterLayout'
import Input from '../../Components/Input'
import { Link, useNavigate } from 'react-router'
import Button from '../../Components/Button'
import Image from "../../assets/Frame 2121455033 (1).svg"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { setPasswordSchema, type SetPasswordInput } from '../../Validation/registerSchema'
import { useSetPassword } from '../../Hooks/useSetPassword'
import { showToast } from '../../utils/toastHelper'

export default function SetPassword() {
    const { register, handleSubmit, formState : { errors}, reset} = useForm<SetPasswordInput>({
        resolver : zodResolver(setPasswordSchema)
    })

    const { setPassword, loading, error, success } = useSetPassword()
    
    const navigate = useNavigate()

    const submit = async(formData : SetPasswordInput)=>{
        try {
            const result = await setPassword(formData);
            console.log("Password set successfully :", result);
            localStorage.setItem("authenticationToken", result.token)
            showToast(success.message || "Password set successfully", "success");
            reset()
            navigate("/patientDashboard")
        } catch (err) {
            console.error("Set Password error:", err, error)
            showToast(error || "Failed to set password", "error");
        }
    }

  return (
    <RegisterLayout heading='Secure Your Access' subHeading='Your health data is protected with industry-leading encryption. Step 3 of 3: finalise your security credentials.' image={Image}>
        <form onSubmit={handleSubmit(submit)} className='border border-[#D1D5D5] rounded-xl w-full p-8'>
            <div className='flex items-center justify-between'>
            <p className='flex items-center gap-2 text-[#28574E]'><span className='h-8 w-8 rounded-full flex items-center justify-center bg-[#28574E] text-white'>1</span> Identity</p>
            <span className='bg-[#28574E] w-[45.5px] h-0.5'></span>
            <p className='flex items-center gap-2 text-[#28574E]'><span className='h-8 w-8 rounded-full flex items-center justify-center bg-[#28574E] text-white'>2</span> OTP</p>
            <span className='bg-[#E1E3E3] w-[45.5px] h-0.5'></span>
            <p className='flex items-center gap-2 text-[#28574E]'><span className='h-8 w-8 rounded-full flex items-center justify-center bg-[#28574E] text-white'>3</span> Set Up</p>
            </div>
        <h1 className="text-[28px] font-semibold pt-5">Set Up Password</h1>
        <p className="pb-5 text-[#757575] text-[18px]">finalise your security credentials.</p>

        <label className="text-[18px] font-semibold" htmlFor="newPassword">Password</label>
        <Input {...register("newPassword")} id='newPassword' type='password' placeholder='Enter your new password' className='my-2'  />
        {errors.newPassword && <p className='text-red-500'>{errors.newPassword.message}</p>}
        <label  className="text-[18px] font-semibold" htmlFor="confirmPassword">Confirm Password</label>
        <Input {...register("confirmPassword")} id='confirmPassword' type='password' placeholder='Confirm your password' className='my-2'  />
        {errors.confirmPassword && <p className='text-red-500'>{errors.confirmPassword.message}</p>}

        <div className='flex gap-2 items-center py-2'>
            <input {...register("terms")} className='h-5 w-6' id='checkBox' type="checkbox" />
            <label className='text-[18px]' htmlFor="checkBox">I agree to the <Link to=""><span className='text-[#28574E]'>Terms of Service</span></Link> and <Link to=""><span className='text-[#28574E]'>Privacy Policy</span></Link></label>
        </div>
        {errors.terms && <p className='text-red-500'>{errors.terms.message}</p>}

        <Button className='my-5' type='submit' content={loading ? "Activating..." : "Activate Account"}
          disabled={loading} />

        <p className='pt-8 text-center'>Need help? <Link to=""><span className='text-[#28574E] font-semibold'>Contact Support</span></Link></p>
        </form>
    </RegisterLayout>
    )
}