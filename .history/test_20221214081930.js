const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/users/1').then((res)=> {
    console.log(res.data)
})
axios.get('https://jsonplaceholder.typicode.com/users/2').then((res)=> {
    console.log(res.data)
})
axios.get('https://jsonplaceholder.typicode.com/users/3').then((res)=> {
    console.log(res.data)
})
axios.get('https://jsonplaceholder.typicode.com/users/4').then((res)=> {
    console.log(res.data)
})
axios.get('https://jsonplaceholder.typicode.com/users/5').then((res)=> {
    console.log(res.data)
})

function run() {
    let list = [];
    new Promise((resolve, reject) => {
        axios.get('https://jsonplaceholder.typicode.com/users/1').then( fun(res)=> {
            resolve(res.data)
        })
    }
}