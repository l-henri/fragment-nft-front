import AvatarLeft from '@assets/avatar-left.svg';
import AvatarMiddle from '@assets/avatar-middle.svg';
import AvatarRight from '@assets/avatar-right.svg';

interface AvatarInterface {
  id: number;
  name: string;
  text: string;
  imageSource: string;
}

export const avatarData: Array<AvatarInterface> = [
  {
    id: 0,
    name: 'Henri Lieutaud',
    text: 'Blockchain Developer Lead',
    imageSource: AvatarLeft,
  },
  {
    id: 1,
    name: 'Vaimiti Dock',
    text: 'UI/UX Designer',
    imageSource: AvatarMiddle,
  },
  {
    id: 2,
    name: 'Kenji LAU',
    text: 'Blockchain Developer',
    imageSource: AvatarRight,
  },
];
