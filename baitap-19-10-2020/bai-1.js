const salaryCalculation = (salary) => {
    if(salary >= 15000000)
    {
        console.log("Thuế thu nhập: ",salary * 30 / 100)
        console.log("Lương ròng: ",salary * 70 / 100)
    }
    else if (salary >= 7000000 && salary < 15000000) 
    {
        console.log("Thuế thu nhập: ",salary * 20 / 100)
        console.log("Lương ròng: ",salary * 80 / 100)
    }
    else if (salary >= 0 && salary < 7000000) 
    {
        console.log("Thuế thu nhập: ",salary * 10 / 100)
        console.log("Lương ròng: ",salary * 90 / 100)
    }
}