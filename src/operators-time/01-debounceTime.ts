import {fromEvent, Observer} from "rxjs";
import {debounceTime, distinct, distinctUntilChanged, distinctUntilKeyChanged, filter, first, map, mapTo, pluck,take,takeWhile,tap} from 'rxjs/operators'
const observer: Observer<any> = {
    next: (value) => console.log("next: ", value),
    error: (error) => console.log("el error", error),
    complete: () => console.log("se completo"),
};

const input =document.createElement('input');
document.querySelector('body').append(input);
//debounceTime ejecuta la accion una vez finalizo la misma
const input$=fromEvent(input,'keyup');
input$.pipe(//esta idea es para un buscador 
    debounceTime(1000),
    pluck('target','value'),
    distinctUntilChanged()
).subscribe(console.log);