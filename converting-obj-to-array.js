// This function converts an object into an array, where each element represents a key-value pair in the form of an array.
function toArray(obj) {
  return Object.entries(obj);
}
toArray({ shrimp: 15, tots: 12 });
// should return -> [["shrimp", 15], ["tots", 12]]
