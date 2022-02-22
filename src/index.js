
// You should implement your task here.

module.exports = function towelSort (num) {
  let newNum=[]
  num.forEach((Element)=>{
    Element.forEach((Element) =>{
      newNum.push(Element)
    })
    console.log(newNum)
  })
  newNum.sort(function(a, b) {
    return a - b;
  });
  return (newNum)
}