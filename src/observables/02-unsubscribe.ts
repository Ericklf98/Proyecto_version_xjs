import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("el value", value),
  error: (error) => console.log("el error", error),
  complete: () => console.log("se completo"),
};

const intrevalo$ = new Observable<number>((subscriber) => {
  let i = 0;
  const interval = setInterval(() => {
    subscriber.next(i);
    i++;
  }, 1000);
  return () => {
    clearInterval(interval);
    console.log("destruido interval");
  };
});
let subscription1 = intrevalo$.subscribe(observer);
let subscription2 = intrevalo$.subscribe(observer);
subscription1
.add(subscription2);//se utiliza para desubcribirnos
setTimeout(() => {
  subscription1.unsubscribe();
}, 3000);