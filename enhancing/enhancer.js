module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(enhancement) {
 if(enhancement == 20){
   return 20
 }else{
   return enhancement + 1
 } 
}

function fail(item) {
if(item.enhancement < 15){
  return {
    durability:item.durability-5,
    enhancement:item.enhancement
  
}
}else{
  if (item.enhancement == 15){
    return {
    durability:item.durability-10,
    enhancement:item.enhancement
    }
  }else{
  return {
    durability:item.durability-10,
    enhancement:item.enhancement-1
  } }
}
}

function repair(item) {
  
  return { durability:100};
}

function get(item) {
  if (item.enhancement > 0){
    return ({name:`[+${item.enhancement}] ${item.name}`})
  }else{
    return item.name;
  }
}
