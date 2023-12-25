const users = [
  { id: 0, name: "Hero" },
  { id: 1, name: "Dunn" },
  { id: 2, name: "Sue" },
  { id: 3, name: "Chi" },
  { id: 4, name: "Thor" },
  { id: 5, name: "Clive" },
  { id: 6, name: "Hicks" },
  { id: 7, name: "Devin" },
  { id: 8, name: "Kate" },
  { id: 9, name: "Klein" },
];

const friendships = [
  [0, 1],
  [0, 2],
  [1, 2],
  [1, 3],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 8],
  [8, 9],
];

// Each element in the 'friendships' array is now an array representing an edge.
// For example, [0, 1] represents an edge between node 0 and node 1.

for (const user of users) {
  user["friends"] = [];
}
