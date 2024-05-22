import React, { useState } from "react";
// import "../styles/Form.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    Destination: "",
    Intake: "",
    Year: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted successfully");
  };

  const handleOnchange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };
  console.log(formData);
  return (
    <div className="w-[50%] h-[50%] border border-solid rounded-lg ml-40 mt-40 mb-40 overflow-visible shadow-lg p-3 ">
      <div className="m-5">
        <h2>
          Explore your Vision for <span className="text-red-500">Academic</span>
        </h2>
        <h2>
          <span className="text-red-500">Excellence</span> with AnyUNI
        </h2>
        <p className="text-black text-md font-">
          Sign up now. and get free export counselling.
        </p>
      </div>
      <form className="flex flex-col m-5" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="Name"
          className="w-365 h-14 border border-gray-800 mb-4 rounded-lg p-2"
          onChange={handleOnchange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email ID"
          className="w-365 h-14 mb-4 rounded-lg border p-2 border-gray-800 focus:border-blue-400"
        />
        <div className="flex">
          <input
            type="tel"
            placeholder="+91"
            className="w-16 h-14 border-solid mb-4 mr-4 rounded-lg border p-2 border-gray-800"
          />
          <input
            type="tel"
            name="mobilenumber"
            placeholder="Mobile Number(10 Digits)"
            className="w-100 h-14 border-solid mb-4 rounded-lg border  border-gray-800 p-2"
          />
        </div>

        <select className="w-365 h-14 border border-gray-800 mb-4 rounded-lg p-2 font-thin">
          <option value="" disabled selected>
            Preferred Study destination
          </option>
          <option value="UK">UK</option>
          <option value="Canada">Canada</option>
          <option value="Ireland">Ireland</option>
          <option value="USA">USA</option>
        </select>
        <select className="w-365 h-14 border border-gray-800 mb-4 rounded-lg p-2 font-thin">
          <option value="" disabled selected>
            Preferred Study year
          </option>
          <option value="UK">UK</option>
          <option value="Canada">Canada</option>
          <option value="Ireland">Ireland</option>
          <option value="USA">USA</option>
        </select>
        <select className="w-365 h-14 border border-gray-800 mb-4 rounded-lg p-2 font-thin">
          <option value="" disabled selected>
            Preferred Study Intake
          </option>
          <option value="UK">UK</option>
          <option value="Canada">Canada</option>
          <option value="Ireland">Ireland</option>
          <option value="USA">USA</option>
        </select>
        <div className="flex">
          <input type="checkbox" required />
          <label className="px-2">
            By clicking you agree to our{" "}
            <span className="text-red-500 text-sm font-bold underline">
              Policy
            </span>{" "}
            and{" "}
            <span className="text-red-500 text-sm font-bold underline">
              Terms & Conditions*
            </span>
          </label>
        </div>
        <button className="bg-red-600 text-white border w-96 h-12 rounded-full mt-4 ml-5">
          Start your Journey Now!
        </button>
      </form>
    </div>
  );
};

export default SignUp;
