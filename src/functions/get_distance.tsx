`
d = 3963.0 * arccos[(sin(lat1) * sin(lat2)) + cos(lat1) * cos(lat2) * cos(long2 – long1)]
`
import { sin, cos, acos, round, pi } from 'mathjs'

const R:number = 6378.8 // km

export const get_distance = (
    lat1: number, 
    lat2: number,
    long1: number,
    long2: number
):number =>{
    let Lat1:number = lat1 /(180 / pi);
    let Lat2:number = lat2 /(180 / pi);
    let Long1:number = long1 /(180 / pi);
    let Long2:number = long2 /(180 / pi);
    try{
        const a:number = (sin(Lat1) * sin(Lat2)) + cos(Lat1) * cos(Lat2) * cos(Long2 - Long1)
        return round((R * acos(a)), 2);
    } catch(e){
        console.log(`Error at :: ${e}`);
        return -1;
    }
}