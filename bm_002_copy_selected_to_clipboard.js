var selected =            
document.getSelection().rangeCount > 0
  ? document.getSelection().getRangeAt(0)
  : false;        
console.log(selected);    
var text_area = document.createElement('textarea');
text_area.value = "hello world";
document.body.appendChild(text_area);
text_area.select();
text_area.document.execCommand('copy');
document.body.removeChild(text_area);
if (selected) {                                
    document.getSelection().removeAllRanges();    
    document.getSelection().addRange(selected);   
  }