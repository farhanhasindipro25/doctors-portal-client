import React from "react";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import quote from "../../../assets/icons/quote.svg";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Harry",
      img: people1,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "California",
    },
    {
      _id: 2,
      name: "Florence Watson",
      img: people2,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "Boston",
    },
    {
      _id: 3,
      name: "Angela Jones",
      img: people3,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "Los Angeles",
    },
  ];
  return (
    <section className="mb-16">
      <div className="flex justify-between">
        <div className="lg:ml-48 md:ml-6 ml-6">
          <h4 className="text-xl text-primary font-bold">Testimonials</h4>
          <h2 className="text-lg font-semibold md:text-4xl">
            What our patients say!
          </h2>
        </div>
        <figure>
          <img src={quote} className="w-20 lg:w-48 lg:mr-44 md:mr-6 mr-6" alt="" />
        </figure>
      </div>
      <div className="grid gap-6 lg:container lg:mx-auto md:mx-6 mx-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <TestimonialCard key={review._id} review={review}></TestimonialCard>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
