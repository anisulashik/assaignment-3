

function kilometerToMeter(kilometer){

   if(kilometer<0){
       console.log("Invalid input");
   }else{
     var meter = kilometer*1000;
     return meter;
   }
 
}


function budgetCalculator(watch,phone,laptop){

    if(watch < 0 || phone < 0 || laptop < 0){

        console.log("Invalid Input")

    }
    else{
        var watchPrice=watch*50;
        var phonePrice=phone*100;
        var laptopPrice=laptop*500;

        var totalprice=watchPrice+phonePrice+laptopPrice;

    return totalprice;
    }
}



function hotelCost(days){
    if(days<0){
        console.log("Error Input")
    }
    else if(days<=10){
        var rent = days*100;

        return rent;
    }
    else if(days>=11 && days<=20 ){
        var previous = 100*10;
        rent = ((days-10)*80)+previous;

        return rent;
    }else{
        var previous = 100*10;
        rent = previous + (80*10);
        rent = ((days-20)*50)+rent;

        return rent;
    }
}



function megaFriend(arr){

    let longest ='';

    arr.map(function(str){
        if(str.length>longest.length){
            longest=str;
        }
    })

    return longest;
}

