import "../styles/login.css";
import logo from "../assets/expenzo_logo.svg";

import { PiggyBank, IndianRupee, ShoppingCart, Coins, BarChart3, Sparkles,ChartNoAxesCombined } from 'lucide-react';

function Login() {
  return (
   <div class="flex h-screen">
    
  <div class="w-[65%] h-screen bg-gradient-to-br from-[#363535] to-[#245847]">
      
    Left Side
  </div>
  <div class="w-[35%]">
    <Coins className="bg-icon coin" />
      <BarChart3 className="bg-icon graph" />
     
      <PiggyBank className="bg-icon piggy" />
      <ShoppingCart className="bg-icon shopping" />
      <IndianRupee className="bg-icon rupee" />
      <Sparkles className="bg-icon sparkle sparkle1" />
      <Sparkles className="bg-icon sparkle sparkle2" />
       <h2 className="text-xl font-semibold text-center mb-6">
          Sign in to your account
        </h2>

        {/* Form */}
        <div className="flex justify-center">
          <form className="space-y-5 w-full max-w-xs">
            {/* Username */}
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-2 bg-[#2a2a2e] text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 bg-[#2a2a2e] text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            {/* Remember Me */}
            <div className="flex w-[100%] space-x-24"> 
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                className="accent-green-500 w-4 h-4"
              />
              <label htmlFor="remember" className="text-xs cursor-pointer">
                Remember me
              </label>
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end ">
              <a href="#" className="text-green-400 hover:underline text-xs">
                Forgot password?
              </a>
            </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
            >
              Login
            </button>

            {/* Sign Up Link */}
            <div className="flex justify-center">
              <a href="#" className="text-green-400 hover:underline text-sm">
                Sign Up / Register
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
    
  );
}

export default Login;
