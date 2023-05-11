//video 
let video;
//label para mostrar la palabra esperando
let label = "esperando";
//clasificador
let classifier;
//url modelo
let modeURL = 'https://teachablemachine.withgoogle.com/models/USZvHzpv-/';

//Cargar el modelo
function preload() {
    classifier = ml5.imageClassifier(modeURL + 'modelJson');
}

//setup del canvas para visualizar el video de camara
function preload() {
    createCanvas(640,250);
    //crear el video
    video = createCapture(VIDEO);
    video.hide();
    //clasificacion
    classifyVideo();
}

function classifyVideo() {
    classifier.classify(video, gotResults);
}

function draw() {
    background(0);

    //imagevideo
    image(video, 0, 0);

    //deibujar el label
    textSize(32);
    textAlign(CENTER, CENTER);
    fill(255)
    text(label, width / 2, height -16)
}

//resultados de la Clasificacion
console.log(results)
//asignar clasificacion
label = results[0].label;
classifyVideo();