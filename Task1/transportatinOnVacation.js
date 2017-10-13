function rentalCarCost(d) {  
  var dayDiscount = d >= 3 && d < 7 ? 20 : 0; 
  var  weekDiscount = d >= 7 ? 50 : 0; 
  var rentCarCost=(d * 40) - dayDiscount - weekDiscount;
  return rentCarCost;
  }