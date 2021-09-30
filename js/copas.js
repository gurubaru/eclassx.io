<!--anti copas-->
        //<![CDATA[
        // script redirect ctrl U
      function redirectCU(e) {
        if (e.ctrlKey && e.which == 85) {
          window.location.replace("https://tutlenc.blogspot.com/");
          return false;
        }
      }
      document.onkeydown = redirectCU;
      
//anti copas jquery
  window.oncontextmenu=function(){
      return false;
  }
  $(document).keydown(function (event){
      if (event.keyCode == 123){
          return false;
      }
      else if ((event.ctrlKey && event.shiftKey && event.keyCode ==73)|| 
      (event.ctrlKey && event.shiftKey && event.keyCode == 74)|| 
      (event.ctrlKey && event.keyCode==85)||
      (event.ctrlKey && event.keyCode==80)){
          return false;
      }
  });

  //Script Redirect Klik Kanan
  function redirectKK(e) {
    if (e.which == 3) {
      window.location.replace("https://tutlenc.blogspot.com/");
      return false;
    }
  }
  document.oncontextmenu = redirectKK;
  //]]>
