import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {MatDialog, MatDialogRef, MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import { Router } from '@angular/router';
import {AuthService} from '../../core/services/auth/auth.service';
import {SignInComponent} from '../dialog/sign-in/sign-in.component';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private auth = null;

  signInDialogRef: MatDialogRef<SignInComponent>;
  isHandset: Observable<BreakpointState> = this.breakpointObserver
    .observe(['(max-width: 960px)']);
  isMobile: Observable<BreakpointState> = this.breakpointObserver
    .observe(['(min-width: 500px)']);

  constructor(
    private breakpointObserver: BreakpointObserver,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private router: Router,
    private authService: AuthService,
    private dialog: MatDialog
  ) {
    this.matIconRegistry.addSvgIcon('account_circle',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/baseline-account_circle-24px.svg'));
    this.authService.$auth.subscribe(auth => {
      this.auth = auth;
    });
  }

  ngOnInit() {
    console.log(this.auth);
  }

  openDialog() {
    this.signInDialogRef = this.dialog.open(SignInComponent, {
      data: {}
    });
  }

  signOut() {
    this.authService.signOut();
    this.auth = null;
  }
}
