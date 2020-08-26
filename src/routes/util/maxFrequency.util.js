const frequencyutil = require("./frequency.utils")
const mergeSort = require("./mergesort")

const maxFrequency = (stringToFreq)=>{
       let b= frequencyutil(stringToFreq)
       let arrayOfObjects = []
       b.map(elem=>elem.map(element=>arrayOfObjects.push(element)))
       return mergeSort(arrayOfObjects)
}
module.exports =maxFrequency