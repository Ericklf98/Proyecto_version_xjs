import {of,from, Observer, range, pipe, fromEvent} from "rxjs";
import {distinct, filter, first, map, mapTo, pluck,take,takeWhile,tap} from 'rxjs/operators'
const observer: Observer<any> = {
    next: (value) => console.log("next: ", value),
    error: (error) => console.log("el error", error),
    complete: () => console.log("se completo"),
};

const numeros$=of(1,1,2,3,4,5,6,1,10,3,3,5,1);

numeros$.pipe(
    distinct()
).subscribe(observer);

const personajes=[
    {
        tipo:'heroe',
        name:'batman'
    },
    {
        tipo:'heroe',
        name:'super man'
    },
    {
        tipo:'villano',
        name:'joker'
    },
    {
        tipo:'heroe',
        name:'super man'
    },
    {
        tipo:'villano',
        name:'joker'
    },
    {
        tipo:'heroe',
        name:'flash'
    },
]

// from(personajes).pipe(
//     pluck('name'),
//     distinct()

// ).subscribe(observer)
from(personajes).pipe(
    distinct(p=>p.name)

).subscribe(observer)