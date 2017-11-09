var messages = require("./helloWorldService_pb")
var services = require("./helloWorldService_grpc_pb")
var grpc = require("grpc")
var client = new services.HelloWorldServiceClient("localhost:50051", grpc.credentials.createInsecure())
var requestMessage = new messages.HelloWorldRequestMessage()
requestMessage.setName("matico")
client.sayHelloWorld(requestMessage, (err, replyMessage)=>{
    console.log("Reply message: " + replyMessage.getMessage())
})