import React from 'react';
import { features } from '../data';

const Feature3 = () => {
  const { feature3 } = features;
  const { pretitle, title, subtitle, btnLink, btnIcon, image } = feature3;

  return (
    <section className="section bg-pink-100">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-[30px]">
          <div
            className="flex-1 order-2 lg:order-1"
            data-aos="fade-left"
            data-aos-offset="400"
          >
            <img src={image} alt="ftrimg" />
          </div>

          <div
            className="flex-1 order-1 lg:order-2"
            data-aos="fade-right"
            data-aos-offset="400"
          >
            <div className="pretitle">{pretitle}</div>
            <h1 className="title">{title}</h1>
            <p className="lead">{subtitle}</p>
            <button className=" btn-link flex items-center gap-x-3 hover:gap-x-5 transition-all">
              {btnLink} <img src={btnIcon} alt="btn" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature3;
