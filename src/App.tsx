import React, { useState } from 'react';
import ProductHeader from './components/ProductHeader';
import ProductMetrics from './components/ProductMetrics';
import SupplyChainJourney from './components/SupplyChainJourney';
import EcoScore from './components/EcoScore';
import ProductRating from './components/ProductRating';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <ProductHeader />
        <EcoScore />
        <ProductMetrics />
        <SupplyChainJourney />
        <ProductRating />
      </div>
      
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="text-center text-gray-600">
            <p className="mb-2">© 2024 Supply Chain Tracker. All rights reserved.</p>
            <p className="text-sm">Ensuring transparency from farm to table</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;