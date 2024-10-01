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
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'misproject' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost:3308' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

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
define( 'AUTH_KEY',         'pg#1*b06Yfo_(R_UaEbHF C|`B_LLB4mtb5BFgbzPp}qSzbXTs+X|2$J}vR/y>Ix' );
define( 'SECURE_AUTH_KEY',  'S20hO}c |cmR94af(^I]$kLDFoOKtm5Rqz2V9l62pjaF~3wDQ&}ckR:AdK7w(2aR' );
define( 'LOGGED_IN_KEY',    'pxK`4:k|4dLU)+m2WkIJgK5&1~}qPx?v]i>btoSBOYC6YM7JQ.ra4nO8|ZufiTgW' );
define( 'NONCE_KEY',        '![qT}1Ey~o _URnJUK_!Ih^znA7YQiY*uD1&odd_u%e+pwpQ0c[784])Ico8`j$m' );
define( 'AUTH_SALT',        '6-ft&=k%q~MIvSm?]Jf-$([e`q6C1Rg)6/s.B1s5D{mRiVb{8>cnl@*K4bDt76!0' );
define( 'SECURE_AUTH_SALT', 'bgWKOa=5(z+,.$Xx$r{~gqUV9)2E1KJ8_nd{w|--v]w}/$;6Idcj_KwYHwXeGlm&' );
define( 'LOGGED_IN_SALT',   '9YmUK_4^&aYk8A@YN3m48wMK5(DeC ;QIk 6&]_x/xWeM12#.,^vE7/oM0Va<FM,' );
define( 'NONCE_SALT',       '<(s[Y_~4N?[v=w6X?KGfz@1e9)CUqtLKF|.G+Y?~m!.,&~|<&ha!74mj8/5Iy$UR' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'mis_';

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
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
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
