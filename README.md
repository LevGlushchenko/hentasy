# fantasy_frontend

## Supported ENVs:

# время жизни тостов
TOAST_LIFETIME_SECONDS = 10
# время жизни access токена, синкать в бэкэндом.
ACCESS_TOKEN_EXPIRATION = 60 * 60 * 1 -> 1h
# ссылка на api
BACKEND_API_URL = https://api.hentasy.com
# ссылка на сторейдж, будет юзаться для статических картинок
STORAGE_URL = https://cdn.hentasy.com
# ссылка на редирект на рекламу при клике на загрузку видео               
DOWNLOAD_VIDEO_ADD_URL = https://…
# сколько юзеру нужно будет на нее кликнуть пока он доберется до настоящей ссылки
DOWNLOAD_VIDEO_ADD_CLICKS = 4
# сколько видео-рекомендаций выводить на странице видео
VIDEO_DETAIL_RECOMMENDS_COUNT = 10
# сколько плейлист-рекомендаций выводить на странице видео
VIDEO_DETAIL_PLAYLISTS_COUNT = 10
# обсудим нужно ли, там пагинация на главной специфическая=\
HOME_CARDS_PAGE_SIZE = 15
# ставить ли блок на гугл ботов
NO_ROBOT = true -> enables norobot tag, to stop google bot
# social
TWITTER_URL, PATREON_URL, DISCORD_URL, TELEGRAM_URL - с https.
сео для страниц:
SEO_HOME_TITLE
SEO_HOME_DESCRIPTION
SEO_HOME_IMAGE
SEO_SEARCH_TITLE
SEO_SEARCH_DESCRIPTION
SEO_SEARCH_IMAGE
SEO_CHANNEL_TITLE
SEO_CHANNEL_DESCRIPTION
SEO_CHANNEL_IMAGE
SEO_RULES_TITLE
SEO_RULES_DESCRIPTION
SEO_RULES_IMAGE
SEO_PROFILE_TITLE
SEO_PROFILE_DESCRIPTION
SEO_PROFILE_IMAGE
SEO_LOGIN_TITLE
SEO_LOGIN_DESCRIPTION
SEO_LOGIN_IMAGE
SEO_REGISTER_TITLE
SEO_REGISTER_DESCRIPTION
SEO_REGISTER_IMAGE
