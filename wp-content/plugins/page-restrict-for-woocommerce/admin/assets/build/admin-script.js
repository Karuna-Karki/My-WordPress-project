(()=>{var e={988:()=>{jQuery((function(){jQuery(".filter-by-post-types").on("change",(function(){const e=jQuery(".filter-by-post-types").val();jQuery(".pages-list").find(".page-type").slideUp("slow"),jQuery(".pages-list").find('.page-type[data-page-type="'+e+'"]').slideDown("slow"),jQuery(".pages-list").find(".page-pagination").slideUp(),jQuery(".pages-list").find(".page-pagination:first-child").slideDown(),jQuery(".pages-list").find(".pagination li").removeClass("active"),jQuery(".pages-list").find(".pagination li:first-child").addClass("active")}))}))},776:()=>{jQuery((function(){jQuery(".pagination li").on("click",(function(){const e=jQuery(this).data("pagination-page");if(jQuery(".tab").length)var i=jQuery(".tab .pages-list");else i=jQuery(".pages-list");i.find(".page-pagination").slideUp("slow"),i.find(".pagination li").removeClass("active"),jQuery(this).toggleClass("active"),i.find('.page-pagination[data-pagination-page="'+e+'"]').slideDown("slow")}))}))},887:()=>{jQuery((function(){jQuery(".tab-menu li").on("click",(function(){const e=jQuery("#prwc-plugin-main-wrapper .tab");for(let i=0;i<e.length;i++)jQuery(e[i]).find(".pages-list").find(".pagination li").removeClass("active"),jQuery(e[i]).find(".pages-list").find(".pagination li:first-child").addClass("active"),jQuery(e[i]).find(".pages-list").find(".page-pagination").slideUp(),jQuery(e[i]).find(".pages-list").find(".page-pagination:first-child").slideDown(),jQuery(e[i]).find(".pages-list").find(".pagination li").removeClass("active"),jQuery(e[i]).find(".pages-list").find(".pagination li:first-child").addClass("active")}))}))}},i={};function t(a){var n=i[a];if(void 0!==n)return n.exports;var r=i[a]={exports:{}};return e[a](r,r.exports,t),r.exports}(()=>{"use strict";const e=function(e,i){jQuery(e).css("background-image","url("+plugin_dir_url+"/assets/img/loading.svg)"),jQuery(e).addClass("loading"),jQuery(e).attr("disabled","disabled");const t=e;jQuery.ajax({url:ajaxurl,type:"POST",data:i,beforeSend(){},success(e){setTimeout((()=>{jQuery(t).css("background-image","none"),jQuery(t).removeClass("loading"),jQuery(t).removeAttr("disabled")}),10)}})};jQuery((function(){jQuery(".button-submit").on("click",(function(){if(jQuery(".plugin-options-wrapper").length){const t=+jQuery("input[name='prwc_limit_to_virtual_products']").is(":checked"),a=+jQuery("input[name='prwc_limit_to_downloadable_products']").is(":checked"),n=+jQuery("select[name='prwc_general_login_page']").val(),r=+jQuery("input[name='prwc_general_redirect_login']").is(":checked"),p=+jQuery("select[name='prwc_general_not_bought_page']").val(),c=+jQuery("input[name='prwc_general_redirect_not_bought']").is(":checked"),o=+jQuery("select[name='prwc_general_not_bought_section']").val(),s=+jQuery("select[name='prwc_general_login_section']").val();let _=[];const l=+jQuery("input[name='prwc_delete_plugin_data_on_uninstall']").is(":checked"),u=+jQuery("input[name='prwc_my_account_rp_page_disable_endpoint']").is(":checked"),d=+jQuery("input[name='prwc_my_account_rp_page_hide_time_table']").is(":checked"),g=+jQuery("input[name='prwc_my_account_rp_page_hide_view_table']").is(":checked"),y=+jQuery("input[name='prwc_my_account_rp_page_disable_plugin_designed_table']").is(":checked");_=!!jQuery("select[name='prwc_general_post_types']").length&&(jQuery("select[name='prwc_general_post_types']").val()?jQuery("select[name='prwc_general_post_types']").val().join():[]);var i={action:"prwc_plugin_options",nonce:page_restrict_wc.nonce,option_page:"prwc-settings-group",prwc_limit_to_virtual_products:t,prwc_delete_plugin_data_on_uninstall:l,prwc_limit_to_downloadable_products:a,prwc_general_login_page:n,prwc_general_redirect_login:r,prwc_general_not_bought_page:p,prwc_general_redirect_not_bought:c,prwc_general_login_section:s,prwc_general_not_bought_section:o,prwc_general_post_types:_,prwc_my_account_rp_page_disable_endpoint:u,prwc_my_account_rp_page_hide_time_table:d,prwc_my_account_rp_page_hide_view_table:g,prwc_my_account_rp_page_disable_plugin_designed_table:y};e(this,i)}if(jQuery(".pages-options-wrapper").length){i={action:"prwc_pages_options",nonce:page_restrict_wc.nonce,option_page:"prwc-settings-group"};const t=jQuery(".pages-all > .pages-list > .page-type > .page-pagination > .card");window.pages_lock_data={};for(let e=0;e<t.length;e++){let i=jQuery(t[e]).find(".lock-by-product").val();Array.isArray(i)&&(i=i.join(","));const a=+jQuery(t[e]).find(".not-all-products-required").is(":checked"),n=jQuery(t[e]).find(".redirect-not-bought-page").val(),r=+jQuery(t[e]).find(".redirect-prod-page").is(":checked"),p=jQuery(t[e]).find(".redirect-not-logged-in-page").val(),c=+jQuery(t[e]).find(".redirect-user-page").is(":checked"),o=jQuery(t[e]).find(".timeout-days").val(),s=jQuery(t[e]).find(".timeout-hours").val(),_=jQuery(t[e]).find(".timeout-minutes").val(),l=jQuery(t[e]).find(".timeout-seconds").val(),u=jQuery(t[e]).find(".timeout-views").val();pages_lock_data[jQuery(t[e]).data("page-id")]={prwc_products:i,prwc_not_all_products_required:a,prwc_not_bought_page:n,prwc_redirect_not_bought:r,prwc_not_logged_in_page:p,prwc_redirect_not_logged_in:c,prwc_timeout_days:o,prwc_timeout_hours:s,prwc_timeout_minutes:_,prwc_timeout_seconds:l,prwc_timeout_views:u}}i.pages_lock_data=pages_lock_data,e(this,i)}}))})),t(887),t(988),t(776),jQuery((function(){jQuery(".redirect-prod-page, .redirect-user-page").on("change",(function(){var e=jQuery(this).parent();e.find(".warning-private-page-redirect").show(),e.find(".redirect-prod-page")[0].checked||e.find(".redirect-user-page")[0].checked||e.find(".warning-private-page-redirect").hide()}))}))})()})();