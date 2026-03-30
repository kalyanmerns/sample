import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import signupImg from "./../assets/signupImg.jpg"
import { BsChatText } from "react-icons/bs";






const AnimeSignup=()=> {

  const [form,setForm] = useState({
    mobile:"",
    email:"",
    password:""
  })

  const [showPassword,setShowPassword] = useState(false)

  const handleChange=(e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(form)
  }

  return (
    <div className="min-h-screen  flex items-center justify-center bg-[url('https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlMjBfM2RfbW9kZXJuX3dhdmVfY3VydmVfYWJzdHJhY3RfaGFsZnRvbmVfZ3JhZGllbl8xZTJhY2M3Mi1jZTU3LTQ0NjItOGQzNS1lOTI4YzI5NzcxMTdfMS5qcGc.jpg')] bg-cover bg-center">

      
      <div className="backdrop-blur-xl flex justify-center flex-wrap items-center bg-white border border-white/20 shadow-xl rounded-2xl p-8   text-white">

          <div className="m-5  hidden md:flex flex-col">
            <h1 className="text-black text-[1.8rem] font-bold w-full text-center flex items-center gap-1"><BsChatText color="#9405fa"/>Chatify</h1>
            <img src={signupImg}  alt="signupImage" className="w-[21rem] h-[20rem] cover"/>
      
          </div>

           <div className="w-[18rem] md:w-[20rem]">

                  <h2 className="text-3xl font-bold text-black text-center mb-6">
                    Signup
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-5">

                  
                    

                    {/* Email */}
                    <div className="flex items-center justify-center border-b border-b-pink-200 focus:ring-2 focus:ring-pink-400">
                      <MdOutlineMail className="text-pink-500 m-0" size="25" />
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter email address"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full text-black  p-3 text-[1rem] rounded-lg bg-white/20 focus:outline-none"
                      />
                    </div>


                      {/* Mobile */}

                    <div className="flex items-center justify-center border-b border-b-pink-200 focus:ring-2 focus:ring-pink-400">
                      <FaPhoneAlt className="text-pink-500 m-0" size="20" />        
                      <input
                        type="tel"
                        name="mobile"
                        placeholder="Enter mobile number"
                        value={form.mobile}
                        onChange={handleChange}
                        className="w-full  text-black p-3 text-[1rem]  rounded-lg bg-white/20 focus:outline-none"
                      />
                    </div>

                    {/* Password */}
                    <div className="flex items-center justify-center border-b border-b-pink-200 focus:ring-2 focus:ring-pink-400">
                      <RiLockPasswordLine className="text-pink-500 m-0" size="25" />

                      <div className="flex w-full">

                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          placeholder="Enter password"
                          value={form.password}
                          onChange={handleChange}
                          className="w-full text-black p-3 rounded-l-lg bg-white/20 focus:outline-none"
                        />

                        <button
                          type="button"
                          onClick={()=>setShowPassword(!showPassword)}
                          className="bg-pink-500 px-4 rounded-r-lg cursor-pointer"
                        >
                          {showPassword ? "🙈" : "👁"}
                        </button>

                      </div>
                    </div>

                    {/* Button */}
                    <button
                      className="w-full bg-gradient-to-r cursor-pointer from-pink-500 to-purple-600 py-3 rounded-lg font-semibold hover:scale-105 transition"
                    >
                      Sign Up
                    </button>

                  </form>

                  <p className="text-center text-sm mt-4 text-black">
                    Already have account? <span className="text-pink-400 cursor-pointer">Login</span>
                  </p>

          </div>

         
       

      </div>

    </div>
  );
}

export default AnimeSignup;