var userCity=prompt("ENTER YOUR CITY")
   if(userCity.toLowerCase()==="karachi"){
    alert("the city of lights")
   }
   else{
    alert("nothing")
   }
////////////////////////////////////

var gender=prompt("ENTER YOUR GENDER")
  if(gender.toLowerCase()==="male"){
    alert("Welcome sir")
  }
  else{
    alert("welcome madam")
  }
/////////////////////////////////////
var traficLight = prompt("Enter Trafic Color");
      if (traficLight.toLowerCase() === "red") {
        alert("must Stop");
      }
      else if(traficLight.toLowerCase()==="yellow"){
        alert("ready to go")
      }
      else if(traficLight.toLowerCase()==="green"){
        alert("move now")
      }
      else{
        alert("Nothing")
      }
      //////////////////////////////////
      var carFuel=+prompt("Enter fuel")
      if(carFuel< 0.25){
        alert("please refuel your tank")
      }
      else{
        alert("Do not need to refuel")
      }
      //////////////////////////////////////
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}
if("car" < "cat"){
    alert("car is smaller than cat");
    }
////////////////////////////////

 var number = +prompt("Enter to check the number divisble by 3");
      if (number % 3 === 0) {
        alert("yes divide hoskta hai");
      } else {
        alert("nhi hoga");
      }
      ////////////////////////////////////
var evenOdd=+prompt("Enter to check the number is odd or even")
       if(evenOdd%2===0){
     alert("number even hai")
       }
       else{
       alert("number odd hai")
       }
/////////////////////////

var checkTemp=+prompt("check weather")
if(checkTemp>40){
    alert("temperature Hot")

}
else if(checkTemp<40 && checkTemp>29){
    alert("temperature normal")
}
else{
    alert("To Much cold")
}
////////////////////////////
var userGuess = +prompt("Guess umber between 1 to 10");
var scretnumber = 6;
if(userGuess <0 || userGuess > 10 ){
    alert("number can not be greater then 10 or less than 0" );
    
}
else{
    if(userGuess === scretnumber) {
        alert("Bingo ! correct number ");
    }
    else if(userGuess===5 || userGuess === 7){
    alert("close enough");
} else{
    alert (" hard luck next time");
}
}
/////////////////////////////////


     var sub=["SSC","HSC" ,"BCS" ,"BS" ,"BCOM" , "MS" , "M.Phil" , "phD"]
    document.write("qualifications<br>")
     document.write("1 SSC<br>")
   
        document.write("2 HSC<br>")
    
         document.write("3 BCS<br>")
    
         document.write(" 4 BS<br>")

         document.write("5 BCOM<br>")
  
         document.write(" 6 MS<br>")
      
         document.write("7 M.Phil<br>")
      
         document.write("8 PhD <br> <br>")

/////////////////////////////////////////////

 var copy=["sara", "sobia", "hamza"]
 var car=[320,230,480]
 var num=500;
 document.write("score of sara is 320.percentage : 64% <br>")
 document.write("score of sobia is 230.percentage : 46% <br>")
 document.write("score of hamza is 480.percentage : 96% <br> <br> <br>" )
 ///////////////////////////////////////////////

/////////////////////////////////



 let arr  =[320,230,480,120]
 document.write("scores of students: 320,230,480,120<br>")
 arr.sort();
 document.write("Order scores os sudent" + arr , "<br>", "<br>", "<br>")


 var tag=["Karachi", "Lahore","Islamabad","multan" + "<br>" , "<br>", "<br>"]
 document.write(tag)


 document.write("Array", "<br>")
 var big = ["this", "is","my","cat" , "<br>", "<br>"]
 big.join(',')
 document.write(big)
 

//  FIFO first in first out
var blog=["keyboard" ,"mouse" ,"printer" ,"monitor"]
 document.write("Out:<br>keyboard <br>")
 document.write("Out:<br>mouse <br>")
 document.write("Out:<br>printer <br>")
document.write("Out:<br>monitor <br><br><br>")

// LIFO  last in first out
 var frog=["keyboard" ,"mouse" ,"printer" ,"monitor"]
document.write("Out:<br>monitor <br>")
document.write("Out:<br>printer <br>")
document.write("Out:<br>mouse <br>")
document.write("Out:<br>keyboard <br>" , "<br>", "<br>")


/////////////////////////////////////////
var sub=["Apple","Samsung" ,"Motorola" ,"Nokia" ,"Haier" , "Sony"]
    
     document.write("1 Apple<br>")
   
        document.write("2 Samsung<br>")
    
         document.write("3 Motrola<br>")
    
         document.write(" 4 Nokia<br>")

         document.write("5 Haier<br>")
  
         document.write(" 6 Sony<br>" , "<br>", "<br>")
      
         
/////////////////////////////////

// var count = new Array(3);
// for (var i = 0; i < count.length; i++) {
//   arr[i] = new Array(3);
// }
// document.write(count);




var mat=[0,1,2,3,1,0,1,2,2,1,0,1]
document.write("0 1 2 3<br>")
document.write("1 0 1 2<br>")
document.write("2 1 0 1<br>" , "<br>", "<br>")



  var cage=[1,2,3,4,5,6,7,8,9,10]
  document.write("1<br>")
  document.write("2<br>")
  document.write("3<br>")
  document.write("4<br>")
  document.write("5<br>")
  document.write("6<br>")
  document.write("7<br>")
  document.write("8<br>")
  document.write("9<br>")
  document.write("10<br>" , "<br>", "<br>")



var person= prompt("enter table number")
var per=prompt("enter length of table")

  for(var i=1 ; i <=10; i++){
    document.write("2" + "x" + i + "=" + 2*i +"<br>" , "<br>", "<br>")
 }




var fruits = ["apple<br>",  "mango<br>", "banana<br>",  "strawberry<br>" , "orange<br>",]
for(var i=5; i<fruits.length; i++){
    text+=fruits[i] +"<br>";
}
document.write(fruits , "<br>", "<br>")

document.write("elemente at index 0 is apple<br>")
document.write("elemente at index 1 is banana<br>")
document.write("elemente at index 2 is mango<br>")
document.write("elemente at index 3 is orange<br>")
document.write("elemente at index 4 is strawberry<br> <br><br><br>")




document.write("Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15<br>")
document.write("Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1<br>")
document.write("Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20<br>")
document.write(" Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19<br>")
document.write(" Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k" , "<br>", "<br>")




var sweet= ["cake", "apple pie", "cookie", "chips", "patties"]
var gan=prompt("enter your favourite sweet")
document.write("cookie is available at index 2 in our bakery", "<br>", "<br>")


var far= ["cake", "apple pie", "cookie", "chips", "patties"]
var go=prompt("enter your favourite sweet")
document.write("sorry we donot have pastry" , "<br>", "<br>")







var array = [24, 53, 78, 91, 12];
var largest= 91;

for (i=0; i<=largest;i++){
    if (array>largest) {
        var largest=array[i];
    }
}

document.write(largest);
document.write("<br>")
document.write(" The largest nymber is 91")
document.write("<br>")




var array = [24, 53, 78, 91, 12];
var smallest= 12;

for (i=0; i<=largest;i++){
    if (array>smallest) {
        var largest=array[i];
    }
}

document.write("<br>")

document.write(smallest);
document.write("<br>")
document.write(" The smallest number is 12" , "<br>", "<br>")


document.write("5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100")
