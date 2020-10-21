const equation = (a,b,c) => {
    const delta = b*b - 4*a*c
    if(a == 0 && b == 0)
    {
        console.log('PT vô nghiệm')
    } 
    else if(a == 0 && b != 0)
    {
        console.log ('PT nghiệm = ',-c/b)
    } 
    else if(delta < 0)
    {
        console.log ('PT vo nghiem')
    }
    else if(delta == 0)
    {
        console.log ('PT có nghiệm kép X1 = X2 = ',-b/2*a)
    }
    else 
    console.log('PT co 2 nghiệm X1 = '+((-b+Math.sqrt(delta))/(2*a))+'X2= '+((-b-Math.sqrt(delta))/(2*a)))
}