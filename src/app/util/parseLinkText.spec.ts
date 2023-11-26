import parseLinkText from "./parseLinkText";

describe('Utility functions', () =>{
    describe('Headers parse function', () =>{
        it('should parse the text into a properly formatted object', ()=>{
            const mockData = `<https://api.github.com/repositories/20929025/issues?page=2>; rel="next", <https://api.github.com/repositories/20929025/issues?page=200>; rel="last"`;
            const result = parseLinkText(mockData);
            expect(result.next).toEqual("https://api.github.com/repositories/20929025/issues?page=2");
            expect(result.last).toEqual("https://api.github.com/repositories/20929025/issues?page=200");            
        });
        it('should fail gracefully on lack of input', ()=>{
            const mockData = '';
            const result = parseLinkText(mockData);
            expect(result.next).toEqual(undefined);
            expect(result.prev).toEqual(undefined);
            expect(result.last).toEqual(undefined);
            expect(result.first).toEqual(undefined);
        });
    })
})