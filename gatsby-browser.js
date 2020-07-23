/* global strum */

exports.onRouteUpdate = function() {
	if (process.env.NODE_ENV !== `production`) {
		return null
	}

    const sendPageView = () => {
        strum(`routeChange`, window.location.href)
    }

	// run 2 rAF calls to wait for document.title to be updated
	if (`requestAnimationFrame` in window) {
		requestAnimationFrame(() => {
			requestAnimationFrame(sendPageView)
		})
	} else {
		// simulate 2 rAF calls
		setTimeout(sendPageView, 32)
	}
}