import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the HttpsPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'goal',
})
export class HttpsPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string) {
    return "Goal: "+ value;
  }
}
