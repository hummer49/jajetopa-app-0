/*
 *      Data model
 *
 *  
 */

import { Filter } from "./Filter"

export interface Data {
    name: string;
    filter: Filter;
    contact?: string;
};