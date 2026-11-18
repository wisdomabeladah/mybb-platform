# Nairaland-inspired theme for MyWebName

This package recreates the broad visual language of Nairaland’s classic forum pages: a centered narrow forum, compact Arial typography, green navigation and section bars, white and pale-green surfaces, blue links, metadata-rich topic rows, stacked post panels, and dense pagination. CSS targets PunBB’s existing homepage, forum-list, topic, profile, and form structures.

The payload includes only a small dependency-free script that adds a CSS scope class on public forum pages and skips admin page containers. It does not hide or replace PunBB posts, navigation, breadcrumbs, statistics, forms, or controls. This avoids the previous DeepSeek payload’s fragile behavior of hiding every `.post` and then rebuilding posts asynchronously; if that rebuilding failed, a topic could appear empty. Each MyWebName forum continues to show its own configured title, categories, topics, users, statistics, and functional links. The package does not import Nairaland posts, members, categories, advertisements, or proprietary text.

The theme payload uses the established `nairaland` marker so MyWebName’s custom-theme mode recognizes it. It is installed through the existing Forms & HTML flow. The theme asset is `theme.txt`.
