const setClass = (rate) => {
    if(typeof(rate)!=='number'&&rate <1) {
        return 'Khong duoc xep hang'
    }
    else if(rate===1){
        return 'D'
    }
    else if(rate===2){
        return 'C'
    }
    else if(rate===3){
        return 'B'
    }
    else 
        return 'A'
    
}