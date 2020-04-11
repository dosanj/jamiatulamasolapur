import { Pipe, PipeTransform } from '@angular/core';
import { urduLanguageData } from './language-data/urdu-data';
enum Languages {
    ENGLISH = 'English',
    URDU = 'Urdu',
    HINDI = 'Hindi',
}

@Pipe({
    name: 'language',
})
export class LanguagePipe implements PipeTransform {
    transform(value: any, args?: any): any {
        if (Languages.ENGLISH === args) {
            return value;
        }
        if (Languages.URDU === args) {
            const textInUrdu = urduLanguageData[value];
            return textInUrdu || value;
        }
        return value + ' in    ' + args;
    }
}
