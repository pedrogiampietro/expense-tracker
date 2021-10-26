import * as C from './styles';
import { IItem } from '../../types/IItem';

type Props = {
  item: IItem;
};

export function TableItem({ item }: Props) {
  return (
    <C.TableLine>
      <C.TableColumn>Data</C.TableColumn>
      <C.TableColumn>{item.category}</C.TableColumn>
      <C.TableColumn>{item.title}</C.TableColumn>
      <C.TableColumn>R$ {item.value}</C.TableColumn>
    </C.TableLine>
  );
}
