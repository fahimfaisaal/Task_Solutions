#include <stdio.h>

int binarySearch(int *arr, int left, int right, int el) {
    if (left <= right) {
        int mid = (left + right) / 2;

        if (arr[mid] == el) {
            return mid;
        }

        if (arr[mid] < el) {
            return binarySearch(arr, mid + 1, right, el);
        }

        return binarySearch(arr, left, mid - 1, el);
    }

    return -1;
}

int main() {
    int arr[1000000];

    for (int i = 0; i < 1000000; i++) {
        arr[i] = i + 3;
    }

    int search;
    scanf("%d", &search);

    int result = binarySearch(arr, 0, 999999, search);

    printf("The Index Number -> %d\n", result);

    return 0;
}