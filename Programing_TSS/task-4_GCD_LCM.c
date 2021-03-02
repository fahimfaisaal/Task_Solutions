#include <stdio.h>

int GCD(int a, int b) {
    if (!a) return b;
    if (!b) return a;

    int temp;
    while (b) {
        temp = b;
        b = a % b;
        a = temp;
    }

    return a;
}

int main() {
    int a, b, x, gcd, lcm;

    printf("Enter the first number: ");
    scanf("%d", &a);
    
    printf("Enter the second number: ");
    scanf("%d", &b);

    gcd = GCD(a, b);

    lcm = (a * b) / gcd;

    printf("The GCD is = %d\n", gcd);
    printf("The LCM is = %d\n", lcm);

    return 0;
}