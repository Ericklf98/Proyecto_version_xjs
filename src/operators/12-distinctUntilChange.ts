import {of,from, Observer, range, pipe, fromEvent} from "rxjs";
import {distinct, distinctUntilChanged, filter, first, map, mapTo, pluck,take,takeWhile,tap} from 'rxjs/operators'
const observer: Observer<any> = {
    next: (value) => console.log("next: ", value),
    error: (error) => console.log("el error", error),
    complete: () => console.log("se completo"),
};
//diferencia con el undistict que emitira o hara la comparacion con el utlimo  valor si ya esta no lo pone 
/**
 * 
 * dejando en claro que hace la comparaicon con solo numeros 
 */
const numeros$=of(1,1,2,3,4,5,6,1,10,3,3,5,1);

numeros$.pipe(
    distinctUntilChanged()
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
        tipo:'villano',
        name:'joker'
    },
    {
        tipo:'heroe',
        name:'super man'
    },
    
    {
        tipo:'heroe',
        name:'flash'
    },
]
from(personajes).pipe(
    distinctUntilChanged((ant,act)=>ant.name == act.name)//funcion para poner o comparar el ultimo con el otro

).subscribe(observer)