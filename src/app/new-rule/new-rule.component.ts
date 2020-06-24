import { Component, EventEmitter, Input, OnDestroy, Output} from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { IRule } from "../../assets/constants/rule.constants";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";

@Component({
  selector: 'app-new-rule',
  templateUrl: './new-rule.component.html',
  styleUrls: ['./new-rule.component.scss']
})
export class NewRuleComponent implements OnDestroy {
  @Input() ruleConfig: IRule;
  @Output() removeRule = new EventEmitter<IRule>();
  @Output() removeBtn = new EventEmitter<boolean>();
  private destroy$: Subject<boolean> = new Subject();

  public matchTypes = ['Contains', 'Exact match'];

  public form = new FormGroup({
    matchType: new FormControl(this.matchTypes[0], Validators.required),
    url: new FormControl('')
  });

  constructor() {
    this.form.valueChanges
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe(() => {
        this.removeBtn.emit(this.form.valid);
      });
  }

  public deleteRule(): void {
    this.removeRule.emit(this.ruleConfig);
  }

  public ngOnDestroy() {
    this.destroy$.next(false);
  }
}
