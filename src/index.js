// const config1 = [['(', ')']];
// const config2 = [['(', ')'], ['[', ']']];
// const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
// const config4 = [['|', '|']];
// const config5 = [['(', ')'], ['|', '|']];
// const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8'], ['|', '|']];
// const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];
// function check(str, bracketsConfig) {
//   let dict = {}
//   let keysArr = [];
//   let valArr = [];
//   for(let elem of bracketsConfig){
//     keysArr.push(elem[0]);
//     valArr.push(elem[1]);
//     dict[elem[0]] = elem[1];
//   }
//   let arr = [];
//   for(let item of str){
//     console.log(item);
//     if(keysArr.includes(item) && valArr.includes(item)){
//       if(arr.at(-1)===item){
//         arr.pop()
//       }
//       else{
//         arr.push(dict[item])
//       }
//     }
//     else if (keysArr.includes(item)){
//       arr.push(dict[item])
//     }
//     else if(valArr.includes(item)){
//       let br = arr.pop();
//       if (br===item){
//         continue;
//       }
//       else{
//         return false;
//       }
//     }
//     console.log(arr);
//   }
//   console.log("arr");
//   if(arr.length!==0){
//     return false;
//   }
//   else{
//     return true;
//   }
// }
// console.log(check('111115611111111222288888822225577877778775555666677777777776622222||', config6))
module.exports = function check(str, bracketsConfig) {
  let dict = {}
  let keysArr = [];
  let valArr = [];
  for(let elem of bracketsConfig){
    keysArr.push(elem[0]);
    valArr.push(elem[1]);
    dict[elem[0]] = elem[1];
  }
  let arr = [];
  for(let item of str){
    if(keysArr.includes(item) && valArr.includes(item)){
      if(arr.at(-1)===item){
        arr.pop()
      }
      else{
        arr.push(dict[item])
      }
    }
    else if (keysArr.includes(item)){
      arr.push(dict[item])
    }
    else if(valArr.includes(item)){
      let br = arr.pop();
      if (br===item){
        continue;
      }
      else{
        return false;
      }
    }
  }
  if(arr.length!==0){
    return false;
  }
  else{
    return true;
  }
}