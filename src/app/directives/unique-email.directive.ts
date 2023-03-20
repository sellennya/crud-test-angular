import { Directive } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  NG_ASYNC_VALIDATORS,
  ValidationErrors,
} from '@angular/forms';
import { map, Observable } from 'rxjs';
import { ListService } from '../services/list.service';

@Directive({
  selector: '[uniqueEmail]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: UniqueEmailDirective,
      multi: true,
    },
  ],
})
export class UniqueEmailDirective implements AsyncValidator {
  constructor(private list: ListService) {}
  validate(
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.list.getCostumerByEmail(control.value).pipe(
      map((costumers: any) => {
        return costumers && costumers.length > 0 ? { uniqueEmail: true } : null;
      })
    );
  }
}
