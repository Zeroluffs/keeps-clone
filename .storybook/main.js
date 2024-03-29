module.exports = {
    "stories": [
        "../stories/**/*.stories.mdx",
        "../stories/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/addon-postcss",
        "storybook-addon-next",
    ],
    "framework": "@storybook/react",
    typescript: {reactDocgen: false},

    "core": {
        "builder": "@storybook/builder-webpack5"
    }
}