import React, { useState } from "react";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.message) newErrors.message = "Message is required.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      console.log("Form Data Submitted:", formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } else {
      setErrors(formErrors);
    }
  };

  return (
<div id="contact" className="min-h-screen bg-[#0f0f0f] text-white flex flex-col lg:flex-row items-center justify-center px-8 space-y-12 lg:space-y-0 lg:space-x-16 
  h-[150vh] lg:h-screen">
      <div className="flex flex-col items-center space-y-8">
        <img
          src="email2.jpg" 
          alt="Profile"
          className="w-80 h-80 rounded-lg object-cover"
        />

    
        <div className="flex space-x-6">
          <a
            href="https://github.com/Akshat2427" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-white hover:text-[#f1c40f] transition-colors"
          >
            <FaGithub />
          </a>
          <a
              href="mailto:vashishtakshat3@gmail.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-white hover:text-[#1DA1F2] transition-colors"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/akshat-24-vashisht"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-white hover:text-[#0077b5] transition-colors"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Right Side: Contact Form */}
      <div className="w-full max-w-lg bg-[#1c1c1c] p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-mono mb-6">Get in Touch</h2>

        {submitted && (
          <div className="mb-4 text-green-400">
            Thank you! Your message has been sent.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-sm mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-[#2c2c2c] text-white focus:outline-none"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-[#2c2c2c] text-white focus:outline-none"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 rounded-md bg-[#2c2c2c] text-white focus:outline-none"
              placeholder="Enter your message"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#f1c40f] hover:bg-[#d4a807] text-black font-semibold py-2 px-4 rounded-md transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
