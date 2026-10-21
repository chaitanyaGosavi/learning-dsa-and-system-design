# DSA Learning Roadmap — TypeScript

> A structured roadmap covering the concepts, data structures, algorithms, patterns, and interview skills needed to build strong DSA fundamentals using TypeScript.

## 0. How to Use This Roadmap

Recommended sequence:

1. Learn the concept.
2. Implement it from scratch in TypeScript.
3. Understand time and space complexity.
4. Solve easy problems.
5. Solve medium problems.
6. Record mistakes and patterns.
7. Revisit the topic using spaced repetition.

Primary language: **TypeScript**

Recommended practice platform: **LeetCode**

---

# Phase 1 — TypeScript Foundations for DSA

## 1. TypeScript Basics

- [x] Variables: `let`, `const`
- [ ] Primitive types
- [ ] Type annotations
- [ ] Type inference
- [ ] Arrays
- [ ] Tuples
- [ ] Objects
- [ ] Interfaces
- [ ] Type aliases
- [ ] Functions
- [ ] Optional parameters
- [ ] Default parameters
- [ ] Generics
- [ ] Union types
- [ ] Null and undefined
- [ ] Type narrowing
- [ ] Classes
- [ ] Access modifiers
- [ ] `readonly`
- [ ] Enums
- [ ] Basic error handling

## 2. TypeScript Features Useful for DSA

- [ ] Array methods
- [ ] `Map`
- [ ] `Set`
- [ ] `Record`
- [ ] `Stack` implementation using arrays
- [ ] `Queue` implementation using arrays/index pointers
- [ ] String manipulation
- [ ] `StringBuilder` equivalent patterns
- [ ] Destructuring
- [ ] Spread/rest operators
- [ ] Iteration
- [ ] Custom comparators
- [ ] Sorting with `.sort()`
- [ ] Numeric pitfalls in JavaScript
- [ ] `Number.MAX_SAFE_INTEGER`
- [ ] `Infinity`
- [ ] BigInt basics

### Important Principle

Know when a built-in method is appropriate and when you should implement the underlying data structure or algorithm yourself.

---

# Phase 2 — Complexity Analysis

## 3. Time Complexity

Study:

- [x] What is algorithmic complexity?
- [x] Input size
- [x] Best case
- [x] Average case
- [x] Worst case
- [x] Big-O notation
- [x] Big-Theta
- [x] Big-Omega
- [x] Constant time
- [x] Logarithmic time
- [x] Linear time
- [x] Linearithmic time
- [x] Quadratic time
- [x] Exponential time
- [x] Factorial time

Know:

```text
O(1)
O(log n)
O(n)
O(n log n)
O(n²)
O(n³)
O(2ⁿ)
O(n!)
```

## 4. Space Complexity

- [x] Auxiliary space
- [x] Input space
- [x] Output space
- [x] Recursive call stack
- [x] In-place algorithms
- [x] Memory vs time trade-offs

## 5. Complexity Analysis Skills

Be able to analyze:

- [x] Single loops
- [x] Nested loops
- [x] Sequential loops
- [x] Conditional branches
- [x] Recursion
- [x] Recursive trees
- [x] Sorting algorithms
- [x] Searching algorithms
- [x] Hash-based solutions
- [x] Tree traversal
- [x] Graph traversal

---

# Phase 3 — Arrays

## 6. Array Fundamentals

- [x] Static vs dynamic arrays
- [x] Indexing
- [x] Traversal
- [x] Searching
- [x] Insertion
- [x] Deletion
- [x] Updating
- [x] Copying
- [x] Resizing
- [x] Multi-dimensional arrays

## 7. Array Techniques

- [x] Reverse array
- [x] Rotate array
- [x] Merge arrays
- [x] Frequency counting
- [x] Prefix sums
- [x] Suffix sums
- [x] Difference arrays
- [ ] Subarrays
- [ ] Maximum/minimum subarray
- [ ] Matrix traversal
- [ ] Spiral matrix
- [ ] Diagonal traversal

## 8. Important Array Algorithms

- [ ] Kadane's Algorithm
- [ ] Dutch National Flag Algorithm
- [ ] Boyer-Moore Majority Vote
- [ ] Merge intervals
- [ ] Array partitioning

---

# Phase 4 — Strings

## 9. String Fundamentals

- [ ] Character access
- [ ] String traversal
- [ ] Character codes
- [ ] String comparison
- [ ] String concatenation
- [ ] Substrings
- [ ] Subsequences
- [ ] Palindromes
- [ ] Anagrams
- [ ] Frequency counting

## 10. String Techniques

- [ ] Two pointers
- [ ] Sliding window
- [ ] Hashing
- [ ] Character frequency maps
- [ ] String normalization
- [ ] Pattern matching

## 11. Important String Problems

- [ ] Valid palindrome
- [ ] Valid anagram
- [ ] Longest substring without repeating characters
- [ ] Longest palindromic substring
- [ ] Group anagrams
- [ ] String compression
- [ ] Character replacement
- [ ] Subsequence checking

---

# Phase 5 — Searching

## 12. Linear Search

- [ ] Basic linear search
- [ ] Complexity
- [ ] Search with conditions

## 13. Binary Search

Understand:

- [ ] Binary search fundamentals
- [ ] Search space
- [ ] `low`, `high`, `mid`
- [ ] Boundary handling
- [ ] Lower bound
- [ ] Upper bound
- [ ] First occurrence
- [ ] Last occurrence
- [ ] Search insert position
- [ ] Search in rotated sorted array
- [ ] Finding peak
- [ ] Binary search on answer

### Binary Search on Answer

Learn how to recognize problems where the answer space is monotonic.

Examples:

- [ ] Minimum capacity
- [ ] Minimum eating speed
- [ ] Minimum time
- [ ] Maximum feasible value

---

# Phase 6 — Sorting

## 14. Basic Sorting

Study and implement:

- [ ] Bubble Sort
- [ ] Selection Sort
- [ ] Insertion Sort

Understand:

- [ ] Stability
- [ ] In-place sorting
- [ ] Best/worst cases

## 15. Advanced Sorting

- [ ] Merge Sort
- [ ] Quick Sort
- [ ] Heap Sort

Understand:

- [ ] Divide and conquer
- [ ] Partitioning
- [ ] Pivot selection
- [ ] Recursion
- [ ] Stability
- [ ] Worst-case behavior

## 16. Non-Comparison Sorting

- [ ] Counting Sort
- [ ] Radix Sort
- [ ] Bucket Sort

## 17. Sorting Concepts

- [ ] Stable vs unstable sorting
- [ ] In-place vs out-of-place
- [ ] Custom comparators
- [ ] Sorting objects
- [ ] When sorting is useful as a preprocessing step

---

# Phase 7 — Hashing

## 18. Hashing Fundamentals

