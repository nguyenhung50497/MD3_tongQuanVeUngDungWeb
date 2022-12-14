const a = require('axios');

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

}