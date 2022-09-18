import {from, Observer} from "rxjs";
import {distinctUntilKeyChanged} from 'rxjs/operators'
const observer: Observer<any> = {
    next: (value) => console.log("next: ", value),
    error: (error) => console.log("el error", error),
    complete: () => console.log("se completo"),
};
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
   distinctUntilKeyChanged('name')

).subscribe(observer)

//untilkeychanged esta mejor porque no se pone condicion es mas resumido solo se pasa el parametro en este caso el nombre pero creo solo es para objetos