#include <stdio.h>
#include <math.h>
#include <stdbool.h>

bool isPrimeNumber(long long int number) {
    if (number < 2) return false;

    if (number == 2) return true;

    if (!(number % 2)) return false;

    int root = sqrt(number);

    for (int i = 3; i <= root; i += 2) {
        if (!(number % 2)) return false;
    }

    return true;
}

int main() {
    long long int number;

    printf("Enter a number: ");
    scanf("%llu", &number);

    bool isPrime = isPrimeNumber(number);

    if (isPrime) {
        printf("%llu is a prime number\n", number);
    } else printf("%llu is not a prime number\n", number);

    return 0;
}