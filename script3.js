function reverseNum(numArray) {
  let reversedArray = [];
  let index = 0;  

  for (let i = numArray.length - 1; i >= 0; i--) {
    reversedArray[index] = numArray[i]; 
    index++; 
  }
  
  return reversedArray;
}

let num = [5, 3, 2, 4, 4, 3];
console.log(reverseNum(num)); 


for(let i=0;i<=15;i++){
    if(i%2===0){
        console.log(i,"is even");
    }
    else{
        console.log(i,"is odd");
    }
}

function insertDashes(NUM) {
  let arr = [];
  for (let i = 0; i < NUM.length; i++) {
    arr[i] = NUM[i]; 
  }

  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result = result + arr[i];

    let current = arr[i];
    let next = arr[i + 1];

    if (current % 2 === 0 && next % 2 === 0) {
      result = result + "-";
    }
  }

  return result;
}

console.log(insertDashes("025468")); 

function Agechecker(Age){
    if(Age>=18){
        console.log("The user is Adult");
    }
    else{
        console.log("The user is Minor");
    }
    
}
Agechecker(24);