<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */


date_default_timezone_set('Europe/Zurich');

require_once(ABSPATH . 'wp-config-local.php');

/**
 * WordPress Database Table prefix.
 */
$table_prefix = 'wp_';

/**  Disable WP auto core updates **/
define( 'WP_AUTO_UPDATE_CORE', false );

/** Enable to set debug from local config - El Patio **/
if ( !defined('WP_DEBUG') )
	define('WP_DEBUG', false);

/** Constant used to hide certain items in Admin (updates notices, etc) - El Patio **/
if ( !defined('ENVIRONMENT') )
	define('ENVIRONMENT', 'production');

/** Constant used to override CF7 email recipients, since they are stored in db - El Patio **/
if ( !defined('HARDCODE_EMAILS_RECIPIENT') )
	define('HARDCODE_EMAILS_RECIPIENT', false);


/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) )
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
