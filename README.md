# gatsby-plugin-sematext-experience

[![Github release version](https://img.shields.io/github/tag/bitttttten/gatsby-plugin-sematext-experience.svg)](https://github.com/bitttttten/gatsby-plugin-sematext-experience/releases)
[![Commits since release](https://img.shields.io/github/commits-since/bitttttten/gatsby-plugin-sematext-experience/v1.0.0.svg)](https://github.com/bitttttten/gatsby-plugin-sematext-experience/compare/v1.0.0...master)
[![npm release version](https://img.shields.io/npm/v/gatsby-plugin-sematext-experience.svg)](https://www.npmjs.com/package/gatsby-plugin-sematext-experience)

## Introduction

A plugin to add and configure the Sematext Experience for your Gatsby app.

## Instructions

### Install

`yarn add gatsby-plugin-sematext-experience`

### Create your Experience App

Ensure you've checked "Website uses Single Page Architecture" when creating your Experience App:

<img alt="Website uses Single Page Architecture checkbox example" src="https://cdn.jsdelivr.net/gh/bitttttten/gatsby-plugin-sematext-experience@1.0.0/docs/v-important.png" />

### Grab your token

In Step 2 of the installation docs on Sematext (as of July 2020), you'll find your token.

<img alt="Preview of token" src="https://cdn.jsdelivr.net/gh/bitttttten/gatsby-plugin-sematext-experience@1.0.0/docs/this-is-ur-token.png" />

### Configure the plugin

Add the plugin to your plugins array and send the token in. Here I have the token stored in the environment variables, and I am reading it from there. You can paste the token itself in your gatsby-config if you'd like, as it's not a sensitive token.

```js
// gatsby-config.js
module.exports = {
	plugins: [
		{
			resolve: `gatsby-plugin-sematext-experience`,
			options: {
				token: process.env.GATSBY_SEMATEXT_TOKEN,
			},
		},
	]
}
```

...and you're done! 🎉
