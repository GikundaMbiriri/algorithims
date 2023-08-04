class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}
function hasCycle(head: ListNode | null): boolean {
  if (head === null) {
    return false;
  }

  let fast: ListNode | null = head;
  let slow: ListNode | null = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow!.next;

    if (fast === slow) {
      return true;
    }
  }

  return false;
}
// Usage example:
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);

node1.next = node2;
node2.next = node3;
node3.next = node1; // Creating a cycle

const hasCycleResult: boolean = hasCycle(node1);
console.log(hasCycleResult); // Output: true
