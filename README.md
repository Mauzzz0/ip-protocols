# IPv4 protocols

List of all IPv4 encapsulation protocols. Provides a general list of all protocol, and searching methods by `name`
/`decimal number`/`hex digit`, and also you are able to direct import protocol which you need. See examples below...

###### [NPM](https://www.npmjs.com/package/ip-protocols)

###### [Github](https://github.com/Mauzzz0/ip-protocols)

###### [Link to wikipedia](https://en.wikipedia.org/wiki/List_of_IP_protocol_numbers)

### Model

Every `Protocol` instance meet this model:

```typescript
{
  Hex: string;
  Number: number;
  Name: string;
  Description: string;
}
```

### Using

##### Specific protocols

```typescript
import { ICMP, UDP } from 'ip-protocols';

const myProtocol = 17;
const isMyProtocolICMP = ICMP.Number === myProtocol; // false
const isMyProtocolUDP = UDP.Number === myProtocol; // true

console.log(ICMP);

/* Output:
{
  Hex: '0x01',
  Number: 1,
  Name: 'ICMP',
  Description: 'Internet Control Message Protocol'
}
*/
```

##### Searching methods

##### `findByNumber` - incorrect number throw `RangeError`

```typescript
import { findByNumber } from 'ip-protocols';

const protocol = findByNumber(6);

console.log(protocol);

/* Output:
{
  Hex: '0x06',
  Number: 6,
  Name: 'TCP',
  Description: 'Transmission Control Protocol'
}
*/
```

##### `findByName` - is case-insensitive

```typescript
import { findByName } from 'ip-protocols';

const protocol = findByName('uDp');

console.log(protocol);

/* Output:
{
  Hex: '0x11',
  Number: 17,
  Name: 'UDP',
  Description: 'User Datagram Protocol'
}
*/
```

##### `findByHex`

```typescript
import { findByHex } from '0x3C';

const protocol = findByHex(6);

console.log(protocol);

/* Output:
{
  Hex: '0x3C',
  Number: 60,
  Name: 'IPv6-Opts',
  Description: 'Destination Options for IPv6'
}
*/
```

##### General array

```typescript
import { protocolList } from 'ip-protocols';

const pr1 = protocolList[120];
const pr2 = protocolList[44];
const pr3 = protocolList[78];

console.log(pr1);
console.log(pr2);
console.log(pr3);

/* Output:
{
  Hex: '0x78',
  Number: 120,
  Name: 'UTI',
  Description: 'Universal Transport Interface Protocol'
}
{
  Hex: '0x2C',
  Number: 44,
  Name: 'IPv6-Frag',
  Description: 'Fragment Header for IPv6'
}
{
  Hex: '0x4E',
  Number: 78,
  Name: 'WB-MON',
  Description: 'WIDEBAND Monitoring'
}
*/
```
