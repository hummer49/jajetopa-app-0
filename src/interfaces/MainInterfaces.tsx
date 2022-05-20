export enum filter_ids {
  CAT_1             = '25a23d05-ae14-4c59-8597-bebef5796f77',
  CAT_2             = 'b730cc7e-be1f-438e-ba14-fd1c22a67b0f',
  CAT_3             = '40352f9b-5fb7-4347-a21b-fcfebf78c7c9',
  CAT_4             = 'f7d5b61d-8a9c-4991-97df-11c29a0759df',
  CAT_5             = '27e60311-218f-4624-8438-d63bd580ae39',
}

export interface filter_item_model {
  id                : filter_ids;
  name              : string;
  flag              : boolean
}

export interface filter_data_model {
  data              : filter_item_model[];
  aux_text          : string;
  search_term       : string | null
}

// ===

export enum DAYS {
  MONDAY            = 'lunes',
  TUESDAY           = 'martes',
  WEDNESDAY         = 'miercoles',
  THURSDAY          = 'jueves',
  FRIDAY            = 'viernes',
  SATURDAY          = 'sabado',
  SUNDAY            = 'domingo'
}

export interface schedule_item {
  is_open           : boolean;
  day               : DAYS;
  hours?            : string
}

export interface location_item {
  latitude          : number;
  longitude         : number;
  adress            : string;
  city              : string
}

export interface match_item_model {
  filter_match      : string;
  id                : string;
  name              : string;
  opening_hours     : schedule_item[];
  filters_data      : filter_item_model[];
  location          : location_item
}

export interface match_data_model {
  data              : match_item_model[];
  count             : number
}