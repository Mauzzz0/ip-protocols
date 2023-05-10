import { protocolList } from './protocolList';
import { Protocol } from './Protocol';

/**
 *
 * @param name Name of protocol (Keyword like TCP/UDP/ICMP)
 */
export const findByName = (name: string): Protocol => {
  const loweredName = name.toLowerCase();

  for (const protocol of protocolList) {
    if (protocol.Name.toLowerCase() === loweredName) {
      return protocol;
    }
  }

  return {
    Number: 0,
    Name: 'Unknown',
    Description: '',
    Hex: '',
  };
};
