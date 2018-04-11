findShort("bitcoin take over the world maybe who knows perhaps")
//length of shortest word in sentence

function findShort(s){
  let p=[]
  r=s.split(' ')
    r.map(element=>{
      return p.push(element.length)
    });
 return console.log(Math.min(...p));
}
