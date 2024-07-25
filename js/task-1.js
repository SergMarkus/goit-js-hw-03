function slugify(title) {
    return title
        .split(" ")
        .join("-")
        .toLowerCase();
    
}
console.log(slugify("Arrays for begginers"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));


// function slugify(title) {

//     const wordsArr = title.split(" ");
//     const wordsStr = wordsArr.join("-");
//     const wordLowerCase = wordsStr.toLowerCase();

//     return wordLowerCase; 
// }
// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));