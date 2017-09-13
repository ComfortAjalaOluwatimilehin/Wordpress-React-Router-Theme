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

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'julycomfort');

/** MySQL database username */
define('DB_USER', 'julycomfort');

/** MySQL database password */
define('DB_PASSWORD', 'password');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'U@fV)sI,H/gyKnV5JM`4piWh9=I6[rlT](1>uNtY?%xmr^y_)b,[nu]Nj^#RTPAM');
define('SECURE_AUTH_KEY',  'se^d3:DF.%sg^-=F:xuIvC/q}J]Ud!BBJd47us>RaBBpGEQL<N3{uk>=(iglSL=Y');
define('LOGGED_IN_KEY',    '0sOQQChp%Nyt=j7Pd&+<svfQk]NF.Dvt8j2%,#@;/?N2>3C{QXIM;tCr}*q6G5G%');
define('NONCE_KEY',        'V# QpsP>+B^Z# .Ff}AxW2+vo?HD)@`;bqb_)lCx?A{QX)@MBHf,AS@`+:vWwj2;');
define('AUTH_SALT',        '8H#8X.*nZl-e6VxdyARJGpg+{IOzV5qV8O,|R:rT[lEjpoDE&d&aOYi}S$<LXBQd');
define('SECURE_AUTH_SALT', 'Q(zBn&|YGe~Ct(/{DxmpT9 gNYZS>|k?EGnY%_k[~jHs`@d1M~u+Skq3C0{`H.N9');
define('LOGGED_IN_SALT',   'h|z-2n+DlA]P9j:[<m3@Sh7L,4i?ak@x#@<Ok:pq&Cte=~=>*K`iog^d $.%7+kj');
define('NONCE_SALT',       'UNk)XE=*+SOzaqF@2E@cFQZ*$k;qi9X[-8i/^W*10Ki[[Q_I`dO4tc6<fhg2rur>');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'julycomfort_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
