def sum_recursion(arr):
  if not len(arr):
    return 0
  
  return arr[0] + sum_recursion(arr[1:])

print(sum_recursion([1, 2, 3, 4])) # Correct
