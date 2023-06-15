/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */


// APPROACH 1 INCOMPLETE

// var findTheDifference = function(s, t) {
//     if(s.length === 0) return t
//     else if(t.length === 0) return s
//     else{
//         // let obj = {}
//         // let mergeString = s + t
//         // for(let value of mergeString){
//         //     // console.log("value", value)
//         //     if(!obj[value]){
//         //         obj[value] = 1
//         //     }
//         //     else{
//         //         obj[value] += 1
//         //     }
//         // }

//         // console.log(obj)
//         // for(let key in obj){
//         //    if(obj[key] == 1){
//         //        return key
//         //    }
//         // }

//     }
// };



//  APPROACH 2

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    if(s.length === 0) return t
    else if(t.length === 0) return s
    else{
        let sumOfs = s
                .split('')
                .map(char => char.charCodeAt(0))
                .reduce((current, previous) => previous + current)

    let sumOft = t
                .split('')
                .map(char => char.charCodeAt(0))
                .reduce((current, previous) => previous + current)

    return String.fromCharCode(Math.abs(sumOfs - sumOft))
    }
    
};
console.log(findTheDifference("abcd", "abcd"))