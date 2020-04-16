
import { ListComponent } from './list.component';

export default { title: 'simple Liste' };

export const simple = () => ({
  component: ListComponent,
  props: {
    list: ['Saab', 'Volvo', 'BMW']
  },
});
