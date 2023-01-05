function createDict(keys, values){
    //create object and new value array
    let obj = {}
    let newVal = []
  
  
    //add values and nulls to newVal
    for(let i = 0; i<keys.length; ++i){
      if(values[i]<keys.length+1){
        newVal.push(values[i])
      }else if(values[i]=== undefined ){
        newVal.push(null)
      }
    }
    
  
    //iterate thtough keys to create properties in object
    for(let i = 0; i < keys.length; i++){
      obj[keys[i]] = newVal[i]
    }
    
    return obj
  }

/* 
Better code
function createDict(keys, values) {
    let obj = {}
    
    for (let i = 0; i < keys.length; i++) {
      obj[keys[i]] = i < values.length ? values[i] : null
    }
    
    return obj
}
*/
