import {of,from, Observer, range, pipe, fromEvent} from "rxjs";
import {filter, map, mapTo, pluck,take,tap} from 'rxjs/operators'
const observer: Observer<any> = {
    next: (value) => console.log("next: ", value),
    error: (error) => console.log("el error", error),
    complete: () => console.log("se completo"),
};
const numeros$=of(1,2,3,4,5);
numeros$
.pipe(
    take(3)
)
.subscribe(observer);