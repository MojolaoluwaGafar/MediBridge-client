import AuthLayout from '../../Layout/AuthLayout'
import Input from '../../Components/Input'
import { Link } from 'react-router'
import Button from '../../Components/Button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router'
import { loginSchema , type loginValues } from '../../Validation/registerSchema'

export default function Login() {
    const navigate = useNavigate()

    const {register, handleSubmit, formState : { errors }} = useForm<loginValues>({
        resolver : zodResolver(loginSchema)
    })

    const submit = (data : loginValues)=>{
        console.log("Form submitted :", data);
        navigate("/")
    }

  return (
    <AuthLayout heading="Welcome Back" subHeading='Access your healthcare records, appointments, and care team.'>
        <form onSubmit={handleSubmit(submit)}>

            <label className="text-[18px] font-semibold fontOutfit" htmlFor="userId">Hospital Patient ID / User ID</label>

            <Input {...register("userId")} className='my-2' placeholder='Enter your Patient ID' type="text" id="userId"  />

            {errors.userId && <p className='text-red-500 font-semibold'>{errors.userId.message}</p>}
            
            <label className="text-[18px] font-semibold fontOutfit" htmlFor="password">Password</label>

            <Input {...register("password")} className='my-2' placeholder='Enter your password' type="password" id="password"  />
            
            {errors.password && <p className='text-red-500 font-semibold'>{errors.password.message}</p>}


            <Link to=""><p className="text-[#28574E] text-[18px] py-1 fontOutfit">Forgot password?</p></Link>

            <Button className='mt-8 mb-2' type="submit" content="Sign in" />

            <Link to="/signUp"><p className="text-center pt-3 fontOutfit">First time here? <span className="text-[#28574E] font-semibold">Activate Account</span></p></Link>
        </form>
    </AuthLayout>
    )
}