# Nairaland themes

This directory contains two separate Nairaland-inspired theme payloads:

- `theme.txt` is the restored original working Nairaland skin. It uses the marker `nl-theme-marker:nairaland_replica` and corresponds to the customer file `15535.txt`.
- `theme-v2.txt` is the newer compact/fallback variant. It uses the marker `nl-theme-marker:nairaland_v2` and is uploaded separately as customer file `95151.txt`, exposed in the selector as **Nairaland Plus**.

Both payloads keep each MyWebName forum’s configured title, categories, topics, users, navigation links, statistics, forms, and existing PunBB DOM. They do not import Nairaland posts, member data, advertising, or branding. The injected styles skip `admin_*.php` routes so the administration interface is not restyled.

The payloads are fetched as text by the MyWebName theme selector and installed through the existing PunBB Forms & HTML flow. The selector registry in `main.js` maps `nairaland` to `15535.txt` and `nairaland_v2` to `95151.txt`.
