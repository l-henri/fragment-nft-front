import React from 'react';
import { Button } from 'antd';

export const ButtonText: React.FC<React.ComponentProps<typeof Button>> = props => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Button type="text" {...props} />;
};
