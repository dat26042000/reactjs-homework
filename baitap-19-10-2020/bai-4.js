const maxNumber = (a,b,c) => {
    let max = a
    if (b > max) 
        max = b
    if (c > max)
        max = c
    console.log('Số lớn nhất là',max);
}