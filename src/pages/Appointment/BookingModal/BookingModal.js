import { format } from "date-fns";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider";

const BookingModal = ({ treatment, setTreatment, selectedDate }) => {
  const { name: treatmentName, slots } = treatment;
  const date = format(selectedDate, "PP");
  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const slot = form.slot.value;

    const booking = {
      appointmentDate: date,
      treatment: treatmentName,
      patient: name,
      slot,
      email,
      phone,
    };

    // console.log(date, name, email, phone, slot, booking);
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setTreatment(null);
          toast.success("Your booking has been confirmed!");
        }
      });
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-6 top-6"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Appointment for {treatmentName}</h3>
          <form className="mt-10" onSubmit={handleBooking}>
            <input
              type="text"
              disabled
              value={date}
              className="input input-bordered input-primary w-full my-2"
            />
            <select name="slot" className="select select-primary w-full">
              <option disabled>Choose your preferred time slot.</option>
              {slots.map((slot, i) => (
                <option value={slot} key={i}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              disabled
              placeholder="Full Name"
              className="input input-bordered input-primary w-full my-2"
            />
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              disabled
              placeholder="Email Address"
              className="input input-bordered input-primary w-full my-2"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered input-primary w-full my-2"
            />
            <div className="flex justify-center">
              <button className="btn bnt-accent text-white w-full mt-2">
                CONFIRM BOOKING
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
