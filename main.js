Webcam.set({
    width:300,
    height:300,
    image_format:"jpg",
    jpg_qualtiy:90
})
Webcam.attach("#camera")

function capture() {
    Webcam.snap(
        function(selfie) {
           document.getElementById("snapshot").innerHTML=`<img src=${selfie} id="image">` 
        }
    )
}
console.log("ml5 version= "+ml5.version)
classifier=ml5.imageclassifier("https://teachablemachine.withgoogle.com/models/ZqNpyQnCc/model.json",modelloaded)
function modelloaded() {
    console.log("model has been loaded ")
}
function speak(){
var speechapi=window.speechSynthesis
var speakdata="the first prediction is "+prediction1+" the second prediction is "+prediction2
var saythis=new SpeechSynthesisUtterance(speakdata)
speechapi.speak(saythis)
}