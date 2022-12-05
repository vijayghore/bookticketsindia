import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BookTickesIndia';

  // Function get executed when user click on book button.
  bookMySeats(value: any) {
    this.finalBook(value);
  }

  //Book seats enter by the user
  finalBook(inpfromuser: number) {
    // check do we have seats available
    if (this.allAvail() >= inpfromuser) {
      this.book(inpfromuser);
    }
    else {
      alert("Sorry no seats are available");
    }
  }

  // If seats are available this function get executed
  book(inpfromuser: number) {
    if (inpfromuser == 0) {
      return true;
    }
    for (let i = 1; i <= 12; i++) {
      if (this.availInRow(i, inpfromuser)) {
        this.bookInRow(i, inpfromuser);
        return true;
      }
    }
    if (inpfromuser > 1) {
      this.book(inpfromuser - 1);
      this.book(1);
    }
    else {
      return false;
    }
    return true;
  }

  // Book the seat in each row so that user will get all seats nearby
  bookInRow(row: number, minseat: number) {
    let arr = [];
    for (let i = 0; i < this.seats.length; i++) {
      if (this.seats[i].row == row && !this.seats[i].isbooked) {
        this.seats[i].isbooked = true;
        arr.push(this.seats[i].id);
        minseat--;
        if (minseat == 0) {
          break;
        }
      }
    }
    alert(`You have booked ${arr}`);
  }

  //Know the seats available in each row
  availInRow(row: number, minseat: number) {
    let avail = 0;
    for (let i = 0; i < this.seats.length; i++) {
      if (this.seats[i].row == row && !this.seats[i].isbooked) {
        avail++;
      }
    }
    if (avail >= minseat) {
      return true;
    } else {
      return false;
    }
  }

  //Check how many total seats are available with us
  allAvail() {
    let available = 0;
    for (let index in this.seats) {
      // gives all available seats
      if (!this.seats[index].isbooked) {
        available++;
      }
    }
    return available;
  }

  // array of json object which will represent seats of a coach
  seats = [
    {
      id: 1,
      row: 1,
      isbooked: false
    },
    {
      id: 2,
      row: 1,
      isbooked: false
    },
    {
      id: 3,
      row: 1,
      isbooked: false
    },
    {
      id: 4,
      row: 1,
      isbooked: false
    },
    {
      id: 5,
      row: 1,
      isbooked: false
    },
    {
      id: 6,
      row: 1,
      isbooked: false
    },
    {
      id: 7,
      row: 1,
      isbooked: false
    },
    {
      id: 8,
      row: 2,
      isbooked: false
    },
    {
      id: 9,
      row: 2,
      isbooked: false
    },
    {
      id: 10,
      row: 2,
      isbooked: false
    },
    {
      id: 11,
      row: 2,
      isbooked: false
    },
    {
      id: 12,
      row: 2,
      isbooked: false
    },
    {
      id: 13,
      row: 2,
      isbooked: false
    },
    {
      id: 14,
      row: 2,
      isbooked: false
    },
    {
      id: 15,
      row: 3,
      isbooked: false
    },
    {
      id: 16,
      row: 3,
      isbooked: false
    },
    {
      id: 17,
      row: 3,
      isbooked: false
    },
    {
      id: 18,
      row: 3,
      isbooked: false
    },
    {
      id: 19,
      row: 3,
      isbooked: false
    },
    {
      id: 20,
      row: 3,
      isbooked: false
    },
    {
      id: 21,
      row: 3,
      isbooked: false
    },
    {
      id: 22,
      row: 4,
      isbooked: false
    },
    {
      id: 23,
      row: 4,
      isbooked: false
    },
    {
      id: 24,
      row: 4,
      isbooked: false
    },
    {
      id: 25,
      row: 4,
      isbooked: false
    },
    {
      id: 26,
      row: 4,
      isbooked: false
    },
    {
      id: 27,
      row: 4,
      isbooked: false
    },
    {
      id: 28,
      row: 4,
      isbooked: false
    },
    {
      id: 29,
      row: 5,
      isbooked: false
    },
    {
      id: 30,
      row: 5,
      isbooked: false
    },
    {
      id: 31,
      row: 5,
      isbooked: false
    },
    {
      id: 32,
      row: 5,
      isbooked: false
    },
    {
      id: 33,
      row: 5,
      isbooked: false
    },
    {
      id: 34,
      row: 5,
      isbooked: false
    },
    {
      id: 35,
      row: 5,
      isbooked: false
    },
    {
      id: 36,
      row: 6,
      isbooked: false
    },
    {
      id: 37,
      row: 6,
      isbooked: false
    },
    {
      id: 38,
      row: 6,
      isbooked: false
    },
    {
      id: 39,
      row: 6,
      isbooked: false
    },
    {
      id: 40,
      row: 6,
      isbooked: false
    },
    {
      id: 41,
      row: 6,
      isbooked: false
    },
    {
      id: 42,
      row: 6,
      isbooked: false
    },
    {
      id: 43,
      row: 7,
      isbooked: false
    },
    {
      id: 44,
      row: 7,
      isbooked: false
    },
    {
      id: 45,
      row: 7,
      isbooked: false
    },
    {
      id: 46,
      row: 7,
      isbooked: false
    },
    {
      id: 47,
      row: 7,
      isbooked: false
    },
    {
      id: 48,
      row: 7,
      isbooked: false
    },
    {
      id: 49,
      row: 7,
      isbooked: false
    },
    {
      id: 50,
      row: 8,
      isbooked: false
    },
    {
      id: 51,
      row: 8,
      isbooked: false
    },
    {
      id: 52,
      row: 8,
      isbooked: false
    },
    {
      id: 53,
      row: 8,
      isbooked: false
    },
    {
      id: 54,
      row: 8,
      isbooked: false
    },
    {
      id: 55,
      row: 8,
      isbooked: false
    },
    {
      id: 56,
      row: 8,
      isbooked: false
    },
    {
      id: 57,
      row: 9,
      isbooked: false
    },
    {
      id: 58,
      row: 9,
      isbooked: false
    },
    {
      id: 59,
      row: 9,
      isbooked: false
    },
    {
      id: 60,
      row: 9,
      isbooked: false
    },
    {
      id: 61,
      row: 9,
      isbooked: false
    },
    {
      id: 62,
      row: 9,
      isbooked: false
    },
    {
      id: 63,
      row: 9,
      isbooked: false
    },
    {
      id: 64,
      row: 10,
      isbooked: false
    },
    {
      id: 65,
      row: 10,
      isbooked: false
    },
    {
      id: 66,
      row: 10,
      isbooked: false
    },
    {
      id: 67,
      row: 10,
      isbooked: false
    },
    {
      id: 68,
      row: 10,
      isbooked: false
    },
    {
      id: 69,
      row: 10,
      isbooked: false
    },
    {
      id: 70,
      row: 10,
      isbooked: false
    },
    {
      id: 71,
      row: 11,
      isbooked: false
    },
    {
      id: 72,
      row: 11,
      isbooked: false
    },
    {
      id: 73,
      row: 11,
      isbooked: false
    },
    {
      id: 74,
      row: 11,
      isbooked: false
    },
    {
      id: 75,
      row: 11,
      isbooked: false
    },
    {
      id: 76,
      row: 11,
      isbooked: false
    },
    {
      id: 77,
      row: 11,
      isbooked: false
    },
    {
      id: 78,
      row: 12,
      isbooked: false
    },
    {
      id: 79,
      row: 12,
      isbooked: false
    },
    {
      id: 80,
      row: 12,
      isbooked: false
    },
    {
      id: 81,
      row: 12,
      isbooked: false
    },
    {
      id: 82,
      row: 12,
      isbooked: false
    },
    {
      id: 83,
      row: 12,
      isbooked: false
    },
    {
      id: 84,
      row: 12,
      isbooked: false
    }
  ]
}
