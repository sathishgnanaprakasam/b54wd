/*
    Arrow Functions:
        - Arrow functions are a new way to write functions in ES6.
        - Arrow functions are anonymous functions.

    Syntax:

        // Arrow function with no parameters
        () => {
            // Code goes here
        }
*/

// let division = (m, n) => {
//     return m / n;
// }

// console.log(division(5, 2));

let reverse = (numbers) => {
    let reversed = [];

    for (let index = numbers.length - 1; index >= 0; index--) {
        reversed.push(numbers[index]);
    }

    console.log(reversed);
}

let numbers = [4, 6, 7, 10, 12];

reverse(numbers);

/*
    numbers = [4, 6, 7, 10, 12];
        index=[0][1][2][3][4]

    reversed = [];

    Loop:
        index = numbers.length - 1
              = 5 - 1
              = 4 >= 0, True
            
            reversed.push(numbers[4])
            => reversed.push(12)

    reversed = [12]
        
        
        index = 3 >= 0, True

            reversed.push(numbers[3])
            => reversed.push(10)
    
    reversed = [12, 10]

        index = 2 >= 0, True

            reversed.push(numbers[2])
            => reversed.push(7)
    
    reversed = [12, 10, 7]

        index = 1 >= 0, True

            reversed.push(numbers[1])
            => reversed.push(6)
    
    reversed = [12, 10, 7, 6]

        index = 0 >= 0, True

            reversed.push(numbers[0])
            => reversed.push(4)
    
    reversed = [12, 10, 7, 6, 4]

        index = -1 >= 0, False

            break the loop
*/

/*
    resume = {
        name: 'sathish',
        email: 'sathish@gmail.com',
        phone: 9999999999,
        education: {
            school: 'abc school',
            college: 'xyz college'
        },
        experience: {
            company: 'abc company',
            designation: 'developer'
        },
        skills: ['java', 'javascript', 'python', 'c++']
    }

    json = '{"name": "sathish", "email": ""}'
*/