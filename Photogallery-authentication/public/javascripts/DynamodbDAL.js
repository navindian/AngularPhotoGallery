var dynamo=require('./DynamodbClient')

var dynamoDAL={}

dynamoDAL.userLogin = function (empId,password) {
    console.log("in dynamo db")
    const params = {
        TableName: 'bookstore',
        FilterExpression: '(id = :id) AND (pass = :pass)',
        ExpressionAttributeValues: {
          ':id': '1001',
          ':pass': 'naga'
        }
      };
      
      dynamo.scan(params, (err, data) => {
        if (err) {
          console.log('Error:', err);
          return err
        } else {
            for(item in data){
              console.log(item.id+item.pass)
            }
            if(data){
                console.log("here is output of dynamo db scan!!"+data.id+data.pass+data);
                return "login successful"
            }else{
                console.log("sorry the details not found!")
                return "login failed"
            }
        }
      });
    }

dynamoDAL.signupUser = function (credentials){
    var params1 = {
        TableName: "bookstore",
        Item: {
            "id": "1001",
            "pass": "naga"
        } 
    };
      dynamo.put(params1, function(err, data) {
        if (err) {
          console.log(err, err.stack);
        }
        else {
          console.log("details entered>>>>>>>>>>>>>>>>>>>>>"+data.id+data);
        }
      });
    }

module.exports=dynamoDAL