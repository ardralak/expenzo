import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { FileText } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import {CreditCard, PiggyBank, IndianRupee, ShoppingCart, Coins, BarChart3, ChartNoAxesCombined } from 'lucide-react';
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

  <div className="w-[35%] flex bg-[#1B1D1B] flex-col justify-center p-8">
        <Coins className="bg-icon coin" />
        <PiggyBank className="bg-icon piggy" />
        <ShoppingCart className="bg-icon shopping" />
        <IndianRupee className="bg-icon rupee" />
 
        <h2 className="text-xl font-semibold text-center mb-8 text-white">
          Sign in to your account
        </h2>
 
        <div className="flex justify-center">
          <form className="space-y-5 w-full max-w-xs">
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-2 bg-[#2a2a2e] text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 bg-[#2a2a2e] text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
 
            <div className="flex w-full justify-between">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="accent-green-500 w-4 h-4"
                />
                <label htmlFor="remember" className="text-sm cursor-pointer text-white">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-green-400 text-sm hover:underline">
                Forgot password?
              </a>
            </div>
 
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
            >
              Login
            </button>
 
            <div className="flex flex-col items-center gap-3">
              <p className="text-white text-sm">Or Sign in with</p>
 
              <div className="flex items-center gap-4">
                <a
                  href="/auth/google"
                  className="flex items-center gap-2 px-2 py-1 rounded-md shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-lg"
                >
                  <FcGoogle className="w-5 h-5" />
                </a>
 
                <a
                  href="/auth/facebook"
                  className="flex items-center gap-2 px-2 py-1 rounded-md shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-lg"
                >
                  <FaFacebook className="w-5 h-5" />
                </a>
              </div>
            </div>
 
            <div className="flex justify-center">
              <p className="text-sm px-2 text-white">Dont have an account?</p>
              <a href="#" className="text-green-400 hover:underline text-sm">
                Register
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}




