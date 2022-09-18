import {of,from, Observer, range, pipe, fromEvent} from "rxjs";
import {map, mapTo, pluck} from 'rxjs/operators'
const observer: Observer<any> = {
    next: (value) => console.log("next: ", value),
    error: (error) => console.log("el error", error),
    complete: () => console.log("se completo"),
};

/**
 * 
 */
 //entrada de tipo numero y salida de tipo numero
 range(1,5).pipe(
    map<number,number>(val =>val *10))
 .subscribe(observer)
 
 const keyup$ =fromEvent<KeyboardEvent>(document,'keyup').pipe(map(event=>event.code))
 keyup$.subscribe(val=>console.log('eeeee',val))
 const keyup2$ =fromEvent<KeyboardEvent>(document,'keyup').pipe(pluck('target','baseURI'))///LA COMA ES COMO SI FUERA UN PUNTO
 keyup2$.subscribe(val=>console.log('pluck',val))

 const keyup3$ =fromEvent<KeyboardEvent>(document,'keyup').pipe(mapTo('tecla presionada'))///LA COMA ES COMO SI FUERA UN PUNTO
 keyup3$.subscribe(val=>console.log('pluck',val))