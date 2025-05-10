import React, { useRef } from "react";
import { useMask } from "@react-input/mask";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const inputRef = useMask({
    mask: "+27 (##) ###-####",
    replacement: { "#": /\d/ },
  });

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset(); 
        },
        () => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section
      className="md:grid grid-cols-2 px-4 py-10 md:p-25 text-amber-800"
      id="contact"
    >
      <h2 className="col-span-2 text-center mb-10 text-4xl bg-gradient-to-tr from-yellow-200 via-amber-500 to-amber-900 text-transparent bg-clip-text font-bold">
        Contact Us
      </h2>

      <div>
        <h2 className="text-lg md:text-5xl font-medium">You have a project?</h2>
        <h3 className=" md:text-4xl font-bold bg-gradient-to-tr from-yellow-900 via-amber-500 to-amber-900 bg-clip-text text-transparent">
          need help?
        </h3>
        <p className="md:w-1/2 mb-8">
          Fill out the form and we will contact you within{" "}
          <strong className="bg-gradient-to-tr from-yellow-900 via-amber-500 to-amber-900 bg-clip-text text-transparent">
            15 minutes
          </strong>{" "}
          to solve your problem.
        </p>
      </div>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="space-y-4 flex flex-col bg-amber-900 p-20 rounded-4xl shadow-2xl"
      >
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-200"
        >
          * Your Name
        </label>
        <input
          type="text"
          name="from_name"
          id="name"
          placeholder="Name"
          required
          className="w-full rounded-full px-4 py-2 placeholder-gray-400 text-gray-800 bg-red-50"
        />

        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-200"
        >
          * Your Phone
        </label>
        <div className="flex items-center text-amber-700 bg-red-50 rounded-full px-4 py-2">
          <span className="mr-2">🇿🇦</span>
          <input
            ref={inputRef}
            name="phone_number"
            id="phone"
            placeholder="(__) ___-____"
            required
            className="bg-transparent outline-none w-full placeholder-gray-400"
          />
        </div>

        <button className="bg-gradient-to-tr from-amber-800 to-amber-400 hover:from-amber-500 hover:to-amber-300 py-3 px-8 rounded-full font-bold text-blue-100 transition duration-500">
          Call Me
        </button>
      </form>
    </section>
  );
};

export default Contact;
