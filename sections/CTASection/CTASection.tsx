import { SecondaryButton } from '@components';
import React from 'react';

export const CTASection = () => {
  return (
    <div className="mb-[120px] grid grid-cols-2 grid-rows-1 gap-16 rounded-[64px] bg-primary p-10 text-white">
      <div className="flex items-center justify-center">
        <div className="text-5xl font-bold">
          <p className="block">Got something to tell?</p>
          <p className="block">Drop me a line!</p>
        </div>
      </div>
      <form className="w-[300px]">
        <input
          className="mb-8 block w-full border-b border-inherit bg-transparent pb-8 text-white placeholder:text-white"
          placeholder="Enter your email"
        />
        <input
          className="mb-8 block w-full border-b border-inherit bg-transparent pb-8 text-white placeholder:text-white"
          placeholder="Enter your full name"
        />
        <textarea
          className="mb-8 block w-full resize-none border-b border-inherit bg-transparent pb-8 text-white placeholder:text-white"
          placeholder="What is your message?"
        />
        <SecondaryButton>Send</SecondaryButton>
      </form>
    </div>
  );
};
