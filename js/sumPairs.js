exports.sumPairs = function(arr, find) {
    let result = []
    for(let i = 0; i < arr.length; i++) {
        let outer = arr[i]
        // console.log(outer)
        for(let j = i + 1; j < arr.length; j++){
            let inner = arr[j]
            // console.log('inner=', arr[j])
            let counting = outer + inner
            if(counting === find){
                result.push([outer, inner])
            }
        }
    }
    if(result.length === 0){
        return 'unable to find pairs'
    }
    return JSON.stringify(result)
    
};
