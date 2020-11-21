/**
 *
 * 全排列函数
 * @param {Array} arr
 * @returns {Array}
 */
function permutations(arr){
	let targetArr = [];
	let cacheArr = [];
	function backTrack(cacheArr){
		if(cacheArr.length === arr.length){
        targetArr.push(cacheArr)
        return 
        }
        for(let i = 0; i < arr.length; i ++){
                if(!cacheArr.includes(arr[i])){
                    cacheArr.push(arr[i]);
                    backTrack(cacheArr.slice());
                    cacheArr.pop();
                }
        }
	}
	backTrack(cacheArr)
	return targetArr;	
}