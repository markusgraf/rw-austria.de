// go to https://github.com/ModiiMedia/contentful-hugo#configuration for configuration instructions

/**
 * @type {import('contentful-hugo').ContentfulHugoConfig}
 */
module.exports = {
    locales: [], // uses default locale if left empty
    singleTypes: [],
    repeatableTypes: [
        {
            id: 'event',
            directory: 'content/event',
            mainContent: 'inhalt',   
            fileName: 'fields.title'        
        }
    ],
    contentful: {
        // defaults to "master"
        environment: 'master',
    },
};