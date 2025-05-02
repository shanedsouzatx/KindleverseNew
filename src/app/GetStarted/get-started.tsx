// app/get-started/page.tsx or pages/get-started.tsx
import React from "react";

const GetStartedForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 to-indigo-900 p-6">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md relative">
        <h2 className="text-2xl font-bold text-center mb-6">Let’s Get Started</h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <div className="flex items-center space-x-2">
            <div className="border rounded-md px-3 py-3 flex items-center bg-gray-100">
              <img src="https://flagcdn.com/w40/pk.png" alt="PK Flag" className="w-6 h-4" />
            </div>
            <input
              type="tel"
              placeholder="Phone"
              className="flex-1 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <textarea
            rows={3}
            placeholder="About Your Project"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-900 to-purple-500 text-white py-3 rounded-full shadow-md hover:shadow-lg transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetStartedForm;
