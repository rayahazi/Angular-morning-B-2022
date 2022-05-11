import { Pipe, PipeTransform } from '@angular/core';

// {{ 4 | exponent:2 }}

@Pipe({name: 'exponent'})
export class ExponentPipe implements PipeTransform{
    transform(value: number, exponent: number=2):number {
        // if exponent is empty - 2, else - exponent
        return Math.pow(value, exponent);
    }
}


