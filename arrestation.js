/* a Pen by Diaco m.lotfollahi  : https://diacodesign.com */

var Doc = document , 
    ox = oy = 0 , 
    mDis = 80 , 
    id=0 ;
Doc.addEventListener('mousemove',track);
Doc.addEventListener('touchmove',track);
function track(event){
  var e = event.pageX ? event : event.targetTouches[0];
  var dis = Math.round(Math.sqrt((ox-e.pageX)*(ox-e.pageX)+(oy-e.pageY)*(oy-e.pageY))),
  xdiff = e.pageX - ox , ydiff = e.pageY - oy , 
  ang = Math.atan2(ydiff,xdiff)*180/Math.PI;
  if (dis > mDis) {
    ox = e.pageX; oy = e.pageY;
    var ND =  Doc.createElement('div');
    TweenLite.set(ND,{
      className:'foot',rotation:ang,x:e.pageX,y:e.pageY,scaleY:id&1?-1:1,transformOrigin:"50% -70%"
    });
    Doc.body.appendChild(ND);
    id++;
    TweenLite.to(ND,5,{opacity:0,onComplete:function(){
    this.target.parentNode.removeChild(this.target);
    }})
  }
};
/* a Pen by Diaco m.lotfollahi  : https://diacodesign.com */