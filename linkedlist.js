class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }
  insertBefore(item, key) {
    if (!this.head) {
      this.insertFirst(item);
    } else {
      let currentNode = this.head;
      while (currentNode.next.value !== key) {
        currentNode = currentNode.next;
      }
      currentNode.next = new _Node(item, currentNode.next);
    }
  }
  insertAfter(item, key) {
    if (!this.head) {
      this.insertFirst(item);
    } else {
      let currentNode = this.head;
      while (currentNode.value !== key) {
        currentNode = currentNode.next;
      }
      currentNode.next = new _Node(item, currentNode.next);
    }
  }

  insertLast(item) {
    if (!this.head) {
      this.insertFirst(item);
    } else {
      let currentNode = this.head;
      while (currentNode.next != null) {
        currentNode = currentNode.next;
      }
      currentNode.next = new _Node(item, null);
    }
  }

  insertAt(item, position) {
    if (position === 0) {
      this.insertFirst(item);
    } else {
      let count = 0;
      let currentNode = this.head;
      let previousNode = this.head;
      while (count < position) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        count++;
      }
      currentNode = new _Node(item, currentNode);
      previousNode.next = currentNode;
    }
  }

  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currentNode = this.head;
    let previousNode = this.head;

    while (currentNode != null && currentNode.value !== item) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    if (currentNode === null) {
      console.log(`Item: ${item} not found.`);
      return;
    }
    previousNode.next = currentNode.next;
    return;
  }
  find(item) {
    let currentNode = this.head;
    if (!this.head) {
      return null;
    }

    while (currentNode.value !== item) {
      if (currentNode.next === null) {
        return null;
      } else {
        currentNode = currentNode.next;
      }
    }
    return currentNode;
  }
}
function insertInSortedOrder(ll, item) {
  let currentNode = ll.head;

  if (item < ll.head.value) {
    ll.head = new _Node(item, ll.head);
    return sll;
  }
  let previousNode = ll.head;
  while (currentNode.next !== null && currentNode.value < item) {
    previousNode = currentNode;
    currentNode = currentNode.next;
  }
  previousNode.next = new _Node(item, currentNode);
  return ll;
}

function display(ll) {
  let currentNode = ll.head;
  while (currentNode != null) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }
}

function main() {
  SLL = new LinkedList();
  SLL.insertFirst("C");
  SLL.insertLast("D");
  SLL.insertLast("F");
  console.log(SLL.find("D"));
  insertInSortedOrder(SLL, "E");
  console.log(SLL.find("D"));
}

main();
