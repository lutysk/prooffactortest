import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { IRule } from "../../assets/constants/rule.constants";

@Component({
  selector: 'app-new-rule',
  templateUrl: './new-rule.component.html',
  styleUrls: ['./new-rule.component.scss']
})
export class NewRuleComponent {
  @Input() ruleConfig: IRule;
  @Output() removeRule = new EventEmitter<IRule>();

  public matchTypes = ['Contains', 'Exact match'];

  public form = new FormGroup({
    matchType: new FormControl(this.matchTypes[0], Validators.required),
    url: new FormControl('')
  });

  public deleteRule(): void {
    this.removeRule.emit(this.ruleConfig);
  }
}
