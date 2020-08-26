function mergeSort(array)
{   let Data=  Date.now()
  const Sorting=(subArray)=>{
   if(subArray.length==1)
     {
        return subArray
     }
   let mid = Math.floor(subArray.length/2)
    let A= mergeSort(subArray.splice(mid))
    let B=mergeSort(subArray)
    let C =Merged(A,B)
   return C
  }
  return Sorting(array)
}
const Merged=(LeftHalf,RightHalf)=>{
   let finalArr=[]
   while(LeftHalf.length>0 && RightHalf.length>0)
   {
       if(LeftHalf[0].frequency<=RightHalf[0].frequency)
       {
           finalArr.push(LeftHalf[0])
           LeftHalf.shift()
       }
       else if(LeftHalf[0].frequency>RightHalf[0].frequency){
           finalArr.push(RightHalf[0])
           RightHalf.shift()
       }
   }
   finalArr.push(...LeftHalf,...RightHalf)
   return finalArr
}
module.exports =mergeSort