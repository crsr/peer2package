(function(){var e;e=angular.module("peer2package"),e.controller("mapController",["$scope","mapService","socket","userService",function(e,n,t,o){return e.moveToPosition=function(){return n.moveCenter()},e.chat_open=!1,e.open_chat=function(){return e.chat_open=!0},e.close_chat=function(){return e.chat_open=!1},e.submitChat=function(n){return t.emit("chat message",{message:n}),e.sent=n,e.message=""},t.on("chat message",function(e){var n;return n=angular.element(document.querySelector("#messages > ul")),n.append("<li>"+e+"</li>")})}])}).call(this);