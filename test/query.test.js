const Query = require('../src/query');

describe('Querying', () => {


  describe('#all', () => {

    it('returns all of the documents', () => {
      return Query.all()
                  .then(documents => {
                    expect(documents).to.not.be.empty();
                  });
    });

  });

  describe('#findByName(name)', () => {

    it('finds a document by its name', () => {
      const name = '';
      return Query.findByName(name)
                  .then(restaurants => {
                    expect(restaurants).to.not.be.empty();
                  });
    });

  });


});