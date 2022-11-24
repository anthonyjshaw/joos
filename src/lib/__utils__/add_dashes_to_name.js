const addDashesToName = (str) => {
	if (str.split(' ').length < 2) {
		return str;
	} else {
		return str.replace(/\s/g, '-');
	}
} 

export default addDashesToName;