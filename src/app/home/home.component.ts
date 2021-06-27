import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { UserService } from '../_services/user.service';

import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {
  winner
  periode
  display: any;
  totalDiff: any
  currDiff: any

  dateNow = new Date();
  counterr: any
  constructor(private userService: UserService,
  ) { }


  getdiff(d1, d2) {
    let date1 = new Date(d1);  // hedha likbir date fixé endDate
    let date2 = new Date(d2);  // date cnx lors du save startDate
    let Times: number = date1.getTime() - date2.getTime();

    this.totalDiff = Times;
    this.periode = Times / 500
    //console.log(this.periode + '  periode');
    // console.log(this.totalDiff + '  totaldiff');
  }

  getConnDiff(d1) {
    let date1 = new Date(d1);  // hedha likbir date fixé endDate

    let diff: number = date1.getTime() - this.dateNow.getTime()
    this.currDiff = diff

    //console.log(this.currDiff + '  currdiff');

  }

  after
  i = 20
  j = 0
  k = this.i - this.j
  min = 20
  timer(t, counter) {

    if (counter >= 500) {
      this.display = 500
      this.after = '00'
    }

    else {
      this.after = Math.floor(Math.random() * 20);
      setInterval(() => {
        this.after = Math.floor(Math.random() * (20) + this.min)
        // console.log(this.min);
        this.min += 20
        if (this.min >= 81) {
          this.min = 20
        }

        if (counter > 500) {

          clearInterval(timer);
          this.display = 500
          this.after = '00'
        }
      }, t / 5);


      this.display = counter
      const timer = setInterval(() => {
        counter++;
        this.after = Math.floor(Math.random() * 20);
        this.min = 20
        this.display = counter

        if (counter > 500) {

          clearInterval(timer);
          this.display = 500
          this.after = '00'
        }
      }, t);
    }
  }



  setCounter() {

    let unite: number = (500 / this.totalDiff)
    let tempsEcoule: number = (this.totalDiff - this.currDiff)
    this.counterr = Math.floor(tempsEcoule * unite)
    // console.log(this.counterr + '  counter');

  }


  getWinnersLimit() {
    this.userService.getWinnersLimit().subscribe(data => {
      this.winner = data
      // console.log(this.winner);

    })
  }
  getWinnersAmountLimit() {
    this.userService.getWinnersAmountLimit().subscribe(data => {
      this.winner = data
      // console.log(this.winner);

    })
  }

  jack
  d1
  d2
  getJackpot() {
    this.userService.getJack().subscribe(data => {
      this.jack = data
      this.d1 = data[0].endDate
      this.d2 = data[0].startDate
      // console.log(this.jack[0] + "jack");
      // console.log(this.d2 + "date1 enddate");


    })
  }

  ngOnInit() {


    this.getJackpot()
    this.getWinnersLimit()
    setTimeout(() => {
      this.after = "00"
      this.display = "00"
      this.getdiff(this.d1, this.d2)
      this.getConnDiff(this.d1)
      this.setCounter()
      this.timer(this.periode, this.counterr);
    }, 1000);



  }

}
