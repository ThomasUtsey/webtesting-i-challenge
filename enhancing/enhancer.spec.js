const { succeed, fail, repair, get } = require('./enhancer.js');
// test away!
describe('enhancer.js',() =>{

// test enhancement to cap at 20
  test('no change if enhancement is 20',()=> expect(succeed(20)).toEqual(20))

// test enhancement if it adds 1
  test('add one if less than 20',()=> expect(succeed(19)).toEqual(20))

// - If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
// - If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).
  it('testing fail decreases durability by 5 when less than 15',()=>{
   
    expect (fail({
      enhancement:14,
      durability:100
    })).toEqual({
      enhancement:14,
      durability:95
  })
  })

  it('testing fail decreases durability by 10 when equal to 15',()=>{
   
    expect (fail({
      enhancement:15,
      durability:100
    })).toEqual({
      enhancement:15,
      durability:90
    })
    })

    it('testing fail decreases durability by 10 and enhancement by one when greater than 15',()=>{
   
      expect (fail({
        enhancement:16,
        durability:100
      })).toEqual({
        enhancement:15,
        durability:90
      })
      })

  test('refresh durability to 100',()=> expect(repair({ durability: 40}).durability).toBe(100))

  describe('get()',()=>{
    it('add enhancement level to name of item',()=>{
   
      expect (get({
        name:'axe',
        enhancement:15
      })).toEqual({
        name:'[+15] axe'
      })
      })
  })
})