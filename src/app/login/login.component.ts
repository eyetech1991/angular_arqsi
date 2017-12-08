import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Login } from "./login";

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { HttpClient } from '@angular/common/http';

import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch'

import { AuthenticationService } from '../service/login/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authenticationService: AuthenticationService) { }
  ngOnInit() {
    this.authenticationService.logout();
    this.activatedRoute.params.subscribe(params => {
      if (params['u'] !== undefined) {
        ;
        this.error = 'Your user cannot access receitas';
      }
    });
  }
  login() {
    this.loading = true;
    this.authenticationService.login(this.model.email,
      this.model.password)
      .subscribe(result => {
        this.loading = false;
        if (result === true) {
            this.router.navigate(['/']);  
        } else {
          this.error = 'Username or password is incorrect';
        }
      });
  }
  help() {
    alert("Insira os dados para aceder");
  }
  userforgotAccount() {
    alert("Contacte seu administrador de sistemas");
  }
}