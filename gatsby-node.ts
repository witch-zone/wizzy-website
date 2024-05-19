exports.createPages = async ({ actions }) => {
  actions.createRedirect({
    fromPath: `/mischief/`,
    toPath: `/`,
  });
};
