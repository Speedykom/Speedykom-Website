import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch with Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have questions or need support? Reach out to us,
            <br className="hidden sm:block" />
            and we&apos;ll be happy to assist you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="bg-gray-100/80 rounded-2xl p-8 hover:bg-gray-100 transition-colors duration-200">
            <div className="flex flex-col items-start space-y-4">
              <div className="w-12 h-12 bg-[#56A09A] rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Call Us</h3>
              <div className="text-gray-600 space-y-1">
                <p>
                  Call us at{' '}
                  <a 
                    href="tel:+4991311230366" 
                    className="text-[#56A09A] hover:text-[#4A8A85] font-medium transition-colors"
                  >
                    +49 9131 123 0366
                  </a>
                  , available
                </p>
                <p>Monday to Friday, 9 AM to 5 PM.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-100/80 rounded-2xl p-8 hover:bg-gray-100 transition-colors duration-200">
            <div className="flex flex-col items-start space-y-4">
              <div className="w-12 h-12 bg-[#56A09A] rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Email Us</h3>
              <div className="text-gray-600 space-y-1">
                <p>
                  Send us an email at{' '}
                  <a 
                    href="mailto:hello@speedykom.de" 
                    className="text-[#56A09A] hover:text-[#4A8A85] font-medium transition-colors"
                  >
                    hello@speedykom.de
                  </a>
                </p>
                <p>and we&apos;ll get back to you.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-100/80 rounded-2xl p-8 hover:bg-gray-100 transition-colors duration-200">
            <div className="flex flex-col items-start space-y-4">
              <div className="w-12 h-12 bg-[#56A09A] rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Visit us</h3>
              <div className="text-gray-600 space-y-1">
                <p>Henkestr. 91, DE- 91052 Erlangen</p>
                <p>Germany</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;