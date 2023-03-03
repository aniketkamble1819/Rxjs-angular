import { Component, OnInit } from '@angular/core';
import { fromEvent, map, Observable, scan, throttleTime } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Rxjs';
  date:any;
//   ngOnInit(): void {

// // fromEvent(document, 'click')
// // .pipe(
// //   throttleTime(1000),
// //   map((event:any) => event.clientX),
// //   scan((count, clientX) => count + 1, 0)
// // )
// // .subscribe((count) => console.log(count));-----   ------


//   // fromEvent(document, 'click')
//   // .pipe(scan((count) => count + 1, 0))
//   // .subscribe((count) => console.log(`Clicked ${count} times`));


//     // let count = 0;
//     // document.addEventListener('click', () => console.log(`Clicked ${++count} times`));
//     // fromEvent(document, 'click').subscribe(() => console.log('Clicked!'));



//     // document.addEventListener('click', () => console.log('Clicked!'));
//   }

ngOnInit():void{


  let observable = new Observable((producer)=>{
    //producer.next("Aniket");
    setInterval(()=>{
      producer.next(new Date())
    }, 1000);
  })

  let subscriber = observable.subscribe(
    {
    next(result:any){
      console.log(result);
    },
    error(err){

    },
    complete(){

    }
});

setTimeout(()=>{
subscriber.unsubscribe();
}, 60000);

observable.subscribe((result:any)=>{
  this.date =result;
})

}




}
