function readCookie(e){var t=document.cookie.match("(^|;) ?"+e+"=([^;]*)(;|$)");return t?t[2]:null}var wap_tms={site:"profile-ssg.intel"},utag_data={wa_local:wapLocalCode,wa_section:"ssg-intel",wa_env:"dev"};/(.*)\/sites\/(.*)/.test(domain)&&(utag_data.wa_section="ssg-idz-sites");var domain=location.host;/(((origin\-)|(secure\-))|())(software\.intel\.com)/.test(domain)&&/^(?!int).*/.test(domain)&&(utag_data.wa_env="prod");var environmentCookieValue=readCookie("utag_env_intel_"+wap_tms.site);null!=environmentCookieValue?wap_tms.url=environmentCookieValue:wap_tms.url="//tags.tiqcdn.com/utag/intel/"+wap_tms.site+"/"+utag_data.wa_env+"/utag.js",function(e,t,a,n){e=wap_tms.url,t=document,a="script",n=t.createElement(a),n.src=e,n.type="text/java"+a,n.async=!0,e=t.getElementsByTagName(a)[0],e.parentNode.insertBefore(n,e)}();