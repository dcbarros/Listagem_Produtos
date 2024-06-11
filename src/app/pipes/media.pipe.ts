import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'media',
  standalone: true
})
export class MediaPipe implements PipeTransform {

  transform(value: any): number {
    return parseFloat(((value.nota1+value.nota2)/2).toFixed(2));
  }

}
