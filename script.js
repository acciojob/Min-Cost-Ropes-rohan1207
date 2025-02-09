function mincost(arr)
{ 
//write your code here
// return the min cost
let sum=0;
	arr.sort();
	arr.map((num)=>{
		sum+=num;
		return sum;
	})
  
}

module.exports=mincost;
