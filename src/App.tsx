import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { IItem } from './types/IItem';
import { ICategory } from './types/ICategory';

import { items } from './data/items';
import { categories } from './data/categories';

import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';

import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';

export function App() {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<IItem[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
        />
        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  );
}
