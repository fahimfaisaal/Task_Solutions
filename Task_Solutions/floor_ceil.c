#include <stdio.h>
#include <math.h>

//* Implement of floor function
float my_floor(double num) {
    int float_to_int = num;
    double int_to_float = (float_to_int * 1.00);
    double floating_num =  (num - int_to_float);

    if (floating_num < 0.0) int_to_float -= 1;
    return int_to_float;
}

//* Implement of ceil function
float my_ceil(double num) {
    double int_to_float, floating_num;
    int float_to_int = num;
    floating_num = (num - float_to_int);
    
    if (floating_num > 0) {
        int_to_float = (float_to_int * 1.00) + 1.00;
    } else {
        int_to_float = (float_to_int * 1.00);
    }
    return int_to_float;
}

int main (void) {
    float a = -145.100;

    float get_floor = my_floor(a); //* also same output in builtin floor function
    printf("The floor number is = %f\n", get_floor);

    float get_ceil = my_ceil(a); //* also same output in builtin ceil function
    printf("The ceil number is = %lf\n", get_ceil);
}