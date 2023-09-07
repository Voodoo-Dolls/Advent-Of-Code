let ruckSacks =`vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`

const alphabet = "abcdefghijklmnopqrstuvwxyz";


let sacks = ruckSacks.split("\n")

let sorter = (ruckSacks) =>{
    let sharedLetters = [];
    let points = 0;
    ruckSacks.forEach((ruckSack)=>{
        let firstHalf = ruckSack.slice(0, ruckSack.length/2);
        let secondHalf = ruckSack.slice(ruckSack.length/2, ruckSack.length);
        firstHalf = firstHalf.split("");
        secondHalf = secondHalf.split("");
        firstHalf.forEach((letter)=>{
            if (secondHalf.includes(letter)){
                sharedLetters.push(letter);
            }
        })
    })
    console.log(sharedLetters);
}

sorter(sacks);