import { Routes, Route } from "react-router-dom";

// Pages
import Dashboard from "./pages/dashboard.jsx";
import Learning from "./pages/myLearning.jsx";

// Components
import Sidebar from "./components/Sidebar"; // Make sure this path matches your file structure

function App() {
  return (
    /* Main Layout Wrapper */
    <div className="flex w-full min-h-screen bg-[#F8F9FA] font-sans text-gray-800">
      
      {/* Dynamic Page Content Area */}
      <div className="flex-1 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/my-learning" element={<Learning />} />
          {/* Add more routes here */}
        </Routes>
      </div>

      {/* Global Right Sidebar */}
      <Sidebar />
      
    </div>
  );
}

export default App;