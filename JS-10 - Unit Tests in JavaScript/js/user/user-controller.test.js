const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

  test('add user to userController', () => {    
    let user = new User(1224,"Seb", "seb@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

  test('remove user to userController', () => {    
    let user = new User(1224,"Seb", "seb@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

  test('find user by email ', () => {
    userController.findByEmail('santiago@generation.org');
    expect(userController.findByEmail('santiago@generation.org')).toEqual({"email": "santiago@generation.org", "id": 1234, "name": "Santiago"});
  });

