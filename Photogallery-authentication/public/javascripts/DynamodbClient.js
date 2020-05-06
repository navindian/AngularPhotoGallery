let AWS=require('aws-sdk');
connectionURl = "http://localhost:8000/shell"

AWS.config.update({
    accessKeyId:"fakeId",
    secretAccessKey:"fakeKey"
})

let dynamodbClient = new AWS.DynamoDB.DocumentClient({
    region:'localhost',
    endpoint:'http://localhost:8000'
})

module.exports=dynamodbClient

//java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb