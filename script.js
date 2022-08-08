(function(){
	"use strict";

	const subMenus = document.querySelectorAll('ul li ul');

		for ( let i = 0; i<subMenus.length; i++){
			subMenus[i].className = "hide-menu"
		}
		const menuLinks = document.querySelectorAll('.menulink');
		function hideSubmenus(){
			for ( var i = 0; i<subMenus.length; i++){
				subMenus[i].className = "hide-menu"
			}
		}
		hideSubmenus();
		for ( let i=0; i<menuLinks.length; i++){
			menuLinks[i].addEventListener('click', function(event){
				event.preventDefault();
			
				const thisMenu = this.parentNode.querySelector('ul');
				

				if (thisMenu.classList.contains('hide-menu')){
					
					hideSubmenus();

					thisMenu.className = 'show-menu';
				}
				else {
					thisMenu.classList = 'hide-menu';
				}
				

			})
		}

})();