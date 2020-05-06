var MongoClient = require('mongodb');
var connectionUrl="mongodb://localhost:27017/photoGallery";
var bookDAL = {};

bookDAL.userLogin = function (staffId,password) {
    console.log("in login DAL")

    return MongoClient.connect(connectionUrl)
            .then(function (client){
                var collection = client.collection("users");

                return collection.find({"staffId":staffId,"password":password}).toArray()
                        .then(function(response){
                            if(response.length==1){
                                client.close();
                                console.log("correct credentials")
                                console.log(response)
                                return "Login Successful";
                            }
                            else {
                                var err= new Error();
                                err.status=404;
                                err.message="Login failed!"
                                throw err
                            }
                        });
            });
}

bookDAL.signupUser = function (credentials){

    console.log("in dal signup")
    return MongoClient.connect(connectionUrl)
            .then(function(client){
                var collect = client.collection("users");
                return collect.insert(credentials)
                    .then(function(response,error){
                        if(error){
                            throw new Error("couldn't sign you up!!!")
                        }else{
                        console.log("data>>>>"+response.insertedCount)
                        client.close()
                        return true;
                        }
                    })
            })
}

module.exports=bookDAL;