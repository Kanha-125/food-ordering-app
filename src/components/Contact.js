import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-2 m-2">Contact Us</h1>
      <form>
        <input
          type="text"
          placeholder="Name"
          className="border border-black p-2 m-2"
        />
        <input
          type="text"
          placeholder="message"
          className="border border-black p-2 m-2"
        />
        <button className="border border-black p-2 m-2 rounded-lg bg-gray-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
