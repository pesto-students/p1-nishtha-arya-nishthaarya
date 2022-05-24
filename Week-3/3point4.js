function createStack() {
    let items = [];
    return {
        push(item) {
            items.push(item);
        },
        pop() {
            console.log(items[items.length - 1])
            items.pop();
        }
    }
}

const stack = createStack();
stack.push(10)
stack.push(20)
stack.push(30)
stack.pop()
console.log(stack.items)