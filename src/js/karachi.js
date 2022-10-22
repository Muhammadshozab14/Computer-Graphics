// //  * as THREE from 'three';
// // import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// // import star from '../img/star.jpg';
// // import sea2 from '../img/sea2.jpg';

// // const renderer = new THREE.WebGL1Renderer();
// // renderer.setSize(window.innerWidth, window.innerHeight);

// // document.body.appendChild(renderer.domElement);

// // const scene = new THREE.Scene();

// // const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
// // const orbit = new OrbitControls(camera, renderer.domElement);

// // camera.position.set(-10, 30, 30);
// // orbit.update();

// // // const axesHelper = new AxesHelper(10);
// // // scene.add(axesHelper);


// // function drawPlane(breadth, length, color) {
// //     const myPlaneGeo = new THREE.PlaneGeometry(breadth, length);
// //     const myPlaneMaterial = new THREE.MeshStandardMaterial({color: color, side: THREE.DoubleSide});
// //     const myPlane = new THREE.Mesh(myPlaneGeo, myPlaneMaterial);
// //     scene.add(myPlane);
// //     myPlane.rotation.x = -0.5 * Math.PI;
// //     return myPlane
// // }


// // const plane1 = drawPlane(200, 70, 0xffffff);                           
// // const plane2 = drawPlane(5, 70, 'black');
// // const plane4 = drawPlane(5, 65, 'black').position.set(40, 0, 2);
// // const plane5 = drawPlane(5, 65, 'black').position.set(-25, 0, 2);
// // const plane6 = drawPlane(5, 65, 'black').position.set(-50, 0, 2);
// // const plane7 = drawPlane(5, 65, 'black').position.set(-50, 0, 2);




// // const ambientLight = new THREE.AmbientLight(0x989898);
// // scene.add(ambientLight);

// // function drawBuilding(length, breadth, height, color, x, y, z) {
// //     const bGeometry = new THREE.BoxGeometry(length, breadth, height);
// //     const bMaterial = new THREE.MeshStandardMaterial({color:color})
// //     const b = new THREE.Mesh(bGeometry, bMaterial);
// //     scene.add(b)
// //     b.position.set(x, y, z);

// //     return b
// // }

// // const b1 = drawBuilding(10, 18, 9, "green", 19, 9, -5 );
// // const b2 = drawBuilding(10, 8, 5, "red", 19, 4, 10 );
// // const b3 = drawBuilding(15, 10, 5, "yellow",-12, 5, 10 );
// // const b4 = drawBuilding(6, 30, 5, "blue",30, 15, 10 );
// // const b5 = drawBuilding(15, 10, 5, 0x89CFF0,-12, 5, -10 );
// // const b6 = drawBuilding(15, 10, 5, 0x89CFF0,-12, 5, -18 );
// // const b7 = drawBuilding(15, 22, 5, 0x7393B3,-12, 12, -30 );
// // const b8 = drawBuilding(15, 30, 5, 0x7393B3, -37, 15, -5 );
// // const b9 = drawBuilding(15, 30, 5, 0x5F9EA0, 13, 15, -15 );


// // //renderer.setClearColor(0xADD8E6);
// // const textureLoader = new THREE.TextureLoader();
// // scene.background = textureLoader.load(sea2);
// // function animate() {
// // renderer.render(scene, camera);
// // }

// // renderer.setAnimationLoop(animate);

// // window.addEventListener('resize', function(){
// //     camera.aspect = window.innerWidth / window.innerHeight;
// //     camera.updateProjectionMatrix();
// //     renderer.setSize(window.innerWidth, window.innerHeight);


// // });


// import * as THREE from 'three';
// import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
// import * as dat from 'dat.gui';
// import ubit from '../img/ubit.jpg';
// import star from '../img/star.jpg';
// import KU from '../img/KU.jpg';
// import nebula from '../img/nebula.jpg';
// import stars from '../img/stars.jpg';
// import road from '../img/road.jpg';
// import b1 from '../img/b1.jpg';
// import b2 from '../img/b2.jpg';
// import wall from '../img/wall.jpg';
// import WL22 from '../img/WL22.jpeg';


// const renderer = new THREE.WebGLRenderer();
// renderer.shadowMap.enabled = true;
// //shadows are not enabled in3js bydefault

// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const scene = new THREE.Scene();

// const camera = new THREE.PerspectiveCamera(
//     45, //fieldofview 40-80
//     window.innerWidth/window.innerHeight, //aspectview
//     0.1, //nearclipping
//     1000 //far clipping
// );
// //creating instance of orbit control class
// const orbit = new OrbitControls(camera, renderer.domElement);

// //adding axies helper-> 3d coordinate system
// // const axeshelper = new THREE.AxesHelper(5); //5-length of axies
// // scene.add(axeshelper);

