import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name : 'onlyOneError'
})

export class OnlyOneErrorPipe implements PipeTransform {

    transform(allError:any, errorPriority:string[]):any {

        if(!allError) {
            return null;
        }

        const onlyOneError:any = {};

        for (let error of errorPriority) {
            if(allError[error]) {
                onlyOneError[error] = allError[error]
                break;
            }
        }

        return onlyOneError;
    }

}