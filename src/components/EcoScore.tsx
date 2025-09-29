import React from 'react';
import { Leaf, Shield } from 'lucide-react';

const EcoScore: React.FC = () => {
  const ecoScore = 78;
  const circumference = 2 * Math.PI * 45;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (ecoScore / 100) * circumference;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {/* Eco Score with Circular Progress */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center mb-6">
          <div className="bg-green-100 p-2 rounded-lg mr-3">
            <Leaf size={20} className="text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Eco-Score</h3>
        </div>
        
        <div className="flex items-center justify-center mb-6">
          <div className="relative w-32 h-32">
            <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
              {/* Background circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="#f3f4f6"
                strokeWidth="8"
                fill="none"
              />
              {/* Progress circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="#10b981"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">{ecoScore}</div>
                <div className="text-sm text-gray-500">Quality Score</div>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 text-center">
          Low carbon footprint, sustainable farming practices
        </p>
      </div>

      {/* Blockchain Verified */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center mb-4">
          <div className="bg-blue-100 p-2 rounded-lg mr-3">
            <Shield size={20} className="text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Blockchain Verified</h3>
        </div>
        
        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-2">Transaction Hash:</p>
          <p className="text-xs font-mono bg-gray-100 p-2 rounded text-gray-800">
            0x7f9a2b8c...
          </p>
        </div>
        
        <button className="text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors flex items-center">
          <Shield size={16} className="mr-1" />
          View Full Blockchain History
        </button>
      </div>
    </div>
  );
};

export default EcoScore;