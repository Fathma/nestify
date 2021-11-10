import {
  CallHandler,
  ExecutionContext,
  NestInterceptor,
  UseInterceptors

} from '@nestjs/common'
import { plainToClass } from 'class-transformer'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

interface ClassConstructor {
  new (...args: any[]): {}
}

export function Serialize(dto: ClassConstructor){
  return UseInterceptors(new SerializeInceptor(dto))
}

export class SerializeInceptor implements NestInterceptor {
  constructor(private dto:any ){}

  intercept(context: ExecutionContext, next: CallHandler ): Observable<any> {
    return next.handle().pipe(
      map((data: any) =>{
        return plainToClass(this.dto, data, {excludeExtraneousValues: true})
      })
    )
  }

}