function replace(arr){
    for(let index=0;index<arr.length;index++){ // loop to iterate over the array.
    if(index%2==0){// check for the even index
    arr.splice(index,1,"even index");
    
    }
    }
    console.log(arr);
    }
    const arr=["Mat","Basketball","Rebot","Goku","Cars","Frank"];
    replace(arr);// function calling







    function matchDogName(string, dogNames) {
        for (let i = 0; i < dogNames.length; i++) {
          if (string.toLowerCase().includes(dogNames[i].toLowerCase())) {
            console.log(`Matched ${dogNames[i]}`);
            return;
          }
        }
        console.log("No Matches");
      }