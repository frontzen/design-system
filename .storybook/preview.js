import { themeDecorator } from './decorators/themeDecorator';
import './public/fonts/fontiran.css';

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: 'fa',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', right: 'LTR', title: 'English (US)' },
        { value: 'fa', right: 'RTL', title: 'Farsi' },
      ],
    },
  },
};

export const decorators = [themeDecorator];
