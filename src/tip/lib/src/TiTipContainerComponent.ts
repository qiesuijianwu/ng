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
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
/**
 * @ignore
 */
@Component({
  selector: 'ti-tip-container',
  template: ` <div class="ti3-tooltip-content"><ng-content></ng-content></div>
    <div class="ti3-tooltip-sqr"></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.ti3-tooltip]': 'true',
    '[style.z-index]': 'zIndex'
  },
  styleUrls: ['./tip.less']
})
export class TiTipContainerComponent {
  @Input() zIndex: number;
}
