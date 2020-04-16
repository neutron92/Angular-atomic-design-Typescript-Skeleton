

import { TextComponent } from './text.component';

export default { title: 'Text' };

export const withText = () => ({
  component: TextComponent,
  props: {
    text: 'Hello Text',
  },
});
