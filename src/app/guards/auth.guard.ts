import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    
  ): Observable<boolean> | Promise<boolean> | boolean {
    const isAuthenticated = this.authService.isLoggedIn();
    
    if (next.routeConfig?.path === 'login' || next.routeConfig?.path === 'unauthorized') {
      return true;
    }
    
    if (!isAuthenticated) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}