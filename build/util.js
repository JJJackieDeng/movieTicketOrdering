const cssLoader = {
    loader: 'css-loader',
    options: {
        minimize: process.env.NODE_ENV === 'production',
        sourceMap: options.sourceMap
    }
}
// 新增px2remLoade`r
const px2remLoader = {
    loader: 'px2rem-loader',
    options: {
        remUnit: 75
    }
}

function generateLoaders (loader, loaderOptions) {
    // 新增px2remLoader
/*
    const loaders = options.usePostCSS ? [cssLoader, postcssLoader, px2remLoader] : [cssLoader, px2remLoader]
*/
    const loaders = [cssLoader, px2remLoader];

    if (loader) {
        loaders.push({
            loader: loader + '-loader',
            options: Object.assign({}, loaderOptions, {
                sourceMap: options.sourceMap
            })
        })
    }
}