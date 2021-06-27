import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-jackpot-timer',
  templateUrl: './jackpot-timer.component.html',
  styleUrls: ['./jackpot-timer.component.css']
})
export class JackpotTimerComponent implements OnInit {
  dateNow = new Date();
  fixDate
  jack
  jackpot
  form: any = {};
  content
  connected = false
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserBoard().subscribe(
      data => {

        this.connected = true
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }


  onSubmit(): void {

    var formattedDate = new Date(this.form.endDate).getTime()
    let dateNow2 = new Date();
    this.userService.addJackpot(formattedDate, dateNow2)

      .subscribe(data => {
        this.jack = data

      });
  }
  diff
  onSubmit2(): void {
    let dateNow2 = new Date();
    const data = {
      endDate: this.form.endDate,
      startDate: dateNow2
    }
    let date1 = new Date(this.form.endDate);  // hedha likbir date fixé endDate
    let diff: number = date1.getTime() - dateNow2.getTime()

    if (diff < 0) {
      alert('Please enter a comming date!')

    } else {
      if (Number.isNaN(diff)) {
        alert('Please enter a date!')
      }
      else {


        this.userService.UpdateJackpot(1, data)
          .subscribe(data => {
            this.jackpot = data
          });
        alert('Timer has been set successfully!')

      }
    }





  }




}
