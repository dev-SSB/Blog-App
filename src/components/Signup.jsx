import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";


const Signup = () => {

  const navigate = useNavigate();
  
  // State for user input
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  // State for checking if user is already signed up
  const [signedUpUser, setSignedUpUser] = useState(null);

  // Load user from Local Storage when component mounts
  useEffect(() => {
    const storedUser = localStorage.getItem("signedUpUser");
    if (storedUser) {
      setSignedUpUser(JSON.parse(storedUser));
    }
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Restrict username to max 8 characters
    if (name === "username" && value.length > 8) return;

    setUser({ ...user, [name]: value });
  };


  const handleNewUserSignup = (e)=>{
    e.preventDefault();

    setSignedUpUser(null);
    // navigate("/signup");
  };

  const handleSignup = ()=>{
    if (user.name && user.username && user.email && user.password) {
      // Save user to Local Storage
      localStorage.setItem("signedUpUser", JSON.stringify(user));
      setSignedUpUser(user);
      alert("Signup Successful!");

      window.location.reload();
    } else {
      alert("Please fill all fields.");
    }
  };

  const handleBackBTN = ()=>{
    navigate("/");
  };

  return (
    <div className="bg-white p-4 sm:p-10 flex flex-col items-center gap-5 sm:gap-6 lg:gap-8 mt-10 sm:mt-25 lg:mt-10">
      {signedUpUser ? (
        <div className="flex flex-col justify-center items-center gap-15 sm:gap-20 lg:gap-12 mt-10">

          <h2 className="text-center text-4xl sm:text-7xl lg:text-7xl font-bold text-green-500 ">Welcome, {signedUpUser.username}!!! </h2>

          <div className="border border-gray-200 flex flex-col gap-5 sm:gap-10 lg:gap-5 justify-center items-center p-5  sm:p-10 lg:p-8 shadow-2xl rounded-lg">
            <h1 className="text-4xl sm:text-6xl lg:text-5xl text-gray-400 border-b-2 border-gray-200 font-semibold">User Details</h1>

            <div className="mt-5 flex flex-col gap-5 justify-center items-center">
              <p className="text-2xl sm:text-3xl  text-gray-400 font-normal">{signedUpUser.email}</p>
              <p className="text-2xl sm:text-3xl text-gray-400 text-gray-400font-normal">{signedUpUser.name}</p>
            </div>
          </div>

          <button className="text-center px-5 py-2 sm:py-3 bg-blue-500 rounded-md w-5/6 font-semibold text-xl sm:text-2xl text-white shadow-2xl" onClick={handleNewUserSignup}>
          New Signup
          </button>
        </div>

      ) : (
        <form
          className="flex flex-col justify-center items-center gap-4 sm:gap-8 lg:gap-4 p-6 rounded-lg shadow-2xl w-full lg:w-3/5 border border-gray-400" onSubmit={()=>e.preventDefault()}
        >
          <h2 className="text-3xl sm:text-6xl lg:text-4xl font-bold text-center text-gray-700">
            Sign Up
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={user.name}
            onChange={handleChange}
            className="text-xl sm:text-2xl lg:text-xl p-2 sm:mt-3 lg:mt-0 sm:p-3 lg:p-2 border rounded-md w-full"
            required
          />

          <input
            type="text"
            name="username"
            placeholder="Enter a username (max 8 chars)"
            value={user.username}
            onChange={handleChange}
            className="text-xl sm:text-2xl lg:text-xl p-2 sm:mt-3 lg:mt-0 sm:p-3 lg:p-2 border rounded-md w-full"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={user.email}
            onChange={handleChange}
            className="text-xl sm:text-2xl lg:text-xl p-2 sm:mt-3 lg:mt-0 sm:p-3 lg:p-2 border rounded-md w-full "
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={user.password}
            onChange={handleChange}
            className="text-xl sm:text-2xl lg:text-xl p-2 sm:mt-3 lg:mt-0 sm:p-3 lg:p-2 border rounded-md w-full"
            required
          />

          <div className="flex justify-between w-full lg:w-5/6">
            <button
              type="submit"
              className="text-lg font-semibold bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 transition w-1/3" onClick={handleSignup}
            >Sign Up</button>

            <button
              type="submit"
              className="text-lg font-semibold bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition w-1/3" onClick={handleBackBTN}
            >Back</button>
          </div>

        </form>
      )}
    </div>
  );
};

export default Signup;
