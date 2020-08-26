const notToInclude =  [ 'the', 'a', 'of', 'and', 'in', 'is', 'to']
let arrayOfArrayOfObcts = [] ///  ex. [ [{},{},{}], [{},{}]]
const frequencyutil =(string)=>{
    arrayOfArrayOfObcts = []
    const arrayOfStrings = string.split(' ')
    arrayOfArrayOfObcts=arrayOfStrings.map((elem,index)=>{
        if(index>40)
        {
            return 
        }
        return []
    })

    let arrayofobjects = arrayOfStrings.map(elem=>{ 
        if(elem.trim().length==0|| notToInclude.includes(elem.trim()))
        {
            return 
        }
        return{elem,frequency:1}
    })
    arrayofobjects= arrayofobjects.filter(elem=>elem)
    arrayofobjects.map(elem=>{
        if(arrayOfArrayOfObcts[elem.elem.length-1]) //check if any string with same 
            // length have been already added
        {
            let existing =false
            for(i=0;i<arrayOfArrayOfObcts[elem.elem.length-1].length;i++)
                /// iterate over the same string length 
            {
                if(elem.elem == arrayOfArrayOfObcts[elem.elem.length-1][i].elem)
                {
                    arrayOfArrayOfObcts[elem.elem.length-1][i].frequency++
                    existing=true
                    break;
                }
            }
            if(!existing)
            {
                arrayOfArrayOfObcts[elem.elem.length-1].push(elem)
            }
     }else{
        arrayOfArrayOfObcts[elem.elem.length-1]=[].concat({...elem})
     }        
    })
    return arrayOfArrayOfObcts.filter(elem=>{if(elem){
        if(elem.length>0)
        {
            return true
        }
    return false; }})

}
module.exports=frequencyutil
// console.log(frequencyutil('asdasd asdasda asdas asdas a s aa  a aa a  asdasdasd a a a a a a adasda as das das das').filter(elem=>elem.length>0))