function TreeConstructor(strArr) {
  let re = /(?:\d+,\d+)/g;
  let edges = strArr.map((edge) => edge.match(re)[0].split(','));
  let nodes = new Set();

  for (let i = 0; i < edges.length; i++) {
    nodes.add(edges[i][0]);
    nodes.add(edges[i][1]);
  }

  let nodeAsParentCount = {};
  let nodeAsChildCount = {};

  nodes.forEach((node) => {
    nodeAsParentCount[node] = 0;
    nodeAsChildCount[node] = 0;

    for (let j = 0; j < edges.length; j++) {
      let indx = edges[j].indexOf(node);

      if (indx === 1) {
        nodeAsParentCount[node]++;
      } else if (indx === 0) {
        nodeAsChildCount[node]++;
      }
    }
  });

  let allEdgesTwoOrLess = true;
  let asRoot = 0;

  for (const [key, val] of Object.entries(nodeAsParentCount)) {
    if (val > 2) allEdgesTwoOrLess = false;
  }

  for (const [key, val] of Object.entries(nodeAsChildCount)) {
    if (val === 0) asRoot++;
  }

  return allEdgesTwoOrLess && asRoot === 1;
}
   
// keep this function call here
let input = ["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]; 
console.log(TreeConstructor(input));
