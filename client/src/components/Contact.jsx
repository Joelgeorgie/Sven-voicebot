import React, { useState } from "react";

const Contact = () => {
  const maincol = "#2685bd";
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = () => {
    
    console.log("Email:", email);
    console.log("Message:", message);

    
    setEmail("");
    setMessage("");
  };

  return (
    <div className="flex-col justify-between text-white mx-auto h-screen w-[40%] m-10">
      <div className="m-[50px]">
        <p className='text-center text-1xl font-bold text-[#2685bd]'>
          CONTACT US ANYTIME
        </p>
        <p className="text-center text-3xl font-bold font-serif">
          Easy. Anonymous. Safe
        </p>
      </div>
      <div>
        <div className="bg-gray-900 rounded-lg p-8 flex flex-col w-full mt-10 shadow-md">
          <h2 className="text-gray-400 text-lg mb-1 font-medium title-font">
            Shush...
          </h2>

          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={handleMessageChange}
              className={`w-full bg-white rounded border border-gray-300 focus:border-${maincol} focus:ring-2 focus:ring-indigo-200 h-56 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out`}
            ></textarea>
          </div>
          <button
            className='text-white bg-[#2685bd] border-0 py-2 px-6 focus:outline-none hover:bg-[#0c6496] rounded text-lg'
            onClick={handleSubmit}
          >
            SEND
          </button>
          <p className="text-xs text-center text-gray-500 mt-3">
            No information you send is used for computations. It is addressed by individual respondents.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
