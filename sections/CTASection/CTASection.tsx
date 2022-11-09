import React from 'react';

export const CTASection = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-1 rounded-[64px] bg-primary p-16 text-white">
      <div className="flex items-center justify-center">
        <div className="text-5xl font-bold">
          <p className="block">Got something to tell?</p>
          <p className="block">Drop me a line!</p>
        </div>
      </div>
      <div className="p-16">
        <form>
          <input className="block" placeholder="Enter your email" />
          <input className="block" placeholder="Enter your full name" />
          <textarea className="block" placeholder="What is your message?" />
        </form>
      </div>
    </div>
  );
};
