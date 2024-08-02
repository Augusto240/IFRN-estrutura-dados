const LinkedList = require('./LinkedList')

describe('LinkedList', () => {
  let list

  beforeEach(() => {
    list = new LinkedList()
  })

  test('should add elements to the list', () => {
    list.add(1)
    list.add(2)
    expect(list.head.value).toBe(1)
    expect(list.head.next.value).toBe(2)
  })

  test('should remove the first element from the list', () => {
    list.add(1)
    list.add(2)
    list.removeStart()
    expect(list.head.value).toBe(2)
  })

  test('should search for an element by value', () => {
    list.add(1)
    list.add(2)
    expect(list.searchElementValue(1)).toBe(true)
    expect(list.searchElementValue(3)).toBe(false)
  })

  test('should insert an element at a specific position', () => {
    list.add(1)
    list.add(2)
    list.insertElement(1, 3)
    expect(list.head.next.value).toBe(3)
  })

  test('should remove an element by value', () => {
    list.add(1)
    list.add(2)
    list.add(3)
    list.removeByValue(2)
    expect(list.head.next.value).toBe(3)
  })

  test('should display all elements', () => {
    list.add(1)
    list.add(2)
    list.add(3)
    console.log = jest.fn()
    list.displayElements()
    expect(console.log).toHaveBeenCalledWith('1 -> 2 -> 3')
  })
})
