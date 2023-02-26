function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Xwx2is9g3/model.json", modelReady)
}
function modelReady(){
    classifier.classify(gotResult);
}

function gotResult(error, result){
    if (error){
        console.log(error);
    }
    else{
        console.log(result);
        random_color_r = Math.floor(Math.random()*255)+1;
        random_color_g = Math.floor(Math.random()*255)+1;
        random_color_b = Math.floor(Math.random()*255)+1;

        document.getElementById("obj").innerHTML="I Can Hear : "+result[0].label;

        document.getElementById("obj").style.color = "rgb("+random_color_r+","+random_color_g+","+random_color_b+")";
       
         img = document.getElementById("imag");
         memes = document.getElementById("meme");

        if (result[0].label=="meowing"){
            img.src = "cat.jpg"
            memes.src = "giphy.gif" 
            
        }
        else if(result[0].label=="barking"){
            img.src = "dog.jpg"
            memes.src = "fedecks.gif" 
        }
        else if(result[0].label=="mooing"){
            img.src = "lion.jpg"
            memes.src = "lol-lmao.gif" 
        }
        else{
            img.src = "cow.png"
            memes.src = "cow.gif" 
        }
        
    }
    }
