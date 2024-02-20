import charMap from './charMap';

export default function normalize(str: string) {
  const charCodes = Object.keys(charMap).map((code) => {
    const numCode = Number.parseInt(code, 10);

    return String.fromCharCode(numCode);
  });

  const regex = new RegExp(`[${charCodes.join(' ')}]`, 'g');

  return str.replace(regex, (charToReplace) => charMap[charToReplace.charCodeAt(0)] || charToReplace);
}
