// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(object, key, value){
  var newObj = Object.assign({}, object)
+  newObj[key] = value;
+  return newObj
}
