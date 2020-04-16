
import { moduleMetadata } from '@storybook/angular';
import { RichTextComponent } from './rich-text.component';
import { RichTextModule } from '../../atoms/rich-text/rich-text.module';

export default { title: 'Rich Text',
decorators: [
  moduleMetadata({
    // imports both components to allow component composition with storybook
    imports: [RichTextModule],
  }),
], };

export const withText = () => ({
  component: RichTextComponent,
  props: {
    htmlContent: 'Hello',
  },
});

export const withHTML = () => ({
  component: RichTextComponent,
  props: {
    htmlContent: '<b>Hello</b><h1>lool</h1>',
  },
});

