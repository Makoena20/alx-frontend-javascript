// Define and export function taskFirst using const
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

// Define and export function getLast
export function getLast() {
  return ' is okay';
}

// Define and export function taskNext using let
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}

