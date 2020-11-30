/**
 *函数扁平化
 *
 * @param {*} arr
 * @returns
 */
function flat(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            //一定要记住把合并好的数值赋值给原来的数组这步很重要
            newArr = newArr.concat(flat(arr[i])) 
        }else{
            newArr[i] = arr[i]
        }
    }
    return newArr
}