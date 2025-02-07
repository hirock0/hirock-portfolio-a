"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLocationDot } from "react-icons/fa6";
import { FaMobileScreen } from "react-icons/fa6";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, // Replace with your EmailJS Service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, // Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_subject: formData.subject,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! // Replace with your EmailJS Public Key
      );

      console.log("Email Sent:", response);
      setSuccess(true);
      setFormData({ name: "", email: "", message: "", subject: "" }); // Reset form
    } catch (err) {
      console.error("Email Error:", err);
      setError("Failed to send email. Please try again.");
    }

    setLoading(false);
  };

  return (
    <main className=" bg-white p-5 rounded-md shadow-lg">
      <div className="flex max-md:flex-col">
        <div className=" p-2 w-1/2 max-md:w-full">
          <h1 className=" text-center text-xl font-semibold">Email Contact</h1>
          <form onSubmit={handleSubmit} className="rounded-lg">

            <label className="block mb-2">
              Name:
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full p-2 border rounded" />
            </label>
            <label className="block mb-2">
              Subject:
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} required className="w-full p-2 border rounded" />
            </label>

            <label className="block mb-2">
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-2 border rounded" />
            </label>

            <label className="block mb-2">
              Message:
              <textarea name="message" value={formData.message} onChange={handleChange} required className="w-full p-2 border rounded"></textarea>
            </label>

            <button type="submit" disabled={loading} className="bg-blue-500 text-white p-2 rounded">
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && <p className="text-green-500 mt-2">Email sent successfully!</p>}
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </form>
        </div>
        <div className=" w-1/2 border-l-2 max-md:w-full p-2">
          <h1 className=" text-center font-semibold text-xl">Manual Contact</h1>
          <ul className=" mt-5 space-y-3">
            <li className=" flex items-center gap-2">
              <span className=" font-semibold flex items-center gap-2">
                <FaLocationDot size={30} /> Address:
              </span>
              Jashore, Manirampur
            </li>
            <li className="flex items-center gap-2">
              <span className=" font-semibold flex items-center gap-2">
                <FaMobileScreen size={30} /> Mobile:
              </span>
              +8801700554293, +8801945055264
            </li>
            <li className=" flex items-center gap-2">

              <span className=" font-semibold  flex items-center gap-2">
                <FaGithub size={30} />
                GitHub:
              </span>
              <Link href={"https://github.com/hirock0"} className=" text-blue-600">github.com/hirock0</Link>
            </li>

            <li className=" flex items-center gap-2">
              <span className=" font-semibold  flex items-center gap-2">
                <FaLinkedin size={30} />
                LinkedIn:
              </span>
              <Link href={"https://www.linkedin.com/in/hirock-dutta-196a7a267/"} className=" text-blue-600">linkedin.com/in/hirock-dutta-196a7a267/</Link>
            </li>
            <li className=" flex items-center gap-2">
              <span className=" font-semibold  flex items-center gap-2">
                <FaFacebook size={30} />
                Facebook:
              </span>
              <Link href={"https://www.facebook.com/profile.php?id=100028605347325"} className=" text-blue-600">facebook.com/profile.php?id=100028605347325</Link>
            </li>
            <li className=" flex items-center gap-2">
              <span className=" font-semibold  flex items-center gap-2">
                <MdOutgoingMail size={30} />
                Email:
              </span>
              <span>hirockdutta0@gmail.com</span>
            </li>

          </ul>
        </div>
      </div>
    </main>
  );
};

export default ContactForm;
