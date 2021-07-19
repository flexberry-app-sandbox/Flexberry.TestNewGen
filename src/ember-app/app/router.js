import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('new-platform-test-new-gen-author-l');
  this.route('new-platform-test-new-gen-author-e',
  { path: 'new-platform-test-new-gen-author-e/:id' });
  this.route('new-platform-test-new-gen-author-e.new',
  { path: 'new-platform-test-new-gen-author-e/new' });
  this.route('new-platform-test-new-gen-book-l');
  this.route('new-platform-test-new-gen-book-e',
  { path: 'new-platform-test-new-gen-book-e/:id' });
  this.route('new-platform-test-new-gen-book-e.new',
  { path: 'new-platform-test-new-gen-book-e/new' });
  this.route('new-platform-test-new-gen-country-l');
  this.route('new-platform-test-new-gen-country-e',
  { path: 'new-platform-test-new-gen-country-e/:id' });
  this.route('new-platform-test-new-gen-country-e.new',
  { path: 'new-platform-test-new-gen-country-e/new' });
  this.route('new-platform-test-new-gen-language-l');
  this.route('new-platform-test-new-gen-language-e',
  { path: 'new-platform-test-new-gen-language-e/:id' });
  this.route('new-platform-test-new-gen-language-e.new',
  { path: 'new-platform-test-new-gen-language-e/new' });
});

export default Router;
