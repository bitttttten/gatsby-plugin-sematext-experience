const React = require("react")

export const generateScript = token => `
    (function(e,t,r,n,a){var c=[];e[a]=function(){c.push(arguments)};
    e[a].queue=c;var s=t.createElement(r);s.async=1;s.src=n;
    var u=t.getElementsByTagName(r)[0];u.parentNode.insertBefore(s,u)})
    (window,document,"script","//cdn.sematext.com/rum.js","strum");
    strum('config', { token: '${token}', 'receiverUrl': 'https://rum-receiver.eu.sematext.com' });
`

export const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
	if (process.env.NODE_ENV !== `production`) {
		return null
    }
    
    const __html = generateScript(pluginOptions.token)

	setHeadComponents([
		<script
			key="gatsby-plugin-sematext-experience"
			dangerouslySetInnerHTML={{ __html }}
		/>,
	])

	setHeadComponents([
		<link
			rel="preconnect dns-prefetch"
			key="gatsby-plugin-sematext-experience-preconnect"
			href="https://cdn.sematext.com/"
		/>,
	])
}