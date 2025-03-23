import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../core/service/auth.service";
import {TokenStorageService} from "../../../core/service/token-storage.service";

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.scss']
})
export class SigninPageComponent implements OnInit {

  constructor(private authService: AuthService, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {}




  public login(): void {
    console.log("Click")


    this.authService.signIn("skuhic@example.com", "$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi").subscribe(
      data => {
        console.log(data)
      },
      err => {
        console.log(err)
      }
    );
  }

}
