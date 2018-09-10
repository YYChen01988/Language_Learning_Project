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
        Dutch:"audio/dutch/bedankt.ogg.mp3",
      }
    },
    {
      English: "Hungry",
      translation: {Chinese: "飢餓",
                    German: "Hungrig",
                    Dutch: "Hongerig"},
      audio:{
        Chinese:"audio/01.mp3",
        German:"audio/01.mp3",
        Dutch:"audio/dutch/hongerig.ogg.mp3",
      }
    },
    {
      English: "Swim",
      translation: {Chinese: "游泳",
                    German: "Schwimmen",
                    Dutch: "Zwemmen"},
      audio:{
        Chinese:"audio/01.mp3",
        German:"audio/01.mp3",
        Dutch:"audio/dutch/zwemmen.ogg.mp3",
      }
    },
    {
      English: "Please",
      translation: {Chinese: "請",
                    German: "Bitte",
                    Dutch: "Alsjeblieft"},
      audio:{
        Chinese:"audio/01.mp3",
        German:"audio/01.mp3",
        Dutch:"audio/dutch/alsjeblieft.ogg.mp3",
      }
    },
    {
      English: "Beer",
      translation: {Chinese: "啤酒",
                    German: "Bier",
                    Dutch: "Bier"},
      audio:{
        Chinese:"audio/01.mp3",
        German:"audio/01.mp3",
        Dutch:"audio/dutch/bier.ogg.mp3",
      }
    },
    {
      English: "Wine",
      translation: {Chinese: "紅酒",
                    German: "Wein",
                    Dutch: "Wijn"},
      audio:{
        Chinese:"audio/01.mp3",
        German:"audio/01.mp3",
        Dutch:"audio/dutch/wijn.ogg.mp3",
      }
    },
    {
      English: "Cycling",
      translation: {Chinese: "循環",
                    German: "Radfahren",
                    Dutch: "Fietsen"},
      audio:{
        Chinese:"audio/01.mp3",
        German:"audio/01.mp3",
        Dutch:"audio/dutch/fietsen.ogg.mp3",
      }
    },
    {
      English: "Good day",
      translation: {Chinese: "美好的一天",
                    German: "Schönen Tag",
                    Dutch: "Goedendag"},
      audio:{
        Chinese:"audio/01.mp3",
        German:"audio/01.mp3",
        Dutch:"audio/dutch/goedendag.ogg.mp3",
      }
    },
    {
      English: "Goodbye",
      translation: {Chinese: "再見",
                    German: "Auf Wiedersehen",
                    Dutch: "Tot ziens"},
      audio:{
        Chinese:"audio/01.mp3",
        German:"audio/01.mp3",
        Dutch:"audio/dutch/tot_ziens.ogg.mp3",
      }
    },
    {
      English: "Learning",
      translation: {Chinese: "學習",
                    German: "Lernen",
                    Dutch: "Leren"},
      audio:{
        Chinese:"audio/01.mp3",
        German:"audio/01.mp3",
        Dutch:"audio/dutch/leren.ogg.mp3",
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

]);
