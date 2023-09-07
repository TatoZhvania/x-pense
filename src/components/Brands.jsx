import React from 'react';
import { overview } from '../data';

const Brands = () => {
  const { brands } = overview;
  return (
    <section className="py-9 bg-pink-100">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-y-6">
        {brands.map((item, index) => {
          const { image, delay } = item;
          return (
            <div key={index} data-aos="fade-up" data-aos-delay={delay}>
              <img src={image} alt="brandImg" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Brands;
