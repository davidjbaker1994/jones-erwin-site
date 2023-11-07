'use client'

import ContactUsForm from "../components/contact-us-form"
import {Card} from "@nextui-org/react";



export default function ContactUs() {
  return(
    <main>
      <Card
        isBlurred
        className="p-4 bg-gradient-to-r mx-auto bg-gray-600 rounded min-w-[360px] max-w-[600px]">
          <ContactUsForm />
       </Card>
    </main>
  )
}
