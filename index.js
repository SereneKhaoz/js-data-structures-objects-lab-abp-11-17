// Write your solution in this file!
const driver = {
  name: 'Sam',
  address: '11 Broadway'

}

function updateDriverWithKeyAndValue(object, key, value){
 newDriver = Object.assign({}, object)
 newDriver [key] = value;
return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(object, key, value){
  object[key]= value;
  return object
}

function deleteFromDriverByKey(){
  newObj = {...driver};
  delete newObj.name;
  return newObj
}
