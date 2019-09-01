
def binary_search(list, item):
  # low and high to keep track of which
  # part of the list you'll search in
  low = 0
  high = len(list) - 1

  while low <= high: # while you haven't narrowed it down to one element
    mid = (low + high) / 2 # check the middle element
    guess = list[mid]

    if guess == item:
      return mid
    if guess > item:
      high = mid - 1 # exclude all other numbers greater than guess
    else:
      low = mid + 1 # exclude all other numbers less than guess
    
  return None


my_list = [1, 3, 5, 7, 9]

print binary_search(my_list, 3) # should return 1
print binary_search(my_list, -1) # should return None
