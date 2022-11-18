import React from "react";

const InfoCard = ({ card }) => {
  const { name, description, icon, bgClass } = card;
  return (
    <div>
      <div
        className={`card p-8 text-white bg-base-100 shadow-xl ${bgClass}`}
      >
        <figure>
          <img src={icon} alt="" className="h-10" />
        </figure>
        <div className="card-body md:text-center text-center">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
