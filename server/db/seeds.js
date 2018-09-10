use languages;
db.dropDatabase();

db.words.insertMany([
  {
    English: "Thank you",
    translation: {Chinese: "你好",
                  German: "Danke",
                  Dutch: "Bedankt"},
    audio:{
      Chinese:"audio/01.mp3",
      German:"audio/01.mp3",
      Dutch:"audio/01.mp3",
    }
  },
  {
    English: "Jobby",
    translation: {Chinese: "你好",
                  German: "Danke",
                  Dutch: "Bedankt"},
    audio:{
      Chinese:"audio/01.mp3",
      German:"audio/01.mp3",
      Dutch:"audio/01.mp3",
    }
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
