exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var neu = []
    for (let i = 0; i < str.length; i++) {
      const element = str[i];
      console.log(element.length);
     
      var count = (element.match(/is/g  ) || []).length;
      console.log(count);
    



      if (str[i+1] !== str[i]) {
        console.log("iwales");
        neu.push(element.repeat(amount))
        console.log(neu);
      
        
      }
    }
    var final = neu.join("")
    console.log(final,"benis");
    

    console.log(final);
    return  final
      
  },

  wordWrap: function(str, cols) {

  },

  reverseString: function(str) {
    var neu = [];
    for (var i = str.length - 1; i >= 0; i--) { 
      neu += str[i];
    }
    return neu


  }
};
