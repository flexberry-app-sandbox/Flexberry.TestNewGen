import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'Books',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Books',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Books',
          title: 'Books'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        books: {
          caption: 'Books',
          title: 'Books',
          'new-platform-test-new-gen-country-l': {
            caption: 'Country',
            title: ''
          },
          'new-platform-test-new-gen-book-l': {
            caption: 'Book',
            title: ''
          },
          'new-platform-test-new-gen-author-l': {
            caption: 'Author',
            title: ''
          },
          'new-platform-test-new-gen-language-l': {
            caption: 'Language',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
