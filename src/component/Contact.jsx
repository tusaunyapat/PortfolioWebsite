import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";

function ContactItem({ icon, name, details, bgcolor }) {
  return (
    <div
      className="flex flex-col text-white w-full sm:w-1/2 md:w-1/4 lg:w-1/4 px-6 py-12 items-center text-center"
      style={{ backgroundColor: bgcolor }}
    >
      <p className="py-4 text-2xl">{icon}</p>
      <p className="py-2 font-bold">{name}</p>
      <p className="py-2">{details}</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="flex flex-col items-stretch justify-center">
      <div className="flex flex-wrap items-stretch w-full  justify-center">
        <ContactItem
          icon={<IoHomeOutline />}
          name="Address"
          details="Phasi-Charoen, Bangkok, Thailand"
          bgcolor="#003152"
        />
        <ContactItem
          icon={<TfiEmail />}
          name="Email"
          details="aunyapat.nit@gmail.com"
          bgcolor="#00406b"
        />
        <ContactItem
          icon={<BsTelephone />}
          name="phone number"
          details="+66 0959501622"
          bgcolor="#005085"
        />
        <ContactItem
          icon={<FaGithub />}
          name="Github"
          details="gthub/tusaunyapat"
          bgcolor="#005f9e"
        />
      </div>
    </div>
  );
}

export default Contact;
