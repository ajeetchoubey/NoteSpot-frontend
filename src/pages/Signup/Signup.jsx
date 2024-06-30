import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PasswordInput from "../../components/Input/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import { validateEmail } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!name) {
      setError("Please enter your name!");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter your email!");
      return;
    }

    if (!password) {
      setError("Please enter your password!");
      return;
    }

    if (!confirmpassword) {
      setError("Please enter confirm password!");
      return;
    }

    if (password != confirmpassword) {
      setError("Password and confirm password are not matching!");
      return;
    }

    setError("");

    // SignUp API Call
    try {
      const response = await axiosInstance.post("/create-account", {
        fullName: name,
        email: email,
        password: password,
      });

      // Handle Successfull registration response
      if (response.data && response.data.error) {
        setError(response.data.message);
        return;
      }

      if (response.data && response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        navigate("/dashboard");
      }
    } catch (error) {
      // Handle Signup Error
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        setError("Something happened Unexpectedly, Please try again.");
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className=" flex items-center justify-center mt-28">
        <div className=" w-96 border rounded bg-white px-7 py-10">
          <form onSubmit={handleSignup}>
            <h4 className=" text-2xl mb-7 font-medium">SignUp</h4>

            <input
              type="text"
              placeholder="Enter your Name"
              className=" input-box"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Enter your Email"
              className=" input-box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <PasswordInput
              value={password}
              placeholder={"Enter your Password"}
              onChange={(e) => setPassword(e.target.value)}
            />

            <PasswordInput
              value={confirmpassword}
              placeholder={"Confirm Password"}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            {error && <p className=" text-red-500 text-xs pb-1">{error}</p>}

            <button type="submit" className=" btn-primary">
              Create Account
            </button>

            <p className=" text-sm text-center mt-4">
              Already have an Account?{" "}
              <Link
                to="/login"
                className=" font-medium text-primary hover:underline"
              >
                Log In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
