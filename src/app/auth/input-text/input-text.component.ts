import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  Self
} from "@angular/core";
import {
  ControlValueAccessor,
  Validator,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
  Validators,
  NgControl
} from "@angular/forms";

@Component({
  selector: "app-input-text",
  templateUrl: "./input-text.component.html",
  styleUrls: ["./input-text.component.css"],
  providers: []
})
export class InputTextComponent
  implements ControlValueAccessor, Validator, OnInit {
  @ViewChild("input", { static: false }) input: ElementRef;
  disabled;

  @Input() type = "text";
  @Input() isRequired: boolean = false;
  @Input() pattern: string = null;
  @Input() label: string = null;
  @Input() placeholder: string;
  @Input() errorMsg: string;

  constructor(@Self() public controlDir: NgControl) {
    this.controlDir.valueAccessor = this;
  }

  ngOnInit(): void {
    const control = this.controlDir.control;
    const validators: ValidatorFn[] = control.validator
      ? [control.validator]
      : [];
    if (this.isRequired) {
      validators.push(Validators.required);
    }
    if (this.pattern) {
      validators.push(Validators.pattern(this.pattern));
    }

    control.setValidators(validators);
    control.updateValueAndValidity();
  }

  onChange(event) {}

  onTouched() {}

  writeValue(obj: any): void {
    this.input.nativeElement.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  validate(c: AbstractControl): ValidationErrors {
    const validators: ValidatorFn[] = [];
    if (this.isRequired) {
      validators.push(Validators.required);
    }
    if (this.pattern) {
      validators.push(Validators.pattern(this.pattern));
    }

    return validators;
  }
}
