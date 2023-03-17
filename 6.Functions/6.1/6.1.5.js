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

const printReverseRecursive = (list) => {
    list.next ? printReverseRecursive(list.next) : null;

    console.log(list.next);
}

const printList = (list) => {
    const arr = [];

    while(list){
        arr.push(list.value);
        list = list.next;
    }

    console.log(arr)
}

printReverseRecursive(list)