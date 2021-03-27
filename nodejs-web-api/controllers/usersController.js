let users = [
  {
    id: 1,
    firstName: "Mesut",
    lastName: "zincir",
    age: 40,
  },
  {
    id: 2,
    firstName: "Mustafa",
    lastName: "zincir",
    age: 11,
  },
];

export const getUsers = (request, response) => {
  response.send(users);
};

export const getUser = (req, res) => {
  //const id = req.params.id;
  const { id } = req.params;
  const user = users.filter((u) => u.id == id);
  res.send(user);
};

export const creatUser = (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.send(users);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  const user = users.filter((u) => u.id == id);
  users = users.filter((u) => u.id != id);
  res.send(user);
};

export const patchUser = (req, res) => {
  const { firstName, lastName, age } = req.body;
  const { id } = req.params;
  const user = users.find((u) => u.id == id);
  if (firstName) {
    user.firstName = firstName;
  }
  if (lastName) {
    user.lastName = lastName;
  }
  if (age) {
    user.age = age;
  }
  res.send(users);
};
