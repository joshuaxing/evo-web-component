import React from 'react';
import { Line } from '@ant-design/plots';
import { Spin, Empty } from 'antd';
import './index.less';
type LineType = {
  data: any[];
  loading?: boolean;
  height?: number;
  legend?: any;
};

const ChartLine = (props: LineType) => {
  const config = {
    data: props.data,
    xField: 'x',
    yField: 'y',
    seriesField: 'category',
    color: '#FA8D28',
    legend: props.legend
      ? props.legend
      : {
          position: 'top',
        },
    point: {
      size: 5,
      shape: 'circle',
    },
    smooth: true,
    height: props.height ? props.height : 200,
  };

  return (
    <div>
      {props.loading && (
        <div style={{ textAlign: 'center', paddingTop: '90px' }}>
          <Spin spinning={props.loading}></Spin>
        </div>
      )}
      {props.data.length > 0 ? (
        <Line {...config} />
      ) : !props.loading ? (
        <div className="evo-chart-empty">
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        </div>
      ) : null}
    </div>
  );
};

export default ChartLine;
