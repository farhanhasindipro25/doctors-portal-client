import React from "react";
import treatment from "../../../assets/images/treatment.png";
import PrimaryButton from "../../../Buttons/PrimaryButton/PrimaryButton";

const TermsSection = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-content lg:gap-32 flex-col lg:flex-row">
          <img
            src={treatment}
            className="lg:max-w-md md:max-w-xl rounded-lg shadow-2xl"
            alt=""
          />
          <div className="lg:w-1/2 md:mx-10 md:mt-10">
            <h1 className="lg:text-5xl text-3xl font-bold lg:text-start text-center">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6 lg:text-start md:text-start text-center">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <div className="flex md:justify-center lg:justify-start justify-center">
              <PrimaryButton>GET STARTED</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsSection;
