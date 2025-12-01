import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Shield, Calendar, User, Clock, CheckCircle, TrendingUp, Zap, Eye, Lock, Activity, Award } from 'lucide-react';

const BFSIBlog: React.FC = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white pt-32 pb-16">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItMnptMCAwdjJoLTJ2LTJoMnptLTIgMnYtMmgydjJoLTJ6bTItMnYyaC0ydi0yaDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-secondary-500 rounded-full text-sm font-semibold">BFSI Security</span>
            <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Product Launch</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Revolutionizing Financial Security: AI-Powered Cybersecurity for the Digital Banking Era
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-gray-200">
            <div className="flex items-center gap-2">
              <User size={18} />
              <span className="text-sm">Gaurav V., CEO - SentinelixAI</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span className="text-sm">November 18, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span className="text-sm">8 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              The financial services industry stands at a critical juncture. As digital transactions surge and cyber threats become increasingly sophisticated, traditional security measures are no longer sufficient to protect customers and institutions from fraud, scams, and financial crimes. The time has come for a paradigm shift in how we approach cybersecurity in banking, insurance, and financial services.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              At SentinelixAI, we've been working tirelessly to develop a solution that doesn't just respond to threats—it predicts and prevents them. Today, I'm excited to share our vision for the future of financial security and announce that our groundbreaking AI-powered cybersecurity platform will be available by the <strong className="text-primary-600">end of March 2026</strong>.
            </p>
          </div>

          {/* The Challenge */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-red-100 p-3 rounded-lg">
                <Shield className="text-red-600" size={28} />
              </div>
              <h2 className="text-3xl font-bold text-primary-900">The Growing Threat Landscape</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Financial institutions are facing unprecedented challenges. Every day, millions of transactions flow through digital channels—UPI, IMPS, RTGS, NEFT, and credit card payments—each representing a potential vulnerability. Cybercriminals are becoming more sophisticated, employing AI-powered attacks, deepfakes, and advanced social engineering tactics that traditional security systems struggle to detect.
            </p>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 my-6">
              <h3 className="text-xl font-bold text-primary-900 mb-4">The Numbers Don't Lie:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Digital fraud attempts have increased by over 300% in the past three years</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Account takeover incidents cost financial institutions billions annually</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Traditional security systems detect fraud only after significant damage has occurred</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Our Solution */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary-100 p-3 rounded-lg">
                <Zap className="text-primary-600" size={28} />
              </div>
              <h2 className="text-3xl font-bold text-primary-900">A New Approach: AI at the Transaction Level</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              What makes our platform different is that we've moved beyond reactive security. Instead of waiting for fraud to happen and then responding, our AI/ML models analyze every single transaction in real-time, detecting anomalies, suspicious patterns, and potential threats before they can cause harm.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our solution provides transaction-level security for all payment types—UPI, IMPS, RTGS, NEFT, and credit cards—integrating seamlessly with existing banking infrastructure through secure APIs. This means financial institutions don't need to overhaul their systems; they can enhance their security posture with minimal disruption.
            </p>
          </div>

          {/* Key Capabilities */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-6">Comprehensive Protection Through Advanced AI</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary-50 to-blue-50 p-6 rounded-xl border border-primary-200">
                <div className="flex items-center gap-3 mb-3">
                  <Eye className="text-primary-600" size={24} />
                  <h3 className="text-lg font-bold text-primary-900">Behavioral Analytics</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  Our system learns individual user behavior—spending patterns, geolocation, biometrics, and transaction habits—to detect when something is off, even if the credentials are correct.
                </p>
              </div>

              <div className="bg-gradient-to-br from-secondary-50 to-orange-50 p-6 rounded-xl border border-secondary-200">
                <div className="flex items-center gap-3 mb-3">
                  <Activity className="text-secondary-600" size={24} />
                  <h3 className="text-lg font-bold text-primary-900">Real-Time Fraud Detection</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  With sub-90 second mean time to detect, our platform identifies fraudulent transactions instantly, preventing financial loss before it occurs.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
                <div className="flex items-center gap-3 mb-3">
                  <Lock className="text-purple-600" size={24} />
                  <h3 className="text-lg font-bold text-primary-900">Multi-Layer Security</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  From bot detection and rapid login monitoring to device intelligence and AML compliance, we cover every security dimension.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl border border-green-200">
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp className="text-green-600" size={24} />
                  <h3 className="text-lg font-bold text-primary-900">Actionable Insights</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  Customizable dashboards give Financial Crime teams the visibility they need to make informed decisions and take immediate action.
                </p>
              </div>
            </div>
          </div>

          {/* Impact */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-secondary-100 p-3 rounded-lg">
                <Award className="text-secondary-600" size={28} />
              </div>
              <h2 className="text-3xl font-bold text-primary-900">Proven Results That Speak Volumes</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              During our pilot programs with select financial institutions, the results have exceeded our expectations:
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl border-2 border-green-300 text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">82%</div>
                <p className="text-gray-700 font-semibold">Reduction in fraud loss within 45 days</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border-2 border-blue-300 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">57%</div>
                <p className="text-gray-700 font-semibold">Decrease in false positive alerts</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-300 text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">&lt;90s</div>
                <p className="text-gray-700 font-semibold">Mean time to detect threats</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              These numbers represent more than just statistics—they represent protected customers, prevented losses, and maintained trust in the financial system.
            </p>
          </div>

          {/* Looking Ahead */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary-100 p-3 rounded-lg">
                <Calendar className="text-primary-600" size={28} />
              </div>
              <h2 className="text-3xl font-bold text-primary-900">What's Coming in March 2026</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              As we approach our launch date at the end of March 2026, we're finalizing partnerships with leading financial institutions and ensuring our platform meets the highest standards of security, compliance, and performance. Our solution will be available to:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-secondary-500 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">Private and public sector banks</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-secondary-500 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">Insurance companies (life and general)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-secondary-500 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">Payment aggregators and NBFCs</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-secondary-500 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">Neo-banks and fintech startups</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-secondary-500 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">Payment service providers</span>
              </li>
            </ul>
          </div>

          {/* Conclusion */}
          <div className="bg-gradient-to-r from-primary-900 to-primary-700 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Join Us in Securing the Future of Finance</h2>
            <p className="text-gray-200 leading-relaxed mb-4">
              The digital transformation of financial services is irreversible, and so is the need for advanced cybersecurity. At SentinelixAI, we're not just building a product—we're creating a shield that protects millions of customers and strengthens trust in the financial ecosystem.
            </p>
            <p className="text-gray-200 leading-relaxed mb-6">
              If you're a financial institution looking to stay ahead of cyber threats, I invite you to connect with us. Let's work together to make the digital banking experience safer, more secure, and more trustworthy for everyone.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleContactClick}
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary-500 text-white font-semibold rounded-lg hover:bg-secondary-600 transition-colors cursor-pointer"
              >
                Schedule a Demo
                <Zap size={18} />
              </button>
              <a
                href="/resources/whitepapers/cybersecurity-bfsi"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
              >
                Read Technical Whitepaper
                <Shield size={18} />
              </a>
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-start gap-4">
              <div className="bg-primary-100 p-4 rounded-full">
                <User className="text-primary-600" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary-900 mb-2">Gaurav V.</h3>
                <p className="text-gray-600 mb-2">CEO, SentinelixAI</p>
                <p className="text-gray-700 leading-relaxed">
                  Gaurav V. is the founder and CEO of SentinelixAI, leading the company's mission to revolutionize cybersecurity in financial services and automotive intelligence through advanced AI/ML solutions. With extensive experience in enterprise technology and a passion for innovation, Gaurav is committed to building solutions that protect and empower businesses in the digital age.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BFSIBlog;
