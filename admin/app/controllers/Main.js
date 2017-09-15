export default {
	currentRoute(){
		let deepLinks = window.location.pathname;
		deepLinks = deepLinks.split('/');
		deepLinks = deepLinks.filter(item => {
			return item.length > 0;
		});

		if (!deepLinks.length){
			return null;
		} else if (deepLinks.length === 1){
			if (deepLinks[0] === ''){
				return null;
			}
		}
		return false;	
	}
}
