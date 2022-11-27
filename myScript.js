
//Alter header > logo size and, by proxy, header container height 
const resizeHeaderLogo = () => {
  if (document.documentElement.scrollTop > 50) {
    document.getElementById("logo").style.width = "380px";
  } else {
    document.getElementById("logo").style.width = "480px";
  }
}
//Function call on window scroll event
window.onscroll = () => {resizeHeaderLogo()};
//--------------------------------------------------------------------------------------------------------------//