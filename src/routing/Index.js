import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import AboutUs from "../pages/aboutUs/AboutUs";
import Blog from "../pages/blogs/Blog";
import Contact from "../pages/contact/Contact";
import HowWeWork from "../pages/howWeWork/HowWeWork";
import JoinForm from "../pages/joinForm/JoinForm";
import Journey from "../pages/journey/Journey";
import Policy from "../pages/policy/Policy";
import Refund from "../pages/refund/Refund";
import Testimonial from "../pages/testimonial/Testimonial";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import SingleBlog from "../pages/blogs/SingleBlog";

const Index = () => {
  return (
    <div>
     
      <BrowserRouter>
      <Header/>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/Singleblog" element={<SingleBlog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/how-we-work" element={<HowWeWork />} />
          <Route path="/join-us" element={<JoinForm />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/policies" element={<Policy />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/testimonials" element={<Testimonial />} />
        </Routes>

        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default Index;
