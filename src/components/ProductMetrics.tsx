import React from 'react';
import { MapPin, Calendar, Award } from 'lucide-react';

const ProductMetrics: React.FC = () => {
  const metrics = [
    {
      icon: MapPin,
      title: 'Origin Farm',
      subtitle: 'Mountain View Organic',
      color: 'text-emerald-500',
    },
    {
      icon: Calendar,
      title: 'Harvest Date',
      subtitle: 'January 12, 2024',
      color: 'text-blue-500',
    },
    {
      icon: Award,
      title: 'Quality Score',
      subtitle: '96/100',
      color: 'text-purple-500',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-shadow"
          >
            <div className={`${metric.color} mb-3 flex justify-center`}>
              <Icon size={32} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">{metric.title}</h3>
            <p className="text-gray-600">{metric.subtitle}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductMetrics;