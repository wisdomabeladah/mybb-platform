# Nairaland-inspired theme for MyWebName

This package reproduces the broad visual language of Nairaland’s classic forum pages: a centered narrow forum, compact Arial typography, green navigation and section bars, white and pale-green content areas, blue links, metadata-heavy topic rows, stacked post panels, and dense pagination. Its CSS targets the existing PunBB structures on home, forum-list, topic, profile, and common form pages.

The payload is deliberately CSS-only. It does not hide or replace PunBB posts, navigation, breadcrumbs, statistics, forms, or controls. This avoids the previous DeepSeek payload’s fragile behavior of hiding every `.post` and then rebuilding posts asynchronously; if that rebuilding failed, a topic page could appear empty. Each MyWebName forum continues to show its own configured title, categories, topics, users, statistics, and functional links. It does not import Nairaland posts, members, categories, or advertisements.

The payload uses the existing `nairaland` theme marker so the established MyWebName custom-theme mode recognizes it. Install it through the existing Forms & HTML flow. The theme asset is `theme.txt`.
