"use strict";
const blipp = require("blipp");
const pino = require("hapi-pino");

const isDev = process.env.NODE_ENV !== "production";

module.exports.register = async server => {
   await server.register([blipp, {
       plugin: pino,
       options: {
           prettyPrint: isDev,
           logEvents: ["response", "onPostStart"]
       }
   }]);
};