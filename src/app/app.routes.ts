import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BookingComponent } from './pages/booking/booking.component';
import { InfoComponent } from './pages/info/info.component';
import { InfoDetailsComponent } from './pages/info-details/info-details.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminLoginComponent } from './core/admin-login/admin-login.component';
import { HistoryComponent } from './pages/history/history.component';
import { adminGuard } from './core/guard/auth.guard';

export const routes: Routes = [
     { path: '', redirectTo: "home", pathMatch: "full" },
    { path: 'home', component: HomeComponent },
    { path: "booking", component: BookingComponent },
    { path: "info", component: InfoComponent },
    { path: "info-details", component: InfoDetailsComponent},
    { path: "dashboard", component: DashboardComponent, canActivate: [adminGuard]},
    { path: "history", component: HistoryComponent, canActivate: [adminGuard]},
    { path: "Admin-login", component: AdminLoginComponent},
];
