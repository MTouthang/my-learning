# CPP notes

## Pairs

- In C++, a pair is a data structure provided by the Standard Template Library (STL) that can hold two values, possibly of different types.
- The values are stored as a single object and are accessible through two public members: first and second.

```cpp
// declaration
pair <int, int> p = {1, 3}

    // Creating a pair
    std::pair<int, std::string> myPair(1, "Hello");

    // Accessing the elements
    std::cout << "First: " << myPair.first << std::endl;  // 1
    std::cout << "Second: " << myPair.second << std::endl; // hello
    
    // nested pair
    std::pair<int, std::pair<int, int>> arr[] = {1, {3, 4}};

    std::cout << p.first << " " << p.second.first << " " << p.second.second << std::endl;
    
    // array with pairs
    std::pair<int, int> arr[] = {{1, 2}, {3, 4}, {5, 6}};

    std:: cout<< arr[1].second; // 4
    std:: cout<< arr[1].first; // 3

    
```

### add
