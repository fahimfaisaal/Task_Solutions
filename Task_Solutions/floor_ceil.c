#include <stdio.h>
// #include <math.h>

//* Implement of floor function
float my_floor(float num) {
    int float_to_int = num;
    float int_to_float = (float_to_int * 1.00);
    return int_to_float;
}

//* Implement of ceil function
float my_ceil(float num) {
    int float_to_int = num;
    float int_to_float = (float_to_int * 1.00) + 1.00;
    return int_to_float;
}

int main (void) {
    float a = 145.45871;

    float get_floor = my_floor(a); //* also same output in builtin floor function
    printf("The floor number is = %f\n", get_floor);

    float get_ceil = my_ceil(a); //* also same output in builtin ceil function
    printf("The ceil number is = %f\n", get_ceil);
}