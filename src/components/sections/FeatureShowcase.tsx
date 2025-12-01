import React from 'react';
import { ArrowRight } from 'lucide-react';

const FeatureShowcase: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-4">
            Advanced AI Features Across Industries
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our platforms leverage cutting-edge AI to provide comprehensive solutions for financial security and automotive intelligence.
          </p>
        </div>

        {/* Feature 1 */}
        <div className="flex flex-col md:flex-row items-center mb-24">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <div className="relative">
              <div className="absolute inset-0 bg-primary-500 rounded-lg opacity-10 transform -rotate-6"></div>
              <img
                src="https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Dashboard Analytics"
                className="relative rounded-lg shadow-xl z-10"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary-500 rounded-full opacity-20"></div>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <span className="text-secondary-500 font-semibold uppercase tracking-wider mb-2 block">BFSI Solutions</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-4">
              Transaction Security Dashboard
            </h3>
            <p className="text-gray-600 mb-6">
              Our dashboard provides real-time visibility into all payment transactions across UPI, IMPS, RTGS, and NEFT channels.
              Security teams can monitor transaction volumes, risk levels, and potential fraud attempts from a single interface.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2">
                  <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700">Real-time fraud detection alerts</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2">
                  <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700">Customizable risk thresholds</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2">
                  <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700">Historical trend analysis</span>
              </li>
            </ul>
            <a
              href="/solutions/transaction-security"
              className="inline-flex items-center text-secondary-500 font-medium hover:text-secondary-600 transition-colors"
            >
              Learn more about Transaction Security
              <ArrowRight size={16} className="ml-1" />
            </a>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center mb-24">
          <div className="md:w-1/2 md:pl-12 mb-10 md:mb-0">
            <div className="relative">
              <div className="absolute inset-0 bg-secondary-500 rounded-lg opacity-10 transform rotate-6"></div>
              <img
                src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Enterprise ML Deployment"
                className="relative rounded-lg shadow-xl z-10"
              />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary-500 rounded-full opacity-20"></div>
            </div>
          </div>
          <div className="md:w-1/2 md:pr-12">
            <span className="text-secondary-500 font-semibold uppercase tracking-wider mb-2 block">Automotive Solutions</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-4">
              Enterprise ML Deployment at Scale
            </h3>
            <p className="text-gray-600 mb-6">
              Our core strength lies in making heavy ML models production-ready across any environment. Deploy automotive AI models 
              seamlessly across AWS, Azure, and GCP with optimized performance for edge devices, on-premise infrastructure, and cloud platforms. 
              Fast, secure, and scalable inference for real-time vehicle intelligence.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2">
                  <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700">Cross-cloud deployment (AWS SageMaker, Azure ML, Vertex AI)</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2">
                  <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700">Edge optimization with ONNX Runtime & TensorFlow Lite</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2">
                  <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700">Real-time inference & auto-scaling endpoints</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2">
                  <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700">Continuous model monitoring & versioning</span>
              </li>
            </ul>
            <a
              href="/resources/whitepapers/automotive-intelligence"
              className="inline-flex items-center text-secondary-500 font-medium hover:text-secondary-600 transition-colors"
            >
              Learn more about ML Deployment
              <ArrowRight size={16} className="ml-1" />
            </a>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <div className="relative">
              <div className="absolute inset-0 bg-accent-500 rounded-lg opacity-10 transform -rotate-3"></div>
              <img
                src="https://images.pexels.com/photos/5926398/pexels-photo-5926398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Risk Scoring"
                className="relative rounded-lg shadow-xl z-10"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-500 rounded-full opacity-20"></div>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <span className="text-secondary-500 font-semibold uppercase tracking-wider mb-2 block">BFSI Intelligence</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-4">
              AI-Powered Risk Scoring
            </h3>
            <p className="text-gray-600 mb-6">
              Our machine learning models analyze hundreds of risk factors in milliseconds to generate accurate risk scores for every
              transaction. This enables financial institutions to make informed decisions about transaction approvals in real-time.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2">
                  <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700">Sub-millisecond response times</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2">
                  <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700">Multi-factor risk assessment</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2">
                  <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700">Adaptive learning from fraud patterns</span>
              </li>
            </ul>
            <a
              href="/solutions/risk-scoring"
              className="inline-flex items-center text-secondary-500 font-medium hover:text-secondary-600 transition-colors"
            >
              Learn more about Risk Scoring
              <ArrowRight size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;