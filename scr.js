// davaleba 1 1*  

function customReplace(originalString, valueToReplace, valueToReplaceWith) {
  let result = '';
  let i = 0
  const originalLength = originalString.length;
  const replaceLength = valueToReplace.length;


  while (i < originalLength) {
   
    if (originalString.substring(i, i + replaceLength) === valueToReplace) {      
        result += valueToReplaceWith
        i += replaceLength;
    } else {
        result += originalString[i]; 
        i++;
    }
}

return result;
}

const original = "Hello world! Hello everyone!";
const result = customReplace(original, "Hello", "Hi");
console.log(result);  