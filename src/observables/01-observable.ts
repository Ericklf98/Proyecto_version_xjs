import {Observable, Observer} from 'rxjs';


const observer : Observer<any>={
    next:value=>console.log('el value',value),
    error:error=>console.log('el error',error),
    complete:()=>console.log('se completo')

}
const obs$ = new Observable<string>((sub)=>{
    sub.next('hola perro del mal');
    sub.next("adiois");
    sub.complete()
});
// obs$.subscribe(
//     valor=>console.log('next',valor),
//     error=>console.log('eroor_:',error),
//     ()=>console.log('se completo:')
// )

obs$.subscribe(observer);