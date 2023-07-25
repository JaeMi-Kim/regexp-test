let str = `
010-1234-5678.
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`

const h = `  the hello world    !



`

//const regexp = new RegExp('the', 'gi')
//const regexp = /the/gi
// console.log(str.match(regexp))
// const regexp = /fox/gi
// console.log(regexp.test(str))
// const regexp = /fox/gi
// console.log(str.replace(regexp, 'AAA')) // 보이기만 할뿐 기존은 변경되지 않는다.
// str = str.replace(regexp, 'AAA') // AAA로 변경되어서 저장된다. 
// console.log(str)

// console.log(str.match(/\.$/gim))

console.log(
  str.match(/d$/g)   //str.match(/^t/gim) 멀티와 대소문자 구분 없이 t를 찾음
)
console.log(
  str.match(/h..p/g)  //. http 
) 
console.log(
  str.match(/fox|dog/g) 
) 
console.log(
  str.match(/d{2}/g) 
) 
console.log(
  str.match(/d{2,3}/g) 
) 
console.log(
  str.match(/\b\w{2,3}\b/g) 
) 

console.log(
  str.match(/[0-9]{1,}/g) 
) 
console.log(
  str.match(/[가-힣]{1,}/g) 
) 
console.log(
  str.match(/\w/g) 
) 
console.log(
  str.match(/\bf\w{1,}\b/g)  // ['frozen', 'fox']
) 
console.log(
  str.match(/\d/g)  // 숫자만 검색
) 
console.log(
  str.match(/\d{1,}/g)  // 숫자가 연속적으로 한개이상 일치하는 부분을 찾는다 ['010', '1234', '5678', '7035', '60', '1234']
) 

console.log(
  h.match(/\s/g) // [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '\n', '\n', '\n', '\n']
) 
console.log(
  h.replace(/\s/g, '') //thehelloworld!
) 

console.log(
  str.match(/.{1,}(?=@)/g) //['thesecon']
) 
console.log(
  str.match(/(?<=@).{1,}/g) //['gmail.com']
) 