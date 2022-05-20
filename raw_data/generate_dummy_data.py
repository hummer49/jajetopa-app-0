"""
export interface Data {
    name: string;
    filter: Filter;
    contact?: string;
};

export interface Filter {
    cat_A: boolean;
    cat_B: boolean;
    cat_C: boolean;
    cat_D: boolean
};

"""
"""
const FilterOptions: Array<FilterObject> = [
    {
        id: '25a23d05-ae14-4c59-8597-bebef5796f77'
        id: 'b730cc7e-be1f-438e-ba14-fd1c22a67b0f'
        id: '40352f9b-5fb7-4347-a21b-fcfebf78c7c9'
        id: 'f7d5b61d-8a9c-4991-97df-11c29a0759df'


enum FilterOptions {
    CAT_1 = '25a23d05-ae14-4c59-8597-bebef5796f77',
    CAT_2 = 'b730cc7e-be1f-438e-ba14-fd1c22a67b0f',
    CAT_3 = '40352f9b-5fb7-4347-a21b-fcfebf78c7c9',
    CAT_4 = 'f7d5b61d-8a9c-4991-97df-11c29a0759df',
    CAT_5 = '27e60311-218f-4624-8438-d63bd580ae39',
}

enum DAYS {
    MONDAY: 'lunes',
    TUESDAY: 'martes',
    WEDNESDAY: 'miercoles',
    THURSDAY: 'jueves',
    FRIDAY: 'viernes',
    SATURDAY: 'sabado',
    SUNDAY: 'domingo'
}

interface schedule_item {
    is_open: boolean,
    day: DAYS,
    hours?: string
    // opens_at?: string,
    // closes_at?: string
}

interface location_item {
    latitude: string,
    longitude: strig
}

export interface Item {
    filter_match: string;
    id: string;
    name: string;
    opening_hours: schedule_item[];
    cat_1: boolean;
    cat_2: boolean;
    cat_3: boolean;
    cat_4: boolean;
    cat_5: boolean;
    location: location_item
}

"""

from random import choice, randint
import json, uuid
n:int = 50
DATA = []

filter_options = {
    'CAT_1' : '25a23d05-ae14-4c59-8597-bebef5796f77',       #cafe de especialidad
    'CAT_2' : 'b730cc7e-be1f-438e-ba14-fd1c22a67b0f',       #desayuno
    'CAT_3' : '40352f9b-5fb7-4347-a21b-fcfebf78c7c9',       #merienda
    'CAT_4' : 'f7d5b61d-8a9c-4991-97df-11c29a0759df',       #metodos filtrados
    'CAT_5' : '27e60311-218f-4624-8438-d63bd580ae39'        #leche vegetal
}

hours =[
    '07.00 - 18.00',
    '08.00 - 20.00',
    '08.00 - 23.00'
]

latitude, longitude = -25.299307, -57.586545


# -25.299307, -57.586545
# -25.379306999999997, -57.570545

offset = 0.5


# ================================
names_pool_0 = [
    'Cafeteria',
    'Cafe',
]
names_pool_1 = [
    'Pepe',
    'Jazmin',
    'de Antonio y Romina',
    'Futuro',
    'Pasado',
    'Presente',
    'Guarani',
    'Viajeros',
    'de Don Jacinto',
    'de Felix y Sarah',
    'de las hermanas Perez'
]
def generate_name(full = False):
    s = ''
    if full == False:
        s += names_pool_0[randint(0,len(names_pool_0)-1)] + ' ' + names_pool_1[randint(0,len(names_pool_1)-1)]
    else:
        s += names_pool_0[randint(0,len(names_pool_0)-1)] + ' ' + str(randint(1800,2000))
    return s
# ================================

full = 0
names = []

for i in range(n):
    item = dict()
    item['filter_match'] = ''
    item['filters_data'] = []
    # cat 1
    if randint(0, 100)%2:
        # item['cat_1'] = True
        item['filters_data'].append({
            'id': filter_options['CAT_1'],
            'name': 'Cafe de Especialidad',
            'flag': True
        })
        item['filter_match']+= "|{}".format(filter_options['CAT_1'])
    else:
        item['filters_data'].append({
            'id': filter_options['CAT_1'],
            'name': 'Cafe de Especialidad',
            'flag': False
        })
    # cat 2
    if choice([True, True, False]):
        item['filters_data'].append({
            'id': filter_options['CAT_2'],
            'name': 'Desayuno',
            'flag': True
        })
        item['filter_match']+= "|{}".format(filter_options['CAT_2'])
    else:
        item['filters_data'].append({
            'id': filter_options['CAT_2'],
            'name': 'Desayuno',
            'flag': False
        })
    # cat 3
    if choice([True, False]) == False:
        item['filters_data'].append({
            'id': filter_options['CAT_3'],
            'name': 'Merienda',
            'flag': True
        })
        item['filter_match']+= "|{}".format(filter_options['CAT_3'])
    else:
        item['filters_data'].append({
            'id': filter_options['CAT_3'],
            'name': 'Merienda',
            'flag': False
        })
    # cat 4
    if randint(0, 150)%2:
        item['filters_data'].append({
            'id': filter_options['CAT_4'],
            'name': 'Metodos Filtrados',
            'flag': True
        })
        item['filter_match']+= "|{}".format(filter_options['CAT_4'])
    else:
        item['filters_data'].append({
            'id': filter_options['CAT_4'],
            'name': 'Metodos Filtrados',
            'flag': False
        })
    # cat 5
    if randint(0, 70)%2:
        item['filters_data'].append({
            'id': filter_options['CAT_5'],
            'name': 'Cafe frio',
            'flag': True
        })
        item['filter_match']+= "|{}".format(filter_options['CAT_5'])
    else:
        item['filters_data'].append({
            'id': filter_options['CAT_5'],
            'name': 'Cafe frio',
            'flag': False
        })
    # filter match
    item['filter_match'] = item['filter_match'][1:]
    # item['name'] = "Cafe {}".format(i)
    while(1):
        flag = full >= (len(names_pool_0) * len(names_pool_1))
        s = generate_name(flag)
        if (s in names) == False:
            item['name'] = s
            names.append(s)
            full += 1
            break

    item['id'] = str(uuid.uuid4())
    # schedule
    item['opening_hours'] = []
    # monday
    for day in ['domingo', 'lunes', 'sabado']:
        if choice([True, False]):
            item['opening_hours'].append({ 
                'is_open': True, 
                'day': day,
                'hours': choice(hours)
            })
        else:
            # print('closed at day {}'.format(day))
            item['opening_hours'].append({ 
                'is_open': False, 
                'day': day
            })
    for day in ['martes', 'miercoles', 'jueves', 'viernes']: #, 'sabado' ]:
        item['opening_hours'].append({
            'is_open': True, 
            'day': day,
            'hours': choice(hours)
        })
    # location
    item['location'] = {
        'latitude': latitude + (-1)**(randint(0,1)) * randint(0,99)/2500,
        'longitude': longitude + (-1)**(randint(0,1)) * randint(0,99)/2500,
        'adress': 'Dr. Eduardo Lopez Moreira 4.810',
        'city': 'Asuncion'
    }
    DATA.append(item)

print(json.dumps(DATA, indent=4))