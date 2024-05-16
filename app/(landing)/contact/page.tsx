"use client"
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    setMessage(true);
    e.preventDefault();

    emailjs.sendForm('service_xx1z4se', 'template_76ab09d', form.current!, 'aiOWrRF1FXzLf8_e_')
      .then((result) => {
          console.log(result.text);
          setMessage(false); // Optionally reset message state or handle differently
      }, (error) => {
          console.log(error.text);
          setMessage(false); // Optionally reset message state or handle differently
      });
      e.currentTarget.reset();
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-12">Contact Us</h1>
      <div className="border rounded-lg dark:shadow-yellow-500 p-6 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div>
          <h2 className="font-semibold">Address:</h2>
          <p>1234 Street, NYC, USA</p>
        </div>
        <div>
          <h2 className="font-semibold">Phone:</h2>
          <p>(123) 456-7890</p>
        </div>
        <div>
          <h2 className="font-semibold">Email:</h2>
          <p>info@matrixai.com</p>
        </div>
      </div>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="text-black w-full p-2 border border-gray-300 rounded text black"
          rows={4}
          required
        />
        <button type="submit" className="bg-purple-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
          Send Message
        </button>
      </form>
      {message && <p>Message has been sent.</p>}
      </div>
    </div>
  );
};

export default Contact;
