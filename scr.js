// davaleb 2 1*
[
    { name: 'Temo', age: 25 },
    { name: 'Lasha', age: 21 },
    { name: 'Ana', age: 28 }
  ]

//   davaleba 2 2*

function findYoungestUser(users) {
    if (users.length === 0) return null; 
    
    let youngestUser = users[0];
  
    for (let i = 1; i < users.length; i++) {
      if (users[i].age < youngestUser.age) {
        youngestUser = users[i];
      }
    }
  
    return youngestUser.name;
  }
  
 
  const users = [
    { name: 'Temo', age: 25 },
    { name: 'Lasha', age: 21 },
    { name: 'Ana', age: 28 }
  ];
  
  console.log(findYoungestUser(users)); 

//   davaleb 2 3*

function cloneUser(user) {
    return { ...user };
  }
  
 
  const user = { name: 'Temo', age: 25 };
  const newUser = cloneUser(user);
  
  console.log(newUser); 
  console.log(newUser === user); 

  
  