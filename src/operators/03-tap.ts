import {of,from, Observer, range, pipe, fromEvent} from "rxjs";
import {filter, map, mapTo, pluck,tap} from 'rxjs/operators'
const observer: Observer<any> = {
    next: (value) => console.log("next: ", value),
    error: (error) => console.log("el error", error),
    complete: () => console.log("se completo"),
};
const numeros$=range(1,5)
numeros$.pipe(
    tap(observer)
).subscribe(val=>console.log('sub',val))
//posibvlemente el tap nos sirva para ahi colocar el spinner colocando un true