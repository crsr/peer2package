(function(){var e;e=angular.module("peer2package"),e.directive("menuChange",function(){return{restrict:"AE",link:function(){var e,t,s,c,a,i,o;return i=document.getElementById("menu"),o=document.getElementById("side-nav-menu"),e=document.getElementById("arrow"),s=document.getElementById("home"),t=document.getElementById("account"),a=document.getElementById("gps"),c=document.getElementById("logout"),i.addEventListener("click",function(){return i.classList.toggle("open"),o.classList.toggle("nav-open")}),t.addEventListener("click",function(){return e.classList.add("account"),e.classList.remove("home"),e.classList.remove("map"),e.classList.remove("logout"),t.classList.add("active"),s.classList.remove("active"),a.classList.remove("active"),c.classList.remove("active"),setTimeout(function(){return i.classList.toggle("open"),o.classList.toggle("nav-open")},500)}),s.addEventListener("click",function(){return e.classList.add("home"),e.classList.remove("account"),e.classList.remove("map"),e.classList.remove("logout"),s.classList.add("active"),t.classList.remove("active"),a.classList.remove("active"),c.classList.remove("active"),setTimeout(function(){return i.classList.toggle("open"),o.classList.toggle("nav-open")},500)}),a.addEventListener("click",function(){return e.classList.add("map"),e.classList.remove("account"),e.classList.remove("home"),e.classList.remove("logout"),a.classList.add("active"),s.classList.remove("active"),t.classList.remove("active"),c.classList.remove("active"),setTimeout(function(){return i.classList.toggle("open"),o.classList.toggle("nav-open")},500)}),c.addEventListener("click",function(){return e.classList.add("logout"),e.classList.remove("map"),e.classList.remove("account"),e.classList.remove("home"),c.classList.add("active"),a.classList.remove("active"),s.classList.remove("active"),t.classList.remove("active")})}}})}).call(this);