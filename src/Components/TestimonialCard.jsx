// components/TestimonialCarousel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Grace K.',
    role: 'Fullstack Developer',
    image: 'https://i.pravatar.cc/100?img=32',
    quote: 'Being part of the April Twins group has been one of the most heartwarming experiences of my life. During my wedding, I felt the true meaning of community, love, and presence. The way the group stood by me, supported me, and shared in my joy was something I will never forget. It wasn’t just help—it was genuine care that touched my heart deeply.',
  },
  {
    name: 'James M.',
    role: 'UI/UX Designer',
    image: 'https://i.pravatar.cc/100?img=58',
    quote: 'What makes this group so special is the way we are there for each other—not just in times of celebration but also in times of loss and transition. Seeing how members are quick to visit those who’ve welcomed new borns, and stand close to those who’ve lost loved ones, is a reminder of the strength and beauty of our bond.',
  },
  {
    name: 'Amina B.',
    role: 'Tech Coach',
    image: 'https://i.pravatar.cc/100?img=49',
    quote: 'This group is more than just a group—it’s family. I truly admire the passion, the unity, and the heart that drives everything we do together. My hope is that we never lose this spirit. Let’s continue to keep that same energy, that same potential, and that same love alive',
  },

];

const TestimonialCarousel = () => {
  return (
    <section className="bg-bg py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-xl font-bold text-primary mb-12">
          testimonials
        </h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-primary shadow-lg rounded-2xl p-8 max-w-xl mx-auto transition-transform transform">
                <div className="flex items-center justify-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-bg">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {testimonial.role}
                </p>
                <p className="text-bg italic">
                  “{testimonial.quote}”
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
