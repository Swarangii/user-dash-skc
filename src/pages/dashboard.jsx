import React, { useState } from 'react';
import { 
  Clock, Trophy, Target, TrendingUp, Calendar, ChevronDown, 
  BookOpen, Download, Award, FileText, PlayCircle, Compass, 
  Flame, CheckCircle2, ChevronRight, BarChart3, Star
} from 'lucide-react';

// Assuming these are your paths based on previous iterations
import stat from "../../public/assets/stat-banner.png";
import marathon from "../../public/assets/marathon-banner.png";

const Dashboard = () => {
  const [activeNav, setActiveNav] = useState('My Learnings');

  const navItems = [
    { name: 'My Learnings', icon: BookOpen },
    { name: 'My Downloads', icon: Download },
    { name: 'My Rank', icon: Award },
    { name: 'Test Series', icon: FileText },
    { name: 'Start Marathon', icon: PlayCircle },
    { name: 'Explore Marathon', icon: Compass },
  ];

  const recentTests = [
    { name: 'JEE Main Full Test - 24', date: '11 May, 2024 • 180 Questions', score: '152 / 180', percent: '84%' },
    { name: 'JEE Main Chapter Test - Physics', date: '10 May, 2024 • 45 Questions', score: '38 / 45', percent: '84%' },
    { name: 'JEE Main Chapter Test - Chemistry', date: '09 May, 2024 • 45 Questions', score: '35 / 45', percent: '78%' },
    { name: 'JEE Main Chapter Test - Maths', date: '08 May, 2024 • 45 Questions', score: '40 / 45', percent: '89%' },
  ];

  return (
    <div className="flex w-full min-h-screen bg-[#F8F9FA] font-sans text-gray-800">
      
      {/* LEFT MAIN CONTENT AREA */}
      <div className="flex-1 p-6 space-y-6 overflow-y-auto">
        
        {/* Top Banner */}
        <div className="relative bg-[#1A1147] rounded-3xl p-8 text-white shadow-lg overflow-hidden">
          <img 
            src={stat} 
            alt="Stats Banner Background" 
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
          />
          
          <div className="flex justify-between items-start mb-8 relative z-10">
            <div>
              <p className="text-gray-300 mb-1">Welcome back,</p>
              <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
                Aarav <span className="animate-bounce">👋</span>
              </h1>
              <p className="text-gray-300 text-sm">Stay consistent, stay focused, success is yours!</p>
            </div>
            
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-10">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-4 text-gray-800 shadow-sm transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-emerald-50 rounded-lg text-emerald-500"><TrendingUp size={20} /></div>
                <span className="text-sm text-gray-500 font-medium">Tests Attempted</span>
              </div>
              <div className="text-2xl font-bold mb-1">24</div>
              <div className="text-xs text-emerald-500 font-medium">+3 this week</div>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-4 text-gray-800 shadow-sm transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-500"><Clock size={20} /></div>
                <span className="text-sm text-gray-500 font-medium">Total Study Time</span>
              </div>
              <div className="text-2xl font-bold mb-1">48<span className="text-lg text-gray-500">h</span> 32<span className="text-lg text-gray-500">m</span></div>
              <div className="text-xs text-blue-500 font-medium">+6h this week</div>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-4 text-gray-800 shadow-sm transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-amber-50 rounded-lg text-amber-500"><Trophy size={20} /></div>
                <span className="text-sm text-gray-500 font-medium">Current Rank</span>
              </div>
              <div className="text-2xl font-bold mb-1">1,247</div>
              <div className="text-xs text-gray-500 font-medium">Top 12% students</div>
            </div>
            {/* Card 4 */}
            <div className="bg-white rounded-2xl p-4 text-gray-800 shadow-sm transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-purple-50 rounded-lg text-purple-500"><Target size={20} /></div>
                <span className="text-sm text-gray-500 font-medium">Accuracy</span>
              </div>
              <div className="text-2xl font-bold mb-1">82%</div>
              <div className="text-xs text-emerald-500 font-medium">+5% this week</div>
            </div>
          </div>
        </div>

        {/* Second Row: Progress & Next Test */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Preparation Progress */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 lg:col-span-2 group hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-semibold">Your Preparation Progress</h2>
              <button className="flex items-center text-xs text-gray-500 border border-gray-200 rounded-md px-2 py-1 hover:bg-gray-50 transition-colors">
                JEE Main <ChevronDown size={14} className="ml-1" />
              </button>
            </div>
            
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-xs text-gray-500 mb-1">Overall Progress</p>
                <p className="text-3xl font-bold mb-2">68%</p>
                <div className="w-48 bg-gray-100 rounded-full h-2">
                  <div className="bg-violet-600 h-2 rounded-full w-[68%] transition-all duration-1000 ease-out"></div>
                </div>
                <p className="text-xs text-gray-500 mt-2">Keep it up!</p>
              </div>
              
              <div className="space-y-4 w-1/2">
                <div>
                  <div className="flex justify-between text-xs mb-1"><span>Physics</span><span className="font-medium">72%</span></div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5"><div className="bg-blue-500 h-1.5 rounded-full w-[72%]"></div></div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1"><span>Chemistry</span><span className="font-medium">65%</span></div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5"><div className="bg-emerald-500 h-1.5 rounded-full w-[65%]"></div></div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1"><span>Mathematics</span><span className="font-medium">67%</span></div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5"><div className="bg-purple-500 h-1.5 rounded-full w-[67%]"></div></div>
                </div>
              </div>
            </div>
          </div>

          {/* Next Test */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 lg:col-span-3 group hover:shadow-md transition-shadow flex flex-col justify-between">
             <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold">Next Test</h2>
              <button className="text-sm text-violet-600 font-medium hover:text-violet-700 transition-colors">View All</button>
            </div>
            <div className="border border-gray-100 rounded-xl p-5 bg-[#FAFAFC]">
              <h3 className="font-semibold text-lg">JEE Main Full Test - 25</h3>
              <p className="text-sm text-gray-500 mb-4">Full Syllabus Mock Test</p>
              <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
                <span className="flex items-center gap-1.5"><FileText size={16} className="text-gray-400"/> 180 Questions</span>
                <span className="flex items-center gap-1.5"><Clock size={16} className="text-gray-400"/> 3 Hours</span>
                <span className="flex items-center gap-1.5"><Calendar size={16} className="text-gray-400"/> 11 May, 2024</span>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 bg-violet-600 text-white py-2.5 rounded-lg font-medium hover:bg-violet-700 active:scale-[0.98] transition-all">Start Test</button>
                <button className="flex-1 bg-violet-50 text-violet-700 py-2.5 rounded-lg font-medium hover:bg-violet-100 active:scale-[0.98] transition-all">Test Details</button>
              </div>
            </div>
          </div>
        </div>

        {/* Third Row: Performance, Streak, Recommended */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Recent Performance */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 group hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center mb-5">
              <h2 className="font-semibold">Recent Performance</h2>
              <button className="text-sm text-violet-600 font-medium hover:text-violet-700 transition-colors">View All</button>
            </div>
            <div className="space-y-4">
              {recentTests.map((test, idx) => (
                <div key={idx} className="flex justify-between items-center p-2 -mx-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                  <div>
                    <h4 className="text-sm font-medium text-gray-800">{test.name}</h4>
                    <p className="text-xs text-gray-400 mt-0.5">{test.date}</p>
                  </div>
                  <div className="text-right flex items-center gap-3">
                    <span className="text-sm font-medium text-gray-600">{test.score}</span>
                    <span className={`text-xs font-semibold ${idx === 2 ? 'text-amber-500' : 'text-emerald-500'}`}>{test.percent}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Study Streak */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 group hover:shadow-md transition-shadow">
            <h2 className="font-semibold mb-4">Study Streak</h2>
            <div className="flex items-center gap-2 mb-2">
              <Flame size={24} className="text-orange-500 fill-orange-500" />
              <span className="text-2xl font-bold">12 <span className="text-sm font-normal text-gray-500">Days</span></span>
            </div>
            <p className="text-xs text-gray-500 mb-6">Keep your streak alive!</p>
            
            <div className="flex justify-between mb-6">
              {['M','T','W','T','F','S','S'].map((day, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2">
                  <span className="text-[10px] text-gray-400 font-medium">{day}</span>
                  {idx < 6 ? (
                    <div className="w-7 h-7 rounded-full bg-violet-600 flex items-center justify-center text-white shadow-sm">
                      <CheckCircle2 size={16} />
                    </div>
                  ) : (
                    <div className="w-7 h-7 rounded-full border-2 border-violet-200 flex items-center justify-center">
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="bg-violet-50 text-violet-700 text-xs p-4 rounded-xl text-center font-medium leading-relaxed">
              Success is the sum of small efforts, repeated day in and day out.
            </div>
          </div>

          {/* Recommended for You */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 group hover:shadow-md transition-shadow">
            <h2 className="font-semibold mb-4">Recommended for You</h2>
            <div className="space-y-3">
              
              <div className="flex items-center justify-between p-3 border border-gray-100 rounded-xl hover:border-violet-200 transition-colors cursor-pointer group/item">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-amber-50 rounded-lg text-amber-500"><FileText size={18} /></div>
                  <div>
                    <h4 className="text-sm font-medium">Revision Notes - Physics</h4>
                    <p className="text-[11px] text-gray-400">Handwritten Notes</p>
                  </div>  
                </div>
                <button className="text-xs text-violet-600 bg-violet-50 px-3 py-1.5 rounded-lg font-medium opacity-0 group-hover/item:opacity-100 transition-opacity">View</button>
              </div>

              <div className="flex items-center justify-between p-3 border border-gray-100 rounded-xl hover:border-violet-200 transition-colors cursor-pointer group/item">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-500"><FileText size={18} /></div>
                  <div>
                    <h4 className="text-sm font-medium">Important Formulas - Maths</h4>
                    <p className="text-[11px] text-gray-400">Formula Sheet</p>
                  </div>
                </div>
                <button className="text-xs text-violet-600 bg-violet-50 px-3 py-1.5 rounded-lg font-medium opacity-0 group-hover/item:opacity-100 transition-opacity">View</button>
              </div>

              <div className="flex items-center justify-between p-3 border border-gray-100 rounded-xl hover:border-violet-200 transition-colors cursor-pointer group/item">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-50 rounded-lg text-emerald-500"><FileText size={18} /></div>
                  <div>
                    <h4 className="text-sm font-medium">NEET Biology - Quick Revision</h4>
                    <p className="text-[11px] text-gray-400">Short Notes</p>
                  </div>
                </div>
                <button className="text-xs text-violet-600 bg-violet-50 px-3 py-1.5 rounded-lg font-medium opacity-0 group-hover/item:opacity-100 transition-opacity">View</button>
              </div>

            </div>
            <button className="w-full text-center text-sm text-violet-600 font-medium mt-4 hover:underline">View All Resources</button>
          </div>
        </div>

        {/* Promo Banner Footer */}
        <div className="relative rounded-2xl p-6 border border-orange-100 flex flex-col md:flex-row items-center justify-between overflow-hidden">
          
          {/* Background Image injected here */}
          <img 
            src={marathon} 
            alt="Marathon Banner Background" 
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          <div className="mb-4 md:mb-0 relative z-10">
            <h2 className="text-lg font-bold text-gray-900 mb-1">Take Your Preparation to the Next Level!</h2>
            <p className="text-sm text-gray-600 mb-4">Join marathon tests and compete with toppers across India.</p>
            <div className="flex gap-3">
              <button className="bg-violet-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-violet-700 transition-colors shadow-sm active:scale-95">Start Marathon</button>
              <button className="bg-white text-gray-700 px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 border border-gray-200 transition-colors shadow-sm active:scale-95">Explore Marathon</button>
            </div>
          </div>
          
          <div className="flex items-center gap-6 relative z-10">
            <div className="relative">
              <Trophy size={64} className="text-yellow-400 drop-shadow-md" />
              <div className="absolute -bottom-2 -right-2 bg-gray-900 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">PRO</div>
            </div>
            <div className="flex gap-4">
              <div className="bg-white/60 p-3 rounded-xl border border-white/50 backdrop-blur-sm">
                 <div className="flex -space-x-2 mb-1">
                    <div className="w-6 h-6 rounded-full bg-blue-200 border border-white"></div>
                    <div className="w-6 h-6 rounded-full bg-emerald-200 border border-white"></div>
                    <div className="w-6 h-6 rounded-full bg-purple-200 border border-white"></div>
                 </div>
                 <p className="text-[10px] font-bold text-red-500">25K+ <span className="text-gray-500 font-normal">Students Enrolled</span></p>
              </div>
              <div className="bg-white/60 p-3 rounded-xl border border-white/50 backdrop-blur-sm flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-lg"><Star size={16} className="text-purple-600"/></div>
                <div>
                  <p className="text-xs font-semibold">Live Rankings</p>
                  <p className="text-[10px] text-gray-500">Updated in Real-time</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* RIGHT SIDEBAR */}
      

    </div>
  );
};

export default Dashboard;