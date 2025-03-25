import React, { useState } from "react";
import Lottie from "react-lottie"; // Import Lottie for animations
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import UserService from "../Services/UserService"; // Ensure the path is correct
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap for styling
import "../App.css"; // Custom styles

// Import Lottie animation for the login page
import SigninAnimation from "../Assets/Sigin1.json"; // Adjust the path as needed

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const formValidation = () => {
    let status = true;
    let localErrors = { email: "", password: "" }; // Reset errors

    if (email === "") {
      localErrors.email = "Email required";
      status = false;
    }
    if (password === "" || password.length < 8) {
      localErrors.password = "Password required and must be min 8 characters";
      status = false;
    }

    setErrors(localErrors);
    return status;
  };

  const signin = async (e) => {
    e.preventDefault();
    console.log("form submit");
    console.log("form data", email, password);

    if (formValidation()) {
      const data = {
        email: email,
        password: password,
      };

      try {
        const response = await UserService.signin(data);
        console.log("response ===>", response);

        // Save user data in localStorage
        localStorage.setItem("user_data", JSON.stringify(response.data.user));
        localStorage.setItem("token", response.data.token);

        toast.success("Login successful...");
        setEmail("");
        setPassword("");

        // Redirect to home page
        navigate("/home");
      } catch (err) {
        console.log(err);
        toast.error(err.response.data.message || "Login failed!");
      }
    } else {
      console.log("form invalid");
    }
  };

  // Lottie options
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: SigninAnimation, // Use the imported JSON file
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="container mt-5">
      <Toaster />
      <div className="row justify-content-center">
        {/* Lottie Animation */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <Lottie options={defaultOptions} height={300} width={300} />
        </div>
        {/* Login Form */}
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Login to Flow Space</h3>
              <form onSubmit={signin}>
                {/* Email */}
                <div className="form-group mb-3">
                  <label>Email</label>
                  <input
                    className="form-control"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                  />
                  {errors.email && <small className="text-danger">{errors.email}</small>}
                </div>
                {/* Password */}
                <div className="form-group mb-3">
                  <label>Password</label>
                  <input
                    className="form-control"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                  />
                  {errors.password && <small className="text-danger">{errors.password}</small>}
                </div>
                {/* Submit Button */}
                <button type="submit" className="btn btn-primary w-100">
                  Sign In
                </button>
              </form>
              {/* Extra Links */}
              <div className="text-center mt-3">
                <a href="/forgot-password" className="text-decoration-none">
                  Forgot Password?
                </a>
                <p className="mt-2">
                  Don't have an account?{" "}
                  <a href="/register" className="text-decoration-none">Sign Up</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
