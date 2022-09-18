import { Observer, of} from "rxjs";
import {catchError, pluck, throttleTime} from 'rxjs/operators'
import {ajax} from 'rxjs/ajax';

const observer: Observer<any> = {
    next: (value) => console.log("el value", value),
    error: (error) => console.log("el error", error),
    complete: () => console.log("se completo"),
  };
const url = 'https://httpbin.org/delay/1';
const obs$ = ajax.getJSON(url,{
    'Content-Type':'application/json',
    'mi-token':'abc123'
});
obs$.subscribe(observer)