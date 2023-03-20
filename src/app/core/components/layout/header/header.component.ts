import { DOCUMENT } from '@angular/common';
import { Component, DoCheck, Inject, OnChanges, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService, HttpService } from 'src/app/core/services';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {
  public loading = false;
  isIconOnly: boolean = false;
  name: string | null | undefined;
  public HeaderTitleName: any;
  public CommonSettingList: any = {};
  public SetInterval: any = 1;
  public LicenseDays: any = '';
  public LicenseUsed: any = '';
  state: boolean = true;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    public authService: AuthService,
    private router: Router,
    private http: HttpService,
    private toastr: ToastrService,
  ) { 
   
  }

  ngOnInit(): void {
    let UserName = this.authService.getUserName();
    this.name = UserName;
  }

  toggleSidebar(){
    this.state = !this.state;
    this.authService.setSidebarState(this.state);
  }

  ngDoCheck() {
    this.HeaderTitleName = this.authService.TitleName;
  }

  /**
   * Toggle the sidebar
   */
  onToggleSidebar() {

    if (this.isIconOnly) {
      this.renderer.removeClass(this.document.body, 'sidebar-icon-only');
    } else {
      this.renderer.addClass(this.document.body, 'sidebar-icon-only');
    }

    this.isIconOnly = !this.isIconOnly;
  }

  /**
   * Logout the current session
   */
  onLogout() {
    this.http.post(`logout/`, null).subscribe((res: any) => {
      const responseData = res;
    });
    this.authService.logout();
    this.router.navigate(['/signin']);
  }


}
