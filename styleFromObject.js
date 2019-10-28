function setStyleFromObj(el, styleObject) {
			for(let key of Object.keys(styleObject)) {
				el.style[key] = styleObject[key];
			}
		}
