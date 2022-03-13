function changeDiv(div_id){
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var div3 = document.getElementById("div3");
    var div4 = document.getElementById("div4");
    var div5 = document.getElementById("div5");
    
   if(div_id == '01'){
       div1.style.display = "initial";
       div2.style.display = "none";
       div3.style.display = "none";
       div4.style.display = "none";
       div5.style.display = "none";
    }
    else if(div_id == '02'){
       div1.style.display = "none";
       div2.style.display = "initial";
       div3.style.display = "none";
       div4.style.display = "none";
       div5.style.display = "none";
    }
    else if(div_id == '03'){
       div1.style.display = "none";
       div2.style.display = "none";
       div3.style.display = "initial";
       div4.style.display = "none";
       div5.style.display = "none";
    }
    else if(div_id == '04'){
       div1.style.display = "none";
       div2.style.display = "none";
       div3.style.display = "none";
       div4.style.display = "initial";
       div5.style.display = "none";
    }
    else {
       div1.style.display = "none";
       div2.style.display = "none";
       div3.style.display = "none";
       div4.style.display = "none";
       div5.style.display = "initial";
    }
  }