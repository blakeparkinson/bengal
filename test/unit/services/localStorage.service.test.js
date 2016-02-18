describe('Service: LocalStorage', function() {

  var localStorageService;
  beforeEach(module('starter.services'));

  beforeEach(inject(function(_$localStorage_) {
    localStorage = _$localStorage_;
  }));

  it('can get an instance of my factory', inject(function(_$localStorage_) {
    expect(_$localStorage_).toBeDefined();
  }));


  it('should set a string in local storage', inject(function(_$localStorage_) {
    _$localStorage_.set('name', 'blake');
    var localStorageReturn = _$localStorage_.get('name');
    expect(localStorageReturn).toBe('blake');
  }));
});
