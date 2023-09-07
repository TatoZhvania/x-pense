import React from 'react';
import { nav } from '../data';

const MobileNav = () => {
  return (
    <div className="bg-accent/[9] w-full h-[100vh]">
      <ul className="h-full flex flex-col justify-center items-center gap-y-8">
        {nav.map((item, index) => {
          const { href, name } = item;
          return (
            <li key={index}>
              <a className="link text-white text-xl" href={href}>
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileNav;
