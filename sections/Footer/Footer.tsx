import { Logo } from '@components';
import React from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className="container grid grid-cols-4 grid-rows-1 pb-14">
      <Logo />
      <div>
        <h6 className="pb-5 font-bold">Sections</h6>
        <div className="flex flex-col gap-2">
          <span>About</span>
          <span>Projects</span>
          <span>Tools</span>
          <span>Blogs</span>
        </div>
      </div>
      <div>
        <h6 className="pb-5 font-bold">Contact</h6>
        <div className="flex flex-col gap-2 ">
          <div className="flex items-center gap-1">
            <FaPhoneAlt />
            <a href="tel:+0938004592">0938004592</a>
          </div>
          <div className="flex items-center gap-1">
            <FaEnvelope />
            <a href="mailto:duyphamthien@outlook.com">duyphamthien@outlook.com</a>
          </div>
        </div>
      </div>
      <div>Designed and developed by me</div>
    </div>
  );
};