- [ ] Hash function
- [ ] Hash table
- [ ] Hash map
- [ ] Hash set
- [ ] Key-value storage
- [ ] Collision concept
- [ ] Average vs worst-case complexity

## 19. TypeScript Hashing Tools

- [ ] `Map`
- [ ] `Set`
- [ ] `Record`

## 20. Hashing Patterns

- [ ] Frequency map
- [ ] Lookup table
- [ ] Duplicate detection
- [ ] Complement lookup
- [ ] Prefix-sum + hash map
- [ ] Grouping
- [ ] Counting

Important problems:

- [ ] Two Sum
- [ ] Contains Duplicate
- [ ] Valid Anagram
- [ ] Group Anagrams
- [ ] Longest Consecutive Sequence
- [ ] Subarray Sum Equals K

---

# Phase 8 — Two Pointers

## 21. Two Pointer Technique

Learn:

- [ ] Opposite-direction pointers
- [ ] Same-direction pointers
- [ ] Fast/slow pointers
- [ ] In-place modification
- [ ] Sorted-array two pointers

Applications:

- [ ] Pair sum
- [ ] Triplets
- [ ] Removing duplicates
- [ ] Palindrome checking
- [ ] Partitioning
- [ ] Linked lists

---

# Phase 9 — Sliding Window

## 22. Sliding Window Fundamentals

- [ ] Fixed-size window
- [ ] Variable-size window
- [ ] Expand window
- [ ] Shrink window
- [ ] Window state
- [ ] Frequency map
- [ ] Maintaining maximum/minimum

Patterns:

```text
Expand → Check → Shrink → Record Answer
```

Problems:

- [ ] Maximum sum subarray of size K
- [ ] Longest substring without repeating characters
- [ ] Minimum window substring
- [ ] Longest repeating character replacement
- [ ] Permutation in string

---

# Phase 10 — Linked Lists

## 23. Linked List Fundamentals

- [ ] Node
- [ ] Head
- [ ] Tail
- [ ] Singly linked list
- [ ] Doubly linked list
- [ ] Circular linked list

## 24. Operations

- [ ] Traverse
- [ ] Insert at beginning
- [ ] Insert at end
- [ ] Insert at position
- [ ] Delete
- [ ] Search
- [ ] Reverse

## 25. Linked List Patterns

- [ ] Fast and slow pointers
- [ ] Dummy node
- [ ] In-place reversal
- [ ] Multiple pointers
- [ ] Cycle detection

Algorithms/problems:

- [ ] Reverse linked list
- [ ] Middle of linked list
- [ ] Linked list cycle
- [ ] Remove nth node from end
- [ ] Merge two sorted lists
- [ ] Reorder list
- [ ] Intersection of linked lists
- [ ] Palindrome linked list

---

# Phase 11 — Stack

## 26. Stack Fundamentals

Principle:

```text
LIFO — Last In, First Out
```

Operations:

- [ ] Push
- [ ] Pop
- [ ] Peek
- [ ] Is empty

## 27. Stack Applications

- [ ] Parentheses matching
- [ ] Expression evaluation
- [ ] Expression conversion
- [ ] Undo operations
- [ ] Recursion simulation
- [ ] Backtracking

## 28. Monotonic Stack

Study:

- [ ] Increasing monotonic stack
- [ ] Decreasing monotonic stack
- [ ] Next greater element
- [ ] Next smaller element
- [ ] Previous greater element
- [ ] Previous smaller element

Problems:

- [ ] Valid Parentheses
- [ ] Min Stack
- [ ] Daily Temperatures
- [ ] Next Greater Element
- [ ] Largest Rectangle in Histogram

---

# Phase 12 — Queue and Deque

## 29. Queue

Principle:

```text
FIFO — First In, First Out
```

Learn:

- [ ] Enqueue
- [ ] Dequeue
- [ ] Front/peek
- [ ] Circular queue
- [ ] Queue implementation

## 30. Deque

- [ ] Double-ended queue
- [ ] Add/remove from both ends
- [ ] Monotonic deque

Applications:

- [ ] BFS
- [ ] Sliding window maximum
- [ ] Scheduling
- [ ] Task processing

---

# Phase 13 — Recursion

## 31. Recursion Fundamentals

Understand:

- [ ] Base case
- [ ] Recursive case
- [ ] Call stack
- [ ] Stack frames
- [ ] Recursion depth
- [ ] Return values
- [ ] Multiple recursive calls

## 32. Recursion Patterns

- [ ] Linear recursion
- [ ] Binary recursion
- [ ] Multiple recursion
- [ ] Recursion on arrays
- [ ] Recursion on strings
- [ ] Recursion on trees

## 33. Recursion Analysis

- [ ] Recurrence relations
- [ ] Recursion tree
- [ ] Stack space
- [ ] Time complexity

---

# Phase 14 — Divide and Conquer

## 34. Divide and Conquer

Learn:

```text
Divide
↓
Solve
↓
Combine
```

Algorithms:

- [ ] Merge Sort
- [ ] Quick Sort
- [ ] Binary Search
- [ ] Maximum subarray
- [ ] Divide-and-conquer selection

Understand:

- [ ] Recurrence relations
- [ ] Recursion tree
- [ ] Combining results

---

# Phase 15 — Trees

## 35. Tree Fundamentals

Terminology:

- [ ] Root
- [ ] Node
- [ ] Edge
- [ ] Parent
- [ ] Child
- [ ] Sibling
- [ ] Leaf
- [ ] Depth
- [ ] Height
- [ ] Level
- [ ] Subtree
- [ ] Ancestor
- [ ] Descendant

## 36. Binary Trees

- [ ] Binary tree
- [ ] Full binary tree
- [ ] Complete binary tree
- [ ] Perfect binary tree
- [ ] Balanced binary tree
- [ ] Skewed tree

## 37. Tree Traversals

### DFS

- [ ] Preorder
- [ ] Inorder
- [ ] Postorder

Learn both:

- [ ] Recursive
- [ ] Iterative

### BFS

- [ ] Level-order traversal

## 38. Binary Tree Problems

- [ ] Maximum depth
- [ ] Minimum depth
- [ ] Invert tree
- [ ] Same tree
- [ ] Symmetric tree
- [ ] Diameter
- [ ] Balanced tree
- [ ] Path sum
- [ ] Maximum path sum
- [ ] Lowest common ancestor
- [ ] Serialize/deserialize

---

# Phase 16 — Binary Search Trees

## 39. BST Fundamentals

Properties:

- [ ] Ordering property
- [ ] Search
- [ ] Insert
- [ ] Delete
- [ ] Minimum
- [ ] Maximum
- [ ] Predecessor
- [ ] Successor

## 40. BST Problems

- [ ] Validate BST
- [ ] Search BST
- [ ] Insert into BST
- [ ] Delete node
- [ ] Lowest common ancestor
- [ ] Kth smallest element
- [ ] Convert sorted array to BST

---

# Phase 17 — Heaps and Priority Queues

