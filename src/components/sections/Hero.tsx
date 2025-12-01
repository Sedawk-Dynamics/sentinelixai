import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      {/* Background gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900 to-primary-800 z-0"></div>
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#39a2ae_1px,transparent_1px)] [background-size:20px_20px] z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-20">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span className="text-secondary-500">AI-Powered</span> Intelligence Across Industries
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-xl">
              SentinelixAI delivers cutting-edge AI/ML solutions for cybersecurity in financial services and redefines 
              intelligence in ICE and EV systems with predictive analytics, real-time simulation, and advanced diagnostics.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#bfsi-solutions"
                className="px-6 py-3 bg-secondary-500 text-white font-medium rounded-md hover:bg-secondary-600 transition-colors flex items-center justify-center"
              >
                Explore Solutions
                <ArrowRight className="ml-2" size={18} />
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white hover:text-primary-900 transition-colors flex items-center justify-center"
              >
                Request Demo
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 animate-slide-in-right">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="SentinelixAI Dashboard"
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted by section */}
      <div className="bg-white py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm font-medium uppercase tracking-wider mb-6">
            Trusted by leading financial institutions and automotive companies
          </p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
            {/* Using grayscale logos for a clean, professional look */}
            {['Bank of Finance', 'Global Pay', 'AutoTech Motors', 'EV Solutions', 'Fleet Dynamics'].map((company, index) => (
              <div key={index} className="flex items-center justify-center h-8">
                <span className="text-gray-400 font-semibold text-lg">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;