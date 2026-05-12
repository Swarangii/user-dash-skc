import React, { useState } from 'react';
import { 
  Search, Filter, BookOpen, PlayCircle, FileText, Book, Clock, 
  MoreVertical, Download, Calendar, BarChart2, LayoutGrid, 
  Award, Target, Navigation
} from 'lucide-react';

// --- MOCK DATA ---
const stats = [
  { title: 'Total Completed', value: '128', sub: '+12 this week', icon: BookOpen, color: 'text-purple-600', bg: 'bg-purple-100' },
  { title: 'Videos Watched', value: '86', sub: '68% of total', icon: PlayCircle, color: 'text-blue-500', bg: 'bg-blue-100' },
  { title: 'PDFs Read', value: '56', sub: '+8 this week', icon: FileText, color: 'text-green-500', bg: 'bg-green-100' },
  { title: 'Booklets', value: '24', sub: '+4 this week', icon: Book, color: 'text-yellow-500', bg: 'bg-yellow-100' },
  { title: 'Total Study Time', value: '48h 32m', sub: '+6h this week', icon: Clock, color: 'text-purple-500', bg: 'bg-purple-100' },
];

const continueLearning = [
  { id: 1, title: 'Coordinate Geometry - Complete Chapter', subject: 'Mathematics • JEE Main', progress: 72, time: '40 min', type: 'video', action: 'Continue' },
  { id: 2, title: 'Chemical Bonding & Molecular Structure', subject: 'Chemistry • NEET', progress: 60, time: 'PDF', type: 'pdf', action: 'Read Again' },
  { id: 3, title: 'Laws of Motion - Important Concepts', subject: 'Physics • JEE Main', progress: 35, time: '1h 10 min', type: 'video', action: 'Continue' },
  { id: 4, title: 'Plant Physiology - Short Notes', subject: 'Biology • NEET', progress: 100, time: 'PDF', type: 'pdf', action: 'Review' },
  { id: 5, title: 'Thermodynamics - Revision', subject: 'Physics • JEE Advanced', progress: 20, time: '50 min', type: 'video', action: 'Continue' },
];

const recentDownloads = [
  { title: 'JEE Main Formula Sheet', size: '1.2 MB' },
  { title: 'NEET Biology - Quick Revision', size: '3.4 MB' },
  { title: 'Important Equations - Physics', size: '2.1 MB' },
  { title: 'Organic Chemistry Notes', size: '4.5 MB' },
];

const recommendedForYou = [
  { title: 'JEE Main Chapter-wise PYQs', sub: 'Mathematics • 120 Pages' },
  { title: 'NEET High Yield Notes', sub: 'Biology • 98 Pages' },
  { title: 'Chemical Reactions Mind Map', sub: 'Chemistry • 25 Pages' },
];

const navItems = [
  { label: 'My Learnings', icon: LayoutGrid, active: true },
  { label: 'My Downloads', icon: Download },
  { label: 'My Rank', icon: Award },
  { label: 'Test Series', icon: FileText },
  { label: 'Start Marathon', icon: Target },
  { label: 'Explore Marathon', icon: Navigation },
];

