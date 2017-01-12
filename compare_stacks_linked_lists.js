function Node(val){
  this.val = val;
  this.next = null;
}

function SLL(){
  this.head = null
}

SLL.prototype.push = function(node) {
  if(!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = this.tail.next;
  }
  return this;
}

// TESTING
var mylist1 = new SLL()
var mylist2 = new SLL()
var node1a = new Node(1)
var node1b = new Node(1)
node1a.next = node2a
node1b.next = node2b
var node2a = new Node(2)
var node2b = new Node(2)
node2a.next = node3
node2b.next = node3b
var node3a = new Node(3)
var node3b = new Node(3)
node3a.next = null
node3b.next = node4b
var node4b = new Node(4)
node4b.next = null
mylist1.push(node1a).push(node2a).push(node3a)
mylist2.push(node1b).push(node2b).push(node3b).push(node4b)

function compare_stacks(list1,list2){
// if neither have a head they pass as being equal
  if(!list1.head && !list2.head) {
      return true;
  }
// if one has a head but the other doesn't then we know they are not equal to each other
  if(!list1.head || !list2.head) {
    return false;
  }
// if heads do not match we can return false
  if(list1.head !== list2.head) {
    return false;
  }
// run a while loop to compare each individual value of each node in the SLL list
  var cur1 = list1.head
  var cur2 = list2.head
  while(cur1.next && cur2.next) {
    console.log(cur1.next.val, cur2.next.val)
    if(cur1.next.val !== cur2.next.val) {
      console.log("comparing nodes")
      return false;
    }
    cur1 = cur1.next
    cur2 = cur2.next
    console.log("returning second true")
  }
  return true;
}

compare_stacks(mylist1, mylist2)
