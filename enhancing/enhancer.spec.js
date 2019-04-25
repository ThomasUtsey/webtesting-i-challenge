const { succeed, fail, repair, get } = require('./enhancer.js');
// test away!
describe('enhancer.js',() =>{

// test enhancement to cap at 20
  test('no change if enhancement is 20',()=> expect(succeed(20)).toEqual(20))

// test enhancement if it adds 1
  test('add one if less than 20',()=> expect(succeed(19)).toEqual(20))

  describe('fail()',()=>{

  })

  test('refresh durability to 100',()=> expect(repair({ durability: 40}).durability).toBe(100))

  describe('get()',()=>{

  })
})