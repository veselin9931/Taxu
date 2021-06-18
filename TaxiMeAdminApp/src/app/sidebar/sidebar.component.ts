import { TransitiveCompileNgModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as signalR from '@aspnet/signalr';
import { environment } from 'environments/environment';
import { AccountService } from '_services';

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    isAdmin: boolean;
    free: boolean;
}

export const ROUTES: RouteInfo[] = [
    { path: '/home', title: 'Начало', icon: 'nc-bank', class: '' , isAdmin: false, free: true},
    { path: '/dashboard', title: 'Админ панел', icon: 'nc-badge', class: '', isAdmin: true, free: false},
    { path: '/user', title: 'Потребители', icon: 'nc-single-02', class: '', isAdmin: true, free: false},
    { path: '/reports', title: 'Проблеми', icon: 'nc-paper', class: '', isAdmin: true, free: false },
    { path: '/payments', title: 'Плащания', icon: 'nc-money-coins', class: '' , isAdmin: false, free: false},
    { path: '/faq', title: 'Често задавани въпроси', icon: 'nc-chat-33', class: '' , isAdmin: false, free: true},
    { path: '/about', title: 'За компанията', icon: 'nc-badge', class: '', isAdmin: false, free: true },

];


@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    public menuItemsForUsers: any[];
    public freeMenuItems: any[];
    isLoggedIn;
    isAdmin;

    constructor(private route: Router, private account: AccountService){}
    ngOnInit() {
        if(localStorage.getItem("user"))
        {
            this.isLoggedIn = localStorage.getItem("user");
            this.isAdmin = this.account.userValue.isAdmin;
        }
        else   {
            this.isAdmin = false;
            this.isLoggedIn = false;
        } 
       
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        this.menuItemsForUsers = ROUTES.filter(menuItemsForUser => menuItemsForUser.isAdmin === false);
        this.freeMenuItems = ROUTES.filter(x => x.free === true && x.isAdmin === false);

        console.log(this.freeMenuItems);
        console.log(this.menuItemsForUsers);
        const connection = new signalR.HubConnectionBuilder()
            .configureLogging(signalR.LogLevel.Information)
            .withUrl(`${environment.signalRUrl}/orderHub`)
            .build();

        connection.start().then(function () {
            console.log('signalR connected');
        }).catch(function (err) {
            return console.log(err.toString());
        });

        connection.on('LoggedIn', () => {
            this.checkValues();
        });
    }

    checkValues() {
      this.isLoggedIn = localStorage.getItem("user");
    }

    logout() {
        localStorage.removeItem('user');
        window.location.reload();
    }
}
