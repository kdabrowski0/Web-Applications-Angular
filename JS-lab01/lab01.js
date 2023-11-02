const axios = require('axios');

// Zadanie 1
async function getIdOfUser(id) {
  if(id < 1 || id > 50) throw new Error('Id użytkownika musi być z przedziału 1-50')
  try {
    const userPost = {
    }   
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = response.data;
    if(response){
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
        userPost.id = user.id  ;
        userPost.name = user.name;
        const posts = response.data;
        userPost.posts = posts.map(post => {
            return {
                title: post.title,
                body: post.body
            }
        });
        return userPost;
    }

  } catch (error) {
    console.error(`Nie znaleziono użytkownika o id ${id}`);
    return null;
  }
}

// const id = 3;
// getIdOfUser(id).then(user => console.log(user));


// Zadanie 2
const products = [
    { name: 'Product 1', price: 10, quantity: 2 },
    { name: 'Product 2', price: 5, quantity: 4 },
    { name: 'Product 3', price: 8, quantity: 3 },
    { name: 'Product 4', price: 12, quantity: 1 },
  ];

const calculateProductValue = (product, cb) => {
    setTimeout(() => {
      const value = product.price * product.quantity;
      cb(value);
    }, Math.floor(Math.random() * 1000));
  };

  const calculateTotalValue = (n, cb) => {
    if (n < 1 || n > products.length) {
      cb("Invalid value of n");
      return;
    }
  
    let count = 0;
    let totalValue = 0;
  
    for (let i = 0; i < n; i++) {
      const product = products[i];
      calculateProductValue(product, (value) => {
        totalValue += value;
        count++;
  
        if (count === n) {
          cb(totalValue);
        }
      });
    }
  };
  
  // calculateTotalValue(3, (result) => {
  //   console.log("Total Value:", result);
  // });
  

// Zadanie 3
  const calculate = ([fun1, fun2], fun3, cb) => {
      let result1, result2, result3;
      const waitForOthers = () => {
        if (result1 !== undefined && result2 !== undefined && result3 !== undefined) {
          const sum = result1 + result2;
          const finalResult = sum * result3;
          cb(finalResult);
        }
      };
      fun1((value) => {
        result1 = value;
        waitForOthers();
      });
      fun2((value) => {
        result2 = value;
        waitForOthers();
      });
      fun3((value) => {
        result3 = value;
        waitForOthers();
      });
      
      
  }
  const func1 = (cb) => {
    setTimeout(() => {
        cb(1);
    }, 100);
  }
  const func2 = (cb) => {
    setTimeout(() => {
        cb(2);
    }, 400);
  }
  const func3 = (cb) => {
    setTimeout(() => {
      cb(4);
    }, 1000);
  };
  // const cb = (value) => {
  //   console.log(value);
  // }
  // calculate([func1, func2], func3, cb);
  // calculate([func3, func1], func2, cb);

// Zadanie 4

const porownaj = (fun1, fun2, cb) => {
  let result1, result2;

  const waitForOthers = () => {
    if (result1 !== undefined && result2 !== undefined) {
      if (result1 !== result2) {
        cb(false);
      } else {
        cb(true);
      }
    }
  };

  fun1()
  .then((value1) => {
    result1 = value1;
    waitForOthers();
  })
  .catch((error) => {
    console.error("Error in fun1:", error);
    cb("Error occurred");
  });

  fun2()
    .then((value2) => {
      result2 = value2;
      waitForOthers();
    })
    .catch((error) => {
      console.error("Error in fun2:", error);
      cb("Error occurred");
    });

}

// const func1 = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(1);
//     }, 1000);
//   });
// }

// const func2 = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(2);
//     }, 2000);
//   });
// }

// const func3 = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(3);
//     }, 3000);
//   });
// }

// const cb = (result) => {
//   console.log(result);
// }
// porownaj(func1, func2, cb); // Wynik porównania: false
// porownaj(func1, func3, cb); // Wynik porównania: true

// Zadanie 5

const zliczPoKolei = (funTab, threshold, cb) => {
  let result = 0;
  let count = 0;
  const waitForOthers = () => {
    if (count === funTab.length) {
      cb(result);
    }
  };
  funTab.forEach((fun) => {
    fun((value) => {
      if (value > threshold) result++ ;
      count++;
      waitForOthers();
    });
  });

};

const funcTab = [ func1, func2, func3 ];
const cb = (result) => {
  console.log(result);
}

zliczPoKolei(funcTab, 2, cb); // Wynik: 1