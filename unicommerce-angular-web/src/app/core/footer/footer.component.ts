import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'ap-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {



  user$!: Observable<User>;



  constructor(private UseService: UserService) {}



  ngOnInit(): void {
  this.user$ = this.UseService.getUser();
  }


}
