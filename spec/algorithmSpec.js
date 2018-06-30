// Working copy 
(function() {
  "use strict";
  describe("Search Algoirthm", function() {
    
    describe('Simple Search', function() { 
      it('should exist', function() { 
        expect(simpleSearch).to.exist; 
      }); 

      it("should return a target value found in a sorted list ", function() {
        let list = [1,2,3,4,5,6,7,8,9,10];
        expect(simpleSearch(list, 10, true)).to.equal(9);
      });

      it ('should return -1 if value not found', function () { 
        let list = [1,2,3,4,5,6,7,8,9,10]; 
        expect(simpleSearch(list, 20, true)).to.equal(-1);  
      });

    }); 


    describe("Binary Search", function() {
      
      it("should exist", function() {
        expect(binarySearch).to.exist;
      });

      it("should return a target value found in a sorted list ", function() {
        let list = [1,2,3,4,5,6,7,8,9,10];
        expect(binarySearch(list, 7, true)).to.equal(6);
      });

      it ('should only run if list is sorted', function () { 
        let list = [5,5,6,7,10,100,0,5]; 
        expect(binarySearch(list, 100, false)).to.equal('List not sorted');  
      }); 

      it ('should return -1 if value not found', function () { 
        let list = [1,2,3,4,5,6,7,8,9,10]; 
        expect(binarySearch(list, 20, true)).to.equal(-1);  
      }); 



      
  });

});
})();
