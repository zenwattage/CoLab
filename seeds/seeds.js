const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// ///////////////////////
// Schema instantiation //
// ///////////////////////
db.ballet.create({
  userId: "test",
  properties: { pointe: true },
  images: ["one", "two", "three"],
  videos: ["one", "two", "three"]
});
db.latin.create({
  userId: "test",
  properties: { freestyle: true },
  images: ["one", "two", "three"],
  videos: ["one", "two", "three"]
});
db.hipHop.create({
  userId: "test",
  properties: { freestyle: true },
  images: ["one", "two", "three"],
  videos: ["one", "two", "three"]
});
db.contemporary.create({
  userId: "test",
  properties: { freestyle: true },
  images: ["one", "two", "three"],
  videos: ["one", "two", "three"]
});
db.portrait.create({
  userId: "test",
  properties: { camera: true },
  images: ["one", "two", "three"],
  videos: ["one", "two", "three"]
});
db.street.create({
  userId: "test",
  properties: { camera: true },
  images: ["one", "two", "three"],
  videos: ["one", "two", "three"]
});
db.motion.create({
  userId: "test",
  properties: { camera: true },
  images: ["one", "two", "three"],
  videos: ["one", "two", "three"]
});
db.landscape.create({
  userId: "test",
  properties: { camera: true },
  images: ["one", "two", "three"],
  videos: ["one", "two", "three"]
});
