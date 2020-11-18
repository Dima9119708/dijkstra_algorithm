export function dijkstra(grid, startNode, finishNode) {

  const visitedNodes = [];

  startNode.distance = 0;

  const unvisitedNodes = grid.flat()

  while (unvisitedNodes.length) {

    sortNodes(unvisitedNodes);

    const currentNode = unvisitedNodes.shift();

    if (currentNode.isWall) continue;

    currentNode.isVisited = true;
    visitedNodes.push(currentNode);

    if (currentNode.distance === Infinity) return visitedNodes

    if (currentNode === finishNode) return visitedNodes;

    watchingUpdateNeighbors(currentNode, grid);
  }
}

function sortNodes(unvisitedNodes) {
  unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}

function watchingUpdateNeighbors(node, grid) {

  const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);

  for (const neighbor of unvisitedNeighbors) {
    neighbor.distance = node.distance + 1;
    neighbor.previousNode = node;
  }

}

function getUnvisitedNeighbors(node, grid) {

  const neighbors = [];
  const { col, row } = node;

  if (row > 0) neighbors.push(grid[row - 1][col]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);

  return neighbors.filter(neighbor => !neighbor.isVisited);
}


export function getNodesInShortestPathOrder(finishNode) {

  const path = [];
  let currentNode = finishNode;

  while (currentNode !== null) {
    path.unshift(currentNode);
    currentNode = currentNode.previousNode;
  }

  return path;
}