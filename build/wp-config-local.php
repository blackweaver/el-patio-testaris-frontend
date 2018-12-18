<?php
// ** MySQL settings ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'staging_testaris' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'Lup2t:tr2$)e+P]KDx[UWe+3A_Os^|UZ`%LcT21L4g0#4=Xkh><>8zeo~YX!VP p' );
define( 'SECURE_AUTH_KEY',   '} eT7ks*#jos;_K(/?~/(m<FN+XIsQIB$Hqq @oe9Sd$^FM#.%]<mTO2J4@EAQ]8' );
define( 'LOGGED_IN_KEY',     '<IZ[dPow~&JIMn>z&YSWQ}+&rM~vyVp8QqC4APJK||+q9G%V$h_mj(?J%g/GZpKf' );
define( 'NONCE_KEY',         '63;K*z6P^XKc!&c;.5<X:;0)&N5w0slO&9<Y2Cp>Fivm+;8/([Oci #*hB`k;up5' );
define( 'AUTH_SALT',         'vjsxJGOv{VWeMjkLPvf$~HX-:4XAi5qt4s.:=Wf5pdE2)?!X~9w<c$ps?aQoP#Sw' );
define( 'SECURE_AUTH_SALT',  '7A`xP4;Jz4~q$4;q.B)IAmWCFnxIWO_/V7LyDi{3+eFi6SdKMU#{JpfiYQRCq:hh' );
define( 'LOGGED_IN_SALT',    'X@]&:-Dsu3q<KwFO}KHu|?>fse8|:Gf:Il8nZ*WG@WX<$Q8C16L~<!)m4_@aL+nq' );
define( 'NONCE_SALT',        '.PZ6ufEYjBKn=]ATDeGJ6:pU1WJC!zd!1cOZn(=XAsV6:Ik//KD>Wg)}&1l>BzIX' );
define( 'WP_CACHE_KEY_SALT', 'nD2BW`y=7c6`.CrYG_g^hq?/#rgYPY+IwrYass5D~,eP,kI1B,z{pV1XTa< $@`_' );

/** Set constant with environment **/
define('WP_DEBUG', true);

/** Set constant with environment **/
define('ENVIRONMENT', 'development');

/** Hard code recipients email **/
define('HARDCODE_EMAILS_RECIPIENT', 'marcos@irugoy.com');

define('AUTOSAVE_INTERVAL', 300 ); // seconds
define('WP_POST_REVISIONS', false );

