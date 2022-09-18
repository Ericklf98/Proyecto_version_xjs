import {of,from, Observer, range, pipe, fromEvent} from "rxjs";
import {filter, map, mapTo, pluck} from 'rxjs/operators'
const observer: Observer<any> = {
    next: (value) => console.log("next: ", value),
    error: (error) => console.log("el error", error),
    complete: () => console.log("se completo"),
};

range(1,10).pipe(
    filter(val=>val%2==1)
).subscribe(console.log)

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
    }
]
from(personajes).pipe(
    pluck('name'),
   filter(val=>val!='joker')
).subscribe(console.log)