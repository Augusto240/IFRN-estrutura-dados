/**
 * Classe que representa um nó em uma lista ligada.
 */
class Node {
    /**
     * Cria uma instância de Node.
     * @param {*} value - O valor armazenado no nó.
     */
    constructor(value) {
      this.value = value
      this.next = null
    }
  }
  
  /**
   * Classe que representa uma lista ligada.
   */
  class LinkedList {
    constructor() {
      this.head = null
    }
  
    /**
     * Adiciona um elemento no final da lista.
     * @param {*} value - O valor a ser adicionado.
     */
    add(value) {
      const newNode = new Node(value)
      if (!this.head) {
        this.head = newNode
      } else {
        let current = this.head
        while (current.next) {
          current = current.next
        }
        current.next = newNode
      }
    }
  
    /**
     * Remove o elemento do início da lista.
     */
    removeStart() {
      if (this.head) {
        this.head = this.head.next
      }
    }
  
    /**
     * Busca um elemento por valor.
     * @param {*} value - O valor a ser buscado.
     * @returns {boolean} - Retorna true se o valor for encontrado, caso contrário, false.
     */
    searchElementValue(value) {
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
     * Insere um elemento em uma posição específica.
     * @param {number} index - A posição na qual o valor deve ser inserido.
     * @param {*} value - O valor a ser inserido.
     * @throws {Error} - Se o índice estiver fora do alcance.
     */
    insertElement(index, value) {
      const newNode = new Node(value)
      if (index === 0) {
        newNode.next = this.head
        this.head = newNode
      } else {
        let current = this.head
        for (let i = 0; i < index - 1; i++) {
          if (!current) {
            throw new Error("O índice está fora do alcance")
          }
          current = current.next
        }
        newNode.next = current.next
        current.next = newNode
      }
    }
  
    /**
     * Remove o elemento com o valor especificado.
     * @param {*} value - O valor a ser removido.
     */
    removeByValue(value) {
      if (this.head && this.head.value === value) {
        this.head = this.head.next
      } else {
        let current = this.head
        while (current && current.next) {
          if (current.next.value === value) {
            current.next = current.next.next
            return
          }
          current = current.next
        }
      }
    }
  
    /**
     * Exibe todos os elementos da lista.
     */
    displayElements() {
      const elements = []
      let current = this.head
      while (current) {
        elements.push(current.value)
        current = current.next
      }
      console.log(elements.join(" -> "))
    }
  }
  
  // Exporta a classe LinkedList para que possa ser utilizada em testes
  module.exports = LinkedList
  