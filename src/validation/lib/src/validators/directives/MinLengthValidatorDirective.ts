/**
 * Copyright (c) 2022 - present TinyUI Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import { Directive, Input, forwardRef } from '@angular/core';
import { BaseValidator } from './BaseValidator';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
@Directive({
  selector: `[tiMinLength][formControlName],[tiMinLength][formControl],[tiMinLength][ngModel]`,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MinLengthValidatorDirective),
      multi: true
    }
  ]
})
export class MinLengthValidatorDirective extends BaseValidator {
  static readonly NAME: string = 'tiMinLength';
  @Input(MinLengthValidatorDirective.NAME) baseValue: any;
  validatorStr: string = BaseValidator.getValidatorStr(MinLengthValidatorDirective.NAME);
}
