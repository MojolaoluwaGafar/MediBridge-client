import RegisterLayout from '../../Layout/RegisterLayout'
import image from "../../assets/identityForm.svg"
import Vector from "../../assets/Container.svg"
import Input from '../../Components/Input'
import Button from '../../Components/Button'
import { FaArrowRight } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, type RegisterInput } from '../../Validation/registerSchema'
import { useVerifyUser } from '../../Hooks/useVerifyUser'
import { showToast } from "../../utils/toastHelper";

export default function SignUp() {
    const { register, handleSubmit, formState : { errors }, reset } = useForm<RegisterInput>({
        resolver : zodResolver(registerSchema)
    })

    const { verifyUser, loading, error, success} = useVerifyUser()

    const navigate = useNavigate()

    const submit = async (formData : RegisterInput)=>{
        try {
            const result = await verifyUser(formData);
            localStorage.setItem("verificationToken", result.token)
            console.log("ID Verification success :", result);
            showToast(success.message || "Verification code sent to your email", "success")
            reset()
            navigate("/verifySignUp")
        } catch (err) {
            console.error("ID Verification error:", err, error)
            showToast(error || "ID Verification failed", "error")
        }     
    }
  return (
    <RegisterLayout image={image} subHeading="Manage appointments, view medical information, chat with your care team, and receive support in one place." heading="Access your care anytime"
    ul={<ul className="flex flex-col gap-3">
        <li className="flex gap-4 font-semibold"><img src={Vector} alt="" />Book and manage appointments</li>
        <li className="flex gap-4 font-semibold"><img src={Vector} alt="" />Access visit history</li>
        <li className="flex gap-4 font-semibold"><img src={Vector} alt="" />Message your healthcare team</li>
        <li className="flex gap-4 font-semibold"><img src={Vector} alt="" />AI support assistance</li>
        <li className="flex gap-4 font-semibold"><img src={Vector} alt="" />Appointment reminders</li>
    </ul>}
    >
        <form onSubmit={handleSubmit(submit)} className='border border-[#D1D5D5] rounded-xl w-full p-8'>
            <div className='flex items-center justify-between'>
                <p className='flex items-center gap-2'><span className='h-8 w-8 rounded-full flex items-center justify-center bg-[#28574E] text-white'>1</span> Identity</p>
                <span className='bg-[#E1E3E3] w-[45.5px] h-0.5'></span>
                <p className='flex items-center gap-2'><span className='h-8 w-8 rounded-full flex items-center justify-center bg-[#E1E3E3] text-[#3E3B3B]'>2</span> OTP</p>
                <span className='bg-[#E1E3E3] w-[45.5px] h-0.5'></span>
                <p className='flex items-center gap-2'><span className='h-8 w-8 rounded-full flex items-center justify-center bg-[#E1E3E3] text-[#3E3B3B]'>3</span> Set Up</p>
            </div>
            <h1 className="text-[28px] font-semibold pt-5">Activate your account</h1>
            <p className="pb-5 text-[#757575] text-[18px]">Verify your hospital details to set up portal access.</p>

            <label className="py-2 font-semibold" htmlFor="id">Hospital Patient ID / User ID</label>
            <Input {...register("UserId")} id='id' className='my-3' type='text' placeholder='Enter your Patient ID' />
            {errors.UserId && <p className="text-red-500">{errors.UserId.message}</p>}


            <label className="py-2 font-semibold" htmlFor="email">Email Address</label>
            <Input {...register("Email")} id='email' className='my-3' type='email' placeholder='Enter your email address' />
            {errors.Email && <p className='text-red-500'>{errors.Email.message}</p>}


            <label className="py-2 font-semibold" htmlFor="number">Registered Phone Number Address</label>
            <Input {...register("RegisteredNumber")} id='number' className='my-3' type='tel' placeholder='(+234) 000-0000' />
            {errors.RegisteredNumber && <p className='text-red-500'>{errors.RegisteredNumber.message}</p>}

            <Button className='my-4' type='submit' content={ loading ? "Verifying..." : <span className='flex items-center gap-2 justify-center'>Verify identity<FaArrowRight /></span>} />

            <h1 className="text-center text-[#757575] text-[18px]">Already have an account? <Link to="/login"><span className='text-[#28574E]'>Log In</span></Link></h1>


            <div className='bg-[#D1D5D5] h-[0.3px] w-full my-8'></div>

            <h1 className="text-center text-[18px] text-[#6F797A]">Need help with your Patient ID? <Link to=""><span className="text-[#00454B] font-semibold">Contact Support</span></Link></h1>


        </form>
    </RegisterLayout>
    )
}