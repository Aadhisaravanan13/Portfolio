import { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_r9bh12o",  // Replace with your EmailJS Service ID
        "template_pbxf71f", // Replace with your EmailJS Template ID
        {
          to_name: "Aadhi", // Recipient's name
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject, // Subject line
          message: formData.message, // Message content
        },
        "Yw_6ougHKz0dbU8Pn" // Replace with your EmailJS Public Key
      )
      .then(() => {
        alert("Message sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <form onSubmit={handleSendEmail} className="space-y-6">
      {/* Name & Email Inputs */}
      <div className="flex justify-between gap-10">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border-none bg-zinc-800 rounded-3xl w-64 p-4 focus:outline-none text-white pl-5"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border-none bg-zinc-800 rounded-3xl w-64 p-4 focus:outline-none text-white pl-5"
        />
      </div>

      {/* Subject Input */}
      <div>
        <input
          type="text"
          name="subject"
          placeholder="Your Subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="border-0 bg-zinc-800 rounded-3xl w-full p-4 focus:outline-none text-white pl-5"
        />
      </div>

      {/* Message Textarea */}
      <div>
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="border-0 bg-zinc-800 rounded-3xl w-full max-h-44 min-h-44 p-4 focus:outline-none text-white pl-5"
        />
      </div>

      {/* Send Button */}
      <div>
        <button
          type="submit"
          className="bg-yellow-500 text-white font-semibold rounded-3xl px-6 py-3 hover:bg-yellow-600 transition"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
