import React from "react";

const TestimonialCard = ({ review }) => {
  const { name, img, review: userReview, location } = review;
  return (
    <div>
      <div className="p-3 shadow-xl">
        <div className="card-body">
          <div className="flex items-center gap-5 mb-6">
            <div className="avatar">
              <div className="w-20 h-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={img} alt="" />
              </div>
            </div>
            <div>
              <h5 className="text-lg font-bold">{name}</h5>
              <p>{location}</p>
            </div>
          </div>
          <p>{userReview}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
