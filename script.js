const boldWords = document.querySelectorAll("strong")

function highlight() {
    //Write your code here
	boldWords.forEach((word)=>{
		word.classList.add("greenText")
	})

}


function return_normal() {
    //Write your code here
	boldWords.forEach((word)=>{
		word.classList.remove("greenText")
	})
}
