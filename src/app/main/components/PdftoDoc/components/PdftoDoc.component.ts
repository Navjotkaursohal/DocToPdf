import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef, OnChanges, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, HttpService } from 'src/app/core/services';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import $ from "jquery";

@Component({
  selector: 'app-PdftoDoc',
  templateUrl: './PdftoDoc.component.html',
  styleUrls: ['./PdftoDoc.component.css']
})
export class PdftoDocComponent implements OnInit {
  public loading = false;
  public inputPath: any;
  public outputPath: any;

  constructor(private _http: HttpService,
    private router: Router,
    private toastr: ToastrService,
    private http: HttpService,
    private dtPipe: DatePipe,
    private _auth: AuthService,
    private sanitizer: DomSanitizer,
    public authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.SetRestaurantName(`Pdf to Doc`);

    // document.getElementById("filepicker").addEventListener(
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

  GetPdftoDoc() {
    const target = "#PdftoDoc";
    $(target).show();
    this.loading = true;
    const formData = new FormData();
    formData.append('input_path', this.inputPath);
    formData.append('output_path', this.outputPath);

    this.http.post(`api/convert/pdf_to_docx/`, formData).subscribe((res: any) => {
      const responseData = res;
      // console.log(res)
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
    },
      error => {
        // this.toastr.error(error);
        // this.loading = false;
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
    const target = "#PdftoDoc";
    $(target).hide();
    $('.modal-backdrop').remove();
    $("body").removeClass("modal-open");
    $("body").addClass("modal-overflow");
  }
}

