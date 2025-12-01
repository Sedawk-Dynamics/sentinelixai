import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Cpu, Calendar, User, Clock, CheckCircle, TrendingUp, Zap, Database, Activity, Award, Battery, Gauge } from 'lucide-react';

const AutomotiveBlog: React.FC = () => {
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
            <span className="px-3 py-1 bg-secondary-500 rounded-full text-sm font-semibold">Automotive Intelligence</span>
            <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Industry Insights</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            The Evolution of Automotive Intelligence: How AI and Digital Twins Are Reshaping Vehicle Performance
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
              <span className="text-sm">10 min read</span>
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
              The automotive industry is experiencing a transformation unlike any in its history. As vehicles become increasingly connected, electrified, and autonomous, the role of artificial intelligence and machine learning has evolved from a luxury feature to an absolute necessity. Traditional approaches to vehicle diagnostics, fleet management, and performance optimization are being replaced by sophisticated AI systems that can predict failures, optimize energy consumption, and enhance safety in real-time.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              At SentinelixAI, we're at the forefront of this revolution, developing enterprise-grade ML deployment solutions that bring intelligence to both internal combustion engine (ICE) and electric vehicle (EV) ecosystems. Today, I want to share insights into how digital twins, predictive analytics, and cloud-based AI are reshaping the automotive landscape.
            </p>
          </div>

          {/* The Shift */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 p-3 rounded-lg">
                <TrendingUp className="text-blue-600" size={28} />
              </div>
              <h2 className="text-3xl font-bold text-primary-900">From Reactive to Predictive: A Paradigm Shift</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              For decades, the automotive industry operated on a reactive model. Vehicles were serviced when something broke, diagnostics were performed after warning lights appeared, and fleet inefficiencies were discovered through historical data analysis. This approach resulted in unexpected downtime, costly repairs, and suboptimal vehicle performance.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              The emergence of connected vehicles and IoT sensors has fundamentally changed this equation. Today's vehicles generate terabytes of data—from engine performance metrics and battery health indicators to driver behavior patterns and environmental conditions. The challenge is no longer data collection; it's transforming this data into actionable intelligence.
            </p>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-primary-900 mb-4">The Modern Automotive Data Ecosystem:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Real-time telemetry from thousands of vehicle sensors</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Multi-modal sensor fusion combining visual, thermal, and motion data</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">High-frequency diagnostics capturing microsecond-level variations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Environmental and contextual data affecting vehicle performance</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Digital Twins */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary-100 p-3 rounded-lg">
                <Database className="text-primary-600" size={28} />
              </div>
              <h2 className="text-3xl font-bold text-primary-900">Digital Twins: Virtual Intelligence for Physical Vehicles</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              At the heart of modern automotive intelligence lies the concept of digital twins—virtual replicas of physical vehicles that mirror their real-world counterparts in real-time. Unlike simple data dashboards, digital twins are powered by physics-informed neural networks that understand the fundamental laws governing vehicle behavior.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              These digital representations enable OEMs and fleet operators to simulate scenarios, predict outcomes, and optimize performance without physical testing. For EVs, this means accurate battery degradation forecasting and predictive range estimation. For ICE vehicles, it enables precise engine health monitoring and emissions optimization.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
                <div className="flex items-center gap-3 mb-3">
                  <Battery className="text-blue-600" size={24} />
                  <h3 className="text-lg font-bold text-primary-900">EV Digital Twin Capabilities</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={16} />
                    <span>State of Charge (SOC) estimation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={16} />
                    <span>Battery cell-level degradation tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={16} />
                    <span>Real-time range prediction with 95%+ accuracy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={16} />
                    <span>Thermal management optimization</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
                <div className="flex items-center gap-3 mb-3">
                  <Gauge className="text-orange-600" size={24} />
                  <h3 className="text-lg font-bold text-primary-900">ICE Digital Twin Capabilities</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-orange-600 flex-shrink-0 mt-0.5" size={16} />
                    <span>Engine performance modeling and optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-orange-600 flex-shrink-0 mt-0.5" size={16} />
                    <span>Drivetrain efficiency analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-orange-600 flex-shrink-0 mt-0.5" size={16} />
                    <span>Predictive maintenance scheduling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-orange-600 flex-shrink-0 mt-0.5" size={16} />
                    <span>Fuel consumption optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* AI/ML Deployment */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-secondary-100 p-3 rounded-lg">
                <Cpu className="text-secondary-600" size={28} />
              </div>
              <h2 className="text-3xl font-bold text-primary-900">Enterprise-Grade ML Deployment at Scale</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              One of the biggest challenges in automotive AI is not building models—it's deploying them at scale across diverse environments. A model that works perfectly in a data center may fail when deployed on an edge device in a vehicle operating in extreme temperatures with intermittent connectivity.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              At SentinelixAI, our core strength lies in making heavy ML models production-ready, regardless of deployment environment. Whether it's on-premise within OEM facilities, at the edge inside vehicle gateways, or across hybrid enterprise clouds, we ensure fast, secure, and optimized AI inference.
            </p>
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 p-6 rounded-xl border border-primary-200 mb-6">
              <h3 className="text-xl font-bold text-primary-900 mb-4">Our Model Optimization Pipeline:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-primary-600 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-700">ONNX Runtime and TensorFlow Lite acceleration</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-primary-600 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-700">Quantization and pruning for edge devices</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-primary-600 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-700">Hardware-aware model tuning</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-primary-600 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-700">Auto-batching and intelligent caching</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cloud Deployment */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-100 p-3 rounded-lg">
                <Activity className="text-green-600" size={28} />
              </div>
              <h2 className="text-3xl font-bold text-primary-900">Cloud-Native AI Pipelines for Automotive</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              The complexity of automotive AI demands robust, scalable infrastructure. We leverage enterprise cloud platforms—AWS, Azure, and Google Cloud—to build end-to-end ML pipelines that handle everything from data ingestion to model deployment and monitoring.
            </p>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-orange-500">
                <h3 className="text-lg font-bold text-primary-900 mb-2">Real-Time Inference for Telematics</h3>
                <p className="text-gray-700 text-sm">
                  Vehicle telematics data flows through streaming pipelines (Kinesis, IoT Core) to ML endpoints that provide instant insights—from anomaly detection to predictive failure alerts.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
                <h3 className="text-lg font-bold text-primary-900 mb-2">Batch Processing for Fleet Analytics</h3>
                <p className="text-gray-700 text-sm">
                  Historical fleet data is processed in large batches to identify long-term trends, optimize routes, and improve overall fleet efficiency.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-500">
                <h3 className="text-lg font-bold text-primary-900 mb-2">Hybrid Edge-Cloud Architecture</h3>
                <p className="text-gray-700 text-sm">
                  Critical decisions happen at the edge for low latency, while complex model training and updates occur in the cloud, providing the best of both worlds.
                </p>
              </div>
            </div>
          </div>

          {/* Industry Impact */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary-100 p-3 rounded-lg">
                <Award className="text-primary-600" size={28} />
              </div>
              <h2 className="text-3xl font-bold text-primary-900">Real-World Impact and Future Directions</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              The applications of automotive AI extend far beyond what we've discussed. From ADAS and autonomous driving to EV infrastructure optimization and battery second-life scoring, the possibilities are expanding rapidly.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              OEMs and Tier-1 suppliers who embrace these technologies today will have significant competitive advantages tomorrow. The ability to predict battery life accurately, optimize charging infrastructure intelligently, and maintain vehicles proactively will differentiate market leaders from followers.
            </p>
            <div className="bg-gradient-to-r from-secondary-50 to-orange-50 p-6 rounded-xl border border-secondary-200">
              <h3 className="text-xl font-bold text-primary-900 mb-4">Key Industry Trends We're Tracking:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Zap className="text-secondary-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700"><strong>Software-Defined Vehicles:</strong> Vehicles becoming platforms for continuous software and AI updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="text-secondary-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700"><strong>V2X Intelligence:</strong> Vehicle-to-everything communication enabling smarter traffic management</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="text-secondary-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700"><strong>Predictive Energy Management:</strong> AI-optimized charging and energy distribution</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="text-secondary-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700"><strong>Zero-Touch Maintenance:</strong> Fully automated predictive maintenance scheduling</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-gradient-to-r from-primary-900 to-primary-700 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Building the Intelligent Automotive Future</h2>
            <p className="text-gray-200 leading-relaxed mb-4">
              The transformation of the automotive industry through AI and ML is not a future possibility—it's happening now. At SentinelixAI, we're committed to making this transformation accessible, scalable, and secure for automotive companies of all sizes.
            </p>
            <p className="text-gray-200 leading-relaxed mb-6">
              Our platform transforms vehicles into predictive systems and infrastructure into intelligent, self-optimizing networks. If you're an OEM, Tier-1 supplier, or fleet operator looking to harness the power of automotive AI, let's start a conversation about how we can help you lead this transformation.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleContactClick}
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary-500 text-white font-semibold rounded-lg hover:bg-secondary-600 transition-colors cursor-pointer"
              >
                Request a Demo
                <Zap size={18} />
              </button>
              <a
                href="/resources/whitepapers/automotive-intelligence"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
              >
                Read Technical Whitepaper
                <Cpu size={18} />
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

export default AutomotiveBlog;
