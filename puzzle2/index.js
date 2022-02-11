let fullPath = document.getElementById('fullpath')

function basicPath() {
	let path = 'M 0.5 0.5'
	const loops = 12 //must set stroke-width and circle radius accordingly = 0.25/loops
	const loopSteps = 16
	const coverCornerLoops = Math.ceil( loops * Math.sqrt(2) )  + 1/*for inner circle*/

	for( let loop = 0; loop <= coverCornerLoops; loop++ ) {
		for( let i = 0; i < loopSteps; i++) {
			let radius = (i / loopSteps + loop) / loops / 2
			let angle = 2 * Math.PI * i / loopSteps
			let x = Math.cos(angle) * radius + 0.5
			let y = Math.sin(angle) * radius + 0.5
			
			path = path + 'L'  + x + ' ' + y
		}
	}
	
	return path
}

function nuancedPath() {
	let path = ''
	const loops = 12 //must set stroke-width and circle radius accordingly = 0.25/loops
	const coverCornerLoops = Math.ceil( loops * Math.sqrt(2) )  + 1/*for inner circle*/
	const loopSteps = 16
	const tangentOff = 4/3* Math.tan(Math.PI/(2*loopSteps))

	let px = 0.5
	let py = 0.5
	let pcx = 0
	let pcy = 0

	for( let loop = 0; loop <= coverCornerLoops; loop++ ) {
		for( let i = 0; i < loopSteps; i++) {
			let radius = Math.max( 0.25/loops, (i / loopSteps + loop) / loops / 2 )
			let angle = 2 * Math.PI * i / loopSteps
			let x = Math.cos(angle) * radius + 0.5
			let y = Math.sin(angle) * radius + 0.5
			
			let tangent = angle + Math.PI / 2
			let cx = Math.cos(tangent) * radius * tangentOff
			let cy = Math.sin(tangent) * radius * tangentOff
			
			if (loop == 0 && i ==0) {
			} else if(loop == 0 && i == 1) {
				path = path + 'M' + x + ' ' + y
			} else {
				path = path + 'C' +  (px + pcx) + ' ' + (py + pcy) + ' ' + (x - cx) + ' ' + (y - cy) + ' ' + x + ' ' + y
			}
			
			px = x
			py = y
			pcx = cx
			pcy = cy
		}
	}
	
	return path
}

let path = nuancedPath()
fullPath.setAttribute('d', path)

function start() {
	let fullPath = document.getElementById('full')
	if(fullPath.className.indexOf('anim') == -1) {
		fullPath.className += ' anim'
	} else {
		fullPath.className = fullPath.className.replace( ' anim', '' )
	}
}

function MouseDown() {
	let fullPath = document.getElementById('grow')
	if(fullPath.className.indexOf('anim') == -1) {
		fullPath.className += ' anim'
	} else {
		fullPath.className = fullPath.className.replace( ' anim', '' )
	}
}

function start() {
	let fullPath = document.getElementById('full')
	if(fullPath.className.indexOf('anim') == -1) {
		fullPath.className += ' anim'
	} else {
		fullPath.className = fullPath.className.replace( ' anim', '' )
	}
}