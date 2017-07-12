/**
            * Функция concat возвращает новый массив, состоящий из массива, на котором он был вызван, 
            * соединённого с другими массивами и/или значениями, переданными в качестве аргументов.
            *
            * @function concat
            * @param {Array} initialArray
            * @param {Array} arrayN
            * @return {Array}
            */

            const concat = function(initialArray, arrayN){
                var arrayResult = []; 
                for(var i = 0; i <arguments.length; i++){
                    for(var  j = 0; j <arguments[i].length; j++){
                        arrayResult.push(arguments[i][j]); 
                    }
                }
                return arrayResult; 
            }
           

            /**
            * Функция filter создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
            *
            * @function filter
            * @param {Array} array
            * @param {Function} callback
            * @return void
            */

            const filter = function(array, callback){
                var resArray = []; 
                for (var index in array){
                    if(callback(array[index], index, array)){
                        resArray.push(array[index]); 
                    }
                }
                return resArray; 
            }
            
        
            /**
            * Функция join объединяет все элементы массива в строку.
            *
            * @function join
            * @param {Array} array
            * @param {String} separator
            * @return {String}
            */

            const join = function (array, separator){
                var res = "";
                if(separator == undefined){
                    separator = ","; 
                }
                for(var i = 0; i < array.length - 1; i++){
                    res += array[i] + separator; 
                }
                return res + array[array.length-1];  
            }
            

            /**
            * Функция map создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.
            *
            * @function map
            * @param {Array} array
            * @param {Function} callback
            * @return {Array}
            */

            const map = function(array, callback){
                var res = []; 
                for(var index in array){
                    res[index] = callback(array[index], index, array); 
                }
                return res; 
            }
            
           /**
            * Функция sort на месте сортирует элементы массива и возвращает отсортированный массив.
            *
            * @function sort
            * @param {Array} array
            * @param {Function} compareFunction
            * @return void
            */

           const sort = function(array, compareFunction){
               if(compareFunction == undefined){
                    var count = array.length-1;
                    for (var i = 0; i < count; i++) {
                        for (var j = 0; j < count-i; j++){
                            if (array[j] > array[j+1]) {
                            var temp = array[j];
                            array[j] = array[j+1];
                            array[j+1] = temp;
                            }
                        }
                    }
               }
               else{
                   compareFunction(array); 
               }
           }
           

           /**
            * Функция reduce применяет функцию к аккумулятору и каждому значению массива (слева-направо), сводя его к одному значению.
            *
            * @function reduce
            * @param {Array} array
            * @param {Function} callback
            * @return void
            */

           const reduce = function(callback, array){
               var accum; 
                if (callback(0, array[0]) == 0){
                    accum = 1 
                }
                else{
                    accum = 0 
                }
                for(var i in array){
                    accum =callback(accum, array[i]); 
                }
                return accum; 
           }

           /**
            * Функция splice изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые.
            *
            * @function splice
            * @param {Array} array
            * @param {Number} start
            * @param {Number} deleteCount
            * @param {<T>} itemN
            * @return void
            */

            const splice = function(array, start, deleteCount, itemN){
                var partConst = array.slice(0, start); 
                var argsArray = [];
                var partTemp =array.slice(start); 
                var counter = 0; 
                for (var i = 3; i <arguments.length; i++){
                    argsArray[i-3] =arguments[i]; 
                } 
                while(counter!=deleteCount){
                    partTemp.shift(); 
                    counter++; 
                }
                res = partConst.concat(argsArray, partTemp); 
                array = []; 
                for (var j = 0; j < res.length; j++){
                    array[j] = res[j]; 
                }
                return array; 

            }

             /**
            * Функция slice возвращает новый массив, содержащий копию части исходного массива.
            *
            * @function slice
            * @param {Array} array
            * @param {Number} start
            * @return {Array}
            */

            const slice = function(array, start, end){
                if(end == undefined) end = array.length - 1; 
                var arrayRes = []; 
                while(start != end){
                    arrayRes.push(array[start]); 
                    start++; 
                } 
                return arrayRes; 
            }
            

            /**
            * Функция find возвращает значение в массиве, если элемент удовлетворяет условию проверяющей функции. 
            * В противном случае возвращается undefined.
            *
            * @function find
            * @param {Array} array
            * @param {Function} callback
            * @return {Number}
            */

            const find = function(array, callback){
                for(var index in array){
                    if(callback(array[index], index, array)){
                        return array[index]; 
                    }
                }
                return -1; 
            }
            
            /**
            * Функция reverse на месте обращает порядок следования элементов массива. Первый элемент массива становится последним, а последний — первым.
            *
            * @function reverse
            * @param {Array} array
            * @return void
            */

            const reverse = function(array){
                var pointerLeft = 0; 
                var pointerRight = array.length - 1; 
                while(pointerLeft != Math.ceil(array.length/2)){
                    var temp =array[pointerLeft]; 
                    array[pointerLeft] = array[pointerRight]; 
                    array[pointerRight] = temp; 
                    pointerLeft++; 
                    pointerRight--; 
                }
                return array; 
            }

            /**
            * TESTS 
            * 
            console.log(concat([1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3, 3])); 
            console.log(filter([-1, 4, 8, -9, 7], isPositive));
            function isPositive(element, index, array){
                return element > 0; 
            } 
            console.log(join([1, 2, 3])); 
            console.log(join([1, 2, 3], "-")); 
            function getLength(element, index, array){
                return element.length; 
            }
            console.log(map(["Lalal", "Cherry", "Ok"], getLength)); 
            console.log(sort(['арбузы', 'бананы', 'Вишня']));
            var total = reduce(function(a, b) {
                return a + b;
            }, [20, 20, 2, 3]);
            console.log(total);  
            console.log(reverse([5, 4, 3, 2, 1])); 
            console.log(reverse(["d", "c", "b", "a"])); 
            console.log(slice([1, 2, 8, 9, 10], 1, 4)); 
            console.log(slice([1, 2, 8, 9, 10], 3)); 
            console.log(splice([1, 2, 3, 4, 8], 1, 3, 9, 7, 2));
            function isPrime(element, index, array) {
                var start = 2;
                while (start <= Math.sqrt(element)) {
                    if (element % start++ < 1) {
                    return false;
                    }
                }
                return element > 1;
            }
            console.log(find([4, 5, 8, 12], isPrime)); //5
            console.log(find([4, 6, 8, 12], isPrime)); // -1 not found
            */
