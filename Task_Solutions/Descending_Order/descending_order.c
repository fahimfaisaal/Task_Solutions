#include <stdio.h>

void main() {
    int a, b, c, condition;
    printf("Input three Integer Number:\n");
    scanf("%d %d %d", &a, &b, &c);
    int Big = a, Medium = b, Small = c;

    while (1) {
        condition = Big == Medium && Medium == Small && Small == Big;
        if (condition) {
            printf("The inputs are equal, Please try again:\n");
            scanf("%d %d %d", &a, &b, &c);
            Big = a, Medium = b, Small = c;
        } else {
        if (a <= b && a <= c) {
            Small = a;

            if (b > c) {
                Medium = c;
                Big = b;
            } else {
                Medium = b;
                Big = c;
            }
        } else if (b <= a && b <= c) {
            Small = b;

            if (a > c) {
                Medium = c;
            } else {
                Medium = a;
                Big = c;
            }
        } else if (b >= a && b >= c) {
            Big = b;

            if (a > c) {
                Medium = a;
                Small = c;
            } else {
                Medium = c;
                Small = a;
            }
        }

        printf("Descending Order: %d %d %d\n", Big, Medium, Small);
        break;
        }
    }
}