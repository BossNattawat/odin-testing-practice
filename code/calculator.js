
const calculator = {
    add: function(x, y){
        if(!isNaN(x) && !isNaN(y)){
            return x + y
        }
    },

    subtract: function(x, y){
        if(!isNaN(x) && !isNaN(y)){
            return x - y
        }
    },

    divide: function(x, y){
        if(!isNaN(x) && !isNaN(y)){
            return x / y
        }
    },

    multiply: function(x, y){
        if(!isNaN(x) && !isNaN(y)){
            return x * y
        }
    },
}

module.exports = calculator