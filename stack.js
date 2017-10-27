// Javascript Stack
function Stack() {
    items = [];
    this.push = function (element) {
        items.push(element);
    }

    this.pop = function () {
        return items.pop();
    }

    this.tostring = function () {
        return items.toString();
    }

    this.peek = function () {
        return items[items.length - 1];
    }

    this.isEmpty = function () {
        return items.length === 0;
    }

    this.clear = function () {
        items = [];
    }

    this.size = function () {
        return items.length;
    }

}

var stack = new Stack();
for (var i = 0; i< 10; i ++) {
    stack.push(i);
}

// example
console.log(stack);
console.log(stack.peek());
console.log(stack.tostring());
console.log(stack.size());
console.log(stack.isEmpty());
for (var i = stack.size(); i > 2; i --) {
    console.log(stack.pop());
}
console.log(stack.size());
stack.clear();
console.log(stack.size());
console.log(stack.isEmpty());