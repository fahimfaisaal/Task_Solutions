#include <stdio.h>

int isDigit(char c) {
    if ((char)c > 47 && (char)c < 58) {
        return 1;
    }

    return 0;
}

int main() {
    char c;
    scanf("%c", &c);

    if (isDigit(c)) {
        printf("%c is a digit\n", c);
    } else printf("%c is not a digit\n", c);

    return 0;
}