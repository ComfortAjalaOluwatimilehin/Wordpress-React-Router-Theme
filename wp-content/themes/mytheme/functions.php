<?php



  //basic wordpress Setup
if ( ! function_exists( 'myfirsttheme_setup' ) ) :

  function basic_wordpress_setup(){


          add_theme_support( 'post-thumbnails' );
          // This theme uses wp_nav_menu() in two locations.
        	register_nav_menus( array(
        		'primary' => __( 'Primary Menu',      'twentyfifteen' ),
        		'social'  => __( 'Social Links Menu', 'twentyfifteen' ),
        	) );

          add_theme_support( 'html5', array(
        		'search-form', 'comment-form', 'comment-list', 'gallery', 'caption'
        	) );

          /*
        	 * Enable support for Post Formats.
        	 *
        	 * See: https://codex.wordpress.org/Post_Formats
        	 */
        	add_theme_support( 'post-formats', array(
        		'aside', 'image', 'video', 'quote', 'link', 'gallery', 'status', 'audio', 'chat'
        	) );

          /*
        	 * Enable support for custom logo.
        	 *
        	 * @since Twenty Fifteen 1.5
        	 */
        	add_theme_support( 'custom-logo', array(
        		'height'      => 248,
        		'width'       => 248,
        		'flex-height' => true,
        	) );
  }
  endif;
  //load styles
    function load_styles(){
        wp_enqueue_style( 'comfort-react-style', get_stylesheet_uri() );

        if(is_home() or is_page() ){
            wp_enqueue_style("frontpage-style",get_template_directory_uri() . "/css/front-page/front-page.min.css");
        }
    }

  //load scripts
  function load_general_scripts(){
          load_styles();
          load_google_fonts();
          wp_enqueue_script("app-scripts", get_theme_file_uri("/minjs/app.js"), array(), false, true);
          wp_enqueue_script("header-script", get_theme_file_uri("/minjs/header.js"), array(), false, true);
  }


function load_google_fonts(){
  wp_enqueue_style( 'raleway', 'https://fonts.googleapis.com/css?family=Raleway:300,400,500,700', false );

}


///ADD  ACTIONS

add_action( 'after_setup_theme', 'basic_wordpress_setup' );
add_action( 'wp_enqueue_scripts', 'load_general_scripts' );
 ?>
