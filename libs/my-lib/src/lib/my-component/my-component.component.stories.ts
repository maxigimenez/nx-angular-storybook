
import { MyComponentComponent } from './my-component.component';

export default {
  title: 'MyComponentComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: MyComponentComponent,
  props: {
  }
})
