import React from 'react';
import { ChartLine } from 'evo-web-component';
const data = [
  {
    x: '2022-09-08',
    y: 1,
    category: '分类1'
  },
  {
    x: '2022-09-09',
    y: 2,
    category: '分类1'
  },
];
export default () => <ChartLine data={data} loading={false} legend={undefined} />;