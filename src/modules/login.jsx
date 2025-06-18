import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { FileText } from "lucide-react";
import {Fuel, Utensils, Clapperboard, BriefcaseMedical, CreditCard, PiggyBank, IndianRupee, ShoppingCart, Coins, BarChart3, ChartNoAxesCombined } from 'lucide-react';
import "../styles/login.css";


const data = [
  { month: "Jan", Shopping: 400, Grocery: 300, Travel: 200 },
  { month: "Feb", Shopping: 300, Grocery: 200, Travel: 100 },
  { month: "Mar", Shopping: 500, Grocery: 250, Travel: 150 },
];

export default function Login() {
  return (
    
    <div className="flex min-h-screen">

      {/* Left visual panel */}

      <div className="w-[65%] h-screen bg-gradient-to-tl from-[#103b2f] via-[#0f0f0f] to-[#103b2f] flex flex-col justify-center items-center gap-6">
       
        <h2 className="text-2xl font-semibold mb-4 text-white">Your Expenses</h2>
        <PiggyBank className="bg-icon piggy" />
        <BriefcaseMedical className="bg-icon briefcase-medical" />
        
        <div className="w-full h-60">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Shopping" fill="#f97316" />
              <Bar dataKey="Grocery" fill="#10b981" />
              <Bar dataKey="Travel" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <Fuel className="bg-icon fuel" />
          <Clapperboard className="bg-icon clapperboard" />
          <Utensils className="bg-icon utensils" />
         <div className="flex gap-4">
          {/* Monthly Report Generation */}
          <div className="w-36 bg-white rounded-xl shadow-md p-4 flex flex-col items-center relative group cursor-pointer">
          <FileText className="text-blue-500 mb-2" size={32} />
          <p className="text-sm font-medium text-center text-gray-800">Monthly report</p>
          <p className="absolute top-full mt-1 bg-white shadow-lg border border-gray-200 rounded-md text-xs text-gray-600 p-2 w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">View and download your monthly expense report</p>
          </div>
          <div className="w-36 bg-white rounded-xl shadow-md p-4 flex flex-col items-center relative group cursor-pointer">
            <CreditCard className="text-pink-500 mb-2" size={32} />
            <p className="text-sm font-medium text-gray-800">Budget Limit</p>
            <p className="absolute top-full mt-1 bg-white shadow-lg border border-gray-200 rounded-md text-xs text-gray-600 p-2 w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">Set and manage your budget limit</p>
          </div>
          <div className="w-36 bg-white rounded-xl shadow-md p-4 flex flex-col items-center relative group cursor-pointer">
            <PiggyBank className="text-green-500 mb-2" size={32} />
            <p className="text-sm font-medium text-gray-800">Savings</p>
            <p className="absolute top-full mt-1 bg-white shadow-lg border border-gray-200 rounded-md text-xs text-gray-600 p-2 w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">View and manage your savings goals</p>
          </div>
        </div>
      </div>

  <div className="w-[35%] bg-gradient-to-tl from-[#0f0f0f] via-[#103b2f] to-[#0f0f0f]">
    <Coins className="bg-icon coin" />
      <BarChart3 className="bg-icon graph" />
     
      <PiggyBank className="bg-icon piggy" />
      <ShoppingCart className="bg-icon shopping" />
      <IndianRupee className="bg-icon rupee" />
      
       <h2 className="text-xl font-semibold text-center mb-6 text-white">
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
              <label htmlFor="remember" className="text-xs cursor-pointer text-white">
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




