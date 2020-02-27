function palindrome(string) {
  let reverseString = string.split('').reverse().join('')
  if (reverseString === string) {
    return 'palindrome';
  } else {
    return 'not possible';
  }
}
console.log(palindrome('abccba'))

// const string = 'fffsfff'
// const stringArr = string.split('')
// const reverseString = string.split('').reverse().map((item, index) => {
//   return {
//     if (stringArr[index] !== reverseString[index]) {
//
//   }
// }
// })
//
// console.log(reverseString, 'reverseString')
// console.log(stringArr, 'stringArr')