## 41. Heap Fundamentals

- [ ] Heap property
- [ ] Min heap
- [ ] Max heap
- [ ] Complete binary tree
- [ ] Array representation
- [ ] Parent/child indices
- [ ] Heapify

## 42. Heap Operations

- [ ] Insert
- [ ] Peek
- [ ] Extract min/max
- [ ] Heapify
- [ ] Build heap

Understand:

```text
Insert       O(log n)
Extract      O(log n)
Peek         O(1)
Build heap   O(n)
```

## 43. Priority Queue

TypeScript implementation concepts:

- [ ] Array-backed heap
- [ ] Custom comparator
- [ ] Min-priority queue
- [ ] Max-priority queue

Problems:

- [ ] Kth largest
- [ ] Top K frequent
- [ ] K closest points
- [ ] Merge K sorted lists
- [ ] Find median from data stream

---

# Phase 18 — Graph Fundamentals

## 44. Graph Terminology

- [ ] Vertex/node
- [ ] Edge
- [ ] Directed graph
- [ ] Undirected graph
- [ ] Weighted graph
- [ ] Unweighted graph
- [ ] Degree
- [ ] Path
- [ ] Cycle
- [ ] Connected component
- [ ] DAG
- [ ] Dense graph
- [ ] Sparse graph

## 45. Graph Representation

### Adjacency Matrix

- [ ] Structure
- [ ] Advantages
- [ ] Disadvantages
- [ ] Complexity

### Adjacency List

- [ ] Structure
- [ ] Advantages
- [ ] Disadvantages
- [ ] Complexity

### Edge List

- [ ] Structure
- [ ] Use cases

---

# Phase 19 — Graph Traversal

## 46. BFS

Learn:

- [ ] Queue
- [ ] Visited set
- [ ] Level traversal
- [ ] Shortest path in unweighted graphs

Problems:

- [ ] Number of Islands
- [ ] Rotting Oranges
- [ ] Flood Fill
- [ ] Word Ladder
- [ ] Shortest path in grid

## 47. DFS

Learn:

- [ ] Recursive DFS
- [ ] Iterative DFS
- [ ] Visited tracking
- [ ] Connected components
- [ ] Grid DFS

Problems:

- [ ] Number of Islands
- [ ] Clone Graph
- [ ] Flood Fill
- [ ] Pacific Atlantic Water Flow

---

# Phase 20 — Advanced Graph Algorithms

## 48. Cycle Detection

### Undirected Graph

- [ ] DFS
- [ ] BFS
- [ ] Union-Find

### Directed Graph

- [ ] DFS recursion stack
- [ ] Three-state DFS

## 49. Topological Sorting

- [ ] DAG
- [ ] Kahn's Algorithm
- [ ] DFS topological sort
- [ ] Indegree

Problems:

- [ ] Course Schedule
- [ ] Course Schedule II
- [ ] Alien Dictionary

## 50. Shortest Path

Study:

- [ ] BFS shortest path
- [ ] Dijkstra's Algorithm
- [ ] Bellman-Ford Algorithm
- [ ] Floyd-Warshall Algorithm

Understand when each algorithm is appropriate.

## 51. Minimum Spanning Tree

- [ ] Minimum spanning tree
- [ ] Prim's Algorithm
- [ ] Kruskal's Algorithm

## 52. Union-Find / Disjoint Set Union

Learn:

- [ ] Parent array
- [ ] Find
- [ ] Union
- [ ] Path compression
- [ ] Union by rank
- [ ] Union by size

Applications:

- [ ] Connected components
- [ ] Cycle detection
- [ ] Network connectivity
- [ ] Kruskal's algorithm

---

# Phase 21 — Greedy Algorithms

## 53. Greedy Fundamentals

Understand:

- [ ] Local optimum
- [ ] Global optimum
- [ ] Greedy choice
- [ ] Feasibility
- [ ] Exchange argument
- [ ] When greedy works
- [ ] When greedy fails

## 54. Greedy Algorithms/Problems

- [ ] Activity selection
- [ ] Fractional knapsack
- [ ] Job sequencing
- [ ] Interval scheduling
- [ ] Merge intervals
- [ ] Jump Game
- [ ] Gas Station
- [ ] Minimum number of platforms
- [ ] Huffman coding

---

# Phase 22 — Backtracking

## 55. Backtracking Fundamentals

Pattern:

```text
Choose
↓
Explore
↓
Unchoose
```

Understand:

- [ ] State
- [ ] Choice
- [ ] Constraint
- [ ] Decision tree
- [ ] Pruning

## 56. Backtracking Problems

- [ ] Subsets
- [ ] Subsets II
- [ ] Permutations
- [ ] Permutations II
- [ ] Combinations
- [ ] Combination Sum
- [ ] Combination Sum II
- [ ] Letter combinations
- [ ] N-Queens
- [ ] Sudoku
- [ ] Word Search

---

# Phase 23 — Dynamic Programming

## 57. DP Fundamentals

Understand:

- [ ] Optimal substructure
- [ ] Overlapping subproblems
- [ ] State
- [ ] Transition
- [ ] Base case
- [ ] Memoization
- [ ] Tabulation
- [ ] State compression

Learn the progression:

```text
Brute Force
↓
Recursion
↓
Memoization
↓
Tabulation
↓
Space Optimization
```

## 58. 1D Dynamic Programming

Problems:

- [ ] Fibonacci
- [ ] Climbing Stairs
- [ ] Min Cost Climbing Stairs
- [ ] House Robber
- [ ] House Robber II
- [ ] Decode Ways

## 59. 2D Dynamic Programming

Problems:

- [ ] Unique Paths
- [ ] Minimum Path Sum
- [ ] Longest Common Subsequence
- [ ] Edit Distance

## 60. Knapsack DP

Learn:

- [ ] 0/1 Knapsack
- [ ] Unbounded Knapsack
- [ ] Subset Sum
- [ ] Partition Equal Subset Sum
- [ ] Coin Change
- [ ] Coin Change II

## 61. String DP

- [ ] Longest Common Subsequence
- [ ] Longest Common Substring
- [ ] Edit Distance
- [ ] Longest Palindromic Subsequence
- [ ] Word Break

## 62. Advanced DP

- [ ] Longest Increasing Subsequence
- [ ] Interval DP
- [ ] Partition DP
- [ ] DP on trees
- [ ] Bitmask DP
- [ ] State-machine DP

---

# Phase 24 — Trie

## 63. Trie Fundamentals

Learn:

- [ ] Trie node
- [ ] Insert
- [ ] Search
- [ ] Prefix search
- [ ] Delete
- [ ] Trie traversal

Applications:

- [ ] Autocomplete
- [ ] Dictionary
- [ ] Prefix matching
- [ ] Word search

Problems:

- [ ] Implement Trie
- [ ] Design Add and Search Words
- [ ] Word Search II

---

# Phase 25 — Bit Manipulation

