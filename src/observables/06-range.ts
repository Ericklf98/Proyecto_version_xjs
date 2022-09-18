import {Observer,range,of, asyncScheduler} from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("next: ", value),
  error: (error) => console.log("el error", error),
  complete: () => console.log("se completo"),
};
const src$=range(1,100,asyncScheduler);
console.log('inicio');
src$.subscribe(console.log);
console.log('fin')
