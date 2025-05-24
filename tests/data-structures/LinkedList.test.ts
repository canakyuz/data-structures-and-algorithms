import { LinkedList } from '../../src/data-structures/basic/LinkedList';

describe('LinkedList', () => {
  let list: LinkedList<number>;

  beforeEach(() => {
    list = new LinkedList<number>();
  });

  test('başlangıçta boş olmalı', () => {
    expect(list.size).toBe(0);
    expect(list.isEmpty).toBe(true);
  });

  test('append metodu listenin sonuna eleman eklemeli', () => {
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.size).toBe(3);
    expect(list.at(0)).toBe(1);
    expect(list.at(1)).toBe(2);
    expect(list.at(2)).toBe(3);
  });

  test('prepend metodu listenin başına eleman eklemeli', () => {
    list.prepend(1);
    list.prepend(2);
    list.prepend(3);

    expect(list.size).toBe(3);
    expect(list.at(0)).toBe(3);
    expect(list.at(1)).toBe(2);
    expect(list.at(2)).toBe(1);
  });

  test('at metodu geçerli indeksteki elemanı döndürmeli', () => {
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.at(0)).toBe(1);
    expect(list.at(1)).toBe(2);
    expect(list.at(2)).toBe(3);
    expect(list.at(3)).toBeNull();
    expect(list.at(-1)).toBeNull();
  });

  test('indexOf metodu elemanın indeksini döndürmeli', () => {
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.indexOf(1)).toBe(0);
    expect(list.indexOf(2)).toBe(1);
    expect(list.indexOf(3)).toBe(2);
    expect(list.indexOf(4)).toBe(-1);
  });

  test('removeAt metodu belirli indeksteki elemanı kaldırmalı', () => {
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.removeAt(1)).toBe(2);
    expect(list.size).toBe(2);
    expect(list.at(0)).toBe(1);
    expect(list.at(1)).toBe(3);
  });

  test('remove metodu belirli değere sahip ilk elemanı kaldırmalı', () => {
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(2);

    expect(list.remove(2)).toBe(true);
    expect(list.size).toBe(3);
    expect(list.at(0)).toBe(1);
    expect(list.at(1)).toBe(3);
    expect(list.at(2)).toBe(2);
  });

  test('clear metodu listeyi temizlemeli', () => {
    list.append(1);
    list.append(2);
    list.append(3);

    list.clear();
    expect(list.size).toBe(0);
    expect(list.isEmpty).toBe(true);
  });

  test('toArray metodu listeyi diziye dönüştürmeli', () => {
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.toArray()).toEqual([1, 2, 3]);
  });

  test('for...of döngüsü çalışmalı', () => {
    list.append(1);
    list.append(2);
    list.append(3);

    const values: number[] = [];
    // @ts-ignore
    for (const value of list) {
      values.push(value);
    }

    expect(values).toEqual([1, 2, 3]);
  });
});
