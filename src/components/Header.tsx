import React from 'react'; 
import { MessageSquare } from 'lucide-react'; 
 
const Header: React.FC = () => {
  return ( 
    <header className="bg-white shadow-md p-4"> 
      <div className="container mx-auto flex items-center justify-between"> 
        <div className="flex items-center space-x-3"> 
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center"> 
            <MessageSquare className="w-6 h-6 text-white" /> 
          </div> 
          <span className="text-xl font-bold text-gray-900">Feeble Assignment</span> 
        </div> 
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"> 
          Get Started 
        </button> 
      </div> 
    </header> 
  ); 
}; 
 
export default Header; 
