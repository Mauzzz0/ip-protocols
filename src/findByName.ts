import { protocolList } from './protocolList';
import { Protocol } from './Protocol';

/**
 *
 * @param name Name of protocol (Keyword like TCP/UDP/ICMP)
 */
export const findByName = (name: string): Protocol | undefined => {
  for (const protocol of protocolList) {
    if (protocol.Name === name) {
      return protocol;
    }
  }
};
