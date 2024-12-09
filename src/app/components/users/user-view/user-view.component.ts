import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss'],
})
export class UserViewComponent implements OnInit {
  user: any;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const encodedEmail = this.route.snapshot.paramMap.get('email');
    if (encodedEmail) {
      // Decodifica el email desde la URL
      const decodedEmail = decodeURIComponent(encodedEmail);
      
      this.userService.getUserByEmail(decodedEmail).subscribe((data) => {
        this.user = data;
      });
    }
  }
}