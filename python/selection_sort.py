def find_smallest(arr):
  smallest_value = arr[0]
  smallest_index = 0

  for i in range(1, len(arr)):
    if arr[i] < smallest_value:
      smallest_value = arr[i]
      smallest_index = i
  
  return smallest_index

# return a sorted list
# selection sort will insert the results in a new array
def selection_sort(arr):
  result = []

  # not looping through each item actually, 
  # but instead setting up a loop that will loop 
  # for the same number of items in the array
  for i in range(1, len(arr)): 
    smallest_index = find_smallest(arr)
    result.append(arr.pop(smallest_index))

  return result

print(selection_sort([5, 3, 6, 2, 100]))
