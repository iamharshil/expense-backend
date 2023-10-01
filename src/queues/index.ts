class Queue<T> {
	private elements: T[];

	constructor(...elements: T[]) {
		this.elements = [...elements];
	}

	// proxying to push/shift methods
	push(...args: T[]): number {
		return this.elements.push(...args);
	}

	shift(): T | undefined {
		return this.elements.shift();
	}

	get length(): number {
		return this.elements.length;
	}

	set length(length: number) {
		this.elements.length = length;
	}
}

const q = new Queue<number>();
q.push(2);
console.log(q.length);
while (q.length) {
	console.log(q.shift());
}
