const grimoire = require("./src/pages/mischief/grimoire.json");

const mischiefURLRegex = /^\/mischief\/([a-zA-Z-]*)\/?$/;

exports.createPages = async ({ actions }) => {
  actions.createRedirect({
    fromPath: `/mischief/`,
    toPath: `/`,
  });
};

exports.onCreatePage = ({ page, actions: { createPage, deletePage } }) => {
  const mischiefMatch = page.path.match(mischiefURLRegex);

  if (!mischiefMatch) {
    return;
  }

  const key = mischiefMatch[1];

  deletePage(page);
  createPage({
    ...page,
    context: {
      isMischief: true,
      ...page.context,
      ...grimoire[key],
    },
  });
};
