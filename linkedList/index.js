var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        if (next === void 0) { next = null; }
        this.val = val;
        this.next = next;
    }
    return ListNode;
}());
function hasCycle(head) {
    if (head === null) {
        return false;
    }
    var fast = head;
    var slow = head;
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) {
            return true;
        }
    }
    return false;
}
// Usage example:
var node1 = new ListNode(1);
var node2 = new ListNode(2);
var node3 = new ListNode(3);
node1.next = node2;
node2.next = node3;
node3.next = node1; // Creating a cycle
var hasCycleResult = hasCycle(node1);
console.log(hasCycleResult); // Output: true
