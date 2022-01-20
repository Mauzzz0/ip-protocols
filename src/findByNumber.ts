import { protocolList } from './protocolList';
import { Protocol } from './Protocol';

/**
 *
 * @param number Number of protocol (Between 0 and 255)
 * @exception RangeError otherwise
 */
export const findByNumber = (number: number): Protocol => {
  if (0 <= number && number <= 143) {
    return protocolList[number];
  }

  if (144 <= number && number <= 252) {
    return {
      Hex: '0x90',
      Number: number,
      Name: 'Unassigned',
      Description: 'Unassigned',
    };
  }

  if (253 <= number && number <= 255) {
    return protocolList[number - 108];
  }

  throw RangeError('Number of protocol must between 0 and 255');
};
