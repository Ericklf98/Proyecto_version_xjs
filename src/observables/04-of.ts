import { Observable, Observer,of } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("el value", value),
  error: (error) => console.log("el error", error),
  complete: () => console.log("se completo"),
};

// const obs$ = of(1,2,3,4,5,6);
const obs$ = of(...[1,2,3,4,5,6],7,8,9);//podriamos setear los dos arreglos posterior a eso al hacer el complete darle un true al arreglo
// const obs$ = of([1,2],{a:1,b:2},function(){},true,Promise.resolve(true ));
obs$.subscribe(observer);