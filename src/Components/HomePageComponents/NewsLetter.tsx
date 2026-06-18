import Button from '../Button'

export default function NewsLetter() {
  return (
    <div className='w-full pt-20 pb-25 px-15 bg-[#F5F5F5]'>
        <div className='container mx-auto flex flex-col items-center gap-5 bg-[#28574E] rounded-4xl py-10'>
           
            <h1 className='fontLibre text-white font-bold text-[34px]'>Stay informed on your health</h1>
            <p className='text-[#DAD8D8] text-[18px] text-center w-175'>Get the latest health tips, medical news, and app updates delivered to your inbox once a week.</p>

            <div className='flex items-center gap-3'>
                <input className='border border-[#FFFFFF] text-white bg-transparent rounded-lg px-3 w-80.5 h-13.5' placeholder='Enter your email address' type="email" />
                <Button variant='secondary' content="Subscribe" type="button" width='w-[174px]' />
            </div>

        </div>
    </div>
  )
}