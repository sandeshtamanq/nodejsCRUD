const Userdb = require("../model/user.model");

// create and save new users
const addUser = (req, res) => {
  // validate request
  console.log(req.body);
  if (!Object.keys(req.body).length)
    return res
      .status(400)
      .json({ status: 400, message: "Content cannot be left empty" });

  const newUser = new Userdb({
    ...req.body,
  });

  newUser
    .save(newUser)
    .then((data) =>
      res.status(201).json({ message: "User created successfully", data })
    )
    .catch((err) =>
      res.status(500).json({ status: "Error", message: err.message })
    );
};

// retrive all and single user
const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await Userdb.findById(id);
    res
      .status(200)
      .json({ message: "User fetched successfully", user: response });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

/**
 * @description update user by userid
 *
 */

const updateUser = async (req, res) => {
  try {
    const response = await Userdb.updateOne();
  } catch (err) {
    console.log(err);
  }
};

const deleteUser = (req, res) => {};
module.exports = { addUser, getUser, deleteUser, updateUser };
