exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {

    // res =   bit ^ num
   
    return res
  },

  base10: function(str) {
    var num = parseInt(str, 2)
    return num
  },
  
  convertToBinary: function(num) {
   var res =(num.toString(2)) 
   res = res.toString()
    return res
  },

  multiply: function(a, b) {
    var resultado = a * b;
    var c = b.toString();
    c = (c.length-2)
    resultado=resultado.toFixed(c)
    resultado = parseFloat(resultado)
    return resultado
  }
};
 