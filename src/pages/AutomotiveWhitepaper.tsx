import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Cpu, Shield, Zap, Database, Cloud, Lock, CheckCircle, TrendingUp, Award, Gauge, Server, Container, GitBranch, Layers, Activity } from 'lucide-react';

const AutomotiveWhitepaper: React.FC = () => {
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
            SentinelixAI – Automotive Intelligence Suite
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl">
            A refined, AI‑focused vision highlighting our strongest differentiator: enterprise‑grade ML deployment at scale
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Award className="text-secondary-400" size={20} />
              <span className="text-sm font-medium">Enterprise-Grade AI</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Shield className="text-secondary-400" size={20} />
              <span className="text-sm font-medium">ISO 26262 & 21434 Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 mb-8">
            <div className="bg-primary-100 p-3 rounded-lg">
              <Cpu className="text-primary-600" size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary-900 mb-4">
                AI at the Core of Automotive Intelligence
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                SentinelixAI places advanced machine learning and model deployment at the center of its automotive capabilities. Our platform ingests real‑time telemetry, sensor data, and vehicle diagnostics, converting them into intelligence that drives performance, safety, and operational excellence across ICE and EV ecosystems.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Whether deployed on‑premise inside OEM facilities, at the edge within vehicle gateways, or across hybrid enterprise clouds, SentinelixAI ensures <strong className="text-primary-600">fast, secure, and highly optimized AI inference</strong> tuned for automotive environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Model Deployment */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 mb-8">
            <div className="bg-secondary-100 p-3 rounded-lg">
              <Zap className="text-secondary-600" size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary-900 mb-4">
                Advanced Model Deployment & Optimization
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our biggest strength lies in <strong className="text-secondary-600">running heavy ML models efficiently—anywhere</strong>.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-primary-900 mb-4 flex items-center gap-2">
                <Cloud className="text-primary-600" size={24} />
                Deployment Capabilities
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-secondary-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700"><strong>Edge‑Optimized Inference:</strong> Low‑latency models running inside ECUs, telematics units, or smart gateways.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-secondary-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700"><strong>Hybrid Cloud Execution:</strong> Split compute for cost‑efficient training and ultra‑fast inference.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-secondary-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700"><strong>Custom On‑Prem Deployments:</strong> High‑security, air‑gapped setups for OEMs and Tier‑1 suppliers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-secondary-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700"><strong>Large‑Scale Model Serving:</strong> Distributed inference using GPU/TPU acceleration.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-primary-900 mb-4 flex items-center gap-2">
                <Gauge className="text-primary-600" size={24} />
                Model Optimization Pipeline
              </h3>
              <p className="text-gray-700 mb-4">
                We enable fast, reliable execution even with complex physics‑informed ML models through:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-secondary-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">ONNX Runtime and TensorFlow Serving / TFLite acceleration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-secondary-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Quantization, pruning, and knowledge distillation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-secondary-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Hardware‑aware model tuning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-secondary-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Auto‑batching and intelligent caching</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-8 rounded-xl border border-primary-200">
            <h3 className="text-xl font-bold text-primary-900 mb-4 flex items-center gap-2">
              <TrendingUp className="text-primary-600" size={24} />
              Secure ML Lifecycle (MLOps)
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <CheckCircle className="text-secondary-500 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">Continuous training using real‑world telemetry</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="text-secondary-500 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">Zero‑downtime model rollout</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="text-secondary-500 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">Version control for every model and feature extractor</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="text-secondary-500 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">Automated validation gates for safety‑critical ML</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Twin */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 mb-8">
            <div className="bg-primary-100 p-3 rounded-lg">
              <Database className="text-primary-600" size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary-900 mb-4">
                Real‑Time Digital Twin for ICE & EV
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our digital twin models are powered by <strong className="text-primary-600">physics‑informed neural networks</strong>, multi‑modal sensor fusion, and high‑frequency telemetry processing.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-primary-50 p-8 rounded-xl border border-gray-200">
            <h3 className="text-xl font-bold text-primary-900 mb-6">Capabilities</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="bg-secondary-100 p-2 rounded-lg">
                  <CheckCircle className="text-secondary-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Engine & Drivetrain Modeling</h4>
                  <p className="text-sm text-gray-600">Comprehensive energy‑flow analysis</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-secondary-100 p-2 rounded-lg">
                  <CheckCircle className="text-secondary-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">SOH/SOC Estimation</h4>
                  <p className="text-sm text-gray-600">Battery degradation forecasting</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-secondary-100 p-2 rounded-lg">
                  <CheckCircle className="text-secondary-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Predictive EV Range</h4>
                  <p className="text-sm text-gray-600">Real-time estimation with ML precision</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-secondary-100 p-2 rounded-lg">
                  <CheckCircle className="text-secondary-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Anomaly Detection</h4>
                  <p className="text-sm text-gray-600">Thermal deviation & real‑time monitoring</p>
                </div>
              </div>
            </div>
            <p className="mt-6 text-gray-600 italic">
              Digital twins run at the <strong>edge or cloud</strong>, depending on latency and cost requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Intelligence Modules */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-900 mb-4">
            Intelligence Modules
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            We condense fleet, charging, and operational insights into lightweight modules, all powered by SentinelixAI's ML backbone.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-primary-900 mb-4">Fleet Intelligence</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-secondary-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Predictive maintenance & failure likelihood</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-secondary-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Driver behavior & safety scoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-secondary-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Utilization analytics & route efficiency</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-primary-900 mb-4">Smart Charging Analytics</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-secondary-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Charging pattern modeling</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-secondary-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Battery‑aware charging recommendations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-secondary-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Charger fault prediction & congestion forecasting</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="mt-6 text-gray-600 italic text-center">
            These modules operate on top of our scalable ML deployment layer.
          </p>
        </div>
      </section>

      {/* Why SentinelixAI Stands Out */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-900 mb-12 text-center">
            Why SentinelixAI Stands Out
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl border border-primary-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary-600 p-2 rounded-lg">
                  <Cpu className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-primary-900">Deep ML Deployment Expertise</h3>
              </div>
              <p className="text-gray-700">
                We specialize in taking large, compute‑intensive models and making them production‑ready.
              </p>
            </div>

            <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-6 rounded-xl border border-secondary-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-secondary-600 p-2 rounded-lg">
                  <Gauge className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-primary-900">Built for Harsh Automotive Environments</h3>
              </div>
              <p className="text-gray-700 mb-3">Our models are optimized for:</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle className="text-secondary-600 flex-shrink-0" size={16} />
                  Low power devices
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle className="text-secondary-600 flex-shrink-0" size={16} />
                  Intermittent connectivity
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle className="text-secondary-600 flex-shrink-0" size={16} />
                  Strict latency constraints
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle className="text-secondary-600 flex-shrink-0" size={16} />
                  Safety‑critical conditions
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl border border-primary-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary-600 p-2 rounded-lg">
                  <Shield className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-primary-900">Security & Compliance First</h3>
              </div>
              <p className="text-gray-700 mb-3">
                Our AI deployment environments follow industry best practices for safety, cybersecurity, and enterprise-grade protection:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle className="text-primary-600 flex-shrink-0 mt-0.5" size={16} />
                  <span><strong>ISO 26262 (Functional Safety):</strong> Applied to system-level workflows where model insights support safety-related decisions.</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle className="text-primary-600 flex-shrink-0 mt-0.5" size={16} />
                  <span><strong>ISO 21434 (Automotive Cybersecurity):</strong> Ensures secure data pipelines, protected OTA updates, and model integrity across vehicle and cloud ecosystems.</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle className="text-primary-600 flex-shrink-0 mt-0.5" size={16} />
                  <span><strong>SOC 2 & NIST-aligned architectures:</strong> Governs secure cloud/on‑prem model serving, telemetry handling, and ML lifecycle management.</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-6 rounded-xl border border-secondary-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-secondary-600 p-2 rounded-lg">
                  <TrendingUp className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-primary-900">Future‑Ready</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="text-secondary-600 flex-shrink-0" size={16} />
                  EV infrastructure prediction engines
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="text-secondary-600 flex-shrink-0" size={16} />
                  Battery second‑life scoring models
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud AI/ML Deployment Pipelines */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">
              Enterprise Cloud AI/ML Deployment
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              SentinelixAI leverages industry-leading cloud platforms to deliver scalable, production-ready ML solutions for automotive intelligence.
            </p>
          </div>

          {/* AWS Pipeline */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-orange-100 p-3 rounded-lg">
                <Cloud className="text-orange-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-primary-900">AWS AI/ML Pipeline</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
                <div className="flex items-center gap-2 mb-3">
                  <Database className="text-orange-600" size={24} />
                  <h4 className="font-bold text-primary-900">Data Processing</h4>
                </div>
                <p className="text-sm text-gray-700">
                  Scalable data ingestion and processing pipelines for real-time and batch vehicle data.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
                <div className="flex items-center gap-2 mb-3">
                  <Cpu className="text-orange-600" size={24} />
                  <h4 className="font-bold text-primary-900">ML Training & Optimization</h4>
                </div>
                <p className="text-sm text-gray-700">
                  Advanced model training with automated optimization and distributed computing capabilities.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
                <div className="flex items-center gap-2 mb-3">
                  <Container className="text-orange-600" size={24} />
                  <h4 className="font-bold text-primary-900">Deployment & Monitoring</h4>
                </div>
                <p className="text-sm text-gray-700">
                  Production-ready model deployment with continuous monitoring and performance tracking.
                </p>
              </div>
            </div>
          </div>

          {/* Azure Pipeline */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Cloud className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-primary-900">Azure AI/ML Pipeline</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                <div className="flex items-center gap-2 mb-3">
                  <Database className="text-blue-600" size={24} />
                  <h4 className="font-bold text-primary-900">Data Management</h4>
                </div>
                <p className="text-sm text-gray-700">
                  Enterprise-grade data pipelines with analytics integration for comprehensive vehicle insights.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                <div className="flex items-center gap-2 mb-3">
                  <Cpu className="text-blue-600" size={24} />
                  <h4 className="font-bold text-primary-900">AI Model Development</h4>
                </div>
                <p className="text-sm text-gray-700">
                  Powerful training capabilities with AutoML and managed compute infrastructure.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="text-blue-600" size={24} />
                  <h4 className="font-bold text-primary-900">Production Deployment</h4>
                </div>
                <p className="text-sm text-gray-700">
                  Secure model deployment with continuous monitoring and responsible AI governance.
                </p>
              </div>
            </div>
          </div>

          {/* GCP AI/ML Pipeline */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-red-100 p-3 rounded-lg">
                <Cloud className="text-red-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-primary-900">GCP AI/ML Pipeline</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border border-red-200">
                <div className="flex items-center gap-2 mb-3">
                  <Database className="text-red-600" size={24} />
                  <h4 className="font-bold text-primary-900">Streaming & Analytics</h4>
                </div>
                <p className="text-sm text-gray-700">
                  High-performance data ingestion with real-time processing for connected vehicle fleets.
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border border-red-200">
                <div className="flex items-center gap-2 mb-3">
                  <Cpu className="text-red-600" size={24} />
                  <h4 className="font-bold text-primary-900">Vertex AI Platform</h4>
                </div>
                <p className="text-sm text-gray-700">
                  Unified ML platform with AutoML capabilities and multi-framework support.
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border border-red-200">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="text-red-600" size={24} />
                  <h4 className="font-bold text-primary-900">Global Deployment</h4>
                </div>
                <p className="text-sm text-gray-700">
                  Scalable infrastructure with explainable AI and edge deployment capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Deployment Strategies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">
              Key Cloud Deployment Strategies
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Flexible deployment options optimized for different automotive intelligence use cases
            </p>
          </div>

          <div className="space-y-6">
            {/* Real-time Inference */}
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-secondary-500">
              <div className="flex items-start gap-4">
                <div className="bg-secondary-100 p-3 rounded-lg">
                  <Zap className="text-secondary-600" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary-900 mb-2">1. Real-Time Inference (Online Endpoints)</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>How it works:</strong> Model hosted as REST API endpoint (AWS SageMaker, Azure ML, Google Vertex AI)
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mb-3">
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-1">Use Case:</p>
                      <p className="text-sm text-gray-600">Telematics dashboards, embedded systems requiring instant predictions</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-green-600 mb-1">Pros:</p>
                      <p className="text-sm text-gray-600">Low latency, easy web/mobile integration</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-orange-600 mb-1">Cons:</p>
                      <p className="text-sm text-gray-600">Requires autoscaling for traffic spikes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Batch Inference */}
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-primary-500">
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Database className="text-primary-600" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary-900 mb-2">2. Batch Inference</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>How it works:</strong> Process large datasets periodically (e.g., nightly jobs). Predictions stored in cloud storage.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mb-3">
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-1">Use Case:</p>
                      <p className="text-sm text-gray-600">Fleet analytics, anomaly detection, financial risk scoring</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-green-600 mb-1">Pros:</p>
                      <p className="text-sm text-gray-600">Cost-efficient for large datasets, no always-on endpoints</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-orange-600 mb-1">Cons:</p>
                      <p className="text-sm text-gray-600">Not suitable for real-time decisions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Serverless */}
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-500">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Server className="text-purple-600" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary-900 mb-2">3. Serverless Deployment</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>How it works:</strong> Models wrapped in AWS Lambda or Azure Functions. Triggered by events (new S3 file, IoT message, API call).
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mb-3">
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-1">Use Case:</p>
                      <p className="text-sm text-gray-600">Embedded systems requiring lightweight, event-driven inference</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-green-600 mb-1">Pros:</p>
                      <p className="text-sm text-gray-600">Pay-per-use, no server management, easy IoT integration</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-orange-600 mb-1">Cons:</p>
                      <p className="text-sm text-gray-600">Limited runtime/memory for heavy ML workloads</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Containerized */}
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Container className="text-blue-600" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary-900 mb-2">4. Containerized Deployment (Kubernetes/EKS/AKS/GKE)</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>How it works:</strong> Models packaged in Docker containers, deployed on Kubernetes clusters.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-3">
                    <div>
                      <p className="text-sm font-semibold text-green-600 mb-1">Pros:</p>
                      <p className="text-sm text-gray-600">Flexible, portable, supports microservices architecture</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-orange-600 mb-1">Cons:</p>
                      <p className="text-sm text-gray-600">More complex to manage; requires DevOps/MLOps expertise</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hybrid Cloud + Edge */}
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <GitBranch className="text-green-600" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary-900 mb-2">5. Hybrid Cloud + Edge Deployment</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>How it works:</strong> Core model in cloud, lightweight inference on edge devices (IoT gateways, embedded systems).
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-3">
                    <div>
                      <p className="text-sm font-semibold text-green-600 mb-1">Pros:</p>
                      <p className="text-sm text-gray-600">Real-time local inference, reduced bandwidth usage</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-orange-600 mb-1">Cons:</p>
                      <p className="text-sm text-gray-600">Requires model compression/optimization for edge hardware</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AutoML */}
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-indigo-500">
              <div className="flex items-start gap-4">
                <div className="bg-indigo-100 p-3 rounded-lg">
                  <Cpu className="text-indigo-600" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary-900 mb-2">6. Managed AutoML & ML Pipelines</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>How it works:</strong> Cloud-native AutoML services (AWS SageMaker Autopilot, Azure AutoML, Google Vertex AI AutoML).
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mb-3">
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-1">Use Case:</p>
                      <p className="text-sm text-gray-600">Rapid prototyping, teams without deep ML expertise</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-green-600 mb-1">Pros:</p>
                      <p className="text-sm text-gray-600">Fast, automated, integrated cloud monitoring</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-orange-600 mb-1">Cons:</p>
                      <p className="text-sm text-gray-600">Less control over model architecture</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Choosing Strategy */}
          <div className="mt-12 bg-gradient-to-r from-primary-900 to-primary-700 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award size={28} />
              Choosing the Right Strategy
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-secondary-400 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold mb-1">Web dashboards / Android apps</p>
                  <p className="text-sm text-gray-200">→ Real-time endpoints (API Gateway + SageMaker/Azure ML)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-secondary-400 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold mb-1">Sensor fusion & embedded systems</p>
                  <p className="text-sm text-gray-200">→ Serverless (Lambda/Functions) or hybrid edge/cloud</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-secondary-400 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold mb-1">Large-scale historical analysis</p>
                  <p className="text-sm text-gray-200">→ Batch inference jobs</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-secondary-400 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold mb-1">Rapid prototyping</p>
                  <p className="text-sm text-gray-200">→ AutoML pipelines</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
            <p className="text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto mb-6">
              SentinelixAI brings together real‑time vehicle intelligence and world‑class ML deployment engineering. By combining digital twins, predictive analytics, and high‑performance model serving, we enable automotive companies to operate with unprecedented efficiency, accuracy, and intelligence.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto">
              Our platform transforms vehicles into predictive systems and infrastructure into intelligent, self‑optimizing networks—setting the foundation for the next era of connected mobility.
            </p>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={handleContactClick}
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary-500 text-white font-semibold rounded-lg hover:bg-secondary-600 transition-colors shadow-lg cursor-pointer"
            >
              Request a Demo
              <Zap size={20} />
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// Helper component for FileText icon
const FileText: React.FC<{ className?: string; size?: number }> = ({ className, size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

export default AutomotiveWhitepaper;
