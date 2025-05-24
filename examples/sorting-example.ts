import { bubbleSort, bubbleSortImmutable } from '../src/algorithms/sorting/BubbleSort';

// Sayı dizisi örneği
const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log('Orijinal dizi:', numbers);

// Diziyi sırala (orijinal dizi değiştirilir)
bubbleSort(numbers);
console.log('Sıralanmış dizi (bubbleSort):', numbers);

// Orijinal diziyi koruyarak sıralama
const unsortedNumbers = [64, 34, 25, 12, 22, 11, 90];
const sortedNumbers = bubbleSortImmutable(unsortedNumbers);
console.log('Orijinal dizi (değişmedi):', unsortedNumbers);
console.log('Sıralanmış yeni dizi:', sortedNumbers);

// Nesneleri sıralama örneği
interface Person {
  name: string;
  age: number;
}

const people: Person[] = [
  { name: 'Ahmet', age: 25 },
  { name: 'Mehmet', age: 30 },
  { name: 'Ayşe', age: 22 },
  { name: 'Fatma', age: 28 },
];

// Yaşa göre sıralama
const sortedByAge = bubbleSortImmutable(people, (a, b) => a.age - b.age);
console.log('Yaşa göre sıralı:', sortedByAge);

// İsme göre sıralama
const sortedByName = bubbleSortImmutable(people, (a, b) => a.name.localeCompare(b.name));
console.log('İsme göre sıralı:', sortedByName);
