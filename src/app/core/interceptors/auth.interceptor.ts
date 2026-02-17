import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  req = req.clone({
    headers: req.headers.set(
      'authorization',
      `Bearer ${window.localStorage.getItem('auth')}`
    ),
  });
  return next(req);
};
