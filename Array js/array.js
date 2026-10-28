/* Bài 1: Tìm số lớn nhất */
function findMax(arr) {
    if (arr.length === 0) return undefined;

    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

console.log(findMax([1, 3, 5, 7, 9]));
console.log(findMax([10, 20, 30, 40, 50])); 
console.log(findMax([-5, -2, -1, -3])); 


/* Bài 2: Tính tổng các số lẻ */
function sumOddNumbers(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            sum += arr[i];
        }
    }

    return sum;
}

console.log(sumOddNumbers([1, 2, 3, 4, 5]));


/* Bài 3: Tìm số nhỏ nhất */
function findMin(arr) {
    if (arr.length === 0) return undefined;

    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}

console.log(findMin([5, 2, 8, 1, 4]));


/* Bài 4: Đếm số dương */
function countPositiveNumbers(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
    }

    return count;
}

console.log(countPositiveNumbers([-1, 2, 3, -4, 5])); 


/* Bài 5: Tính tổng mảng */
function sumArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5])); 

/* Bài 6: Tính trung bình cộng */
function calculateAverage(arr) {
    if (arr.length === 0) return 0;

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum / arr.length;
}

console.log(calculateAverage([10, 20, 30, 40, 50]));
console.log(calculateAverage([]));

/* Bài 7: Kiểm tra mảng tăng dần */
function isAscending(arr) {
    if (arr.length < 2) return false;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= arr[i - 1]) {
            return false;
        }
    }

    return true;
}

console.log(isAscending([1, 2, 3, 5]));
console.log(isAscending([1, 3, 2, 5])); 
console.log(isAscending([1])); 

/* Bài 8: Đếm phần tử lớn hơn value */
function countGreaterThan(arr, value) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > value) {
            count++;
        }
    }

    return count;
}
console.log(countGreaterThan([1, 5, 7, 2, 3], 3));
console.log(countGreaterThan([2, 3, 1, -6, 8], 5));
console.log(countGreaterThan([], 5));


/* Bài 9: Tính tổng xen kẽ */
function alternateSum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            sum += arr[i];
        } else {
            sum -= arr[i];
        }
    }

    return sum;
}

console.log(alternateSum([10, 5, 6, 3]));
console.log(alternateSum([1, 2, 3, 4, 5]));


/* Bài 10: Tổng bình phương */
function sumOfSquares(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * arr[i];
    }

    return sum;
}

console.log(sumOfSquares([1, 2, 3]));
console.log(sumOfSquares([4, 5, 6]));


/* Bài 11: Tính tổng các số chẵn */
function filterEvensAndSum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }

    return sum;
}

console.log(filterEvensAndSum([1, 2, 3, 4, 5, 6]));
console.log(filterEvensAndSum([12, 14, 15, 19, 20, 100]));


/* Bài 12: Tìm chuỗi dài nhất */
function findLongestWord(arr) {
    if (arr.length === 0) return undefined;

    let longest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }

    return longest;
}

console.log(findLongestWord(["apple", "banana", "cherry", "date"]));

console.log(findLongestWord(["hello", "world", "this", "is", "great"]));


/* Bài 13: Xếp loại điểm trung bình */
function calculateGrade(arr) {
    if (arr.length === 0) return "F";

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    let average = sum / arr.length;

    if (average >= 90) return "A";
    if (average >= 80) return "B";
    if (average >= 70) return "C";
    if (average >= 60) return "D";

    return "F";
}

console.log(calculateGrade([90, 95, 85]));
console.log(calculateGrade([80, 85, 82]));
console.log(calculateGrade([50, 55, 60]));


/* Bài 14: Tìm số bị thiếu */
function findMissingNumber(arr, n) {
    let total = n * (n + 1) / 2;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return total - sum;
}

console.log(findMissingNumber([1, 2, 4, 5, 6], 6));
console.log(findMissingNumber([3, 7, 1, 2, 8, 4, 5], 8));
console.log(findMissingNumber([1, 2, 3, 4], 4)); 

/* Bài 15: Loại bỏ phần tử trùng lặp */
function removeDuplicates(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let found = false;

        for (let j = 0; j < result.length; j++) {
            if (arr[i] === result[j]) {
                found = true;
                break;
            }
        }

        if (!found) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

/* Bài 16: Tìm các cặp có tổng bằng sum */
function findPairsWithSum(arr, sum) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === sum) {
                result.push([arr[i], arr[j]]);
            }
        }
    }

    return result;
}
console.log(findPairsWithSum([1, 2, 3, 4, 5], 5));

