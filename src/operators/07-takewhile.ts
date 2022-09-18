import {of,from, Observer, range, pipe, fromEvent} from "rxjs";
import {filter, first, map, mapTo, pluck,take,takeWhile,tap} from 'rxjs/operators'
const observer: Observer<any> = {
    next: (value) => console.log("next: ", value),
    error: (error) => console.log("el error", error),
    complete: () => console.log("se completo"),
};

const click$ = fromEvent<MouseEvent>(document,'click');

click$.pipe(
    map(({x,y})=>({x,y})),
    takeWhile(({y})=>y<=150,true)//el true el para la ultima varibale que rompe la condicion este es un while pero en los rxjs,en caso de no querer el que rompe la condicion poner false
).subscribe(observer)