	/* ==============================================
		Scroll to top  
	============================================== */

window.onscroll = function() {
    scrollFunction()
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("Button").style.display = "block";
    } else {
      document.getElementById("Button").style.display = "none";
    }
  }
  

  function scrollFunc() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }