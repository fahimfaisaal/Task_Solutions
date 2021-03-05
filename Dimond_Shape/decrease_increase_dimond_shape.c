#include <stdio.h>

void printNumber(int left, int right, int innerSpace) {
    printf("%d", left);

    for (int i = 0; i < innerSpace; i++) {
        printf(" ");
    }

    printf("%d", right);
}

int main() {
    int n;
    printf("Enter a number: ");
    scanf("%d", &n);
    printf("\n");

    int step = 1,
        outerSpace = n,
        innerSpace = 1,
        innerStep = 2,
        left = n, right = n;

    for (int i = 0; i < n * 2 - 1; i++) {
        for (int s = 0; s < outerSpace; s++) {
            printf(" ");
        }

        if (!i || i == n * 2 - 2) {
            printf("%d", n);
        } else {
            printNumber(left, right, innerSpace);
            innerSpace += innerStep;
        }

        if (left == 1) {
            step = -1;
            innerSpace -= 4;
            innerStep = -2;
        }

        printf("\n");

        outerSpace -= step, left -= step, right += step;
    }

    return 0;
}