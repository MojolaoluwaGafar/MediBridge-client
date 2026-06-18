import AuthLayout from '../../Layout/AuthLayout'
import Input from '../../Components/Input'
import Button from '../../Components/Button'
import { Link } from 'react-router'

export default function ForgotPassword() {
  return (
    <AuthLayout heading="Forgot Your Password?" subHeading="We’ll send a 6-digit verification code to your email to reset your password.">
        <form>
            <label className="text-[18px] font-semibold" htmlFor="email">Email Address</label>
            <Input className='my-2' id='email' type='email' placeholder='Enter your email address' />

            <Button className='mt-8 mb-2' type="submit" content="Send Code" />

            <Link to=""><p className="text-center pt-3">Remember your password <span className="text-[#28574E] font-semibold">Log in</span></p></Link>
        </form>
    </AuthLayout>
)
}