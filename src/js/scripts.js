import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui';
import ubit from '../img/ubit.jpg';
import star from '../img/star.jpg';
import KU from '../img/KU.jpg';
import road from '../img/road.jpg';
import b1 from '../img/b1.jpg';
import b2 from '../img/b2.jpg';
import b55 from '../img/b55.jpg';
import B66 from '../img/B66.jpg';
import wall from '../img/wall.jpg';
import WL22 from '../img/WL22.jpeg';


const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
//shadows are not enabled in3js bydefault

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    45, //fieldofview 40-80
    window.innerWidth/window.innerHeight, //aspectview
    0.1, //nearclipping
    1000 //far clipping
);
//creating instance of orbit control class
const orbit = new OrbitControls(camera, renderer.domElement);

camera.position.set(30,30,30);
orbit.update(); //for change the position of camera



//adding box
const boxGeometry = new THREE.BoxGeometry(1,1,1);
const boxMaterial = new THREE.MeshBasicMaterial({color: 'red'});
const box = new THREE.Mesh(boxGeometry,boxMaterial); //mesh could be circle,cube etc
scene.add(box);

const textureLoader = new THREE.TextureLoader();
scene.background = textureLoader.load(star);
//creating plane
function creating_plane(){
    const planeGeometry = new THREE.PlaneGeometry(40,40);
   // const planeMatreial = new THREE.MeshBasicMaterial({map: textureloader.load(road), side: THREE.DoubleSide})
    const planeMaterial = new THREE.MeshStandardMaterial({
    color: 0xFFFFFF,
    map: textureLoader.load(road),
    side : THREE.DoubleSide
    }); 
    const plane = new THREE.Mesh(planeGeometry,planeMaterial);
    scene.add(plane);
    plane.rotation.x = -0.5* Math.PI; //rotating grid.
    plane.receiveShadow = true;
}
creating_plane();

function building1(img_name ,height){
    const boxGeometry= new THREE.BoxGeometry(3,height,3);
    const boxMaterial= new THREE.MeshBasicMaterial({ map: textureLoader.load(img_name)})
    const box = new THREE.Mesh(boxGeometry,boxMaterial);
    return box
}
const box1= building1(b1,10)
scene.add(box1);
box1.position.set(10,5,17)

const box22= building1(b2,10)
scene.add(box22);
box22.position.set(1,5,17)

const box23= building1(B66,10)
scene.add(box23);
box23.position.set(-1,5,-17)

const box24= building1(b55,10)
scene.add(box24);
box24.position.set(10,5,-17)

function wall1(img_name, height){
    const boxGeometry= new THREE.BoxGeometry(1,height,30);
    const boxMaterial= new THREE.MeshBasicMaterial({ map: textureLoader.load(img_name)})
    const box2 = new THREE.Mesh(boxGeometry,boxMaterial);
    return box2
}
const box3= wall1(wall,10)
scene.add(box3);
box3.position.set(18,5);

const wall4 = wall1(WL22, 10)
scene.add(wall4);
wall4.position.set(-18,5)

//adding grid helper
const size = 30;
const divisions = 10;
const gridHelper = new THREE.GridHelper( size, divisions );
scene.add( gridHelper );

//add sphere 
const sphereGeometry = new THREE.SphereGeometry(4 , 50,50);//4->r w,h
const sphereMaterial = new THREE.MeshStandardMaterial({
    color: 0x0000FF,
    wireframe : false, 
    
})
const sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);
scene.add(sphere);
sphere.position.set(-10, 10, 0);
sphere.castShadow = true;
//adding ambient light 
const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);


//directional light
//2.SPOTLIGHT
const spotLight = new THREE.SpotLight(0xFFFFFF);
scene.add(spotLight);
spotLight.position.set(-100, 100, 0);
spotLight.castShadow = true;
spotLight.angle = 0.2;
//SPOTLIGHT HELPER
const sLightHelper = new THREE.SpotLightHelper(spotLight);
scene.add(sLightHelper);

//adding fog 
scene.fog = new THREE.FogExp2(0xFFFFFF, 0.01)//colr,density as far as camera

//change bG colr
//renderer.setClearColor(0xFFEA00);

//use textureloader to load an img n thn set it as bG
 scene.background = textureLoader.load(star);
