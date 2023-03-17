let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
};

const printListRecursive = (list) => {
    console.log(list);
    list.next ? printList(list.next): null;
}
const printList = (list) => {
    while(list){
        console.log(list.next);
        list = list.next;
    }
}

printListRecursive(list);
printList(list);
