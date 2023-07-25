import React, { useContext, useState, useMemo } from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';
import './Statistics.css';
import { AppContext } from '../../api';
import { DataInput } from '../Modal/DataInput';

export const Statistics = () => {
  const context = useContext(AppContext);
  const [currentUser, setCurrentUser] = useState<{ userId: string }>({
    userId: '6450a7236e08d359fd2accf4',
  });

  const getDataByCurrentUser = () => {
    console.log('getDataByCurrentUser');
    return context.record
      ?.filter(record => record.user === currentUser.userId)
      .map(record => ({
        name: context.mapById.category[record.category].name,
        value: record.sum,
      }));
  };

  const data = useMemo(() => {
    return getDataByCurrentUser();
  }, [currentUser]);

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
        id="userId"
        type="select"
        value={currentUser.userId}
        setData={setCurrentUser}
        options={context.user?.map(user => ({
          value: user._id,
          label: user.name,
        }))}
      />
    </div>
  );
};
