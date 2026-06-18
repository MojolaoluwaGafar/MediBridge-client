import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

type Props = {
    children : React.ReactNode,
    headerProps? : {
        className?: string,
        heading? : string,
        subHeading? : string,
        image? : string,
        others?: React.ReactNode
    }
}

export default function AppLayout({children, headerProps}: Props) {
  return (
    <div>
        <Header {...headerProps} />
        <main>
            {children}
        </main>

        <Footer />
    </div>
  )
}