# Nairaland Replica theme

This theme applies a compact, classic forum presentation inspired by Nairaland’s public homepage: a centered content column, small Arial typography, white surfaces, leaf-green section bars, blue links, pale green page background, thin borders, and nearly square corners.

The package is intentionally a skin, not a site-content clone. It keeps each MyWebName forum’s configured title, categories, topics, users, navigation links, statistics, forms, and existing PunBB DOM. It does not import Nairaland posts, member data, category names, ads, or branding. The injected script only adds a CSS scope class on public forum pages; it skips `admin_*.php` routes so MyWebName’s modern admin interface is not restyled by this package.

The theme payload is `theme.txt`. It is fetched as text by the MyWebName theme selector and installed through the existing PunBB Forms & HTML flow. The marker `nl-theme-marker:nairaland_replica` is required by the theme-mode wrapper.
