// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var helloWorldService_pb = require('./helloWorldService_pb.js');

function serialize_HelloWordReplyMessage(arg) {
  if (!(arg instanceof helloWorldService_pb.HelloWordReplyMessage)) {
    throw new Error('Expected argument of type HelloWordReplyMessage');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_HelloWordReplyMessage(buffer_arg) {
  return helloWorldService_pb.HelloWordReplyMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_HelloWorldRequestMessage(arg) {
  if (!(arg instanceof helloWorldService_pb.HelloWorldRequestMessage)) {
    throw new Error('Expected argument of type HelloWorldRequestMessage');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_HelloWorldRequestMessage(buffer_arg) {
  return helloWorldService_pb.HelloWorldRequestMessage.deserializeBinary(new Uint8Array(buffer_arg));
}


var HelloWorldServiceService = exports.HelloWorldServiceService = {
  sayHelloWorld: {
    path: '/HelloWorldService/SayHelloWorld',
    requestStream: false,
    responseStream: false,
    requestType: helloWorldService_pb.HelloWorldRequestMessage,
    responseType: helloWorldService_pb.HelloWordReplyMessage,
    requestSerialize: serialize_HelloWorldRequestMessage,
    requestDeserialize: deserialize_HelloWorldRequestMessage,
    responseSerialize: serialize_HelloWordReplyMessage,
    responseDeserialize: deserialize_HelloWordReplyMessage,
  },
};

exports.HelloWorldServiceClient = grpc.makeGenericClientConstructor(HelloWorldServiceService);
