import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Shield, Lock, Eye, Zap, CheckCircle, TrendingUp, Award, AlertTriangle, Database, Activity, Bell, FileText } from 'lucide-react';

const BFSIWhitepaper: React.FC = () => {
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
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white pt-32 pb-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItMnptMCAwdjJoLTJ2LTJoMnptLTIgMnYtMmgydjJoLTJ6bTItMnYyaC0ydi0yaDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <FileText className="text-secondary-400" size={24} />
            <span className="text-secondary-400 font-semibold uppercase tracking-wide text-sm">Technical Whitepaper</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Cybersecurity for BFSI
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl">
            Advanced AI-driven cybersecurity solutions protecting financial transactions, preventing fraud, and ensuring regulatory compliance
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Award className="text-secondary-400" size={20} />
              <span className="text-sm font-medium">Real-time Threat Detection</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Shield className="text-secondary-400" size={20} />
              <span className="text-sm font-medium">99.9% Fraud Prevention</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 mb-8">
            <div className="bg-primary-100 p-3 rounded-lg">
              <Shield className="text-primary-600" size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary-900 mb-4">
                Overview
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                SentinelixAI is working in the field of AI/ML-based cybersecurity solutions in the BFSI domain, providing cutting-edge security at the transaction level for all types of Payments (UPI, IMPS, RTGS, NEFT etc). We leverage publicly available APIs of various organizations and after integration, our solution not only provides enhanced security but a real-time integrated platform to detect fraud, risk score, prevent scam, account takeover, audit, track, analyse & reporting.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Using mature AI/ML models to perform deep analysis on User Behaviour (Biometrics, spending patterns, geo-location, time spent), Device Intelligence, customer abuse (insurance), Bonus abuse, fake promotions, AML, Bot detection, rapid logins, etc. We represent all the metrics in user-friendly and customizable dashboards for various stakeholders like Financial Crime teams in Banks or Insurance companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">
            Key Features and Capabilities
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-secondary-500">
              <div className="flex items-center gap-3 mb-3">
                <Activity className="text-secondary-600" size={24} />
                <h3 className="text-lg font-bold text-primary-900">AI-Driven Transaction Monitoring</h3>
              </div>
              <p className="text-gray-700 text-sm">Comprehensive monitoring for UPI, IMPS, NEFT, RTGS transactions with real-time analysis</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-primary-500">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="text-primary-600" size={24} />
                <h3 className="text-lg font-bold text-primary-900">Real-Time Fraud Detection & Risk Scoring</h3>
              </div>
              <p className="text-gray-700 text-sm">Instant threat identification with dynamic risk assessment at the transaction level</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-500">
              <div className="flex items-center gap-3 mb-3">
                <Eye className="text-purple-600" size={24} />
                <h3 className="text-lg font-bold text-primary-900">Behavioural Biometrics & Device Intelligence</h3>
              </div>
              <p className="text-gray-700 text-sm">Advanced analysis of user patterns, device fingerprinting, and behavioral anomalies</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="text-red-600" size={24} />
                <h3 className="text-lg font-bold text-primary-900">Bot Detection & Account Takeover Prevention</h3>
              </div>
              <p className="text-gray-700 text-sm">Identify automated threats, rapid logins, and unauthorized account access attempts</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
              <div className="flex items-center gap-3 mb-3">
                <Database className="text-blue-600" size={24} />
                <h3 className="text-lg font-bold text-primary-900">Integrated Dashboards for Audit & Reporting</h3>
              </div>
              <p className="text-gray-700 text-sm">User-friendly, customizable dashboards with comprehensive audit trails and reporting</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
              <div className="flex items-center gap-3 mb-3">
                <Lock className="text-green-600" size={24} />
                <h3 className="text-lg font-bold text-primary-900">AML, Abuse, and Bonus Fraud Intelligence</h3>
              </div>
              <p className="text-gray-700 text-sm">Detect money laundering, customer abuse, bonus abuse, and fake promotions</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-orange-500">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="text-orange-600" size={24} />
                <h3 className="text-lg font-bold text-primary-900">Geolocation & Pattern-Based Anomaly Analysis</h3>
              </div>
              <p className="text-gray-700 text-sm">Location-based risk assessment and behavioral pattern recognition</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-indigo-500">
              <div className="flex items-center gap-3 mb-3">
                <Bell className="text-indigo-600" size={24} />
                <h3 className="text-lg font-bold text-primary-900">Secure API Integrations</h3>
              </div>
              <p className="text-gray-700 text-sm">Seamless integration with financial ecosystem through secure API connections</p>
            </div>
          </div>
        </div>
      </section>

      {/* Threat Landscape */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 mb-8">
            <div className="bg-red-100 p-3 rounded-lg">
              <AlertTriangle className="text-red-600" size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary-900 mb-4">
                The Modern Threat Landscape
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Financial institutions face unprecedented challenges in cybersecurity:
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-primary-900 mb-3">Sophisticated Attacks</h3>
              <p className="text-gray-700 text-sm">
                Cybercriminals employ advanced techniques including AI-powered attacks, deepfakes, and social engineering at unprecedented scale.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-primary-900 mb-3">Real-time Threats</h3>
              <p className="text-gray-700 text-sm">
                Payment fraud, account takeovers, and transaction manipulation occur in milliseconds, requiring instant detection and response.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-primary-900 mb-3">Regulatory Pressure</h3>
              <p className="text-gray-700 text-sm">
                Strict compliance requirements (PCI DSS, GDPR, RBI guidelines) demand robust security with complete audit trails.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Capabilities */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">
            Detailed Capabilities
          </h2>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 p-6 rounded-xl border border-primary-200">
              <div className="flex items-start gap-3">
                <div className="bg-primary-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  a
                </div>
                <p className="text-gray-700">
                  Detects threats, account takeover, BOTs, rapid logins.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-secondary-50 to-orange-50 p-6 rounded-xl border border-secondary-200">
              <div className="flex items-start gap-3">
                <div className="bg-secondary-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  b
                </div>
                <p className="text-gray-700">
                  Abnormal spending patterns, Geo locations, Device Intelligence, Customer Abuse, Anti Money Laundering frauds.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
              <div className="flex items-start gap-3">
                <div className="bg-purple-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  c
                </div>
                <p className="text-gray-700">
                  All these cybersecurity measures will be taken care at transaction level for all types of payments (UPI, IMPS, RTGS, NEFT, Credit Card).
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-xl border border-green-200">
              <div className="flex items-start gap-3">
                <div className="bg-green-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  d
                </div>
                <p className="text-gray-700">
                  All the information/logs will be in encrypted format and only decryptable using secured keys at server side.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
              <div className="flex items-start gap-3">
                <div className="bg-blue-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  e
                </div>
                <p className="text-gray-700">
                  All the organizations working in the BFSI domain can leverage this platform to get in-depth analysis of their real customers and fraudulent ones and can take remedial actions.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-200">
              <div className="flex items-start gap-3">
                <div className="bg-indigo-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  f
                </div>
                <p className="text-gray-700">
                  This product is different and unique as it's based on the latest AI/ML model and is trained on millions of data sets.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
              <div className="flex items-start gap-3">
                <div className="bg-orange-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  g
                </div>
                <p className="text-gray-700">
                  It's an API which can easily integrate with all the financial organization's software like CBS, Net Banking Apps or websites, Payment based Mobile Apps, Ecommerce platforms their own wallets, Grocery delivery Apps using their own wallets, Food delivery Apps using their wallets.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-green-50 p-6 rounded-xl border border-teal-200">
              <div className="flex items-start gap-3">
                <div className="bg-teal-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  h
                </div>
                <p className="text-gray-700">
                  The integrated framework/platform will enhance the productivity of various Financial Crime teams working in BFSI organizations.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-red-50 p-6 rounded-xl border border-pink-200">
              <div className="flex items-start gap-3">
                <div className="bg-pink-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  i
                </div>
                <p className="text-gray-700">
                  This product will strongly counter the ever-increasing Digital frauds, scams and will safeguard the interest of real users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-900 mb-12 text-center">
            AI-Powered Security Solutions
          </h2>

          <div className="space-y-8">
            {/* Transaction Security */}
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 p-8 rounded-xl border border-primary-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary-600 p-3 rounded-lg">
                  <Lock className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary-900 mb-2">Real-Time Transaction Security</h3>
                  <p className="text-gray-700 mb-4">
                    Protect every transaction across UPI, IMPS, RTGS, and NEFT with multi-layered AI security that operates in milliseconds.
                  </p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Sub-100ms transaction analysis</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Multi-factor risk scoring</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Adaptive authentication</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Zero-friction legitimate transactions</span>
                </div>
              </div>
            </div>

            {/* Fraud Detection */}
            <div className="bg-gradient-to-r from-secondary-50 to-orange-50 p-8 rounded-xl border border-secondary-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-secondary-600 p-3 rounded-lg">
                  <Eye className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary-900 mb-2">Advanced Fraud Detection</h3>
                  <p className="text-gray-700 mb-4">
                    Machine learning models trained on billions of transactions identify fraud patterns before they impact your customers.
                  </p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-secondary-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Anomaly detection across 500+ parameters</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-secondary-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Network analysis for fraud rings</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-secondary-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Continuous model retraining</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-secondary-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">False positive rate &lt; 0.1%</span>
                </div>
              </div>
            </div>

            {/* User Behavior Analytics */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <Activity className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary-900 mb-2">Behavioral Analytics</h3>
                  <p className="text-gray-700 mb-4">
                    Build dynamic user profiles that detect account takeovers and insider threats through behavioral deviations.
                  </p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Keystroke and mouse dynamics</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Transaction pattern profiling</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Geolocation verification</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Session behavior monitoring</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 mb-8">
            <div className="bg-primary-100 p-3 rounded-lg">
              <Database className="text-primary-600" size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary-900 mb-4">
                Scalable, High-Performance Architecture
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Built for enterprise-scale financial institutions processing millions of transactions daily.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-primary-900 mb-4 flex items-center gap-2">
                <Zap className="text-primary-600" size={24} />
                Real-Time Processing
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-secondary-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700"><strong>Stream processing:</strong> Apache Kafka for real-time data ingestion</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-secondary-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700"><strong>In-memory computing:</strong> Sub-millisecond decision making</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-secondary-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700"><strong>Horizontal scaling:</strong> Handle peak loads seamlessly</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-primary-900 mb-4 flex items-center gap-2">
                <Shield className="text-primary-600" size={24} />
                Security & Compliance
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-secondary-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700"><strong>End-to-end encryption:</strong> AES-256 for data at rest and in transit</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-secondary-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700"><strong>Audit logging:</strong> Complete transaction trails for compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-secondary-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700"><strong>PCI DSS certified:</strong> Level 1 compliance for payment processing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ML Models */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-900 mb-8">
            Machine Learning Models
          </h2>
          
          <div className="bg-gradient-to-br from-gray-50 to-primary-50 p-8 rounded-xl border border-gray-200">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-bold text-primary-900 mb-3">Ensemble Models</h3>
                <p className="text-sm text-gray-700 mb-2">Combining multiple algorithms for superior accuracy:</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Random Forests</li>
                  <li>• Gradient Boosting</li>
                  <li>• Neural Networks</li>
                  <li>• XGBoost</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary-900 mb-3">Deep Learning</h3>
                <p className="text-sm text-gray-700 mb-2">Advanced pattern recognition:</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• LSTM for sequences</li>
                  <li>• Autoencoders for anomalies</li>
                  <li>• Graph Neural Networks</li>
                  <li>• Transformer models</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary-900 mb-3">Continuous Learning</h3>
                <p className="text-sm text-gray-700 mb-2">Adaptive models that evolve:</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Online learning</li>
                  <li>• A/B testing framework</li>
                  <li>• Model versioning</li>
                  <li>• Performance monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">
            Target Market
          </h2>
          <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Our primary target customers are regulated financial institutions, including:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-primary-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-primary-100 p-2 rounded-lg">
                  <Database className="text-primary-600" size={24} />
                </div>
                <h3 className="font-bold text-primary-900">Banks</h3>
              </div>
              <p className="text-sm text-gray-600">Private and Public Sector Banks</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-secondary-100 p-2 rounded-lg">
                  <Shield className="text-secondary-600" size={24} />
                </div>
                <h3 className="font-bold text-primary-900">Insurance Companies</h3>
              </div>
              <p className="text-sm text-gray-600">Life & General Insurance</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Activity className="text-blue-600" size={24} />
                </div>
                <h3 className="font-bold text-primary-900">Payment Aggregators</h3>
              </div>
              <p className="text-sm text-gray-600">Non-banking financial institutions</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-green-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Zap className="text-green-600" size={24} />
                </div>
                <h3 className="font-bold text-primary-900">Neo-banks</h3>
              </div>
              <p className="text-sm text-gray-600">Fintech Startups</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Lock className="text-purple-600" size={24} />
                </div>
                <h3 className="font-bold text-primary-900">Account Aggregators</h3>
              </div>
              <p className="text-sm text-gray-600">RBNZ-regulated entities</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-orange-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <TrendingUp className="text-orange-600" size={24} />
                </div>
                <h3 className="font-bold text-primary-900">PSPs</h3>
              </div>
              <p className="text-sm text-gray-600">Payment Service Providers</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">
            Value Proposition
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="bg-gradient-to-br from-primary-50 to-blue-50 p-8 rounded-xl border border-primary-200">
              <div className="flex items-start gap-4">
                <div className="bg-primary-600 p-3 rounded-lg">
                  <Shield className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-900 mb-3">Protection & Security</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-primary-600 flex-shrink-0 mt-1" size={18} />
                      <span className="text-gray-700">Protects customers and institutions from fraud and scams</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-primary-600 flex-shrink-0 mt-1" size={18} />
                      <span className="text-gray-700">Real-time threat visibility across digital payment ecosystems</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-secondary-50 to-orange-50 p-8 rounded-xl border border-secondary-200">
              <div className="flex items-start gap-4">
                <div className="bg-secondary-600 p-3 rounded-lg">
                  <Award className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-900 mb-3">Compliance & Trust</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-secondary-600 flex-shrink-0 mt-1" size={18} />
                      <span className="text-gray-700">Strengthens compliance and risk operations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-secondary-600 flex-shrink-0 mt-1" size={18} />
                      <span className="text-gray-700">Builds and maintains financial trust</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">
            Proven Results
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-xl border-2 border-green-300 text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">82%</div>
              <p className="text-gray-700 font-semibold mb-1">Reduction in Fraud Loss</p>
              <p className="text-sm text-gray-600">Over 45 days</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border-2 border-blue-300 text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">57%</div>
              <p className="text-gray-700 font-semibold mb-1">Reduced False Positives</p>
              <p className="text-sm text-gray-600">Improved accuracy</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border-2 border-purple-300 text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">&lt;90s</div>
              <p className="text-gray-700 font-semibold mb-1">Mean Time to Detect</p>
              <p className="text-sm text-gray-600">Down from 15 minutes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why SentinelixAI */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-900 mb-12 text-center">
            Why SentinelixAI for BFSI
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl border border-primary-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary-600 p-2 rounded-lg">
                  <TrendingUp className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-primary-900">Proven Track Record</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="text-primary-600 flex-shrink-0" size={16} />
                  99.9% fraud detection accuracy
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="text-primary-600 flex-shrink-0" size={16} />
                  Processing 10M+ transactions/day
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="text-primary-600 flex-shrink-0" size={16} />
                  &lt;50ms average response time
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-6 rounded-xl border border-secondary-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-secondary-600 p-2 rounded-lg">
                  <Bell className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-primary-900">Intelligent Alerting</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="text-secondary-600 flex-shrink-0" size={16} />
                  Risk-based alert prioritization
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="text-secondary-600 flex-shrink-0" size={16} />
                  Contextual threat intelligence
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="text-secondary-600 flex-shrink-0" size={16} />
                  Automated response workflows
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Database className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-primary-900">Enterprise Integration</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="text-blue-600 flex-shrink-0" size={16} />
                  RESTful APIs for seamless integration
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="text-blue-600 flex-shrink-0" size={16} />
                  Support for all major core banking systems
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="text-blue-600 flex-shrink-0" size={16} />
                  Cloud, on-premise, or hybrid deployment
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-600 p-2 rounded-lg">
                  <Award className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-primary-900">Regulatory Compliance</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="text-green-600 flex-shrink-0" size={16} />
                  PCI DSS, ISO 27001 certified
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="text-green-600 flex-shrink-0" size={16} />
                  GDPR and RBI compliance
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="text-green-600 flex-shrink-0" size={16} />
                  Complete audit trail and reporting
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Securing the Future of Finance</h2>
            <p className="text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto mb-6">
              SentinelixAI combines cutting-edge machine learning, real-time analytics, and deep financial domain expertise to deliver cybersecurity solutions that protect your institution and your customers.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto">
              Our platform doesn't just detect threats—it predicts and prevents them, ensuring that your financial services remain secure, compliant, and trusted in an increasingly complex digital landscape.
            </p>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={handleContactClick}
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary-500 text-white font-semibold rounded-lg hover:bg-secondary-600 transition-colors shadow-lg cursor-pointer"
            >
              Schedule a Security Assessment
              <Shield size={20} />
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BFSIWhitepaper;
