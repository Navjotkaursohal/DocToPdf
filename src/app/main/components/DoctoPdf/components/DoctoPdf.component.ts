import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef, OnChanges, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, HttpService } from 'src/app/core/services';
import { DomSanitizer } from '@angular/platform-browser';
import $ from "jquery";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-DoctoPdf',
  templateUrl: './DoctoPdf.component.html',
  styleUrls: ['./DoctoPdf.component.css']
})
export class DoctoPdfComponent implements OnInit {
  public loading = false;
  public inputPath: any;
  public outputPath: any;

  constructor(private _http: HttpService,
    private router: Router,
    private dtPipe: DatePipe,
    private _auth: AuthService,
    private toastr: ToastrService,
    private http: HttpService,
    private sanitizer: DomSanitizer,
    public authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.SetRestaurantName(`Doc to Pdf`);

    //  document.getElementById("filepicker").addEventListener(
    //   "change",
    //   (event: any) => {
    //     let output = document.getElementById("listing");
    //     for (const file of event.target.files) {
    //       let item = document.createElement("li");
    //       item.textContent = file.webkitRelativePath;
    //       output.appendChild(item);
    //       console.log(item);
    //       console.log(output.appendChild(item));
    //     }
    //   },
    //   false
    // );

  }


  GetDoctoPdf() {
    const target = "#DoctoPdf";
    $(target).show();
    this.loading = true;
    const formData = new FormData();
    formData.append('input_path', this.inputPath);
    formData.append('output_path', this.outputPath);

    this.http.post(`api/convert/docx_to_pdf/`, formData).subscribe((res: any) => {
      const responseData = res;
      if (res.status === true) {
        // this.UserChartListDetailList = res.data;
        // this.totalItemsUserChart = res.count;
        this.loading = false;
        this.authService.setCurrentUser({ token: res.token });
      } else {
        this.loading = false;
        this.toastr.warning(res.message);
      }
      this.onDismiss();
      
    }, error => {
      if (error.error.code === 'token_not_valid') {
        this.authService.logout();
        this.router.navigate(['/signin']);
        this.loading = false;
      } else {
        this.toastr.error(error);
        this.loading = false;
      }
    });
  }

  onDismiss() {
    const target = "#DoctoPdf";
    $(target).hide();
    $('.modal-backdrop').remove();
    $("body").removeClass("modal-open");
    $("body").addClass("modal-overflow");
  }

  








}

