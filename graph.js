const Queue =  require("./queue.js");

function createNode(key) {
	const neighbours = [];

	return {
		key,
		neighbours,
		addNeighbor(node) {
			neighbours.push(node);
		}
	}
}

function createGraph(directed = false) {
	const nodes = [];
	const edges = [];

	return {
		directed,
		nodes,
		edges,

		addNode(key) {
			nodes.push(createNode(key))
		},

		getNode(key) {
			return nodes.find( node => node.key === key)
		},

		addEdge(node1key, node2key) {
			const node1 = this.getNode(node1key);
			const node2 = this.getNode(node2key);

			node1.addNeighbor(node2);
			edges.push(`${node1key}-${node2key}`);

			if(!directed) {
				node2.addNeighbor(node1)
			}
		},

		print() {
			return nodes.map(({key, neighbours}) => {
				let result = key;

				if (neighbours.length) {
					result += ` => ${neighbours
						.map(neighbour => neighbour.key)
						.join(' ')}`
				}
				return result

			}).join('\n')
		},

		breadthFirstSearch(startingNodeKey, visitFn) {
			const startingNode = this.getNode(startingNodeKey);
			const visited = nodes.reduce((acc, node) => {
				acc[node.key] = false;
				return acc;
			}, {});
			const queue = Queue.createQueue();
			queue.enqueue(startingNode);

			while (!queue.isEmpty()) {
				const currentNode = queue.deQueue();

				if(!visited[currentNode.key]) {
					visitFn(currentNode);
					visited[currentNode.key] = true
				}
				currentNode.neighbours.forEach(node => {
					if(!visited[node.key])
						queue.enqueue(node)
				})
			}
		},

		depthFirstSearch(startingNode, visitFn) {
			const startingNode = this.getNode(startingNodeKey);
			const visited = nodes.reduce((acc, node) => {
				acc[node.key] = false;
				return acc;
			}, {});
			function explore(node) {
				if(visited[node.key]) {
					return
				}

				visitFn(node);
				visited[node.key] = true;

				node.neighbours.forEach(node => {
					explore(node)
				});

				explore(startingNode)
			}
		}
	}
}

const graph = createGraph(true);

graph.addNode('Jesus');
graph.addNode('Patrick');
graph.addNode('Kyle');
graph.addNode('Anna');
graph.addNode('Krios');
graph.addNode('Tali');



graph.addEdge('Patrick', 'Jesus');
graph.addEdge('Jesus', 'Patrick');
graph.addEdge('Kyle', 'Anna');
graph.addEdge('Anna', 'Kyle');
graph.addEdge('Kyle', 'Krios');
graph.addEdge('Kyle', 'Tali');

console.log(graph.print());


const graph2 = createGraph(true);
const nodes = ['a', 'b', 'c', 'd', 'e', 'f'];

const edges = [
	['a', 'b'],
	['a', 'e'],
	['a', 'f'],
	['b', 'd'],
	['b', 'e'],
	['c', 'b'],
	['d', 'c'],
	['d', 'e']
];

nodes.forEach(node => {
	graph.addNode(node)
});

edges.forEach(nodes => {
	graph.addEdge(...nodes)
});

graph.breadthFirstSearch('a', (node) => {
	console.log(node.key)
});
