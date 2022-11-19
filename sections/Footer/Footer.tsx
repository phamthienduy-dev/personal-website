import { Logo } from '@components';
import React from 'react';

export const Footer = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-1">
      <div className="flex flex-col justify-self-start">
        <Logo />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo proin cursus amet
          nulla.
        </p>
      </div>
      <div>
        <h6>Sections</h6>
        <span>About</span>
        <span>Projects</span>
        <span>Tools</span>
        <span>Blogs</span>
      </div>
      <div>
        <h6>Contact</h6>
        <div>0938004592</div>
        <div>duyphamthien@outlook.com</div>
      </div>
      <div>Designed and developed by me</div>
    </div>
  );
};