## 64. Bitwise Operators

Learn:

```text
&
|
^
~
<<
>>
>>>
```

## 65. Bit Techniques

- [ ] Check odd/even
- [ ] Check power of two
- [ ] Set a bit
- [ ] Clear a bit
- [ ] Toggle a bit
- [ ] Check a bit
- [ ] Count set bits
- [ ] XOR properties
- [ ] Bit masks
- [ ] Generate subsets using bit masks

Problems:

- [ ] Single Number
- [ ] Missing Number
- [ ] Number of 1 Bits
- [ ] Counting Bits
- [ ] Power of Two
- [ ] Subsets using bitmask

---

# Phase 26 — Advanced Data Structures

Study after the core topics are strong.

## 66. Segment Tree

- [ ] Range queries
- [ ] Point updates
- [ ] Build
- [ ] Query
- [ ] Update
- [ ] Lazy propagation

## 67. Fenwick Tree

- [ ] Binary Indexed Tree
- [ ] Prefix sums
- [ ] Point updates
- [ ] Range-query concepts

## 68. Advanced Structures

- [ ] Ordered sets/maps
- [ ] Interval trees
- [ ] Sparse tables
- [ ] Disjoint-set variants
- [ ] Monotonic queue
- [ ] Advanced tries

---

# Phase 27 — Important Algorithmic Patterns

Master these as reusable problem-solving patterns.

## 69. Core Patterns

- [ ] Brute force → optimized approach
- [ ] Two pointers
- [ ] Sliding window
- [ ] Prefix sum
- [ ] Hash map
- [ ] Hash set
- [ ] Fast/slow pointers
- [ ] Binary search
- [ ] Binary search on answer
- [ ] Sorting + scanning
- [ ] Stack
- [ ] Monotonic stack
- [ ] Queue
- [ ] Monotonic queue
- [ ] Heap / Top K
- [ ] Intervals
- [ ] BFS
- [ ] DFS
- [ ] Multi-source BFS
- [ ] Backtracking
- [ ] Greedy
- [ ] Divide and conquer
- [ ] Dynamic programming
- [ ] Topological sort
- [ ] Union-Find
- [ ] Bit manipulation

---

# Phase 28 — Matrix and Grid Problems

## 70. Matrix Techniques

- [ ] Matrix traversal
- [ ] Row/column traversal
- [ ] Spiral traversal
- [ ] Diagonal traversal
- [ ] Transpose
- [ ] Rotate matrix
- [ ] Flood fill
- [ ] Grid DFS
- [ ] Grid BFS
- [ ] Multi-source BFS
- [ ] Shortest path in grid
- [ ] Island problems
- [ ] Boundary traversal

---

# Phase 29 — Interval Problems

## 71. Intervals

Learn:

- [ ] Sorting intervals
- [ ] Merge intervals
- [ ] Insert interval
- [ ] Overlapping intervals
- [ ] Non-overlapping intervals
- [ ] Meeting rooms
- [ ] Meeting rooms II
- [ ] Interval scheduling
- [ ] Sweep-line concepts

---

# Phase 30 — Mathematical Algorithms

## 72. Math Basics

- [ ] GCD
- [ ] LCM
- [ ] Euclidean algorithm
- [ ] Prime numbers
- [ ] Prime checking
- [ ] Sieve of Eratosthenes
- [ ] Factorization
- [ ] Divisors
- [ ] Modular arithmetic
- [ ] Modular exponentiation
- [ ] Combinations
- [ ] Permutations
- [ ] Basic probability concepts

---

# Phase 31 — Advanced String Algorithms

Study after core DSA.

## 73. Pattern Matching

- [ ] Naive pattern matching
- [ ] KMP
- [ ] Z Algorithm
- [ ] Rolling hash
- [ ] Rabin-Karp

## 74. String Data Structures

- [ ] Trie
- [ ] Prefix function
- [ ] Suffix concepts
- [ ] Suffix array basics

---

# Phase 32 — Advanced Algorithm Concepts

## 75. Algorithm Design

Learn:

- [ ] Brute force
- [ ] Optimization
- [ ] Divide and conquer
- [ ] Greedy
- [ ] Dynamic programming
- [ ] Backtracking
- [ ] Randomized algorithms
- [ ] Amortized analysis

## 76. Correctness

Learn how to reason about:

- [ ] Preconditions
- [ ] Invariants
- [ ] Postconditions
- [ ] Loop invariants
- [ ] Proof by induction
- [ ] Exchange arguments
- [ ] Correctness of greedy algorithms
- [ ] Correctness of recursive algorithms

---

# Phase 33 — Problem-Solving Framework

For every problem, follow this process.

## Step 1 — Understand

Ask:

- [ ] What exactly is the input?
- [ ] What is the output?
- [ ] What are the constraints?
- [ ] Are duplicates possible?
- [ ] Is the input sorted?
- [ ] Is the data mutable?
- [ ] Are negative values possible?
- [ ] What edge cases exist?

## Step 2 — Brute Force

Determine:

- [ ] Simplest possible solution
- [ ] Complexity
- [ ] Why it may be too slow

## Step 3 — Identify the Pattern

Ask:

```text
Hashing?
Two pointers?
Sliding window?
Binary search?
Stack?
Heap?
Tree?
Graph?
Greedy?
Backtracking?
DP?
```

## Step 4 — Optimize

Look for:

- [ ] Reduced time complexity
- [ ] Reduced space complexity
- [ ] Preprocessing
- [ ] Sorting
- [ ] Hashing
- [ ] Memoization

## Step 5 — Implement

Write clean TypeScript.

## Step 6 — Test

Test:

- [ ] Normal case
- [ ] Empty input
- [ ] Single element
- [ ] Duplicate values
- [ ] Negative values
- [ ] Maximum/minimum constraints
- [ ] Already sorted input
- [ ] Reverse sorted input

## Step 7 — Analyze

Always record:

```text
Time Complexity:
Space Complexity:
```

---

# Phase 34 — Interview Skills

## 77. Coding Interview Process

Practice:

- [ ] Clarifying requirements
- [ ] Explaining approach
- [ ] Brute-force solution
- [ ] Optimized solution
- [ ] Complexity analysis
- [ ] Writing clean code
- [ ] Testing manually
- [ ] Handling edge cases
- [ ] Explaining trade-offs

## 78. Communication

Practice explaining:

1. What you are doing
2. Why you are doing it
3. Why the algorithm works
4. Complexity
5. Edge cases

Avoid silently coding for the entire interview.

---

# Phase 35 — DSA Revision System

## 79. Maintain a DSA Notebook

For every important topic, record:

```text
Topic:
Pattern:
When to use:
Core idea:
Template:
Time complexity:
Space complexity:
Common mistakes:
Representative problems:
```

## 80. Maintain a Mistake Log

For every failed problem, record:

