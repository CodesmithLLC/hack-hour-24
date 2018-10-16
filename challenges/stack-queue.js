/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    let storage = [];
    this.length = 0;
    this.pop = () => {
        if (this.length == 0)
            return undefined;
        let ret = storage[this.length - 1];
        storage.splice(this.length - 1, 1);
        this.length--;
        return ret;
    }
    this.push = (item) => {
        storage.push(item);
        this.length++;
    }
    this.empty = () => {
        storage = [];
        this.length = 0;
    }
}


/**
* Queue Class
*/


function Queue() {
    let s1 = new Stack();
    let s2 = new Stack();
    this.enqueue = (item) => {
        s1.push(item);
    }
    this.dequeue = () => {
        while (s1.length > 1) {
            s2.push(s1.pop());
        }
        let ret = s1.pop();
        // clean up
        while (s2.length > 0) {
            s1.push(s2.pop());
        }
        return ret;
    }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
module.exports = {Stack: Stack, Queue: Queue};
