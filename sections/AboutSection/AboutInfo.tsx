import { UnderlineText } from '@components';
import React from 'react';
import { useIntl } from 'react-intl';

export const AboutInfo = () => {
  const { formatMessage } = useIntl();

  return (
    <div className="mb-8 grid grid-cols-2 grid-rows-1 rounded-[64px] bg-gray-50 dark:bg-[#303030]">
      <div className="flex items-center justify-center">
        <div className="flex flex-col gap-2">
          <span className="block text-5xl font-semibold">
            {formatMessage({ defaultMessage: 'Eat' })}
          </span>
          <span className="block text-5xl font-semibold">
            {formatMessage({ defaultMessage: 'Learn' })}
          </span>
          <UnderlineText
            className="text-5xl font-bold"
            underlineBackground="secondary-100"
            darkUnderlineBackground="#0F6171"
          >
            {formatMessage({ defaultMessage: 'Code.' })}
          </UnderlineText>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="p-16">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis vel
            sollicitudin interdum lobortis amet. Elementum, id tristique tincidunt fusce
            volutpat diam ultricies turpis. Ut ac feugiat gravida odio purus at. Dignissim
            ut interdum fermentum at justo, at.
          </p>
          <br />
          <p>
            Eu orci vel et curabitur scelerisque tortor diam. Et, laoreet a adipiscing
            tempus at molestie imperdiet cursus eget. Facilisis risus iaculis vitae, sed
            lectus. Et vel, sit a viverra eu semper curabitur sociis sapien. Viverra odio
            risus, mollis morbi a lacus. Amet sed eget pellentesque a tellus. Ac augue
            enim nulla eu, imperdiet quis. Aliquam aliquam vel elit nullam morbi.
          </p>
        </div>
      </div>
    </div>
  );
};
