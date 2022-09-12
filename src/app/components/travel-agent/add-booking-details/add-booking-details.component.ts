import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingDetails } from 'src/app/domain/booking-details';
import { Login } from 'src/app/domain/login';
import { BookingDetailsService } from 'src/app/services/booking-details.service';


@Component({
  selector: 'app-add-booking-details',
  templateUrl: './add-booking-details.component.html',
  styleUrls: ['./add-booking-details.component.css']
})
export class AddBookingDetailsComponent implements OnInit {
  bookingDetails : BookingDetails = new BookingDetails();
  login: Login = new Login;
  result: boolean = false;
  submitted: boolean = false;
  constructor( private bookingDeatilsService: BookingDetailsService,
    private router:Router) { }

  ngOnInit(): void {
    
  }

  addBookingDetails(){
    console.log("in addNewRequest()");
    
    console.log(this.bookingDetails);

    this.bookingDeatilsService.addrequest(this.bookingDetails).subscribe(
      data => {
        this.result = data;
        console.log(this.result);
        this.submitted = true;
                                                                                                                                                                  
      }
    );
  }

  backToHomePage() {
    console.log("back to home")
    if (this.login.designation === 'Manager') {
      this.router.navigate(['projectmanagerpage']);

    }
    else if (this.login.designation === 'Sr.Developer') {
      this.router.navigate(['employee']);
    }
    else if (this.login.designation === 'Jr.Developer') {
      this.router.navigate(['employee']);
    } else if (this.login.designation === 'Team Lead') {
      this.router.navigate(['employee']);
    }else if(this.login.designation === "Travel Agent"){
      this.router.navigate(['travelagentpage']);
    }

  }

}
