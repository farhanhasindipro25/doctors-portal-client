import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../Buttons/PrimaryButton/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section className="lg:mt-32 md:mt-12 mb-16">
      <div className="hero" style={{ background: `url(${appointment})` }}>
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctor}
            className="lg:w-1/2 rounded-lg -mt-36 hidden lg:block -mb-4"
            alt=""
          />
          <div className="md:p-6 p-6">
            <h4 className="text-lg text-primary font-semibold">Appointment</h4>
            <h1 className="text-4xl font-bold text-white">
              Make an appointment today!
            </h1>
            <p className="py-6 text-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <PrimaryButton>MAKE APPOINTMENT</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
