import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.books.caption'),
          title: i18n.t('forms.application.sitemap.books.title'),
          children: [{
            link: 'new-platform-test-new-gen-country-l',
            caption: i18n.t('forms.application.sitemap.books.new-platform-test-new-gen-country-l.caption'),
            title: i18n.t('forms.application.sitemap.books.new-platform-test-new-gen-country-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'new-platform-test-new-gen-book-l',
            caption: i18n.t('forms.application.sitemap.books.new-platform-test-new-gen-book-l.caption'),
            title: i18n.t('forms.application.sitemap.books.new-platform-test-new-gen-book-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'new-platform-test-new-gen-author-l',
            caption: i18n.t('forms.application.sitemap.books.new-platform-test-new-gen-author-l.caption'),
            title: i18n.t('forms.application.sitemap.books.new-platform-test-new-gen-author-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'new-platform-test-new-gen-language-l',
            caption: i18n.t('forms.application.sitemap.books.new-platform-test-new-gen-language-l.caption'),
            title: i18n.t('forms.application.sitemap.books.new-platform-test-new-gen-language-l.title'),
            icon: 'phone',
            children: null
          }]
        }
      ]
    };
  }),
})