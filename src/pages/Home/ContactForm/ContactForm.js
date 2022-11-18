import React from "react";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../Buttons/PrimaryButton/PrimaryButton";

const ContactForm = () => {
  return (
    <section>
      <div style={{ background: `url(${appointment})` }}>
        <div className="text-center">
          <h4 className="text-lg text-primary font-bold pt-16">Contact Us</h4>
          <h2 className="text-3xl text-white font-normal pb-14">
            Stay connected with us
          </h2>
        </div>
        <form className="pb-16">
          <div className="flex justify-center mb-6">
            <input
              type="email"
              placeholder="Email Address"
              className="input input-bordered input-primary lg:w-1/3 md:w-1/2 w-9/12"
            />
          </div>
          <div className="flex justify-center mb-6">
            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered input-primary lg:w-1/3 md:w-1/2 w-9/12"
            />
          </div>
          <div className="flex justify-center mb-6">
            <textarea
              className="textarea textarea-primary lg:w-4/12 md:w-1/2 w-9/12"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <PrimaryButton>SUBMIT</PrimaryButton>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