// // var axes = new THREE.AxesHelper( 10 );
// // //reset axes colors
// // var colors = axes.geometry.attributes.color;
// // colors.setXYZ( 0, 1, 0, 0 ); // index, R, G, B
// // colors.setXYZ( 1, 1, 0, 0 ); // red
// // colors.setXYZ( 2, 0, 1, 0 );
// // colors.setXYZ( 3, 0, 1, 0 ); // green
// // colors.setXYZ( 4, 0, 0, 1 );
// // colors.setXYZ( 5, 0, 0, 1 ); // blue

// // scene.add( axes );
// // camera.position.z = 5;
// // camera.position.y = 2;
// // camera.position.x = 0; or
// camera.position.set(-10,30,30);
// orbit.update(); //for change the position of camera



// //adding box
// const boxGeometry = new THREE.BoxGeometry(1,1,1);
// const boxMaterial = new THREE.MeshBasicMaterial({color: 'red'});
// const box = new THREE.Mesh(boxGeometry,boxMaterial); //mesh could be circle,cube etc
// scene.add(box);

// const textureLoader = new THREE.TextureLoader();
// scene.background = textureLoader.load(star);
// //creating plane
// function creating_plane(){
//     const planeGeometry = new THREE.PlaneGeometry(40,40);
//    // const planeMatreial = new THREE.MeshBasicMaterial({map: textureloader.load(road), side: THREE.DoubleSide})
//     const planeMaterial = new THREE.MeshStandardMaterial({
//     color: 0xFFFFFF,
//     map: textureLoader.load(road),
//     side : THREE.DoubleSide
//     }); 
//     const plane = new THREE.Mesh(planeGeometry,planeMaterial);
//     scene.add(plane);
//     plane.rotation.x = -0.5* Math.PI; //rotating grid.
//     plane.receiveShadow = true;
// }
// creating_plane();

// function building1(img_name ,height){
//     const boxGeometry= new THREE.BoxGeometry(3,height,3);
//     const boxMaterial= new THREE.MeshBasicMaterial({ map: textureLoader.load(img_name)})
//     const box = new THREE.Mesh(boxGeometry,boxMaterial);
//     return box
// }
// const box1= building1(b1,10)
// scene.add(box1);
// box1.position.set(10,5,17)

// const box22= building1(b2,10)
// scene.add(box22);
// box22.position.set(1,5,17)

// function wall1(img_name, height){
//     const boxGeometry= new THREE.BoxGeometry(1,height,30);
//     const boxMaterial= new THREE.MeshBasicMaterial({ map: textureLoader.load(img_name)})
//     const box2 = new THREE.Mesh(boxGeometry,boxMaterial);
//     return box2
// }
// const box3= wall1(wall,10)
// scene.add(box3);
// box3.position.set(18,5);

// const wall4 = wall1(WL22, 10)
// scene.add(wall4);
// wall4.position.set(-18,5)

// //adding grid helper
// const size = 30;
// const divisions = 10;
// const gridHelper = new THREE.GridHelper( size, divisions );
// scene.add( gridHelper );

// //add sphere 
// const sphereGeometry = new THREE.SphereGeometry(4 , 50,50);//4->r w,h
// const sphereMaterial = new THREE.MeshStandardMaterial({
//     color: 0x0000FF,
//     wireframe : false, 
    
// })
// const sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);
// scene.add(sphere);
// sphere.position.set(-10, 10, 0);
// sphere.castShadow = true;
// //adding ambient light 
// const ambientLight = new THREE.AmbientLight(0x333333);
// scene.add(ambientLight);

// //dirctinal light effects 3js provided helpers to deal with light
// // const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.8);
// // scene.add(directionalLight);
// // directionalLight.position.set(-30,50,0);
// // directionalLight.castShadow = true;
// // directionalLight.shadow.camera.bottom = -12;
// // //dLighthelper->indicates the direction of light chnge the sizeof sqr prvding 5
// // const dLighthelper = new THREE.DirectionalLightHelper(directionalLight, 5);
// // scene.add(dLighthelper);

// // //camerahelperclass
// // const dLightShadowHelper = new THREE.CameraHelper(directionalLight.shadow.camera);
// // scene.add(dLightShadowHelper);

// //2.SPOTLIGHT
// const spotLight = new THREE.SpotLight(0xFFFFFF);
// scene.add(spotLight);
// spotLight.position.set(-100, 100, 0);
// spotLight.castShadow = true;
// spotLight.angle = 0.2;
// //SPOTLIGHT HELPER
// const sLightHelper = new THREE.SpotLightHelper(spotLight);
// scene.add(sLightHelper);

// //adding fog 
// //scene.fog = new THREE.Fog(0xFFFFFF,0,200)//color,near,far limitswhere fog'll visible
// //2nd method
// scene.fog = new THREE.FogExp2(0xFFFFFF, 0.01)//colr,density as far as camera

// //change bG colr
// //renderer.setClearColor(0xFFEA00);

