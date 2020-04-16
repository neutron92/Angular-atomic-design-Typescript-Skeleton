
import { moduleMetadata } from '@storybook/angular';
import { AvatarCompComponent } from './avatar-comp.component';
import { AvatarCompModule } from '../../atoms/avatar-comp/avatar-comp.module';

export default { title: 'Avatar',
decorators: [
  moduleMetadata({
    // imports both components to allow component composition with storybook
    imports: [AvatarCompModule],
  }),
], };

export const withLink = () => ({
  component: AvatarCompComponent,
  props: {
    srcUri: 'https://dummyimage.com/600x400/000/fff',
  },
});

export const withoutLink = () => ({
  component: AvatarCompComponent
});

