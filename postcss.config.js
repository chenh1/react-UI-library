const postCSSConfig = [
    require('autoprefixer'),
    require('postcss-initial')({
    reset: 'inherited'
    }),
    require('postcss-import'),
    require('postcss-nesting'),
    require('postcss-custom-properties'),
    require('postcss-custom-media'),
    require('postcss-apply'),
    require('postcss-math'),
    require('postcss-color-function')
]

module.exports = postCSSConfig;