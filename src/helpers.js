// Compare our node paths with the ones that Gatsby has generated and updated them
// with the "real" used ones.
const getNodePath = (node, allSitePage) => {
    if (!node.path || node.path === "/" || node.ignorePathCheck) {
        return node;
    }

    const nodePath = allSitePage.get(node.path.replace(/\/$/, ``));

    if (getNodePath){
        node.path = nodePath;
    }

    return node;
};

export { getNodePath };