import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { FileText, ArrowRight, Shield, Cpu } from 'lucide-react';

const Whitepapers: React.FC = () => {
  const whitepapers = [
    {
      id: 'automotive-intelligence',
      title: 'Automotive Intelligence Suite',
      description: 'Enterprise-grade ML deployment at scale for ICE and EV systems with predictive analytics, real-time simulation, and advanced diagnostics.',
      path: '/resources/whitepapers/automotive-intelligence',
      icon: Cpu,
      tags: ['Automotive', 'AI/ML', 'Digital Twin', 'EVs'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'cybersecurity-bfsi',
      title: 'Cybersecurity for BFSI',
      description: 'Advanced AI-driven cybersecurity solutions for financial services, protecting transactions, preventing fraud, and ensuring compliance.',
      path: '/resources/whitepapers/cybersecurity-bfsi',
      icon: Shield,
      tags: ['BFSI', 'Cybersecurity', 'AI/ML', 'Fraud Detection'],
      gradient: 'from-primary-600 to-primary-800'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white pt-32 pb-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItMnptMCAwdjJoLTJ2LTJoMnptLTIgMnYtMmgydjJoLTJ6bTItMnYyaC0ydi0yaDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <FileText className="text-secondary-400" size={28} />
            <span className="text-secondary-400 font-semibold uppercase tracking-wide text-sm">Technical Resources</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Technical Whitepapers
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl">
            Explore our in-depth technical documentation on AI/ML solutions for automotive intelligence and financial cybersecurity.
          </p>
        </div>
      </section>

      {/* Whitepapers Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {whitepapers.map((paper) => {
              const Icon = paper.icon;
              return (
                <Link
                  key={paper.id}
                  to={paper.path}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-secondary-400"
                >
                  {/* Card Header with Gradient */}
                  <div className={`bg-gradient-to-r ${paper.gradient} p-8 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 opacity-10">
                      <Icon size={120} />
                    </div>
                    <div className="relative z-10">
                      <div className="bg-white/20 backdrop-blur-sm w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                        <Icon size={28} />
                      </div>
                      <h2 className="text-2xl font-bold mb-2">{paper.title}</h2>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-8">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {paper.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {paper.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-primary-50 text-primary-700 text-sm font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More Link */}
                    <div className="flex items-center gap-2 text-secondary-600 font-semibold group-hover:gap-4 transition-all">
                      <span>Read Whitepaper</span>
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-900 mb-4">
            Need More Information?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our team is ready to discuss how SentinelixAI can transform your business with cutting-edge AI solutions.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary-500 text-white font-semibold rounded-lg hover:bg-secondary-600 transition-colors shadow-lg"
          >
            Contact Us
            <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Whitepapers;
