use languages;
db.dropDatabase();

db.words.insertMany([
  {
    English: "Thank you",
    translation: {Chinese: "你好",
                  German: "Danke",
                  Dutch: "Bedankt"},
    audio:{
      German:"audio/01.mp3"
    }
  },
  {
    English: "Hungry",
    translation: {Chinese: "飢餓",
                  German: "Hungrig",
                  Dutch: "Hongerig"}
  },
  {
    English: "Swim",
    translation: {Chinese: "游泳",
                  German: "Schwimmen",
                  Dutch: "Zwemmen"}
  },
  {
    English: "Please",
    translation: {Chinese: "請",
                  German: "Bitte",
                  Dutch: "Alsjeblieft"}
  },
  {
    English: "Beer",
    translation: {Chinese: "啤酒",
                  German: "Bier",
                  Dutch: "Bier"}
  },
  {
    English: "Wine",
    translation: {Chinese: "紅酒",
                  German: "Wein",
                  Dutch: "Wijn"}
  },
  {
    English: "Cycling",
    translation: {Chinese: "循環",
                  German: "Radfahren",
                  Dutch: "Fietsen"}
  },
  {
    English: "Good day",
    translation: {Chinese: "美好的一天",
                  German: "Schönen Tag",
                  Dutch: "Goedendag"}
  },
  {
    English: "Goodbye",
    translation: {Chinese: "再見",
                  German: "Auf Wiedersehen",
                  Dutch: "Tot ziens"}
  },
  {
    English: "Learning",
    translation: {Chinese: "學習",
                  German: "Lernen",
                  Dutch: "Leren"}
  }
]);
db.quiz.insertMany([
  {"Chinese": [
  {
    question: "Hello",
    answer: "Jobby",
    possible: {one: "Wee Jobby",
              two: "Big Jobby",
              three: "Jobby",
              four: "Job"}
  }]},
  {"German": [
  {
    question: "Hello",
    answer: "Jobby",
    possible: {one: "Wee Jobby",
              two: "Big Jobby",
              three: "Jobby",
              four: "Job"}
  }]},
  {"Dutch": [
  {
    question: "Hello",
    answer: "Jobby",
    possible: {one: "Wee Jobby",
              two: "Big Jobby",
              three: "Jobby",
              four: "Job"}
  }]},
]);
