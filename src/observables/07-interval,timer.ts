import {interval, Observer, timer} from "rxjs";

const observer: Observer<any> = {
    next: (value) => console.log("next: ", value),
    error: (error) => console.log("el error", error),
    complete: () => console.log("se completo"),
  };

  //const interval$ = interval(1000);
  
  //interval$.subscribe(observer )
  const hoy = new Date();
  hoy.setSeconds(hoy.getSeconds()+5);
  const timer$ = timer(hoy);//en que moemnto queiro que se emita el valor para notifiacaiones

  timer$.subscribe(observer);