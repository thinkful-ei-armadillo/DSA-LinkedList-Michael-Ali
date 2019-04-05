class _Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DLL {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  // O(1)
  insertFirst(item) {
    let newNode = new _Node(item, null, null);
    newNode.next = this.head;
    this.head = newNode;

    if (!this.tail) {
      this.tail = this.head;
    }
    if (this.head.next) {
      this.head.next.prev = this.head;
    }
  }
  // O(n)
  insertLast(item) {
    if (!this.head) {
      this.insertFirst(item);
    } else if (this.head && !this.head.next) {
      let newNode = new _Node(item, null, null);
      this.head.next = newNode;
      newNode.prev = this.head;
      newNode = this.tail;
    } else {
      let current = this.head;
      while (current !== this.tail) {
        current = current.next;
      }
      let newNode = new _Node(item, null, null);
      let oldTail = this.tail;
      newNode.prev = oldTail;
      oldTail.next = newNode;
      this.tail = newNode;
    }
  }
  // O(n)
  insertBefore(item, key) {
    if (this.head.value === key) {
      insertFirst(item);
    } else {
      let current = this.head;
      let previous = this.head;
      while (current.value !== key || current !== null) {
        previous = current;
        current = current.next;
      }
      if (current === null) {
        console.log(`Key: ${key} not found.`);
        return;
      }
      let newNode = new _Node(item, null, null);
      newNode.prev = previous;
      current.prev = newNode;
      previous.next = newNode;
      newNode.next = current;
    }
  }
  // O(n)
  insertAfter(item, key) {
    if (!this.head) {
      return null;
    }
    let current = this.head;
    while (current.value !== key && current !== null) {
      current = current.next;
    }
    if (current === null) {
      console.log(`Key: ${key} not found.`);
      return;
    }
    let following = current.next;
    let newNode = new _Node(item, null, null);
    newNode.prev = current;
    newNode.next = following;
    current.next = newNode;

    if (following === null) {
      this.tail = current.next;
    } else {
      following.prev = current.next;
    }
  }
  // O(n)
  insertAt(item, position) {
    if (position === 0) {
      this.insertFirst(item);
    } else {
      let count = 0;
      let current = this.head;
      let previous = this.head;
      while (count < position) {
        previous = current;
        current = current.next;
        count++;
      }
      let newNode = new _Node(item, null, null);
      previous.next = newNode;
      newNode.prev = previous;
      newNode.next = current;
      if (current === null) {
        this.tail = previous.next;
      } else {
        current.prev = newNode;
      }
    }
  }
  // O(n)
  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
    } else {
      let removeNode = this.head;
      let current = this.head;
      while (removeNode.value !== item) {
        current = removeNode;
        removeNode = removeNode.next;
      }
      current.next = removeNode.next;
      if (removeNode.next === null) {
        this.tail = removeNode.next;
      } else {
        removeNode.next.prev = current;
      }
    }
  }
  // O(n)
  find(item) {
    if (!this.head) {
      return null;
    }
    let current = this.head;
    while (current.value !== item) {
      if (current.next === null) {
        return null;
      } else {
        current = current.next;
      }
    }
    return current;
  }
}

function display(dll) {
  let currentNode = dll.head;
  while (currentNode !== null) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }
}
function reverseDLL(dll) {
  let begin = dll.head;
  let end = dll.tail;
  while (begin !== end || begin.next === end) {
    const curr1 = begin.value;
    const curr2 = end.value;
    begin.value = curr2;
    end.value = curr1;
    begin = begin.next;
    end = end.prev;
  }
  return dll;
}

function main() {
  let dll = new DLL();
  dll.insertLast("A");
  display(dll);
  dll.insertAfter("B", "A");
  dll.insertAfter("C", "B");
  dll.insertFirst("Z");
  dll.insertLast("Q");
  console.log("after add");
  display(dll);
  console.log("testing insertAt(Y)");
  dll.insertAt("Y", 5);
  dll.remove("Q");
  display(dll);
  console.log("testing find");
  console.log(dll.find("Y"));
  console.log(reverseDLL(dll));
}

main();
