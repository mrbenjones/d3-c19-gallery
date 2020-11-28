import testOne from  '../util/listLib'
describe('first principles', function(){
    test('unit: first principles', function(done) {
        expect(true).toEqual(true)
        done()
    })
    test('unit: import function', function(done) {
        let obj = testOne.testOne()
        expect(obj.one).toEqual('one')
        done()
    })
})