import { NavLink, Solution, Testimonial, TeamMember, JobPosition, ResourceItem, Event } from '../types';
import { Shield, FileBarChart, Eye, Lock, MessageSquareWarning, PieChart, Activity, Key, Car, Zap, Gauge, Settings, BarChart3, Cpu, Battery, Wrench } from 'lucide-react';

export const navLinks: NavLink[] = [
  { name: 'Home', path: '/' },
  { 
    name: 'Solutions', 
    path: '/#solutions',
    subLinks: [
      { name: 'BFSI Solutions', path: '/#bfsi-solutions' },
      { name: 'Automotive Solutions', path: '/#automotive-solutions' },
    ]
  },
  { 
    name: 'Resources', 
    path: '/resources',
    subLinks: [
      { name: 'Case Studies', path: '/resources/whitepapers/automotive-intelligence' },
      { name: 'Whitepapers', path: '/resources/whitepapers', subLinks: [
        { name: 'Automotive Intelligence', path: '/resources/whitepapers/automotive-intelligence' },
        { name: 'Cybersecurity for BFSI', path: '/resources/whitepapers/cybersecurity-bfsi' },
      ] },
      { name: 'Blog', path: '/resources/blog', subLinks: [
        { name: 'BFSI: AI Cybersecurity', path: '/resources/blog/bfsi-cybersecurity' },
        { name: 'Automotive: AI Intelligence', path: '/resources/blog/automotive-intelligence' },
      ] },
    ] 
  },
  { name: 'About Us', path: '/#leadership' },
  { name: 'Careers', path: '/#careers' },
  { name: 'Events', path: '/#events' },
  { name: 'Contact', path: '/#contact' },
];

