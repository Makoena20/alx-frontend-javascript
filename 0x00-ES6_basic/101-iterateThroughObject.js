export default function iterateThroughObject(reportWithIterator) {
  // Convert the iterator to an array and join with ' | '
  return [...reportWithIterator].join(' | ');
}

