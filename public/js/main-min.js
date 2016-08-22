(function(){var t;t=angular.module("peer2package",["ui.router","ngStorage","ngGeolocation"]),t.config(function(t,e){return t.state("main",{templateUrl:"home.html",controller:"mainController"}).state("account",{templateUrl:"account.html",controller:"accountController"}).state("map",{templateUrl:"map.html",controller:"mapController"}).state("map2",{templateUrl:"map2.html",controller:"mapController"}).state("photoUpload",{templateUrl:"photo_upload.html",controller:"photoController"}).state("gps",{templateUrl:"gps.html",controller:"gpsController"})}),t.controller("mainController",function(t,e){if(e.token)return t.token=e.token}),t.controller("menuController",function(t,e,o){var n,s,a;return t.message=null,n=document.getElementById("arrow"),a=document.getElementById("logout"),s=document.getElementById("home"),t.loggedIn=function(){var t;return t=document.getElementById("menubox"),t.classList.add("loggedIn")},t.submitReg=function(){return e.post("/register",t.regForm.user).then(function(e){if(s.classList.add("active"),n.classList.remove("logoout"),a.classList.remove("active"),t.token=e.data.token||null,t.messageReg=e.data.message,e.data.token)return o.token=e.data.token,t.loggedIn()})},t.submitLog=function(){return e.post("/login",t.loginForm.user).then(function(e){if(s.classList.add("active"),n.classList.remove("logout"),a.classList.remove("active"),t.token=e.data.token||null,t.messageLog=e.data.message,e.data.token)return o.token=e.data.token,t.loggedIn()})},t.logout=function(){var e;return e=document.getElementById("menubox"),t.regForm.user={},t.loginForm.user={},e.classList.remove("loggedIn"),o.$reset()}}),t.controller("mapController",function(t,e){}),t.factory("gpsService",["$rootScope","$geolocation",function(t,e){return t.$on("$viewContentLoaded",function(){var o;return e.getCurrentPosition({timeout:6e4}).then(function(n){return t.myPosition=n,e.watchPosition({timeout:6e4,maximumAge:250,enableHighAccuracy:!0}),t.myPosition=e.position,t.$watch("myPosition.coords",function(e,n){return t.longitude=e.longitude,t.latitude=e.latitude,o.setCenter([t.longitude,t.latitude])}),t.loading=!1}),mapboxgl.accessToken="pk.eyJ1IjoiamFtZXNhZGlja2Vyc29uIiwiYSI6ImNpbmNidGJqMzBwYzZ2OGtxbXljY3FrNGwifQ.5pIvQjtuO31x4OZm84xycw",o=new mapboxgl.Map({container:"map",style:"mapbox://styles/jamesadickerson/ciq1h3u9r0009b1lx99e6eujf",zoom:19,pitch:45}),o.addControl(new mapboxgl.Directions)})}]),t.controller("gpsController",["$scope","gpsService","$interval",function(t,e,o){}]),t.directive("loading",["$http",function(t){return{restrict:"A",link:function(e,o,n){return e.loading=!0,e.isLoading=function(){return t.pendingRequests.length>0},e.$watch(e.isLoading,function(t){return t?o.removeClass("hidden"):(o.addClass("hidden"),e.loading=!1)})}}}]),t.controller("accountController",function(t){}),t.controller("photoController",function(t){}),t.factory("socket",function(t){var e;return e=io.connect(),{on:function(o,n){e.on(o,function(){var o;o=arguments,t.$apply(function(){n.apply(e,o)})})},emit:function(o,n,s){e.emit(o,n,function(){var o;o=arguments,t.$apply(function(){s&&s.apply(e,o)})})}}}),t.directive("menuChange",function(){return{restrict:"AE",link:function(){var t,e,o,n,s,a,l;return a=document.getElementById("menu"),l=document.getElementById("side-nav-menu"),t=document.getElementById("arrow"),o=document.getElementById("home"),e=document.getElementById("account"),s=document.getElementById("gps"),n=document.getElementById("logout"),a.addEventListener("click",function(){return a.classList.toggle("open"),l.classList.toggle("nav-open")}),e.addEventListener("click",function(){return t.classList.add("account"),t.classList.remove("home"),t.classList.remove("map"),t.classList.remove("logout"),e.classList.add("active"),o.classList.remove("active"),s.classList.remove("active"),n.classList.remove("active"),setTimeout(function(){return a.classList.toggle("open"),l.classList.toggle("nav-open")},500)}),o.addEventListener("click",function(){return t.classList.add("home"),t.classList.remove("account"),t.classList.remove("map"),t.classList.remove("logout"),o.classList.add("active"),e.classList.remove("active"),s.classList.remove("active"),n.classList.remove("active"),setTimeout(function(){return a.classList.toggle("open"),l.classList.toggle("nav-open")},500)}),s.addEventListener("click",function(){return t.classList.add("map"),t.classList.remove("account"),t.classList.remove("home"),t.classList.remove("logout"),s.classList.add("active"),o.classList.remove("active"),e.classList.remove("active"),n.classList.remove("active"),setTimeout(function(){return a.classList.toggle("open"),l.classList.toggle("nav-open")},500)}),n.addEventListener("click",function(){return t.classList.add("logout"),t.classList.remove("map"),t.classList.remove("account"),t.classList.remove("home"),n.classList.add("active"),s.classList.remove("active"),o.classList.remove("active"),e.classList.remove("active")})}}})}).call(this);