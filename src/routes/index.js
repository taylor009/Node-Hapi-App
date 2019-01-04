"use strict";

module.exports.register = async server => {
    server.route( {
        method: "GET",
        path: "/",
        // a handler can return text, HTML, JSON,
        // a file, or just about anything
        handler: async (request, h) => {
            try{
                const message = "My first hapi server!";
                return h.view("index", {
                    title: "Home",
                    message
                });
            } catch (err) {
                server.log(["error", "home"], err)
            }
        }
    } );
};