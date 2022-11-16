import React from "react";

function ForgotPage() {
  return (
    <div className="flex flex-col items-center space-y-4 space-x-2 border border-black bg-white shadow-md w-64 h-64">
      <h1 className="text-xl">Forgot your password</h1>
      <h5 className="text-xs">
        Please enter the email you use to sign in to productkart.
      </h5>
      <input
        id="email"
        type="email"
        placeholder="Your email here"
        className="px-4 py-1 border border-gray-900 "
      />
      <button className="border border-black shadow-md bg-pink-700 rounded-md px-6">
        Request password reset
      </button>
      <div>Back to SIGN UP</div>
    </div>
  );
}

export default ForgotPage;
