
import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  forwardRef,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { SlimScrollOptions } from 'ng2-slimscroll';
import * as moment from 'moment';

const Moment: any = (<any>moment).default || moment;

export interface IDateModel {
  day: string;
  month: string;
  year: string;
  formatted: string;
  momentObj: moment.Moment;
}

export class DateModel {
  day: string;
  month: string;
  year: string;
  formatted: string;
  momentObj: moment.Moment;

  constructor(obj?: IDateModel) {
    this.day = obj && obj.day ? obj.day : null;
    this.month = obj && obj.month ? obj.month : null;
    this.year = obj && obj.year ? obj.year : null;
    this.formatted = obj && obj.formatted ? obj.formatted : null;
    this.momentObj = obj && obj.momentObj ? obj.momentObj : null;
  }
}

export interface IDatePickerOptions {
  autoApply?: boolean;
  style?: 'normal' | 'big' | 'bold';
  locale?: string;
  minDate?: Date;
  maxDate?: Date;
  initialDate?: Date;
  firstWeekdaySunday?: boolean;
  format?: string;
  selectYearText?: string;
  todayText?: string;
  clearText?: string;
}




@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss'],
})

export class AssignmentsComponent {

  @Input() inputEvents: EventEmitter<{ type: string, data: string | DateModel }>;
  @Output() outputEvents: EventEmitter<{ type: string, data: string | DateModel }>;

 

  minDate: moment.Moment | any;
  maxDate: moment.Moment | any;

  private onTouchedCallback: () => void = () => { };
  private onChangeCallback: (_: any) => void = () => { };

  constructor( ) 
  {
  
  };
  ngOnInit()
  {

  }
}