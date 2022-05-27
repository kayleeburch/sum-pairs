def sum_pairs(given_arr, find_num):
    result = []
    for i in range(len(given_arr)):
        outer = given_arr[i]
        for j in range(i + 1,len(given_arr)):
            inner = given_arr[j]
            counting = outer + inner
            if(counting == find_num):
                result.append([outer,inner])

    if(len(result) == 0):
        return 'unable to find pairs'
    
    return result

print(sum_pairs([1,2,3,4,5], 9))
print(sum_pairs([1,2,2,3,4,5], 4))
print(sum_pairs([1,2,2,3,4,5], 0))
