def count_recursion(arr):
  if not len(arr):
    return 0
  
  return 1 + count_recursion(arr[1:])

print(count_recursion([1, 2, 3, 4, 5, 6, 7])) # Correct