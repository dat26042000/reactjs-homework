// Bài 1
const printMultiplication = number => {
    if (number >= 1 && number <= 10) {
        for(let i = 1; i <= 10; i++) {
        console.log(number + ' * ' + i + ' = ' + (number * i))
        } 
    } else console.log('Chỉ nhận giá trị từ 1 đến 10')
}

// Bài 2
const printEvenNumbers = number => {
    if (number >= 1 && number <= 30) {
        for(let i = 1; i <= number; i++) {
            if (i % 2 === 0) console.log(i)
        } 
    } else console.log('n chỉ nhận giá trị từ 1 đến 30')
}

// Bài 3
const getSum = number => {
    let sum = 0
    if (number >= 1 && number <= 30) {
        for(let i = 1; i <= number; i++) {
             sum += i
        } 
        return sum
    } else console.log('n chỉ nhận giá trị từ 1 đến 30')
}
// Bài 4
const getFactorial = number => {
    let factorial = 1
    if (number >= 1 && number <= 30) {
        for(let i = 1; i <= number; i++) {
            factorial *= i
        } 
        return factorial
    } else console.log('n chỉ nhận giá trị từ 1 đến 30')
}

// Bài 5
const countEvenNumbers = array => {
    let count = 0
    for (let i = 0; i < array.length ; i++) {
        if (array[i] % 2 === 0) {
            count += 1
        }
    } 
    return count
}

// Bài 6
array = ['A', 'C', 'A', 'A', 'B', 'D', 'B']
const deleteElement = array => {
    let newArray = []
    for (let i = 0; i < array.length ; i++) {
        if (newArray.indexOf(array[i]) === -1) {
            newArray.push(array[i])
        }
    } 
    return newArray
}

// Bài 7
const studentNames = [
    { id: 1, name: 'Nguyễn Thị Tèo' },
    { id: 2, name: 'Phạm Văn Bưởi' },
    { id: 3, name: 'Hoàng Văn Nam' },
    { id: 4, name: 'Vũ Ngọc Duy' },
    { id: 5, name: 'Nguyễn Minh Nhật' },
    { id: 6, name: 'Phí Duy Quân' },
    { id: 7, name: 'Trần Minh Minh' }
]
const studentScores = [
    { id: 1, score: 9.2 },
    { id: 2, score: 2.3 },
    { id: 3, score: 3.7 },
    { id: 4, score: 6.9 },
    { id: 5, score: 5.2 },
    { id: 6, score: 9.6 },
    { id: 7, score: 6.1 }
]
const students = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 }
]
const getStudentsArray = (studentNames, studentScores, students) => {
    for (let i = 0; i < studentNames.length; i++) {
        for (let j = 0; j < studentScores.length; j++) {
            if (studentNames[i].id === studentScores[j].id) {
                students[i].name = studentNames[i].name
                students[i].score = studentScores[j].score
            }
        }
    } 
    return students
}
