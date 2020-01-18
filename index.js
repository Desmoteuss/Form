import "./styles.css";

var text= document.getElementsByTagName("input");
var text2= text[0];
var text3= text[1];

text2.addEventListener("click", OnClick);
text3.addEventListener("click", OnClick);

function OnClick()
{
  text2.classList.toggle("OnFocus");  
  text3.classList.toggle("OnFocus");
}
