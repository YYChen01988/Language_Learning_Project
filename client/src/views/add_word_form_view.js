const PubSub = require('../helpers/pub_sub.js')

const AddWordFormView = function (form) {
  this.form = form;
};

AddWordFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (event) => {
  this.handleSubmit(event);
  // console.log(event);
  })
};

AddWordFormView.prototype.handleSubmit = function (event) {
  event.preventDefault();
  const newWord =
  this.createsWord(event.target);
  PubSub.publish('AddWordFormView:item-submitted', newWord);
  event.target.reset();
}

AddWordFormView.prototype.createsWord = function(form){
  // console.log(form);
  const newWord ={
    English: form.english.value,
    translation: {
      Chinese: form.chinese.value,
      German: form.german.value,
      Dutch: form.dutch.value
    },
    audio: {
      Chinese: form.chineseaudio.value,
      German: form.germanaudio.value,
      Dutch: form.dutchaudio.value
    }
  };
  return newWord;
};

module.exports = AddWordFormView;
