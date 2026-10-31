// Any combination of these
import { I18nPlugin, RenderPlugin, HtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
  eleventyConfig.setInputDirectory("views");
  eleventyConfig.setOutputDirectory("dist");
};
