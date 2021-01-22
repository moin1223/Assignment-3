

// Problem:01

function kilometerToMeter(kilometer){
    var Meter=kilometer*1000;
    return Meter;

}
var convert=kilometerToMeter(5);
console.log(convert);

// 2.Problem:02

function budgetCalculator(watch,phone,laptop){

    var watchPrice=watch*50;
    var phonePrice=phone*100;
    var laptopPrice=laptop*500;
    var totalcost=watchPrice+phonePrice+laptopPrice;
    return totalcost;

}
var result=budgetCalculator(1,1,1);
console.log(result);

// Problem:03

function hotelCost(day){
    var animal=0;

if(day<=10){
  
    rent=day*100;
}
else if(day<=20){

    var firstPart=10*100;
    var remaining=day-10;
    var secondPart=remaining*80;
    rent=firstPart+secondPart;
}
else{
    var firstPart=10*100;
    var secondPart=10*80;
    var remaining=day-20;
    var thirdPart=remaining*50;
    rent=firstPart+secondPart+thirdPart;


}
return rent;
}

 var count=hotelCost(22);
 console.log(count);


// Problem:04

function megaFriend(arr){

    var result='';
    for(var i=0;i<arr.length;i++){
        var currentItem=arr[i];
        if(currentItem.length>result.length){
            result=arr[i];
        }
    }
    return result;
}
var bigString=['Rasel','moin','naimuddin']
console.log(megaFriend(bigString))




























