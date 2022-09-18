import { Observer, of} from "rxjs";
import {catchError, pluck, throttleTime} from 'rxjs/operators'
import {ajax} from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';
const obs$ = ajax.getJSON(url,{
    'Content-Type':'application/json',
    'mi-token':'abc123'
});
obs$.subscribe(console.log)