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
  [5, 7],
  [6, 8],
  [7, 8],
  [8, 9],
];

// Each element in the 'friendships' array is now an array representing an edge.
// For example, [0, 1] represents an edge between node 0 and node 1.

for (const user of users) {
  user["friends"] = [];
}

for (const [i, j] of friendships) {
  users[i]["friends"].push(users[j]);
  users[j]["friends"].push(users[i]);
}

// users.forEach((user) => {
//   console.log(user.friends);
// });

const numberOfFriends = (user) => {
  return user["friends"].length;
};

const totalConnection = users.reduce(
  (total, user) => total + numberOfFriends(user),
  0
);

const c = users.map((user) => {
  return numberOfFriends(user);
});

const addArray = (a) => {
  let total = 0;
  for (const i of a) {
    total = i + total;
  }

  return total;
};

const a = [1, 2, 3];

console.log(totalConnection);

const num_users = users.length;
const avg_connections = totalConnection / num_users;

const num_friends_by_id = users.map((user) => [
  user["id"],
  numberOfFriends(user),
]);

num_friends_by_id.sort((a, b) => a[1] - b[1]);

function friendsOfFriendIdsBad(user) {
  // "foaf" is short for "friend of a friend"
  return user.friends.flatMap((friend) =>
    friend.friends.map((foaf) => foaf.id)
  );
}

const result = friendsOfFriendIdsBad(users[3]);

console.log(result);

// console.log(users[4].friends.map((friend) => friend.id));
// // console.log(users[0].friends.map((friend) => friend.id));
// // console.log(users[0].friends.map((friend) => friend.id));
// console.log(users[3].friends.map((friend) => friend.id));
// console.log(users[5].friends.map((friend) => friend.id));
