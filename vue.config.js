module.exports = {
    outputDir: 'dist',
    devServer: {
        proxy: {
            '/front': {
                target:'http://localhost:8081',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/front': 'http://locahost:8081'
                }
            }
        }
    }
};