// //use textureloader to load an img n thn set it as bG
// // const textureLoader = new THREE.TextureLoader();
// // scene.background = textureLoader.load(star);
// //create 3d wall in envirmt,Load method takes array of img paths->serve astexture  
// // const cubeTextureLoader = new THREE.CubeTextureLoader();
// // scene.background = cubeTextureLoader.load([
// //     nebula,
// //     nebula,
// //     stars,
// //     stars,
// //     stars,
// //     stars
// // ]);
// //creating another cube
// const box2Geometry = new THREE.BoxGeometry(6,6,6);
// const box2Material = new THREE.MeshBasicMaterial({
//     //color: 0x00FF00,
//     //map: textureLoader.load(ubit)//to load img
// });
// //to add a texture to geometry->loader
// const box2MultiMaterial = [
//     new THREE.MeshBasicMaterial({map: textureLoader.load(ubit)}),
//     new THREE.MeshBasicMaterial({map: textureLoader.load(ubit)}),
//     new THREE.MeshBasicMaterial({map: textureLoader.load(star)}),
//     new THREE.MeshBasicMaterial({map: textureLoader.load(ubit)}),
//     new THREE.MeshBasicMaterial({map: textureLoader.load(KU)}),
//     new THREE.MeshBasicMaterial({map: textureLoader.load(ubit)})
// ]
// const box2 = new THREE.Mesh(box2Geometry,box2MultiMaterial);
// scene.add(box2);
// box2.position.set(0,15,-10); 
// //box2.material.map = textureLoader.load(ubit); 


// //instance of gui class
// const gui = new dat.GUI();

// //for changing sphere clr
// const options = {
//     sphereColor: '#ffea00',
//     wireframe: false, 
//     speed : 0.01,
//     angle: 0.2, //for spotlight
//     penumbra: 0,
//     intensity: 1
// }
// gui.addColor(options, 'sphereColor').onChange(function(e){
//     sphere.material.color.set(e) //e constains the colors
// });
// gui.add(options ,'wireframe').onChange(function(e){
//     sphere.material.wireframe = e;
// })
// //for controling the speed of sphere
// gui.add(options, 'speed',0,0.1) ;

// //for spotlight
// gui.add(options, 'angle',0,0.1);
// gui.add(options, 'penumbra',0,0.1);
// gui.add(options, 'intensity',0,0.1)
// //minspeed,maxval
// //rep the speed of animation 
// let step = 0;
// //let speed = 0.1;

// //1.creating 2d vector in which we are going to put x,y values of the cursor position
// const mousePosition = new THREE.Vector2();

// //2.add event list to catch the position of the cursor then will update the vector with the 
// //normalized value of the cursor coordinates
// window.addEventListener('mousemove', function(e){
//      //e client x value of the x position of the cursor in window inner width is the width
//      //of the window thus the width of the canvas
//     mousePosition.x= (e.clientX / window.innerWidth) * 2 -1;
//     mousePosition.y= -(e.clientY / window.innerHeight) * 2+1;
// })
// //3.now create a instance of raycaster class,now set the two ends of the ray which are the camera and 
// //and the normalized position
// const rayCaster = new THREE.Raycaster();

// //**3js provide us uuid(elemtname) n id of the elemts so that we use the id when having diff meshes
// const sphereId = sphere.id;
// //rotate the box by hover.
// box2.name = 'theBox';

// const progressbar = document.getElementById("progress-bar")
// const progressbarcontainer = document.querySelector(".progress-bar-container")
// var a = 100;
// for (i =0; i < a; i++){
//     setTimeout(function(){
//         progressbar.value+=1;
//         console.log("after increment ", progressbar.value)
//         if(progressbar.value == 100){
//             progressbarcontainer.style.display='none'
//         }
//     },i*30)
// }
// function animate(time){
// //geometeric transformation eg->rotation 
// //can also use time argument to set the speed of animation
//     box.rotation.x = time/1000;
//     box.rotation.y = time/1000;
//     step +=options.speed;
//     sphere.position.y = 10*Math.abs(Math.sin(step));

//     spotLight.angle = options.angle;
//     spotLight.penumbra = options.penumbra;
//     spotLight.intensity = options.intensity;
//     sLightHelper.update();
//     rayCaster.setFromCamera(mousePosition, camera);
//     //create a variable->hold an obj thats returned ny the intersects obj method,
//     //this obj->contain any elemnt from the scen that intersects with the ray
//     const intersects = rayCaster.intersectObjects(scene.children);
    
//     //console.log(intersects);
//     //**change the color of the sphre using id by hovr
//     for(let i = 0; i < intersects.length; i++){
//         if(intersects[i].object.id === sphereId)
//             intersects[i].object.material.color.set('RED');
//         if(intersects[i].object.name === 'theBox'){
//             intersects[i].object.rotation.x = time/1000;
//             intersects[i].object.rotation.y = time/1000;
//         }
//     };


// //linking scene with the camera using renderer method by setting instance of both as argument
//     renderer.render(scene,camera);
// }
// renderer.setAnimationLoop(animate);