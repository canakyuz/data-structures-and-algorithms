/**
 * Queue (Kuyruk) veri yapısı
 * FIFO (First In First Out) prensibiyle çalışır
 */

export class Queue<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  /**
   * Kuyruğun sonuna eleman ekler
   * @param item Eklenecek eleman
   */
  enqueue(item: T): void {
    this.items.push(item);
  }

  /**
   * Kuyruğun başındaki elemanı çıkarır ve döndürür
   * @returns Kuyruğun başındaki eleman veya undefined
   */
  dequeue(): T | undefined {
    return this.items.shift();
  }

  /**
   * Kuyruğun başındaki elemanı döndürür ama çıkarmaz
   * @returns Kuyruğun başındaki eleman veya undefined
   */
  peek(): T | undefined {
    return this.items[0];
  }

  /**
   * Kuyruğun boş olup olmadığını kontrol eder
   * @returns Kuyruk boşsa true, değilse false
   */
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  /**
   * Kuyruktaki eleman sayısını döndürür
   * @returns Kuyruğun boyutu
   */
  size(): number {
    return this.items.length;
  }

  /**
   * Kuyruğu temizler
   */
  clear(): void {
    this.items = [];
  }

  /**
   * Kuyruğu diziye dönüştürür
   * @returns Kuyruk elemanlarını içeren dizi
   */
  toArray(): T[] {
    return [...this.items];
  }
}
