/**
 * Stack (Yığın) veri yapısı
 * LIFO (Last In First Out) prensibiyle çalışır
 */

export class Stack<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  /**
   * Yığının üstüne eleman ekler
   * @param item Eklenecek eleman
   */
  push(item: T): void {
    this.items.push(item);
  }

  /**
   * Yığının üstündeki elemanı çıkarır ve döndürür
   * @returns Yığının üstündeki eleman veya undefined
   */
  pop(): T | undefined {
    return this.items.pop();
  }

  /**
   * Yığının üstündeki elemanı döndürür ama çıkarmaz
   * @returns Yığının üstündeki eleman veya undefined
   */
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  /**
   * Yığının boş olup olmadığını kontrol eder
   * @returns Yığın boşsa true, değilse false
   */
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  /**
   * Yığındaki eleman sayısını döndürür
   * @returns Yığının boyutu
   */
  size(): number {
    return this.items.length;
  }

  /**
   * Yığını temizler
   */
  clear(): void {
    this.items = [];
  }

  /**
   * Yığını diziye dönüştürür (en üstteki eleman dizinin sonundadır)
   * @returns Yığın elemanlarını içeren dizi
   */
  toArray(): T[] {
    return [...this.items];
  }
}
