(function(){var e;e=angular.module("peer2package"),e.controller("menuController",["$scope","$http","$localStorage","userService","socket",function(e,t,n,o,l,s){var a,u,r,g,c,m;return e.message=null,g=document.getElementById("menu"),a=document.getElementById("arrow"),r=document.getElementById("logout"),u=document.getElementById("home"),c=document.getElementById("menubox"),m=document.getElementById("side-nav-menu"),e.loggedIn=function(){return c.classList.add("loggedIn")},e.submitReg=function(t){return o.register(t).then(function(o){if(console.log(t),u.classList.add("active"),a.classList.remove("logout"),r.classList.remove("active"),e.messageReg=o.data.message,o.data)return e.token=o.data.token||null,n.token=o.data.token||null,e.loggedIn()})},e.submitLog=function(t){return o.login(t).then(function(t){if(u.classList.add("active"),a.classList.remove("logout"),r.classList.remove("active"),e.messageLog=t.data.message,t.data)return e.token=t.data.token||null,n.token=t.data.token||null,e.loggedIn()})},e.logout=function(){return e.token="",o.logout(),e.mapOff(e.myInterval),e.regForm.user={},e.loginForm.user={},c.classList.remove("loggedIn"),n.$reset(),setTimeout(function(){return g.classList.toggle("open"),m.classList.toggle("nav-open")},500)}}])}).call(this);