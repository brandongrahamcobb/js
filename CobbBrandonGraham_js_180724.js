function main() {
  var style = document.createElement('link');
  style.type = 'text/css';
  style.rel = 'stylesheet';
  style.href = '/home/spawd/Documents/css/style.css';
  document.head.appendChild(style);

  document.body.style.display = 'flex';
  document.body.style.flexDirection = 'column';
  document.body.style.justifyContent = 'center';
  document.body.style.alignItems = 'center';
  document.body.style.height = '100vh';
  document.body.style.margin = '0';
  document.body.style.backgroundColor = '#000';
  document.body.style.color = '#fff';
  document.body.style.fontFamily = 'Courier New, Courier, monospace'

//  var image = document.createElement('img');
//  image.src = '/home/spawd/Pictures/CobbBrandonGraham_Art_1_110721.svg';
//  image.alt = 'My Art';
//  document.body.appendChild(image)

  const app = document.createElement('div');
  app.id = 'options';
  app.className = 'options';
//  app.style.marginTop = '20px';
  app.style.display = 'flex';
  app.style.justifyContent = 'center';
  document.body.appendChild(app);

  const optionsOne = document.createElement('div');
  optionsOne.id = 'optionsOne';
  optionsOne.className = 'options';
  document.body.appendChild(optionsOne);

  const optionsTwo = document.createElement('div');
  optionsTwo.id = 'optionsTwo';
  optionsTwo.className = 'options';
  document.body.appendChild(optionsTwo);

  const optionsThree = document.createElement('div');
  optionsThree.id = 'optionsThree';
  optionsThree.className = 'options';
  document.body.appendChild(optionsThree);

  const optionsFour = document.createElement('div');
  optionsFour.id = 'optionsFour';
  optionsFour.className = 'options';
  document.body.appendChild(optionsFour);

  const optionsFive = document.createElement('div');
  optionsFive.id = 'optionsFive';
  optionsFive.className = 'options';
  document.body.appendChild(optionsFive);

  const optionsSix = document.createElement('div');


  const sevenZip = document.createElement('a');
  sevenZip.textContent = '.7zip';
  sevenZip.className = 'option';
  sevenZip.href = '#';
  optionsOne.appendChild(sevenZip);

  const ani = document.createElement('a');
  ani.textContent = '.ani';
  ani.className = 'option';
  ani.href = '#';
  optionsOne.appendChild(ani);

  const bashrc = document.createElement('a');
  bashrc.textContent = '.bashrc';
  bashrc.className = 'option';
  bashrc.href = '#';
  optionsOne.appendChild(bashrc);

  const bat = document.createElement('a');
  bat.textContent = '.bat';
  bat.className = 'option';
  bat.href = '#';
  optionsOne.appendChild(bat);

  const bib = document.createElement('a');
  bib.textContent = '.bib';
  bib.className = 'option';
  bib.href = '#';
  optionsOne.appendChild(bib);

  const conf = document.createElement('a');
  conf.textContent = '.conf';
  conf.className = 'option';
  conf.href = '#';
  optionsOne.appendChild(conf);

  const css = document.createElement('a');
  css.textContent = '.css';
  css.className = 'option';
  css.href = '#';
  optionsOne.appendChild(css);

  const csv = document.createElement('a');
  csv.textContent = '.csv';
  csv.className = 'option';
  csv.href = '#';
  optionsTwo.appendChild(csv);

  const cur = document.createElement('a');
  cur.textContent = '.cur';
  cur.className = 'option';
  cur.href = '#';
  optionsTwo.appendChild(cur);

  const docx = document.createElement('a');
  docx.textContent = '.docx';
  docx.className = 'option';
  docx.href = '#';
  optionsTwo.appendChild(docx);

  const eps = document.createElement('a');
  eps.textContent = '.eps';
  eps.className = 'option';
  eps.href = '#';
  optionsTwo.appendChild(eps);

  const exe = document.createElement('a');
  exe.textContent = '.exe';
  exe.className = 'option';
  exe.href = '#';
  optionsTwo.appendChild(exe);

  const fortran = document.createElement('a');
  fortran.textContent = '.fortran';
  fortran.className = 'option';
  fortran.href = '#';
  optionsTwo.appendChild(fortran);

  const gif = document.createElement('a');
  gif.textContent = '.gif';
  gif.className = 'option';
  gif.href = '#';
  optionsTwo.appendChild(gif);

  const go = document.createElement('a');
  go.textContent = '.go';
  go.className = 'option';
  go.href = '#';
  optionsTwo.appendChild(go);

  const h264 = document.createElement('a');
  h264.textContent = '.h264';
  h264.className = 'option';
  h264.href = '#';
  optionsTwo.appendChild(h264);

  const heic = document.createElement('a');
  heic.textContent = '.heic';
  heic.className = 'option';
  heic.href = '#';
  optionsThree.appendChild(heic);

  const html = document.createElement('a');
  html.textContent = '.html';
  html.className = 'option';
  html.href = '#';
  optionsThree.appendChild(html);

  const ico = document.createElement('a');
  ico.textContent = '.ico';
  ico.className = 'option';
  ico.href = '#';
  optionsThree.appendChild(ico);

  const ini = document.createElement('a');
  ini.textContent = '.ini';
  ini.className = 'option';
  ini.href = '#';
  optionsThree.appendChild(ini);

  const iso = document.createElement('a');
  iso.textContent = '.iso';
  iso.className = 'option';
  iso.href = '#';
  optionsThree.appendChild(iso);

  const jar = document.createElement('a');
  jar.textContent = '.jar';
  jar.className = 'option';
  jar.href = '#';
  optionsThree.appendChild(jar);

  const java = document.createElement('a');
  java.textContent = '.java';
  java.className = 'option';
  java.href = '#';
  optionsThree.appendChild(java);

  const jpeg = document.createElement('a');
  jpeg.textContent = '.jpeg';
  jpeg.className = 'option';
  jpeg.href = '#';
  optionsThree.appendChild(jpeg);

  const js = document.createElement('a');
  js.textContent = '.js';
  js.className = 'option';
  js.href = '#';
  optionsThree.appendChild(js);

  const log = document.createElement('a');
  log.textContent = '.log';
  log.className = 'option';
  log.href = '#';
  optionsFour.appendChild(log);

  const md = document.createElement('a');
  md.textContent = '.md';
  md.className = 'option';
  md.href = '#';
  optionsFour.appendChild(md);

  const pdf = document.createElement('a');
  pdf.textContent = '.pdf';
  pdf.className = 'option';
  pdf.href = '#';
  optionsFour.appendChild(pdf);

  const pptx = document.createElement('a');
  pptx.textContent = '.pptx';
  pptx.className = 'option';
  pptx.href = '#';
  optionsFour.appendChild(pptx);

  const rar = document.createElement('a');
  rar.textContent = '.rar';
  rar.className = 'option';
  rar.href = '#';
  optionsFour.appendChild(rar);

  const tar = document.createElement('a');
  tar.textContent = '.tar';
  tar.className = 'option';
  tar.href = '#';
  optionsFour.appendChild(tar);

  const tex = document.createElement('a');
  tex.textContent = '.tex';
  tex.className = 'option';
  tex.href = '#';
  optionsFour.appendChild(tex);

  const txt = document.createElement('a');
  txt.textContent = '.txt';
  txt.className = 'option';
  txt.href = '#';
  optionsFour.appendChild(txt);

  const vlc = document.createElement('a');
  vlc.textContent = '.vlc';
  vlc.className = 'option';
  vlc.href = '#';
  optionsFive.appendChild(vlc);

  const xlsx = document.createElement('a');
  xlsx.textContent = '.xlsx';
  xlsx.className = 'option';
  xlsx.href = '#';
  optionsFive.appendChild(xlsx);

  const zip = document.createElement('a');
  zip.textContent = '.zip';
  zip.className = 'option';
  zip.href = '#';
  optionsFive.appendChild(zip);

}

