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
        expect(simpleSearch(list, 2)).to.equal(1);
        expect(simpleSearch(list, 5)).to.equal(4);
        expect(simpleSearch(list, 10)).to.equal(9);
        expect(simpleSearch(list, 8)).to.equal(7);
      });

      it("should return a target value found in a unsorted list ", function() {
        let list = [20,40,3,210,100,2];
        expect(simpleSearch(list, 210, true)).to.equal(3);
        expect(simpleSearch(list, 2, true)).to.equal(5);
        expect(simpleSearch(list, 100, true)).to.equal(4);
        expect(simpleSearch(list, 20, true)).to.equal(0);

      });

      it('should return the index of the first instance of a repeated value', function() { 
        let sortedList = [1,1,3,3,4,5,6,9,10,10]; 
        let unsortedList = [10,9,60,5,20,5,8,10,20,100];  
        expect(simpleSearch(sortedList, 3)).to.equal(2);
        expect(simpleSearch(sortedList, 10)).to.equal(8); 
        expect(simpleSearch(unsortedList,10)).to.equal(0); 
        expect(simpleSearch(unsortedList,20)).to.equal(4);
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
        expect(binarySearch(list, 8, true)).to.equal(7);
        expect(binarySearch(list, 2, true)).to.equal(1);
        expect(binarySearch(list, 10, true)).to.equal(9);
      });

      it ('should only run if list is sorted', function () { 
        let list = [5,5,6,7,10,100,0,5]; 
        expect(binarySearch(list, 100, false)).to.equal('List not sorted');  
      }); 

      it('should return the index of the first instance of a repeated value', function() { 
        let sortedList = [1,1,3,3,4,5,6,9,10,10]; 
        expect(binarySearch(sortedList, 3, true)).to.equal(2);
        expect(binarySearch(sortedList, 10,true)).to.equal(8); 
      });

      it ('should return -1 if value not found', function () { 
        let list = [1,2,3,4,5,6,7,8,9,10]; 
        expect(binarySearch(list, 20, true)).to.equal(-1);

      }); 



      
  });

});
})();
