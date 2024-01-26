function sum (x){
    return function (y){
        return  function (z){
            return x+y+z
        }
    }
}