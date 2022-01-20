import { Protocol } from './Protocol';

export const HOPOPT: Protocol = {
  Hex: '0x00',
  Number: 0,
  Name: 'HOPOPT',
  Description: 'IPv6 Hop-by-Hop Option',
};

export const ICMP: Protocol = {
  Hex: '0x01',
  Number: 1,
  Name: 'ICMP',
  Description: 'Internet Control Message Protocol',
};

export const TCP: Protocol = {
  Hex: '0x06',
  Number: 6,
  Name: 'TCP',
  Description: 'Transmission Control Protocol',
};

export const UDP: Protocol = {
  Hex: '0x11',
  Number: 17,
  Name: 'UDP',
  Description: 'User Datagram Protocol',
};