- [ ] Problem
- [ ] Topic
- [ ] Pattern
- [ ] Why your approach failed
- [ ] Correct insight
- [ ] Correct solution
- [ ] Mistake type
- [ ] Date
- [ ] Review dates

## 81. Spaced Revision

Suggested review:

```text
Day 0   → Learn
Day 1   → Review
Day 3   → Review
Day 7   → Review
Day 14  → Review
Day 30  → Review
```

---

# Phase 36 — Recommended Problem Progression

## Level 1 — Foundation

Solve easy problems involving:

- [ ] Arrays
- [ ] Strings
- [ ] Hashing
- [ ] Two pointers
- [ ] Basic searching
- [ ] Basic sorting

Target: **40–60 problems**

## Level 2 — Core DSA

Solve:

- [ ] Sliding window
- [ ] Binary search
- [ ] Linked lists
- [ ] Stack
- [ ] Queue
- [ ] Recursion
- [ ] Trees
- [ ] Heap

Target: **60–100 problems**

## Level 3 — Advanced

Solve:

- [ ] Graphs
- [ ] Greedy
- [ ] Backtracking
- [ ] Dynamic programming
- [ ] Trie
- [ ] Union-Find
- [ ] Bit manipulation

Target: **80–120 problems**

## Level 4 — Interview Preparation

Focus primarily on:

- [ ] Medium problems
- [ ] Company-tagged problems
- [ ] Timed practice
- [ ] Mock interviews
- [ ] Weak areas

Target: **50–100 targeted problems**

---

# Phase 37 — Recommended Order of Study

Use this as the master sequence.

```text
01. TypeScript for DSA
02. Big-O and Complexity
03. Arrays
04. Strings
05. Hashing
06. Two Pointers
07. Sliding Window
08. Prefix Sum
09. Binary Search
10. Sorting
11. Linked Lists
12. Stack
13. Queue / Deque
14. Recursion
15. Divide and Conquer
16. Binary Trees
17. Binary Search Trees
18. Heaps / Priority Queues
19. Graph Fundamentals
20. BFS / DFS
21. Advanced Graph Algorithms
22. Greedy Algorithms
23. Backtracking
24. Dynamic Programming
25. Trie
26. Bit Manipulation
27. Intervals
28. Matrix / Grid Problems
29. Mathematical Algorithms
30. Advanced Data Structures
31. Advanced String Algorithms
32. Advanced Algorithm Design
33. Interview Problem Patterns
34. Mock Interviews
```

---

# Phase 38 — What to Prioritize for Software Engineering Interviews

Not every topic has equal priority.

## Tier 1 — Must Master

- [ ] Big-O
- [ ] Arrays
- [ ] Strings
- [ ] Hashing
- [ ] Two pointers
- [ ] Sliding window
- [ ] Binary search
- [ ] Linked lists
- [ ] Stack
- [ ] Queue
- [ ] Recursion
- [ ] Binary trees
- [ ] BST
- [ ] Heap
- [ ] BFS
- [ ] DFS
- [ ] Basic greedy
- [ ] Basic dynamic programming

## Tier 2 — Strongly Recommended

- [ ] Backtracking
- [ ] Topological sort
- [ ] Union-Find
- [ ] Dijkstra
- [ ] Trie
- [ ] Monotonic stack
- [ ] Intervals
- [ ] Prefix sum
- [ ] Bit manipulation
- [ ] Multi-source BFS

## Tier 3 — Advanced / Situational

- [ ] Segment tree
- [ ] Fenwick tree
- [ ] Floyd-Warshall
- [ ] Bellman-Ford
- [ ] Advanced DP
- [ ] KMP
- [ ] Z Algorithm
- [ ] Suffix arrays
- [ ] Sparse tables
- [ ] Advanced bitmask techniques

---

# Phase 39 — Final DSA Competency Checklist

You should eventually be able to answer "yes" to these.

## Complexity

- [ ] I can calculate Big-O.
- [ ] I understand time vs space trade-offs.
- [ ] I can analyze recursive algorithms.

## Arrays / Strings

- [ ] I can recognize two-pointer problems.
- [ ] I can recognize sliding-window problems.
- [ ] I can use prefix sums.
- [ ] I can solve common matrix problems.

## Hashing

- [ ] I know when to use Map.
- [ ] I know when to use Set.
- [ ] I can use frequency maps.
- [ ] I can optimize lookup-heavy problems.

## Linked Lists

- [ ] I can reverse a linked list.
- [ ] I can detect a cycle.
- [ ] I understand fast/slow pointers.
- [ ] I can merge linked lists.

## Stack / Queue

- [ ] I understand LIFO/FIFO.
- [ ] I can implement both.
- [ ] I understand monotonic stacks.
- [ ] I can recognize stack-based problems.

## Trees

- [ ] I can implement DFS.
- [ ] I can implement BFS.
- [ ] I understand preorder/inorder/postorder.
- [ ] I understand BST properties.
- [ ] I can solve common tree problems.

## Heaps

- [ ] I understand min/max heaps.
- [ ] I can implement heap operations.
- [ ] I can solve Top-K problems.

## Graphs

- [ ] I can represent a graph.
- [ ] I can implement BFS.
- [ ] I can implement DFS.
- [ ] I can detect cycles.
- [ ] I understand topological sorting.
- [ ] I understand shortest-path algorithms.
- [ ] I understand Union-Find.

## Greedy

- [ ] I can recognize common greedy patterns.
- [ ] I can explain why a greedy approach works.

## Backtracking

- [ ] I understand decision trees.
- [ ] I can implement choose/explore/unchoose.
- [ ] I can apply pruning.

## Dynamic Programming

- [ ] I can identify overlapping subproblems.
- [ ] I can define a DP state.
- [ ] I can write a recurrence.
- [ ] I can implement memoization.
- [ ] I can implement tabulation.
- [ ] I can optimize DP space.

## Interview Readiness

- [ ] I can solve unfamiliar medium problems.
- [ ] I can explain my approach before coding.
- [ ] I can analyze complexity.
- [ ] I can test edge cases.
- [ ] I can solve problems without immediately looking at solutions.
- [ ] I can recognize common problem patterns.

---

# Suggested Overall Target

A strong target is:

```text
Language:
TypeScript

Core concepts:
30+ major topics

Patterns:
20+ reusable patterns

Practice:
200–300 carefully selected problems

Primary difficulty:
Easy → Medium → selected Hard

Goal:
Understand patterns and problem-solving,
not memorize solutions.
```

## End Goal

The final objective is not simply to "finish DSA."

The objective is to develop this mental process:

```text
Problem
   ↓
Understand constraints
   ↓
Brute force
   ↓
Identify pattern
   ↓
Choose data structure
   ↓
Optimize
   ↓
Implement
   ↓
Test
   ↓
Analyze complexity
   ↓
Explain trade-offs
```

Once this process becomes natural, you are ready to transition from learning DSA to focused **coding interview preparation**.

# Phase 40 — YouTube Learning References

