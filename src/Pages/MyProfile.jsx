import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { FaRegPenToSquare } from "react-icons/fa6";

const MyProfile = () => {
  const { user, Updprofile, setUser } = useContext(AuthContext);
  const formRef = useRef();
  const [showForm, setShowForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    Updprofile({ displayName: name, photoURL: photo })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
        setSuccess(true);
        setErrorMessage("");
        formRef.current.reset();
      })
      .catch((error) => {
        setUser(user);
        setErrorMessage(error.message);
        setSuccess(false);
      });
  };
  const userPhoto = user?.photoURL || "/default-avatar.png";
  const userName = user?.displayName || "No Name";
  return (
    <div className="card bg-base-100 md:w-96 relative pb-5 mx-auto shadow-sm">
      <title>PayBill || Profile</title>
      <figure className="h-44 mx-auto pt-5 mt-5 w-44 rounded-full">
        <img src={userPhoto} alt="UserPhoto" className="rounded-xl" />
        <div>
          <button
            onClick={() => setShowForm(!showForm)}
            type="button"
            className="absolute cursor-pointer max-sm:right-20 max-sm:top-40 right-22 top-40  p-0.5 px-1"
          >
            {" "}
            {showForm ? (
              <FaRegPenToSquare size={25} />
            ) : (
              <FaRegPenToSquare size={25} />
            )}{" "}
          </button>
        </div>
      </figure>
      <h1 className="text-xl text-blue-700 font-bold text-center ">
        {userName}
      </h1>
      {showForm && (
        <div className="card-body items-center">
          <hr className="border w-full border-gray-200" />
          <form ref={formRef} onSubmit={handleUpdate} className="space-y-5">
            <div className="space-y-2">
              <div>
                <label
                  htmlFor="name"
                  className="block font-medium mb-2 text-sm"
                >
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
                <label
                  htmlFor="photo"
                  className="block font-medium mb-2 text-sm"
                >
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photo"
                  id="photo"
                  placeholder="Photo URL"
                  required
                  className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                />
              </div>
              <div>
                <button type="submit" className="btn btn-info w-full">
                  Update
                </button>
              </div>
              {errorMessage && <p>{errorMessage}</p>}
              {success && <p>succesfull</p>}
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default MyProfile;
