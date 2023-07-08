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
define('DB_NAME', 'vmcpower_WPYP7');

/** Database username */
define('DB_USER', 'vmcpower_WPYP7');

/** Database password */
define('DB_PASSWORD', 'c5buIIt:3!pYKtp0*');

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
define('AUTH_KEY', '329385af828220783a3d353abc04317a6afbe33cd61c6354710c25ae51eecfbb');
define('SECURE_AUTH_KEY', 'a9b59798b1fc8da70dae438866a71a0c6a8d57ced38c0ce45752b51cce5bf3c3');
define('LOGGED_IN_KEY', '1f089bd9f1fd0ebb00759ba33b6868bbeb2759831427222242dd3da0887f7c72');
define('NONCE_KEY', '685c2e42dfdc6f02d577015e348f29cca7503f547ddbe2c19bec98425b69b79b');
define('AUTH_SALT', '5873b641b5ee4decb077b7c37d2cbe5a3a45cd3ed3fe44aeb40a6641de86474e');
define('SECURE_AUTH_SALT', '50bd9ec85f72d795e851b5684bf4c6365be8a042c03ded17f0dd0e0ca6ce20df');
define('LOGGED_IN_SALT', 'c3d2396ebe2d408041659158e1743f422f2e7aa15d36464a396ef9a8afda565b');
define('NONCE_SALT', 'bb0f6d193cc2d221898d6d82efd1a1217c6110cc0978f60de7bd3d80159c15c7');

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = '0O4_';
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
