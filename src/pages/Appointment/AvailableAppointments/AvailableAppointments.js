import { format } from "date-fns";
import React, { useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import AppointmentOption from "./AppointmentOption";
import { useQuery } from "@tanstack/react-query";

const AvailableAppointments = ({ selectedDate }) => {
  //   const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, "PP");

  const { data: appointmentOptions = [] } = useQuery({
    queryKey: ["appointmentOptions", date],
    // queryFn: () =>
    //   fetch("http://localhost:5000/appointmentOptions").then((res) =>
    //     res.json()
    //   ),

    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/appointmentOptions?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });

  //   useEffect(() => {
  //     fetch("http://localhost:5000/appointmentOptions")
  //       .then((res) => res.json())
  //       .then((data) => setAppointmentOptions(data));
  //   }, []);

  return (
    <section>
      <h3 className="md:text-2xl text-lg my-10 text-center font-semibold">
        Available services on{" "}
        <span className="text-primary">{format(selectedDate, "PP")}</span>
      </h3>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:container lg:mx-auto my-16 md:mx-10 mx-10">
        {appointmentOptions.map((option) => (
          <AppointmentOption
            key={option._id}
            appointmentOption={option}
            setTreatment={setTreatment}
          ></AppointmentOption>
        ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          setTreatment={setTreatment}
          selectedDate={selectedDate}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointments;
