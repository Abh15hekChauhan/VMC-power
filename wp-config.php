<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'vmcpower_WPKZU');

/** Database username */
define('DB_USER', 'vmcpower_WPKZU');

/** Database password */
define('DB_PASSWORD', 'C]mL.$5N/7$Jc#KlE');

/** Database hostname */
define('DB_HOST', 'localhost');

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', '0753155d9b40b3fdfc0dcbe80b0f4ce68464aaeb651020d11ca24cb0c5323954');
define('SECURE_AUTH_KEY', 'fc0de2540df261646479d4b2b6c2a40f586618261133ee3602893236529e7b03');
define('LOGGED_IN_KEY', '3bc4a73da1a7d1517c7998628fd967212b06222c7ebb046a0f48e7b4aa29495f');
define('NONCE_KEY', '30e9ae4811bf300ad50610c583ac95e1fd5cc63d92fea964f0382e8bc8e4b47b');
define('AUTH_SALT', '7302985362027597d65bdb7af2f8812911e929f2cd010528944d87280fcad864');
define('SECURE_AUTH_SALT', 'f6f72709f7394dde6e5ac153d1567b246c1039638bea42cd8c24877c9bcd19b6');
define('LOGGED_IN_SALT', 'c572f6d3d2598cdb0868cb42e4aedc776edb63fea60d60d0fad9df1b2bc9f0eb');
define('NONCE_SALT', 'a9f562f111ffc27893bb0cff1c3a3c10560b36cdc2bcb82c8a040ac749dc76d6');

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'ij5_';
define('WP_CRON_LOCK_TIMEOUT', 120);
define('AUTOSAVE_INTERVAL', 300);
define('WP_POST_REVISIONS', 20);
define('EMPTY_TRASH_DAYS', 7);
define('WP_AUTO_UPDATE_CORE', true);

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
