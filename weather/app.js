const request = require('postman-request')

const baseUrl = 'http://api.weatherstack.com/'

let queryUrl = baseUrl + 'current?access_key=39f27cadcc3f8e07aa91b786ce0ed723' + '&query='
let query = 'seoul'

request({url : queryUrl + query, json:true} , function(error, response, body){
    console.log(response.statusCode)
    //console.log(body)
    //온도만 출력하기
    console.log(body.current.temperature)

})
















