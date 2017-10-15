let arr = [-246,753,-468,475,-683,476,-583,746,-581];



//1) найти сумму элементов массива
//
function summa(brr){
    let summ = 0
    brr.forEach(function(item){
        summ += item;
    });
    console.log(summ);
};
//2) получить массив который состоит из отрицательных элементов из исходного массива
//
function negativeArr(brr){
    var negArr = brr.filter(function(number){
        return number < 0;
    });
    console.log(negArr);
};
//3) отсортировать массив по возрастанию
function sort(brr){
    let arrSorted = brr.sort(function(a, b){
        if (a > b) return 1;
        if (a < b) return -1;
    });
    console.log(arrSorted);
};
//
//4) получить массив из тех же элементов, только они должны быть в обратном порядке
//
function reverse(brr){
    let arrReverse = brr.reverse();
    console.log(arrReverse);
};

//5) получить массив из элементов деленных на два (например, если был массив [4, 3, 8] то получим [2,1.5,4])
function devidedByTwo(brr){
    let devidedArr = brr.map(function(item){
        return item / 2; 
    })
    console.log(devidedArr);
};

summa(arr);
negativeArr(arr);
sort(arr);
reverse(arr);
devidedByTwo(arr);