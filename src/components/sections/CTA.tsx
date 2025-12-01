import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-800 to-primary-900 z-0"></div>
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-3 bg-primary-700 rounded-full mb-6">
            <ShieldCheck size={32} className="text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to secure your financial transactions?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
            Join leading financial institutions that trust SentinelixAI to protect their payments infrastructure.
            Request a demo today and see our AI-powered security platform in action.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="#contact"
              className="px-8 py-4 bg-secondary-500 text-white font-medium rounded-md hover:bg-secondary-600 transition-colors w-full sm:w-auto flex items-center justify-center"
            >
              Request a Demo
              <ArrowRight className="ml-2" size={18} />
            </a>
            <a
              href="/resources/whitepapers/automotive-intelligence"
              className="px-8 py-4 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white hover:text-primary-900 transition-colors w-full sm:w-auto"
            >
              Explore Resources
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;