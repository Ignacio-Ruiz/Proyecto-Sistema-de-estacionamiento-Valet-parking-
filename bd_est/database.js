import axios from "axios";
const { default: axios } = require("axios")
const GamepadButton=

GamepadButton.addEventListener('click', ()=>{
    axios({
        method: 'GET',
        url: 'https //jsonplaceholder.typicode.com/users'
    }).then(res=>{
        console.log(res.data)
    }).catch(err=> console.log(err))
})