import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [loading, setloading] = useState(false);
  const [form, setform] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    emailjs.init("-_zhVJoI1p94adZSI"); // ✅ Your public key here
  }, []);

  const handleChange = ({ target: { name, value } }) => {
    setform({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);

    try {
      await emailjs.send("service_pzj2ttm", "template_7i532gp", {
        from_name: form.name,
        to_name: "Jainil Kukrolia",
        from_email: form.email,
        to_email: "jkukrolia17@gmail.com",
        message: form.message,
      });

      setloading(false);
      alert("Thank you. I will get back to you as soon as possible.");
      setform({ name: "", email: "", message: "" }); // Reset form
    } catch (error) {
      setloading(false);
      console.error("Error sending email:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <section className="c-space my-20">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 min-h-screen w-full object-cover z-0"
        />
        <div className="contact-container z-10 relative">
          <h3 className="head-text">Let's Talk</h3>
          <p className="text-lg text-white-600">
            where we can discuss project, ideas, or any questions you may have.
          </p>

          <form
            action=""
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label>
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="joiie"
              />
            </label>

            <label>
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="joiee17.cs@gmail.com"
              />
            </label>

            <label>
              <span className="field-label">Your Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Hi, I'm interested in..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up.png"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
