import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { FaPaperPlane, FaTwitter, FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { Toaster, toast } from "react-hot-toast";
import emailjs from "emailjs-com";

const cards = [
  {
    title: "Work Together",
    message: "I like your work and want to work with you.",
    needsEmail: true,
    button: "Send",
  },
  {
    title: "Project Idea",
    message: "I have a project idea and want to discuss it.",
    needsEmail: true,
    button: "Send",
  },
  {
    title: "Freelance Help",
    message: "Can you help me with a freelance task?",
    needsEmail: true,
    button: "Send",
  },
  {
    title: "Hire Me",
    message: "I want to hire you for my company.",
    needsEmail: true,
    button: "Send",
    dummyEmail: "hr@company.com",
  },
  {
    title: "Just Hello",
    message: "That's a good portfolio Akshat, keep it up mate!",
    needsEmail: false,
    button: "Send",
  },
  {
    title: "Collab",
    message: "Let's collaborate on a startup.",
    needsEmail: true,
    button: "Send",
  },
  {
    title: "Feedback",
    message: "I have some feedback about your portfolio.",
    needsEmail: true,
    button: "Send",
  },
  {
    title: "Custom Message",
    message: "",
    needsEmail: true,
    custom: true,
    button: "Send",
  },
  {
    title: "Appreciation",
    message: "Your portfolio is inspiring!",
    needsEmail: false,
    button: "Send",
  },
];

// Fixed random-like card positions for desktop (like TechStack)
const cardPositions = [
  { top: "1vh", left: "2vw", rotate: "-8deg" },
  { top: "50vh", left: "4vw", rotate: "7deg" },
  { top: "25vh", left: "22vw", rotate: "-4deg" },
  { top: "1vh", left: "75vw", rotate: "6deg" },
  { top: "65vh", left: "70vw", rotate: "6deg" },
  { top: "35vh", left: "80vw", rotate: "-10deg" },
  { top: "60vh", left: "30vw", rotate: "-5deg" },
  { top: "45vh", left: "60vw", rotate: "-6deg" }, // custom (center)
  { top: "2vh", left: "35vw", rotate: "3deg" },
];

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;

const Contact = () => {
  const [formData, setFormData] = useState(
    cards.map(() => ({ email: "", message: "" }))
  );
  const [showEmailInput, setShowEmailInput] = useState(Array(cards.length).fill(false));
  const [customMessage, setCustomMessage] = useState("");
  const [showCustomForm, setShowCustomForm] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleInputChange = (idx, field, value) => {
    const updated = [...formData];
    updated[idx][field] = value;
    setFormData(updated);
  };

  const handleSend = async (idx) => {
    const card = cards[idx];

    // Only one email input open at a time
    setShowEmailInput(Array(cards.length).fill(false));

    // If needs email and not provided (except for custom), show input
    if (card.needsEmail && !formData[idx].email && !card.custom) {
      const updatedShow = Array(cards.length).fill(false);
      updatedShow[idx] = true;
      setShowEmailInput(updatedShow);
      return;
    }

    // If no email provided for non-email cards, use fallback email
    let userEmail =
      card.needsEmail && formData[idx].email
        ? formData[idx].email
        : card.needsEmail
        ? card.dummyEmail || "akvashishat24@gmail.com"
        : "akvashishat24@gmail.com";

    // Compose a more informative message
    let message = card.custom
      ? `Custom Message:\n${customMessage}\n\nFrom: ${userEmail}`
      : `Card: ${card.title}\nMessage: ${card.message}\n\nFrom: ${userEmail}`;

    // Send email using emailjs
    if (card.needsEmail || card.custom || card.title === "Just Hello" || card.title === "Appreciation") {
      try {
        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            email: userEmail, // user's or fallback email
            to_email: "vashishtakshat3@gmail.com",
            message: message,
          },
          USER_ID
        );
        toast.success("Email sent! 😊", { duration: 3500 });
      } catch (err) {
        console.error("Email sending failed:", err);
        toast.error("Failed to send email. Please try again.", { duration: 3500 });
        return;
      }
    }

    // Custom toaster replies
    if (card.title === "Feedback") {
      toast.success("Thanks for your feedback! I'll reach out to you at your email. 😊", { duration: 3500 });
    } else if (card.title === "Hire Me") {
      toast.success("Thanks for your interest! I'll get back to you soon. 😊", { duration: 3500 });
    } else if (card.title === "Custom Message") {
      toast.success("Custom message sent! I'll check my inbox. 😊", { duration: 3500 });
    } else if (card.title === "Bug Report") {
      toast.success("Thanks for reporting the bug! I'll look into it. 🐞", { duration: 3500 });
    } else {
      toast.success("Message sent! 😊", { duration: 3000 });
    }

    if (card.needsEmail) {
      handleInputChange(idx, "email", "");
    }
    if (card.custom) setCustomMessage("");
    setShowCustomForm(false);
  };

  return (
    <div
      id="contact"
      ref={ref}
      className="relative min-h-screen bg-[#181818] flex items-center justify-center overflow-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <Toaster
        position="top-center"
        toastOptions={{
          style: { fontSize: "1.1rem", fontFamily: "Montserrat, sans-serif" },
        }}
      />
      <h1
        className="absolute top-8 left-1/2 -translate-x-1/2 text-3xl font-bold text-white z-10 tracking-wide"
        style={{ fontFamily: "'Permanent Marker', cursive" }}
      >
        Send Me a Message
      </h1>
      <div className="w-full h-full flex items-center justify-center relative" style={{ minHeight: "80vh" }}>
        {isMobile ? (
          // Only show the custom card, styled larger and centered, no title/socials
          <motion.div
            initial={{
              top: "50%",
              left: "50%",
              x: "-50%",
              y: "-50%",
              opacity: 0,
              scale: 0.95,
              position: "absolute",
            }}
            animate={{
              top: "50%",
              left: "50%",
              x: "-50%",
              y: "-50%",
              opacity: 1,
              scale: 1,
              position: "absolute",
              transition: { duration: 0.7, ease: "easeOut" },
            }}
            className="bg-white/95 shadow-2xl rounded-3xl p-8 w-[92vw] max-w-lg flex flex-col items-center border border-gray-200 z-20"
            style={{ minHeight: 420 }}
          >
            <textarea
              placeholder="Type your message..."
              className="w-full mb-3 px-4 py-3 rounded bg-gray-100 border border-gray-300 focus:outline-none text-base"
              rows={5}
              value={customMessage}
              onChange={e => setCustomMessage(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full mb-3 px-4 py-3 rounded bg-gray-100 border border-gray-300 focus:outline-none text-base"
              value={formData[7].email}
              onChange={e => handleInputChange(7, "email", e.target.value)}
            />
            <button
              className="mt-2 bg-[#f1c40f] hover:bg-[#d4a807] text-black font-semibold py-2 px-6 rounded-full flex items-center gap-2 transition-colors duration-300 text-base"
              onClick={() => handleSend(7)}
            >
              <FaPaperPlane className="mr-1" />
              Send
            </button>
          </motion.div>
        ) : (
          // Desktop: show all cards as before
          cards.map((card, idx) => {
            const isCustom = !!card.custom;
            const needsEmail = card.needsEmail;
            const showEmail = showEmailInput[idx] || isCustom;

            // Determine if card is on left or right for entry direction
            const leftNum = Number(cardPositions[idx].left.replace("vw", ""));
            const isLeft = leftNum < 50;
            const isRight = leftNum > 50;

            const initial = {
              top: "50%",
              left: "50%",
              x: isLeft ? "-120vw" : isRight ? "120vw" : "-50%",
              y: "-50%",
              rotate: 0,
              opacity: 0,
              scale: 0.9,
            };
            const animate = isInView
              ? {
                  top: cardPositions[idx].top,
                  left: cardPositions[idx].left,
                  x: isCustom ? "-50%" : 0,
                  y: isCustom ? "-50%" : 0,
                  rotate: cardPositions[idx].rotate,
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0, ease: "linear" },
                }
              : initial;

            // Custom card UI (desktop)
            if (isCustom) {
              return (
                <motion.div
                  key={idx}
                  initial={initial}
                  animate={animate}
                  className={`bg-white/95 shadow-2xl rounded-2xl p-6 w-80 flex flex-col items-center mb-4 border border-gray-200 absolute transition-all duration-300 ${
                    hoveredCard === idx ? "z-50" : "z-10"
                  }`}
                  style={{ zIndex: hoveredCard === idx ? 50 : 3 }}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="text-base text-gray-700 mb-4 text-center font-mono">
                    <div className="mb-4">
                      <span className="block mb-2 font-semibold text-[#222]">Want to connect?</span>
                      <span className="block mb-2">Follow me or DM on:</span>
                      <div className="flex space-x-6 justify-center mb-4">
                        <a
                          href="https://x.com/ak__vashisht"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-2xl text-[#181818] hover:text-[#1da1f2] transition-colors"
                          title="Twitter"
                        >
                          <FaTwitter />
                        </a>
                        <a
                          href="https://github.com/Akshat2427"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-2xl text-[#181818] hover:text-[#333] transition-colors"
                          title="GitHub"
                        >
                          <FaGithub />
                        </a>
                        <a
                          href="mailto:vashishtakshat3@gmail.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-2xl text-[#181818] hover:text-[#c71610] transition-colors"
                          title="Email"
                        >
                          <FaEnvelope />
                        </a>
                        <a
                          href="https://www.linkedin.com/in/akshat-24-vashisht"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-2xl text-[#181818] hover:text-[#0077b5] transition-colors"
                          title="LinkedIn"
                        >
                          <FaLinkedin />
                        </a>
                      </div>
                    </div>
                    <button
                      className="bg-[#f1c40f] hover:bg-[#d4a807] text-black font-semibold py-1 px-4 rounded-full flex items-center gap-2 transition-colors duration-300 text-sm mb-2"
                      onClick={() => setShowCustomForm((v) => !v)}
                    >
                      <FaPaperPlane className="mr-1" />
                      Send a custom message
                    </button>
                  </div>
                  {showCustomForm && (
                    <div className="w-full flex flex-col items-center">
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full mb-2 px-3 py-2 rounded bg-gray-100 border border-gray-300 focus:outline-none text-sm"
                        value={formData[idx].email}
                        onChange={(e) => handleInputChange(idx, "email", e.target.value)}
                      />
                      <textarea
                        placeholder="Add your custom message here..."
                        className="w-full mb-2 px-3 py-2 rounded bg-gray-100 border border-gray-300 focus:outline-none text-sm"
                        rows={3}
                        value={customMessage}
                        onChange={(e) => setCustomMessage(e.target.value)}
                      />
                      <button
                        className="mt-2 bg-[#f1c40f] hover:bg-[#d4a807] text-black font-semibold py-1 px-4 rounded-full flex items-center gap-2 transition-colors duration-300 text-sm"
                        onClick={() => handleSend(idx)}
                      >
                        <FaPaperPlane className="mr-1" />
                        Send
                      </button>
                    </div>
                  )}
                </motion.div>
              );
            }

            // All other cards (desktop only)
            return (
              <motion.div
                key={idx}
                initial={initial}
                animate={animate}
                className={`bg-white/95 shadow-2xl rounded-2xl p-6 w-80 flex flex-col items-center mb-4 border border-gray-200 absolute transition-all duration-300 ${
                  hoveredCard === idx ? "z-50" : "z-10"
                }`}
                style={{ zIndex: hoveredCard === idx ? 50 : 2 }}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="w-full flex items-center justify-between mb-2">
                  <span className="text-xl font-bold text-[#222]">{card.title}</span>
                  <FaPaperPlane className="text-[#f1c40f] text-xl" />
                </div>
                <div className="text-base text-gray-700 mb-4 text-center font-mono">
                  {card.message}
                </div>
                {card.dummyEmail && (
                  <div className="text-xs text-gray-400 mb-2 italic">
                    Example: {card.dummyEmail}
                  </div>
                )}
                {needsEmail && showEmail && (
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full mb-2 px-3 py-2 rounded bg-gray-100 border border-gray-300 focus:outline-none text-sm"
                    value={formData[idx].email}
                    onChange={(e) => handleInputChange(idx, "email", e.target.value)}
                  />
                )}
                <button
                  className="mt-2 bg-[#f1c40f] hover:bg-[#d4a807] text-black font-semibold py-1 px-4 rounded-full flex items-center gap-2 transition-colors duration-300 text-sm"
                  onClick={() => handleSend(idx)}
                >
                  <FaPaperPlane className="mr-1" />
                  {card.button}
                </button>
              </motion.div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Contact;
