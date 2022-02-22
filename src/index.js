
// You should implement your task here.

module.exports = function towelSort (num) {
  let newNum=[]
  let a=0
  if (num==[]){
  return ([])
  }else{num.forEach((Element)=>{
  a=a+1
  if (a%2 !=0){  
    console.log(a)
    Element.forEach((Element) =>{
    newNum.push(Element)
    })
    }else{
      Element = Element.reverse() 
      Element.forEach((Element) =>{
      newNum.push(Element)
    })
    }
  })
  return (newNum)
  }
}