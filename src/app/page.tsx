'use client'

import Image from "next/image";
import PartnerPic from "./images/jones_erwin.webp"
//import './styles.scss'
//import {Button} from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link} from "@nextui-org/react";
import {Spacer} from "@nextui-org/react";

export default function Home() {
  return (
    <main className="siteTheme">
      <Card className="flex-row flex-wrap h-fit justify-center shadow-none rounded-none">
         <div className="shrink-0 text-center">
          <Image
            className="fill rounded-none border border-[#D28F25] shrink-0"
            priority={true}
            height={300}
            width={300}
            alt="NextUI hero Image"
            src={PartnerPic}
          />
              <span className="text-burntUmber">
                Brent Erwin and Giles Jones
              </span>
         </div>
            
         
        <Spacer x={0} />
        <CardBody className="flex-none min-w-[300px] max-w-[420px]">
          
            <p className="text-burntUmber">
                JONES & ERWIN, P.C. is a general practice law firm located in  historic downtown Calhoun, Georgia. We represent clients in the Northwest Georgia area (primarily practicing in Gordon, Bartow, Murray, and Whitfield Counties). The firm was founded in 1980 by the late Howard W. Jones (1943 - 2002) and now is composed of two attorneys, Giles Jones and Brent Erwin, as well as a very knowledgeable and experienced staff. 
              </p>
       
        </CardBody>
      </Card>
    </main>
  )
}
