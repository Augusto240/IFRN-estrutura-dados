/**
 * Classe que representa um nó em uma lista duplamente ligada.
 */
class Node {
    /**
     * Cria uma instância de Node.
     * @param {*} value - O valor armazenado no nó.
     */
    constructor(value) {
      this.value = value
      this.next = null
      this.prev = null
    }
  }
  
  /**
   * Classe que representa uma lista duplamente ligada.
   */
  class DoublyLinkedList {
    constructor() {
      this.head = null
      this.tail = null
    }
  
    /**
     * Adiciona um elemento ao início da lista.
     * @param {*} value - O valor a ser adicionado.
     */
    addHead(value) {
      const newNode = new Node(value)
      if (!this.head) {
        this.head = newNode
        this.tail = newNode
      } else {
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
      }
    }
  
    /**
     * Adiciona um elemento ao final da lista.
     * @param {*} value - O valor a ser adicionado.
     */
    addTail(value) {
      const newNode = new Node(value)
      if (!this.tail) {
        this.head = newNode
        this.tail = newNode
      } else {
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
      }
    }
  
    /**
     * Remove o elemento do início da lista.
     */
    removeHead() {
      if (this.head) {
        this.head = this.head.next
        if (this.head) {
          this.head.prev = null
        } else {
          this.tail = null
        }
      }
    }
  
    /**
     * Remove o elemento do final da lista.
     */
    removeTail() {
      if (this.tail) {
        this.tail = this.tail.prev
        if (this.tail) {
          this.tail.next = null
        } else {
          this.head = null
        }
      }
    }
  
    /**
     * Busca um elemento por valor.
     * @param {*} value - O valor a ser buscado.
     * @returns {boolean} - Retorna true se o valor for encontrado, caso contrário, false.
     */
    search(value) {
      let current = this.head
      while (current) {
        if (current.value === value) {
          return true
        }
        current = current.next
      }
      return false
    }
  
    /**
     * Exibe todos os elementos da lista da cabeça para a cauda.
     */
    displayHeadToTail() {
      const elements = []
      let current = this.head
      while (current) {
        elements.push(current.value)
        current = current.next
      }
      console.log(elements.join(" -> "))
    }
  
    /**
     * Exibe todos os elementos da lista da cauda para a cabeça.
     */
    displayTailToHead() {
      const elements = []
      let current = this.tail
      while (current) {
        elements.push(current.value)
        current = current.prev
      }
      console.log(elements.join(" -> "))
    }
  }
  
  // Exporta a classe DoublyLinkedList para que possa ser utilizada em testes
  module.exports = DoublyLinkedList
  