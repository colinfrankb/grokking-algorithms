# Quick Sort algorithm

# 1. Determine base case
# 2. Choose pivot 
# 3. Partition array into less than and greater than pivot
# 4. Call quicksort recursively on the two sub-arrays

def quick_sort(arr):
  if len(arr) < 2:
    return arr
  else:
    pivot = arr[0]
    less = [value for value in arr[1:] if value < pivot]
    greater = [value for value in arr[1:] if value > pivot]

    return quick_sort(less) + [pivot] + quick_sort(greater)

print(quick_sort([10, 5, 2, 3]))

# 4.4
# What is the base case and recursive case for binary search?

# Base case
# if (len(arr) / 2) <= 1:
#   return arr[i]

# Correct

# Answer: The base case is an array with one item
#         If the item you're looking for matches the item in the array,
#         you found it! Otherwise, it isn't in the array
  
# Recursive case
# middle_index = len(arr) / 2
# if arr[middle_index] == x:
#   return middle_index
# else if arr[middle_index] > x:
#   return binary_search(arr[:middle_index])
# else:
#   return binary_search(arr[middle_index:])

# Correct

# Answer: The recursive case is to split the array in half,
#         throw away one half, and call binary search on the other
#         half        
