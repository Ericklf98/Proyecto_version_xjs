import {asyncScheduler, fromEvent, Observer} from "rxjs";
import {debounceTime, distinct, distinctUntilChanged, distinctUntilKeyChanged, filter, first, map, mapTo, pluck,take,takeWhile,tap, throttleTime} from 'rxjs/operators'
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
    throttleTime(1000,asyncScheduler,{
        leading:true,//me trae el primer valor
        trailing:true//me trae el segundo
    }),
    pluck('target','value'),
    distinctUntilChanged()
).subscribe(console.log);

//throttletime es lo opuesto el priemrpo emite el valor y luego se espera 3 segundos
//utilidad para busqueda dejando solo el segundo parametrto mandandolo a base de datos