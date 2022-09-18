import { Observer, of} from "rxjs";
import {catchError, pluck, throttleTime} from 'rxjs/operators'
import {ajax} from 'rxjs/ajax';

//sampletime espera el tiempo que se le coloca para despues proceder a hacervla emisión 
const manejaErrores=(response:Response)=>{
    if(!response.ok){
        throw new Error(response.statusText)
    }
    return response;
}
const url = 'https://api.github.com/users?per_page=5';

const fetchpromise =fetch(url);

// fetchpromise
// .then(manejaErrores)
// .then(resp=>resp.json())
// .then(console.log)
// .catch(error=>console.log(error))

ajax(url).pipe(
    pluck('response'),
    catchError(err=>{///estoo sremplamza al try catch 
        console.warn('error en:',err)
        return of([]);
    })
)
.subscribe(console.log)