> Use one primary video/resource per topic. Watch the concept, implement it yourself in TypeScript, then solve problems. Some explanations use C++, Java, or Python; that is fine because the algorithm is language-independent.

## 40.1 TypeScript Foundations

### Primary
- [Learn TypeScript — Full Tutorial — freeCodeCamp](https://www.youtube.com/watch?v=30LWjhZzg50)
- [Learn TypeScript — Full Course for Beginners — freeCodeCamp](https://www.youtube.com/watch?v=SpwzRDUQ1GI)

Study: types, arrays, functions, interfaces, generics, classes, type narrowing, Map, Set, and TypeScript syntax useful for DSA.

## 40.2 Big-O and Complexity Analysis

### Primary
- [Big O Notation — freeCodeCamp](https://www.youtube.com/results?search_query=freeCodeCamp+Big+O+Notation)
- [Big O Notation — Abdul Bari](https://www.youtube.com/results?search_query=Abdul+Bari+Big+O+Notation)

Study: O(1), O(log n), O(n), O(n log n), O(n²), O(2ⁿ), O(n!), time/space complexity, loops, recursion, and amortized analysis.

## 40.3 Arrays

- [Arrays and Hashing — NeetCode](https://www.youtube.com/results?search_query=NeetCode+Arrays+Hashing)
- [Array Data Structure — Abdul Bari](https://www.youtube.com/results?search_query=Abdul+Bari+Array+Data+Structure)

Study: traversal, prefix/suffix sums, subarrays, matrices, Kadane's algorithm, Dutch National Flag, Boyer-Moore Majority Vote, and partitioning.

## 40.4 Strings

- [String Algorithms / String Problems — NeetCode](https://www.youtube.com/results?search_query=NeetCode+String+Algorithms)
- [String Data Structure — Abdul Bari](https://www.youtube.com/results?search_query=Abdul+Bari+String+Data+Structure)

Study: character manipulation, frequency counting, palindromes, anagrams, substrings, subsequences, hashing, sliding window, and two pointers.

## 40.5 Searching and Binary Search

- [Binary Search — NeetCode](https://www.youtube.com/results?search_query=NeetCode+Binary+Search)
- [Binary Search — Abdul Bari](https://www.youtube.com/results?search_query=Abdul+Bari+Binary+Search)

Study: boundaries, first/last occurrence, lower/upper bound, rotated arrays, peak finding, and binary search on answer.

## 40.6 Sorting

- [Sorting Algorithms — Abdul Bari](https://www.youtube.com/results?search_query=Abdul+Bari+Sorting+Algorithms)
- [Sorting Algorithms — freeCodeCamp](https://www.youtube.com/results?search_query=freeCodeCamp+Sorting+Algorithms)

Study and implement: Bubble, Selection, Insertion, Merge, Quick, Heap, Counting, Radix, and Bucket Sort. Also study stability and in-place sorting.

## 40.7 Hashing

- [Hash Tables — Abdul Bari](https://www.youtube.com/results?search_query=Abdul+Bari+Hash+Table)
- [Arrays & Hashing — NeetCode](https://www.youtube.com/results?search_query=NeetCode+Arrays+Hashing)

Study: hash functions, hash tables, Map, Set, collisions, frequency maps, lookup optimization, and prefix-sum + hash map.

## 40.8 Two Pointers

- [Two Pointers — NeetCode](https://www.youtube.com/results?search_query=NeetCode+Two+Pointers)

Study: opposite-direction pointers, same-direction pointers, fast/slow pointers, sorted-array two pointers, and in-place modification.

## 40.9 Sliding Window

- [Sliding Window — NeetCode](https://www.youtube.com/results?search_query=NeetCode+Sliding+Window)
- [Sliding Window — takeUforward / Striver](https://www.youtube.com/results?search_query=Striver+Sliding+Window)

Study: fixed and variable windows, window state, frequency maps, expand/shrink patterns, and maximum/minimum windows.

## 40.10 Linked Lists

- [Linked List — NeetCode](https://www.youtube.com/results?search_query=NeetCode+Linked+List)
- [Linked List — Abdul Bari](https://www.youtube.com/results?search_query=Abdul+Bari+Linked+List)

Study: singly/doubly/circular lists, insertion/deletion, reversal, fast/slow pointers, dummy nodes, and cycle detection.

## 40.11 Stack

- [Stack — NeetCode](https://www.youtube.com/results?search_query=NeetCode+Stack)
- [Stack Data Structure — Abdul Bari](https://www.youtube.com/results?search_query=Abdul+Bari+Stack+Data+Structure)

Study: LIFO, push/pop/peek, parentheses, expression evaluation, monotonic stacks, and next greater/smaller element.

## 40.12 Queue and Deque

- [Queue Data Structure — Abdul Bari](https://www.youtube.com/results?search_query=Abdul+Bari+Queue+Data+Structure)
- [Queue / Deque Problems — takeUforward](https://www.youtube.com/results?search_query=takeUforward+Queue+Deque+DSA)

Study: FIFO, queue implementation, circular queue, deque, monotonic deque, BFS, and sliding-window maximum.

## 40.13 Recursion

- [Recursion — Abdul Bari](https://www.youtube.com/results?search_query=Abdul+Bari+Recursion)
- [Recursion — takeUforward / Striver](https://www.youtube.com/results?search_query=Striver+Recursion+DSA)

Study: base/recursive cases, call stack, recursion trees, multiple recursion, recurrence relations, and recursive arrays/strings/trees.

## 40.14 Divide and Conquer

- [Divide and Conquer — Abdul Bari](https://www.youtube.com/results?search_query=Abdul+Bari+Divide+and+Conquer)

Study: divide/solve/combine, recurrence relations, Merge Sort, Quick Sort, Binary Search, and maximum subarray.

## 40.15 Trees and Binary Trees

- [Trees — NeetCode](https://www.youtube.com/results?search_query=NeetCode+Trees)
- [Tree Data Structure — Abdul Bari](https://www.youtube.com/results?search_query=Abdul+Bari+Tree+Data+Structure)

Study: tree terminology, binary trees, DFS, BFS, preorder, inorder, postorder, level order, height, diameter, LCA, paths, and serialization.

## 40.16 Binary Search Trees

- [Binary Search Tree — Abdul Bari](https://www.youtube.com/results?search_query=Abdul+Bari+Binary+Search+Tree)
- [BST — NeetCode](https://www.youtube.com/results?search_query=NeetCode+Binary+Search+Tree)

Study: BST property, search, insert, delete, min/max, predecessor/successor, validate BST, kth smallest, and LCA.

## 40.17 Heaps and Priority Queues

- [Heap Data Structure — Abdul Bari](https://www.youtube.com/results?search_query=Abdul+Bari+Heap+Data+Structure)
- [Heap / Priority Queue — NeetCode](https://www.youtube.com/results?search_query=NeetCode+Heap+Priority+Queue)

Study: min/max heaps, heap property, heapify, build heap, priority queues, Top-K, and two-heaps problems.

## 40.18 Graph Fundamentals

- [Graph Data Structure — Abdul Bari](https://www.youtube.com/results?search_query=Abdul+Bari+Graph+Data+Structure)
- [Graphs — NeetCode](https://www.youtube.com/results?search_query=NeetCode+Graphs)

Study: vertices, edges, directed/undirected, weighted/unweighted, DAGs, dense/sparse graphs, adjacency matrix/list, and edge lists.

## 40.19 BFS and DFS

- [Graph Traversal BFS DFS — Abdul Bari](https://www.youtube.com/results?search_query=Abdul+Bari+Graph+Traversal+BFS+DFS)
- [Graph BFS DFS — NeetCode](https://www.youtube.com/results?search_query=NeetCode+Graph+BFS+DFS)

Study: BFS, DFS, recursive/iterative DFS, visited sets, connected components, grid traversal, multi-source BFS, and unweighted shortest paths.

## 40.20 Advanced Graph Algorithms

- [Graph Algorithms — Abdul Bari](https://www.youtube.com/results?search_query=Abdul+Bari+Graph+Algorithms)
- [Advanced Graphs — NeetCode](https://www.youtube.com/results?search_query=NeetCode+Advanced+Graphs)

Study: cycle detection, topological sort, Kahn's algorithm, Dijkstra, Bellman-Ford, Floyd-Warshall, Prim, Kruskal, MST, and Union-Find.

## 40.21 Greedy Algorithms

- [Greedy Algorithms — Abdul Bari](https://www.youtube.com/results?search_query=Abdul+Bari+Greedy+Algorithms)
- [Greedy Algorithms — takeUforward](https://www.youtube.com/results?search_query=Striver+Greedy+Algorithms)

Study: greedy choice, local/global optimum, exchange arguments, activity selection, fractional knapsack, job sequencing, intervals, Jump Game, Gas Station, and Huffman coding.

## 40.22 Backtracking

- [Backtracking — NeetCode](https://www.youtube.com/results?search_query=NeetCode+Backtracking)
- [Recursion and Backtracking — takeUforward](https://www.youtube.com/results?search_query=Striver+Recursion+Backtracking)

Study: decision trees, state, choices, constraints, choose/explore/unchoose, pruning, subsets, permutations, combinations, N-Queens, Sudoku, and Word Search.

## 40.23 Dynamic Programming

- [Dynamic Programming — NeetCode](https://www.youtube.com/results?search_query=NeetCode+Dynamic+Programming)
- [Dynamic Programming — takeUforward / Striver](https://www.youtube.com/results?search_query=Striver+Dynamic+Programming)
- [Dynamic Programming — Abdul Bari](https://www.youtube.com/results?search_query=Abdul+Bari+Dynamic+Programming)

Study: overlapping subproblems, optimal substructure, state, transitions, memoization, tabulation, space optimization, 1D/2D DP, knapsack, string DP, LIS, interval DP, tree DP, and bitmask DP.

Recommended progression:

```text
Recursion → Brute Force → Memoization → Tabulation → Space Optimization → Advanced DP
```

## 40.24 Trie

- [Trie — NeetCode](https://www.youtube.com/results?search_query=NeetCode+Trie)
- [Trie Data Structure — Abdul Bari](https://www.youtube.com/results?search_query=Abdul+Bari+Trie+Data+Structure)

Study: trie nodes, insert, search, prefix search, delete, autocomplete, and word search.

## 40.25 Bit Manipulation

- [Bit Manipulation — NeetCode](https://www.youtube.com/results?search_query=NeetCode+Bit+Manipulation)
- [Bit Manipulation — Abdul Bari](https://www.youtube.com/results?search_query=Abdul+Bari+Bit+Manipulation)

Study: AND, OR, XOR, NOT, shifts, set/clear/toggle/check bits, counting bits, XOR tricks, masks, powers of two, and bitmask subsets.

## 40.26 Segment Tree and Fenwick Tree

- [Segment Tree — Abdul Bari](https://www.youtube.com/results?search_query=Abdul+Bari+Segment+Tree)
- [Fenwick Tree / Binary Indexed Tree](https://www.youtube.com/results?search_query=Fenwick+Tree+Binary+Indexed+Tree)

Study: range queries, point updates, tree construction, lazy propagation, Fenwick trees, and prefix sums.

> Priority: low for general software-engineering interviews. Study after the core roadmap is strong.

## 40.27 Matrix and Grid Problems

- [Matrix / Grid Problems — NeetCode](https://www.youtube.com/results?search_query=NeetCode+Matrix+Grid+Problems)

Study: traversal, spiral matrix, transpose, rotation, flood fill, grid BFS/DFS, multi-source BFS, islands, and shortest paths.

## 40.28 Interval Problems

- [Intervals — NeetCode](https://www.youtube.com/results?search_query=NeetCode+Intervals)
- [Interval Problems — takeUforward](https://www.youtube.com/results?search_query=Striver+Intervals+DSA)

Study: sorting intervals, merge/insert interval, overlap, meeting rooms, non-overlapping intervals, scheduling, and sweep-line concepts.

## 40.29 Mathematical Algorithms

- [Mathematics for DSA — Abdul Bari](https://www.youtube.com/results?search_query=Abdul+Bari+Mathematics+for+Data+Structures+and+Algorithms)

Study: GCD, LCM, Euclidean algorithm, primes, Sieve, factorization, divisors, modular arithmetic, modular exponentiation, combinations, and permutations.

## 40.30 Advanced String Algorithms

- [KMP String Matching — Abdul Bari](https://www.youtube.com/results?search_query=Abdul+Bari+KMP+String+Matching)
- [Rabin-Karp / Rolling Hash](https://www.youtube.com/results?search_query=Rabin+Karp+Rolling+Hash+algorithm)
- [Z Algorithm](https://www.youtube.com/results?search_query=Z+Algorithm+String+Matching)

Study: KMP, prefix function, Z Algorithm, Rabin-Karp, rolling hash, and suffix-array basics.

> Priority: advanced/situational. Do not study these before the core interview patterns.

---

# Phase 41 — Recommended YouTube Channels

## NeetCode

**Best for:** Interview-focused DSA and problem-solving patterns.

- [NeetCode YouTube Channel](https://www.youtube.com/@NeetCode)
- [NeetCode DSA Search](https://www.youtube.com/results?search_query=NeetCode+DSA)

Best for arrays, hashing, two pointers, sliding window, binary search, linked lists, trees, graphs, heaps, backtracking, DP, and bit manipulation.

## Abdul Bari

**Best for:** Deep conceptual understanding and algorithm fundamentals.

- [Abdul Bari YouTube Channel](https://www.youtube.com/@abdul_bari)
- [Abdul Bari DSA Search](https://www.youtube.com/results?search_query=Abdul+Bari+DSA)

Best for Big-O, recursion, sorting, searching, trees, graphs, greedy, DP, and mathematical algorithms.

## takeUforward / Striver

**Best for:** Interview problem solving and large problem series.

- [takeUforward YouTube Channel](https://www.youtube.com/@takeUforward)
- [Striver DSA Search](https://www.youtube.com/results?search_query=Striver+DSA)

Best for arrays, binary search, recursion, backtracking, trees, graphs, greedy, and DP.

## freeCodeCamp

**Best for:** Long-form courses and fundamentals.

- [freeCodeCamp YouTube Channel](https://www.youtube.com/@freecodecamp)
- [freeCodeCamp DSA Search](https://www.youtube.com/results?search_query=freeCodeCamp+Data+Structures+Algorithms)

Best for TypeScript, JavaScript, algorithms, data structures, and computer-science fundamentals.

---

# Phase 42 — Primary Resource Assignment

| Topic | Primary Resource |
|---|---|
| TypeScript | freeCodeCamp |
| Big-O | Abdul Bari |
| Arrays | NeetCode |
| Strings | NeetCode |
| Hashing | NeetCode |
| Two Pointers | NeetCode |
| Sliding Window | NeetCode |
| Binary Search | NeetCode |
| Sorting | Abdul Bari |
| Linked Lists | NeetCode |
| Stack | NeetCode |
| Queue | Abdul Bari / takeUforward |
| Recursion | Abdul Bari / takeUforward |
| Divide & Conquer | Abdul Bari |
| Trees | NeetCode |
| BST | Abdul Bari / NeetCode |
| Heap | NeetCode / Abdul Bari |
| Graphs | NeetCode + Abdul Bari |
| Greedy | takeUforward / Abdul Bari |
| Backtracking | NeetCode / takeUforward |
| Dynamic Programming | NeetCode + takeUforward |
| Trie | NeetCode |
| Bit Manipulation | NeetCode |
| Segment Tree | Abdul Bari |
| Fenwick Tree | Dedicated topic search |
| Advanced Strings | Abdul Bari / dedicated topic videos |
| Interview Patterns | NeetCode |

---

# Phase 43 — How to Use YouTube While Learning DSA

Do **not** watch every video listed above.

Use:

```text
DSA Topic
   ↓
Watch ONE primary explanation
   ↓
Take short notes
   ↓
Implement in TypeScript
   ↓
Solve 2–3 easy problems
   ↓
Solve 3–5 medium problems
   ↓
Record mistakes and patterns
   ↓
Review after 1, 3, 7, 14 and 30 days
```

### Rules

1. Do not binge-watch DSA.
2. Aim for roughly **30% learning and 70% coding/problem solving**.
3. Pause problem videos before the solution and attempt the problem yourself.
4. Never copy a solution directly; close the video and re-implement it in TypeScript.
5. Use one primary teacher per topic and a second source only when the first explanation is unclear.
6. A topic is complete only when you can explain it, implement it, recognize it, solve representative problems, and analyze complexity.

---

# Phase 44 — TypeScript Implementation Rule

The explanation language does not have to match your implementation language.

```text
Watch:
C++ / Java / Python explanation

Understand:
Algorithm + data structure + complexity

Implement:
TypeScript
```

Implement these data structures yourself:

```text
Array utilities
Linked List
Doubly Linked List
Stack
Queue
Deque
Hash Table
Min Heap
Max Heap
Binary Tree
BST
Graph
Trie
Union-Find
Segment Tree
Fenwick Tree
```

Implement these algorithms at least once:

```text
Linear Search
Binary Search
Bubble Sort
Selection Sort
Insertion Sort
Merge Sort
Quick Sort
Heap Sort
BFS
DFS
Dijkstra
Topological Sort
Union-Find
Prim
Kruskal
Kadane
Backtracking template
1D DP
2D DP
Knapsack
LCS
LIS
```

---

# Phase 45 — Recommended Overall Learning Path

Because you are using TypeScript and learning DSA for software-engineering interviews:

```text
TypeScript fundamentals
        ↓
freeCodeCamp

Deep algorithm concepts
        ↓
Abdul Bari

Interview patterns
        ↓
NeetCode

Large problem-solving practice
        ↓
NeetCode + takeUforward

Practice
        ↓
LeetCode
```

This gives you a balance of:

```text
Conceptual depth
+
Interview patterns
+
TypeScript implementation
+
Problem-solving practice
```

---

# Phase 46 — Additional Reference Links

- [NeetCode DSA Course](https://neetcode.io/courses/dsa-for-beginners/)
- [NeetCode Roadmap](https://neetcode.io/roadmap)
- [GeeksforGeeks DSA Roadmap](https://www.geeksforgeeks.org/dsa/complete-roadmap-to-learn-dsa-from-scratch/)
- [LeetCode](https://leetcode.com/)
- [GeeksforGeeks](https://www.geeksforgeeks.org/)
- [TypeScript Official Documentation](https://www.typescriptlang.org/docs/)
- [TypeScript Playground](https://www.typescriptlang.org/play)

---

# Phase 47 — Final Learning Workflow

```text
                    ┌───────────────────┐
                    │    DSA Topic      │
                    └─────────┬─────────┘
                              ↓
                    ┌───────────────────┐
                    │ Watch YouTube     │
                    │ Primary Resource  │
                    └─────────┬─────────┘
                              ↓
                    ┌───────────────────┐
                    │ Read / Take Notes │
                    └─────────┬─────────┘
                              ↓
                    ┌───────────────────┐
                    │ Implement in TS   │
                    └─────────┬─────────┘
                              ↓
                    ┌───────────────────┐
                    │ Easy Problems     │
                    │ 2–3               │
                    └─────────┬─────────┘
                              ↓
                    ┌───────────────────┐
                    │ Medium Problems   │
                    │ 3–5               │
                    └─────────┬─────────┘
                              ↓
                    ┌───────────────────┐
                    │ Patterns +        │
                    │ Mistake Log       │
                    └─────────┬─────────┘
                              ↓
                    ┌───────────────────┐
                    │ Spaced Revision   │
                    └─────────┬─────────┘
                              ↓
                    ┌───────────────────┐
                    │ Next Topic        │
                    └───────────────────┘
```

## Definition of Done

For each topic:

- [ ] Explain the concept without the video.
- [ ] Implement the core data structure/algorithm in TypeScript.
- [ ] State time complexity.
- [ ] State space complexity.
- [ ] Recognize when the technique applies.
- [ ] Solve at least 2 easy problems.
- [ ] Solve at least 3 medium problems.
- [ ] Explain the solution verbally.
- [ ] Re-solve at least one problem after a few days.

---

## Resource Selection Note

The original roadmap remains the source of truth for **what to study**. The YouTube references are supporting resources for **how to learn it**.

For current video availability, playlists, and ordering, prefer the creator's official YouTube channel or current roadmap.
