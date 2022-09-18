import {Observer,fromEvent } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("next: ", value),
  error: (error) => console.log("el error", error),
  complete: () => console.log("se completo"),
};
const src1$=fromEvent<MouseEvent>(document,'click');
const src2$=fromEvent<KeyboardEvent>(document,'keyup');
src1$.subscribe(observer);
src2$.subscribe(observer);