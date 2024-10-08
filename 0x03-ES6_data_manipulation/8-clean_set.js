export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  let result = '';

  set.forEach((value) => {
    if (value.startsWith(startString)) {
      result += value.slice(startString.length) + '-';
    }
  });

  // Remove the trailing hyphen
  return result.slice(0, -1);
}

