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
export const IGMP: Protocol = {
  Hex: '0x02',
  Number: 2,
  Name: 'IGMP',
  Description: 'Internet Group Management Protocol',
};
export const GGP: Protocol = {
  Hex: '0x03',
  Number: 3,
  Name: 'GGP',
  Description: 'Gateway-to-Gateway Protocol',
};
export const IPinIP: Protocol = {
  Hex: '0x04',
  Number: 4,
  Name: 'IP-in-IP',
  Description: 'IP in IP (encapsulation)',
};
export const ST: Protocol = {
  Hex: '0x05',
  Number: 5,
  Name: 'ST',
  Description: 'Internet Stream Protocol',
};
export const TCP: Protocol = {
  Hex: '0x06',
  Number: 6,
  Name: 'TCP',
  Description: 'Transmission Control Protocol',
};
export const CBT: Protocol = {
  Hex: '0x07',
  Number: 7,
  Name: 'CBT',
  Description: 'Core-based trees',
};
export const EGP: Protocol = {
  Hex: '0x08',
  Number: 8,
  Name: 'EGP',
  Description: 'Exterior Gateway Protocol',
};
export const IGP: Protocol = {
  Hex: '0x09',
  Number: 9,
  Name: 'IGP',
  Description: "Interior Gateway Protocol (any private interior gateway, for example Cisco's IGRP)",
};
export const BBNRCCMON: Protocol = {
  Hex: '0x0A',
  Number: 10,
  Name: 'BBN-RCC-MON',
  Description: 'BBN RCC Monitoring',
};
export const NVPII: Protocol = {
  Hex: '0x0B',
  Number: 11,
  Name: 'NVP-II',
  Description: 'Network Voice Protocol',
};
export const PUP: Protocol = { Hex: '0x0C', Number: 12, Name: 'PUP', Description: 'Xerox PUP' };
export const ARGUS: Protocol = { Hex: '0x0D', Number: 13, Name: 'ARGUS', Description: 'ARGUS' };
export const EMCON: Protocol = { Hex: '0x0E', Number: 14, Name: 'EMCON', Description: 'EMCON' };
export const XNET: Protocol = {
  Hex: '0x0F',
  Number: 15,
  Name: 'XNET',
  Description: 'Cross Net Debugger',
};
export const CHAOS: Protocol = { Hex: '0x10', Number: 16, Name: 'CHAOS', Description: 'Chaos' };
export const UDP: Protocol = {
  Hex: '0x11',
  Number: 17,
  Name: 'UDP',
  Description: 'User Datagram Protocol',
};
export const MUX: Protocol = { Hex: '0x12', Number: 18, Name: 'MUX', Description: 'Multiplexing' };
export const DCNMEAS: Protocol = {
  Hex: '0x13',
  Number: 19,
  Name: 'DCN-MEAS',
  Description: 'DCN Measurement Subsystems',
};
export const HMP: Protocol = {
  Hex: '0x14',
  Number: 20,
  Name: 'HMP',
  Description: 'Host Monitoring Protocol',
};
export const PRM: Protocol = {
  Hex: '0x15',
  Number: 21,
  Name: 'PRM',
  Description: 'Packet Radio Measurement',
};
export const XNSIDP: Protocol = {
  Hex: '0x16',
  Number: 22,
  Name: 'XNS-IDP',
  Description: 'XEROX NS IDP',
};
export const TRUNK1: Protocol = { Hex: '0x17', Number: 23, Name: 'TRUNK-1', Description: 'Trunk-1' };
export const TRUNK2: Protocol = { Hex: '0x18', Number: 24, Name: 'TRUNK-2', Description: 'Trunk-2' };
export const LEAF1: Protocol = { Hex: '0x19', Number: 25, Name: 'LEAF-1', Description: 'Leaf-1' };
export const LEAF2: Protocol = { Hex: '0x1A', Number: 26, Name: 'LEAF-2', Description: 'Leaf-2' };
export const RDP: Protocol = {
  Hex: '0x1B',
  Number: 27,
  Name: 'RDP',
  Description: 'Reliable Data Protocol',
};
export const IRTP: Protocol = {
  Hex: '0x1C',
  Number: 28,
  Name: 'IRTP',
  Description: 'Internet Reliable Transaction Protocol',
};
export const ISOTP4: Protocol = {
  Hex: '0x1D',
  Number: 29,
  Name: 'ISO-TP4',
  Description: 'ISO Transport Protocol Class 4',
};
export const NETBLT: Protocol = {
  Hex: '0x1E',
  Number: 30,
  Name: 'NETBLT',
  Description: 'Bulk Data Transfer Protocol',
};
export const MFENSP: Protocol = {
  Hex: '0x1F',
  Number: 31,
  Name: 'MFE-NSP',
  Description: 'MFE Network Services Protocol',
};
export const MERITINP: Protocol = {
  Hex: '0x20',
  Number: 32,
  Name: 'MERIT-INP',
  Description: 'MERIT Internodal Protocol',
};
export const DCCP: Protocol = {
  Hex: '0x21',
  Number: 33,
  Name: 'DCCP',
  Description: 'Datagram Congestion Control Protocol',
};
export const ThirdPC: Protocol = {
  Hex: '0x22',
  Number: 34,
  Name: '3PC',
  Description: 'Third Party Connect Protocol',
};
export const IDPR: Protocol = {
  Hex: '0x23',
  Number: 35,
  Name: 'IDPR',
  Description: 'Inter-Domain Policy Routing Protocol',
};
export const XTP: Protocol = {
  Hex: '0x24',
  Number: 36,
  Name: 'XTP',
  Description: 'Xpress Transport Protocol',
};
export const DDP: Protocol = {
  Hex: '0x25',
  Number: 37,
  Name: 'DDP',
  Description: 'Datagram Delivery Protocol',
};
export const IDPRCMTP: Protocol = {
  Hex: '0x26',
  Number: 38,
  Name: 'IDPR-CMTP',
  Description: 'IDPR Control Message Transport Protocol',
};
export const TP: Protocol = {
  Hex: '0x27',
  Number: 39,
  Name: 'TP++',
  Description: 'TP++ Transport Protocol',
};
export const IL: Protocol = {
  Hex: '0x28',
  Number: 40,
  Name: 'IL',
  Description: 'IL Transport Protocol',
};
export const IPv6: Protocol = {
  Hex: '0x29',
  Number: 41,
  Name: 'IPv6',
  Description: 'IPv6 Encapsulation',
};
export const SDRP: Protocol = {
  Hex: '0x2A',
  Number: 42,
  Name: 'SDRP',
  Description: 'Source Demand Routing Protocol',
};
export const IPv6Route: Protocol = {
  Hex: '0x2B',
  Number: 43,
  Name: 'IPv6-Route',
  Description: 'Routing Header for IPv6',
};
export const IPv6Frag: Protocol = {
  Hex: '0x2C',
  Number: 44,
  Name: 'IPv6-Frag',
  Description: 'Fragment Header for IPv6',
};
export const IDRP: Protocol = {
  Hex: '0x2D',
  Number: 45,
  Name: 'IDRP',
  Description: 'Inter-Domain Routing Protocol',
};
export const RSVP: Protocol = {
  Hex: '0x2E',
  Number: 46,
  Name: 'RSVP',
  Description: 'Resource Reservation Protocol',
};
export const GRE: Protocol = {
  Hex: '0x2F',
  Number: 47,
  Name: 'GRE',
  Description: 'Generic Routing Encapsulation',
};
export const DSR: Protocol = {
  Hex: '0x30',
  Number: 48,
  Name: 'DSR',
  Description: 'Dynamic Source Routing Protocol',
};
export const BNA: Protocol = {
  Hex: '0x31',
  Number: 49,
  Name: 'BNA',
  Description: 'Burroughs Network Architecture',
};
export const ESP: Protocol = {
  Hex: '0x32',
  Number: 50,
  Name: 'ESP',
  Description: 'Encapsulating Security Payload',
};
export const AH: Protocol = {
  Hex: '0x33',
  Number: 51,
  Name: 'AH',
  Description: 'Authentication Header',
};
export const INLSP: Protocol = {
  Hex: '0x34',
  Number: 52,
  Name: 'I-NLSP',
  Description: 'Integrated Net Layer Security Protocol',
};
export const SwIPe: Protocol = { Hex: '0x35', Number: 53, Name: 'SwIPe', Description: 'SwIPe' };
export const NARP: Protocol = {
  Hex: '0x36',
  Number: 54,
  Name: 'NARP',
  Description: 'NBMA Address Resolution Protocol',
};
export const MOBILE: Protocol = {
  Hex: '0x37',
  Number: 55,
  Name: 'MOBILE',
  Description: 'IP Mobility (Min Encap)',
};
export const TLSP: Protocol = {
  Hex: '0x38',
  Number: 56,
  Name: 'TLSP',
  Description: 'Transport Layer Security Protocol (using Kryptonet key management)',
};
export const SKIP: Protocol = {
  Hex: '0x39',
  Number: 57,
  Name: 'SKIP',
  Description: 'Simple Key-Management for Internet Protocol',
};
export const IPv6ICMP: Protocol = {
  Hex: '0x3A',
  Number: 58,
  Name: 'IPv6-ICMP',
  Description: 'ICMP for IPv6',
};
export const IPv6NoNxt: Protocol = {
  Hex: '0x3B',
  Number: 59,
  Name: 'IPv6-NoNxt',
  Description: 'No Next Header for IPv6',
};
export const IPv6Opts: Protocol = {
  Hex: '0x3C',
  Number: 60,
  Name: 'IPv6-Opts',
  Description: 'Destination Options for IPv6',
};
export const HostInternalProtocol: Protocol = {
  Hex: '0x3D',
  Number: 61,
  Name: '',
  Description: 'Any host internal protocol',
};
export const CFTP: Protocol = { Hex: '0x3E', Number: 62, Name: 'CFTP', Description: 'CFTP' };
export const LocalNetwork: Protocol = { Hex: '0x3F', Number: 63, Name: '', Description: 'Any local network' };
export const SATEXPAK: Protocol = {
  Hex: '0x40',
  Number: 64,
  Name: 'SAT-EXPAK',
  Description: 'SATNET and Backroom EXPAK',
};
export const KRYPTOLAN: Protocol = {
  Hex: '0x41',
  Number: 65,
  Name: 'KRYPTOLAN',
  Description: 'Kryptolan',
};
export const RVD: Protocol = {
  Hex: '0x42',
  Number: 66,
  Name: 'RVD',
  Description: 'MIT Remote Virtual Disk Protocol',
};
export const IPPC: Protocol = {
  Hex: '0x43',
  Number: 67,
  Name: 'IPPC',
  Description: 'Internet Pluribus Packet Core',
};
export const DistributedFileSystem: Protocol = {
  Hex: '0x44',
  Number: 68,
  Name: '',
  Description: 'Any distributed file system',
};
export const SATMON: Protocol = {
  Hex: '0x45',
  Number: 69,
  Name: 'SAT-MON',
  Description: 'SATNET Monitoring',
};
export const VISA: Protocol = { Hex: '0x46', Number: 70, Name: 'VISA', Description: 'VISA Protocol' };
export const IPCU: Protocol = {
  Hex: '0x47',
  Number: 71,
  Name: 'IPCU',
  Description: 'Internet Packet Core Utility',
};
export const CPNX: Protocol = {
  Hex: '0x48',
  Number: 72,
  Name: 'CPNX',
  Description: 'Computer Protocol Network Executive',
};
export const CPHB: Protocol = {
  Hex: '0x49',
  Number: 73,
  Name: 'CPHB',
  Description: 'Computer Protocol Heart Beat',
};
export const WSN: Protocol = {
  Hex: '0x4A',
  Number: 74,
  Name: 'WSN',
  Description: 'Wang Span Network',
};
export const PVP: Protocol = {
  Hex: '0x4B',
  Number: 75,
  Name: 'PVP',
  Description: 'Packet Video Protocol',
};
export const BRSATMON: Protocol = {
  Hex: '0x4C',
  Number: 76,
  Name: 'BR-SAT-MON',
  Description: 'Backroom SATNET Monitoring',
};
export const SUNND: Protocol = {
  Hex: '0x4D',
  Number: 77,
  Name: 'SUN-ND',
  Description: 'SUN ND PROTOCOL-Temporary',
};
export const WBMON: Protocol = {
  Hex: '0x4E',
  Number: 78,
  Name: 'WB-MON',
  Description: 'WIDEBAND Monitoring',
};
export const WBEXPAK: Protocol = {
  Hex: '0x4F',
  Number: 79,
  Name: 'WB-EXPAK',
  Description: 'WIDEBAND EXPAK',
};
export const ISOIP: Protocol = {
  Hex: '0x50',
  Number: 80,
  Name: 'ISO-IP',
  Description: 'International Organization for Standardization Internet Protocol',
};
export const VMTP: Protocol = {
  Hex: '0x51',
  Number: 81,
  Name: 'VMTP',
  Description: 'Versatile Message Transaction Protocol',
};
export const SECUREVMTP: Protocol = {
  Hex: '0x52',
  Number: 82,
  Name: 'SECURE-VMTP',
  Description: 'Secure Versatile Message Transaction Protocol',
};
export const VINES: Protocol = { Hex: '0x53', Number: 83, Name: 'VINES', Description: 'VINES' };
export const TTP: Protocol = { Hex: '0x54', Number: 84, Name: 'TTP', Description: 'TTP' };
export const NSFNETIGP: Protocol = {
  Hex: '0x55',
  Number: 85,
  Name: 'NSFNET-IGP',
  Description: 'NSFNET-IGP',
};
export const DGP: Protocol = {
  Hex: '0x56',
  Number: 86,
  Name: 'DGP',
  Description: 'Dissimilar Gateway Protocol',
};
export const TCF: Protocol = { Hex: '0x57', Number: 87, Name: 'TCF', Description: 'TCF' };
export const EIGRP: Protocol = { Hex: '0x58', Number: 88, Name: 'EIGRP', Description: 'EIGRP' };
export const OSPF: Protocol = {
  Hex: '0x59',
  Number: 89,
  Name: 'OSPF',
  Description: 'Open Shortest Path First',
};
export const SpriteRPC: Protocol = {
  Hex: '0x5A',
  Number: 90,
  Name: 'Sprite-RPC',
  Description: 'Sprite RPC Protocol',
};
export const LARP: Protocol = {
  Hex: '0x5B',
  Number: 91,
  Name: 'LARP',
  Description: 'Locus Address Resolution Protocol',
};
export const MTP: Protocol = {
  Hex: '0x5C',
  Number: 92,
  Name: 'MTP',
  Description: 'Multicast Transport Protocol',
};
export const AX25: Protocol = { Hex: '0x5D', Number: 93, Name: 'AX.25', Description: 'AX.25' };
export const OS: Protocol = {
  Hex: '0x5E',
  Number: 94,
  Name: 'OS',
  Description: 'KA9Q NOS compatible IP over IP tunneling',
};
export const MICP: Protocol = {
  Hex: '0x5F',
  Number: 95,
  Name: 'MICP',
  Description: 'Mobile Internetworking Control Protocol',
};
export const SCCSP: Protocol = {
  Hex: '0x60',
  Number: 96,
  Name: 'SCC-SP',
  Description: 'Semaphore Communications Sec. Pro',
};
export const ETHERIP: Protocol = {
  Hex: '0x61',
  Number: 97,
  Name: 'ETHERIP',
  Description: 'Ethernet-within-IP Encapsulation',
};
export const ENCAP: Protocol = {
  Hex: '0x62',
  Number: 98,
  Name: 'ENCAP',
  Description: 'Encapsulation Header',
};
export const PrivateEncryptionScheme: Protocol = {
  Hex: '0x63',
  Number: 99,
  Name: '',
  Description: 'Any private encryption scheme',
};
export const GMTP: Protocol = { Hex: '0x64', Number: 100, Name: 'GMTP', Description: 'GMTP' };
export const IFMP: Protocol = {
  Hex: '0x65',
  Number: 101,
  Name: 'IFMP',
  Description: 'Ipsilon Flow Management Protocol',
};
export const PNNI: Protocol = { Hex: '0x66', Number: 102, Name: 'PNNI', Description: 'PNNI over IP' };
export const PIM: Protocol = {
  Hex: '0x67',
  Number: 103,
  Name: 'PIM',
  Description: 'Protocol Independent Multicast',
};
export const ARIS: Protocol = {
  Hex: '0x68',
  Number: 104,
  Name: 'ARIS',
  Description: "IBM's ARIS (Aggregate Route IP Switching) Protocol",
};
export const SCPS: Protocol = {
  Hex: '0x69',
  Number: 105,
  Name: 'SCPS',
  Description: 'SCPS (Space Communications Protocol Standards)',
};
export const QNX: Protocol = { Hex: '0x6A', Number: 106, Name: 'QNX', Description: 'QNX' };
export const ActiveNetworks: Protocol = {
  Hex: '0x6B',
  Number: 107,
  Name: 'A/N',
  Description: 'Active Networks',
};
export const IPComp: Protocol = {
  Hex: '0x6C',
  Number: 108,
  Name: 'IPComp',
  Description: 'IP Payload Compression Protocol',
};
export const SNP: Protocol = {
  Hex: '0x6D',
  Number: 109,
  Name: 'SNP',
  Description: 'Sitara Networks Protocol',
};
export const CompaqPeer: Protocol = {
  Hex: '0x6E',
  Number: 110,
  Name: 'Compaq-Peer',
  Description: 'Compaq Peer Protocol',
};
export const IPXinIP: Protocol = {
  Hex: '0x6F',
  Number: 111,
  Name: 'IPX-in-IP',
  Description: 'IPX in IP',
};
export const VRRP: Protocol = {
  Hex: '0x70',
  Number: 112,
  Name: 'VRRP',
  Description: 'Virtual Router Redundancy Protocol, Common Address Redundancy Protocol (not IANA assigned)',
};
export const PGM: Protocol = {
  Hex: '0x71',
  Number: 113,
  Name: 'PGM',
  Description: 'PGM Reliable Transport Protocol',
};
export const ZeroHopProtocol: Protocol = {
  Hex: '0x72',
  Number: 114,
  Name: '',
  Description: 'Any 0-hop protocol',
};
export const L2TP: Protocol = {
  Hex: '0x73',
  Number: 115,
  Name: 'L2TP',
  Description: 'Layer Two Tunneling Protocol Version 3',
};
export const DDX: Protocol = {
  Hex: '0x74',
  Number: 116,
  Name: 'DDX',
  Description: 'D-II Data Exchange (DDX)',
};
export const IATP: Protocol = {
  Hex: '0x75',
  Number: 117,
  Name: 'IATP',
  Description: 'Interactive Agent Transfer Protocol',
};
export const STP: Protocol = {
  Hex: '0x76',
  Number: 118,
  Name: 'STP',
  Description: 'Schedule Transfer Protocol',
};
export const SRP: Protocol = {
  Hex: '0x77',
  Number: 119,
  Name: 'SRP',
  Description: 'SpectraLink Radio Protocol',
};
export const UTI: Protocol = {
  Hex: '0x78',
  Number: 120,
  Name: 'UTI',
  Description: 'Universal Transport Interface Protocol',
};
export const SMP: Protocol = {
  Hex: '0x79',
  Number: 121,
  Name: 'SMP',
  Description: 'Simple Message Protocol',
};
export const SM: Protocol = {
  Hex: '0x7A',
  Number: 122,
  Name: 'SM',
  Description: 'Simple Multicast Protocol',
};
export const PTP: Protocol = {
  Hex: '0x7B',
  Number: 123,
  Name: 'PTP',
  Description: 'Performance Transparency Protocol',
};
export const ISISoverIPv4: Protocol = {
  Hex: '0x7C',
  Number: 124,
  Name: 'IS-IS over IPv4',
  Description: 'Intermediate System to Intermediate System (IS-IS) Protocol over IPv4',
};
export const FIRE: Protocol = {
  Hex: '0x7D',
  Number: 125,
  Name: 'FIRE',
  Description: 'Flexible Intra-AS Routing Environment',
};
export const CRTP: Protocol = {
  Hex: '0x7E',
  Number: 126,
  Name: 'CRTP',
  Description: 'Combat Radio Transport Protocol',
};
export const CRUDP: Protocol = {
  Hex: '0x7F',
  Number: 127,
  Name: 'CRUDP',
  Description: 'Combat Radio User Datagram',
};
export const SSCOPMCE: Protocol = {
  Hex: '0x80',
  Number: 128,
  Name: 'SSCOPMCE',
  Description: 'Service-Specific Connection-Oriented Protocol in a Multilink and Connectionless Environment',
};
export const IPLT: Protocol = { Hex: '0x81', Number: 129, Name: 'IPLT', Description: '' };
export const SPS: Protocol = {
  Hex: '0x82',
  Number: 130,
  Name: 'SPS',
  Description: 'Secure Packet Shield',
};
export const PIPE: Protocol = {
  Hex: '0x83',
  Number: 131,
  Name: 'PIPE',
  Description: 'Private IP Encapsulation within IP',
};
export const SCTP: Protocol = {
  Hex: '0x84',
  Number: 132,
  Name: 'SCTP',
  Description: 'Stream Control Transmission Protocol',
};
export const FC: Protocol = { Hex: '0x85', Number: 133, Name: 'FC', Description: 'Fibre Channel' };
export const RSVPE2EIGNORE: Protocol = {
  Hex: '0x86',
  Number: 134,
  Name: 'RSVP-E2E-IGNORE',
  Description: 'Reservation Protocol (RSVP) End-to-End Ignore',
};
export const MobilityHeader: Protocol = {
  Hex: '0x87',
  Number: 135,
  Name: 'Mobility Header',
  Description: 'Mobility Extension Header for IPv6',
};
export const UDPLite: Protocol = {
  Hex: '0x88',
  Number: 136,
  Name: 'UDPLite',
  Description: 'Lightweight User Datagram Protocol',
};
export const MPLSinIP: Protocol = {
  Hex: '0x89',
  Number: 137,
  Name: 'MPLS-in-IP',
  Description: 'Multiprotocol Label Switching Encapsulated in IP',
};
export const manet: Protocol = {
  Hex: '0x8A',
  Number: 138,
  Name: 'manet',
  Description: 'MANET Protocols',
};
export const HIP: Protocol = {
  Hex: '0x8B',
  Number: 139,
  Name: 'HIP',
  Description: 'Host Identity Protocol',
};
export const Shim6: Protocol = {
  Hex: '0x8C',
  Number: 140,
  Name: 'Shim6',
  Description: 'Site Multihoming by IPv6 Intermediation',
};
export const WESP: Protocol = {
  Hex: '0x8D',
  Number: 141,
  Name: 'WESP',
  Description: 'Wrapped Encapsulating Security Payload',
};
export const ROHC: Protocol = {
  Hex: '0x8E',
  Number: 142,
  Name: 'ROHC',
  Description: 'Robust Header Compression',
};
export const Ethernet: Protocol = {
  Hex: '0x8F',
  Number: 143,
  Name: 'Ethernet',
  Description: 'IPv6 Segment Routing (TEMPORARY - registered 2020-01-31, expired 2021-01-31)',
};
export const Experimental253: Protocol = {
  Hex: '0xFD',
  Number: 253,
  Name: 'Use for experimentation and testing',
  Description: 'RFC 3692',
};
export const Experimental254: Protocol = {
  Hex: '0xFE',
  Number: 254,
  Name: 'Use for experimentation and testing',
  Description: 'RFC 3692',
};
export const Reserved: Protocol = { Hex: '0xFF', Number: 255, Name: 'Reserved', Description: 'Reserved' };
