//1.Array creation and initialization
// let arr=[10,20,30,40,50];
// document.write("Array is : "+arr)




// //2.Array Manipulation
// let arr1=[57,67,93,49,37];
// arr1.push(40);
// document.write("Array after push : "+arr1 +"<br>");

// let fruits=["Apple","Mango","Grapes"];
// fruits.unshift("Banana");
// document.write("Array after unshift : "+fruits+"<br>");

// let names=["Nisha","Sharmila","Mizba","Sariga","Annu"];
// names.pop("Annu");
// document.write("Array after pop : "+names+"<br>");

// let roll=[42,38,53,11,52];
// roll.shift();
// document.write("Array after shift : "+roll);





// //3.Array Searching
// let numbers=[58,90,25,78,39,86];
// document.write("indexOf of 39 is : "+numbers.indexOf(39)+"<br>");

// let num=[37,64,92,68,50,35,92,75,89];
// document.write("lastIndexOf of 92 is : "+num.lastIndexOf(92)+"<br>");
// document.write("The number includes : "+num.includes(40)+"<br>");
// document.write("The number is : "+num.find(numb => numb>50));




// //4.Array Filtering
// let input=[54,28,24,26,31,73,94,51,23,79];
// let res=input.filter(OddEven);
// document.write("The even numbers are : "+res+"<br>");
// function OddEven(input){
//     return input%2==0   
// }

// let str=["Nisha","sharmila","annapoorna","Mizba"];
// let word=str.filter(str=>str.length<6);
// console.log(word);



// //5.Array Mapping
// let value=[1,2,3,4,5];
// let newValue=value.map(x=>x%2);
// document.write("Array after mapping : "+newValue);

// let colors=['blue',"red","green"];
// let newColors=colors.map(x=>x.toUpperCase());
// console.log(newColors);



//6.Array Sorting
let arr2=[254,845,489,245,408,356];
document.write("Ascending Order : "+arr2.sort()+"<br>");
document.write("Array after reverse : "+arr2.reverse());



//7.Array Joining and splitting
let str="Hello world";
document.write("String before split: ",str,"<br>")
document.write("String after split: ",str.split(" "),"<br>");
document.write("String after join : ",str.split(" ").join("-"),"<br>");


//8.Array destructuring
const fruit= ["Bananas", "Oranges", "Apples", "Mangos"];
let [fruit1, fruit2] = fruit;
document.write("Fruits are : "+[fruit1,fruit2]);

//9.Array Spreading
let val1=[1,2,3];
let val2=[4,5,6];
let newVal=[...val1,...val2];
document.write("Array after spreading : "+newVal+"<br>");

//10.Array Finding Max and Min
let values=[23,86,57,45,75,58];
let result=Math.max(...values);
document.write("Max value is : "+result+"<br>");
let result2=Math.min(...values);
document.write("Min value is : "+result2+"<br>");


//11.Flattening Arrays
const myArr = [[11,12],[13,14],[15,16],17,[19,20,[34,75]]];
const newArr = myArr.flat();
document.write("Array after flattening : "+newArr+"<br>");


//12.Checking Duplicate array elements
let arry=[32,75,69,25,46,32];
for(let i=0;i<arry.length-1;i++)
{
   for(let j=0;j<arry.length;j++)
   {
    if(arry[i]==arry[j] && i!=j)
    {
        document.write("Duplicate element is : "+arry[i]+"<br>");
    }
   }
}


//13.Merging the arrays
let animals1=["dog","cat","deer"];
let animals2=["tiger","lion","giraffe"];
let res_animals=animals1.concat(animals2);
document.write("Animals are : "+res_animals+"<br>");



