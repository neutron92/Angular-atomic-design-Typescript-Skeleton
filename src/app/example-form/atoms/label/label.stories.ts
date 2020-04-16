
import { LabelComponent } from './label.component';

export default { title: 'Label' };

export const withText = () => ({
  component: LabelComponent,
  props: {
    text: 'Hello Label',
  },
});

export const withEmoji = () => ({
  component: LabelComponent,
  props: {
    text: '😀 😎 👍 💯',
  },
});
