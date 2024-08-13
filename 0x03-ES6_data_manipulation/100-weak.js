// 100-weak.js

// Export a const instance of WeakMap
export const weakMap = new WeakMap();

// Export the queryAPI function
export function queryAPI(endpoint) {
  // Get the current count of queries for the endpoint
  const count = weakMap.get(endpoint) || 0;

  // Update the count in the WeakMap
  weakMap.set(endpoint, count + 1);

  // If the number of queries is >= 5, throw an error
  if (count + 1 >= 5) {
    throw new Error('Endpoint load is high');
  }
}

