use languages;
db.dropDatabase();

db.words.insertMany([
  {
    english: "Thank you",
    chinese: "你好",
    german: "Danke",
    dutch: "Dank je"
  },
  {
    english: "Hungry",
    chinese: "飢餓",
    german: "Hungrig",
    dutch: "Hongerig"

  },
  {
    english: "Swim",
    chinese: "游泳",
    german: "Schwimmen",
    dutch: "Zwemmen"

  },
  {
    english: "Please",
    chinese: "請",
    german: "Bitte",
    dutch: "Alsjeblieft"

  }

]);
