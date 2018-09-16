exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function (arr, item) {
    var aux = 0
    if (item > arr.length) {
      aux = (-1)
      return aux
    } else {
      for (aux = 0; aux < arr.length; aux++) {
        if (aux === (item - 1)) {
          return aux
        }
      }
    }
    return aux
  },
  //sumar la suma de todos los elementos de un arreglo
  sum: function (arr) {
    var suma = 0
    var aux = 0
    for (var i = 0; i < arr.length; i++) {
      aux = arr[i]
      suma += aux
    }
    return suma
  },
// eliminar todos las instancias de un item en un array 
  remove: function (arr, item) {//item = 2
    var arrayFinal =[];
    var arrayItem = [];
    // arr.sort()
    for (let i = 0; i < arr.length; i++) {
      var aux =arr[i]
        if ( item  ===  arr[i]){  
          arrayItem.push(arr[i])
        }else{
          arrayFinal.push(arr[i])
        }
    }
    return arrayFinal
  },

  removeWithoutCopy: function (arr, item) {
    // var aux = 0
    // arr.sort()
    // for (let i = 0; i < arr.length; i++) {
    //     if ( arr[i] === item ){  
       
    //   arr.splice(i,item)
    //   }
    //   console.log(arr);
    // }
    // return arr
  },

  append: function (arr, item) {
       arr.push(item)
    return arr
    
  },

  truncate: function (arr) {
    arr.pop()
    return arr
  },

  prepend: function (arr, item) {
    arr.unshift(item)
    return arr
  },

  curtail: function (arr) {
    arr.shift()
    return arr
  },

  concat: function (arr1, arr2) {
    var arr 
    arr = arr1.concat(arr2)
    return arr
  },

  insert: function (arr, item, index) {
    arr.splice(index, 0, item)
    return arr
  },

  count: function (arr, item) {
    var aux
    var veces = 0
    for (let i = 0; i < arr.length; i++) {
      aux = arr[i];
      if (aux == item){
        veces++
      }
    }
    return veces
  },

  duplicates: function (arr) {
      var otro = arr.slice().sort();
      var resultado = []
    for (let i = 0; i < arr.length; i++) {
      if (  otro[i+1] == otro[i]) {
        resultado.push(otro[i])
      }
    }
    
    console.log(resultado);
    
    return resultado
  },

  square: function (arr) {
    var nuev = []
    for (let i = 0; i < arr.length; i++) {
      var element = arr[i];
      var cuad = Math.pow(element,2);
      nuev.push(cuad)
    }
    return nuev
  },

  findAllOccurrences: function (arr, target) {
    var aux
    var index = []
    for (let i = 0; i < arr.length; i++) {
      aux = arr[i];
      if (aux == target){
        index.push(i)
      }
    }
    return index
  }
};