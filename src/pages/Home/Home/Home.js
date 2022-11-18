import React from "react";
import Banner from "../Banner/Banner";
import ContactForm from "../ContactForm/ContactForm";
import InfoCards from "../InfoCards/InfoCards";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Services from "../Services/Services";
import TermsSection from "../TermsSection/TermsSection";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <TermsSection></TermsSection>
      <MakeAppointment></MakeAppointment>
      <Testimonials></Testimonials>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Home;
