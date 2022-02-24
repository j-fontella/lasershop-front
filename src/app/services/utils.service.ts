import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  public isObject(obj : any) : boolean{
    return typeof obj === 'object' && obj !== null
  }

  public getErrorMsg(json:any, label : String, reverse = false) : string {
    console.log(json)
    if(!this.isObject(json.error)){
      return json.error ? json.error : `Erro ao registrar ${label}`;
    }
    let errors = json.error.erros;
    let error_msgs : any = [];
    let msg : string = "Contate o suporte";

    if(Array.isArray(errors)){
      msg = "";
      errors.forEach((error : String) => {
        error_msgs.push(error);
      })

      error_msgs.sort();
      if(reverse){
        error_msgs.reverse()
      }

      error_msgs.forEach((error : string) => {
        msg += error + "<BR>";
      })
    }


    return msg;
  }
}
