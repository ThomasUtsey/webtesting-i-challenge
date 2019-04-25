const { succeed, fail, repair, get } = require('./enhancer.js');
// test away!
describe('enhancer.js',() =>{

  describe('succeed()',()=>{

  })

  describe('fail()',()=>{


  })
  test('refresh durability to 100',()=> expect(repair({ durability: 40}).durability).toBe(100))
  
  // describe('repair()',()=>{
  //   it ('refreshes durability to 100',() =>{
  //     expect(repair({ durability: 40}).durability).toBe(100)
  //   })
  // })

  describe('get()',()=>{

  })
})