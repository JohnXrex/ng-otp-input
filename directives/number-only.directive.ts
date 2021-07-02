import { Directive, Input, HostListener } from '@angular/core';

@Directive({
    selector: '[numberOnly]'
})
export class NumberOnlyDirective {
    @Input() disabledNumberOnly: boolean;
    constructor() {}

    @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
        if (!this.disabledNumberOnly) {
            if (
                [46, 8, 27, 13].indexOf(event.keyCode) !== -1 ||
                (event.keyCode === 86 && (event.ctrlKey || event.metaKey)) ||
                (event.keyCode >= 35 && event.keyCode <= 39)
            ) {
                return;
            }

            if (event.shiftKey) {
                event.preventDefault();
                return;
            }

            if (event.keyCode < 48 || (event.keyCode > 57 && event.keyCode < 96) || event.keyCode > 105) {
                event.preventDefault();
                return;
            }
        }
    }
}
