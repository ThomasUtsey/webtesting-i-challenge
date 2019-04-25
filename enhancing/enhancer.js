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
  return { ...item };
}

function repair(item) {
  
  return { durability:100};
}

function get(item) {
  return { ...item };
}
