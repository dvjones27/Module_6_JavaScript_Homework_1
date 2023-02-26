//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max", "HAS", "PuRple", "dog"]

function findWords() {
    //Your code goes here
    //My code

    for (let i = 0; i < dog_names.length; i++) {
        if (dog_string.includes(dog_names[i])) {
            console.log(`Matched dog_name: ${dog_names[i]}`)
        } else {
            console.log('No Matches')
        }
    }
    console.log()
}

console.log(findWords())



//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let given_arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"]
let output_arr = []

function replaceEvens(arr) {
    //code goes here
    //My code
    let output_arr = []
    for (let i = 0; i < given_arr.length; i++) {
        if (i % 2 == 0) {
            output_arr.push(`Even Index`)
        } else {
            output_arr.push(`${given_arr[i]}`)
        }

    }
    return output_arr
}

console.log(replaceEvens())

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]