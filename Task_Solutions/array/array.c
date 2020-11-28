#include <stdio.h>

int main() {
    int arr[100], position[100];
    int positionSize = 0;
    int indexNumber;
    int value;

    while (1)  {

        int validationIndex = 0;
        // index form user
        printf("enter the index number : ");
        scanf("%d", &indexNumber);

        // no validation break
        if (indexNumber < 0) {
            printf("Breaking loop\n");
            break;
        }

        if (indexNumber >= 100) {
            printf("array index out of bound\n");
            continue;
        }

        //* Validation of index numbers
        for (int i = 0; i < positionSize; i++) {
            if (indexNumber == position[i]) {
                printf("You've already assigned this index number -> %d with value -> %d, Please assign a new index number.\n",indexNumber, arr[position[i]]);
                validationIndex++;
            }
        }

        if (validationIndex == 1) continue;

        //value from user
        printf("enter value : ");
        scanf("%d", &value);

        arr[indexNumber] = value;
        position[positionSize] = indexNumber;
        positionSize++;
    }

    for (int i = 0; i < positionSize; i++) {
        printf("index %d <--> value %d\n", position[i], arr[position[i]]);
    }
}