exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
      var arreglo = str.split(",");
      var n = str.includes(1,2,3,4,5,6,7,8,9,0)
      return n
  },

  containsRepeatingLetter: function(str) {
    var verdad
    str = str.slice()
    for (let i = 0; i < str.length; i++) {
     
      if (  str[i+1] == str[i]) {
        // console.log(true);
        // console.log(str[i]);
        // console.log(str[i+1]);
        // resultado.push(str[i]) 
         verdad =  false
      } else{
        verdad = true
      }
    }
    return verdad
  },

  endsWithVowel: function(str) {
    var vowels = ['a','e','i','o','u']
    var verdad 
    var last = str[str.length-1]
    if (last == vowels) {
         verdad =  false
    }else{
        verdad = true
    }
    return verdad
  },

  captureThreeNumbers: function(str) {
    var number = new Array( 1,2,3,4,5,6,7,8,9,0)
    var n = str.includes(number)
    var final
    var nuevo  =[] ;
    // console.log(str);
    
    // console.log(n);
    //si el str tiene numeros
    // if (n == true ){
      for (let i = 0; i < str.length; i++) {
        var element = str[i];
        element = parseFloat(element)
        // console.log(element);
       if (   element !== NaN ) {
         if (Number.isInteger(element) == true) {
            // console.log(element);
          nuevo.push(element)
          }else{ 
            final = false
            // console.log(final);
          }
       }
      //  console.log(nuevo, "nuevo");
      }
      
      if (final !== NaN ) {
        
        final = nuevo.join("")
      final = final[0] + final[1] +final[2] 
      // console.log(final," -final");
        return final 
      }else if (final == NaN){
        // console.log("Ultimo", final);
        
        return final  
      }
    // }
     
  },

  matchesPattern: function(str) {

  },

  isUSD: function(str) {

  }
};
