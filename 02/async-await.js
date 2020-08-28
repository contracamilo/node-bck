

// let getNombre = async () => {
//     //throw new Error('The name does not exist');
//     return 'Django'
// }

// getNombre()
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.error('error =>', err);
//     });


 let getName = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('django')
        }, 3000);
    })
 }

 let greeting = async (params) => {
     
    let name = await getName();

    return `Hello ${name}`
 }
 

 greeting()
      .then((res) => {
          console.log(res);
      }).catch((err) => {
         console.error('error =>', err);
     });