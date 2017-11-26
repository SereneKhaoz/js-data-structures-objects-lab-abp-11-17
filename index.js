// Write your solution in this file!
const driver = {
  name: 'Sam',
  address: '11 Broadway'

}

function updateDriverWithKeyAndValue(object, key, value){
 const newDriver = Object.assign({}, object)
 newDriver [key] = value;
return newDriver;
}
