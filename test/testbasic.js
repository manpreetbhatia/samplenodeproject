var assert=require('assert'); 
2 describe('String#split',function(){ 
3     it('should return an array',function(){ 
4         assert(Array.isArray('a,b,c'.split(','))); 
5 }); 
6 }) 
