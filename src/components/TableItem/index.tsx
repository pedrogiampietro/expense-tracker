import * as C from './styles';
import { IItem } from '../../types/IItem';
import { formatDate } from '../../helpers/dateFilter';

type Props = {
  item: IItem;
};

export function TableItem({ item }: Props) {
  return (
    <C.TableLine>
      <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
      <C.TableColumn>{item.category}</C.TableColumn>
      <C.TableColumn>{item.title}</C.TableColumn>
      <C.TableColumn>R$ {item.value}</C.TableColumn>
    </C.TableLine>
  );
}
