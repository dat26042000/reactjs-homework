const phoneCharges = (time) => {
    if(time<=50){
        console.log('Cước điện thoại là: ',(25000 + time*600))
    }
    else if (time > 50 && time < 200) {
        console.log('Cước điện thoại là: ',(25000 + 50*600 + (time-50)*400))
    }
    else 
    console.log('Cước điện thoại là: ',(25000 + 50*600 + 150*400 + (time-200)*200))
}