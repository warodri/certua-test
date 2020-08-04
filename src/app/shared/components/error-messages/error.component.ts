import { Component, OnInit, Input } from '@angular/core';
import { ErrorType } from '../../models/error-type';

@Component({
  selector: 'app-messages',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent {

    @Input() type: ErrorType;

    @Input() message: string;

    typeInfo: ErrorType = ErrorType.TYPE_INFO;

    typeWarning: ErrorType = ErrorType.TYPE_WARNING;

    typeError: ErrorType = ErrorType.TYPE_ERROR;

    typeSuccess: ErrorType = ErrorType.TYPE_SUCCESS;

    constructor() {}

}
