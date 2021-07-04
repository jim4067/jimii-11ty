module.exports = (eleventy_config) => {
    eleventy_config.addPassthroughCopy('assets');

    return {
        dataTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk',
        //input and output folder
        dir: { input: 'src', output: 'dist' },
    };
}