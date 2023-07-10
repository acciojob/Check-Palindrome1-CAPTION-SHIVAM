// complete the given function

function palindrome(str){
for(let i=0;i<str.length;i++){
	if(str.charAt(i)==str.charAt(str.length-1)){
		return true 
	}
}
	return false;
	
}
module.exports = palindrome
