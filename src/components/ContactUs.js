import React from "react";

const ContactUs = () => {
  return (
    <div name="Contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">Contact Me</p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
 
        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/ff32c974-5d8c-4b27-88eb-d6c71f42c1ec" method="POST" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="enter your email"
              className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            >
            </textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-4 py-2 my-8 mx-auto flex items-center rounded-md hover:bg-gradient-to-l">Ping me</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
