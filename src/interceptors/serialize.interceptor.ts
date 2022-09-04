import { UseInterceptors, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { UserDto } from "../users/dtos/user.dto";


export class SerializeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
    //run somthing before a req is handled
    return next.handle().pipe(
      map((data: any) => {
        //run  sotinhg before the res is senr out
        return plainToClass(UserDto, data, { excludeExtraneousValues: true })
      })
    )
  }

}