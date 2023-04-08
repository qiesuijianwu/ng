import { Component } from '@angular/core';
import { TiTreeNode } from '@opentiny/ng';

@Component({
  templateUrl: './tree-parentcheckable.html'
})
export class TreeParentcheckableComponent {
  multiple: boolean = true;
  parentCheckable: boolean = false;

  innerData: Array<TiTreeNode> = [
    {
      label: '家用电器',
      expanded: true,
      children: [
        {
          label: '大家电',
          expanded: true,
          children: [
            {
              label: '空调',
              expanded: true,
              children: [
                {
                  label: '海尔空调'
                },
                {
                  label: '美的空调'
                }
              ]
            }
          ]
        },
        {
          label: '生活电器',
          children: [
            {
              label: '加湿器'
            },
            {
              label: '电熨斗'
            }
          ]
        }
      ]
    }
  ];
}