var ctx = CanvasRenderingContext2D.prototype;
var mousePressed, mouseReleased, w, width, h, height, canvas;
var mouseSpeedX = 0,
    mouseSpeedY = 0,
    mouseX = 0,
    mouseY = 0,
    lastMouseX = 0,
    lastMouseY = 0,
    oldMouseX = 0,
    oldMouseY = 0,
    frameRate = 60,
    frameCount = 0,
    frameNumber = 0,
    lastUpdate = Date.now(),
    mouseMoved = false,
    mouseDown = false,
    number_of_balls = 15,
    max_distance = 80;
var balls = [];
ctx = createCanvas("canvas1");

function addBall(_i){
  var ball = {
    x: random(w),
    y: random(h),
    speed_x: posNeg() * random(0.2, 1),
    speed_y: posNeg() * random(0.2, 1),
    size: 8,
    colour: rgb(0, 255, 153)
  }
  balls.push(ball);
}

function bounce(num, min, max, sz) {
    if (sz == undefined) {
        sz = 0;
    }
    if (num >= max - sz/2 || num - sz/2 <= min ) {
        return 1;
    } else {
        return 0;
    }
    //return num > max ? -1 : num < min ? -1 : 1
}

function cjsloop() {
    var now = Date.now();
    var elapsedMils = now - lastUpdate;
//    if((typeof window.draw == 'function') && (elapsedMils >= (1000/window.frameRate))) {
        /*window.*/draw();
        frameCount++;
        frameNumber++;
        lastUpdate = now - elapsedMils % (1000/window.frameRate );
        mouseSpeedX = mouseX - oldMouseX;
        mouseSpeedY = mouseX - oldMouseX;
        lastMouseX = oldMouseX = mouseX;
        lastMouseY = oldMouseY = mouseY;
        mouseReleased = 0;
        mouseMoved = 0;
//    }
    requestAnimationFrame(cjsloop);
    //x.clearRect(0, 0, w, h);
}

function clamp(value, min, max){
    return Math.min(Math.max(value, Math.min(min, max)),Math.max(min, max));
}


