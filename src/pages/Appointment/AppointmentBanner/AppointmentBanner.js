import React from "react";
import appointment from "../../../assets/images/appointment.png";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <header>
      <div
        className="hero"
        style={{
          backgroundImage: `url(${appointment})`,
          backgroundSize: "cover",
        }}
      >
        <div className="hero-content flex flex-col lg:flex-row">
          {/* <img
            src={chair}
            className="lg:max-w-xl lg:block md:hidden hidden rounded-lg shadow-2xl"
            alt=""
          /> */}
          <div>
            <h2 className="text-5xl w-9/12 font-bold text-secondary">
              Pick your desired date
            </h2>
          </div>
          <div className="bg-white p-3 rounded-3xl">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
