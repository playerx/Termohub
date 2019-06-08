function dropdown() {
    var x = document.getElementById("drop_down_menu_content");
   if (x.style.display==="none"){
       x.style.display ="block";
   }
           
    
  }

  function hoverAddress() {
      document.getElementById('Path_97').style.fill = '#6CB43F';

  }
  function undoHoverAddress() {
    document.getElementById('Path_97').style.fill = "#00718e";
  }

  function hoverPhone() {
      document.getElementById('Path_25').style.fill ='#6CB43F';
  }

  function undoHoverPhone() {
    document.getElementById('Path_25').style.fill ='#00718e';
  }

  function hoverEmail() {
    document.getElementById('Path_26').style.fill ='#6CB43F';
    document.getElementById('Path_27').style.fill ='#6CB43F';
}

function unHoverEmail() {
    document.getElementById('Path_26').style.fill ='#00718e';
    document.getElementById('Path_27').style.fill ='#00718e';
}


function mediaHover() {
    document.getElementById('Ellipse_1').style.fill= '#6CB43F';
    document.getElementById('Path_64').style.fill = '#FFF';
}

function undoMediaHover() {
    document.getElementById('Ellipse_1').style.fill= 'none';
    document.getElementById('Path_64').style.fill = '#798296';
}


