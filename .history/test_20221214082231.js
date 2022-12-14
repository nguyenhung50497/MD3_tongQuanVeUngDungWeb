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
        axios.get('https://jsonplaceholder.typicode.com/users/1').then( function(res) {
            resolve(list.push(res.data))
        })
    })
    new Promise((resolve, reject) => {
        axios.get('https://jsonplaceholder.typicode.com/users/2').then( function(res) {
            resolve(list.push(res.data))
        })
    })
    new Promise((resolve, reject) => {
        axios.get('https://jsonplaceholder.typicode.com/users/3').then( function(res) {
            resolve(list.push(res.data))
        })
    })
    new Promise((resolve, reject) => {
        axios.get('https://jsonplaceholder.typicode.com/users/4').then( function(res) {
            resolve(list.push(res.data))
        })
    })
    new Promise((resolve, reject) => {
        axios.get('https://jsonplaceholder.typicode.com/users/5').then( function(res) {
            resolve(list.push(res.data))
        })
    })

    console.log(list.filter(item => item.name.includes('le')));
}

run().then;