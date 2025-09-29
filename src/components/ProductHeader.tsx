import React from 'react';

const ProductHeader: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-6 mb-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="bg-emerald-500 text-white p-3 rounded-lg font-bold text-lg">
            🥭
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Premium Organic Apples</h1>
            <p className="text-gray-600 mt-1">
              Certified organic variety from sustainable mountain farms
            </p>
          </div>
        </div>
        <div className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
          ✓ Verified Organic
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;