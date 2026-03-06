import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = () => {

  const router = inject(Router);
  const token = localStorage.getItem('adminToken');

  if (token === 'adminLogged') {
    return true;
  }

  router.navigate(['/home']);
  return false;

};