"use client"

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";



const ContactTextArea = ({ row, placeholder, name, defaultValue }) => {
  
  return (
    <>
      <div className="mb-6">
        <textarea
          rows={row}
          placeholder={placeholder}
          name={name}
          className="border-[f0f0f0] w-full resize-none rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
          defaultValue={defaultValue}
          required
        />
      </div>
    </>
  );
};

const ContactInputBox = ({ type, placeholder, name }) => {
  return (
    <>
      <div className="mb-6">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className="border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
          required
        />
      </div>
    </>
  );
};


function ContactUsForm() {
  const [state, setState] = useState({
    modalOpen: false,
    errorModalOpen: false,
    isSending: false
  });
  
  const form = useRef();
  const serviceID = process.env.NEXT_EMAIL_SERVICE;
  const templateID = process.env.NEXT_EMAIL_TEMPLATE;
  const pk = process.env.NEXT_EMAIL_SERVICE;

  const sendEmail = (e) => {
    e.preventDefault();
    //console.log(form.current);
    setState({
      ...state,
      isSending: true
    });

    //Replace env variables before production build

    emailjs.sendForm(serviceID, templateID, form.current, pk)
      .then((result) => {
          console.log(result.text);
          setState({
            ...state,
            isSending: false,
            modalOpen: true
          });
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          setState({
            ...state,
            isSending: true,
            errorModalOpen: true
          });
      });
  };

  const handleClose = (e) => {
    //console.log("handle close", e);
    setState({
      ...state,
      modalOpen: false
    });
  }

  const handleErrorClose = (e) => {
    //console.log("handle close", e);
    setState({
      ...state,
      errorModalOpen: false
    });
  }

  return (
    <>
    <form ref={form} onSubmit={sendEmail}>
      <ContactInputBox
        type="text"
        name="user_name"
        placeholder="Your Name"
      />
      <ContactInputBox
        type="email"
        name="user_email"
        placeholder="Your Email"
      />
      <ContactInputBox
        type="text"
        name="phone"
        placeholder="Your Phone"
      />
      <ContactTextArea
        row="6"
        placeholder="Your Message"
        name="message"
        defaultValue=""
      />
      <div className="text-center">
        <Button
          backdrop="opaque" 
          type="submit"
          className="p-3 text-white transition border rounded border-primary bg-green-600 mx-auto"
          value="Send"
          isLoading={state.isSending}
          >
          {(state.isSending) ? <span>Sending...</span> : <span>Send Message</span>}
        </Button>
      </div>
    </form>
    <Modal isOpen={state.modalOpen} isDismissable={false} className="border border-slate-500" value="center" >
        <ModalContent className="bg-gray-400">
              <ModalHeader className="flex flex-col gap-1 text-green-700 shadow-lg">
                Thank You!
              </ModalHeader>
              <ModalBody className="shadow-inner shadow-lg">
                <p className="shadow-inner flex justify-center items-center h-[60px] w-[100%]"> 
                  Your message was sent successfully! 
                </p>
              </ModalBody>
              <ModalFooter className="p-1">
                <Button color="danger" variant="light" onPress={handleClose}>
                  Close
                </Button>
              </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal isOpen={state.errorModalOpen} isDismissable={false} className="bg-gray-400" value="center">
        <ModalContent>
              <ModalHeader className="flex flex-col gap-1 text-rose-600">Error Sending Message</ModalHeader>
              <ModalBody>
                <p className="shadow-inner flex justify-center items-center h-[60px] w-[100%]"> 
                  There has been an error sending your message. Please check your connection and try again.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={handleClose}>
                  Close
                </Button>
              </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ContactUsForm;

