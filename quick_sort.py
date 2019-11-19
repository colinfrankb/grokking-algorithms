
# Exercise 
# 4.1
def sum_recursion(arr):
  if not len(arr):
    return 0
  
  return arr[0] + sum_recursion(arr[1:])

print sum_recursion([1, 2, 3, 4]) # Correct

# 4.2
def count_recursion(arr):
  if not len(arr):
    return 0
  
  return 1 + count_recursion(arr[1:])

print count_recursion([1, 2, 3, 4, 5, 6, 7]) # Correct

# 4.3
def max_recursion(arr):
  if len(arr) == 0:
    return 0

  if len(arr) == 1:
    return arr[0]

  if len(arr) == 2:
    if arr[0] > arr[1]:
      return arr[0]
    else:
      return arr[1]

  mr = max_recursion(arr[1:])
  if arr[0] > mr:
    return arr[0]
  else:
    return mr

print max_recursion([2, 4, 5, 6, 3, 1, 7, 6, 7, 8, 9]) # Correct

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

# 4.5
# Printing the value of each element in an array
# O(n) - Correct

# 4.6
# Doubling the value of each element in an array
# O(n) - Correct

# 4.7
# Doubling the value of just the first element in an array
# O(1) - Correct

# 4.8
# Creating a multiplication table with all the elements in the array.
# So if your array is [2, 3, 7, 8, 10], you first multiply every element
# by 2, then multiply every element by 3, then by 7, and so on.
# O(n^2) - Correct