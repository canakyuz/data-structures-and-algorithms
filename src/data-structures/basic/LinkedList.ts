/**
 * Bağlı Liste (Linked List) veri yapısı
 * Tek yönlü bağlı liste implementasyonu
 */

class Node<T> {
  public value: T;
  public next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList<T> {
  private head: Node<T> | null;
  private tail: Node<T> | null;
  private _size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  /**
   * Listenin başına eleman ekler
   * @param value Eklenecek değer
   */
  prepend(value: T): void {
    const newNode = new Node<T>(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this._size++;
  }

  /**
   * Listenin sonuna eleman ekler
   * @param value Eklenecek değer
   */
  append(value: T): void {
    const newNode = new Node<T>(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }

    this._size++;
  }

  /**
   * Belirli bir indeksteki elemanı döndürür
   * @param index Elemanın indeksi
   * @returns İndeksteki eleman veya null
   */
  at(index: number): T | null {
    if (index < 0 || index >= this._size) {
      return null;
    }

    let current = this.head;
    let count = 0;

    while (current && count < index) {
      current = current.next;
      count++;
    }

    return current ? current.value : null;
  }

  /**
   * Belirli bir değere sahip ilk elemanın indeksini döndürür
   * @param value Aranacak değer
   * @returns Elemanın indeksi veya -1
   */
  indexOf(value: T): number {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.next;
      index++;
    }

    return -1;
  }

  /**
   * Belirli bir indeksteki elemanı kaldırır
   * @param index Kaldırılacak elemanın indeksi
   * @returns Kaldırılan değer veya null
   */
  removeAt(index: number): T | null {
    if (index < 0 || index >= this._size || !this.head) {
      return null;
    }

    let removedNode: Node<T>;

    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
      
      if (this._size === 1) {
        this.tail = null;
      }
    } else {
      let current: Node<T> | null = this.head;
      let previous: Node<T> | null = null;
      let count = 0;

      while (current && count < index) {
        previous = current;
        current = current.next;
        count++;
      }

      if (!current) return null;

      removedNode = current;
      previous!.next = current.next;

      if (!current.next) {
        this.tail = previous;
      }
    }

    this._size--;
    return removedNode.value;
  }

  /**
   * Belirli bir değere sahip ilk elemanı kaldırır
   * @param value Kaldırılacak değer
   * @returns Başarılı olup olmadığı
   */
  remove(value: T): boolean {
    if (!this.head) return false;

    if (this.head.value === value) {
      this.head = this.head.next;
      this._size--;
      
      if (!this.head) {
        this.tail = null;
      }
      
      return true;
    }

    let current = this.head;
    
    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    if (current.next) {
      if (current.next === this.tail) {
        this.tail = current;
      }
      
      current.next = current.next.next;
      this._size--;
      return true;
    }

    return false;
  }

  /**
   * Listeyi temizler
   */
  clear(): void {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  /**
   * Listenin boyutunu döndürür
   */
  get size(): number {
    return this._size;
  }

  /**
   * Listenin boş olup olmadığını kontrol eder
   */
  get isEmpty(): boolean {
    return this._size === 0;
  }

  /**
   * Listeyi diziye dönüştürür
   */
  toArray(): T[] {
    const array: T[] = [];
    let current = this.head;

    while (current) {
      array.push(current.value);
      current = current.next;
    }

    return array;
  }

  /**
   * Iterator protokolünü uygular, böylece for...of döngüsü kullanılabilir
   */
  *[Symbol.iterator](): Iterator<T> {
    let current = this.head;
    
    while (current) {
      yield current.value;
      current = current.next;
    }
  }
}
