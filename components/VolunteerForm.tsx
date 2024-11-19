'use client'
import { useState } from 'react'
import axios from 'axios';

const VolunteerForm = () => {
    const [volunteer, setVolunteer] = useState<any>();

    const handleChange = (e: any) => {
      const { name, value } = e.target;
      setVolunteer({
        ...volunteer,
        [name]: value,
      });
    };
  
    async function submit() {
      const response = await axios.post('/api/volunteer', { ...volunteer })
      try {
        if(response.status == 201) alert(response.data.message)
      } catch (error: any) {
        alert(error.response.data)
      }
    }

    return (
        <form onSubmit={submit} className=" w-[300px] mx-auto  space-y-6">
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

            <button className="bg-[#07a034] w-32 h-9 rounded-2xl text-white">
                JOIN NOW
            </button>
        </form>
    )
}

export default VolunteerForm
