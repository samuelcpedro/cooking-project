import 'rxjs/Rx';

// import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component } from '@angular/core';

import { AuthService } from '../../auth/auth.service';
import { DataStorageService } from '../../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService,
    private authService: AuthService) { }

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        // (response: HttpEvent<Object>) => {
        (response) => {
          console.log(response);
          // console.log(response.type === HttpEventType.Sent);
          // console.log(response.type === HttpEventType.User);
          // console.log(response.type === HttpEventType.Response);
          // console.log(response.type === HttpEventType.ResponseHeader);
          // console.log(response.type === HttpEventType.DownloadProgress);
          // console.log(response.type === HttpEventType.UploadProgress);
        },
        (error) => { console.log(error); }
      );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
