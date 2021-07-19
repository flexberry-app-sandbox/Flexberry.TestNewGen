import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import NewPlatformTestNewGenAuthorLForm from './forms/new-platform-test-new-gen-author-l';
import NewPlatformTestNewGenBookLForm from './forms/new-platform-test-new-gen-book-l';
import NewPlatformTestNewGenCountryLForm from './forms/new-platform-test-new-gen-country-l';
import NewPlatformTestNewGenLanguageLForm from './forms/new-platform-test-new-gen-language-l';
import NewPlatformTestNewGenAuthorEForm from './forms/new-platform-test-new-gen-author-e';
import NewPlatformTestNewGenBookEForm from './forms/new-platform-test-new-gen-book-e';
import NewPlatformTestNewGenCountryEForm from './forms/new-platform-test-new-gen-country-e';
import NewPlatformTestNewGenLanguageEForm from './forms/new-platform-test-new-gen-language-e';
import NewPlatformTestNewGenAuthorModel from './models/new-platform-test-new-gen-author';
import NewPlatformTestNewGenBookModel from './models/new-platform-test-new-gen-book';
import NewPlatformTestNewGenCountryModel from './models/new-platform-test-new-gen-country';
import NewPlatformTestNewGenLanguageModel from './models/new-platform-test-new-gen-language';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'new-platform-test-new-gen-author': NewPlatformTestNewGenAuthorModel,
    'new-platform-test-new-gen-book': NewPlatformTestNewGenBookModel,
    'new-platform-test-new-gen-country': NewPlatformTestNewGenCountryModel,
    'new-platform-test-new-gen-language': NewPlatformTestNewGenLanguageModel
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        books: {
          caption: 'books',
          title: 'books',
          'new-platform-test-new-gen-country-l': {
            caption: 'new-platform-test-new-gen-country-l',
            title: 'new-platform-test-new-gen-country-l'
          },
          'new-platform-test-new-gen-book-l': {
            caption: 'new-platform-test-new-gen-book-l',
            title: 'new-platform-test-new-gen-book-l'
          },
          'new-platform-test-new-gen-author-l': {
            caption: 'new-platform-test-new-gen-author-l',
            title: 'new-platform-test-new-gen-author-l'
          },
          'new-platform-test-new-gen-language-l': {
            caption: 'new-platform-test-new-gen-language-l',
            title: 'new-platform-test-new-gen-language-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'new-platform-test-new-gen-author-l': NewPlatformTestNewGenAuthorLForm,
    'new-platform-test-new-gen-book-l': NewPlatformTestNewGenBookLForm,
    'new-platform-test-new-gen-country-l': NewPlatformTestNewGenCountryLForm,
    'new-platform-test-new-gen-language-l': NewPlatformTestNewGenLanguageLForm,
    'new-platform-test-new-gen-author-e': NewPlatformTestNewGenAuthorEForm,
    'new-platform-test-new-gen-book-e': NewPlatformTestNewGenBookEForm,
    'new-platform-test-new-gen-country-e': NewPlatformTestNewGenCountryEForm,
    'new-platform-test-new-gen-language-e': NewPlatformTestNewGenLanguageEForm
  },

});

export default translations;
