import React from 'react';
import { resourceItems } from '../../data';
import { ArrowRight, FileText, BookOpen, BarChart } from 'lucide-react';

const Resources: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'whitepaper':
        return <FileText size={24} className="text-primary-600" />;
      case 'case-study':
        return <BarChart size={24} className="text-primary-600" />;
      case 'blog':
        return <BookOpen size={24} className="text-primary-600" />;
      default:
        return <FileText size={24} className="text-primary-600" />;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'whitepaper':
        return 'Whitepaper';
      case 'case-study':
        return 'Case Study';
      case 'blog':
        return 'Blog Post';
      default:
        return 'Resource';
    }
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <section id="resources" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-4">
            Cybersecurity Resources & Insights
          </h2>
          <p className="text-lg text-gray-600">
            Stay informed with our latest research, case studies, and thought leadership in financial cybersecurity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resourceItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-card overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-0 right-0 bg-white py-1 px-3 rounded-bl-lg">
                  <div className="flex items-center">
                    {getIcon(item.type)}
                    <span className="ml-2 text-sm font-medium text-gray-700">{getTypeLabel(item.type)}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{formatDate(item.date)}</p>
                <h3 className="text-xl font-semibold text-primary-800 mb-3 group-hover:text-secondary-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <a
                  href={item.type === 'whitepaper' ? `/resources/whitepapers/${item.id}` : item.type === 'blog' ? `/resources/blog/${item.id}` : `/resources/whitepapers/${item.id}`}
                  className="inline-flex items-center text-secondary-500 font-medium hover:text-secondary-600 transition-colors"
                >
                  Read more
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/resources/whitepapers/automotive-intelligence"
            className="inline-block px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors"
          >
            View All Resources
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resources;