from collections import deque 

graph = dict()
graph["you"] = ["alice", "bob", "jill"]
graph["alice"] = ["jack", "molly", "winston"]
graph["bob"] = []
graph["jack"] = ["jill"]
graph["molly"] = ["toby", "sandy", "gem"]
graph["winston"] = ["gebb"]
graph["toby"] = ["sandy"]
graph["sandy"] = []
graph["jill"] = []
graph["gebb"] = []

def breadth_first_search(arr):
  search_queue = deque(arr)
  searched_list = []

  while search_queue:
    node = search_queue.popleft()

    if not node in searched_list:
      if node[-1] == "m":
        return node
      else:
        search_queue.extend(graph[node])
        searched_list.append(node)

  return None

print breadth_first_search(graph["you"])