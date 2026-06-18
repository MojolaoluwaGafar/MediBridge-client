import AuthLayout from '../../Layout/AuthLayout'
import Input from '../../Components/Input'
import Vector from "../../assets/carbon_security.svg"

export default function VerifyRecovery() {
  return (
    <AuthLayout>
        <div className="flex items-center justify-center mx-auto w-13.25 h-[52.18px] bg-[#DCF2EE] rounded-full mb-1">
            <img src={Vector} alt="" />
        </div>

        <form className='text-center'>
            <label htmlFor="otp" className="text-[18px] font-semibold py-3">OTP Verification</label>
            <p>Enter the 6-digit code sent to [user@email.com]</p>

            <div className="flex gap-5 py-7">
                {Array.from({ length : 6}, (_,index)=>{
                    return <Input key={index}
                    type='text' id={`otp- ${index}`}
                    inputMode="numeric" pattern="\d"
                    maxLength={1} className="flex items-center justify-center text-center border-[1.5px] border-[#D9D9D9] w-11 h-11 text-[18px] font-semibold" />
                })}
            </div>

            <p>Code expires in 15:00</p>

            <div className='flex justify-between items-center pt-8'>
                <button className='w-44.25 h-13.5 rounded-md text-[#28574E] border-[1.5px] border-[#28574E] cursor-pointer hover:bg-[#28574E] hover:text-white' type='submit'>Resend Code</button>
                <button className='w-44.25 h-13.5 rounded-md text-white cursor-pointer bg-[#28574E] hover:bg-[#4f8379] ' type='submit'>Verify Code</button>
            </div>
        </form>
    </AuthLayout>
    )
}