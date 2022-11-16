import React from "react";

function LoginPage() {
  return (
    <div className="flex flex-col items-center space-y-4 space-x-2 border border-black bg-white shadow-md w-64 h-64">
      <div className="mt-4">LOGIN</div>
      <input
        id="email"
        type="email"
        placeholder="email"
        className="px-4 py-1 border border-gray-900 "
      />
      <input
        id="password"
        type="password"
        placeholder="password"
        className="px-4 py-1 border border-gray-900 "
      />
      <button className="border border-black shadow-md bg-pink-700 rounded-md px-20">
        LOGIN
      </button>
      <div>
        <h4>Need an account? SIGN UP</h4>
      </div>
    </div>
  );
}

export default LoginPage;
