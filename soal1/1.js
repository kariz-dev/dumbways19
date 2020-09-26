function convert() {
    var  output=document.getElementById("tBox2");  
    var input=document.getElementById("tBox1").value;
      output.value = "";
      for (i=0; i < input.length; i++) {
           output.value +=input[i].charCodeAt(0).toString(2) + " ";
      }
  }