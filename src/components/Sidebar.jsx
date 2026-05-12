import React, { useState } from 'react';
import { 
  BookOpen, Download, Award, FileText, PlayCircle, Compass, 
  Star, Calendar, ChevronRight, ChevronLeft ,ChartSpline
} from 'lucide-react';

const Sidebar = () => {
  const [activeNav, setActiveNav] = useState('Dashboard');
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    {name: 'Dashboard' , icon: ChartSpline},
    { name: 'My Learnings', icon: BookOpen },
    { name: 'My Downloads', icon: Download },
    { name: 'My Rank', icon: Award },
    { name: 'Test Series', icon: FileText },
    { name: 'Start Marathon', icon: PlayCircle },
    { name: 'Explore Marathon', icon: Compass },
  ];

  return (
    <div 
      className={`bg-white border-l border-gray-200 flex flex-col sticky top-0 h-screen transition-all duration-300 ease-in-out relative
        ${isCollapsed ? 'w-[80px]' : 'w-[280px]'}`}
    >
      {/* Collapse Toggle Button (Sits on the left border) */}
      <button 
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -left-4 top-8 bg-white border border-gray-200 rounded-full p-1.5 shadow-sm hover:bg-gray-50 hover:shadow-md transition-all text-gray-500 z-50"
      >
        {isCollapsed ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
      </button>

      {/* Profile Section */}
      <div className={`p-8 flex flex-col items-center border-b border-gray-100 transition-all ${isCollapsed ? 'px-2' : ''}`}>
        <div className="relative mb-3">
          <img 
            src="https://i.pravatar.cc/150?img=11" 
            alt="Profile" 
            className={`rounded-full object-cover border-4 border-gray-50 shadow-sm transition-all duration-300
              ${isCollapsed ? 'w-12 h-12' : 'w-20 h-20'}`}
          />
        </div>
        
        {/* Hide text when collapsed */}
        <div className={`flex flex-col items-center transition-opacity duration-200 ${isCollapsed ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100 h-auto'}`}>
          <h2 className="font-bold text-lg text-gray-900 whitespace-nowrap">Aarav Sharma</h2>
          <p className="text-xs text-gray-500 mb-3 whitespace-nowrap">JEE Aspirant</p>
          <div className="flex items-center gap-1.5 px-3 py-1 bg-violet-50 text-violet-700 rounded-full text-xs font-semibold border border-violet-100 whitespace-nowrap">
            <Star size={12} className="fill-violet-700" /> Pro Member
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className={`flex-1 overflow-y-auto py-6 space-y-1 ${isCollapsed ? 'px-2' : 'px-4'}`}>
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setActiveNav(item.name)}
            title={isCollapsed ? item.name : ""} // Adds tooltip when collapsed
            className={`flex items-center rounded-xl text-sm font-medium transition-all duration-200 group relative
              ${isCollapsed ? 'w-full justify-center p-3' : 'w-full gap-3 px-4 py-3'}
              ${activeNav === item.name 
                ? 'text-violet-700 bg-violet-50' 
                : 'text-gray-600 hover:text-violet-700 hover:bg-violet-50/50'}`}
          >
            <item.icon 
              size={isCollapsed ? 22 : 18} 
              className={`shrink-0 transition-colors
                ${activeNav === item.name ? 'text-violet-600' : 'text-gray-400 group-hover:text-violet-500'}`} 
            />
            
            {/* Hide labels when collapsed */}
            <span className={`whitespace-nowrap transition-all duration-200 ${isCollapsed ? 'w-0 opacity-0 hidden' : 'w-auto opacity-100 block'}`}>
              {item.name}
            </span>
          </button>
        ))}
      </div>

      {/* Right Sidebar Widgets - Hidden entirely when collapsed */}
      <div className={`border-t border-gray-100 transition-all duration-300 overflow-hidden
        ${isCollapsed ? 'h-0 p-0 opacity-0 border-transparent' : 'h-auto p-6 space-y-6 opacity-100'}`}
      >
        {/* Current Rank Mini-Widget */}
        <div>
           <p className="text-xs text-gray-500 mb-1 whitespace-nowrap">Current Rank</p>
           <div className="flex justify-between items-end">
             <div>
               <p className="text-2xl font-bold text-gray-900">1,247</p>
               <p className="text-[10px] text-gray-500 whitespace-nowrap">Top 12% <br/>of total students</p>
             </div>
             <div className="flex items-end gap-1 h-8 shrink-0">
               <div className="w-1.5 bg-gray-200 h-1/3 rounded-t-sm"></div>
               <div className="w-1.5 bg-gray-200 h-1/2 rounded-t-sm"></div>
               <div className="w-1.5 bg-violet-400 h-3/4 rounded-t-sm"></div>
               <div className="w-1.5 bg-violet-600 h-full rounded-t-sm"></div>
             </div>
           </div>
        </div>

        <div className="h-px bg-gray-100 w-full"></div>

        {/* Daily Goal Mini-Widget */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <p className="text-xs text-gray-500 whitespace-nowrap">Daily Goal</p>
            <Calendar size={14} className="text-violet-400 shrink-0" />
          </div>
          <p className="text-lg font-bold text-gray-900 mb-1 whitespace-nowrap">3 <span className="text-sm font-normal text-gray-500">/ 5 Hours</span></p>
          <p className="text-[10px] text-emerald-500 font-medium mb-2 whitespace-nowrap">You're doing great!</p>
          <div className="w-full bg-gray-100 rounded-full h-1.5">
            <div className="bg-violet-600 h-1.5 rounded-full w-[60%]"></div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Sidebar;