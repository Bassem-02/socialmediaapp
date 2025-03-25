import React, { useState } from "react";
import Lottie from "react-lottie"; // Import Lottie component
import { Toaster, toast } from "react-hot-toast";
import UserService from "../Services/UserService"; // Ensure the path is correct
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles
import "../App.css"; // Your custom CSS (optional for overrides)

// Import the Lottie animation JSON file
import SignupAnimation from "../Assets/Signup1.json"; // Adjust the path if necessary

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    birthdate: "",
  });

  const formValidation = () => {
    let status = true;
    const localErrors = { ...errors };

    if (firstname === "") {
      localErrors.firstname = "Firstname is required";
      status = false;
    }
    if (lastname === "") {
      localErrors.lastname = "Lastname is required";
      status = false;
    }
    if (email === "") {
      localErrors.email = "Email is required";
      status = false;
    }
    if (password === "" || password.length < 8) {
      localErrors.password = "Password is required (min 8 characters)";
      status = false;
    }

    setErrors(localErrors);
    return status;
  };

  const register = async (e) => {
    e.preventDefault();

    const today = new Date();
    const selectedBirthdate = new Date(birthdate);

    if (selectedBirthdate > today) {
      toast.error("Birthdate cannot be in the future!");
      return;
    }

    if (formValidation()) {
      const data = { firstname, lastname, email, password, birthdate };

      try {
        await UserService.register(data);
        toast.success("User registered successfully!");
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setBirthdate("");
      } catch (err) {
        toast.error("Signup failed. Try again.");
      }
    }
  };

  // Lottie options
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: SignupAnimation, // Use the imported JSON file
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="container mt-5">
      <Toaster />
      <div className="row justify-content-center">
        {/* Lottie animation */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <Lottie options={defaultOptions} height={200} width={200} />
        </div>
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Create an Account</h3>
              <form onSubmit={register}>
                <div className="form-group mb-3">
                  <label htmlFor="firstname">Firstname</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    placeholder="Enter your firstname"
                  />
                  {errors.firstname && <small className="text-danger">{errors.firstname}</small>}
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="lastname">Lastname</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    placeholder="Enter your lastname"
                  />
                  {errors.lastname && <small className="text-danger">{errors.lastname}</small>}
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                  />
                  {errors.email && <small className="text-danger">{errors.email}</small>}
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                  />
                  {errors.password && <small className="text-danger">{errors.password}</small>}
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="birthdate">Birthdate</label>
                  <input
                    type="date"
                    className="form-control"
                    id="birthdate"
                    value={birthdate}
                    onChange={(e) => setBirthdate(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Sign Up
                </button>
              </form>
              {/* Button linking to Login Page */}
              <div className="text-center mt-4">
                <a href="/login" className="btn btn-outline-secondary w-100">
                  Sign In
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
