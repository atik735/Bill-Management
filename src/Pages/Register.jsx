import React, { useContext, useState } from "react";
import { auth } from "../firebase.init";
import {updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../Contexts/AuthContext";
import { toast } from "react-toastify";

const Register = () => {
    const {createUser} = useContext(AuthContext)

    const navigate= useNavigate()
    
  const [errorMessage, setErrorMessage] = useState("");
  const [success,setSuccess] = useState(false);
  const [showPassword,setShowPassword]=useState(false)
  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    console.log(email, password, name);

    setErrorMessage("");
    setSuccess(false);

    createUser(email,password).then((result) => {
       console.log(result);
       toast('Register successfull!')
       setTimeout(() => {
  navigate("/")
}, 400);
       const profile ={
        displayName:name,
        photoURL:photo
       }
       updateProfile(auth.currentUser,profile).then(
        (result) =>{
          setSuccess(true)
        }
       )
       .catch((error) => {
        setErrorMessage(error.message)
      });
    })
    .catch((error) =>{
      console.log(error);
      toast(error.message)
      setErrorMessage(error.message)
    })
  };

  return (
    <div className="flex flex-col max-w-md p-6 mx-auto mt-12 rounded-md sm:p-10 bg-gray-50 text-gray-800">
               <title>PayBill || Register</title>
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Register</h1>
        <p className="text-sm text-gray-600">Register to access your account</p>
      </div>
      <form onSubmit={handleSignUp} className="space-y-5">
        <div className="space-y-2">
          <div>
            <label className="block mb-2 text-sm">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Name"
              className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              id="photo"
              required
              placeholder="Photo URL"
              className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="leroy@jenkins.com"
              className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
            </div>
            <div className="relative">
            <input
              type={showPassword?"text" : "password"}
              name="password"
              id="password"
              placeholder="*****"
              required
              minLength="6"
              pattern="(?=.*[a-z])(?=.*[A-Z]).{6,}"
              title="Must be more than 6 characters, lowercase letter, uppercase letter"
              className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
            />
            <button onClick={() =>setShowPassword(!showPassword)} type="button" className="absolute top-2 right-4 bg-gray-200 p-0.5 px-1"> {showPassword? <FaEyeSlash></FaEyeSlash> :<FaEye></FaEye>} </button>
            </div>
          </div>
        </div>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        {success && <p className="text-green-500">Register Succesfull</p>}
        <div className="space-y-2">
          <div>
            <button
              type="submit"
              className="w-full cursor-pointer px-8 py-3 font-semibold rounded-md bg-violet-600 text-gray-50"
            >
              Register
            </button>
          </div>
          <p className="px-6 text-sm text-center text-gray-600">
            Already have an account?
            <Link to="/login" className="underline text-violet-600">
              LogIn
            </Link>
            .
          </p>
        </div>
      </form>

                      <Link to="/" className="btn btn-wide place-self-center mt-4">
                        Go Back Home
                      </Link>
    </div>
  );
};

export default Register;
