var messages = require("./helloWorldService_pb")
var services = require("./helloWorldService_grpc_pb")
var grpc = require("grpc")

function sayHelloWorldProcess(requestMessage, callback){
    console.log("Received message from " + requestMessage.request.getName())
    var replyMessage = new messages.HelloWordReplyMessage()
    replyMessage.setMessage("Wellcome " + requestMessage.request.getName())
    console.log("Reply message to " + requestMessage.request.getName())
    callback(null, replyMessage)
}

var server = new grpc.Server()
server.addService(services.HelloWorldServiceService, {sayHelloWorld:sayHelloWorldProcess})
server.bind("localhost:50051", grpc.ServerCredentials.createInsecure())
server.start()
console.log("Server started on localhost:50051")