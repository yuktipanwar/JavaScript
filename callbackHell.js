/**
 * Callback hell
 * Pyramid of doom
 * Inversion of control
 */

//bookingHotel --> proceedPayment -->ShowBookingStatus -->UpdateBookingHistory

bookHotel(hotelId, function(){ //1
    if(error){
        handleError
    }else{
        proceedToPayment(hotelId, function(){ //2
            if(error){
                handleError
            }else{
                showBookingStatus(function(){  //3
                    if(error){
                        handleError
                    }else{
                        updateBookingkHistory(function(){  //4
                            if(error){
                                handleError
                            }else{
                                sucess
                            }
                        })
                    }
                })
            }
        })
    }
})


/**to avoid this we have promises */