"use client";
import { useState, useRef } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import axios from "axios";

const VolunteerForm = () => {
    const congratMessage = useRef<any>()
  const [volunteer, setVolunteer] = useState<any>();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setVolunteer({
      ...volunteer,
      [name]: value,
    });
  };

  async function submit(e: any) {
    e.preventDefault();
    const response = await axios.post("/api/volunteer", { ...volunteer });
    try {
      if (response.status == 201){
        if(congratMessage.current){
            congratMessage.current.classList.add("flex")
            congratMessage.current.classList.remove("hidden")
            setTimeout(()=>{
                congratMessage.current.classList.add("hidden")
                congratMessage.current.classList.remove("flex")
            },3000)
        }
      } 
    } catch (error: any) {
      alert(error.response.data);
    }
  }

  return (
    <div className="relative">
      <form onSubmit={submit} className=" w-[300px] mx-auto   space-y-6">
        <div className="w-full flex items-center justify-between">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="w-[45%] h-[30px] bg-slate-200"
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="w-[45%] h-[30px] bg-slate-200"
            onChange={handleChange}
          />
        </div>
        <div className="w-full flex justify-between">
          <input
            type="number"
            name="phone"
            placeholder="Phone Number"
            className="w-[45%] h-[30px] bg-slate-200"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-[45%] h-[30px] bg-slate-200"
            onChange={handleChange}
          />
        </div>
        <input
          type="text"
          name="address"
          placeholder="Address"
          className="w-full h-[30px] bg-slate-200"
          onChange={handleChange}
        />

        <button
          type="submit"
          className="bg-[#07a034] w-32 h-9 rounded-2xl text-white"
        >
          JOIN NOW
        </button>
      </form>
      <div ref={congratMessage} className="absolute top-[0%] left-[10%] hidden flex-col items-center justify-evenly w-[80%] h-[80%] bg-[#07a034] text-white">
        <IoMdCheckmarkCircleOutline className="text-5xl" />
        <p>welcome to the team</p>
        <p>we will reach you soon</p>
      </div>
    </div>
  );
};

export default VolunteerForm;
