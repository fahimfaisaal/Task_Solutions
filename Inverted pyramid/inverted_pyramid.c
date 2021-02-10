#include <stdio.h>

void main() {

    int line, space, star, number;

    scanf("%d", &number);

//* pyramid - space
    for (line = 1; line <= number; line++) {
        for (space = number - 1; space >= line; space--) {
            printf(" ");
        }

        for (star = 1; star <= line; star++) {
            printf("= ");
        }
            printf("\n");
    }
    printf("\n");
    
//* Inverted Pyramid - space
    for (line = 1; line <= number; line++) {
        for (space = 0; space <= line - 2; space++) {
            printf(" ");
        }

        for (star = number; star >= line; star--) {
            printf("- ");
        }
            printf("\n");
    }
    printf("\n");

//* Pyramid
        for (line = 1; line <= number; line++) {
        for (space = number - 1; space >= line; space--) {
            printf(" ");
        }

        for (star = 2; star <= line * 2; star++) {
            printf("=");
        }
            printf("\n");
    }
    printf("\n");

    //* Inverted Pyramid
    for (line = 1; line <= number; line++) {
        for (space = 0; space <= line - 2; space++) {
            printf(" ");
        }

        for (star = (number * 2); star >= (line * 2); star--) {
            printf("-");
        }
            printf("\n");
    }
}