const express = require("express");
const router = express.Router();

const {
  PostCarUsers,
  GetCarUsers,
  GetCarUsersById,
  EditCarUsers,
  PatchCarUsers,
  DeleteCarUsers,
} = require("../controllers/carusers");

router.post("/", PostCarUsers);

router.get("/", GetCarUsers);

router.get("/:id", GetCarUsersById);

router.put("/:id", EditCarUsers);

router.patch("/:id", PatchCarUsers);

router.delete("/:id", DeleteCarUsers);

module.exports = router;
