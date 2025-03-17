module.exports = {
    style: {
      sass: {
        loaderOptions: {
          additionalData: `@use "src/styles/breakpoints.scss" as breakpoints;`
        },
      },
    },
};
