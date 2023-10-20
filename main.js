var SpeechRecognition = window.webkitSpeechRecognition; 
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start()
}
recognition.onresult = function(event){
    console.log(event)
    conteudo = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML= conteudo
    if(conteudo=="tire minha selfie"){
        speak()
    }
}

function speak(){
    var synth = window.speechSynthesis;
    speakData = "Sua foto será tirada em 5 segundos"
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis)
    Webcam.attach(camera);
    setTimeout(function(){
        takeselfie();
        save();
    },5000);
}

camera = document.getElementById("camera")
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});

function takeselfie(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="foto" src="'+data_uri+'"/>'
    })
}

function save(){
    link = document.getElementById("link");
    image = document.getElementById("foto").src;
    link.href=image;
    link.click()
}