/**
 * Bubble Sort algoritması
 * 
 * Zaman Karmaşıklığı:
 * - En iyi durumda: O(n) - dizi zaten sıralıysa
 * - Ortalama durumda: O(n²)
 * - En kötü durumda: O(n²)
 * 
 * Alan Karmaşıklığı: O(1)
 */

/**
 * Diziyi Bubble Sort algoritması ile sıralar
 * @param array Sıralanacak dizi
 * @param compareFn İsteğe bağlı karşılaştırma fonksiyonu
 * @returns Sıralanmış dizi (orijinal dizi değiştirilir)
 */
export function bubbleSort<T>(
  array: T[], 
  compareFn: (a: T, b: T) => number = (a, b) => 
    a < b ? -1 : a > b ? 1 : 0
): T[] {
  const length = array.length;
  
  // Optimizasyon: Eğer bir geçişte hiç swap yapılmadıysa,
  // dizi sıralanmış demektir ve döngüden çıkabiliriz
  for (let i = 0; i < length; i++) {
    let swapped = false;
    
    // Her geçişte en büyük eleman en sağa yerleşir,
    // bu yüzden her geçişte bir eleman daha az kontrol etmemiz gerekir
    for (let j = 0; j < length - 1 - i; j++) {
      if (compareFn(array[j], array[j + 1]) > 0) {
        // Elemanları değiştir (swap)
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swapped = true;
      }
    }
    
    // Eğer hiç swap işlemi yapılmadıysa, dizi sıralanmıştır
    if (!swapped) {
      break;
    }
  }
  
  return array;
}

/**
 * Diziyi Bubble Sort algoritması ile sıralar (orijinal diziyi değiştirmeden)
 * @param array Sıralanacak dizi
 * @param compareFn İsteğe bağlı karşılaştırma fonksiyonu
 * @returns Sıralanmış yeni dizi
 */
export function bubbleSortImmutable<T>(
  array: readonly T[], 
  compareFn: (a: T, b: T) => number = (a, b) => 
    a < b ? -1 : a > b ? 1 : 0
): T[] {
  // Orijinal diziyi klonla
  return bubbleSort([...array], compareFn);
}
