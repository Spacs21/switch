// masalalar 1-10
function task1(num) {
    if (num > 0) {
        num = num + 1;
    }
    console.log("Task 1 result:", num);
}

function task2(num) {
    if (num > 0) {
        num = num + 1;
    } else {
        num = num - 2;
    }
    console.log("Task 2 result:", num);
}

function task3(num) {
    if (num > 0) {
        num = num + 1;
    } else if (num < 0) {
        num = num - 2;
    } else {
        num = 10;
    }
    console.log("Task 3 result:", num);
}

function task4(num1, num2, num3) {
    let count = 0;
    if (num1 > 0) {
        count = count + 1;
    }
    if (num2 > 0) {
        count = count + 1;
    }
    if (num3 > 0) {
        count = count + 1;
    }
    console.log("Task 4 result:", count);
}

function task5(num1, num2, num3) {
    let positiveCount = 0;
    let negativeCount = 0;
    if (num1 > 0) {
        positiveCount = positiveCount + 1;
    }
    if (num2 > 0) {
        positiveCount = positiveCount + 1;
    }
    if (num3 > 0) {
        positiveCount = positiveCount + 1;
    }
    if (num1 < 0) {
        negativeCount = negativeCount + 1;
    }
    if (num2 < 0) {
        negativeCount = negativeCount + 1;
    }
    if (num3 < 0) {
        negativeCount = negativeCount + 1;
    }
    console.log("Task 5 result: Positive =", positiveCount, "Negative =", negativeCount);
}

function task6(num1, num2) {
    let max;
    if (num1 > num2) {
        max = num1;
    } else {
        max = num2;
    }
    console.log("Task 6 result:", max);
}

function task7(num1, num2) {
    let min;
    if (num1 < num2) {
        min = num1;
    } else {
        min = num2;
    }
    console.log("Task 7 result:", min);
}

function task8(num1, num2) {
    if (num1 > num2) {
        console.log("Task 8 result: First =", num1, "Second =", num2);
    } else {
        console.log("Task 8 result: First =", num2, "Second =", num1);
    }
}

function task9(a, b) {
    if (a > b) {
        let temp = a;
        a = b;
        b = temp;
    }
    console.log("Task 9 result: A =", a, "B =", b);
}

function task10(a, b) {
    if (a != b) {
        a = a + b;
    } else {
        a = 0;
    }
    console.log("Task 10 result: A =", a, "B =", b);
}

// qiymatlar
task1(5);
task2(-3);
task3(0);
task4(1, -2, 3);
task5(1, -2, 3);
task6(10, 20);
task7(10, 20);
task8(10, 20);
task9(10, 5);
task10(10, 10);


// switch 
function getDayName(dayNumber) {
    let dayName;

    switch (dayNumber) {
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        case 7:
            dayName = "Sunday";
            break;
        default:
            dayName = "Invalid day";
    }


    document.getElementById("code-example").innerText = `The day is: ${dayName}`;
}

getDayName(3);

// img
let imgHover = document.getElementById('imghover')
function imgShow(){
    imgHover.style.display = "block"
}
function imgClose(){
    imgHover.style.display = "none"
}
