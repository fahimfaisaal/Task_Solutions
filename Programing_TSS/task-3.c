#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    n = n / 2 + 1;

    printf("ODD -> ");
    for (int i = 1; i < n; i++) {
        printf("%d ", 2 * i - 1);
    }

    printf("\nEven -> ");
    for (int i = 1; i < n; i++) {
        printf("%d ", 2 * i);
    }
    printf("\n");

    return 0;
}