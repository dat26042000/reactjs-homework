const bonus = (money) => {
    if(money <= 100000000)
    {
        console.log("Tiền hoa hồng= ",money * 5 / 100)
    }
    else if (money >100000000 && money <= 300000000) 
    {
        console.log("Tiền hoa hồng= ",money * 10 / 100)
    }
    else 
    {
        console.log("Tiền hoa hồng= ",money * 20 / 100)
    }
}