export const solutions: Solution[] = [
  // BFSI Solutions
  {
    id: 'transaction-security',
    title: 'Transaction Security',
    description: 'Protect payment transactions across UPI, IMPS, RTGS, and NEFT with our advanced AI-driven security solutions that detect and prevent fraud in real-time.',
    icon: 'Shield',
    domain: 'bfsi',
    benefits: [
      'Real-time transaction monitoring',
      'Multi-layered security protocols',
      'Seamless integration with existing systems',
      'Minimal false positives'
    ]
  },
  {
    id: 'fraud-detection',
    title: 'Fraud Detection',
    description: 'Identify suspicious patterns and prevent fraud before it happens with our machine learning models that analyze transaction behavior across millions of data points.',
    icon: 'Eye',
    domain: 'bfsi',
    benefits: [
      'Pattern recognition algorithms',
      'Anomaly detection',
      'Historical data analysis',
      'Continuous learning systems'
    ]
  },
  {
    id: 'risk-scoring',
    title: 'Risk Scoring',
    description: 'Assess transaction risk with precision using our advanced scoring system that combines multiple risk factors to generate accurate risk profiles in milliseconds.',
    icon: 'FileBarChart',
    domain: 'bfsi',
    benefits: [
      'Comprehensive risk metrics',
      'Customizable scoring parameters',
      'Real-time assessment',
      'Automated risk mitigation'
    ]
  },
  {
    id: 'user-behavior',
    title: 'User Behavior Analytics',
    description: 'Understand normal user patterns and detect deviations that may indicate fraud or account takeover with our sophisticated behavioral analytics engine.',
    icon: 'Activity',
    domain: 'bfsi',
    benefits: [
      'Biometric analysis',
      'Spending pattern recognition',
      'Geolocation verification',
      'Session behavior tracking'
    ]
  },
  {
    id: 'device-intelligence',
    title: 'Device Intelligence',
    description: 'Identify trusted devices and detect suspicious login attempts with our device fingerprinting and intelligence solutions.',
    icon: 'Lock',
    domain: 'bfsi',
    benefits: [
      'Device fingerprinting',
      'Anomalous device detection',
      'Cross-device correlation',
      'Botnet identification'
    ]
  },
  {
    id: 'aml-compliance',
    title: 'AML Compliance',
    description: 'Meet regulatory requirements and detect money laundering activities with our comprehensive AML solution built specifically for financial institutions.',
    icon: 'Key',
    domain: 'bfsi',
    benefits: [
      'Regulatory compliance',
      'Suspicious activity reporting',
      'Risk-based approach',
      'Continuous monitoring'
    ]
  },
  {
    id: 'scam-prevention',
    title: 'Scam Prevention',
    description: 'Protect customers from sophisticated scams with our AI-powered prevention system that detects and blocks common scam patterns in real-time.',
    icon: 'MessageSquareWarning',
    domain: 'bfsi',
    benefits: [
      'Social engineering detection',
      'Scam pattern recognition',
      'Customer education tools',
      'Real-time blocking capabilities'
    ]
  },
  {
    id: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    description: 'Visualize security metrics and gain actionable insights through our customizable dashboards designed for security teams and executives.',
    icon: 'PieChart',
    domain: 'bfsi',
    benefits: [
      'Customizable visualization',
      'Role-based access control',
      'Real-time data updates',
      'Exportable reports'
    ]
  },
  // Automotive Solutions
  {
    id: 'enterprise-ml-deployment',
    title: 'Enterprise ML Deployment Platform',
    description: 'Production-grade ML model deployment across AWS, Azure, and GCP. Optimize heavy models for edge devices, on-premise, and cloud with real-time inference and automated monitoring.',
    icon: 'Cloud',
    domain: 'automotive',
    benefits: [
      'Cross-cloud deployment (AWS/Azure/GCP)',
      'Edge-to-cloud architecture',
      'Real-time & batch inference',
      'Model optimization & monitoring'
    ]
  },
  {
    id: 'digital-twin-dashboards',
    title: 'Digital Twin Dashboards',
    description: 'Real-time digital twin simulation for both ICE and EV vehicles. Monitor engine performance, fuel efficiency, drivetrain dynamics, and energy flow with predictive range calculations.',
    icon: 'Monitor',
    domain: 'automotive',
    benefits: [
      'Real-time engine & fuel simulation for ICE',
      'EV drivetrain & energy flow tracking',
      'Predictive range calculations',
      'Live mechanical system monitoring'
    ]
  },
  {
    id: 'thermal-runaway-detection',
    title: 'Thermal Runaway Detection',
    description: 'AI-based thermal risk analysis with real-time temperature tracking and failure prediction to prevent dangerous thermal runaway events in EV batteries.',
    icon: 'Thermometer',
    domain: 'automotive',
    benefits: [
      'AI-powered thermal risk analysis',
      'Real-time temperature monitoring',
      'Predictive failure detection',
      'Emergency response protocols'
    ]
  },
  {
    id: 'smart-charging-infrastructure',
    title: 'Smart Charging & Infrastructure',
    description: 'Advanced charging pattern analytics and shared EV infrastructure management for fleets and customers, optimizing charging efficiency and resource utilization.',
    icon: 'Zap',
    domain: 'automotive',
    benefits: [
      'User-specific charging pattern analytics',
      'Shared infrastructure optimization',
      'Fleet charging management',
      'Dynamic pricing algorithms'
    ]
  },
  {
    id: 'ev-software-diagnostics',
    title: 'EV Software Diagnostics',
    description: 'Advanced CAN signal analysis, firmware tracing, and root cause analysis for EV control stacks, providing deep insights into software-related issues.',
    icon: 'Code',
    domain: 'automotive',
    benefits: [
      'CAN signal monitoring & analysis',
      'Firmware tracing capabilities',
      'Root cause analysis for control stack',
      'Real-time diagnostic reporting'
    ]
  },
  {
    id: 'predictive-analytics',
    title: 'Predictive Analytics',
    description: 'Advanced AI-powered predictive analytics for ICE and EV systems, enabling proactive maintenance and performance optimization before issues occur.',
    icon: 'BarChart3',
    domain: 'automotive',
    benefits: [
      'Predictive maintenance scheduling',
      'Performance trend analysis',
      'Failure prediction algorithms',
      'Cost optimization insights'
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'SentinelixAI\'s fraud detection system has reduced our payment fraud by 87% while maintaining a seamless customer experience.',
    author: 'Sarah Johnson',
    company: 'National Banking Corporation',
    image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '2',
    quote: 'SentinelixAI\'s predictive analytics platform has transformed our fleet operations, reducing maintenance costs by 40% and improving vehicle uptime significantly.',
    author: 'Michael Rodriguez',
    company: 'AutoFleet Dynamics',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '3',
    quote: 'Implementing SentinelixAI\'s behavioral analytics has significantly improved our ability to detect account takeover attempts.',
    author: 'Priya Sharma',
    company: 'Global Payments Ltd.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Gaurav V.',
    role: 'Co-Founder & CEO',
    image: 'https://images.pexels.com/photos/5885624/pexels-photo-5885624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'With over 15 years of experience in the BFSI domain, Gaurav has led diverse roles as a Developer, Integration Tester, and QA Manager. He brings hands-on expertise in cybersecurity, compliance, and applied machine learning. Passionate about bridging the gap between digital financial services and fraud resilience, Gaurav co-founded SentinelixAI with a commitment to build a next-generation AI-driven security platform tailored for Indian banks, insurance firms, and fintechs.'
  },  
  {
    id: '3',
    name: 'Arunabh Srivastava',
    role: 'Head of Data Science & AI Research',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Arunabh leads SentinelixAI’s technology and security architecture. Formerly the Head of Cybersecurity AI at a prominent financial institution, he brings extensive domain knowledge in threat modeling, fraud analytics, and enterprise cybersecurity systems. His leadership drives the innovation engine at SentinelixAI, focusing on scalable, AI-native infrastructure and real-time threat prevention.'
  },
  {
    id: '4',
    name: 'Raghavendran L',
    role: 'Chief Technical Officer',
    image: 'https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Raghav heads SentinelixAI’s AI/ML research initiatives. With over a decade of experience as a Senior Java/Python Developer and AI practitioner, he focuses on building advanced algorithms for fraud detection, anomaly detection, and behavioral risk scoring. His ensures SentinelixAI’s models remain cutting-edge and adaptive to new fraud trends.'
  },
  {
    id: '5',
    name: 'Rakesh Attuluru',
    role: 'Head of Full Stack Development',
    image: 'https://images.pexels.com/photos/5475779/pexels-photo-5475779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Rakesh brings 10 years of experience in building robust, scalable web and mobile platforms. As a former Lead Developer and Development Manager, he excels in building real-time dashboards, secure APIs, and responsive user experiences. At SentinelixAI, he oversees the platform’s UI/UX, system integration, and app deployment strategies.'
  }
];

export const jobPositions: JobPosition[] = [
  {
    id: '1',
    title: 'Senior Machine Learning Engineer',
    department: 'Engineering',
    location: 'New York, NY / Remote',
    type: 'Full-time',
    description: 'We are looking for an experienced ML Engineer to help develop and optimize our fraud detection algorithms.'
  },
  {
    id: '2',
    title: 'Data Scientist',
    department: 'Data Science',
    location: 'Bangalore, India',
    type: 'Full-time',
    description: 'Join our data science team to build and refine models for transaction risk assessment and behavioral analytics.'
  },
  {
    id: '3',
    title: 'Solutions Architect',
    department: 'Customer Success',
    location: 'London, UK / Remote',
    type: 'Full-time',
    description: 'Help our financial services clients implement and optimize our security solutions within their existing infrastructure.'
  },
  {
    id: '4',
    title: 'Product Manager - Dashboard Analytics',
    department: 'Product',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'Own the roadmap for our analytics dashboard product, working with customers to deliver actionable insights.'
  }
];

export const resourceItems: ResourceItem[] = [
  {
    id: 'automotive-intelligence',
    title: 'Automotive Intelligence Suite',
    type: 'whitepaper',
    image: 'https://images.pexels.com/photos/6693660/pexels-photo-6693660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Enterprise-grade ML deployment for automotive intelligence, digital twins, and predictive analytics.',
    date: '2025-11-18'
  },
  {
    id: 'cybersecurity-bfsi',
    title: 'Cybersecurity for BFSI',
    type: 'whitepaper',
    image: 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'AI-powered transaction security and fraud prevention for banking and financial services.',
    date: '2025-11-18'
  },
  {
    id: 'automotive-intelligence',
    title: 'The Evolution of Automotive Intelligence',
    type: 'blog',
    image: 'https://images.pexels.com/photos/1181325/pexels-photo-1181325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'How AI and digital twins are reshaping vehicle performance and predictive maintenance.',
    date: '2025-11-18'
  },
  {
    id: 'bfsi-cybersecurity',
    title: 'Revolutionizing Financial Security',
    type: 'blog',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'AI-powered cybersecurity for digital banking. Product launching end of March 2026.',
    date: '2025-11-18'
  }
];

export const events: Event[] = [
  {
    id: '1',
    title: 'SentinelixAI Product Launch',
    date: '2026-03-31',
    location: 'Golden-I, Greater Noida West',
    description: 'Join us for the official launch of our AI-powered cybersecurity platform for BFSI sector.',
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: 'conference'
  },
  {
    id: '2',
    title: 'Future of Fintech Security Summit',
    date: '2026-05-15',
    location: 'Virtual',
    description: 'Join us for the premier event focused on emerging security challenges in financial technology.',
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: 'conference'
  },
  {
    id: '3',
    title: 'Behavioral Analytics in Fraud Prevention',
    date: '2026-04-22',
    location: 'Virtual',
    description: 'A deep dive into how behavioral analytics can transform your fraud prevention strategy.',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: 'webinar'
  },
  {
    id: '4',
    title: 'AI in Financial Crime Workshop',
    date: '2026-06-10',
    location: 'Virtual',
    description: 'Hands-on workshop exploring the latest AI applications in combating financial crime.',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: 'workshop'
  }
];

export const stats = [
  { value: '99.9%', label: 'Uptime' },
  { value: '87%', label: 'Fraud reduction' },
  { value: '<10ms', label: 'Response time' },
  { value: '200+', label: 'Financial institutions' }
];