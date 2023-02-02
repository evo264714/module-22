function maxInArray(numbers){
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element =numbers[index];
        if(element > largest){
            largest = element;
        }
        
    }
    return largest;
}

const heights = [167, 190, 120, 165, 265, 137];
const tallest = maxInArray(heights);
console.log('Tallest person is: ', tallest);


function minInArray(numbers){
    let lowest = numbers [0];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element < lowest){
            lowest = element;
        }
    }
    return lowest;
}

const height = [167, 190, 120, 165, 265, 137]
const shortest = minInArray(height);
console.log('Shortest person is: ', shortest);