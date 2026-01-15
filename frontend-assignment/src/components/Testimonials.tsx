import React, { useState } from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Alex Johnson',
      role: 'Product Manager, TechCorp',
      content: 'This platform has revolutionized how our team collaborates. We\'ve seen a 40% increase in productivity.',
      avatar: 'AJ',
    },
    {
      name: 'Sarah Miller',
      role: 'CTO, StartupXYZ',
      content: 'The analytics capabilities are unparalleled. We get insights that help us make data-driven decisions daily.',
      avatar: 'SM',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
              <Quote className="w-6 h-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by industry leaders
            </h2>
            <p className="text-gray-600">
              See what our customers have to say
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-blue-100 mb-6">
              <Quote className="w-12 h-12" />
            </div>

            <p className="text-xl text-gray-700 mb-8">
              "{testimonials[currentIndex].content}"
            </p>

            <div className="flex items-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>

            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold mr-4">
                {testimonials[currentIndex].avatar}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-gray-600">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>

            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
                  aria-label={`Show testimonial ${index + 1}`}
                  title={`Show testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;