const path = require("path");

module.exports = {
    webpack: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "@components": path.resolve(__dirname, "src/components"),
        },
    },
    style: {
        sass: {
            loaderOptions: {
                additionalData: `
                    @use "src/styles/breakpoints.scss" as *;
                    @use "src/styles/variables.scss" as *;
                `
            },
        },
    },
};
