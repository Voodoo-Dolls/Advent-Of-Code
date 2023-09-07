let ruckSacks =`vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`

let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

alphabet = alphabet.split("");




let sacks = ruckSacks.split("\n")

let sorter = (ruckSacks) =>{
    let sharedLetters = [];
    let points = 0;
    ruckSacks.forEach((ruckSack)=>{
        let firstHalf = ruckSack.slice(0, ruckSack.length/2);
        let secondHalf = ruckSack.slice(ruckSack.length/2, ruckSack.length);
        firstHalf = firstHalf.split("");
        secondHalf = secondHalf.split("");
        console.log(firstHalf);
        console.log(secondHalf);
    })
    console.log(sharedLetters);
    sharedLetters.forEach((letter)=>{
        let index = alphabet.findIndex((check)=>{
            return check === letter;
        });
        points += index + 1;
        // console.log(index + 1);
    });
}


sorter(sacks);