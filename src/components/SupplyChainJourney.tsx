import React from 'react';
import { Tractor, Truck, Store, User, CheckCircle, Clock } from 'lucide-react';

const SupplyChainJourney: React.FC = () => {
  const journeySteps = [
    {
      id: 'farm',
      icon: Tractor,
      title: 'Farm',
      subtitle: 'Mountain View Organic Farm',
      description: 'Harvested using certified organic methods',
      date: 'January 12, 2024',
      status: 'complete',
    },
    {
      id: 'distributor',
      icon: Truck,
      title: 'Distributor',
      subtitle: 'FreshLink Distribution Center',
      description: 'Temperature controlled transport',
      date: 'January 13, 2024',
      status: 'complete',
    },
    {
      id: 'retailer',
      icon: Store,
      title: 'Retailer',
      subtitle: 'EcoMart Supermarket',
      description: 'Proper storage maintained',
      date: 'January 14, 2024',
      status: 'complete',
    },
    {
      id: 'consumer',
      icon: User,
      title: 'Consumer',
      subtitle: 'Your Table',
      description: 'Enjoy your organic apples!',
      date: 'January 18, 2024',
      status: 'current',
    },
  ];

  const getStatusBadge = (status: string) => {
    if (status === 'complete') {
      return (
        <div className="flex items-center text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full text-sm font-medium">
          <CheckCircle size={16} className="mr-1" />
          Complete
        </div>
      );
    } else if (status === 'current') {
      return (
        <div className="flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm font-medium">
          <Clock size={16} className="mr-1" />
          Current
        </div>
      );
    }
  };

  const getIconColor = (status: string) => {
    return status === 'complete' ? 'text-white bg-emerald-500' : 
           status === 'current' ? 'text-white bg-blue-500' : 
           'text-gray-400 bg-gray-100';
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
      <div className="flex items-center mb-6">
        <div className="bg-gray-100 p-2 rounded-lg mr-3">
          <Truck size={20} className="text-gray-600" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900">Supply Chain Journey</h2>
          <p className="text-gray-600">Track your product's complete journey from farm to table</p>
        </div>
      </div>

      <div className="space-y-6">
        {journeySteps.map((step, index) => {
          const Icon = step.icon;
          const isLast = index === journeySteps.length - 1;

          return (
            <div key={step.id} className="relative">
              <div className="flex items-start space-x-4">
                <div className="relative">
                  <div className={`p-3 rounded-full ${getIconColor(step.status)}`}>
                    <Icon size={20} />
                  </div>
                  {!isLast && (
                    <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gray-200"></div>
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">{step.title}</h3>
                      <p className="font-medium text-emerald-600 text-sm">{step.subtitle}</p>
                      <p className="text-gray-600 text-sm mt-1">{step.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500 mb-2">{step.date}</p>
                      {getStatusBadge(step.status)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SupplyChainJourney;