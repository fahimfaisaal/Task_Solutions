#include <stdio.h>
#include <math.h>

void main() {

//* Problem 1038 - Snack
    // int product_code, quantity;
    // char str[] = "Total: R$";
    // scanf("%d %d", &product_code, &quantity);

    // if (product_code == 1) {
    //     printf("%s %.2f\n", str, 4.00 * quantity);
    // } else if (product_code == 2) {
    //     printf("%s %.2f\n", str, 4.50 * quantity);
    // } else if (product_code == 3) {
    //     printf("%s %.2f\n", str, 5.00 * quantity);
    // }else if (product_code == 4) {
    //     printf("%s %.2f\n", str, 2.00 * quantity);
    // } else if (product_code == 5) {
    //     printf("%s %.2f\n", str, 1.50 * quantity);
    // }

//* Problem 1040 - Average 3
    // float N1, N2, N3, N4, N5;
    // float Media, Average;
    // scanf("%f %f %f %f", &N1, &N2, &N3, &N4);
    // Media = ((N1 * 2.0) + (N2 * 3.0) + (N3 * 4.0) + N4) / 10;

    // printf("Media: %.1f\n", Media);
    // if (Media >= 7.0) {
    //     printf("Aluno aprovado.\n");
    // } else if (5.0 <= Media) {
    //     printf("Aluno em exame.\n");
    //     scanf("%f", &N5);
    //     printf("Nota do exame: %.1f\n", N5);
    //     Average = (N5 + Media) / 2.0;
    //     (Average > 5.0) ? printf("Aluno aprovado.\n") : printf("Aluno reprovado.\n");
    //     printf("Media final: %.1f\n", Average);
    // } else {
    //     printf("Aluno reprovado.\n");
    // }

//* Problem 1041 - Coordinates of a Point
    // float x , y;
    // scanf("%f %f", &x, &y);

    // if (x == 0.0 && y == 0.0) {
    //     printf("Origem\n");
    // } else if (y == 0) {
    //     printf("Eixo X\n");
    // } else if (x == 0) {
    //     printf("Eixo Y\n");
    // } else if (x > 0.0) {
    //     (y > 0.0) ? printf("Q1\n") : printf("Q4\n");
    // } else {
    //     (y > 0.0) ?  printf("Q2\n") : printf("Q3\n");
    // }

//* Problem 1042 - Simple sort
    // int a, b, c;
    // scanf("%d %d %d", &a, &b, &c);
    // int small = a, medium = b, big = c;

    // if (a >= b && a >= c) {
    //     big = a;

    //     if (b > c) {
    //         small = c;
    //     } else {
    //         medium = c;
    //         small = b;
    //     }
    // } else if (b >= c && b >= a) {
    //     big = b;

    //     if (a > c) {
    //         medium = a;
    //         small = c;
    //     } else {
    //         medium = c;
    //     }
    // } else if (c >= a && c >= b) {
    //     big = c;

    //     if (a > b) {
    //         medium = a;
    //         small = b;
    //     }
    // }

    // printf("%d\n%d\n%d\n\n", small, medium, big);
    // printf("%d\n%d\n%d\n", a, b, c);

//* Problem 1043 - Triangle
    // float a, b, c, area, Perimetro;
    // scanf("%f %f %f", &a, &b, &c);

    // Perimetro = a + b + c;
    // area = ((a + b) * c) / 2;
    // (a < (b + c) && b < (a + c) && c < (a + b)) ?  printf("Perimetro = %.1f\n", Perimetro) : printf("Area = %.1f\n", area);

//* Problem 1044 - Multiples
    // int A, B, resultA, resultB;
    // scanf("%d %d", &A, &B);
    // resultA = A % B == 0;
    // resultB = B % A == 0;

    // if (resultA || resultB) {
    //     printf("Sao Multiplos\n");
    // } else {
    //     printf("Nao sao Multiplos\n");
    // }


}