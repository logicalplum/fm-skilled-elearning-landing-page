export default function (eleventyConfig) {
    eleventyConfig.setInputDirectory('src')
    eleventyConfig.setOutputDirectory('dist')
    eleventyConfig.addPassthroughCopy({
        'src/assets': 'assets',
    })
    eleventyConfig.addPassthroughCopy({
        'node_modules/tailwindcss-preflight/':
            'assets/vendor/tailwindcss-preflight/',
    })
}
