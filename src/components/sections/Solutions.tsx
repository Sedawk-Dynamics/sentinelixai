import React from 'react';
import { solutions } from '../../data';
import { Shield, FileBarChart, Eye, Lock, MessageSquareWarning, PieChart, Activity, Key, Car, Zap, Gauge, Settings, BarChart3, Cpu, Battery, Wrench, Monitor, Thermometer, Code } from 'lucide-react';

const Solutions: React.FC = () => {
  // Map icon strings to Lucide React components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield':
        return <Shield size={36} className="text-secondary-500" />;
      case 'FileBarChart':
        return <FileBarChart size={36} className="text-secondary-500" />;
      case 'Eye':
        return <Eye size={36} className="text-secondary-500" />;
      case 'Lock':
        return <Lock size={36} className="text-secondary-500" />;
      case 'MessageSquareWarning':
        return <MessageSquareWarning size={36} className="text-secondary-500" />;
      case 'PieChart':
        return <PieChart size={36} className="text-secondary-500" />;
      case 'Activity':
        return <Activity size={36} className="text-secondary-500" />;
      case 'Key':
        return <Key size={36} className="text-secondary-500" />;
      case 'Car':
        return <Car size={36} className="text-secondary-500" />;
      case 'Zap':
        return <Zap size={36} className="text-secondary-500" />;
      case 'Gauge':
        return <Gauge size={36} className="text-secondary-500" />;
      case 'Settings':
        return <Settings size={36} className="text-secondary-500" />;
      case 'BarChart3':
        return <BarChart3 size={36} className="text-secondary-500" />;
      case 'Cpu':
        return <Cpu size={36} className="text-secondary-500" />;
      case 'Battery':
        return <Battery size={36} className="text-secondary-500" />;
      case 'Wrench':
        return <Wrench size={36} className="text-secondary-500" />;
      case 'Monitor':
        return <Monitor size={36} className="text-secondary-500" />;
      case 'Thermometer':
        return <Thermometer size={36} className="text-secondary-500" />;
      case 'Code':
        return <Code size={36} className="text-secondary-500" />;
      default:
        return <Shield size={36} className="text-secondary-500" />;
    }
  };

  // Filter solutions to show only a subset on home page (4 from each domain)
  const bfsiSolutions = solutions.filter(s => s.domain === 'bfsi');
  const automotiveSolutions = solutions.filter(s => s.domain === 'automotive');
  const featuredSolutions = [...bfsiSolutions, ...automotiveSolutions];

  return (
    <section id="solutions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-4">
            AI-Powered Solutions Across Industries
          </h2>
          <p className="text-lg text-gray-600">
            From cybersecurity in financial services to intelligent automotive systems, our AI solutions drive innovation across industries.
          </p>
        </div>

        {/* BFSI Solutions Section */}
        <div id="bfsi-solutions" className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-primary-800 mb-4">BFSI Solutions</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Advanced cybersecurity solutions for banking, financial services, and insurance sectors.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {bfsiSolutions.map((solution) => (
              <div
              key={solution.id}
              className="bg-white rounded-lg shadow-card hover:shadow-card-hover p-6 transition-all duration-300 border border-gray-100 flex flex-col h-full group"
            >
              <div className="p-2 rounded-full bg-primary-50 w-fit mb-6">{getIcon(solution.icon)}</div>
              <h3 className="text-xl font-semibold text-primary-800 mb-3 group-hover:text-secondary-500 transition-colors">
                {solution.title}
              </h3>
              <p className="text-gray-600 mb-6 flex-grow">{solution.description}</p>
              
              <div className="mt-auto">
                <h4 className="font-medium text-primary-700 mb-2">Key Benefits:</h4>
                <ul className="space-y-2">
                  {solution.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary-500 mt-2 mr-2"></span>
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            ))}
          </div>
        </div>

        {/* Automotive Solutions Section */}
        <div id="automotive-solutions">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-primary-800 mb-4">Automotive Solutions</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Intelligent analytics and optimization for ICE and EV systems, tailored for OEMs, fleets, and infrastructure operators.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {automotiveSolutions.map((solution) => (
              <div
                key={solution.id}
                className="bg-white rounded-lg shadow-card hover:shadow-card-hover p-6 transition-all duration-300 border border-gray-100 flex flex-col h-full group"
              >
                <div className="p-2 rounded-full bg-primary-50 w-fit mb-4">{getIcon(solution.icon)}</div>
                <h4 className="text-xl font-semibold text-primary-800 mb-3 group-hover:text-secondary-500 transition-colors">
                  {solution.title}
                </h4>
                <p className="text-gray-600 mb-6 flex-grow">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;