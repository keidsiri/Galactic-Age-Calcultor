import Calculator from './../src/business.js'

describe ('Calculator', () => {
  test('Should create new user object with name and age', () => {
    const user = new Calculator ('Kate', 30);
    expect(user.name).toEqual('Kate');
    expect(user.age).toEqual(30);
  })
})
