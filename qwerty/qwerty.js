//Полиндром

const polindrom = (str) =>  {
    str.toLowerCase();
    return str === str.split("").reverse().join("");
}

console.log(polindrom("avva"));

//Brackets

const bracket = (str) => {
    const stack = [];
    for(let i = 0; i < str.length; i++) {
        const bracket = str[i];
        if(bracket === "(") {
            stack.push(bracket);
        } else {
            const lastEl = stack.pop();
            if(!lastEl) return false;
        }
    }
    return !stack.length;
}

console.log(bracket("()()"));


//otsev

const arr = [1,1,2,3,3,4,4,5,6,6,7,7,8,8,9];

const foo = (array) => {
    const result = [];
    const uniqueValue = {};
    for(let i = 0; i < array.length; i++) {
        const currentEl = array[i];
        if(!(currentEl in uniqueValue)) {
            uniqueValue[currentEl] = 1;
        } else {
            uniqueValue[currentEl] += 1;
        }
    }

    const keys = Object.keys(uniqueValue);

    keys.forEach( key => {
        if(uniqueValue[key] === 1) {
            result.push(key);
        }
    })

    return result;
}

console.log(foo(arr));

/////////////////////////////////////////

const arr1 = [1,1,2,3,3,4,4,5,6,6,7,7,8,8,9];

const foo1 = (array) => {
    const uniqueValue = [];

    for(let i = 0; i < array.length; i++) {
        let count = 0;
        const currentItem = array[i];
        for(let j = 0; j < array.length; j++) {
            if(currentItem === array[j]) {
                count++;
            }
        }
        if(count === 1) {
            uniqueValue.push(currentItem);
        }
    }
    return uniqueValue;
}

console.log(foo1(arr1));


//FizzBuzz

const fizzBuzz = (n) => {
    if(n % 3 === 0 && n % 5 === 0) {
        return "FizzBuzz";
    }
    if(n % 5 === 0) {
        return "buzz";
    }
    if(n % 3 === 0) {
        return "fizz";
    }
    return n;
}

console.log(fizzBuzz(4));


//Hello

const hello = (str) => {
    for(let i = 0; i < str.length; i++) {
        console.log(`"${' '.repeat(i)}${str.substr(i)}"`);
    }
}

console.log(hello("Hello"));



// const hello = (str) => {
//     let n = 0;
//     let length = str.length;
//
//     while(n !== length) {
//         console.log(`"${' '.repeat(n)}${str.substr(n)}"`)
//         n++
//     }
// }

console.log(hello("Hello"));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

import promiseReducer from "./part_2";

const fn1 = () => {
    return Promise.resolve(1);
};

const fn2 = () =>
    new Promise((resolve) => {
        setTimeout(() => resolve(2), 1000);
    });

const fn3 = () => Promise.reject("You shall not pass!");

describe("promise reduce function", () => {
    it("should reduce promised 1 and 2 in multiply of them", async () => {
        const result = await promiseReducer([fn1, fn2], (acc, cur) => acc * cur, 1);
        expect(result).toBe(2);
    });
    it("should reduce rejected promise and promised 2 in multiply with initial 1", async () => {
        const result = await promiseReducer([fn3, fn2], (acc, cur) => acc * cur, 1);
        expect(result).toBe(2);
    });
    it("should reduce promised 1, rejected promise and promised 2 in sum with initial 5", async () => {
        const result = await promiseReducer(
            [fn1, fn3, fn2],
            (acc, cur) => acc + cur,
            5
        );
        expect(result).toBe(8);
    });
});
