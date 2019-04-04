class _Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DLL {
  constructor(head, tail) {
    this.head = null;
    this.tail = null;
  }
  insertFirst(item) {
    if (!this.head) {
      let newNode = new _Node(item, null, null);
      this.head = newNode;
      this.tail = newNode;
    }
    if (this.head && !this.head.next) {
      let newNode = new _Node(item, null, null);
      let oldHead = this.head;
      this.head = newNode;
      newNode.next = oldHead;
      oldHead.prev = this.head;
    }
  }
  insertLast(item) {
    if (!this.head) {
      this.insertFirst(item);
    }
    if (this.head && !this.head.next) {
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
  insertBefore(item, key) {
    if (!this.head || this.head.value === key) {
      insertFirst(item);
    } else {
      let current = this.head;
      let previous = this.head;
      while (current.value !== key) {
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
}
