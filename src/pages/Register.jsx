import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { User, Mail, Lock, UserPlus } from "lucide-react";

function Register() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState("");
  const register = useAuthStore((state) => state.register);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

  if( !name || !email || !password ){
    setError("Please fill all field");
    return;
  }

  // if(password.length<6){
  //   setError("Password must be at least 6 characters");
  //   return;
  // }

  try{
    register(name,email,password);
    navigate("/login");
  } catch(err){
    setError("Register failed Please try again");
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-100 p-4">
     <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-lg p-10 rounded-2xl shadow-xl w-full max-w-md space-y-6 border border-white/50">
       
        <div className="text-center mb-6">
          <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <UserPlus className="w-8 h-8 text-purple-600" />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900">Create Account</h2>
          <p className="text-gray-500 mt-2">Join us to start shopping today</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm text-center border border-red-100">
            {error}
          </div>
        )}

        <div className="space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text"
              placeholder="Full Name" 
              className="pl-10 border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 p-3 w-full rounded-xl transition-all outline-none bg-white/50"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="email"
              placeholder="Email address" 
              className="pl-10 border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 p-3 w-full rounded-xl transition-all outline-none bg-white/50"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
           
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="password"
              placeholder="Create Password" 
              className="pl-10 border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 p-3 w-full rounded-xl transition-all outline-none bg-white/50"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="w-full relative group overflow-hidden bg-purple-600 text-white p-3 rounded-xl hover:bg-purple-700 transition-colors shadow-md hover:shadow-lg font-semibold flex justify-center items-center gap-2">
          <span>Create Account</span>
          <UserPlus className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </button>

            <p className="text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600">
            Login
          </Link>
        </p>
     </form>
    </div>
  )

}
export default Register;
