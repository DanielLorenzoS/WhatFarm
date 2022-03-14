const up = document.querySelectorAll('.try');
const header = document.querySelectorAll('.static');

let change = (cls,rmv,vrl) => {
    
    const verifyVisibility = (entries) => {
	    for (const entry of entries) {
		    entry.isIntersecting ? entry.target.setAttribute("class",`${cls}`) : 
            entry.target.setAttribute("class", `${rmv}`);
    	} 
    }
    const observer = new IntersectionObserver(verifyVisibility);

    for (const uped of vrl){
        observer.observe(uped);
    } 
}
change('obs','o', up);

let menu = document.querySelector('.imgmenu');
let main = document.querySelector('.main');
main.style.display='none';
let pivot = false;
menu.addEventListener('click', e => {
    if (pivot == false) {
        pivot = true;
        main.style.display='block';
        main.style.top = '53px';
    }else {
        pivot = false;
        main.style.display='none';
    }
})
