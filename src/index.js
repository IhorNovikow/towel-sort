
// You should implement your task here.

module.exports = function towelSort (num) {
  let newNum=[]
  let newNumTwo=[]
  num.forEach(Element=>{
    newNum.push(Element.join(''))
  })
  newNum=newNum.join('').split('')
  newNum.forEach(Element=>{
    newNumTwo.push(+Element)
  })
   newNumTwo.sort(function(a, b) {
    return a - b;
  });
  return (newNumTwo)
