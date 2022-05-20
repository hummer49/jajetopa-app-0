

enum DAYS {
  MONDAY = 'lunes',
  TUESDAY = 'martes',
  WEDNESDAY = 'miercoles',
  THURSDAY = 'jueves',
  FRIDAY = 'viernes',
  SATURDAY = 'sabado',
  SUNDAY = 'domingo'
}
const days = [
  DAYS.SUNDAY,
  DAYS.MONDAY, 
  DAYS.TUESDAY, 
  DAYS.WEDNESDAY, 
  DAYS.THURSDAY, 
  DAYS.FRIDAY, 
  DAYS.SATURDAY
]
  
interface schedule_item {
  is_open: boolean,
  day: DAYS,
  hours?: string
  // opens_at?: string,
  // closes_at?: string
}

export const is_currently_open = (schedule: schedule_item[]): boolean => {
  /*
   *    expects something like...
   *          day ~> 'lunes'
   *          hours ~> '08.00 - 20.00'
   * 
   *    basically, what is done is
   *      check day
   *          current_day in OPEN_DAYS[] ? 
   *      check hour
   *          opening_hour <= current_hour <=closing_hour
   */
  
  const today:Date            = new Date();
  const current_day: string   = days[today.getDay()];
  const current_hour: string  = `${ today.getHours().toString() }.${ today.getMinutes().toString() }`;

  const data:schedule_item | undefined = schedule.find(
    item => item.day === current_day
  )
  if(data === undefined) {
    throw 'idk dude  -- 1';
  }
  if(data.is_open === true){
    const hours: string[] = data.hours!.split(' - ')
    return hours[0] <= current_hour && current_hour <= hours[1]
  }
  return false;
}



export const get_current_status = (schedule: schedule_item[]): schedule_item => {

  const today:Date            = new Date();
  const current_day: string   = days[today.getDay()];
  const current_hour: string  = `${ today.getHours().toString() }.${ today.getMinutes().toString() }`;

  const data:schedule_item | undefined = schedule.find(
    item => item.day === current_day
  )
  if(data === undefined) {
    throw 'idk dude -- 2';
  }
  return data;
}



