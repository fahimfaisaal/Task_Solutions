#include <stdio.h>

int main() {
    int arr[100], position[100];
    int positionIndex = 0;
    int indexNumber;
    int value;

    while (1) {

        int isValidIndex = 0;
        
        //* Index form user
        printf("Enter the index number : ");
        scanf("%d", &indexNumber);

        //* Loop break condition
        if (indexNumber < 0) {
            printf("\nBreaking loop\n\n");
            break;
        }

        //* Array range condition
        if (indexNumber >= 100) {
            printf("\nArray index out of bound!\n\n");
            continue;
        }

        //* Validation of index numbers
        for (int i = 0; i < positionIndex; i++) {
            if (indexNumber == position[i]) {
                printf("\nYou've already assigned this index number -> %d with value -> %d, Please assign a new index number.\n\n",indexNumber, arr[position[i]]);
                isValidIndex++;
                break;
            }
        }

        if (isValidIndex) continue;

        //* Value from user
        printf("Enter a value : ");
        scanf("%d", &value);

        arr[indexNumber] = value;
        position[positionIndex] = indexNumber;
        positionIndex++;
    }

    for (int i = 0; i < positionIndex; i++) printf("index %d <--> value %d\n", position[i], arr[position[i]]);

}