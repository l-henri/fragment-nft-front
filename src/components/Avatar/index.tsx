import React from 'react';
import './index.less';
import { Typography } from 'antd';

const { Title, Text } = Typography;

interface AvatarInterface {
  id: number;
  name: string;
  text: string;
  imageSource: string;
}

export const Avatar: React.FC<AvatarInterface> = ({
  id,
  name,
  text,
  imageSource,
}: AvatarInterface) => {
  return (
    <>
      <img src={imageSource} alt={`avatar-${id}`} />
      <Title level={3}>{name}</Title>
      <Text className="avatar-text">{text}</Text>
    </>
  );
};
