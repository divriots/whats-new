// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  buildOptions: {
    site: "https://backlight.dev",
  },
  markdownOptions: {
    render: [
      "@astrojs/markdown-remark",
      {
        rehypePlugins: [
          ["rehype-external-links", { target: "_blank", rel: ["noopener"] }],
        ],
        syntaxHighlight: "prism",
      },
    ],
  },
});
