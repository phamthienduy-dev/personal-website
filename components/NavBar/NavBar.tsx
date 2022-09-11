import React from 'react';

import { useIntl } from 'react-intl';

export function NavBar() {
  const intl = useIntl();

  return (
    <h1>
      {intl.formatMessage(
        {
          description: 'A message', // Description should be a string literal
          defaultMessage: 'My name is {name}', // Message should be a string literal
        },
        {
          name: 'BOB',
        }, // Values should be an object literal, but not necessarily every value inside
      )}
    </h1>
  );
}
