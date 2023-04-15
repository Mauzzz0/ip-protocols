import { protocolList } from './protocolList';
import { Protocol } from './Protocol';

/**
 *
 * @param name Name of protocol (Keyword like TCP/UDP/ICMP)
 */
export const findByName = (name: string): Protocol => {
  for (const protocol of protocolList) {
    if (protocol.Name.toLowerCase() === name.toLowerCase()) {
      return protocol;
    }
  }

  return {
    Number: -1,
    Name: 'Unknown protocol',
    Description: '',
    Hex: '',
  };
};
