function rentalCarCost(d) {  
  var dayDiscount = d >= 3 && d < 7 ? 20 : 0; 
  var  weekDiscount = d >= 7 ? 50 : 0; 
  return (d * 40) - dayDiscount - weekDiscount;
  }