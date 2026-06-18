import AppLayout from '../Layout/AppLayout'
import Image from "../assets/Frame 2085662224.svg"
import WhyMediBridge from '../Components/HomePageComponents/WhyMediBridge'
import Explore from '../Components/HomePageComponents/Explore'
import Patientstory from "../Components/HomePageComponents/Patientstories"
import FAQ from '../Components/HomePageComponents/FAQ'
import NewsLetter from "../Components/HomePageComponents/NewsLetter"
import Button from '../Components/Button'

export default function HomePage() {
  return (
    <AppLayout headerProps={{
      className : "bg-[#28574E] h-[720px] relative",
      heading : "Healthcare That Connects You",
      subHeading : "Book appointments, talk with trusted doctors, receive support, and get instant AI health guidance in one calm experience.",
      image : Image,
      others : <div className='flex items-center gap-5 fontOutfit'>
      <Button type="button" content="Book Appointment" variant="secondary" width="w-[236px]" />
      <Button type="button" content="Chat With AI Support"  variant="primaryWBorder"  width="w-[236px]"
      className='bandGreen' />
      </div>
    }}>
      <WhyMediBridge />
      <Explore />
      <Patientstory />
      <FAQ />
      <NewsLetter />
    </AppLayout>
  )
}