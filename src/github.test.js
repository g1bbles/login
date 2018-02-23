const github = require('./github');
jest.mock('./request');

// A simple example test
describe('#getUser() using Promises', () => {
    it('should load user data', () => {
        return github.getUser('g1bbles')
            .then(data => {
                expect(data).toBeDefined();
                expect(data.entity.name).toEqual('James')
            })
    })
})