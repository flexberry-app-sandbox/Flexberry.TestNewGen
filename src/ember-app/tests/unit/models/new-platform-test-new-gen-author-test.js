import { moduleForModel, test } from 'ember-qunit';

moduleForModel('new-platform-test-new-gen-author', 'Unit | Model | new-platform-test-new-gen-author', {
  // Specify the other units that are required for this test.
  needs: [
    'model:new-platform-test-new-gen-author',
    'model:new-platform-test-new-gen-book',
    'model:new-platform-test-new-gen-country',
    'model:new-platform-test-new-gen-language',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
