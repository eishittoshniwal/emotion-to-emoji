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
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ZqNpyQnCc/model.json",modelloaded)
function modelloaded() {
    console.log("model has been loaded ")
}
function speak(){
var speechapi=window.speechSynthesis
var speakdata="the first prediction is "+prediction1+" the second prediction is "+prediction2
var saythis=new SpeechSynthesisUtterance(speakdata)
speechapi.speak(saythis)
}

function predict() {
  img= document.getElementById("image")  
  classifier.classify(img,getresult)
}
function getresult(error,result) {
    if (error) {
        console.log(error)
    } else {
        console.log(result)
        prediction1=result[0].label
        prediction2=result[1].label
        document.getElementById("emotion1").innerHTML=prediction1
        document.getElementById("emotion2").innerHTML=prediction2
     speak()
     if (prediction1=="Smiling") {
    document.getElementById("emoji1").innerHTML="&#128522;"
    }
    if (prediction1=="Sad") {
        document.getElementById("emoji1").innerHTML="&#128532;"
        }
        if (prediction1=="Angry") {
            document.getElementById("emoji1").innerHTML="&#128545;"
            }
            if (prediction1=="surprised") {
                document.getElementById("emoji1").innerHTML="&#128562;"
                }
                if (prediction1=="thinking") {
                    document.getElementById("emoji1").innerHTML="&#129300;"
                    }

                    if (prediction2=="Smiling") {
                        document.getElementById("emoji2").innerHTML="&#128522;"
                        }
                        if (prediction2=="Sad") {
                            document.getElementById("emoji2").innerHTML="&#128532;"
                            }
                            if (prediction2=="Angry") {
                                document.getElementById("emoji2").innerHTML="&#128545;"
                                }
                                if (prediction2=="surprised") {
                                    document.getElementById("emoji2").innerHTML="&#128562;"
                                    }
                                    if (prediction2=="thinking") {
                                        document.getElementById("emoji2").innerHTML="&#129300;"
                                        }
    }
}

