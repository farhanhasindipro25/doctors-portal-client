import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Contexts/AuthProvider";
import { toast } from "react-hot-toast";

const Signup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { createUser, updateUser } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");
  const navigate = useNavigate();

  const handleSignup = (data) => {
    console.log(data);
    setSignUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User account created successfully");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            navigate("/");
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => {
        console.error(error);
        setSignUpError(error.message);
      });
  };
  return (
    <div className="flex justify-center items-center">
      <div className="w-96 bg-accent rounded-3xl p-10 mt-16">
        <h2 className="text-4xl text-center my-6 text-white">Sign Up</h2>
        <form
          className="container mx-auto"
          onSubmit={handleSubmit(handleSignup)}
        >
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-white">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="input input-bordered input-primary"
            />
            {errors.name && (
              <p className="text-red-400 ml-1 mt-3" role="alert">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              type="text"
              {...register("email", { required: "Email is required" })}
              className="input input-bordered input-primary"
            />
            {errors.email && (
              <p className="text-red-400 ml-1 mt-3" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-white">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be alteast 8 characters longer!",
                },
                pattern: {
                  value:
                    /(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}/,
                  message: "Your password must be strong!",
                },
              })}
              className="input input-bordered input-primary mb-6"
            />
            {errors.password && (
              <p className="text-red-400 ml-1" role="alert">
                {errors.password?.message}
              </p>
            )}
          </div>
          <input
            className="btn btn-primary w-full"
            value="Login"
            type="submit"
          />
          {signUpError === "Firebase: Error (auth/email-already-in-use)." && (
            <p className="text-red-400 text-center mt-4">
              An account with this email already exists.
            </p>
          )}
        </form>
        <p className="text-center mt-6 text-white">
          Already have an account?{" "}
          <Link to="/login" className="text-primary">
            Login.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
