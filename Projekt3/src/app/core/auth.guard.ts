import { inject } from '@angular/core';
import {
  CanActivateFn
} from '@angular/router';
import { Router } from '@angular/router';
export const authGuard: CanActivateFn = () => {
  const status = localStorage.getItem('status');
  const router = inject(Router);
  if (!status || status !== 'true') {
    router.navigate(['/set-status']);
    return false;
  } else {
    return true;
  }
};
