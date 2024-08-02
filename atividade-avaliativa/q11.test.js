const DoublyLinkedList = require('./DoublyLinkedList')

describe('DoublyLinkedList', () => {
  let list

  beforeEach(() => {
    list = new DoublyLinkedList()
  })

  test('should add elements to the head of the list', () => {
    list.addHead(1)
    list.addHead(2)
    expect(list.head.value).toBe(2)
    expect(list.head.next.value).toBe(1)
  })

  test('should add elements to the tail of the list', () => {
    list.addTail(1)
    list.addTail(2)
    expect(list.tail.value).toBe(2)
    expect(list.tail.prev.value).toBe(1)
  })

  test('should remove the first element from the list', () => {
    list.addHead(1)
    list.addHead(2)
    list.removeHead()
    expect(list.head.value).toBe(1)
    expect(list.head.prev).toBeNull()
  })

  test('should remove the last element from the list', () => {
    list.addTail(1)
    list.addTail(2)
    list.removeTail()
    expect(list.tail.value).toBe(1)
    expect(list.tail.next).toBeNull()
  })

  test('should search for an element by value', () => {
    list.addHead(1)
    list.addTail(2)
    expect(list.search(1)).toBe(true)
    expect(list.search(3)).toBe(false)
  })

  test('should display elements from head to tail', () => {
    list.addHead(1)
    list.addTail(2)
    list.addTail(3)
    console.log = jest.fn()
    list.displayHeadToTail()
    expect(console.log).toHaveBeenCalledWith('1 -> 2 -> 3')
  })

  test('should display elements from tail to head', () => {
    list.addHead(1)
    list.addTail(2)
    list.addTail(3)
    console.log = jest.fn()
    list.displayTailToHead()
    expect(console.log).toHaveBeenCalledWith('3 -> 2 -> 1')
  })
})
