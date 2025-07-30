import React, { useState } from "react";
import Sidebar from "./Menubar";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Legend } from "recharts";
import { Plus } from "lucide-react";

const pieData = [
    { name: "Rent", value: 450 },
    { name: "Groceries", value: 300 },
    { name: "Travel", value: 200 },
    { name: "Misc", value: 150 },
];

const PIE_COLORS = ["#34D399", "#FBBF24", "#60A5FA", "#F472B6"]; // teal, amber, blue, pink

const barData = [
    { month: "Jan", Food: 1000, Misc: 850 },
    { month: "Feb", Food: 1100, Misc: 950 },
    { month: "Mar", Food: 900, Misc: 980 },
];

const CustomDarkTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        backgroundColor: '#1f2937',
        color: '#fff',
        padding: '8px 12px',
        borderRadius: '6px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
        fontSize: '0.85rem'
      }}>
        <p>{`${payload[0].name} : ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

export default function Dash() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="flex h-screen bg-gradient-to-tl from-[#103b2f] via-[#0f0f0f] to-[#103b2f] text-white overflow-hidden">
            {/* Sidebar */}
            <Sidebar isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />

            {/* Main Content */}
            <div className="flex-1 p-8 overflow-auto relative">
                <h1 className="text-3xl font-bold mb-6">Welcome back, User!</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Pie Chart */}
                    <div className="bg-[#1B1D1B] p-6 rounded-lg shadow-md">
                        <h2 className="text-xl mb-4">This Month's Expenses</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart width={350} height={350}>
                                <Pie data={pieData} cx="50%" cy="50%" outerRadius={110} innerRadius={60} paddingAngle={5}
                                    dataKey="value" labelLine={false} label={({ name, percent }) =>
                                        `${name} (${(percent * 100).toFixed(0)}%)`
                                    }>
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip content={<CustomDarkTooltip />} 
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Bar Chart */}
                    <div className="bg-[#1B1D1B] p-6 rounded-lg shadow-md">
                        <h2 className="text-xl mb-4">Monthly Comparison</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={barData} barCategoryGap="30%">
                                <XAxis dataKey="month" stroke="#e5e7eb" />
                                <YAxis stroke="#e5e7eb" />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: "#ffffff",
                                        border: "none",
                                        color: "white",
                                        fontSize: "0.9rem",
                                    }}
                                />
                                <Legend
                                    wrapperStyle={{
                                        color: "white",
                                        fontSize: "0.8rem",
                                    }}
                                />
                                <Bar dataKey="Food" fill="#6EE7B7" radius={[4, 4, 0, 0]} name="Food"/>
                                <Bar dataKey="Misc" fill="#FDE68A" radius={[4, 4, 0, 0]} name="Misc"/>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Add Expense Button */}
                <button className="fixed bottom-8 right-8 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition">
                    <Plus size={24} />
                </button>
            </div>
        </div>
    );
}
