# List all the nodes excluding the origin node in a Cost Table with the following headings
# Parent Node
# Node
# Cost from Origin

# The neighbours of the origin will have costs
# the other nodes have unknown costs

# Processing a node means:
# For each of it's neighbours perform the following calculation:
# Is the accumulated cost from the origin less than the current cost in the Cost Table for that node
# if true, replace the value in the Cost Table

# For a node to begin processing it's value in the Cost Table must have already been calculated

infinity = float("inf")
graph = {}
costs = {}
parents = {}

# An array to keep track of all the nodes already processed, 
# because you don't need to process a node more than once, 
# QUESTION: Why don't you need to process a node more than once?
# ANSWER: Because the cost between a particular node and it's neighbours does not change, and once
# it's accumulated cost is checked against the Cost Table it is assumed that it can no longer have an affect
# on the cost table
processed = []

def initialise_graph_as_hashtable():
  graph["start"] = {}
  graph["start"]["a"] = 6
  graph["start"]["b"] = 2

  graph["a"] = {}
  graph["a"]["fin"] = 1

  graph["b"] = {}
  graph["b"]["a"] = 3
  graph["b"]["fin"] = 5

  graph["fin"] = {}

def initialise_costs_as_hashtable():
  costs["a"] = 6
  costs["b"] = 2
  costs["fin"] = infinity

def initialise_parents_as_hashtable():
  parents["a"] = "start"
  parents["b"] = "start"
  parents["fin"] = None


initialise_graph_as_hashtable()
intialise_costs_as_hashtable()
initialise_parents_as_hashtable()