function createCanvas(canvas_name){
    canvas = document.createElement('canvas');
    var body = document.querySelector('body');
    canvas.setAttribute("id", canvas_name);
    canvas.style.position = "fixed";
    canvas.style.zIndex = "9999";
    canvas.style.left = "0px";
    canvas.style.top = "0px";
    canvas.style.opacity = "0.4";
    canvas.style.pointerEvents = "none";
  //  canvas.style.background = "transparent";
    body.appendChild(canvas);
    ctx = canvas.getContext('2d');
    resize();
    window.addEventListener("resize", resize, false);
    return ctx;
}

function dist(x1, y1, x2, y2) {
    x2 -= x1; y2 -= y1;
    return Math.sqrt((x2*x2) + (y2*y2));
}

function draw() {
    ctx.clearRect(0, 0, width, height);
   // ctx.background();
    moveBall();
    drawBall();
}

function drawBall(){
    for (var i = 0; i < balls.length; i++) {
        var b = balls[i];
        drawConnections(i);
        ctx.fillStyle = b.colour;
        ctx.fillEllipse(b.x, b.y, b.size);

    }
}

function drawConnections(_i) {
    for (var j = _i + 1; j < balls.length; j++) {
      var b1 = balls[_i];
      var b2 = balls[j];
      if (dist(b1.x, b1.y, b2.x, b2.y) <= max_distance) {
        ctx.strokeStyle = rgb(128, 128, 128);
        ctx.line(b1.x, b1.y, b2.x, b2.y);
      }
   }
}

function init() {
    window.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        mouseMoved = true;
    });
    if(typeof window.setup == 'function') window.setup();
    cjsloop();
}

function posNeg(){
    return randomInt(0,1) * 2 - 1;
}


function random(min, max) {
    if(min == undefined) {
        min = 0;
        max = 1;
    } else if(max == undefined) {
        max = min;
        min = 0;
    }
    return (Math.random() * (max - min)) + min;
}

function randomInt(min, max) {
    if(max == undefined) {
        max = min;
        min = 0;
    }
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}


function resize(){
	var c = document.getElementsByTagName('canvas');
	width = w = window.innerWidth;
	height = h = window.innerHeight;
	for(var i = 0; i < c.length; i++) {
		c[i].width = width;
		c[i].height = height;

	}
	console.log("resize: " + w +":" + h);
}

function rgb(r, g, b) {
    if (g == undefined) g = r;
    if (b == undefined) b = r;
    return 'rgb('+clamp(Math.round(r),0,255)+', '+clamp(Math.round(g),0,255)+', '+clamp(Math.round(b),0,255)+')';
}

function rgba(r, g, b, a) {
    if (g == undefined) {
        return 'rgb(' + clamp(Math.round(r), 0, 255) + ', ' + clamp(Math.round(r), 0, 255) + ', ' + clamp(Math.round(r), 0, 255) + ')';
    } else if (b == undefined) {
        return 'rgba(' + clamp(Math.round(r), 0, 255) + ', ' + clamp(Math.round(r), 0, 255)+ ', ' + clamp(Math.round(r), 0, 255) + ', ' + clamp(g, 0, 1) + ')';
    } else if (a == undefined){
        return 'rgba(' + clamp(Math.round(r), 0, 255) + ', ' + clamp(Math.round(g), 0, 255)+ ', ' + clamp(Math.round(b), 0, 255) + ', 1)';
    } else {
        return 'rgba(' + clamp(Math.round(r), 0, 255) + ', ' + clamp(Math.round(g), 0, 255)+ ', ' + clamp(Math.round(b), 0, 255) + ', '+ clamp(a, 0, 1) + ')';
    }
}

function moveBall(){
    for (var i = 0; i < balls.length; i++) {
        var b = balls[i];
        b.x += b.speed_x;
        b.y += b.speed_y;
        if (bounce(b.x, 0, w)) b.speed_x *= -1;
        if (bounce(b.y, 0, h)) b.speed_y *= -1;
    }
}

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
ctx.ellipse = function(x, y, width, height) {
    'use strict';
    if (height == undefined) { height = width; }
    this.beginPath();
    for(var i = 0; i < Math.PI*2; i += Math.PI/16) {
        this.lineTo(x + (Math.cos(i) * width/2), y + (Math.sin(i) * height/2));
    }
    this.closePath();
};

ctx.fillEllipse = function(x, y, width, height) {
    'use strict';
    if (height == undefined) height = width;
    this.ellipse(x, y, width, height);
    this.fill();
    this.beginPath();
};

ctx.line = function(x1, y1, x2, y2){
    this.beginPath();
    this.moveTo(x1, y1);
    this.lineTo(x2, y2);
    this.stroke();
    this.beginPath();
};

ctx.background = function(r, g, b, a) {
    if (g == undefined) {
        this.fillStyle = rgb(r, r, r);
    } else if (b == undefined && a == undefined) {
        this.fillStyle = rgba(r, r, r, g);
    } else if (a == undefined) {
        this.fillStyle = rgb(r, g, b);
    } else {
        this.fillStyle = rgba(r, g, b, a);
    }
    this.fillRect(0, 0, w, h);
};
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// push a ball and it's values into the array
for (var i = 0; i < number_of_balls; i++) {addBall(i);}
//window.addEventListener("load", draw);
window.addEventListener("load", init);

main()
