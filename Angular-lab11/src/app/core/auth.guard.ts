import { inject } from '@angular/core';
import {
  CanActivateFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Router } from '@angular/router';
export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
    const status = localStorage.getItem('status');
    const router = inject(Router);
    console.log('status', status);
    if (!status || status !== 'true') {
      router.navigate(['/set-status']);
      return false;
    }else{
      return true;
    }
};
