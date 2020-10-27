  function collisionDetection(thingy1,thingy2)
{
  if(thingy1.x-thingy2.x <= thingy1.width/2 + thingy2.width/2    &&    thingy1.y-thingy2.y <= thingy1.height/2 + thingy2.height/2       &&
     thingy2.x-thingy1.x <= thingy1.width/2 + thingy2.width/2    &&    thingy2.y-thingy1.y <= thingy1.height/2 + thingy2.height/2)
  {
     return true;
  }
else
  { 
     return false;
  }
}