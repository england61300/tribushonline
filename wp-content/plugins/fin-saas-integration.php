<?php
/*
Plugin Name: FIN SaaS Integration
Plugin URI: https://your-website.com/fin-saas-integration
Description: Integrates the FIN SaaS application into your WordPress website.
Version: 1.0
Author: TriBush
Author URI: https://www.tribushonline.com
*/
function fin_saas_enqueue_scripts() {
    wp_enqueue_script('fin-saas-app', plugin_dir_url(__FILE__) . 'build/static/js/main.js', array(), '1.0', true);
    wp_enqueue_style('fin-saas-styles', plugin_dir_url(__FILE__) . 'build/static/css/main.css');
}
add_action('wp_enqueue_scripts', 'fin_saas_enqueue_scripts');
