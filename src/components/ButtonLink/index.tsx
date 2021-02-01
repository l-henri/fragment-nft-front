/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

interface ButtonLink extends React.ComponentProps<typeof Button> {
  to: string;
}

export const ButtonLink: React.FC<ButtonLink> = ({ children, to, ...rest }: ButtonLink) => {
  return (
    <Button type="text" {...rest}>
      <Link to={to}>{children}</Link>
    </Button>
  );
};
