let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select")
let textarea = document.querySelector("textarea")
//load all voices and fill the select menu
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices.forEach((voice,i)=>(voiceSelect.options[i] =  new Option(voice.name,i) ))
};

//update the speech voice when the user selects a different option
voiceSelect.addEventListener("change",()=>{
speech.voice = voices[voiceSelect.value];

});

//getting text from text area and converting into speech
document.querySelector("button").addEventListener("click",()=>{

speech.text = textarea.value
window.speechSynthesis.speak(speech)
})
