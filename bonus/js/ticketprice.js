function calcTicketPrice() {

    //var + prompts
    var euroKm = 0.21;
    
    var km = document.getElementById("km").value;
    if (isNaN(km)) {
        alert("Kilometers input is not a valid number!")
    }
    
    var age = document.getElementById("age").value;
    if (isNaN(age)) {
        alert("Age input is not a valid number!")
    }
    
    //ticket price without discount
    var ticketPrice = (km * euroKm);

    //age discount
    if (age < 18) {
        ticketPrice = ticketPrice * 0.8;
    } else if (age >= 65) {
        ticketPrice = ticketPrice * 0.6; 
    }
    
    //fixed decimals
    ticketPrice = ticketPrice.toFixed(2); 

    //final price
    document.getElementById("ticket_price").innerHTML = ticketPrice + " €";  
    
  }
  








