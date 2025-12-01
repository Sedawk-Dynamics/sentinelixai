import React from 'react';
import { events } from '../../data';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Events: React.FC = () => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const getEventTypeLabel = (type: string) => {
    switch (type) {
      case 'webinar':
        return 'Webinar';
      case 'conference':
        return 'Conference';
      case 'workshop':
        return 'Workshop';
      default:
        return 'Event';
    }
  };

  const getEventTypeClass = (type: string) => {
    switch (type) {
      case 'webinar':
        return 'bg-secondary-100 text-secondary-800';
      case 'conference':
        return 'bg-primary-100 text-primary-800';
      case 'workshop':
        return 'bg-accent-100 text-accent-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-4">
            Upcoming Events
          </h2>
          <p className="text-lg text-gray-600">
            Join us at these upcoming events to learn more about the latest trends and innovations in cybersecurity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-card overflow-hidden border border-gray-100 hover:shadow-card-hover transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 m-4">
                  <span className={`inline-block py-1 px-3 rounded-full text-sm font-medium ${getEventTypeClass(event.type)}`}>
                    {getEventTypeLabel(event.type)}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-800 mb-3">{event.title}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <Calendar size={18} className="mr-2 text-secondary-500" />
                  <span>{formatDate(event.date)}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin size={18} className="mr-2 text-secondary-500" />
                  <span>{event.location}</span>
                </div>
                <p className="text-gray-600 mb-6">{event.description}</p>
                <div className="flex space-x-3">
                  <a
                    href={`/events/${event.id}`}
                    className="px-4 py-2 bg-secondary-500 text-white font-medium rounded-md hover:bg-secondary-600 transition-colors inline-flex items-center"
                  >
                    Learn More
                  </a>
                  <a
                    href={`/events/${event.id}/register`}
                    className="px-4 py-2 border border-primary-600 text-primary-600 font-medium rounded-md hover:bg-primary-50 transition-colors inline-flex items-center"
                  >
                    Register
                    <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/events"
            className="inline-block px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors"
          >
            View All Events
          </a>
        </div>
      </div>
    </section>
  );
};

export default Events;