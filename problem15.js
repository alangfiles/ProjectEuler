
// so this problem seems the same as:
// "how many 40 character strings can you make from 20 'D' and 20 'R's?"
// there's probably a good way to actually generate these / walk through them,
// but I wanna just hit and run so let's generate new paths and sample them

//let's have some fun with sampling.
function generate_random_path(dimension){
  //every path is the same number of steps, 2*dimension (this makes sense
  // cause you can only go down dimesion times, then right dimesion times)
  let result = "";

 
  for (let index = 0; index < dimension; index++) {
    result += "D";
    result += "R";
  }
  //result is something like `DDRR`
  

  //now shuffle it:
  var shuffled = result.split('').sort(()=> Math.random() > .5).join('');

  return shuffled;
}

function sample_count_paths(sample_size,dimension){
  let results = [];
  for(let i =0; i < sample_size; i++){
    let r = generate_random_path(dimension); //find a new path
    if(!results.includes(r)){ //if it's not included yet add it
      results.push(r);
    }
  }

  return results;
}