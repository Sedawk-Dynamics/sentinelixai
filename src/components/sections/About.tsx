import React from 'react';
import { teamMembers, stats } from '../../data';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-6">
              Driving Innovation Through <span className="text-secondary-500">AI Intelligence</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              SentinelixAI was founded with a clear mission: to revolutionize industries through artificial intelligence 
              and machine learning, from cybersecurity in financial services to redefining intelligence in ICE and EV systems.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our integrated platforms provide real-time protection for financial transactions and embed predictive, AI-powered 
              analytics into automotive systems with digital twin dashboards, battery intelligence, and thermal runaway detection.
            </p>
            <p className="text-lg text-gray-600">
              Through continuous innovation in cybersecurity, financial services, and automotive technology, we deliver 
              real-time simulation, diagnostics, and efficiency optimization tailored for OEMs, fleets, and infrastructure operators.
            </p>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden mt-8">
                <img
                  src="https://images.pexels.com/photos/8353744/pexels-photo-8353744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="AI technology"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/936137/pexels-photo-936137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Data visualization"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden mt-8">
                <img
                  src="https://images.pexels.com/photos/5926398/pexels-photo-5926398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Cybersecurity"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-secondary-500 rounded-full opacity-20 z-0"></div>
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary-500 rounded-full opacity-20 z-0"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-12 border-y border-gray-200 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl font-bold text-primary-600">{stat.value}</p>
              <p className="text-gray-500 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Leadership Team */}
        <div id="leadership">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-600">
              Our team brings together experts in cybersecurity, artificial intelligence, and financial services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="group">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm">{member.bio}</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary-800">{member.name}</h3>
                <p className="text-secondary-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;