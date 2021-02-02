interface Text {
  id: number;
  text: string;
  strong?: boolean;
}

export const information: Text[] = [
  {
    id: 0,
    text:
      'Most Projects, people and ideas that influence you on a daily basis to work on Ethereum are in it.',
  },
  {
    id: 1,
    text:
      'The complete artwork is made of hundreds of small paths, all independent from the others and all having their own constraints, objectives, turning points and achievements.',
  },
  {
    id: 2,
    text:
      'Taken individually, they are nothing more than themselves; but if you take a step back, they are part of a bigger whole that exceeds the sum of them.',
  },
];

export const footer: Text[] = [
  {
    id: 0,
    text: "Let's coordinate on #fragments to assemble it!",
    strong: true,
  },
  {
    id: 1,
    text: 'Claim your associated NFT!',
    strong: true,
  },
  {
    id: 2,
    text:
      'This fragment belongs to the token owner recorded on contract 0x5c3d2055c44c840b9b433f1b5d117fa90cdfce30 on the Ethereum network.',
    strong: false,
  },
  {
    id: 3,
    text: 'Follow the link embedded on the QR code.',
    strong: false,
  },
];
