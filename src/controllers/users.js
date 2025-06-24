import { v4 as uuid } from "uuid";

const users = [];

export function getAllUsers(req, res) {
  const { name } = req.query;

  if (!users.length) {
    return res
      .status(404)
      .json({ success: false, message: "Nenhum usuário encontrado!" });
  }

  if (name?.length) {
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(name.toLowerCase())
    );

    if (!filteredUsers.length) {
      return res
        .status(404)
        .json({ success: false, message: "Nenhum usuário encontrado!" });
    }

    return res.status(200).json(filteredUsers);
  }

  return res.status(200).json(users);
}

export function userDetails(req, res) {
  const currentUser = users.find((user) => user.id === req.params.id);

  if (!currentUser) {
    return res
      .status(404)
      .json({ success: false, message: "Usuário não encontrado!" });
  }

  return res.status(200).json(currentUser);
}

export function createUser(req, res) {
  const { name, age } = req.body;

  if (!name || !age) {
    return res
      .status(400)
      .json({ success: false, message: "Preencha todos os campos!" });
  }

  if (users.some((user) => user.name.toLowerCase() === name.toLowerCase())) {
    return res
      .status(409)
      .json({ success: false, message: "Usuário já cadastrado!" });
  }

  const user = {
    id: uuid(),
    name,
    age,
  };

  users.push(user);

  return res
    .status(200)
    .json({ success: true, message: "Usuário criado com sucesso!" });
}

export function updateUser(req, res) {
  const index = users.findIndex((user) => user.id === req.params.id);
  const { name, age } = req.body;

  if (index === -1) {
    return res
      .status(404)
      .json({ success: false, message: "Usuário não encontrado!" });
  }

  if (!name || !age) {
    return res
      .status(400)
      .json({ success: false, message: "Preencha todos os campos!" });
  }

  const updatedUser = {
    id: users[index].id,
    name,
    age,
  };

  users[index] = updatedUser;

  return res
    .status(201)
    .json({ success: true, message: "Usuário editado com sucesso!" });
}

export function deleteUser(req, res) {
  const index = users.findIndex((user) => user.id === req.params.id);

  if (index === -1) {
    return res
      .status(404)
      .json({ success: false, message: "Usuário não encontrado!" });
  }

  users.splice(index, 1);

  return res
    .status(200)
    .json({ success: true, message: "Usuário deletado com sucesso!" });
}
