module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            ['module-resolver', {
                root: ['./src'],
                alias: {
                    '@contexts': './src/contexts',
                    '@data': './src/data',
                    '@screens': './src/screens',
                }
            }]
        ]
    };
};
