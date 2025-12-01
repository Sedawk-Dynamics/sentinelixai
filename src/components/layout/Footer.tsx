import React from 'react';
import { Facebook, Twitter, Linkedin, Mail, PhoneCall, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <h2 className="text-2xl font-bold">
                <span className="text-white">Sentinelix</span>
                <span className="text-secondary-500">AI</span>
              </h2>
            </div>
            <p className="text-gray-300 mb-4">
              Cutting-edge AI/ML based cybersecurity solutions for the BFSI domain, providing enhanced security
              at the transaction level.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-secondary-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary-500">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/#solutions" className="text-gray-300 hover:text-secondary-500 transition-colors">
                  Solutions
                </a>
              </li>
              <li>
                <a href="/#about" className="text-gray-300 hover:text-secondary-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/#resources" className="text-gray-300 hover:text-secondary-500 transition-colors">
                  Resources
                </a>
              </li>
              <li>
                <a href="/#careers" className="text-gray-300 hover:text-secondary-500 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="/#events" className="text-gray-300 hover:text-secondary-500 transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-gray-300 hover:text-secondary-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary-500">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/solutions/transaction-security"
                  className="text-gray-300 hover:text-secondary-500 transition-colors"
                >
                  Transaction Security
                </a>
              </li>
              <li>
                <a
                  href="/solutions/fraud-detection"
                  className="text-gray-300 hover:text-secondary-500 transition-colors"
                >
                  Fraud Detection
                </a>
              </li>
              <li>
                <a
                  href="/solutions/risk-scoring"
                  className="text-gray-300 hover:text-secondary-500 transition-colors"
                >
                  Risk Scoring
                </a>
              </li>
              <li>
                <a
                  href="/solutions/behavioral-analytics"
                  className="text-gray-300 hover:text-secondary-500 transition-colors"
                >
                  Behavioral Analytics
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary-500">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 flex-shrink-0 text-secondary-500" size={18} />
                <span className="text-gray-300">
                  K-405, Hawelia Valencia, Greater Noida West, U.P 201306, India
                </span>
              </li>
              <li className="flex items-center">
                <PhoneCall className="mr-2 flex-shrink-0 text-secondary-500" size={18} />
                <a href="tel:+918826196393" className="text-gray-300 hover:text-secondary-500 transition-colors">
                  +91-8826196393
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 flex-shrink-0 text-secondary-500" size={18} />
                <a
                  href="mailto:contact@sentinelixai.com"
                  className="text-gray-300 hover:text-secondary-500 transition-colors"
                >
                  contact@sentinelixai.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} SentinelixAI. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-gray-400 hover:text-secondary-500 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-secondary-500 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-secondary-500 text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;