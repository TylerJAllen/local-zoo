import { Pipe, PipeTransform } from '@angular/core';
import { Beast } from './beast.model';

@Pipe({
  name: 'ageFilter',
  pure: false
})
export class AgeFilterPipe implements PipeTransform {

  transform(input: Beast[], desiredAge) {
    var output: Beast[] = [];
    if(desiredAge === "bigBeasts"){
      for (var i = 0; i < input.length; i++) {
        if (input[i].age >= 2) {
          output.push(input[i]);
        }
      }
      return output;
    }
    else if(desiredAge === "littleBeasts"){
      for (var i = 0; i < input.length; i++) {
        if (input[i].age < 2) {
          output.push(input[i]);
        }
      }
      return output;
    }
    else{
      return input;
    }
  }
}
