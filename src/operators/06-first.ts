import {of,from, Observer, range, pipe, fromEvent} from "rxjs";
import {filter, first, map, mapTo, pluck,take,tap} from 'rxjs/operators'
const observer: Observer<any> = {
    next: (value) => console.log("next: ", value),
    error: (error) => console.log("el error", error),
    complete: () => console.log("se completo"),
};

const click$ = fromEvent<MouseEvent>(document,'click');

click$
.pipe(
    pluck('clientY'),
    first(event=>event>150)//solo regresa el prime valor ya sea solito o conm condiciones para solo tomar el priemro
)
.subscribe(observer)