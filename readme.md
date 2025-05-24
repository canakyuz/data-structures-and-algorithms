# Veri Yapıları ve Algoritmalar Yol Haritası

Bu repo, veri yapıları ve algoritmalar alanında temel seviyeden ileri seviyeye kadar kapsamlı bir öğrenme yolculuğu için kaynak ve kılavuz içermektedir.

## 1. Temel Kavramlar ve Matematiksel Arka Plan

- **Algoritma analizi**: Zaman ve alan karmaşıklığı (Big O, Omega, Theta notasyonları)
- **Matematiksel temeller**:
  - Sayı teorisi
  - Kombinatorik
  - Olasılık
  - Ayrık matematik
- **Temel programlama becerileri**: Tercih ettiğiniz bir dilde (Python, Java, C++ gibi) güçlü temeller

## 2. Temel Veri Yapıları

- **Diziler (Arrays)**
  - Tek boyutlu diziler
  - Çok boyutlu diziler
  - Dinamik diziler
  
- **Bağlı Listeler (Linked Lists)**
  - Tekli bağlı listeler
  - Çift yönlü bağlı listeler
  - Dairesel bağlı listeler
  
- **Yığınlar (Stacks)**
  - Array ve linked list uygulamaları
  - Uygulama senaryoları
  
- **Kuyruklar (Queues)**
  - Array ve linked list uygulamaları
  - Öncelikli kuyruklar
  - Deque (Çift uçlu kuyruk)
  
- **Hash Tabloları (Hash Tables)**
  - Hash fonksiyonları
  - Çakışma çözümleme teknikleri
  - Hash tablosu uygulamaları
  
- **Ağaçlar (Trees)**
  - İkili ağaçlar
  - İkili arama ağaçları (BST)
  - AVL ağaçları
  - Red-Black ağaçları
  - B-trees ve B+ ağaçları
  - Heap'ler (Min Heap, Max Heap)
  
- **Graflar (Graphs)**
  - Yönlü ve yönsüz graflar
  - Ağırlıklı graflar
  - Bitişiklik matrisi ve bitişiklik listesi temsilleri

## 3. Temel Algoritmalar

- **Sıralama Algoritmaları**
  - Karşılaştırma bazlı sıralama:
    - Bubble Sort
    - Selection Sort
    - Insertion Sort
    - Merge Sort
    - Quick Sort
    - Heap Sort
  - Non-karşılaştırma bazlı sıralama:
    - Counting Sort
    - Radix Sort
    - Bucket Sort
  
- **Arama Algoritmaları**
  - Linear Search
  - Binary Search
  - Interpolation Search
  
- **Graf Algoritmaları**
  - Genişlik Öncelikli Arama (BFS)
  - Derinlik Öncelikli Arama (DFS)
  - Dijkstra Algoritması
  - Bellman-Ford Algoritması
  - Floyd-Warshall Algoritması
  - Kruskal Algoritması
  - Prim Algoritması
  - Topological Sort
  
- **Dinamik Programlama**
  - Memoization
  - Tabulation
  - Temel DP problemleri
  
- **Greedy Algoritmalar**
  - Huffman Kodlaması
  - Aktivite Seçimi
  - Fractional Knapsack
  
- **Divide and Conquer**
  - Binary Search
  - Merge Sort
  - Quick Sort
  - Strassen's Matrix Multiplication
  
- **Backtracking**
  - N-Queens
  - Hamiltonian Cycle
  - Subset Sum
  - Graph Coloring

## 4. İleri Düzey Veri Yapıları

- **Disjoint Set (Union-Find)**
  - Path compression
  - Union by rank/size
  
- **Segment Trees**
  - Aralık sorguları
  - Lazy propagation
  
- **Fenwick Trees (Binary Indexed Trees)**
  - Kümülatif frekans tabloları
  - Range update operasyonları
  
- **Trie (Prefix Trees)**
  - Kelime aramaları
  - Otomatik tamamlama sistemleri
  
- **Suffix Trees ve Suffix Arrays**
  - Dize eşleştirme algoritmaları
  - Ukkonen's algoritması
  
- **Sparse Table**
  - Range Minimum Query (RMQ)
  
- **Skip List**
  - Probabilistik veri yapıları
  
- **Bloom Filters**
  - Probabilistik set üyelik testleri

