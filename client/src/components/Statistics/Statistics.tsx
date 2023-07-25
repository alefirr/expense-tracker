import React, { useContext, useMemo } from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';
import './Statistics.css';
import { AppContext } from '../../api';
import { DataInput } from '../Modal/DataInput';

interface StatisticsProps {
  setContext: (context: any) => void;
}

export const Statistics: React.FC<StatisticsProps> = ({ setContext }) => {
  const context = useContext(AppContext);
  const currentUserId = context.currentUserId;

  const getDataByCurrentUser = () => {
    return context.record
      ?.filter(record => record.user === currentUserId)
      .map(record => ({
        name: context.mapById.category[record.category].name,
        value: record.sum,
      }));
  };

  const data = useMemo(() => {
    return getDataByCurrentUser();
  }, [currentUserId]);

  return (
    <div className="statistics-container">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={600} height={600}>
          <Pie
            data={data}
            dataKey="value"
            isAnimationActive={true}
            cx="50%"
            cy="50%"
            outerRadius={100}
            innerRadius={60}
            fill="#8884d8"
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            label={data => `${data.name} `}
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <DataInput
        id="currentUserId"
        type="select"
        value={currentUserId}
        setData={setContext}
        options={
          context.user?.map(({ _id, name }) => ({
            value: _id,
            label: name,
          })) || []
        }
      />
    </div>
  );
};
