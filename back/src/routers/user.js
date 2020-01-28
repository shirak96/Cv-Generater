const express = require("express");
const User = require("../models/user");
const router = new express.Router();

router.get("/", async (req, res) => {
  res.send("ok working");
});

router.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    console.log("hello", user);
    if (!user) {
      console.log("please provide all user details");
    } else {
      const result = await user.save();
      console.log("show result:", result);
      res.status(201).send(user);
    }
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(500).send();
  }
});

router.get("/users/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const user = await User.findById(_id);

    if (!user) {
      return res.status(404).send();
    }

    res.json({ success: true, result: user });
  } catch (e) {
    res.status(500).send();
  }
});

router.patch("/users/:id", async (req, res) => {
  console.log("working");

  const updates = Object.keys(req.body);
  const allowedUpdates = ["personalData"];
  // "name", "email", "password", "age",
  const isValidOperation = updates.every(update =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!user) {
      return res.status(404).send();
    }

    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).send();
    }

    res.send(user);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
