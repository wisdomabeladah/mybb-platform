/* MYWEB PLATFORM — main.js v1 */
(function(){
'use strict';

/* ===== DEFAULTS + STORAGE ===== */
var nlCustomDefaults={scope:'global',logoType:'text',logoUrl:'',logoText:'My Website',siteName:'My Website',tagline:'Welcome',taglineOn:true,primaryColor:'#2865F1',secondaryColor:'#8b5cf6',bgColor:'#f8fafc',bgGradient:'',linkColor:'',textColor:'',headerBg:'',footerBg:'',footerTextColor:'',btnTextColor:'#ffffff',heroTitle:'Welcome to My Website',heroSubtitle:'This is my awesome website',heroTitleColor:'',heroSubtitleColor:'',heroBgImage:'',heroOverlayOpacity:0,heroBtnText:'Get Started',heroBtnUrl:'',navBg:'',navTextColor:'',navSticky:false,navLinks:[{label:'Home',url:'/'},{label:'About',url:'about'},{label:'Contact',url:'contact'}],footerText:'© 2024 My Website',copyrightText:'',showPoweredBy:true,socials:{facebook:'',twitter:'',instagram:'',youtube:''},fontFamily:'Inter',baseFontSize:16,headingWeight:800,contentMaxWidth:1200,borderRadius:12,spacing:'normal',customCSS:'',customJS:'',gaId:'',favicon:''};
function nlGetCustom(){try{var c=localStorage.getItem('nl_customization');if(c){var parsed=JSON.parse(c);var merged={};for(var k in nlCustomDefaults){merged[k]=(typeof parsed[k]!=='undefined')?parsed[k]:nlCustomDefaults[k]}return merged}}catch(e){}return JSON.parse(JSON.stringify(nlCustomDefaults))}
function nlSetCustom(c){try{localStorage.setItem('nl_customization',JSON.stringify(c))}catch(e){}}
function nlResetCustom(){try{localStorage.removeItem('nl_customization')}catch(e){}}
window.nlGetCustom=nlGetCustom;window.nlSetCustom=nlSetCustom;window.nlResetCustom=nlResetCustom;

/* ===== EARLY CSS INJECTION ===== */
(function(){try{var _raw=localStorage.getItem('nl_customization');if(!_raw)return;var c=JSON.parse(_raw);if(!c)return;var css='';if(c.primaryColor){css+='a,a:link,a:visited{color:'+c.primaryColor+' !important}';css+='.landing-logo,.portfolio-logo,.nl-title h1 a,#pun-title .nl-title h1 a{color:'+c.primaryColor+' !important}';css+='[class*="-hero"] .highlight{color:'+c.primaryColor+' !important;background:none !important;-webkit-text-fill-color:'+c.primaryColor+' !important;background-clip:border-box !important}';css+='.landing-hero .btn,.portfolio-contact .btn,[class*="-cta"] .btn,a.btn-primary,.landing-nav .btn-nav,.nl-featured-nav b a,.nl-board-cat{color:'+c.primaryColor+' !important}';css+='.landing-hero .btn,.portfolio-contact .btn,[class*="-cta"] .btn,a.btn-primary,.landing-nav .btn-nav{background:'+c.primaryColor+' !important;color:#fff !important}'}if(c.secondaryColor){css+='.nl-featured-nav{background:'+c.secondaryColor+' !important}';css+='[class*="-hero"] .highlight{color:'+c.secondaryColor+' !important;background:none !important;-webkit-text-fill-color:'+c.secondaryColor+' !important}'}if(c.bgGradient)css+='body{background:'+c.bgGradient+' !important}';else if(c.bgColor)css+='body{background:'+c.bgColor+' !important}';if(c.linkColor)css+='a,a:link,a:visited{color:'+c.linkColor+' !important}';if(c.textColor)css+='body,.punbb{color:'+c.textColor+' !important}';if(c.footerBg)css+='.nl-footer,.landing-footer,.portfolio-footer,[class*="-footer"]{background:'+c.footerBg+' !important}';if(c.footerTextColor)css+='.nl-footer,.landing-footer,.portfolio-footer,[class*="-footer"],.nl-footer a,.landing-footer a,.portfolio-footer a{color:'+c.footerTextColor+' !important}';if(c.headerBg)css+='.landing-header,.portfolio-header,.nl-title{background:'+c.headerBg+' !important}';if(c.fontFamily)css+='body,.punbb,h1,h2,h3,h4,h5,h6,a{font-family:'+c.fontFamily+',system-ui,sans-serif !important}';if(c.baseFontSize)css+='body,.punbb{font-size:'+c.baseFontSize+'px !important}';if(c.contentMaxWidth)css+='.landing-wrapper,.portfolio-wrapper,#pun,.nl-boards-table,.nl-featured,.nl-topics-table,.nl-footer{max-width:'+c.contentMaxWidth+'px !important}';if(c.borderRadius)css+='button,input,textarea,select,.nl-ua-tool,.nl-boards-table,.nl-featured,.nl-topics-table,.nl-footer,[class*="-btn"],[class*="-cta"] .btn{border-radius:'+c.borderRadius+'px !important}';if(c.customCSS)css+=c.customCSS;if(css){var s=document.createElement('style');s.id='nl-custom-early';s.textContent=css;(document.head||document.documentElement).appendChild(s)}if(c.favicon){var fl=document.createElement('link');fl.rel='icon';fl.href=c.favicon;document.head.appendChild(fl)}}catch(e){}})();

/* ===== THEME DATA ===== */
var nlUA={palettes:{punbb:{bg:'#f0f2f5',bgGrad:'#d1d5db',accent:'#2865F1',accentLight:'#e8f0ff',text:'#1a1a2e',iconBg:'#e8ecf1',iconColor:'#555'},nairaland:{bg:'#f6f6ec',bgGrad:'#c8d4c0',accent:'#185518',accentLight:'#e8f5e0',text:'#1a1a2e',iconBg:'#e8ece0',iconColor:'#185518'},portfolio:{bg:'#1a1a2e',bgGrad:'#16213e',accent:'#e94560',accentLight:'#2a1a2e',text:'#1a1a2e',iconBg:'#f0f0f5',iconColor:'#e94560'},landing:{bg:'#667eea',bgGrad:'#764ba2',accent:'#667eea',accentLight:'#f0edff',text:'#1a1a2e',iconBg:'#ede9fe',iconColor:'#667eea'},grocery:{bg:'#11998e',bgGrad:'#38ef7d',accent:'#11998e',accentLight:'#e6faf5',text:'#1a1a2e',iconBg:'#d1fae5',iconColor:'#11998e'},foodblog:{bg:'#f12711',bgGrad:'#f5af19',accent:'#f12711',accentLight:'#fff5f0',text:'#1a1a2e',iconBg:'#fef3c7',iconColor:'#f12711'},fashion:{bg:'#ff6b6b',bgGrad:'#ee5a24',accent:'#ff6b6b',accentLight:'#fff0f0',text:'#1a1a2e',iconBg:'#fee2e2',iconColor:'#ff6b6b'},techblog:{bg:'#0f2027',bgGrad:'#2c5364',accent:'#00d4ff',accentLight:'#e0f7ff',text:'#1a1a2e',iconBg:'#cffafe',iconColor:'#00d4ff'},travel:{bg:'#00b4db',bgGrad:'#0083b0',accent:'#0083b0',accentLight:'#e0f4ff',text:'#1a1a2e',iconBg:'#dbeafe',iconColor:'#0083b0'},news:{bg:'#434343',bgGrad:'#000000',accent:'#e63946',accentLight:'#fff0f0',text:'#1a1a2e',iconBg:'#fee2e2',iconColor:'#e63946'}},allTools:{customize:{name:'Customize Site',desc:'Visual editor',icon:'fa-magic',link:'admin_index.php?customize'},dashboard:{name:'Dashboard',desc:'Overview',icon:'fa-chart-line',link:'admin_index.php'},categories:{name:'Categories',desc:'Manage',icon:'fa-folder',link:'admin_categories.php'},forums:{name:'Forums',desc:'Manage',icon:'fa-comments',link:'admin_forums.php'},pages:{name:'Pages',desc:'Custom pages',icon:'fa-file-alt',link:'admin_pages.php'},files:{name:'Files',desc:'Media',icon:'fa-image',link:'admin_files.php'},censoring:{name:'Censoring',desc:'Filters',icon:'fa-ban',link:'admin_censoring.php'},prune:{name:'Prune',desc:'Clean',icon:'fa-cut',link:'admin_prune.php'},users:{name:'Users',desc:'Members',icon:'fa-users',link:'admin_users.php'},groups:{name:'User Groups',desc:'Permissions',icon:'fa-user-tag',link:'admin_groups.php'},permissions:{name:'Permissions',desc:'Access control',icon:'fa-lock',link:'admin_permissions.php'},fields:{name:'Profile Fields',desc:'Fields',icon:'fa-user-edit',link:'admin_fields.php'},ranks:{name:'Ranks',desc:'Titles',icon:'fa-star',link:'admin_ranks.php'},bans:{name:'Bans',desc:'Block',icon:'fa-gavel',link:'admin_bans.php'},promotion:{name:'Promotion',desc:'Ads',icon:'fa-bullhorn',link:'admin_promotion.php'},paid:{name:'Paid Services',desc:'Monetize',icon:'fa-credit-card',link:'admin_paid_services.php'},style:{name:'Custom Style',desc:'CSS',icon:'fa-palette',link:'admin_style.php'},forms:{name:'Forms & HTML',desc:'Header/footer',icon:'fa-code',link:'admin_forms.php'},options:{name:'Options',desc:'Settings',icon:'fa-cog',link:'admin_options.php'},domain:{name:'Domain',desc:'Domain',icon:'fa-globe',link:'admin_domain.php'},backups:{name:'Backups',desc:'Backup',icon:'fa-database',link:'admin_backups.php'},logs:{name:'Forum Logs',desc:'Logs',icon:'fa-history',link:'admin_logs.php'},scripts:{name:'Scripts',desc:'Scripts',icon:'fa-terminal',link:'admin_scripts.php'},mail:{name:'Mass Mailing',desc:'Email',icon:'fa-envelope',link:'admin_mail.php'}},sectionIcons:{Dashboard:'fa-chart-line',Content:'fa-file-alt',Community:'fa-users',Appearance:'fa-palette',System:'fa-cog',Communication:'fa-envelope',Monetization:'fa-dollar-sign',Settings:'fa-cog',Products:'fa-shopping-basket',Customers:'fa-user',Commerce:'fa-credit-card',Authors:'fa-pen',Team:'fa-user-tie',Distribution:'fa-paper-plane'},themes:{punbb:{sections:{Dashboard:['dashboard'],Content:['categories','forums','pages','files','censoring','prune'],Community:['users','groups','permissions','fields','ranks','bans'],Appearance:['customize','style','forms','options'],System:['domain','backups','logs','scripts'],Communication:['mail'],Monetization:['promotion','paid']}},nairaland:{sections:{Dashboard:['dashboard'],Content:['categories','forums','pages','censoring','prune'],Community:['users','groups','permissions','fields','ranks','bans'],Appearance:['customize','style','forms'],System:['options','domain','backups','logs','scripts'],Communication:['mail'],Monetization:['promotion','paid']}},portfolio:{sections:{Dashboard:['dashboard'],Content:['pages','files'],Appearance:['customize','style','forms'],Settings:['options','domain','backups']}},landing:{sections:{Dashboard:['dashboard'],Content:['pages'],Appearance:['customize','style','forms'],Settings:['options','domain','backups']}},grocery:{sections:{Dashboard:['dashboard'],Products:['categories','pages','files'],Customers:['users'],Appearance:['customize','style','forms'],Settings:['options','domain','backups'],Commerce:['promotion','paid']}},foodblog:{sections:{Dashboard:['dashboard'],Content:['categories','pages','files'],Appearance:['customize','style','forms'],Settings:['options','domain','backups']}},fashion:{sections:{Dashboard:['dashboard'],Content:['categories','pages','files'],Appearance:['customize','style','forms'],Settings:['options','domain','backups']}},techblog:{sections:{Dashboard:['dashboard'],Content:['categories','pages','files'],Authors:['users'],Appearance:['customize','style','forms'],Settings:['options','domain','backups','scripts']}},travel:{sections:{Dashboard:['dashboard'],Content:['categories','pages','files'],Appearance:['customize','style','forms'],Settings:['options','domain','backups']}},news:{sections:{Dashboard:['dashboard'],Content:['categories','pages','files','censoring'],Team:['users','groups','permissions','fields'],Appearance:['customize','style','forms'],Settings:['options','domain','backups'],Distribution:['mail']}}}};
var nlTP={punbb:{name:'Original PunBB',desc:'Clean forum',bg:'#f0f2f5',bg2:'#d1d5db',color:'#1a1a2e'},nairaland:{name:'Nairaland Style',desc:'Cream & green',bg:'#f6f6ec',bg2:'#c8d4c0',color:'#185518'},portfolio:{name:'Portfolio Showcase',desc:'Dark',bg:'#1a1a2e',bg2:'#16213e',color:'#e94560'},landing:{name:'Landing Page',desc:'Purple',bg:'#667eea',bg2:'#764ba2',color:'#fff'},grocery:{name:'Grocery Delivery',desc:'Green',bg:'#11998e',bg2:'#38ef7d',color:'#fff'},foodblog:{name:'Food Blog',desc:'Orange',bg:'#f12711',bg2:'#f5af19',color:'#fff'},fashion:{name:'Fashion Blog',desc:'Coral',bg:'#ff6b6b',bg2:'#ee5a24',color:'#fff'},techblog:{name:'Tech Blog',desc:'Cyber',bg:'#0f2027',bg2:'#2c5364',color:'#00d4ff'},travel:{name:'Travel Blog',desc:'Ocean',bg:'#00b4db',bg2:'#0083b0',color:'#fff'},news:{name:'News/Magazine',desc:'Red',bg:'#434343',bg2:'#000000',color:'#e63946'}};
var nlTF={nairaland:{file:'15535',v:'4'},portfolio:{file:'65113',v:'4'},landing:{file:'86531',v:'4'},grocery:{file:'15517',v:'4'},foodblog:{file:'53940',v:'4'},fashion:{file:'97250',v:'4'},techblog:{file:'90500',v:'7'},travel:{file:'13426',v:'4'},news:{file:'38831',v:'4'}};
var nlPay={lockedTools:['paid','promotion','domain','backups','scripts','mail'],plans:{pro_monthly:{name:'Pro Monthly',price:5000,days:30,label:'PRO'},pro_yearly:{name:'Pro Yearly',price:50000,days:365,label:'PRO'},vip_lifetime:{name:'VIP Lifetime',price:150000,days:9999,label:'VIP'}},pk:'pk_test_yourpaystackkey',fk:'FLWPUBK_TEST-yourflutterwavekey'};
var nlIsHub=(window.location.hostname==='forum.myweb.name.ng');
var nlThemeMap={nairaland:{logo:'#pun-title .nl-title h1 a',nav:'.nl-welcome-line',heroTitle:'.nl-featured-title',heroSubtitle:'.nl-featured-nav',footer:'.nl-footer'},portfolio:{logo:'.portfolio-logo',nav:'.portfolio-nav',heroTitle:'.portfolio-hero h1',heroSubtitle:'.portfolio-hero p',footer:'.portfolio-footer p'},landing:{logo:'.landing-logo',nav:'.landing-nav',heroTitle:'.landing-hero h1',heroSubtitle:'.landing-hero p',footer:'.landing-footer p'},grocery:{logo:'[class*="-logo"]',nav:'[class*="-nav"]',heroTitle:'[class*="-hero"] h1',heroSubtitle:'[class*="-hero"] p',footer:'[class*="-footer"]'},foodblog:{logo:'[class*="-logo"]',nav:'[class*="-nav"]',heroTitle:'[class*="-hero"] h1',heroSubtitle:'[class*="-hero"] p',footer:'[class*="-footer"]'},fashion:{logo:'[class*="-logo"]',nav:'[class*="-nav"]',heroTitle:'[class*="-hero"] h1',heroSubtitle:'[class*="-hero"] p',footer:'[class*="-footer"]'},techblog:{logo:'[class*="-logo"]',nav:'[class*="-nav"]',heroTitle:'[class*="-hero"] h1',heroSubtitle:'[class*="-hero"] p',footer:'[class*="-footer"]'},travel:{logo:'[class*="-logo"]',nav:'[class*="-nav"]',heroTitle:'[class*="-hero"] h1',heroSubtitle:'[class*="-hero"] p',footer:'[class*="-footer"]'},news:{logo:'[class*="-logo"]',nav:'[class*="-nav"]',heroTitle:'[class*="-hero"] h1',heroSubtitle:'[class*="-hero"] p',footer:'[class*="-footer"]'},generic:{logo:'[class*="-logo"], .nl-title h1 a, #pun-title h1 a',nav:'[class*="-nav"]',heroTitle:'[class*="-hero"] h1, .nl-featured-title',heroSubtitle:'[class*="-hero"] p, .nl-featured-nav',footer:'[class*="-footer"], .nl-footer'}};

/* ===== HELPERS ===== */
function nlDT(){if(document.body){var b=document.body.getAttribute('data-nl-theme');if(b)return b}if(typeof $!=='undefined'){if($('#pun-title').css('background-color')==='rgb(246, 246, 236)')return'nairaland';if(($('body').css('font-family')||'').indexOf('Open Sans')>=0)return'nairaland';if($('.nl-navbar').length>0)return'nairaland'}return null}
function nlResolveUrl(url){if(!url)return '#';if(/^https?:\/\//i.test(url))return url;if(url.indexOf('/')===0)return url;if(url.indexOf('#')===0)return url;if(url.indexOf('?')===0)return url;return '/pages/'+url.replace(/^\/+/,'')}
function nlLoadPaymentSDK(cb){var needP=(typeof PaystackPop==='undefined');var needF=(typeof FlutterwaveCheckout==='undefined');if(!needP&&!needF)return cb();var loaded=0,total=(needP?1:0)+(needF?1:0);function done(){loaded++;if(loaded>=total)cb()}if(needP){var ps=document.createElement('script');ps.src='https://js.paystack.co/v1/inline.js';ps.onload=done;ps.onerror=done;document.head.appendChild(ps)}if(needF){var fw=document.createElement('script');fw.src='https://checkout.flutterwave.com/v3.js';fw.onload=done;fw.onerror=done;document.head.appendChild(fw)}}
function nlGD(){try{var d=localStorage.getItem('nl_site_data');return d?JSON.parse(d):{txns:[]}}catch(e){return{txns:[]}}}
function nlSD(d){try{localStorage.setItem('nl_site_data',JSON.stringify(d))}catch(e){}}
function nlCS(){try{var s=localStorage.getItem('nl_sub');if(!s)return null;var sub=JSON.parse(s);if(sub.x)return null;if(sub.e&&Date.now()<sub.e)return sub;localStorage.removeItem('nl_sub');return null}catch(e){return null}}
function nlGK(p,d){var c='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';var k='NL-';for(var i=0;i<4;i++){for(var j=0;j<4;j++)k+=c.charAt(Math.floor(Math.random()*c.length));if(i<3)k+='-';}return k+'-'+(d?p+'-'+d+'d':p)}
function nlAK(key){var p=key.split('-');if(p.length<6||p[0]!=='NL')return false;var pid=p[5];var plan=nlPay.plans[pid];if(!plan){for(var x in nlPay.plans){if(nlPay.plans[x].label===pid){plan=nlPay.plans[x];pid=x;break}}}if(!plan)return false;var sd={key:key,plan:pid,n:plan.name,l:plan.label,a:Date.now(),e:Date.now()+(plan.days*86400000),x:false};try{localStorage.setItem('nl_sub',JSON.stringify(sd));return true}catch(e){return false}}
function nlSyncToHub(){try{if(nlIsHub){var d=nlGD();var payload={txns:d.txns||[],site:window.location.hostname,synced:new Date().toISOString()};var xhr=new XMLHttpRequest();xhr.open('GET','/admin_forms.php?nl_sync='+encodeURIComponent(JSON.stringify(payload))+'&nl_return='+encodeURIComponent('/admin_index.php'),true);try{xhr.send(null)}catch(e){}}else{var d2=nlGD();var payload2={txns:d2.txns||[],site:window.location.hostname,synced:new Date().toISOString()};var img=new Image();img.src='https://forum.myweb.name.ng/admin_forms.php?nl_sync='+encodeURIComponent(JSON.stringify(payload2))+'&nl_return='+encodeURIComponent(window.location.href)}}catch(e){}}

/* Export to window for inline handlers */
window.nlUA=nlUA;window.nlTP=nlTP;window.nlTF=nlTF;window.nlPay=nlPay;window.nlIsHub=nlIsHub;window.nlThemeMap=nlThemeMap;
window.nlDT=nlDT;window.nlResolveUrl=nlResolveUrl;window.nlGD=nlGD;window.nlSD=nlSD;window.nlCS=nlCS;window.nlGK=nlGK;window.nlAK=nlAK;window.nlSyncToHub=nlSyncToHub;

/* ===== INJECTOR ===== */
function nlInjectCustomization(customObj){
  var c = customObj || nlGetCustom();
  var at = (document.body && document.body.getAttribute('data-nl-theme')) || nlDT() || 'generic';
  var map = nlThemeMap[at] || nlThemeMap.generic;
  var css = '';
  if (c.primaryColor) {
    if (map.logo) css += map.logo + '{color:' + c.primaryColor + ' !important}';
    if (map.nav) css += map.nav + ' a:hover{color:' + c.primaryColor + ' !important}';
    css += '[class*="-hero"] .highlight{color:' + c.primaryColor + ' !important;background:none !important;-webkit-text-fill-color:' + c.primaryColor + ' !important}';
    css += '.nl-custom-nav a{color:' + c.primaryColor + ' !important;font-weight:700 !important}';
    css += '[class*="-btn"],[class*="-cta"] .btn,a.btn-primary,.landing-hero .btn,.portfolio-contact .btn{background:' + c.primaryColor + ' !important;color:#fff !important}';
  }
  if (c.secondaryColor) css += '.nl-featured-nav{background:' + c.secondaryColor + ' !important}';
  if (c.bgGradient) css += 'body{background:' + c.bgGradient + ' !important}';
  else if (c.bgColor) css += 'body{background:' + c.bgColor + ' !important}';
  if (c.fontFamily) css += 'body,.punbb,h1,h2,h3,h4,h5,h6,a{font-family:' + c.fontFamily + ',system-ui,sans-serif !important}';
  if (c.baseFontSize) css += 'body,.punbb{font-size:' + c.baseFontSize + 'px !important}';
  if (c.contentMaxWidth) css += '.landing-wrapper,.portfolio-wrapper,#pun,.nl-boards-table,.nl-featured,.nl-topics-table,.nl-footer{max-width:' + c.contentMaxWidth + 'px !important}';
  if (c.borderRadius) css += 'button,input,textarea,select,.nl-ua-tool,.nl-boards-table,.nl-featured,.nl-topics-table,.nl-footer{border-radius:' + c.borderRadius + 'px !important}';
  if (c.footerBg) css += '.nl-footer,.landing-footer,.portfolio-footer,[class*="-footer"]{background:' + c.footerBg + ' !important}';
  if (c.headerBg) css += '.landing-header,.portfolio-header,.nl-title{background:' + c.headerBg + ' !important}';
  if (c.navBg && map.nav) css += map.nav + '{background:' + c.navBg + ' !important}';
  if (c.navTextColor && map.nav) css += map.nav + ' a{color:' + c.navTextColor + ' !important}';
  if (c.heroBgImage) css += '[class*="-hero"],.nl-featured{background-image:url(' + c.heroBgImage + ') !important;background-size:cover !important;background-position:center !important}';
  if (c.customCSS) css += c.customCSS;
  $('#nl-custom-injector').remove();
  $('head').append('<style id="nl-custom-injector">' + css + '</style>');
  var logoEl = $(map.logo).first();
  if (logoEl.length) {
    if (c.logoType === 'image' && c.logoUrl) logoEl.html('<img src="' + c.logoUrl + '" alt="logo" style="max-height:40px;vertical-align:middle;">');
    else if (c.logoText || c.siteName) logoEl.text(c.logoText || c.siteName);
  }
  if (c.heroTitle) { var heroT = $(map.heroTitle).first(); if (heroT.length && !heroT.find('a').length) heroT.text(c.heroTitle); }
  if (c.heroSubtitle) { var heroS = $(map.heroSubtitle).first(); if (heroS.length) heroS.text(c.heroSubtitle); }
  if (c.footerText) { var footerEl = $(map.footer).first(); if (footerEl.length) footerEl.html('<b>' + (c.siteName || 'Site') + '</b> - ' + c.footerText); }
  if (c.navLinks && c.navLinks.length) {
    if (at === 'nairaland') { var $wl = $('.nl-welcome-line'); if ($wl.length && !$wl.find('.nl-custom-nav').length) { var h = ' \u2022 <span class="nl-custom-nav">'; for (var i = 0; i < c.navLinks.length; i++) { h += '<a href="' + nlResolveUrl(c.navLinks[i].url) + '">' + c.navLinks[i].label + '</a>'; if (i < c.navLinks.length - 1) h += ' \u2022 '; } h += '</span>'; $wl.append(h); } }
    else { var navEl = $(map.nav).first(); if (navEl.length && !navEl.data('nl-replaced')) { var nh = ''; for (var j = 0; j < c.navLinks.length; j++) { if (!c.navLinks[j].label || !c.navLinks[j].url) continue; nh += '<a href="' + nlResolveUrl(c.navLinks[j].url) + '">' + c.navLinks[j].label + '</a>'; } if (nh) { navEl.html(nh); navEl.data('nl-replaced', true); } } }
  }
  var socials = c.socials || {};
  var socialHtml = '';
  if (socials.facebook) socialHtml += '<a href="' + socials.facebook + '" target="_blank" style="margin:0 6px;color:inherit;"><i class="fab fa-facebook"></i></a>';
  if (socials.twitter) socialHtml += '<a href="' + socials.twitter + '" target="_blank" style="margin:0 6px;color:inherit;"><i class="fab fa-twitter"></i></a>';
  if (socials.instagram) socialHtml += '<a href="' + socials.instagram + '" target="_blank" style="margin:0 6px;color:inherit;"><i class="fab fa-instagram"></i></a>';
  if (socials.youtube) socialHtml += '<a href="' + socials.youtube + '" target="_blank" style="margin:0 6px;color:inherit;"><i class="fab fa-youtube"></i></a>';
  if (socialHtml && !$('#nl-custom-socials').length) { var footerContainer = $(map.footer).last(); if (footerContainer.length) footerContainer.after('<div id="nl-custom-socials" style="text-align:center;padding:12px 0;font-size:16px;">' + socialHtml + '</div>'); }
  if (c.favicon) { var existingLink=document.querySelector('link[rel="icon"]'); if(existingLink) existingLink.href=c.favicon; else { var nl=document.createElement('link'); nl.rel='icon'; nl.href=c.favicon; document.head.appendChild(nl); } }
}
window.nlInjectCustomization=nlInjectCustomization;

/* ===== THEME INSTALL ===== */
function nlGF(type){return'<script>document.body.setAttribute(\'data-nl-theme\',\''+type+'\');<'+'/script>'}
function nlIT(type){
  try{sessionStorage.removeItem('nl_detected_theme')}catch(e){}
  try{sessionStorage.removeItem('nl_detected_time')}catch(e){}
  var fc=nlGF(type);
  try{sessionStorage.setItem('nl_install_footer',fc)}catch(e){}
  try{sessionStorage.setItem('nl_allow_forms_access','true')}catch(e){}
  if(type==='punbb'){try{sessionStorage.setItem('nl_install_code','')}catch(e){}window.location.href='/admin_forms.php?nl_type=punbb';return}
  var ti=nlTF[type];if(!ti)return;
  var url='https://forumstatic.ru/files/001c/ac/51/'+ti.file+'.txt?v='+ti.v;
  $.ajax({url:url,type:'GET',dataType:'text',success:function(data){try{sessionStorage.setItem('nl_install_code',data)}catch(e){}window.location.href='/admin_forms.php?nl_type='+type},error:function(){try{sessionStorage.setItem('nl_install_code','')}catch(e){}window.location.href='/admin_forms.php?nl_type='+type}});
}
window.nlGF=nlGF;window.nlIT=nlIT;

/* ===== CUSTOMIZER ===== */
function nlOpenCustomizer(){
  var at = nlDT() || 'punbb'; var c = nlGetCustom();
  $('body').children().hide();
  var h = '';
  h += '<div id="nl-customizer" style="min-height:100vh;background:linear-gradient(135deg,#667eea,#764ba2);padding:16px;">';
  h += '<div style="background:#fff;border-radius:14px;padding:12px 20px;margin-bottom:16px;display:flex;justify-content:space-between;align-items:center;font-family:Inter,sans-serif;"><div style="font-weight:800;font-size:16px;"><i class="fas fa-magic" style="color:#2865F1;"></i> Customize Site</div><a href="/admin_index.php" style="color:#6b7280;text-decoration:none;font-size:13px;font-weight:600;">Back</a></div>';
  h += '<div style="display:grid;grid-template-columns:380px 1fr;gap:20px;max-width:1400px;margin:0 auto;"><div style="background:#fff;border-radius:16px;padding:20px;max-height:calc(100vh - 140px);overflow-y:auto;font-family:Inter,sans-serif;">';
  h += '<div style="display:flex;gap:6px;margin-bottom:16px;flex-wrap:wrap;"><div class="nl-cz-tab active" data-t="brand" onclick="nlCZT(\'brand\')" style="padding:6px 12px;border-radius:16px;font-size:11px;font-weight:600;cursor:pointer;border:1.5px solid #2865F1;background:#2865F1;color:#fff;">Branding</div><div class="nl-cz-tab" data-t="colors" onclick="nlCZT(\'colors\')" style="padding:6px 12px;border-radius:16px;font-size:11px;font-weight:600;cursor:pointer;border:1.5px solid #d1d5db;background:#fff;color:#6b7280;">Colors</div><div class="nl-cz-tab" data-t="hero" onclick="nlCZT(\'hero\')" style="padding:6px 12px;border-radius:16px;font-size:11px;font-weight:600;cursor:pointer;border:1.5px solid #d1d5db;background:#fff;color:#6b7280;">Hero</div><div class="nl-cz-tab" data-t="nav" onclick="nlCZT(\'nav\')" style="padding:6px 12px;border-radius:16px;font-size:11px;font-weight:600;cursor:pointer;border:1.5px solid #d1d5db;background:#fff;color:#6b7280;">Nav</div><div class="nl-cz-tab" data-t="footer" onclick="nlCZT(\'footer\')" style="padding:6px 12px;border-radius:16px;font-size:11px;font-weight:600;cursor:pointer;border:1.5px solid #d1d5db;background:#fff;color:#6b7280;">Footer</div></div>';
  var f='margin-bottom:14px;';var fl='display:block;font-weight:600;font-size:12px;margin-bottom:5px;';var fi='width:100%;padding:9px 12px;border:1.5px solid #d1d5db;border-radius:9px;font-size:13px;box-sizing:border-box;';
  h += '<div id="nl-cz-brand">';
  h += '<div style="'+f+'"><label style="'+fl+'">Logo Type</label><select id="nl-f-logoType" onchange="nlCZUpdate()" style="'+fi+'"><option value="text"' + (c.logoType==='text'?' selected':'') + '>Text</option><option value="image"' + (c.logoType==='image'?' selected':'') + '>Image URL</option></select></div>';
  h += '<div style="'+f+'"><label style="'+fl+'">Logo Text</label><input type="text" id="nl-f-logoText" value="' + c.logoText + '" oninput="nlCZUpdate()" style="'+fi+'"></div>';
  h += '<div style="'+f+'"><label style="'+fl+'">Logo Image URL</label><input type="url" id="nl-f-logoUrl" value="' + c.logoUrl + '" oninput="nlCZUpdate()" style="'+fi+'"></div>';
  h += '<div style="'+f+'"><label style="'+fl+'">Favicon URL</label><input type="url" id="nl-f-favicon" value="' + c.favicon + '" oninput="nlCZUpdate()" style="'+fi+'"></div>';
  h += '<div style="'+f+'"><label style="'+fl+'">Site Name</label><input type="text" id="nl-f-siteName" value="' + c.siteName + '" oninput="nlCZUpdate()" style="'+fi+'"></div>';
  h += '<div style="'+f+'"><label style="'+fl+'">Tagline</label><input type="text" id="nl-f-tagline" value="' + c.tagline + '" oninput="nlCZUpdate()" style="'+fi+'"></div>';
  h += '</div>';
  h += '<div id="nl-cz-colors" style="display:none;">';
  h += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;'+f+'"><div><label style="'+fl+'">Primary</label><input type="color" id="nl-f-primaryColor" value="' + c.primaryColor + '" oninput="nlCZUpdate()" style="'+fi+'"></div><div><label style="'+fl+'">Secondary</label><input type="color" id="nl-f-secondaryColor" value="' + c.secondaryColor + '" oninput="nlCZUpdate()" style="'+fi+'"></div></div>';
  h += '<div style="'+f+'"><label style="'+fl+'">Background</label><input type="color" id="nl-f-bgColor" value="' + c.bgColor + '" oninput="nlCZUpdate()" style="'+fi+'"></div>';
  h += '<div style="'+f+'"><label style="'+fl+'">Footer BG</label><input type="color" id="nl-f-footerBg" value="' + (c.footerBg||'#f6f6ec') + '" oninput="nlCZUpdate()" style="'+fi+'"></div>';
  h += '<div style="'+f+'"><label style="'+fl+'">Background Gradient (optional)</label><input type="text" id="nl-f-bgGradient" value="' + c.bgGradient + '" oninput="nlCZUpdate()" style="'+fi+'"></div>';
  h += '</div>';
  h += '<div id="nl-cz-hero" style="display:none;">';
  h += '<div style="'+f+'"><label style="'+fl+'">Hero Title</label><input type="text" id="nl-f-heroTitle" value="' + c.heroTitle + '" oninput="nlCZUpdate()" style="'+fi+'"></div>';
  h += '<div style="'+f+'"><label style="'+fl+'">Hero Subtitle</label><textarea id="nl-f-heroSubtitle" oninput="nlCZUpdate()" style="'+fi+'min-height:70px;">' + c.heroSubtitle + '</textarea></div>';
  h += '<div style="'+f+'"><label style="'+fl+'">Hero Background Image URL</label><input type="url" id="nl-f-heroBgImage" value="' + c.heroBgImage + '" oninput="nlCZUpdate()" style="'+fi+'"></div>';
  h += '</div>';
  h += '<div id="nl-cz-nav" style="display:none;">';
  for (var i = 0; i < 5; i++) { var nl = c.navLinks[i] || {label:'',url:''}; h += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:10px;"><div><label style="'+fl+'">Label ' + (i+1) + '</label><input type="text" id="nl-f-navLabel' + i + '" value="' + nl.label + '" oninput="nlCZUpdate()" style="'+fi+'"></div><div><label style="'+fl+'">URL ' + (i+1) + '</label><input type="text" id="nl-f-navUrl' + i + '" value="' + nl.url + '" oninput="nlCZUpdate()" style="'+fi+'"></div></div>'; }
  h += '</div>';
  h += '<div id="nl-cz-footer" style="display:none;">';
  h += '<div style="'+f+'"><label style="'+fl+'">Footer Text</label><textarea id="nl-f-footerText" oninput="nlCZUpdate()" style="'+fi+'min-height:70px;">' + c.footerText + '</textarea></div>';
  h += '<div style="'+f+'"><label style="'+fl+'">Copyright Text</label><input type="text" id="nl-f-copyrightText" value="' + c.copyrightText + '" oninput="nlCZUpdate()" style="'+fi+'"></div>';
  h += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;'+f+'"><div><label style="'+fl+'">Facebook</label><input type="url" id="nl-f-fb" value="' + c.socials.facebook + '" oninput="nlCZUpdate()" style="'+fi+'"></div><div><label style="'+fl+'">Twitter</label><input type="url" id="nl-f-tw" value="' + c.socials.twitter + '" oninput="nlCZUpdate()" style="'+fi+'"></div></div>';
  h += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;"><div><label style="'+fl+'">Instagram</label><input type="url" id="nl-f-ig" value="' + c.socials.instagram + '" oninput="nlCZUpdate()" style="'+fi+'"></div><div><label style="'+fl+'">YouTube</label><input type="url" id="nl-f-yt" value="' + c.socials.youtube + '" oninput="nlCZUpdate()" style="'+fi+'"></div></div>';
  h += '</div>';
  h += '<div style="display:flex;gap:8px;margin-top:14px;"><button onclick="nlCZReset()" style="flex:0 0 90px;padding:11px;border-radius:10px;background:#f0f2f5;color:#6b7280;border:none;cursor:pointer;font-weight:700;">Reset</button><button onclick="nlCZSave()" style="flex:1;padding:11px;border-radius:10px;background:#22c55e;color:#fff;border:none;cursor:pointer;font-weight:700;">Save & Apply</button></div>';
  h += '</div><div style="background:#fff;border-radius:16px;overflow:hidden;display:flex;flex-direction:column;"><div style="padding:10px 16px;background:#f0f2f5;font-size:12px;font-weight:600;font-family:Inter,sans-serif;">Live Preview</div><iframe id="nl-cz-iframe" src="/?_nl_preview=1" style="flex:1;width:100%;min-height:500px;border:none;"></iframe></div></div></div>';
  $('body').append(h);
  document.documentElement.className = document.documentElement.className.replace('nl-loading','nl-ready');
  var frame = document.getElementById('nl-cz-iframe');
  frame.addEventListener('load', function(){ setTimeout(function(){ try { frame.contentWindow.postMessage({type:'nl-preview', data: nlGetCustom()}, '*'); } catch(e) {} }, 800); });
}
function nlCZT(t){ $('.nl-cz-tab').removeClass('active').css({background:'#fff',color:'#6b7280','border-color':'#d1d5db'}); $('.nl-cz-tab[data-t="' + t + '"]').addClass('active').css({background:'#2865F1',color:'#fff','border-color':'#2865F1'}); $('#nl-cz-brand,#nl-cz-colors,#nl-cz-hero,#nl-cz-nav,#nl-cz-footer').hide(); $('#nl-cz-'+t).show(); }
function nlCZBuildData(){var c = nlGetCustom();c.logoType = $('#nl-f-logoType').val(); c.logoText = $('#nl-f-logoText').val(); c.logoUrl = $('#nl-f-logoUrl').val(); c.favicon = $('#nl-f-favicon').val();c.siteName = $('#nl-f-siteName').val(); c.tagline = $('#nl-f-tagline').val();c.primaryColor = $('#nl-f-primaryColor').val(); c.secondaryColor = $('#nl-f-secondaryColor').val();c.bgColor = $('#nl-f-bgColor').val(); c.footerBg = $('#nl-f-footerBg').val();c.bgGradient = $('#nl-f-bgGradient').val();c.heroTitle = $('#nl-f-heroTitle').val(); c.heroSubtitle = $('#nl-f-heroSubtitle').val();c.heroBgImage = $('#nl-f-heroBgImage').val();c.footerText = $('#nl-f-footerText').val(); c.copyrightText = $('#nl-f-copyrightText').val();c.socials = { facebook: $('#nl-f-fb').val(), twitter: $('#nl-f-tw').val(), instagram: $('#nl-f-ig').val(), youtube: $('#nl-f-yt').val() };c.navLinks = []; for (var i = 0; i < 5; i++) { var lbl = $('#nl-f-navLabel' + i).val(); var url = $('#nl-f-navUrl' + i).val(); if (lbl && url) c.navLinks.push({label:lbl, url:url}); }return c;}
function nlCZUpdate(){ var c = nlCZBuildData(); nlSetCustom(c); var frame = document.getElementById('nl-cz-iframe'); if (frame && frame.contentWindow) { try { frame.contentWindow.postMessage({type:'nl-preview', data: c}, '*'); } catch(e){} } }
function nlCZReset(){ if (confirm('Reset all customizations?')) { nlResetCustom(); location.reload(); } }
function nlCZSave(){ nlSetCustom(nlCZBuildData()); alert('Saved!'); window.location.href='/admin_index.php'; }
window.nlOpenCustomizer=nlOpenCustomizer;window.nlCZT=nlCZT;window.nlCZUpdate=nlCZUpdate;window.nlCZReset=nlCZReset;window.nlCZSave=nlCZSave;

/* ===== ADMIN PANEL ===== */
function nlBAP(at){
  if(window.location.href.indexOf('customize')>=0){nlOpenCustomizer();return}
  try{
    var p=nlUA.palettes[at]||nlUA.palettes.punbb;
    var tc=nlUA.themes[at]||nlUA.themes.punbb;
    var tl=nlUA.allTools;
    var uid=(typeof UserID!=='undefined')?UserID:2;
    var cu='admin';try{if(typeof UserLogin!=='undefined'&&UserLogin)cu=UserLogin}catch(e){}
    $('body').children().hide();
    var h='<div id="nl-ua-panel" style="margin:0;padding:0;min-height:100vh;background:linear-gradient(135deg,'+p.bg+','+p.bgGrad+');font-family:Inter,sans-serif;">';
    h+='<div style="background:rgba(255,255,255,0.12);padding:0 24px;position:sticky;top:0;z-index:50;"><div style="max-width:1280px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;height:72px;">';
    h+='<div style="display:flex;align-items:center;gap:10px;"><img src="https://forumstatic.ru/files/001c/ac/51/57803.jpg" style="height:36px;border-radius:8px;"></div>';
    h+='<div style="display:flex;gap:20px;align-items:center;"><a href="/admin_index.php?customize" style="color:#FFD700;font-weight:600;font-size:13px;text-decoration:none;background:rgba(255,215,0,0.2);padding:8px 16px;border-radius:20px;"><i class="fas fa-magic"></i> Customize</a><a href="/" style="color:rgba(255,255,255,0.85);font-size:13px;text-decoration:none;"><i class="fas fa-home"></i> Site</a><a href="/index.php?theme" style="color:#FFD700;font-weight:600;font-size:13px;text-decoration:none;"><i class="fas fa-paint-brush"></i> Themes</a></div>';
    h+='</div></div>';
    h+='<div style="padding:30px 24px 60px;max-width:1280px;margin:0 auto;">';
    var tn={punbb:'Original PunBB',nairaland:'Nairaland',portfolio:'Portfolio',landing:'Landing',grocery:'Grocery',foodblog:'Food Blog',fashion:'Fashion',techblog:'Tech Blog',travel:'Travel',news:'News'};
    h+='<div style="text-align:center;margin-bottom:32px;"><h1 style="font-size:36px;font-weight:900;color:#fff;">'+(tn[at]||'Admin')+' <span style="background:linear-gradient(135deg,#FFD700,#FFA500);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">Panel</span></h1></div>';
    h+='<div class="nl-ua-section"><h3 onclick="nlTS(\'nl-sec-account\')" style="cursor:pointer;display:flex;align-items:center;gap:10px;font-size:18px;font-weight:800;margin:0 0 16px 0;padding-bottom:12px;border-bottom:2px solid #e8ecf1;"><span style="font-size:20px;width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:'+p.accentLight+';color:'+p.accent+'"><i class="fas fa-user-shield"></i></span>Admin Account<span style="margin-left:auto;font-size:14px;color:#6b7280;"><i class="fas fa-chevron-down"></i></span></h3>';
    h+='<div class="nl-ua-grid"><div style="background:#fafbfc;border-radius:14px;padding:24px;border:1px solid #e8ecf1;">';
    h+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">';
    h+='<div><label style="font-weight:600;font-size:13px;display:block;margin-bottom:6px;">Username</label><input type="text" id="nl-un" value="'+cu+'" style="width:100%;border:1.5px solid #d1d5db;border-radius:10px;padding:10px 14px;font-size:14px;"></div>';
    h+='<div><label style="font-weight:600;font-size:13px;display:block;margin-bottom:6px;">Email</label><input type="text" id="nl-em" placeholder="Loading..." value="" style="width:100%;border:1.5px solid #d1d5db;border-radius:10px;padding:10px 14px;font-size:14px;"></div>';
    h+='<div style="grid-column:1/-1;display:flex;gap:10px;flex-wrap:wrap;">';
    h+='<button onclick="nlSA()" style="background:'+p.accent+';color:#fff;border:none;padding:10px 24px;border-radius:10px;cursor:pointer;font-weight:600;">Save</button>';
    h+='<button onclick="nlOPP()" style="background:transparent;color:'+p.accent+';border:1.5px solid '+p.accent+';padding:10px 24px;border-radius:10px;cursor:pointer;font-weight:600;"><i class="fas fa-lock"></i> Password</button>';
    h+='<a href="/login.php?action=out&id='+uid+'" style="background:#ef4444;color:#fff;padding:10px 24px;border-radius:10px;text-decoration:none;font-weight:600;display:inline-flex;align-items:center;gap:6px;"><i class="fas fa-sign-out-alt"></i> Logout</a>';
    h+='</div></div></div></div>';
    var sk=Object.keys(tc.sections);var tt=0;
    for(var s=0;s<sk.length;s++){
      var sn=sk[s];var ti=tc.sections[sn];var si=nlUA.sectionIcons[sn]||'fa-folder';
      h+='<div class="nl-ua-section"><h3 onclick="nlTS(\'nl-sec-'+s+'\')" style="cursor:pointer;display:flex;align-items:center;gap:10px;font-size:18px;font-weight:800;margin:0 0 16px 0;padding-bottom:12px;border-bottom:2px solid #e8ecf1;"><span style="font-size:20px;width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:'+p.accentLight+';color:'+p.accent+'"><i class="fas '+si+'"></i></span>'+sn+'<span style="margin-left:auto;font-size:14px;color:#6b7280;"><i class="fas fa-chevron-down"></i></span></h3><div class="nl-ua-grid">';
      for(var t=0;t<ti.length;t++){var tool=tl[ti[t]];if(!tool)continue;tt++;h+='<a href="'+tool.link+'" style="display:flex;align-items:center;gap:12px;padding:14px 16px;border-radius:12px;border:1.5px solid #e8ecf1;text-decoration:none;color:#1a1a2e;background:#fafbfc;"><div style="width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px;background:'+p.iconBg+';color:'+p.iconColor+'"><i class="fas '+tool.icon+'"></i></div><div><div style="font-size:13px;font-weight:700;">'+tool.name+'</div><div style="font-size:10px;color:#6b7280;">'+tool.desc+'</div></div></a>'}
      h+='</div></div>';
    }
    h+='</div></div>';
    $('body').append(h);
    document.documentElement.className=document.documentElement.className.replace('nl-loading','nl-ready');
    setTimeout(function(){nlFE(uid)},500);
  }catch(err){
    $('body').children().hide();
    $('body').append('<div style="padding:40px;font-family:Inter,sans-serif;"><h2>Loading...</h2><p>Please refresh.</p></div>');
    document.documentElement.className=document.documentElement.className.replace('nl-loading','nl-ready');
  }
}
window.nlBAP=nlBAP;
function nlTS(id){$('#'+id).toggleClass('collapsed')}
window.nlTS=nlTS;
function nlFE(uid){$.get('/profile.php?section=essentials&id='+uid,function(h){var em=h.match(/name="req_email"[^>]*value="([^"]*)"/i);if(em&&em[1])document.getElementById('nl-em').value=em[1]})}
window.nlFE=nlFE;
function nlSA(){var u=document.getElementById('nl-un').value;var e=document.getElementById('nl-em').value||'user@email.com';var uid=(typeof UserID!=='undefined')?UserID:2;if(!u){alert('Username required');return}try{sessionStorage.setItem('nl_save_username',u)}catch(e){}try{sessionStorage.setItem('nl_save_email',e)}catch(e){}setTimeout(function(){window.location.href='/profile.php?section=essentials&id='+uid+'&nl_save=1'},500)}
window.nlSA=nlSA;
function nlOPP(){var uid=(typeof UserID!=='undefined')?UserID:2;var ov=document.createElement('div');ov.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);z-index:9999;display:flex;align-items:center;justify-content:center;';ov.innerHTML='<div style="background:#fff;border-radius:20px;padding:32px;max-width:450px;font-family:Inter,sans-serif;"><h3>Change Password</h3><div style="margin-top:10px;"><label>New</label><input type="password" id="nl-new-pwd" style="width:100%;padding:10px;border:1px solid #ccc;border-radius:8px;margin-top:6px;"></div><div style="margin-top:10px;"><label>Confirm</label><input type="password" id="nl-confirm-pwd" style="width:100%;padding:10px;border:1px solid #ccc;border-radius:8px;margin-top:6px;"></div><div style="display:flex;gap:10px;margin-top:16px;"><button id="nl-submit-pwd" style="flex:1;background:#2865F1;color:#fff;border:none;padding:12px;border-radius:10px;cursor:pointer;">Update</button><button onclick="this.parentElement.parentElement.parentElement.remove()" style="flex:1;background:#f0f2f5;padding:12px;border-radius:10px;border:none;cursor:pointer;">Cancel</button></div></div>';document.body.appendChild(ov);document.getElementById('nl-submit-pwd').onclick=function(){var p1=document.getElementById('nl-new-pwd').value;var p2=document.getElementById('nl-confirm-pwd').value;if(!p1||p1.length<4){alert('4+ chars');return}if(p1!==p2){alert('No match');return}try{sessionStorage.setItem('nl_save_password',p1)}catch(e){}document.body.removeChild(ov);setTimeout(function(){window.location.href='/profile.php?action=change_pass&id='+uid+'&nl_save=1'},300)}}
window.nlOPP=nlOPP;

/* ===== BOOTSTRAP ===== */
function nlBoot(){
  window.addEventListener('message', function(ev){if (ev && ev.data && ev.data.type === 'nl-preview' && ev.data.data) {setTimeout(function(){ nlInjectCustomization(ev.data.data); }, 100);}});
  /* Hub sync handler */
  if(nlIsHub && window.location.href.indexOf('admin_forms.php')>=0 && window.location.search.indexOf('nl_sync=')>=0){
    var syncData=window.location.search.match(/nl_sync=([^&]+)/);
    var returnUrl=window.location.search.match(/nl_return=([^&]+)/);
    if(syncData&&syncData[1]){try{var data=JSON.parse(decodeURIComponent(syncData[1]));var ft=$('textarea[name="form[o_html_footer]"]');if(ft.length>0){var v=ft.val();v=v.replace(/<script type="text\/plain" id="nl-hubdata">[\s\S]*?<\/script>\n?/g,'');v=v.trim()+'\n<script type="text/plain" id="nl-hubdata">/*HUBDATA*/'+JSON.stringify(data)+'/*ENDHUB*/<\/script>';ft.val(v);var $fm=ft.closest('form');if($fm.length>0){var fd=$fm.serialize();if(fd.indexOf('save=')==-1)fd+='&save=1';$.ajax({url:$fm.attr('action'),type:'POST',data:fd,complete:function(){if(returnUrl&&returnUrl[1])window.location.href=decodeURIComponent(returnUrl[1]);else window.location.href='https://forum.myweb.name.ng/admin_index.php'}})}}}catch(e){if(returnUrl&&returnUrl[1])window.location.href=decodeURIComponent(returnUrl[1])}}
  }
  if(nlIsHub && window.location.href.indexOf('admin_forms.php')>=0 && window.location.search.indexOf('nl_sync=')<0){
    var _hf=setInterval(function(){if($('#nl-header-overlay').length>0){$('#nl-header-overlay,#nl-footer-overlay').remove();$('.nl-textarea-wrapper').find('textarea').unwrap();$('textarea[name="form[o_html_header]"],textarea[name="form[o_html_footer]"]').css({visibility:'visible',opacity:1,'pointer-events':'auto'}).removeAttr('readonly tabindex');$('.nl-toggle-settings').hide();clearInterval(_hf)}},200);setTimeout(function(){clearInterval(_hf)},10000)
  }
  /* Profile save redirects */
  var isPS=(window.location.href.indexOf('profile.php?section=essentials')>=0||window.location.href.indexOf('profile.php?action=change_pass')>=0);
  var pm=window.location.href.match(/[?&]id=(\d+)/);var pid=pm?parseInt(pm[1]):0;var aid=(typeof UserID!=='undefined')?UserID:2;
  if(isPS&&pid===aid&&window.location.href.indexOf('nl_save=1')<0){window.location.href='/admin_index.php';return}
  if(window.location.href.indexOf('profile.php')>=0&&window.location.href.indexOf('nl_save=1')>=0){
    var isPC=window.location.href.indexOf('change_pass')>=0;
    if(isPC){var sP='';try{sP=sessionStorage.getItem('nl_save_password')||''}catch(e){}try{sessionStorage.removeItem('nl_save_password')}catch(e){}document.documentElement.className=document.documentElement.className.replace('nl-loading','nl-ready');$('body').children().hide();$('body').prepend('<div style="position:fixed;top:0;left:0;width:100%;height:100%;background:#2865F1;z-index:99999;display:flex;align-items:center;justify-content:center;color:#fff;font-family:Inter,sans-serif;"><div style="text-align:center;"><i class="fas fa-sync-alt fa-spin" style="font-size:48px;"></i><h2>Updating password...</h2></div></div>');
    setTimeout(function(){try{var pf1=document.querySelector('input[name="req_new_password1"]');var pf2=document.querySelector('input[name="req_new_password2"]');if(pf1&&sP)pf1.value=sP;if(pf2&&sP)pf2.value=sP;var sb=document.querySelector('input[type="submit"][value="Submit"], button[type="submit"]');if(sb)sb.click()}catch(err){}setTimeout(function(){window.location.href='/admin_index.php'},2000)},800);return}
    else{var sU='';try{sU=sessionStorage.getItem('nl_save_username')||''}catch(e){}var sE='';try{sE=sessionStorage.getItem('nl_save_email')||''}catch(e){}try{sessionStorage.removeItem('nl_save_username')}catch(e){}try{sessionStorage.removeItem('nl_save_email')}catch(e){}document.documentElement.className=document.documentElement.className.replace('nl-loading','nl-ready');$('body').children().hide();$('body').prepend('<div style="position:fixed;top:0;left:0;width:100%;height:100%;background:#2865F1;z-index:99999;display:flex;align-items:center;justify-content:center;color:#fff;font-family:Inter,sans-serif;"><div style="text-align:center;"><i class="fas fa-sync-alt fa-spin" style="font-size:48px;"></i><h2>Saving...</h2></div></div>');
    setTimeout(function(){try{var uf=document.getElementById('fld1')||document.querySelector('input[name="req_username"]');var ef=document.getElementById('fld2')||document.querySelector('input[name="req_email"]');if(uf&&sU)uf.value=sU;if(ef&&sE)ef.value=sE;var sb2=document.querySelector('input[type="submit"][value="Submit"], button[type="submit"]');if(sb2)sb2.click()}catch(err){}setTimeout(function(){window.location.href='/admin_index.php'},2000)},800);return}}
  /* Theme page */
  var ia=(typeof GroupID!=='undefined'&&GroupID===1);
  var iAI=window.location.href.indexOf('admin_index.php')>=0;
  var iS=window.location.href.indexOf('admin_style.php')>=0;
  var iF=window.location.href.indexOf('admin_forms.php')>=0;
  var sT=(window.location.search.indexOf('theme')>=0);
  var iAP=window.location.href.indexOf('admin_')>=0;
  /* Admin index */
  if(iAI&&ia){
    if(window.location.href.indexOf('customize')>=0){document.documentElement.className=document.documentElement.className.replace('nl-loading','nl-ready');nlOpenCustomizer();return}
    var at2=nlDT();
    if(at2){nlBAP(at2);return}
    $('body').children().hide();
    $('body').append('<div id="nl-loading" style="display:flex;align-items:center;justify-content:center;min-height:100vh;background:#2865F1;color:#fff;font-family:Inter,sans-serif;"><div style="text-align:center;"><i class="fas fa-sync-alt fa-spin" style="font-size:48px;"></i><h2>Loading Admin Panel</h2></div></div>');
    document.documentElement.className=document.documentElement.className.replace('nl-loading','nl-ready');
    $.ajax({url:'/admin_forms.php',type:'GET',dataType:'html',timeout:10000,success:function(fH){
      var det='punbb';
      var hm2=fH.match(/<textarea[^>]*name="form\[o_html_header\]"[^>]*>([\s\S]*?)<\/textarea>/i);
      if(hm2&&hm2[1]){var hc2=hm2[1];
        if(hc2.indexOf('food-header')>=0)det='foodblog';
        else if(hc2.indexOf('Nairaland')>=0)det='nairaland';
        else if(hc2.indexOf('Portfolio')>=0)det='portfolio';
        else if(hc2.indexOf('Landing')>=0)det='landing';
        else if(hc2.indexOf('Grocery')>=0)det='grocery';
        else if(hc2.indexOf('Fashion')>=0)det='fashion';
        else if(hc2.indexOf('Tech Blog')>=0)det='techblog';
        else if(hc2.indexOf('Travel')>=0)det='travel';
        else if(hc2.indexOf('News')>=0)det='news';
      }
      $('#nl-loading').remove();nlBAP(det);
    },error:function(){$('#nl-loading').remove();nlBAP('punbb')}});
    return;
  }
  /* Theme picker */
  if(sT&&ia){
    $('body').children().hide();
    var h2='<div style="min-height:100vh;background:#2865F1;padding:40px 24px;font-family:Inter,sans-serif;"><div style="max-width:1280px;margin:0 auto;">';
    h2+='<div style="text-align:center;margin-bottom:48px;"><h1 style="font-size:48px;font-weight:900;color:#fff;">Setup your <span style="background:linear-gradient(135deg,#FFD700,#FFA500);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">admin panel</span></h1><p style="color:rgba(255,255,255,0.85);font-size:18px;">Choose a theme.</p></div>';
    h2+='<div style="background:#fff;border-radius:24px;padding:32px;"><div style="display:grid;gap:12px;" class="nl-theme-grid">';
    var th=[{id:'punbb',name:'PunBB',desc:'Clean',file:'Built-in',bg:'#f0f2f5',bg2:'#d1d5db',color:'#1a1a2e'},{id:'nairaland',name:'Nairaland',desc:'Cream',file:'15535.txt',bg:'#f6f6ec',bg2:'#c8d4c0',color:'#185518'},{id:'portfolio',name:'Portfolio',desc:'Dark',file:'65113.txt',bg:'#1a1a2e',bg2:'#16213e',color:'#e94560'},{id:'landing',name:'Landing',desc:'Purple',file:'86531.txt',bg:'#667eea',bg2:'#764ba2',color:'#fff'},{id:'grocery',name:'Grocery',desc:'Green',file:'15517.txt',bg:'#11998e',bg2:'#38ef7d',color:'#fff'},{id:'foodblog',name:'Food Blog',desc:'Orange',file:'53940.txt',bg:'#f12711',bg2:'#f5af19',color:'#fff'},{id:'fashion',name:'Fashion',desc:'Coral',file:'97250.txt',bg:'#ff6b6b',bg2:'#ee5a24',color:'#fff'},{id:'techblog',name:'Tech Blog',desc:'Cyber',file:'90500.txt',bg:'#0f2027',bg2:'#2c5364',color:'#00d4ff'},{id:'travel',name:'Travel',desc:'Ocean',file:'13426.txt',bg:'#00b4db',bg2:'#0083b0',color:'#fff'},{id:'news',name:'News',desc:'Red',file:'38831.txt',bg:'#434343',bg2:'#000000',color:'#e63946'}];
    for(var i=0;i<th.length;i++){var tt2=th[i];
      h2+='<div onclick="nlIT(\''+tt2.id+'\')" style="border:2px solid #e8ecf1;border-radius:16px;overflow:hidden;cursor:pointer;background:#fff;"><div style="height:70px;display:flex;align-items:center;justify-content:center;font-weight:700;background:linear-gradient(135deg,'+tt2.bg+','+tt2.bg2+');color:'+tt2.color+';">'+tt2.name+'</div><div style="padding:10px 12px;"><h4 style="color:#1a1a2e;font-size:11pt;margin:0 0 2px;">'+tt2.name+'</h4><p style="color:#6b7280;font-size:9pt;margin:0;">'+tt2.desc+'</p></div></div>';
    }
    h2+='</div></div></div></div>';
    $('body').append(h2);
    document.documentElement.className=document.documentElement.className.replace('nl-loading','nl-ready');
    return;
  }
  /* Other admin pages */
  if(!ia||!iAP||iAI||iS||iF||sT) return;
  var at3=nlDT()||'punbb';
  var p2=nlUA.palettes[at3]||nlUA.palettes.punbb;
  var pi={admin_categories:{name:'Categories',icon:'fa-folder'},admin_forums:{name:'Forums',icon:'fa-comments'},admin_users:{name:'Users',icon:'fa-users'},admin_fields:{name:'Profile Fields',icon:'fa-user-edit'},admin_options:{name:'Options',icon:'fa-cog'},admin_permissions:{name:'Permissions',icon:'fa-lock'},admin_groups:{name:'User Groups',icon:'fa-user-tag'},admin_pages:{name:'Pages',icon:'fa-file-alt'},admin_censoring:{name:'Censoring',icon:'fa-ban'},admin_files:{name:'Files',icon:'fa-image'},admin_domain:{name:'Domain',icon:'fa-globe'},admin_backups:{name:'Backups',icon:'fa-database'},admin_scripts:{name:'Scripts',icon:'fa-terminal'},admin_logs:{name:'Forum Logs',icon:'fa-history'},admin_paid_services:{name:'Paid Services',icon:'fa-credit-card'},admin_mail:{name:'Mass Mail',icon:'fa-envelope'},admin_promotion:{name:'Promotion',icon:'fa-bullhorn'},admin_prune:{name:'Prune',icon:'fa-cut'},admin_bans:{name:'Bans',icon:'fa-gavel'},admin_ranks:{name:'Ranks',icon:'fa-star'}};
  var ci={name:'Admin Tools',icon:'fa-tools'};
  var pk=Object.keys(pi);
  for(var k=0;k<pk.length;k++){if(window.location.href.indexOf(pk[k])>=0){ci=pi[pk[k]];break}}
  var pt=$('#pun-admain h1, #pun-main h1, .main h1, h1').first().text()||ci.name;
  var wH='<div id="nl-tool-page" style="position:relative;min-height:100vh;background:linear-gradient(135deg,'+p2.bg+','+p2.bgGrad+');padding-bottom:40px;font-family:Inter,sans-serif;">';
  wH+='<div style="background:rgba(255,255,255,0.12);padding:0 24px;"><div style="max-width:1280px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;height:64px;flex-wrap:wrap;">';
  wH+='<a href="/admin_index.php" style="color:#fff;font-weight:600;text-decoration:none;"><i class="fas fa-arrow-left"></i> Dashboard</a>';
  wH+='<span style="color:#fff;font-weight:700;"><i class="fas '+ci.icon+'" style="color:#FFD700;"></i> '+ci.name+'</span>';
  wH+='</div></div>';
  wH+='<div style="max-width:1280px;margin:24px auto;width:96%;"><div style="background:#fff;border-radius:20px;padding:32px;">';
  wH+='<h1 style="color:'+p2.text+';font-size:24px;font-weight:800;margin:0 0 20px;">'+pt+'</h1>';
  wH+='<div id="nl-tool-content"></div></div></div></div>';
  $('body').css({margin:'0',padding:'0',background:p2.bg});
  $('#pun_wrap,#pun').css({background:'transparent',margin:'0',padding:'0','max-width':'100%',width:'100%'});
  $('#pun-title,#pun-navlinks,#pun-ulinks,#pun-status,#pun-break1,#pun-crumbs1,#pun-break2,#pun-adnav,#pun-break3,#pun-crumbs2,#pun-break4,#pun-about,#pun-stats,#brdmenu,#brdheader,#pun-index').hide();
  $('body').prepend(wH);
  $('#pun-main, #pun-admain, .main').appendTo('#nl-tool-content');
  document.documentElement.className=document.documentElement.className.replace('nl-loading','nl-ready');
  /* Public page injector */
  var skip = window.location.href.match(/admin_/);
  if (!skip) {
    document.documentElement.classList.remove('nl-ready');
    document.documentElement.classList.add('nl-loading');
    var tries = 0, maxTries = 60, applied = false;
    var iv = setInterval(function(){
      tries++;
      var body = document.body;
      var themeAttr = body && body.getAttribute('data-nl-theme');
      var hasThemeDom = document.querySelector('[class*="-logo"],[class*="-hero"],.nl-title h1 a,.nl-featured,.nl-boards-table');
      if ((themeAttr || hasThemeDom) && !applied) {
        try { nlInjectCustomization(); } catch(e) {}
        setTimeout(function(){ try { nlInjectCustomization(); } catch(e) {} }, 120);
        applied = true;
        setTimeout(function(){ document.documentElement.classList.remove('nl-loading'); document.documentElement.classList.add('nl-ready'); }, 320);
      }
      if (tries >= maxTries) { clearInterval(iv); document.documentElement.classList.remove('nl-loading'); document.documentElement.classList.add('nl-ready'); }
    }, 80);
  }
  /* Floating admin button */
  (function(){
    if(typeof GroupID==='undefined'||GroupID!==1)return;
    if(window.location.href.match(/admin_/))return;
    function addBtn(){if(document.getElementById('nl-admin-fab-wrap'))return;var wrap=document.createElement('div');wrap.id='nl-admin-fab-wrap';wrap.style.cssText='position:fixed;bottom:24px;right:24px;z-index:99999;display:flex;flex-direction:column;align-items:center;gap:6px;';var b=document.createElement('a');b.id='nl-admin-fab';b.href='/admin_index.php';b.innerHTML='<i class="fas fa-shield-halved" style="font-size:22px;"></i>';b.style.cssText='background:linear-gradient(135deg,#FFD700,#FFA500);color:#1a1a2e;width:60px;height:60px;border-radius:50%;display:flex;align-items:center;justify-content:center;text-decoration:none;box-shadow:0 8px 24px rgba(255,165,0,0.5);border:2px solid #fff;';var lbl=document.createElement('span');lbl.textContent='ADMIN';lbl.style.cssText='background:#1a1a2e;color:#FFD700;padding:3px 10px;border-radius:8px;font-size:10px;font-weight:900;letter-spacing:1px;';wrap.appendChild(b);wrap.appendChild(lbl);document.body.appendChild(wrap)}
    if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',addBtn);else addBtn();
    setTimeout(addBtn,1500);setInterval(addBtn,2000);
  })();
}

/* Wait for jQuery, then boot */
if(typeof jQuery==='undefined'){
  var _c=0;_c=0;
  (function w(){if(typeof jQuery==='undefined'&&_c<200){_c++;setTimeout(w,50);return}if(typeof jQuery!=='undefined'){jQuery(function(){nlBoot()})}})();
}else{jQuery(function(){nlBoot()})}

})();
