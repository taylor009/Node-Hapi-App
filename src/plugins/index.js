"use strict";
const Blipp = require("blipp");
const HapiPino = require("hapi-pino");
const serverStart = require("./serverStart");

const isDev = process.env.NODE_ENV !== "production";

module.exports.register = async server => {
   await server.register([Blipp, {
       plugin: HapiPino,
       options: {
           prettyPrint: isDev,
           logEvents: ["response"]
       }
   },{
       plugin: serverStart,
       options: {
           message: 
       }
   }]);
};