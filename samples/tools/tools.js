var stats;

if(!Object.create)
{
    Object.create=function(o){
        function F(){}
        F.prototype=o;
        return new F();
    }
}

var initStats = function(e) {
    stats = new Stats();
    stats.setMode( 2 );
    var displayfps = document.createElement("div");
    displayfps.id = "displayfps";
    document.body.appendChild(displayfps);
    displayfps.appendChild( stats.domElement );

    displayfps.addEventListener('mouseover',function(){
      displayfps.style.display = 'none';
    });
}



//prefix
//prefixes = ["", "webkit", "Moz", "O", "ms" ],
/*
 var transform = (function() {
    if (undefined !== style.WebkitTransform) {
      return "WebkitTransform";
    } else if (undefined !== style.MozTransform) {
      return "MozTransform ";
    } else if (undefined !== style.OTransform) {
      return "OTransform";
    } else if (undefined !== style.msTransform) {
      return "msTransform ";
    } else if (undefined !== style.WebkitTransform) {
      return "WebkitTransform";
    } else {
      return "transform";
    }
  })();
*/
var fps = 1000/60;
// shim layer with setTimeout fallback
window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        function( callback ){
            window.setTimeout(callback, fps);
        };
})();
var PI = Math.PI;
var randomColor = function(){
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
var randomRange = function (min, max) {
    return Math.random() * (max - min) + min;
}
var getDegreeDirection =  function(x1, y1, x2, y2){
            return Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
        }
var removeFromArrayById = function(array, id){
    var output = array.slice(0);
    for(var i=0; i<output.length; i++){
        if(output[i].id == id){
            output.splice(i, 1);
            return output;
        }
    }
}

var hitTestCircle = function (ball1, ball2) {
    var retVal = false;
    var dx = ball1.nextX - ball2.nextX;
    var dy = ball1.nextY - ball2.nextY;
    var distance = (dx * dx + dy * dy);
    if (distance <= (ball1.radius + ball2.radius) * (ball1.radius + ball2.radius) ) {
        retVal = true;
    }
    return retVal;
}

var fibonacci = function (n) {
   var i, w, u, v;
   if(n <= 0) return 0;
   if(n == 1) return 1;
   u = 0;
   v = 1;
   for(i=2; i <= n; i++) {
       w = u+v; u = v; v = w;
   };
   return v;
}    
    
var translate = function (obj) {
    var transform = "translate("+Math.round(obj.x)+"px,"+Math.round(obj.y)+"px) scale("+obj.scale+") rotate("+obj.rotation+"deg)";
    obj.element.style.WebkitTransform = transform;
    obj.element.style.MozTransform = transform;
    obj.element.style.OTransform = transform;
    obj.element.style.transform = transform;
}
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randomLetter = function(){
  return alphabet[Math.round(randomRange(0,25))];
}
var setBorder = function(a,b,c){
    obj.element.style.border = a+" "+b+" "+b;
}
var setOpacity = function(p){
    obj.element.style.opacity = p;
}
var setRadius = function(v){
    obj.element.style['border-radius'] = v; 
    obj.element.style['-webkit-border-radius']= v; 
    obj.element.style['-moz-border-radius']= v; 
    obj.element.style['-o-border-radius']= v; 
}
var setShadow = function(a,b,c,color){
    var transform = a+'px '+b+'px '+c+'px '+color;
    obj.element.style['boxShadow'] = transform;
    obj.element.style.boxShadow = transform;
}
var setAnimationName = function (name){
    obj.element.style.webkitAnimationName = name;
}
/*
var animation = false,
    animationstring = 'animation',
    keyframeprefix = '',
    domPrefixes = 'Webkit Moz O ms Khtml'.split(' '),
    pfx  = '';
 
if( elm.style.animationName ) { animation = true; }    
 
if( animation === false ) {
  for( var i = 0; i < domPrefixes.length; i++ ) {
    if( elm.style[ domPrefixes[i] + 'AnimationName' ] !== undefined ) {
      pfx = domPrefixes[ i ];
      animationstring = pfx + 'Animation';
      keyframeprefix = '-' + pfx.toLowerCase() + '-';
      animation = true;
      break;
    }
  }
}

if( animation === false ) {
 
  // animate in JavaScript fallback
 
} else {
  elm.style[ animationstring ] = 'rotate 1s linear infinite';
 
  var keyframes = '@' + keyframeprefix + 'keyframes rotate { '+
                    'from {' + keyframeprefix + 'transform:rotate( 0deg ) }'+
                    'to {' + keyframeprefix + 'transform:rotate( 360deg ) }'+
                  '}';
 
  if( document.styleSheets && document.styleSheets.length ) {
 
      document.styleSheets[0].insertRule( keyframes, 0 );
 
  } else {
 
    var s = document.createElement( 'style' );
    s.innerHTML = keyframes;
    document.getElementsByTagName( 'head' )[ 0 ].appendChild( s );
 
  }
 
}

function has3d(){
    var el = document.createElement('p'),
    has3d,
    transforms = {
        'webkitTransform':'-webkit-transform',
        'OTransform':'-o-transform',
        'msTransform':'-ms-transform',
        'MozTransform':'-moz-transform',
        'transform':'transform'
    };
 
    // Add it to the body to get the computed style
    document.body.insertBefore(el, null);
 
    for(var t in transforms){
        if( el.style[t] !== undefined ){
            el.style[t] = 'translate3d(1px,1px,1px)';
            has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
        }
    }
 
    document.body.removeChild(el);
 
    return (has3d !== undefined && has3d.length > 0 && has3d !== "none");
*/








