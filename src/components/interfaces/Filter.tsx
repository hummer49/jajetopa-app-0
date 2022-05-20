/*
 *      Interface used to filter stuff
 *
 *  
 */

export interface FilterOption {
    id: string;
    key: string;
    flag: boolean
};

export interface Filter {
    cat_A: boolean;
    cat_B: boolean;
    cat_C: boolean;
    cat_D: boolean
};