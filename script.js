 "use strict";
 //1
 let array = [5, 25, 89, 120, 36];

array.push("javascript", "python");
 array.unshift("html", "css");
 for (let index in array) {
     console.log(index);
   }
 array.shift()
 array.pop()
 console.log(array);


//3.
 let array = [1, 2, 3, 4, 5];
 array.splice (3, 0, "a","b","c");
 console.log(array);



 //2
 let friuts =['banana', "orange", "pear"];
 console.log(friuts);
 friuts.push("apple", "pineapple");
 console.log(friuts);
 friuts.unshift("watermelon");
 console.log(friuts);
friuts.shift(); 
friuts.pop();
console.log(friuts);
 

//4
 let arr = [1, 2, 3, 4, 5];
 let i = 0;
 arr.forEach(function (x) {
   i += x;
 });
 console.log(i);
  

 //5
 for (let number = 100; number > 0; number--){
       console.log(number);
   }






 

 
    
 

 

 


  
  
   
   


 







 