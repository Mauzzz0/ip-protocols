import { protocolList } from './protocolList';
import { Protocol } from './Protocol';

/**
 *
 * @param hex Hex of protocol (Value like 0x00/0x1E/0x8F)
 */
export const findByHex = (hex: string): Protocol => {
  for (const protocol of protocolList) {
    if (protocol.Hex === hex) {
      return protocol;
    }
  }

  return {
    Number: -1,
    Name: '',
    Description: '',
    Hex: '',
  };
};