//create 3d wall in envirmt,Load method takes array of img paths->serve astexture  

//creating another cube
const box2Geometry = new THREE.BoxGeometry(6,6,6);
const box2Material = new THREE.MeshBasicMaterial();
//to add a texture to geometry->loader
const box2MultiMaterial = [
    new THREE.MeshBasicMaterial({map: textureLoader.load(ubit)}),
    new THREE.MeshBasicMaterial({map: textureLoader.load(ubit)}),
    new THREE.MeshBasicMaterial({map: textureLoader.load(ubit)}),
    new THREE.MeshBasicMaterial({map: textureLoader.load(ubit)}),
    new THREE.MeshBasicMaterial({map: textureLoader.load(KU)}),
    new THREE.MeshBasicMaterial({map: textureLoader.load(ubit)})
]
const box2 = new THREE.Mesh(box2Geometry,box2MultiMaterial);
scene.add(box2);
box2.position.set(0,15,-10); 
 


//instance of gui class
const gui = new dat.GUI();

//for changing sphere clr
const options = {
    sphereColor: '#ffea00',
    wireframe: false, 
    speed : 0.01,
    angle: 0.2, //for spotlight
    penumbra: 0,
    intensity: 1
}
gui.addColor(options, 'sphereColor').onChange(function(e){
    sphere.material.color.set(e) //e constains the colors
});
gui.add(options ,'wireframe').onChange(function(e){
    sphere.material.wireframe = e;
})
//for controling the speed of sphere
gui.add(options, 'speed',0,0.1) ;

//for spotlight
gui.add(options, 'angle',0,0.1);
gui.add(options, 'penumbra',0,0.1);
gui.add(options, 'intensity',0,0.1)
//minspeed,maxval
//rep the speed of animation 
let step = 0;
//let speed = 0.1;

//1.creating 2d vector in which we are going to put x,y values of the cursor position
const mousePosition = new THREE.Vector2();

//2.add event list to catch the position of the cursor then will update the vector with the 
//normalized value of the cursor coordinates
window.addEventListener('mousemove', function(e){
     //e client x value of the x position of the cursor in window inner width is the width
     //of the window thus the width of the canvas
    mousePosition.x= (e.clientX / window.innerWidth) * 2 -1;
    mousePosition.y= -(e.clientY / window.innerHeight) * 2+1;
})
//3.now create a instance of raycaster class,now set the two ends of the ray which are the camera and 
//and the normalized position
const rayCaster = new THREE.Raycaster();

//**3js provide us uuid(elemtname) n id of the elemts so that we use the id when having diff meshes
const sphereId = sphere.id;
//rotate the box by hover.
box2.name = 'theBox';

const progressbar = document.getElementById("progress-bar")
const progressbarcontainer = document.querySelector(".progress-bar-container")
var a = 100;
for (i =0; i < a; i++){
    setTimeout(function(){
        progressbar.value+=1;
        console.log("after increment ", progressbar.value)
        if(progressbar.value == 100){
            progressbarcontainer.style.display='none'
        }
    },i*70)
}
function animate(time){
//geometeric transformation eg->rotation 
//can also use time argument to set the speed of animation
    box.rotation.x = time/1000;
    box.rotation.y = time/1000;
    step +=options.speed;
    sphere.position.y = 10*Math.abs(Math.sin(step));

    spotLight.angle = options.angle;
    spotLight.penumbra = options.penumbra;
    spotLight.intensity = options.intensity;
    sLightHelper.update();
    rayCaster.setFromCamera(mousePosition, camera);
    //create a variable->hold an obj thats returned ny the intersects obj method,
    //this obj->contain any elemnt from the scen that intersects with the ray
    const intersects = rayCaster.intersectObjects(scene.children);
    //all objs are scene's childern
    //console.log(intersects);
    //**change the color of the sphre using id by hovr
    for(let i = 0; i < intersects.length; i++){
        if(intersects[i].object.id === sphereId)
            intersects[i].object.material.color.set('RED');
        if(intersects[i].object.name === 'theBox'){
            intersects[i].object.rotation.x = time/1000;
            intersects[i].object.rotation.y = time/1000;
        }
    };


//linking scene with the camera using renderer method by setting instance of both as argument
    renderer.render(scene,camera);
}
renderer.setAnimationLoop(animate);