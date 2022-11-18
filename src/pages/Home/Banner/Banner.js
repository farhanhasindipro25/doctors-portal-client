import React from "react";
import chair from "../../../assets/images/chair.png";
import PrimaryButton from "../../../Buttons/PrimaryButton/PrimaryButton";

const Banner = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" alt="" />
        <div>
          <h1 className="lg:text-5xl text-3xl font-bold lg:text-start md:text-center text-center">
            Your New Smile Starts Here
          </h1>
          <p className="py-6 lg:text-start md:text-center text-center md:w-9/12 md:mx-auto lg:mx-0">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="flex md:justify-center lg:justify-start justify-center">
            <PrimaryButton>GET STARTED</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