// --- MAIN COMPONENT ---
export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('All Content');

  return (
    <div className="flex h-screen bg-[#F8F9FB] text-gray-800 font-sans overflow-hidden">
      
      {/* LEFT CONTENT AREA */}
      <div className="flex-1 overflow-y-auto px-8 py-6 custom-scrollbar">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                <BookOpen size={24} />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">My Learnings</h1>
            </div>
            <p className="text-gray-500 text-sm mt-1">Your personal hub for all your study materials and progress</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-purple-600 transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Search topics, subjects, videos..." 
                className="pl-10 pr-4 py-2 w-72 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all shadow-sm"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 bg-white rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
              <Filter size={18} className="text-gray-500" />
              <span className="text-sm font-medium">Filter</span>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-8 border-b border-gray-200 mb-6">
          {['All Content', 'Videos', 'PDFs / Notes', 'Booklets'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-sm font-medium transition-all relative ${
                activeTab === tab ? 'text-purple-600' : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 rounded-t-md transition-all duration-300"></span>
              )}
            </button>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-5 gap-4 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-default group">
              <div className="flex items-start justify-between">
                <div className={`p-2.5 rounded-lg ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon size={20} />
                </div>
              </div>
              <div className="mt-4">
                <p className="text-xs text-gray-500 font-medium">{stat.title}</p>
                <h3 className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</h3>
                <p className="text-xs text-gray-400 mt-1">{stat.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Layout (Left Column & Right Column) */}
        <div className="grid grid-cols-12 gap-6 pb-8">
          
          {/* Continue Learning - Left Column */}
          <div className="col-span-7 bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-gray-900">Continue Learning</h2>
              <button className="text-sm text-purple-600 font-medium hover:text-purple-800 transition-colors">View All</button>
            </div>
            
            <div className="space-y-4">
              {continueLearning.map((item) => (
                <div key={item.id} className="group flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 cursor-pointer">
                  {/* Thumbnail Placeholder */}
                  <div className="w-32 h-20 bg-gray-900 rounded-lg relative overflow-hidden flex items-center justify-center shadow-sm">
                    <span className="text-white text-[10px] font-bold text-center px-2">{item.title.split('-')[0]}</span>
                    <div className="absolute bottom-1 right-1 bg-purple-600 text-white p-1 rounded-full text-[10px]">
                      {item.type === 'video' ? <PlayCircle size={14}/> : <FileText size={14}/>}
                    </div>
                  </div>
                  
                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">{item.title}</h3>
                        <p className="text-xs text-gray-500 mt-0.5">{item.subject}</p>
                      </div>
                      <span className="text-xs text-gray-400">{item.time}</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="mt-3 flex items-center gap-3">
                      <div className="flex-1 bg-gray-200 rounded-full h-1.5 overflow-hidden">
                        <div 
                          className="bg-purple-600 h-1.5 rounded-full transition-all duration-1000 ease-out" 
                          style={{ width: `${item.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500 w-24">{item.progress}% Completed</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <button className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-all ${
                      item.action === 'Continue' 
                        ? 'bg-purple-600 text-white hover:bg-purple-700 shadow-md hover:shadow-lg' 
                        : 'bg-white text-purple-600 border border-purple-200 hover:bg-purple-50'
                    }`}>
                      {item.action}
                    </button>
                    <button className="text-gray-400 hover:text-gray-700 transition-colors p-1 rounded-full hover:bg-gray-200">
                      <MoreVertical size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 flex justify-center">
               <button className="px-6 py-2 text-sm font-medium text-purple-600 border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors">
                 View All Content
               </button>
            </div>
          </div>

          {/* Right Column (Widgets) */}
          <div className="col-span-5 space-y-6">
            
            {/* Subjects Overview */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Subjects Overview</h2>
              <div className="flex items-center gap-6">
                {/* CSS Donut Chart */}
                <div className="relative w-28 h-28 rounded-full shadow-inner" style={{
                  background: 'conic-gradient(#8b5cf6 0% 45%, #3b82f6 45% 70%, #22c55e 70% 85%, #eab308 85% 100%)'
                }}>
                  <div className="absolute inset-2 bg-white rounded-full shadow-sm"></div>
                </div>
                
                {/* Legend */}
                <div className="flex-1 space-y-2.5">
                  {[
                    { name: 'Physics', color: 'bg-purple-500', val: '68%' },
                    { name: 'Chemistry', color: 'bg-blue-500', val: '56%' },
                    { name: 'Mathematics', color: 'bg-green-500', val: '72%' },
                    { name: 'Biology', color: 'bg-yellow-500', val: '60%' },
                  ].map((legend, i) => (
                    <div key={i} className="flex justify-between items-center text-sm hover:translate-x-1 transition-transform cursor-default">
                      <div className="flex items-center gap-2">
                        <span className={`w-2.5 h-2.5 rounded-full ${legend.color}`}></span>
                        <span className="text-gray-600">{legend.name}</span>
                      </div>
                      <span className="font-medium text-gray-900">{legend.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Downloads */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-gray-900">Recent Downloads</h2>
                <button className="text-sm text-purple-600 font-medium hover:underline">View All</button>
              </div>
              <div className="space-y-3">
                {recentDownloads.map((doc, i) => (
                  <div key={i} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors group cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-red-50 text-red-500 rounded-lg">
                        <FileText size={16} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-800 group-hover:text-purple-600 transition-colors">{doc.title}</p>
                        <p className="text-xs text-gray-400">PDF • {doc.size}</p>
                      </div>
                    </div>
                    <button className="text-gray-400 group-hover:text-purple-600 transition-colors p-2 hover:bg-purple-100 rounded-full">
                      <Download size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-gray-900">Recommended for You</h2>
                <button className="text-sm text-purple-600 font-medium hover:underline">View All</button>
              </div>
              <div className="space-y-4">
                 {recommendedForYou.map((rec, i) => (
                  <div key={i} className="flex items-center gap-3 group cursor-pointer">
                    <div className="w-12 h-12 bg-gray-800 rounded-md shadow-sm border border-gray-200"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-800 group-hover:text-purple-600 transition-colors">{rec.title}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{rec.sub}</p>
                    </div>
                  </div>
                 ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* RIGHT SIDEBAR */}
      <div className="w-72 bg-white border-l border-gray-200 p-6 flex flex-col overflow-y-auto">
        
        {/* Profile */}
        <div className="flex flex-col items-center mb-8 pb-6 border-b border-gray-100">
          <div className="w-20 h-20 rounded-full bg-gray-200 mb-3 overflow-hidden border-2 border-white shadow-md">
            <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <h2 className="text-lg font-bold text-gray-900">Aarav Sharma</h2>
          <p className="text-sm text-gray-500 mb-2">JEE Aspirant</p>
          <div className="flex items-center gap-1.5 px-3 py-1 bg-purple-50 border border-purple-200 text-purple-600 rounded-full text-xs font-semibold">
            <Award size={12} /> Pro Member
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-1 mb-8 flex-1">
          {navItems.map((item, idx) => (
            <button 
              key={idx} 
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                item.active 
                  ? 'bg-purple-50 text-purple-700 shadow-sm' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-purple-600'
              }`}
            >
              <item.icon size={18} className={item.active ? 'text-purple-600' : 'text-gray-400'} />
              {item.label}
            </button>
          ))}
        </nav>

        {/* Current Rank Widget */}
        <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 mb-4 hover:shadow-md transition-shadow cursor-default group">
          <p className="text-sm text-gray-500 mb-1">Current Rank</p>
          <div className="flex items-end justify-between">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">1,247</h3>
              <p className="text-xs text-gray-500 mt-1">Top 12%<br/>of total students</p>
            </div>
            {/* Mini Chart Placeholder */}
            <div className="flex items-end gap-1 h-10">
              <div className="w-2 bg-purple-200 rounded-t-sm h-4"></div>
              <div className="w-2 bg-purple-300 rounded-t-sm h-6"></div>
              <div className="w-2 bg-purple-400 rounded-t-sm h-8"></div>
              <div className="w-2 bg-purple-600 rounded-t-sm h-10"></div>
            </div>
          </div>
        </div>

        {/* Daily Goal Widget */}
        <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow cursor-default">
          <div className="flex justify-between items-center mb-3">
            <p className="text-sm text-gray-500">Daily Goal</p>
            <div className="p-1.5 bg-purple-100 text-purple-600 rounded-lg">
              <Calendar size={16} />
            </div>
          </div>
          <p className="text-xl font-bold text-gray-900 mb-1">3 <span className="text-sm font-normal text-gray-500">/ 5 Hours</span></p>
          <p className="text-xs text-gray-500 mb-3">You're doing great!</p>
          
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-purple-600 h-2 rounded-full" style={{ width: '60%' }}></div>
          </div>
        </div>

      </div>
    </div>
  );
}