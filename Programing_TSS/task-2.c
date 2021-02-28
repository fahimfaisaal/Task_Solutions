/**
 * Sum of 1 to n numbers O(1)
*/
#include <stdio.h>

int main() {
    long double sum, from, to, swap, start, end;

    printf("From: ");
    scanf("%Lf", &from);

    printf("To: ");
    scanf("%Lf", &to);

    if (from > to) {
        swap = from;
        from = to;
        to = swap;
    }

    start = from;
    end = to;

    //* main formula -> (n * (n + 1)) / 2
    from = (from * (from + 1)) / 2 - from; //* substract from for inclusive
    to = (to * (to + 1)) / 2;

    sum = to - from;
    printf("Summetion of %.0Lf to %0.Lf = %.0Lf\n", start, end, sum);

    return 0;
}