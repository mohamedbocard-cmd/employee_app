import { Pipe, PipeTransform } from '@angular/core';
import {Level} from '../models/level.model';

  const  LEVELS: Record<Level, String> = {
  J: "junior" ,
  M: "Mohamed",
  S: "Senior"

}
@Pipe({
  name: 'level'
})
export class LevelPipe implements PipeTransform {

  transform(value: Level): String  {
    return LEVELS[value];
  }

}
