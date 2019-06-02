 function createQueue() {
	const queue = [];

	return {
		enqueue(item) {
			queue.unshift(item);
		},
		deQueue() {
			return queue.pop();
		},
		peek() {
			return queue[queue.length - 1];
		},
		get length() {
			return queue.length;
		},
		isEmpty() {
			return queue.length === 0;
		}
	}
}

module.exports = { createQueue };

const q = createQueue();
q.enqueue("Do an assessment");
q.enqueue("Pass the assessment");
q.enqueue("Celebrate");

q.deQueue();
q.deQueue();
q.deQueue();

console.log(q.peek());
console.log(q.isEmpty());

function createPriorityQueue() {
	const highPriorityQueue = createQueue();
	const lowPriorityQueue = createQueue();

	return {
		enqueue(item, highPriority) {
			highPriority ? highPriorityQueue.enqueue(item) :
				lowPriorityQueue.enqueue(item);
		},

		deQueue() {
			return !highPriorityQueue.isEmpty() ? highPriorityQueue.deQueue() :
				lowPriorityQueue.deQueue();
		},

		peek() {
			return !highPriorityQueue.isEmpty() ? highPriorityQueue.peek() :
				lowPriorityQueue.peek();
		},

		length() {
			return highPriorityQueue.length + lowPriorityQueue.length;
		},

		isEmpty() {
			highPriorityQueue.isEmpty() && lowPriorityQueue.isEmpty();
		}
	}
}

const pq = createPriorityQueue();

pq.enqueue('a fix');
pq.enqueue('a bug');
pq.enqueue('a feature');

console.log(pq.peek());
pq.deQueue();
pq.enqueue('emergency task', true);
console.log(pq.deQueue());
console.log(pq.peek());
