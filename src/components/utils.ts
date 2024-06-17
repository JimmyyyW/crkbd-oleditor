const hexLookup = {
  '0000': '0',
  '0001': '1',
  '0010': '2',
  '0011': '3',
  '0100': '4',
  '0101': '5',
  '0110': '6',
  '0111': '7',
  '1000': '8',
  '1001': '9',
  '1010': 'A',
  '1011': 'B',
  '1100': 'C',
  '1101': 'D',
  '1110': 'E',
  '1111': 'F',
};

const binLookup = {
  '0': '0000',
  '1': '0001',
  '2': '0010',
  '3': '0011',
  '4': '0100',
  '5': '0101',
  '6': '0110',
  '7': '0111',
  '8': '1000',
  '9': '1001',
  'A': '1010',
  'B': '1011',
  'C': '1100',
  'D': '1101',
  'E': '1110',
  'F': '1111',
};

export function hexToBin(s: React.SetStateAction<string>) {
  let ret = '';
  const tokens = s.split(',')
  for (const token of tokens) {
    const a = token.charAt(2);
    const b = token.charAt(3);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    ret += binLookup[a];

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    ret += binLookup[b];
  }
  return ret;
}

export function binToHex(s: string): string[] {
  const arr: string[] = [];
  let splitEnd = 8;
  let i = 0;

  while (i < s.length) {
    const res = parseHexChar(s.substring(i, splitEnd))
    arr.push(res);
    i += 8;
    splitEnd += 8;
  }
  return arr;
}

function parseHexChar(s: string): string {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return `0x${hexLookup[s.substring(0, 4)]}${hexLookup[s.substring(4, 8)]}`;
}

