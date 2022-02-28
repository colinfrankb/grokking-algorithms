package main

import "fmt"

func main() {
	graph := make(map[string][]string)
	graph["alice"] = []string{"bob", "judy", "jamie"}
	graph["jamie"] = []string{"jake"}
	graph["bob"] = []string{}
	graph["judy"] = []string{}
	graph["jake"] = []string{}

	queue := []string{"alice"}
	lastNode := "alice"
	for len(queue) > 0 {
		node := queue[0]
		if len(graph[node]) > 0 {
			queue = append(queue, graph[node]...)
		}
		lastNode = node
		queue = queue[1:]
		fmt.Println(queue)
	}

	fmt.Println(lastNode)
}