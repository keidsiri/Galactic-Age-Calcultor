import {UserInfo} from './../src/business';

describe('UserInfo', () => {
  test ('Should create new user object with name and age', () => {
    const user = new UserInfo('Kate', '30');
    expect(user.name).toEqual('Kate');
    expect(user.age).toEqual(30);
  });
});