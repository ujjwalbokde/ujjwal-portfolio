"use client"
import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   formState: { errors },
  // } = useForm();

  const onSubmit = (data) => {
    console.log(data.name, data.email, data.message);
    alert("@ujjwalbokde will contact you soon .....");
    reset();
  };

  return (
    <div className="bg-hero-simple bg-cover bg-no-repeat min-h-screen w-full pt-20 pb-4 text-white element" name="contact">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-center">Contact Us</h1>
      <div className="flex justify-center mb-8 sm:mb-16">
        <div className="w-40 sm:w-80 h-2 bg-yellow-500"></div>
      </div>
      <div className="px-4 sm:px-8 md:px-16 lg:px-32 flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
        {/* Contact Form */}
        <div className="p-6 sm:p-8 md:p-12 rounded-lg shadow-lg w-full md:w-1/2 bg-opacity-90 ">
          <h2 className="text-yellow-500 text-xl sm:text-2xl font-bold mb-4">Contact Us</h2>
          <form onSubmit={(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                // {...register("name", { required: true })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-transparent focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
              />
              {/* {errors.name && (
                <p className="text-red-500 text-sm">Name is required</p>
              )} */}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                // {...register("email", { required: true })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-transparent focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
              />
              {/* {errors.email && (
                <p className="text-red-500 text-sm">Email is required</p>
              )} */}
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                // {...register("message", { required: true })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-transparent focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
              />
              {/* {errors.message && (
                <p className="text-red-500 text-sm">Message is required</p>
              )} */}
            </div>
            <button
              type="submit"
              className="relative rounded-lg inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
                Send
              </span>
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="p-6 sm:p-8 md:p-12 rounded-lg w-full md:w-1/2 bg-opacity-90 ">
          <h2 className=" text-yellow-500 text-xl sm:text-2xl font-bold mb-6">Contact Information</h2>
          <div className="space-y-4">
            <p className="border border-white p-4 rounded-md flex items-center justify-center sm:justify-start">
              <img src="/telephone.png" className="w-8 h-8 mr-4" alt="Phone" />
              +91 9764624075
            </p>
            <p className="border border-white p-4 rounded-md flex items-center justify-center sm:justify-start">
              <img src="/location.png" className="w-8 h-8 mr-4" alt="Location" />
              1007 Nagsenvan, Nagpur-440017, India
            </p>
            <p className="border border-white p-4 rounded-md flex items-center justify-center sm:justify-start">
              <img src="/gmail.png" className="w-8 h-8 mr-4" alt="Email" />
              ujjwalbokde370@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-white py-6 px-4 mt-8 text-center">
        <p className="text-sm sm:text-md">&copy; @ujjwalbokde. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;