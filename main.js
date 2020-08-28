
		 var menubtn = document.getElementById('menubtn');
             var sideNav = document.getElementById('sideNav');

              sideNav.style.right="-380px";
              menubtn.onclick = function(){
                if(sideNav.style.right =="-380px"){
                    sideNav.style.right ="0";
              }
              else{
                sideNav.style.right ="-380px";
              }
          }