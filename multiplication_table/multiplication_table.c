#include <stdio.h>

void multiplicationTable(long double number) {
    for (int i = 1; i < 11; i++) {
        printf("%0.Lf * %d = %0.Lf\n", number, i, number * i);
    }
}

int main() {
    long double number;

    printf("Enter a number: ");
    scanf("%Lf", &number);

    multiplicationTable(number);

    return 0;
}