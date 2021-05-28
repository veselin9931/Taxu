import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as signalR from '@aspnet/signalr';
import { environment } from 'environments/environment';

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard', icon: 'nc-bank', class: '' },
    { path: '/user', title: 'User Profile', icon: 'nc-single-02', class: '' },
    { path: '/reports', title: 'Reports', icon: 'nc-paper', class: '' },
    { path: '/payments', title: 'Payments', icon: 'nc-money-coins', class: '' },



];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    isLoggedIn;

    constructor(private route: Router){}
    ngOnInit() {
        this.isLoggedIn = localStorage.getItem("user");
        if(!this.isLoggedIn){
            this.route.navigate(['/login'])
        }
        this.menuItems = ROUTES.filter(menuItem => menuItem);

        const connection = new signalR.HubConnectionBuilder()
            .configureLogging(signalR.LogLevel.Information)
            .withUrl(`${environment.signalRUrl}/orderHub`)
            .build();

        connection.start().then(function () {
            console.log('signalR connected');
        }).catch(function (err) {
            return console.log(err.toString());
        });

        connection.on('BroadcastMessage', () => {
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
