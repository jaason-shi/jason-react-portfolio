import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full md:h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-[#8892b0]"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-[#ccd6f6] border-pink-600">
            Contact
          </p>
          <p className="py-6">Feel free to get in touch with me!</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/318ff440-6a52-4953-9a64-dd2dad8456a7"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></input>
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></input>
            <textarea
              name="message"
              placeholder="Enter Your Message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="group text-white border-2 w-fit px-5 py-3 my-2 flex cursor-pointer justify-center items-center rounded-md hover:bg-pink-600">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
