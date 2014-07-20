// JavaScript Document


 var iframe = document.createElement("myIFrame");
    iframe.src = url;

        if (navigator.userAgent.indexOf("MSIE") > -1 && !window.opera){
                iframe.onreadystatechange = function(){
            if (iframe.readyState == "complete"){            
                //not sure if your code works but it is below for reference
                  document.getElementById('myIFrame').class = ShowMe;
                  //or this which will work
                  //document.getElementById("myIFrame").className = "ShowMe";

                }
            };
        }       
        else 
        {
            iframe.onload = function(){
                  //not sure if your code works but it is below for reference
                  document.getElementById('myIFrame').class = ShowMe;
                  //or this which will work
                  //document.getElementById("myIFrame").className = "ShowMe";
            };
        } 