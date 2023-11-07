'use client'

import {Accordion, AccordionItem} from "@nextui-org/react";
import {Divider} from "@nextui-org/react";

import useMediaQuery from "../components/use-media-query";



export default function AreasOfPractice() {
  const defaultContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  const isActive = useMediaQuery('(max-width: 640px)');
  const activeVariant = isActive ? "splitted" : "shadow";
  console.log('is super active', activeVariant);


  return (
    <main>
      <div className="w-[93%] sm:container mx-auto grid grid-cols-1 md:max-w-5xl">
        <h2 className="text-xl lg:text-3xl text-burntUmber leading-relaxed animate-fade-right animate-once animate-ease-linear sm:max-w-3xl pr-30px">
          Though we represent clients on a wide range of matters, our practice is primarily focused on the following areas of law:
        </h2>
        <Divider className="my-4 w-3/5 bg-gradient-to-r from-red-900 to-white sm:max-w-3xl"/>
        <div className="accordion-cont sm:border-b sm:border-gray">
          <Accordion variant={isActive} className="">
            <AccordionItem key="1" aria-label="Accordion 1" title="Family Law">
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="Criminal Defense">
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title="Real Estate">
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="4" aria-label="Accordion 4" title="Personal Injury">
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="5" aria-label="Accordion 5" title="General Litigation">
              {defaultContent}
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </main>
  )
}