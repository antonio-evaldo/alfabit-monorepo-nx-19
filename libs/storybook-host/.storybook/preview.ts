import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
import { Preview } from '@storybook/angular';
setCompodocJson(docJson);

const preview: Preview = {
  parameters: {
    actions: {
      argTypesRegex: "^on [A-Z].*"
    },
    options: {
        storySort: {
        method: "alphabetical",
        locales: "pt-BR",
      },
    },
  },
}
export default preview;
