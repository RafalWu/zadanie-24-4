function formatDate(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;

  const result = [];

	if (h !== 0) {
		result.push(h + 'h');
	}

	if (m !== 0) {
		result.push(m + 'm');
	}

	if (s !== 0) {
		result.push(s + 's');
	}
	
	if(isNaN(seconds)) return "0s"; 
		else {
		  return result.join(' ');
		}
}

	
module.exports = formatDate;