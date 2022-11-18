import React from "react";

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
  const { name, slots } = appointmentOption;

  return (
    <div>
      <div className="card shadow-lg">
        <div className="card-body text-center">
          <h2 className="text-secondary font-bold text-xl">{name}</h2>
          <p>{slots.length > 0 ? slots[0] : "No slots available anymore"}</p>
          <p>
            {slots.length} {slots.length > 1 ? "slots" : "slot"} available
          </p>
          <div className="card-actions flex justify-center">
            <label
              disabled={slots.length === 0}
              htmlFor="booking-modal"
              className="text-white btn btn-primary bg-gradient-to-r from-primary to-secondary"
              onClick={() => setTreatment(appointmentOption)}
            >
              BOOK APPOINTMENT
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
