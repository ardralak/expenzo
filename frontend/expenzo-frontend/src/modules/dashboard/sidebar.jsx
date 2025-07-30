import { Home, PieChart, BarChart3, LogOut, PlusCircle } from 'lucide-react';

export default function Sidebar({ isOpen, onToggle }) {
  return (
    <div
      className={`h-screen bg-[#121212] text-white shadow-lg transition-all duration-300 flex flex-col ${
        isOpen ? 'w-64' : 'w-16'
      }`}
    >
      <div className="flex items-center justify-between p-4">
        <span className={`text-xl font-bold ${!isOpen && 'hidden'}`}>Expenzo</span>
        <button
          className="text-gray-400 hover:text-white focus:outline-none"
          onClick={onToggle}
        >
          {isOpen ? '⏴' : '⏵'}
        </button>
      </div>

      <nav className="flex-1">
        <ul className="space-y-2 mt-4">
          <SidebarItem icon={<Home size={20} />} label="Home" isOpen={isOpen} />
          <SidebarItem icon={<PieChart size={20} />} label="Current Expenses" isOpen={isOpen} />
          <SidebarItem icon={<BarChart3 size={20} />} label="Trends" isOpen={isOpen} />
          <SidebarItem icon={<PlusCircle size={20} />} label="Add Expense" isOpen={isOpen} />
        </ul>
      </nav>

      <div className="p-4">
        <SidebarItem icon={<LogOut size={20} />} label="Logout" isOpen={isOpen} />
      </div>
    </div>
  );
}

function SidebarItem({ icon, label, isOpen }) {
  return (
    <li className="flex items-center space-x-4 hover:bg-[#1f1f1f] px-4 py-2 rounded-md cursor-pointer transition">
      <span>{icon}</span>
      {isOpen && <span className="text-sm font-medium">{label}</span>}
    </li>
  );
}
