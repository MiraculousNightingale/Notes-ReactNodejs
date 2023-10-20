const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling GET requests to /notes",
  });
});

router.get("/:noteId", (req, res, next) => {
  const id = req.params.noteId;
  if (id > 100) {
    res.status(200).json({
      message: "You have got the right id range!",
      id: id,
    });
  } else {
    res.status(404).json({
      message: "Wrong id range kek.",
      id: id,
    });
  }
});

router.post("/", (req, res, next) => {
  const note = {
    title: req.body.title,
    text: req.body.text,
  };
  res.status(201).json({
    message: "Handling POST requests to /notes",
    createdNote: note,
  });
});

module.exports = router;
