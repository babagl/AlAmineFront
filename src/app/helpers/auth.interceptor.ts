import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log("Am in the interceptor");
  const jwtToken = getJwtToken();
  if(jwtToken){
    console.log(jwtToken);
    req.clone({
      setHeaders:{
        Authorisation: 'Bearer ' + jwtToken
      }
    })
    
  }
  
  return next(req);
};


function getJwtToken(): string | null{
  return localStorage.getItem("jwt_token");
}