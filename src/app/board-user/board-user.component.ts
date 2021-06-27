import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {
  p: any
  op: any
  content = '';
  winners: any
  form: any = {};
  connected = false
  display = false;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserBoard().subscribe(
      data => {
        this.content = data;
        this.connected = true
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
    this.getWinners()
  }


  getWinners() {
    this.userService.getWinners().subscribe(data => {
      this.winners = data

    })
  }
  changeDisplay() {
    this.display = !this.display
  }
  winner
  onSubmit(): void {

    this.userService.addWinner(this.form.name, this.form.amout, this.form.winDate)
      .subscribe(data => {
        this.winner = data

      });

    setTimeout(() => {
      this.getWinners()
    }, 1000);
    alert('Winner has been added successfully')
  }


  delete(id) {
    this.userService.DeleteWinner(id).subscribe()

    setTimeout(() => {
      this.getWinners()
    }, 1000);
  }

}
