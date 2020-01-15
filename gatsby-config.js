module.exports = {
	siteMetadata: {
		title: `Rizwana Khan`,
		description: `A human being`,
		author: `@rizbizkits`,
		siteUrl: 'https://rizwanakhan.com/'
	},
	// previous setup
	  plugins: [
	  'gatsby-plugin-catch-links',
	  'gatsby-plugin-react-helmet',
	  'gatsby-plugin-feed',
	  {
		resolve: `gatsby-source-filesystem`,
		options: {
		  path: `${__dirname}/src/pages`,
		  name: 'pages',
		},
	  },

	  {
		resolve: 'gatsby-plugin-matomo',
		options: {
			siteId: '13',
			matomoUrl: 'https://stats.jvt.me',
			siteUrl: 'https://rizwanakhan.com/'
		},
		},

	  {
		resolve: 'gatsby-transformer-remark',
		options: {
		  plugins: [] // just in case those previously mentioned remark plugins sound cool :)
		}
	  },
	  {
		resolve: `gatsby-transformer-remark`,
		options: {
		  plugins: [`gatsby-remark-responsive-iframe`, `gatsby-remark-social-cards`],
		  
		},
	  },
	]
  }
