import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import { Mail, Lock, LogIn } from 'lucide-react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    
    const success = login(email, password);
    if (success) {
      navigate('/');
    } else {
      const storeError = useAuthStore.getState().error;
      setError(storeError || 'Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100 p-4">
     <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-lg p-10 rounded-2xl shadow-xl w-full max-w-md space-y-6 border border-white/50">
        <div className="text-center mb-6">
          <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <LogIn className="w-8 h-8 text-indigo-600" />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900">Welcome Back</h2>
          <p className="text-gray-500 mt-2">Sign in to your account to continue</p>
        </div>
        
        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm text-center border border-red-100">
            {error}
          </div>
        )}
        
        <div className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="email" 
              placeholder="Email address" 
              className="pl-10 border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 p-3 w-full rounded-xl transition-all outline-none bg-white/50"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="password" 
              placeholder="Password" 
              className="pl-10 border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 p-3 w-full rounded-xl transition-all outline-none bg-white/50"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        
        <button type="submit" className="w-full relative group overflow-hidden bg-indigo-600 text-white p-3 rounded-xl hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg font-semibold flex justify-center items-center gap-2">
          <span>Sign In</span>
          <LogIn className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
        
        <p className="text-center text-sm">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Login;