## 5. İleri Düzey Algoritmalar

- **Gelişmiş Graf Algoritmaları**
  - Strongly Connected Components
  - Articulation Points ve Bridges
  - Network Flow:
    - Ford-Fulkerson Algoritması
    - Edmonds-Karp Algoritması
    - Dinic's Algoritması
  - Bipartite Matching
  - A* Arama Algoritması
  
- **String Algoritmaları**
  - KMP (Knuth-Morris-Pratt)
  - Rabin-Karp
  - Z Algoritması
  - Aho-Corasick
  - Suffix Array ve LCP
  
- **Geometrik Algoritmalar**
  - Convex Hull
  - Line Intersection
  - Closest Pair of Points
  - Sweep Line Algoritmaları
  
- **Bitwise Algoritmalar**
  - Bit manipülasyonu
  - Bit maskeleme teknikleri
  
- **Randomized Algoritmalar**
  - Las Vegas vs Monte Carlo algoritmaları
  - QuickSelect
  - Randomized Quick Sort
  
- **Aproximasyon Algoritmaları**
  - Travelling Salesman Problem için yaklaşımlar
  - Vertex Cover
  - Set Cover

## 6. Özel Alanlar ve Uygulamalar

- **Paralel Algoritmalar**
  - Divide and Conquer paralelizasyonu
  - Paralel sıralama ve arama
  
- **Dağıtık Algoritmalar**
  - Consensus Protokolleri
  - Leader Election
  
- **Kriptografik Algoritmalar**
  - RSA
  - Diffie-Hellman
  - Eliptik Eğri Kriptografisi
  
- **Makine Öğrenmesi için Algoritmalar**
  - k-Nearest Neighbors
  - Decision Trees
  - Clustering Algorithms
  
- **Big Data Algoritmaları**
  - MapReduce
  - Stream Processing
  - Sketching Algoritmaları

## 7. Pratik Yapma Stratejisi

1. Her veri yapısı ve algoritma için teoriyi öğrenin
2. Kağıt üzerinde ve kod yazarak uygulayın
3. LeetCode, HackerRank, CodeForces gibi platformlarda probleme dayalı alıştırmalar yapın
4. Her gün en az bir problem çözün
5. Zorlandığınız problemleri tekrar edin
6. Çözümlerinizi analiz edin ve optimize edin

## 8. Önerilen Kaynaklar

- **Kitaplar**:
  - "Introduction to Algorithms" (CLRS)
  - "Algorithms" by Robert Sedgewick
  - "Algorithm Design Manual" by Steven Skiena
  - "Competitive Programmer's Handbook" by Antti Laaksonen
  - "Grokking Algorithms" by Aditya Bhargava
  - "Elements of Programming Interviews"
  
- **Online Kurslar**:
  - Coursera'da Princeton'un Algorithms kursu
  - MIT OpenCourseWare'de algoritma dersleri
  - Stanford's Algorithms Specialization
  - Udemy'de DSA kursları
  
- **Problem Çözme Platformları**:
  - LeetCode
  - HackerRank
  - CodeForces
  - TopCoder
  - AtCoder
  - SPOJ
  - CodeChef
  
- **Yararlı Web Siteleri**:
  - GeeksforGeeks
  - Visualgo.net (algoritma görselleştirmeleri)
  - CP-Algorithms.com

## 9. Çalışma Planı Önerisi

### Başlangıç Seviyesi (1-2 Ay)
- Temel veri yapıları ve algoritmalar
- Zaman ve alan karmaşıklığı analizi
- Temel sıralama ve arama algoritmaları
- Easy seviye problem çözümleri

### Orta Seviye (3-5 Ay)
- Dinamik programlama
- Graf algoritmaları
- Gelişmiş veri yapıları
- Medium seviye problem çözümleri

### İleri Seviye (6+ Ay)
- Özel algoritmalar
- Optimizasyon teknikleri
- Competitive programming stratejileri
- Hard seviye problem çözümleri

## 10. Proje Bazlı Öğrenme

Her bir algoritma ve veri yapısı için gerçek dünya uygulamaları geliştirin:
- Veri tabanı tasarımı
- Yol bulma uygulaması
- Metin işleme ve arama motoru
- Optimizasyon problemleri çözücüsü
- Oyun AI'ları