use languages;
db.dropDatabase();

db.words.insertMany([
    {
      English: "Thank you",
      translation: {Chinese: "你好",
                    German: "Danke",
                    Dutch: "Bedankt"},
      audio:{
        Chinese:"audio/chinese/thank_you_c.m4a",
        German:"audio/german/thankyou.m4a",
        Dutch:"audio/dutch/bedankt.ogg.mp3",
      }
    },
    {
      English: "Hungry",
      translation: {Chinese: "飢餓",
                    German: "Hungrig",
                    Dutch: "Hongerig"},
      audio:{
        Chinese:"audio/chinese/hungry_c.m4a",
        German:"audio/german/hungry.m4a",
        Dutch:"audio/dutch/hongerig.ogg.mp3",
      }
    },
    {
      English: "Swim",
      translation: {Chinese: "游泳",
                    German: "Schwimmen",
                    Dutch: "Zwemmen"},
      audio:{
        Chinese:"audio/chinese/swim_c.m4a",
        German:"audio/german/swimming.m4a",
        Dutch:"audio/dutch/zwemmen.ogg.mp3",
      }
    },
    {
      English: "Please",
      translation: {Chinese: "請",
                    German: "Bitte",
                    Dutch: "Alsjeblieft"},
      audio:{
        Chinese:"audio/chinese/please_c.m4a",
        German:"audio/german/please.m4a",
        Dutch:"audio/dutch/alsjeblieft.ogg.mp3",
      }
    },
    {
      English: "Beer",
      translation: {Chinese: "啤酒",
                    German: "Bier",
                    Dutch: "Bier"},
      audio:{
        Chinese:"audio/chinese/beer_c.m4a",
        German:"audio/german/beer.m4a",
        Dutch:"audio/dutch/bier.ogg.mp3",
      }
    },
    {
      English: "Wine",
      translation: {Chinese: "紅酒",
                    German: "Wein",
                    Dutch: "Wijn"},
      audio:{
        Chinese:"audio/chinese/wine_c.m4a",
        German:"audio/german/wine.m4a",
        Dutch:"audio/dutch/wijn.ogg.mp3",
      }
    },
    {
      English: "Cycling",
      translation: {Chinese: "循環",
                    German: "Radfahren",
                    Dutch: "Fietsen"},
      audio:{
        Chinese:"audio/chinese/cycling_c.m4a",
        German:"audio/german/cycling.m4a",
        Dutch:"audio/dutch/fietsen.ogg.mp3",
      }
    },
    {
      English: "Good day",
      translation: {Chinese: "美好的一天",
                    German: "Schönen Tag",
                    Dutch: "Goedendag"},
      audio:{
        Chinese:"audio/chinese/good_day_c.m4a",
        German:"audio/german/goodday.m4a",
        Dutch:"audio/dutch/goedendag.ogg.mp3",
      }
    },
    {
      English: "Goodbye",
      translation: {Chinese: "再見",
                    German: "Auf Wiedersehen",
                    Dutch: "Tot ziens"},
      audio:{
        Chinese:"audio/chinese/goodbye_c.m4a",
        German:"audio/german/goodbye.m4a",
        Dutch:"audio/dutch/tot_ziens.ogg.mp3",
      }
    },
    {
      English: "Learning",
      translation: {Chinese: "學習",
                    German: "Lernen",
                    Dutch: "Leren"},
      audio:{
        Chinese:"audio/chinese/learning_c.m4a",
        German:"audio/german/learning.m4a",
        Dutch:"audio/dutch/leren.ogg.mp3",
      }
    }
  ]);
db.quiz.insertMany([
  {
    English: "Friend",
    Chinese: "朋友",
    German: "Freund",
    Dutch: "Vriend"
  },
  {
    English: "Brother",
    Chinese: "哥哥",
    German: "Bruder",
    Dutch: "Broer"
  },
  {
    English: "Tomato",
    Chinese: "番茄",
    German: "Tomate",
    Dutch: "Tomaat"
  },
  {
    English: "Dictionary",
    Chinese: "字典",
    German: "Wörterbuch",
    Dutch: "Woordenboek"
  },
  {
    English: "Gloves",
    Chinese: "手套",
    German: "Handschuhe",
    Dutch: "Handschoenen"
  },
  {
    English: "Pineapple",
    Chinese: "菠蘿",
    German: "Ananas",
    Dutch: "Ananas"
  },
  {
    English: "Parents",
    Chinese: "父母",
    German: "Eltern",
    Dutch: "Ouders"
  },
  {
    English: "Dragon",
    Chinese: "龍",
    German: "Drachen",
    Dutch: "Draak"
  },
  {
    English: "Hungry",
    Chinese: "飢餓",
    German: "Hungrig",
    Dutch: "Hongerig"
  },
  {
    English: "Thank you",
    Chinese: "你好",
    German: "Danke",
    Dutch: "Bedankt"
  },
  {
    English: "Swim",
    Chinese: "游泳",
    German: "Schwimmen",
    Dutch: "Zwemmen"
  },
  {
    English: "Please",
    Chinese: "請",
    German: "Bitte",
    Dutch: "Alsjeblieft"
  },
  {
    English: "Beer",
    Chinese: "啤酒",
    German: "Bier",
    Dutch: "Bier"
  },
  {
    English: "Wine",
    Chinese: "紅酒",
    German: "Wein",
    Dutch: "Wijn"
  },
  {
    English: "Cycling",
    Chinese: "循環",
    German: "Radfahren",
    Dutch: "Fietsen"
  },
  {
    English: "Good day",
    Chinese: "美好的一天",
    German: "Schönen Tag",
    Dutch: "Goedendag"
  },
  {
    English: "Goodbye",
    Chinese: "再見",
    German: "Auf Wiedersehen",
    Dutch: "Tot ziens"
  },
  {
    English: "Learning",
    Chinese: "學習",
    German: "Lernen",
    Dutch: "Leren"
  }
]);
