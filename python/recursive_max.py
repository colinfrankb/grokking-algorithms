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

print(max_recursion([2, 4, 5, 6, 3, 1, 7, 6, 7, 8, 9])) # Correct
