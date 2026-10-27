/* MYWEB PLATFORM — main.js v23 */
(function(){
'use strict';

function nlReady(){try{document.documentElement.className=document.documentElement.className.replace('nl-loading','nl-ready')}catch(e){}}
window.nlReady=nlReady;
setTimeout(nlReady,2500);

var nlCustomDefaults={scope:'global',logoType:'text',logoUrl:'',logoText:'My Website',siteName:'My Website',tagline:'Welcome',taglineOn:true,primaryColor:'#2865F1',secondaryColor:'#8b5cf6',bgColor:'#f8fafc',bgGradient:'',linkColor:'',textColor:'',headerBg:'',footerBg:'',footerTextColor:'',btnTextColor:'#ffffff',heroTitle:'Welcome to My Website',heroSubtitle:'This is my awesome website',heroTitleColor:'',heroSubtitleColor:'',heroBgImage:'',heroOverlayOpacity:0,heroBtnText:'Get Started',heroBtnUrl:'',navBg:'',navTextColor:'',navSticky:false,navLinks:[{label:'Home',url:'/'},{label:'About',url:'about'},{label:'Contact',url:'contact'}],footerText:'© 2024 My Website',copyrightText:'',showPoweredBy:true,socials:{facebook:'',twitter:'',instagram:'',youtube:''},fontFamily:'Inter',baseFontSize:16,headingWeight:800,contentMaxWidth:1200,borderRadius:12,spacing:'normal',customCSS:'',customJS:'',gaId:'',favicon:''};
function nlGetCustom(){try{var c=localStorage.getItem('nl_customization');if(c){var parsed=JSON.parse(c);var merged={};for(var k in nlCustomDefaults){merged[k]=(typeof parsed[k]!=='undefined')?parsed[k]:nlCustomDefaults[k]}return merged}}catch(e){}return JSON.parse(JSON.stringify(nlCustomDefaults))}
function nlSetCustom(c){try{localStorage.setItem('nl_customization',JSON.stringify(c))}catch(e){}}
function nlResetCustom(){try{localStorage.removeItem('nl_customization')}catch(e){}}
window.nlGetCustom=nlGetCustom;window.nlSetCustom=nlSetCustom;window.nlResetCustom=nlResetCustom;

var nlUA={palettes:{punbb:{bg:'#f0f2f5',bgGrad:'#d1d5db',accent:'#2865F1',accentLight:'#e8f0ff',text:'#1a1a2e',iconBg:'#e8ecf1',iconColor:'#555'},nairaland:{bg:'#f6f6ec',bgGrad:'#c8d4c0',accent:'#185518',accentLight:'#e8f5e0',text:'#1a1a2e',iconBg:'#e8ece0',iconColor:'#185518'},portfolio:{bg:'#1a1a2e',bgGrad:'#16213e',accent:'#e94560',accentLight:'#2a1a2e',text:'#1a1a2e',iconBg:'#f0f0f5',iconColor:'#e94560'},landing:{bg:'#667eea',bgGrad:'#764ba2',accent:'#667eea',accentLight:'#f0edff',text:'#1a1a2e',iconBg:'#ede9fe',iconColor:'#667eea'},grocery:{bg:'#11998e',bgGrad:'#38ef7d',accent:'#11998e',accentLight:'#e6faf5',text:'#1a1a2e',iconBg:'#d1fae5',iconColor:'#11998e'},foodblog:{bg:'#f12711',bgGrad:'#f5af19',accent:'#f12711',accentLight:'#fff5f0',text:'#1a1a2e',iconBg:'#fef3c7',iconColor:'#f12711'},fashion:{bg:'#ff6b6b',bgGrad:'#ee5a24',accent:'#ff6b6b',accentLight:'#fff0f0',text:'#1a1a2e',iconBg:'#fee2e2',iconColor:'#ff6b6b'},techblog:{bg:'#0f2027',bgGrad:'#2c5364',accent:'#00d4ff',accentLight:'#e0f7ff',text:'#1a1a2e',iconBg:'#cffafe',iconColor:'#00d4ff'},travel:{bg:'#00b4db',bgGrad:'#0083b0',accent:'#0083b0',accentLight:'#e0f4ff',text:'#1a1a2e',iconBg:'#dbeafe',iconColor:'#0083b0'},news:{bg:'#434343',bgGrad:'#000000',accent:'#e63946',accentLight:'#fff0f0',text:'#1a1a2e',iconBg:'#fee2e2',iconColor:'#e63946'}},allTools:{customize:{name:'Customize Site',desc:'Visual editor',icon:'fa-magic',link:'admin_index.php?customize'},dashboard:{name:'Dashboard',desc:'Stats & overview',icon:'fa-chart-line',link:'admin_index.php'},categories:{name:'Categories',desc:'Manage categories',icon:'fa-folder',link:'admin_categories.php'},forums:{name:'Forums',desc:'Manage forums',icon:'fa-comments',link:'admin_forums.php'},pages:{name:'Pages',desc:'Create custom pages',icon:'fa-file-alt',link:'admin_pages.php'},files:{name:'Files',desc:'Upload & manage media',icon:'fa-image',link:'admin_files.php'},censoring:{name:'Censoring',desc:'Word filters',icon:'fa-ban',link:'admin_censoring.php'},prune:{name:'Prune',desc:'Clean old topics',icon:'fa-cut',link:'admin_prune.php'},users:{name:'Users',desc:'Manage members',icon:'fa-users',link:'admin_users.php'},groups:{name:'User Groups',desc:'Group permissions',icon:'fa-user-tag',link:'admin_groups.php'},permissions:{name:'Permissions',desc:'Access controls',icon:'fa-lock',link:'admin_permissions.php'},fields:{name:'Profile Fields',desc:'Custom user fields',icon:'fa-user-edit',link:'admin_fields.php'},ranks:{name:'Ranks',desc:'User titles',icon:'fa-star',link:'admin_ranks.php'},bans:{name:'Bans',desc:'Block users/IPs',icon:'fa-gavel',link:'admin_bans.php'},promotion:{name:'Promotion',desc:'Ads & promotions',icon:'fa-bullhorn',link:'admin_promotion.php'},paid:{name:'Paid Services',desc:'Monetization tools',icon:'fa-credit-card',link:'admin_paid_services.php'},style:{name:'Custom Style',desc:'CSS customization',icon:'fa-palette',link:'admin_style.php'},forms:{name:'Forms & HTML',desc:'Header/footer code',icon:'fa-code',link:'admin_forms.php'},options:{name:'Options',desc:'Board settings',icon:'fa-cog',link:'admin_options.php'},domain:{name:'Domain',desc:'Domain settings',icon:'fa-globe',link:'admin_domain.php'},backups:{name:'Backups',desc:'Backup & restore',icon:'fa-database',link:'admin_backups.php'},logs:{name:'Forum Logs',desc:'Activity logs',icon:'fa-history',link:'admin_logs.php'},scripts:{name:'Scripts',desc:'Custom scripts',icon:'fa-terminal',link:'admin_scripts.php'},mail:{name:'Mass Mailing',desc:'Email all users',icon:'fa-envelope',link:'admin_mail.php'}},sectionIcons:{Dashboard:'fa-chart-line',Content:'fa-file-alt',Community:'fa-users',Appearance:'fa-palette',System:'fa-cog',Communication:'fa-envelope',Monetization:'fa-dollar-sign',Settings:'fa-cog',Products:'fa-shopping-basket',Customers:'fa-user',Commerce:'fa-credit-card',Authors:'fa-pen',Team:'fa-user-tie',Distribution:'fa-paper-plane'},themes:{punbb:{sections:{Dashboard:['dashboard'],Content:['categories','forums','pages','files','censoring','prune'],Community:['users','groups','permissions','fields','ranks','bans'],Appearance:['customize','style','forms','options'],System:['domain','backups','logs','scripts'],Communication:['mail'],Monetization:['promotion','paid']}},nairaland:{sections:{Dashboard:['dashboard'],Content:['categories','forums','pages','censoring','prune'],Community:['users','groups','permissions','fields','ranks','bans'],Appearance:['customize','style','forms'],System:['options','domain','backups','logs','scripts'],Communication:['mail'],Monetization:['promotion','paid']}},portfolio:{sections:{Dashboard:['dashboard'],Content:['pages','files'],Appearance:['customize','style','forms'],Settings:['options','domain','backups']}},landing:{sections:{Dashboard:['dashboard'],Content:['pages'],Appearance:['customize','style','forms'],Settings:['options','domain','backups']}},grocery:{sections:{Dashboard:['dashboard'],Products:['categories','pages','files'],Customers:['users'],Appearance:['customize','style','forms'],Settings:['options','domain','backups'],Commerce:['promotion','paid']}},foodblog:{sections:{Dashboard:['dashboard'],Content:['categories','pages','files'],Appearance:['customize','style','forms'],Settings:['options','domain','backups']}},fashion:{sections:{Dashboard:['dashboard'],Content:['categories','pages','files'],Appearance:['customize','style','forms'],Settings:['options','domain','backups']}},techblog:{sections:{Dashboard:['dashboard'],Content:['categories','pages','files'],Authors:['users'],Appearance:['customize','style','forms'],Settings:['options','domain','backups','scripts']}},travel:{sections:{Dashboard:['dashboard'],Content:['categories','pages','files'],Appearance:['customize','style','forms'],Settings:['options','domain','backups']}},news:{sections:{Dashboard:['dashboard'],Content:['categories','pages','files','censoring'],Team:['users','groups','permissions','fields'],Appearance:['customize','style','forms'],Settings:['options','domain','backups'],Distribution:['mail']}}}};
var nlTP={punbb:{name:'Original PunBB',desc:'Clean, fast, classic forum',bg:'#f0f2f5',bg2:'#d1d5db',color:'#1a1a2e',icon:'fa-comments'},nairaland:{name:'Nairaland Style',desc:'Cream & green accents',bg:'#f6f6ec',bg2:'#c8d4c0',color:'#185518',icon:'fa-users'},portfolio:{name:'Portfolio Showcase',desc:'Dark & professional',bg:'#1a1a2e',bg2:'#16213e',color:'#e94560',icon:'fa-briefcase'},landing:{name:'Landing Page',desc:'Purple gradient hero',bg:'#667eea',bg2:'#764ba2',color:'#fff',icon:'fa-rocket'},grocery:{name:'Grocery Delivery',desc:'Fresh green theme',bg:'#11998e',bg2:'#38ef7d',color:'#fff',icon:'fa-shopping-cart'},foodblog:{name:'Food Blog',desc:'Warm orange & red',bg:'#f12711',bg2:'#f5af19',color:'#fff',icon:'fa-utensils'},fashion:{name:'Fashion Blog',desc:'Bold coral & pink',bg:'#ff6b6b',bg2:'#ee5a24',color:'#fff',icon:'fa-tshirt'},techblog:{name:'Tech Blog',desc:'Dark blue cyber',bg:'#0f2027',bg2:'#2c5364',color:'#00d4ff',icon:'fa-microchip'},travel:{name:'Travel Blog',desc:'Ocean blue vibes',bg:'#00b4db',bg2:'#0083b0',color:'#fff',icon:'fa-plane'},news:{name:'News/Magazine',desc:'Bold black & red',bg:'#434343',bg2:'#000000',color:'#e63946',icon:'fa-newspaper'}};
var nlTF={nairaland:{file:'15535',v:'4'},portfolio:{file:'65113',v:'4'},landing:{file:'86531',v:'4'},grocery:{file:'15517',v:'4'},foodblog:{file:'53940',v:'4'},fashion:{file:'97250',v:'4'},techblog:{file:'90500',v:'7'},travel:{file:'13426',v:'4'},news:{file:'38831',v:'4'}};
var nlPay={lockedTools:['paid','promotion','domain','backups','scripts','mail'],plans:{pro_monthly:{name:'Pro Monthly',price:5000,days:30,label:'PRO'},pro_yearly:{name:'Pro Yearly',price:50000,days:365,label:'PRO'},vip_lifetime:{name:'VIP Lifetime',price:150000,days:9999,label:'VIP'}},pk:'pk_test_yourpaystackkey',fk:'FLWPUBK_TEST-yourflutterwavekey'};
var nlIsHub=(window.location.hostname==='forum.myweb.name.ng');
var nlThemeMap={nairaland:{logo:'#pun-title .nl-title h1 a',nav:'.nl-welcome-line',heroTitle:'.nl-featured-title',heroSubtitle:'.nl-featured-nav',footer:'.nl-footer'},portfolio:{logo:'.portfolio-logo',nav:'.portfolio-nav',heroTitle:'.portfolio-hero h1',heroSubtitle:'.portfolio-hero p',footer:'.portfolio-footer p'},landing:{logo:'.landing-logo',nav:'.landing-nav',heroTitle:'.landing-hero h1',heroSubtitle:'.landing-hero p',footer:'.landing-footer p'},generic:{logo:'[class*="-logo"], .nl-title h1 a, #pun-title h1 a',nav:'[class*="-nav"]',heroTitle:'[class*="-hero"] h1, .nl-featured-title',heroSubtitle:'[class*="-hero"] p, .nl-featured-nav',footer:'[class*="-footer"], .nl-footer'}};

function nlDT(){if(document.body){var b=document.body.getAttribute('data-nl-theme');if(b)return b}if(typeof $!=='undefined'){if($('#pun-title').css('background-color')==='rgb(246, 246, 236)')return'nairaland';if(($('body').css('font-family')||'').indexOf('Open Sans')>=0)return'nairaland';if($('.nl-navbar').length>0)return'nairaland'}return null}
function nlResolveUrl(url){if(!url)return '#';if(/^https?:\/\//i.test(url))return url;if(url.indexOf('/')===0)return url;if(url.indexOf('#')===0)return url;if(url.indexOf('?')===0)return url;return '/pages/'+url.replace(/^\/+/,'')}
function nlGD(){try{var d=localStorage.getItem('nl_site_data');var parsed = d?JSON.parse(d):{txns:[],chats:[]};if(typeof parsed.themeBank==='undefined'){parsed.themeBank=3;parsed.switchCount=0;parsed.lastSwitchAt=null;try{localStorage.setItem('nl_site_data',JSON.stringify(parsed))}catch(e){}}return parsed}catch(e){return{txns:[],chats:[],themeBank:3,switchCount:0,lastSwitchAt:null}}}
function nlSD(d){try{localStorage.setItem('nl_site_data',JSON.stringify(d))}catch(e){}}
function nlCS(){try{var s=localStorage.getItem('nl_sub');if(!s)return null;var sub=JSON.parse(s);if(sub.x)return null;if(sub.e&&Date.now()<sub.e)return sub;localStorage.removeItem('nl_sub');return null}catch(e){return null}}
function nlGK(p,d){var c='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';var k='NL-';for(var i=0;i<4;i++){for(var j=0;j<4;j++)k+=c.charAt(Math.floor(Math.random()*c.length));if(i<3)k+='-';}return k+'-'+(d?p+'-'+d+'d':p)}
function nlAK(key){var p=key.split('-');if(p.length<6||p[0]!=='NL')return false;var pid=p[5];var plan=nlPay.plans[pid];var cd=0;if(!plan){if(pid.indexOf('d')>0){var pp=pid.split('d');plan=nlPay.plans[pp[0]];cd=parseInt(pp[1])||0}}if(!plan){for(var x in nlPay.plans){if(nlPay.plans[x].label===pid){plan=nlPay.plans[x];pid=x;break}}}if(!plan)return false;var ed=cd||plan.days;var sd={key:key,plan:pid,n:plan.name,l:plan.label,a:Date.now(),e:Date.now()+(ed*86400000),x:false};try{localStorage.setItem('nl_sub',JSON.stringify(sd));return true}catch(e){return false}}
function nlLoadPaymentSDK(cb){var needP=(typeof PaystackPop==='undefined');var needF=(typeof FlutterwaveCheckout==='undefined');if(!needP&&!needF)return cb();var loaded=0,total=(needP?1:0)+(needF?1:0);function done(){loaded++;if(loaded>=total)cb()}if(needP){var ps=document.createElement('script');ps.src='https://js.paystack.co/v1/inline.js';ps.onload=done;ps.onerror=done;document.head.appendChild(ps)}if(needF){var fw=document.createElement('script');fw.src='https://checkout.flutterwave.com/v3.js';fw.onload=done;fw.onerror=done;document.head.appendChild(fw)}}

/* ===== THEME-SWITCH BANK SYSTEM (v23) ===== */
function nlCanSwitchTheme(){
  try{
    var hasTheme = (document.body && document.body.getAttribute('data-nl-theme')) ||
                   (typeof $!=='undefined' && ($('.nl-navbar').length>0 || $('.nl-boards-table').length>0));
    if(!hasTheme){ return {allowed:true,reason:'initial',bankRemaining:999}; }
    if(nlCS()){ return {allowed:true,reason:'subscription',bankRemaining:999}; }
    var data = nlGD();
    var bank = typeof data.themeBank==='number' ? data.themeBank : 3;
    if(bank > 0){ return {allowed:true,reason:'bank',bankRemaining:bank}; }
    return {allowed:false,reason:'bank_empty',bankRemaining:0};
  }catch(e){ return {allowed:true,reason:'error',bankRemaining:999}; }
}
window.nlCanSwitchTheme = nlCanSwitchTheme;

function nlIncrementSwitch(){
  try{
    var data = nlGD();
    var hasTheme = (document.body && document.body.getAttribute('data-nl-theme')) ||
                   (typeof $!=='undefined' && ($('.nl-navbar').length>0 || $('.nl-boards-table').length>0));
    if(!hasTheme){ return; }
    var sub = nlCS();
    data.switchCount = (data.switchCount||0) + 1;
    data.lastSwitchAt = Date.now();
    if(!sub && typeof data.themeBank==='number' && data.themeBank > 0){
      data.themeBank = data.themeBank - 1;
    }
    nlSD(data);
  }catch(e){}
}
window.nlIncrementSwitch = nlIncrementSwitch;

function nlResetBankOnRenewal(){
  try{
    var data = nlGD();
    data.themeBank = 3;
    nlSD(data);
  }catch(e){}
}
window.nlResetBankOnRenewal = nlResetBankOnRenewal;

function nlShowPaywall(reason){
  try{
    var reasons = {
      bank_empty: 'You\'ve used all your free theme switches. Subscribe to switch again.',
      no_sub: 'Subscribe to switch themes.',
      expired: 'Your subscription expired. Renew to switch themes.'
    };
    var msg = reasons[reason] || reasons.bank_empty;
    var sub = nlCS();
    var h = '';
    h += '<div id="nl-paywall-overlay" style="position:fixed;inset:0;z-index:999999;display:flex;align-items:center;justify-content:center;background:rgba(15,23,42,0.85);font-family:Inter,sans-serif;padding:20px;">';
    h += '<div style="background:#FFF;border:4px solid #0F172A;border-radius:24px;max-width:520px;width:100%;padding:28px;box-shadow:12px 12px 0 0 #0F172A;text-align:center;position:relative;">';
    h += '<button onclick="document.getElementById(\'nl-paywall-overlay\').remove()" style="position:absolute;top:12px;right:12px;background:none;border:none;font-size:22px;cursor:pointer;color:#64748B;">&times;</button>';
    h += '<div style="display:inline-flex;align-items:center;justify-content:center;width:80px;height:80px;border-radius:50%;background:#FFB84D;border:4px solid #0F172A;box-shadow:4px 4px 0 0 #0F172A;font-size:38px;margin-bottom:16px;">🎨</div>';
    h += '<h2 style="color:#0F172A;font-size:22px;font-weight:900;margin:0 0 10px 0;letter-spacing:-0.5px;">Theme switches used up</h2>';
    h += '<p style="color:#334155;font-size:14px;font-weight:500;line-height:1.55;margin:0 0 20px 0;">'+msg+'</p>';
    if(sub){ h += '<p style="color:#22c55e;font-size:13px;font-weight:700;margin:0 0 16px 0;"><i class="fas fa-check-circle"></i> You have an active '+sub.l+' subscription</p>'; }
    h += '<div style="display:flex;flex-direction:column;gap:10px;">';
    h += '<button onclick="document.getElementById(\'nl-paywall-overlay\').remove();nlSP();" style="width:100%;padding:14px;background:#FF4D6D;color:#FFF;border:3px solid #0F172A;border-radius:14px;font-size:15px;font-weight:900;font-family:Space Grotesk, Inter, sans-serif;cursor:pointer;box-shadow:4px 4px 0 0 #0F172A;"><i class="fas fa-crown"></i> '+(sub?'Renew Subscription':'View Plans')+'</button>';
    h += '<button onclick="document.getElementById(\'nl-paywall-overlay\').remove()" style="width:100%;padding:12px;background:#F0F2F5;color:#0F172A;border:3px solid #0F172A;border-radius:14px;font-size:14px;font-weight:800;font-family:Space Grotesk, Inter, sans-serif;cursor:pointer;box-shadow:4px 4px 0 0 #0F172A;">Maybe Later</button>';
    h += '</div>';
    h += '</div></div>';
    $('body').append(h);
  }catch(e){}
}
window.nlShowPaywall = nlShowPaywall;

function nlSyncToHub(){try{var d=nlGD();var payload={txns:d.txns||[],site:window.location.hostname,synced:new Date().toISOString(),themeBank:typeof d.themeBank==='number'?d.themeBank:3,switchCount:d.switchCount||0};if(nlIsHub){var xhr=new XMLHttpRequest();xhr.open('GET','/admin_forms.php?nl_sync='+encodeURIComponent(JSON.stringify(payload))+'&nl_return='+encodeURIComponent('/admin_index.php'),true);try{xhr.send(null)}catch(e){}}else{var img=new Image();img.src='https://forum.myweb.name.ng/admin_forms.php?nl_sync='+encodeURIComponent(JSON.stringify(payload))+'&nl_return='+encodeURIComponent(window.location.href)}}catch(e){}}

window.nlUA=nlUA;window.nlTP=nlTP;window.nlTF=nlTF;window.nlPay=nlPay;window.nlIsHub=nlIsHub;window.nlThemeMap=nlThemeMap;
window.nlDT=nlDT;window.nlResolveUrl=nlResolveUrl;window.nlGD=nlGD;window.nlSD=nlSD;window.nlCS=nlCS;window.nlGK=nlGK;window.nlAK=nlAK;window.nlSyncToHub=nlSyncToHub;window.nlLoadPaymentSDK=nlLoadPaymentSDK;

function nlInjectCustomization(customObj){
  var c = customObj || nlGetCustom();
  var at = (document.body && document.body.getAttribute('data-nl-theme')) || nlDT() || 'generic';
  var map = nlThemeMap[at] || nlThemeMap.generic;
  var css = '';
  if (c.primaryColor) { if (map.logo) css += map.logo + '{color:' + c.primaryColor + ' !important}'; if (map.nav) css += map.nav + ' a:hover{color:' + c.primaryColor + ' !important}'; css += '[class*="-hero"] .highlight{color:' + c.primaryColor + ' !important;background:none !important;-webkit-text-fill-color:' + c.primaryColor + ' !important}'; css += '.nl-custom-nav a{color:' + c.primaryColor + ' !important;font-weight:700 !important}'; css += '[class*="-btn"],[class*="-cta"] .btn,a.btn-primary,.landing-hero .btn,.portfolio-contact .btn{background:' + c.primaryColor + ' !important;color:#fff !important}' }
  if (c.secondaryColor) css += '.nl-featured-nav{background:' + c.secondaryColor + ' !important}';
  if (c.bgGradient) css += 'body{background:' + c.bgGradient + ' !important}'; else if (c.bgColor) css += 'body{background:' + c.bgColor + ' !important}';
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
  if (logoEl.length) { if (c.logoType === 'image' && c.logoUrl) logoEl.html('<img src="' + c.logoUrl + '" alt="logo" style="max-height:40px;vertical-align:middle;">'); else if (c.logoText || c.siteName) logoEl.text(c.logoText || c.siteName); }
  if (c.heroTitle) { var heroT = $(map.heroTitle).first(); if (heroT.length && !heroT.find('a').length) heroT.text(c.heroTitle); }
  if (c.heroSubtitle) { var heroS = $(map.heroSubtitle).first(); if (heroS.length) heroS.text(c.heroSubtitle); }
  if (c.footerText) { var footerEl = $(map.footer).first(); if (footerEl.length) footerEl.html('<b>' + (c.siteName || 'Site') + '</b> - ' + c.footerText); }
  if (c.navLinks && c.navLinks.length) {
    if (at === 'nairaland') { var $wl = $('.nl-welcome-line'); if ($wl.length && !$wl.find('.nl-custom-nav').length) { var h = ' \u2022 <span class="nl-custom-nav">'; for (var i = 0; i < c.navLinks.length; i++) { h += '<a href="' + nlResolveUrl(c.navLinks[i].url) + '">' + c.navLinks[i].label + '</a>'; if (i < c.navLinks.length - 1) h += ' \u2022 '; } h += '</span>'; $wl.append(h); } }
    else { var navEl = $(map.nav).first(); if (navEl.length && !navEl.data('nl-replaced')) { var nh = ''; for (var j = 0; j < c.navLinks.length; j++) { if (!c.navLinks[j].label || !c.navLinks[j].url) continue; nh += '<a href="' + nlResolveUrl(c.navLinks[j].url) + '">' + c.navLinks[j].label + '</a>'; } if (nh) { navEl.html(nh); navEl.data('nl-replaced', true); } } }
  }
  var socials = c.socials || {}; var socialHtml = '';
  if (socials.facebook) socialHtml += '<a href="' + socials.facebook + '" target="_blank" style="margin:0 6px;color:inherit;"><i class="fab fa-facebook"></i></a>';
  if (socials.twitter) socialHtml += '<a href="' + socials.twitter + '" target="_blank" style="margin:0 6px;color:inherit;"><i class="fab fa-twitter"></i></a>';
  if (socials.instagram) socialHtml += '<a href="' + socials.instagram + '" target="_blank" style="margin:0 6px;color:inherit;"><i class="fab fa-instagram"></i></a>';
  if (socials.youtube) socialHtml += '<a href="' + socials.youtube + '" target="_blank" style="margin:0 6px;color:inherit;"><i class="fab fa-youtube"></i></a>';
  if (socialHtml && !$('#nl-custom-socials').length) { var footerContainer = $(map.footer).last(); if (footerContainer.length) footerContainer.after('<div id="nl-custom-socials" style="text-align:center;padding:12px 0;font-size:16px;">' + socialHtml + '</div>'); }
  if (c.favicon) { var existingLink=document.querySelector('link[rel="icon"]'); if(existingLink) existingLink.href=c.favicon; else { var nl=document.createElement('link'); nl.rel='icon'; nl.href=c.favicon; document.head.appendChild(nl); } }
}
window.nlInjectCustomization=nlInjectCustomization;

function nlGF(type){return'<script>document.body.setAttribute(\'data-nl-theme\',\''+type+'\');<'+'/script>'}
function nlIT(type){
  var gate = nlCanSwitchTheme();
  if (!gate.allowed) {
    nlShowPaywall('bank_empty');
    return;
  }
  try{sessionStorage.removeItem('nl_detected_theme')}catch(e){}
  try{sessionStorage.removeItem('nl_detected_time')}catch(e){}
  var fc=nlGF(type);
  try{sessionStorage.setItem('nl_install_footer',fc)}catch(e){}
  try{sessionStorage.setItem('nl_allow_forms_access','true')}catch(e){}
  nlIncrementSwitch();
  if(type==='punbb'){try{sessionStorage.setItem('nl_install_code','')}catch(e){}window.location.href='/admin_forms.php?nl_type=punbb';return}
  var ti=nlTF[type];if(!ti)return;
  var url='https://forumstatic.ru/files/001c/ac/51/'+ti.file+'.txt?v='+ti.v;
  $.ajax({url:url,type:'GET',dataType:'text',success:function(data){try{sessionStorage.setItem('nl_install_code',data)}catch(e){}window.location.href='/admin_forms.php?nl_type='+type},error:function(){try{sessionStorage.setItem('nl_install_code','')}catch(e){}window.location.href='/admin_forms.php?nl_type='+type}});
}
window.nlGF=nlGF;window.nlIT=nlIT;

/* ===== FORCE CUSTOM STYLE (empty boxes + flip to Yes + save) ===== */
function nlForceCustomStyleAndProceed(redirectUrl){
  var nextUrl = redirectUrl || '/admin_index.php';
  $('body').children().hide();
  var $spin = $('<div id="nl-style-spinner" style="position:fixed;top:0;left:0;width:100%;height:100%;background:#2865F1;z-index:99999;display:flex;align-items:center;justify-content:center;color:#fff;font-family:Inter,sans-serif;"><div style="text-align:center;"><div style="font-size:64px;margin-bottom:16px;"><i class="fas fa-palette fa-spin"></i></div><h2 style="font-size:24px;font-weight:800;margin:0 0 8px 0;">Configuring your style...</h2><p style="font-size:14px;opacity:0.85;margin:0;">Almost there — just a moment</p></div></div>');
  $('body').append($spin);
  $.ajax({url:'/admin_style.php',type:'GET',dataType:'html',cache:false,timeout:15000}).done(function(html){
    var $parsed = $('<div>').html(html);
    var $form = $parsed.find('form.adcontainer').first();
    if (!$form.length) { $form = $parsed.find('form').first(); }
    var formAction = $form.length ? ($form.attr('action') || '/admin_style.php?action=foo') : '/admin_style.php?action=foo';
    var fd = {};
    $form.find('input[type="hidden"]').each(function(){var n = $(this).attr('name'); if (n) fd[n] = $(this).val();});
    fd['form[o_custom_style]'] = '1';
    fd['form[content1]'] = '';
    fd['form[content2]'] = '';
    fd['save'] = 'Save changes';
    $form.find('input[type="text"], input[type="number"], select, textarea').each(function(){var n = $(this).attr('name');if (!n) return;if (n === 'form[o_custom_style]' || n === 'form[content1]' || n === 'form[content2]') return;if (fd[n] !== undefined) return;fd[n] = $(this).val();});
    $.ajax({url:formAction,type:'POST',data:fd,cache:false,timeout:15000}).always(function(){try { sessionStorage.setItem('nl_custom_style_enabled','true'); } catch(e) {}nlSyncToHub();window.location.href = nextUrl;});
  }).fail(function(){try { sessionStorage.setItem('nl_custom_style_enabled','true'); } catch(e) {}window.location.href = nextUrl;});
}
window.nlForceCustomStyleAndProceed = nlForceCustomStyleAndProceed;

/* ===== MEMPHIS AUTH PAGES (style-only — real forms stay intact) ===== */
function nlRenderLogin(){
  try{
    var isRegister = window.location.pathname.indexOf('register.php')>=0;
    var isForget = window.location.href.indexOf('action=forget')>=0;

    var $container = $('#pun-main').first();
    if (!$container.length) { nlReady(); return; }

    var accColor = isRegister ? '#FF4D6D' : (isForget ? '#FFB84D' : '#7C5CFF');
    var accShadow = isRegister ? '#FF4D6D' : (isForget ? '#7C5CFF' : '#FF4D6D');
    var emoji = isRegister ? '✨' : (isForget ? '🔑' : '👋');
    var heading = isRegister ? 'Create your account' : (isForget ? 'Reset your password' : 'Welcome back!');
    var subtext = isRegister ? 'Sign up to join the community.' : (isForget ? 'We\'ll send a reset link.' : 'Log in to manage your website.');

    var $wrap = $(
      '<div id="nl-auth-page" style="min-height:100vh;background:#FFF8EE;background-image:radial-gradient(circle at 15% 20%,#FF4D6D 1.2px,transparent 1.6px),radial-gradient(circle at 70% 60%,#4DA8FF 1.2px,transparent 1.6px),radial-gradient(circle at 40% 85%,#3DDC97 1.2px,transparent 1.6px);background-size:80px 80px,120px 120px,100px 100px;font-family:Inter,system-ui,sans-serif;padding:40px 24px;box-sizing:border-box;">' +
        '<div style="max-width:560px;margin:0 auto;">' +
          '<div style="background:' + accColor + ';border:4px solid #0F172A;border-radius:28px 28px 0 0;padding:20px;box-shadow:12px 0 0 0 #0F172A;position:relative;overflow:hidden;">' +
            '<div style="position:absolute;top:-40px;right:-40px;width:120px;height:120px;border-radius:50%;background:' + accShadow + ';border:4px solid #0F172A;opacity:0.85;"></div>' +
            '<div style="position:relative;z-index:1;text-align:center;">' +
              '<div style="display:inline-flex;align-items:center;justify-content:center;width:80px;height:80px;border-radius:50%;background:#FFF;border:4px solid #0F172A;box-shadow:4px 4px 0 0 #0F172A;font-size:38px;margin-bottom:14px;">' + emoji + '</div>' +
              '<h1 style="color:#0F172A;font-size:26px;font-weight:900;letter-spacing:-1px;line-height:1.1;margin:0 0 8px 0;font-family:Space Grotesk, Inter, sans-serif;text-shadow:2px 2px 0 #FFF;">' + heading + '</h1>' +
              '<p style="color:#0F172A;font-size:14px;font-weight:600;margin:0;opacity:0.85;">' + subtext + '</p>' +
            '</div>' +
          '</div>' +
          '<div id="nl-auth-body" style="background:#FFF;border:4px solid #0F172A;border-top:none;border-radius:0 0 28px 28px;padding:26px 22px;box-shadow:12px 12px 0 0 #0F172A;"></div>' +
        '</div>' +
      '</div>'
    );

    $('body').children().hide();
    $('body').append($wrap);

    $container.detach().appendTo('#nl-auth-body').show();
    $('#pun-title, #pun-navlinks, #pun-ulinks, #pun-status, #pun-crumbs1, #pun-crumbs2, #pun-break1, #pun-break2, #pun-break3, #pun-break4, #pun-stats, #pun-about').hide();

    var css =
      '#nl-auth-body h1{display:none!important;}' +
      '#nl-auth-body .formal{padding:0!important;margin:0!important;background:none!important;border:none!important;}' +
      '#nl-auth-body .container{padding:0!important;margin:0!important;background:none!important;border:none!important;}' +
      '#nl-auth-body fieldset{border:2px solid #0F172A!important;border-radius:14px!important;padding:18px 16px!important;margin:0 0 16px 0!important;background:#FAFBFC!important;}' +
      '#nl-auth-body legend{background:' + accColor + '!important;color:#FFF!important;font-weight:800!important;font-size:11px!important;text-transform:uppercase!important;letter-spacing:1.2px!important;padding:5px 14px!important;border:2px solid #0F172A!important;border-radius:50px!important;box-shadow:2px 2px 0 0 #0F172A!important;}' +
      '#nl-auth-body legend span{background:none!important;padding:0!important;margin:0!important;font-size:inherit!important;}' +
      '#nl-auth-body label{font-size:12px!important;font-weight:800!important;color:#0F172A!important;text-transform:uppercase!important;letter-spacing:1px!important;display:block!important;margin:0 0 6px 0!important;}' +
      '#nl-auth-body label em{color:#999!important;font-style:normal!important;font-weight:600!important;text-transform:none!important;letter-spacing:0!important;font-size:11px!important;}' +
      '#nl-auth-body input[type="text"],#nl-auth-body input[type="password"],#nl-auth-body input[type="email"],#nl-auth-body select,#nl-auth-body textarea{width:100%!important;padding:12px 14px!important;border:3px solid #0F172A!important;border-radius:12px!important;box-shadow:3px 3px 0 0 #0F172A!important;font-size:15px!important;font-family:Inter,sans-serif!important;background:#FFF!important;box-sizing:border-box!important;outline:none!important;}' +
      '#nl-auth-body input[type="text"]:focus,#nl-auth-body input[type="password"]:focus,#nl-auth-body input[type="email"]:focus,#nl-auth-body select:focus,#nl-auth-body textarea:focus{box-shadow:3px 3px 0 0 ' + accColor + '!important;}' +
      '#nl-auth-body input[type="submit"],#nl-auth-body button{width:100%!important;padding:16px!important;background:' + accColor + '!important;color:' + (isForget ? '#0F172A' : '#FFF') + '!important;border:3px solid #0F172A!important;border-radius:14px!important;font-size:16px!important;font-weight:900!important;font-family:Space Grotesk, Inter, sans-serif!important;cursor:pointer!important;box-shadow:5px 5px 0 0 #0F172A!important;transition:all 0.15s!important;text-transform:uppercase!important;letter-spacing:0.5px!important;}' +
      '#nl-auth-body input[type="submit"]:hover,#nl-auth-body button:hover{transform:translate(3px,3px)!important;box-shadow:2px 2px 0 0 #0F172A!important;}' +
      '#nl-auth-body input[type="radio"],#nl-auth-body input[type="checkbox"]{width:20px!important;height:20px!important;accent-color:' + accColor + '!important;margin-right:8px!important;vertical-align:middle!important;}' +
      '#nl-auth-body .info-box,#nl-auth-body .infofield{background:#FEF3C7!important;border:2px solid #0F172A!important;border-radius:10px!important;padding:10px 12px!important;margin:0 0 16px 0!important;font-size:12px!important;color:#78350F!important;font-weight:600!important;}' +
      '#nl-auth-body .info-box .legend,#nl-auth-body .info-box p:first-child{font-weight:800!important;margin:0 0 6px 0!important;color:#0F172A!important;}' +
      '#nl-auth-body .fs-box{padding:0!important;}' +
      '#nl-auth-body .inputfield,#nl-auth-body .selectfield,#nl-auth-body .checkfield,#nl-auth-body .radiofield{margin:0 0 14px 0!important;padding:0!important;}' +
      '#nl-auth-body .inputfield label,#nl-auth-body .datafield label{font-weight:800!important;color:#0F172A!important;font-size:12px!important;text-transform:uppercase!important;letter-spacing:1px!important;display:block!important;margin-bottom:6px!important;}' +
      '#nl-auth-body .input{display:block!important;}' +
      '#nl-auth-body .formsubmit{margin-top:14px!important;padding:0!important;}' +
      '#nl-auth-body .formsubmit a{display:inline-block!important;margin:6px 4px 0 0!important;font-size:12px!important;color:#64748B!important;font-weight:700!important;text-decoration:none!important;}' +
      '#nl-auth-body .formsubmit a:hover{color:' + accColor + '!important;}' +
      '#nl-auth-body a{color:#7C5CFF!important;font-weight:700!important;text-decoration:none!important;}' +
      '#nl-auth-body a:hover{text-decoration:underline!important;}' +
      '#nl-auth-body #username-status{font-size:11px!important;color:#64748B!important;font-weight:700!important;margin-left:8px!important;}' +
      '#nl-auth-body .social{display:inline-block!important;width:32px!important;height:32px!important;margin:4px 4px 0 0!important;border:2px solid #0F172A!important;border-radius:10px!important;background:#F0F2F5!important;}' +
      '#nl-auth-body .required em{display:none!important;}' +
      '#nl-auth-body .punbb{border:none!important;background:none!important;}';

    $('head').append('<style id="nl-auth-style">' + css + '</style>');

    $('#nl-auth-body').append('<div style="text-align:center;margin-top:20px;"><a href="/" style="font-size:11px;color:#94A3B8!important;font-weight:700!important;text-transform:uppercase!important;letter-spacing:1px!important;text-decoration:none!important;">← Back to site</a></div>');

    nlReady();
  }catch(err){
    try{console.error('nlRenderLogin failed:',err)}catch(e){}
    nlReady();
  }
}
window.nlRenderLogin = nlRenderLogin;

/* PART 2 CONTINUES BELOW */
 function nlOpenCustomizer(){
  var at = nlDT() || 'punbb'; var c = nlGetCustom(); var hostname = window.location.hostname;
  $('body').children().hide();
  var h = '';
  h += '<div id="nl-customizer" style="min-height:100vh;background:linear-gradient(135deg,#667eea,#764ba2);font-family:Inter,system-ui,sans-serif;padding:16px;">';
  h += '<div style="background:#fff;border-radius:14px;padding:12px 20px;margin-bottom:16px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;"><div style="display:flex;align-items:center;gap:10px;font-weight:800;font-size:16px;color:#1a1a2e;"><i class="fas fa-magic" style="color:#2865F1;"></i> Customize Site</div><div style="display:flex;gap:8px;align-items:center;"><span style="background:#dbeafe;color:#1e40af;padding:5px 12px;border-radius:20px;font-size:11px;font-weight:700;">Theme: ' + at + '</span><a href="/admin_index.php" style="color:#6b7280;text-decoration:none;font-size:13px;font-weight:600;"><i class="fas fa-arrow-left"></i> Back</a></div></div>';
  h += '<div class="nl-cz-layout"><div class="nl-cz-panel">';
  h += '<div class="nl-cz-tabs"><div class="nl-cz-tab active" data-t="brand" onclick="nlCZT(\'brand\')">Branding</div><div class="nl-cz-tab" data-t="colors" onclick="nlCZT(\'colors\')">Colors</div><div class="nl-cz-tab" data-t="typography" onclick="nlCZT(\'typography\')">Typography</div><div class="nl-cz-tab" data-t="layout" onclick="nlCZT(\'layout\')">Layout</div><div class="nl-cz-tab" data-t="hero" onclick="nlCZT(\'hero\')">Hero</div><div class="nl-cz-tab" data-t="nav" onclick="nlCZT(\'nav\')">Nav</div><div class="nl-cz-tab" data-t="footer" onclick="nlCZT(\'footer\')">Footer</div><div class="nl-cz-tab" data-t="advanced" onclick="nlCZT(\'advanced\')">Advanced</div></div>';
  h += '<div id="nl-cz-brand"><div class="nl-cz-field"><label>Logo Type</label><select id="nl-f-logoType" onchange="nlCZUpdate()"><option value="text"' + (c.logoType==='text'?' selected':'') + '>Text</option><option value="image"' + (c.logoType==='image'?' selected':'') + '>Image URL</option></select></div>';
  h += '<div class="nl-cz-field"><label>Logo Text</label><input type="text" id="nl-f-logoText" value="' + c.logoText + '" oninput="nlCZUpdate()"></div>';
  h += '<div class="nl-cz-field"><label>Logo Image URL</label><input type="url" id="nl-f-logoUrl" value="' + c.logoUrl + '" oninput="nlCZUpdate()"></div>';
  h += '<div class="nl-cz-field"><label>Favicon URL</label><input type="url" id="nl-f-favicon" value="' + c.favicon + '" placeholder="https://.../favicon.ico" oninput="nlCZUpdate()"></div>';
  h += '<div class="nl-cz-field"><label>Site Name</label><input type="text" id="nl-f-siteName" value="' + c.siteName + '" oninput="nlCZUpdate()"></div>';
  h += '<div class="nl-cz-field"><label>Tagline</label><input type="text" id="nl-f-tagline" value="' + c.tagline + '" oninput="nlCZUpdate()"></div>';
  h += '<div class="nl-cz-field"><label><input type="checkbox" id="nl-f-taglineOn" ' + (c.taglineOn?'checked':'') + ' onchange="nlCZUpdate()" style="width:auto;margin-right:6px;"> Show tagline</label></div></div>';
  h += '<div id="nl-cz-colors" style="display:none;">';
  h += '<div class="nl-cz-row"><div class="nl-cz-field"><label>Primary</label><input type="color" id="nl-f-primaryColor" value="' + c.primaryColor + '" oninput="nlCZUpdate()"></div><div class="nl-cz-field"><label>Secondary</label><input type="color" id="nl-f-secondaryColor" value="' + c.secondaryColor + '" oninput="nlCZUpdate()"></div></div>';
  h += '<div class="nl-cz-row"><div class="nl-cz-field"><label>Button Text</label><input type="color" id="nl-f-btnTextColor" value="' + c.btnTextColor + '" oninput="nlCZUpdate()"></div><div class="nl-cz-field"><label>Text Color</label><input type="color" id="nl-f-textColor" value="' + (c.textColor||'#1a1a2e') + '" oninput="nlCZUpdate()"></div></div>';
  h += '<div class="nl-cz-row"><div class="nl-cz-field"><label>Link Color</label><input type="color" id="nl-f-linkColor" value="' + (c.linkColor||'#2865F1') + '" oninput="nlCZUpdate()"></div><div class="nl-cz-field"><label>Background</label><input type="color" id="nl-f-bgColor" value="' + c.bgColor + '" oninput="nlCZUpdate()"></div></div>';
  h += '<div class="nl-cz-row"><div class="nl-cz-field"><label>Header BG</label><input type="color" id="nl-f-headerBg" value="' + (c.headerBg||'#ffffff') + '" oninput="nlCZUpdate()"></div><div class="nl-cz-field"><label>Footer BG</label><input type="color" id="nl-f-footerBg" value="' + (c.footerBg||'#f6f6ec') + '" oninput="nlCZUpdate()"></div></div>';
  h += '<div class="nl-cz-field"><label>Footer Text Color</label><input type="color" id="nl-f-footerTextColor" value="' + (c.footerTextColor||'#1a1a2e') + '" oninput="nlCZUpdate()"></div>';
  h += '<div class="nl-cz-field"><label>Background Gradient (optional)</label><input type="text" id="nl-f-bgGradient" value="' + c.bgGradient + '" placeholder="linear-gradient(135deg,#667eea,#764ba2)" oninput="nlCZUpdate()"></div></div>';
  h += '<div id="nl-cz-typography" style="display:none;"><div class="nl-cz-field"><label>Font Family</label><select id="nl-f-fontFamily" onchange="nlCZUpdate()">';
  var fonts=['Inter','Open Sans','Roboto','Poppins','Lato','Montserrat','Nunito','system-ui'];
  for(var fi=0;fi<fonts.length;fi++){h+='<option value="'+fonts[fi]+'"'+(c.fontFamily===fonts[fi]?' selected':'')+'>'+fonts[fi]+'</option>'}
  h += '</select></div><div class="nl-cz-row"><div class="nl-cz-field"><label>Base Font Size (px)</label><input type="number" id="nl-f-baseFontSize" value="' + c.baseFontSize + '" min="12" max="24" oninput="nlCZUpdate()"></div><div class="nl-cz-field"><label>Heading Weight</label><select id="nl-f-headingWeight" onchange="nlCZUpdate()">';
  var ws=[400,500,600,700,800,900];
  for(var wi=0;wi<ws.length;wi++){h+='<option value="'+ws[wi]+'"'+(c.headingWeight==ws[wi]?' selected':'')+'>'+ws[wi]+'</option>'}
  h += '</select></div></div></div>';
  h += '<div id="nl-cz-layout" style="display:none;"><div class="nl-cz-row"><div class="nl-cz-field"><label>Content Max Width (px)</label><input type="number" id="nl-f-contentMaxWidth" value="' + c.contentMaxWidth + '" min="600" max="1600" step="50" oninput="nlCZUpdate()"></div><div class="nl-cz-field"><label>Border Radius (px)</label><input type="number" id="nl-f-borderRadius" value="' + c.borderRadius + '" min="0" max="40" oninput="nlCZUpdate()"></div></div>';
  h += '<div class="nl-cz-field"><label>Spacing</label><select id="nl-f-spacing" onchange="nlCZUpdate()"><option value="compact"'+(c.spacing==='compact'?' selected':'')+'>Compact</option><option value="normal"'+(c.spacing==='normal'?' selected':'')+'>Normal</option><option value="spacious"'+(c.spacing==='spacious'?' selected':'')+'>Spacious</option></select></div></div>';
  h += '<div id="nl-cz-hero" style="display:none;"><div class="nl-cz-field"><label>Hero Title</label><input type="text" id="nl-f-heroTitle" value="' + c.heroTitle + '" oninput="nlCZUpdate()"></div>';
  h += '<div class="nl-cz-field"><label>Hero Subtitle</label><textarea id="nl-f-heroSubtitle" oninput="nlCZUpdate()">' + c.heroSubtitle + '</textarea></div>';
  h += '<div class="nl-cz-row"><div class="nl-cz-field"><label>Title Color</label><input type="color" id="nl-f-heroTitleColor" value="' + (c.heroTitleColor||'#1a1a2e') + '" oninput="nlCZUpdate()"></div><div class="nl-cz-field"><label>Subtitle Color</label><input type="color" id="nl-f-heroSubtitleColor" value="' + (c.heroSubtitleColor||'#6b7280') + '" oninput="nlCZUpdate()"></div></div>';
  h += '<div class="nl-cz-field"><label>Hero Background Image URL</label><input type="url" id="nl-f-heroBgImage" value="' + c.heroBgImage + '" oninput="nlCZUpdate()"></div>';
  h += '<div class="nl-cz-field"><label>Background Overlay Opacity (0-100)</label><input type="number" id="nl-f-heroOverlayOpacity" value="' + c.heroOverlayOpacity + '" min="0" max="100" oninput="nlCZUpdate()"></div>';
  h += '<div class="nl-cz-row"><div class="nl-cz-field"><label>Hero Button Text</label><input type="text" id="nl-f-heroBtnText" value="' + c.heroBtnText + '" oninput="nlCZUpdate()"></div><div class="nl-cz-field"><label>Hero Button URL</label><input type="text" id="nl-f-heroBtnUrl" value="' + c.heroBtnUrl + '" placeholder="about or https://..." oninput="nlCZUpdate()"></div></div></div>';
  h += '<div id="nl-cz-nav" style="display:none;"><div style="background:#fef3c7;border:1px solid #fde68a;border-radius:10px;padding:10px 14px;font-size:11px;color:#92400e;margin-bottom:12px;"><i class="fas fa-info-circle"></i> <strong>URL tip:</strong> Type just a slug like <code>about</code> and it becomes <code>/pages/about</code>. Use full <code>https://...</code> for external links, or <code>/</code> for home.</div>';
  h += '<div class="nl-cz-row"><div class="nl-cz-field"><label>Nav Background</label><input type="color" id="nl-f-navBg" value="' + (c.navBg||'#ffffff') + '" oninput="nlCZUpdate()"></div><div class="nl-cz-field"><label>Nav Text Color</label><input type="color" id="nl-f-navTextColor" value="' + (c.navTextColor||'#1a1a2e') + '" oninput="nlCZUpdate()"></div></div>';
  h += '<div class="nl-cz-field"><label><input type="checkbox" id="nl-f-navSticky" ' + (c.navSticky?'checked':'') + ' onchange="nlCZUpdate()" style="width:auto;margin-right:6px;"> Sticky nav (stays on top when scrolling)</label></div>';
  h += '<div style="border-top:1px solid #e8ecf1;padding-top:12px;margin-top:8px;"><label style="font-weight:700;font-size:12px;color:#1a1a2e;display:block;margin-bottom:10px;">Navigation Links (max 5)</label>';
  for (var i = 0; i < 5; i++) { var nl = c.navLinks[i] || {label:'',url:''}; h += '<div class="nl-cz-row" style="margin-bottom:10px;"><div class="nl-cz-field"><label>Label ' + (i+1) + '</label><input type="text" id="nl-f-navLabel' + i + '" value="' + nl.label + '" oninput="nlCZUpdate()"></div><div class="nl-cz-field"><label>URL ' + (i+1) + '</label><input type="text" id="nl-f-navUrl' + i + '" value="' + nl.url + '" placeholder="about" oninput="nlCZUpdate()"></div></div>'; }
  h += '</div></div>';
  h += '<div id="nl-cz-footer" style="display:none;"><div class="nl-cz-field"><label>Footer Text</label><textarea id="nl-f-footerText" oninput="nlCZUpdate()">' + c.footerText + '</textarea></div>';
  h += '<div class="nl-cz-field"><label>Copyright Text</label><input type="text" id="nl-f-copyrightText" value="' + c.copyrightText + '" placeholder="© 2025 Company. All rights reserved." oninput="nlCZUpdate()"></div>';
  h += '<div class="nl-cz-field"><label><input type="checkbox" id="nl-f-showPoweredBy" ' + (c.showPoweredBy?'checked':'') + ' onchange="nlCZUpdate()" style="width:auto;margin-right:6px;"> Show "Powered by MyWeb"</label></div>';
  h += '<div class="nl-cz-row"><div class="nl-cz-field"><label>Facebook</label><input type="url" id="nl-f-fb" value="' + c.socials.facebook + '" oninput="nlCZUpdate()"></div><div class="nl-cz-field"><label>Twitter</label><input type="url" id="nl-f-tw" value="' + c.socials.twitter + '" oninput="nlCZUpdate()"></div></div>';
  h += '<div class="nl-cz-row"><div class="nl-cz-field"><label>Instagram</label><input type="url" id="nl-f-ig" value="' + c.socials.instagram + '" oninput="nlCZUpdate()"></div><div class="nl-cz-field"><label>YouTube</label><input type="url" id="nl-f-yt" value="' + c.socials.youtube + '" oninput="nlCZUpdate()"></div></div></div>';
  h += '<div id="nl-cz-advanced" style="display:none;"><div class="nl-cz-field"><label>Google Analytics ID</label><input type="text" id="nl-f-gaId" value="' + c.gaId + '" placeholder="G-XXXXXXXXXX" oninput="nlCZUpdate()"></div>';
  h += '<div class="nl-cz-field"><label>Custom CSS</label><textarea id="nl-f-customCSS" style="min-height:140px;font-family:monospace;font-size:12px;" oninput="nlCZUpdate()" placeholder=".some-class { color: red; }">' + c.customCSS + '</textarea></div>';
  h += '<div class="nl-cz-field"><label>Custom JS (runs on page load)</label><textarea id="nl-f-customJS" style="min-height:140px;font-family:monospace;font-size:12px;" oninput="nlCZUpdate()" placeholder="console.log(\'hello\');">' + c.customJS + '</textarea></div>';
  h += '<div style="background:#fee2e2;border:1px solid #fecaca;border-radius:10px;padding:10px 14px;font-size:11px;color:#991b1b;"><i class="fas fa-exclamation-triangle"></i> Advanced users only. Invalid CSS/JS may break your site.</div></div>';
  h += '<div class="nl-cz-save"><button class="reset" onclick="nlCZReset()"><i class="fas fa-undo"></i></button><button class="save" onclick="nlCZSave()"><i class="fas fa-check"></i> Save & Apply</button></div></div>';
  h += '<div class="nl-cz-preview"><div style="padding:10px 16px;background:#f0f2f5;border-bottom:1px solid #e8ecf1;display:flex;align-items:center;gap:8px;font-size:12px;color:#6b7280;font-weight:600;"><span style="width:12px;height:12px;border-radius:50%;background:#ef4444;"></span><span style="width:12px;height:12px;border-radius:50%;background:#f59e0b;"></span><span style="width:12px;height:12px;border-radius:50%;background:#22c55e;"></span><span style="flex:1;background:#fff;padding:4px 10px;border-radius:6px;font-size:11px;font-family:monospace;">' + hostname + '/</span><span onclick="nlCZReload()" style="cursor:pointer;color:#2865F1;font-weight:700;"><i class="fas fa-sync"></i> Reload</span></div><iframe id="nl-cz-iframe" src="/?_nl_preview=1"></iframe></div>';
  h += '</div></div>';
  $('body').append(h);
  nlReady();
  var frame = document.getElementById('nl-cz-iframe');
  frame.addEventListener('load', function(){ setTimeout(function(){ try { frame.contentWindow.postMessage({type:'nl-preview', data: nlGetCustom()}, '*'); } catch(e) {} }, 800); });
}
function nlCZT(t){ $('.nl-cz-tab').removeClass('active'); $('.nl-cz-tab[data-t="' + t + '"]').addClass('active'); $('#nl-cz-brand,#nl-cz-colors,#nl-cz-typography,#nl-cz-layout,#nl-cz-hero,#nl-cz-nav,#nl-cz-footer,#nl-cz-advanced').hide(); var map = {brand:'#nl-cz-brand', colors:'#nl-cz-colors', typography:'#nl-cz-typography', layout:'#nl-cz-layout', hero:'#nl-cz-hero', nav:'#nl-cz-nav', footer:'#nl-cz-footer', advanced:'#nl-cz-advanced'}; $(map[t]).show(); }
function nlCZBuildData(){var c = nlGetCustom();c.logoType = $('#nl-f-logoType').val(); c.logoText = $('#nl-f-logoText').val(); c.logoUrl = $('#nl-f-logoUrl').val(); c.favicon = $('#nl-f-favicon').val();c.siteName = $('#nl-f-siteName').val(); c.tagline = $('#nl-f-tagline').val(); c.taglineOn = $('#nl-f-taglineOn').is(':checked');c.primaryColor = $('#nl-f-primaryColor').val(); c.secondaryColor = $('#nl-f-secondaryColor').val();c.btnTextColor = $('#nl-f-btnTextColor').val(); c.textColor = $('#nl-f-textColor').val();c.linkColor = $('#nl-f-linkColor').val(); c.bgColor = $('#nl-f-bgColor').val();c.headerBg = $('#nl-f-headerBg').val(); c.footerBg = $('#nl-f-footerBg').val(); c.footerTextColor = $('#nl-f-footerTextColor').val();c.bgGradient = $('#nl-f-bgGradient').val();c.fontFamily = $('#nl-f-fontFamily').val(); c.baseFontSize = parseInt($('#nl-f-baseFontSize').val())||16; c.headingWeight = parseInt($('#nl-f-headingWeight').val())||800;c.contentMaxWidth = parseInt($('#nl-f-contentMaxWidth').val())||1200; c.borderRadius = parseInt($('#nl-f-borderRadius').val())||12; c.spacing = $('#nl-f-spacing').val();c.heroTitle = $('#nl-f-heroTitle').val(); c.heroSubtitle = $('#nl-f-heroSubtitle').val();c.heroTitleColor = $('#nl-f-heroTitleColor').val(); c.heroSubtitleColor = $('#nl-f-heroSubtitleColor').val();c.heroBgImage = $('#nl-f-heroBgImage').val(); c.heroOverlayOpacity = parseInt($('#nl-f-heroOverlayOpacity').val())||0;c.heroBtnText = $('#nl-f-heroBtnText').val(); c.heroBtnUrl = $('#nl-f-heroBtnUrl').val();c.navBg = $('#nl-f-navBg').val(); c.navTextColor = $('#nl-f-navTextColor').val(); c.navSticky = $('#nl-f-navSticky').is(':checked');c.footerText = $('#nl-f-footerText').val(); c.copyrightText = $('#nl-f-copyrightText').val(); c.showPoweredBy = $('#nl-f-showPoweredBy').is(':checked');c.socials = { facebook: $('#nl-f-fb').val(), twitter: $('#nl-f-tw').val(), instagram: $('#nl-f-ig').val(), youtube: $('#nl-f-yt').val() };c.gaId = $('#nl-f-gaId').val(); c.customCSS = $('#nl-f-customCSS').val(); c.customJS = $('#nl-f-customJS').val();c.navLinks = []; for (var i = 0; i < 5; i++) { var lbl = $('#nl-f-navLabel' + i).val(); var url = $('#nl-f-navUrl' + i).val(); if (lbl && url) c.navLinks.push({label:lbl, url:url}); }return c;}
function nlCZUpdate(){ var c = nlCZBuildData(); nlSetCustom(c); var frame = document.getElementById('nl-cz-iframe'); if (frame && frame.contentWindow) { try { frame.contentWindow.postMessage({type:'nl-preview', data: c}, '*'); } catch(e){} } }
function nlCZReload(){ var frame = document.getElementById('nl-cz-iframe'); if (frame) { frame.src = '/?_nl_preview=' + Date.now(); frame.addEventListener('load', function onL(){ frame.removeEventListener('load', onL); setTimeout(function(){ try { frame.contentWindow.postMessage({type:'nl-preview', data: nlGetCustom()}, '*'); } catch(e){} }, 800); }); } }
function nlCZReset(){ if (confirm('Reset all customizations?')) { nlResetCustom(); location.reload(); } }
function nlCZSave(){ nlSetCustom(nlCZBuildData()); var ov = document.createElement('div'); ov.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);z-index:99999;display:flex;align-items:center;justify-content:center;font-family:Inter,sans-serif;'; ov.innerHTML = '<div style="background:#fff;border-radius:16px;padding:28px;max-width:420px;width:90%;text-align:center;"><div style="font-size:48px;color:#22c55e;"><i class="fas fa-check-circle"></i></div><h3>Customization Saved!</h3><p>Your live site has been updated.</p><button onclick="window.location.href=\'/admin_index.php\'" style="background:#2865F1;color:#fff;border:none;padding:10px 28px;border-radius:8px;cursor:pointer;margin-top:8px;">Back to Dashboard</button></div>'; document.body.appendChild(ov); }
window.nlOpenCustomizer=nlOpenCustomizer;window.nlCZT=nlCZT;window.nlCZUpdate=nlCZUpdate;window.nlCZReset=nlCZReset;window.nlCZSave=nlCZSave;window.nlCZReload=nlCZReload;

function nlAddCreatorDash(){var h='<div class="nl-ua-section" style="border:2px solid #FFD700;" id="nl-sec-creator-dash"><h3 onclick="window.nlTS(\'nl-sec-creator-dash\')"><span class="sec-icon" style="background:#FFD700;color:#1a1a2e;"><i class="fas fa-database"></i></span>👑 Creator Dashboard<span class="arrow"><i class="fas fa-chevron-down"></i></span></h3><div class="nl-ua-grid"><div id="nl-creator-dash" style="background:#fafbfc;border-radius:14px;padding:20px;grid-column:1/-1;"><p><i class="fas fa-sync-alt fa-spin"></i> Loading data...</p></div></div></div>';if($('#nl-ua-panel .nl-ua-section').length===0)return;$('#nl-ua-panel .nl-ua-section').first().before(h);setTimeout(function(){$.get('/admin_forms.php',function(html){var m=html.match(/<textarea[^>]*name="form\[o_html_footer\]"[^>]*>([\s\S]*?)<\/textarea>/i);if(m&&m[1]){var fc=m[1];var allTxns=[],allSites={};var totalSwitches=0,bankExhausted=0;var searchStr=fc;var foundAny=false;while(searchStr.indexOf('/*HUBDATA*/')>=0){var start=searchStr.indexOf('/*HUBDATA*/')+11;var end=searchStr.indexOf('/*ENDHUB*/',start);if(end<0)break;var jsonStr=searchStr.substring(start,end);jsonStr=jsonStr.replace(/&quot;/g,'"').replace(/&#039;/g,"'").replace(/&amp;/g,'&');try{var data=JSON.parse(jsonStr);foundAny=true;if(data.txns)for(var i=0;i<data.txns.length;i++){data.txns[i].site=data.txns[i].site||data.site||'?';allTxns.push(data.txns[i])}if(data.site)allSites[data.site]=true;if(typeof data.switchCount==='number')totalSwitches+=data.switchCount;if(typeof data.themeBank==='number'&&data.themeBank===0)bankExhausted++;}catch(e){}searchStr=searchStr.substring(end+11)}var merged={txns:allTxns,sites:Object.keys(allSites),totalSwitches:totalSwitches,bankExhausted:bankExhausted};if(foundAny&&allTxns.length>0){nlShowDash(merged)}else{nlShowDash({txns:[],sites:[],totalSwitches:totalSwitches,bankExhausted:bankExhausted})}}else{$('#nl-creator-dash').html('<p style="color:red;">Footer textarea not found.</p>')}}).fail(function(){nlShowDash({txns:[],sites:[],totalSwitches:0,bankExhausted:0})})},1500)}
function nlShowDash(data){var txns=data.txns||[];var tr=0;var as=0;var sites={};for(var i=0;i<txns.length;i++){if(txns[i].status==='active'){tr+=txns[i].amount;as++}if(txns[i].site)sites[txns[i].site]=true}var totalSwitches=data.totalSwitches||0;var bankExhausted=data.bankExhausted||0;var h='<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin-bottom:16px;">';h+='<div style="background:#2865F1;color:#fff;padding:14px;border-radius:10px;text-align:center;"><div style="font-size:22px;font-weight:900;">'+txns.length+'</div><small>Total Txns</small></div>';h+='<div style="background:#22c55e;color:#fff;padding:14px;border-radius:10px;text-align:center;"><div style="font-size:22px;font-weight:900;">'+as+'</div><small>Active Subs</small></div>';h+='<div style="background:#FFD700;color:#1a1a2e;padding:14px;border-radius:10px;text-align:center;"><div style="font-size:22px;font-weight:900;">₦'+tr.toLocaleString()+'</div><small>Revenue</small></div>';h+='<div style="background:#e94560;color:#fff;padding:14px;border-radius:10px;text-align:center;"><div style="font-size:22px;font-weight:900;">'+Object.keys(sites).length+'</div><small>Sites</small></div>';h+='<div style="background:#7C5CFF;color:#fff;padding:14px;border-radius:10px;text-align:center;"><div style="font-size:22px;font-weight:900;">'+totalSwitches+'</div><small>Theme Switches</small></div>';h+='<div style="background:#64748B;color:#fff;padding:14px;border-radius:10px;text-align:center;"><div style="font-size:22px;font-weight:900;">'+bankExhausted+'</div><small>Empty Banks</small></div>';h+='</div>';
h+='<div style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap;">';h+='<button onclick="nlGKM()" style="background:#22c55e;color:#fff;border:none;padding:10px 20px;border-radius:8px;cursor:pointer;font-size:13px;font-weight:600;"><i class="fas fa-key"></i> Generate Key</button>';h+='<button onclick="location.reload()" style="background:#f59e0b;color:#fff;border:none;padding:10px 20px;border-radius:8px;cursor:pointer;font-size:13px;font-weight:600;"><i class="fas fa-sync"></i> Refresh</button>';h+='<button onclick="window.open(\'/admin_forms.php\',\'_blank\')" style="background:#2865F1;color:#fff;border:none;padding:10px 20px;border-radius:8px;cursor:pointer;font-size:13px;font-weight:600;"><i class="fas fa-code"></i> Forms Page</button></div>';
h+='<h4>All Transactions ('+txns.length+')</h4>';
if(txns.length>0){h+='<div style="overflow-x:auto;"><table style="width:100%;border-collapse:collapse;font-size:11px;min-width:700px;"><tr style="background:#f0f2f5;"><th>Date</th><th>Site</th><th>Email</th><th>Plan</th><th>Amount</th><th>Key</th><th>Status</th></tr>';for(var i=txns.length-1;i>=0;i--){var t=txns[i];var st=t.status||'active';var sc=st==='active'?'#22c55e':'#ef4444';h+='<tr><td>'+new Date(t.date).toLocaleDateString()+'</td><td style="font-size:10px;">'+(t.site||'?')+'</td><td>'+t.email+'</td><td>'+t.label+'</td><td>₦'+(t.amount||0).toLocaleString()+'</td><td style="font-size:9px;">'+t.key+'</td><td><span style="background:'+sc+';color:#fff;padding:2px 8px;border-radius:10px;font-size:10px;">'+st+'</span></td></tr>'}h+='</table></div>'}else{h+='<p style="color:#6b7280;font-size:13px;padding:16px 0;">No transactions yet. Click <strong>Generate Key</strong> to create one manually, or wait for a customer to pay.</p>'}
h+='<div id="nl-keygen-modal" style="display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);z-index:99999;align-items:center;justify-content:center;"><div style="background:#fff;border-radius:16px;padding:28px;max-width:450px;width:90%;"><h3><i class="fas fa-key" style="color:#22c55e;"></i> Generate Key</h3><div style="margin-bottom:12px;"><label>Plan</label><select id="nl-kg-plan" style="width:100%;padding:10px;border:1.5px solid #d1d5db;border-radius:8px;margin-top:4px;"><option value="pro_monthly">Pro Monthly - ₦5,000</option><option value="pro_yearly">Pro Yearly - ₦50,000</option><option value="vip_lifetime">VIP Lifetime - ₦150,000</option></select></div><div style="margin-bottom:12px;"><label>Email</label><input type="email" id="nl-kg-email" placeholder="customer@email.com" style="width:100%;padding:10px;border:1.5px solid #d1d5db;border-radius:8px;margin-top:4px;"></div><div style="margin-bottom:12px;"><label>Days (0=default)</label><input type="number" id="nl-kg-days" value="0" style="width:100%;padding:10px;border:1.5px solid #d1d5db;border-radius:8px;margin-top:4px;"></div><div style="margin-bottom:16px;"><label>Amount (₦)</label><input type="number" id="nl-kg-amount" value="5000" style="width:100%;padding:10px;border:1.5px solid #d1d5db;border-radius:8px;margin-top:4px;"></div><div style="display:flex;gap:8px;"><button onclick="nlGKMExec()" style="flex:1;background:#22c55e;color:#fff;border:none;padding:12px;border-radius:8px;cursor:pointer;font-weight:600;">Generate</button><button onclick="document.getElementById(\'nl-keygen-modal\').style.display=\'none\'" style="flex:1;background:#f0f2f5;color:#6b7280;border:none;padding:12px;border-radius:8px;cursor:pointer;">Cancel</button></div></div></div>';
$('#nl-creator-dash').html(h)}
function nlGKM(){document.getElementById('nl-keygen-modal').style.display='flex';document.getElementById('nl-kg-amount').value='5000'}
function nlGKMExec(){var pid=document.getElementById('nl-kg-plan').value;var em=document.getElementById('nl-kg-email').value||'customer@email.com';var cd=parseInt(document.getElementById('nl-kg-days').value)||0;var am=parseInt(document.getElementById('nl-kg-amount').value)||5000;if(!pid||!nlPay.plans[pid]){alert('Invalid plan');return}var key=nlGK(pid,cd);var plan=nlPay.plans[pid];var ed=cd||plan.days;var d=nlGD();d.txns=d.txns||[];d.txns.push({ref:'MAN-'+Date.now(),plan:pid,label:plan.label,key:key,amount:am,email:em,gw:'manual',date:Date.now(),status:'active',site:'manual-'+window.location.hostname});nlSD(d);document.getElementById('nl-keygen-modal').style.display='none';try{$.ajax({url:'/admin_forms.php',type:'GET',dataType:'html',async:false,success:function(html){var m=html.match(/<textarea[^>]*name="form\[o_html_footer\]"[^>]*>([\s\S]*?)<\/textarea>/i);if(!m||!m[1])return;var fc=m[1];var existing=[];var searchStr=fc;while(searchStr.indexOf('/*HUBDATA*/')>=0){var start=searchStr.indexOf('/*HUBDATA*/')+11;var end=searchStr.indexOf('/*ENDHUB*/',start);if(end<0)break;var js=searchStr.substring(start,end).replace(/&quot;/g,'"').replace(/&#039;/g,"'").replace(/&amp;/g,'&');try{var dat=JSON.parse(js);if(dat.txns)for(var i=0;i<dat.txns.length;i++)existing.push(dat.txns[i]);}catch(e){}searchStr=searchStr.substring(end+11)}var merged={txns:existing.concat(d.txns),chats:[],site:window.location.hostname,synced:new Date().toISOString(),themeBank:typeof d.themeBank==='number'?d.themeBank:3,switchCount:d.switchCount||0};var $ft=$('textarea[name="form[o_html_footer]"]');if($ft.length>0){var v=$ft.val();v=v.replace(/<script type="text\/plain" id="nl-hubdata">[\s\S]*?<\/script>\n?/g,'');v=v.replace(/\/\*HUBDATA\*\/[\s\S]*?\/\*ENDHUB\*\/\n?/g,'');v=v.trim()+'\n<script type="text/plain" id="nl-hubdata">/*HUBDATA*/'+JSON.stringify(merged)+'/*ENDHUB*/<\/script>';$ft.val(v);var $fm=$ft.closest('form');if($fm.length>0){var fd=$fm.serialize();if(fd.indexOf('save=')==-1)fd+='&save=1';$.ajax({url:$fm.attr('action'),type:'POST',data:fd,async:false});}}}});}catch(err){}alert('✅ Key Generated!\n\nKey: '+key+'\nPlan: '+plan.name+'\nDays: '+ed+'\nAmount: ₦'+am.toLocaleString()+'\nEmail: '+em+'\n\nSaved to Creator Dashboard');setTimeout(function(){location.reload()},800)}
window.nlAddCreatorDash=nlAddCreatorDash;window.nlShowDash=nlShowDash;window.nlGKM=nlGKM;window.nlGKMExec=nlGKMExec;

function nlAL(at){var sub=nlCS();if(!sub){for(var i=0;i<nlPay.lockedTools.length;i++){var tid=nlPay.lockedTools[i];var $l=$('.nl-ua-tool[href="'+nlUA.allTools[tid].link+'"]');if($l.length>0){$l.attr('href','javascript:void(0)');$l.attr('onclick','nlSLP(\''+tid+'\')');$l.find('.t-name').append(' <i class="fas fa-lock" style="color:#FFD700;font-size:10px;"></i>');$l.css({opacity:'0.7','border-color':'#FFD700'})}}$('#nl-ua-panel').prepend('<div style="background:linear-gradient(135deg,#FFD700,#FFA500);color:#1a1a2e;text-align:center;padding:10px;font-weight:700;font-size:13px;"><i class="fas fa-crown"></i> <a href="javascript:nlSP()" style="color:#1a1a2e;text-decoration:underline;">Upgrade to Pro</a></div>')}else{var dl=Math.ceil((sub.e-Date.now())/86400000);$('#nl-ua-panel').prepend('<div style="background:rgba(34,197,94,0.2);color:#22c55e;text-align:center;padding:8px;font-weight:600;font-size:12px;"><i class="fas fa-crown"></i> '+sub.l+' Active - '+dl+' days left</div>')}
var bankInfo = nlGD(); var bank = typeof bankInfo.themeBank==='number'?bankInfo.themeBank:3;
if(!nlCS() && bank===0){
  $('#nl-ua-panel').prepend('<div style="background:linear-gradient(135deg,#FF4D6D,#e94560);color:#fff;text-align:center;padding:10px;font-weight:700;font-size:13px;"><i class="fas fa-palette"></i> You\'ve used all free theme switches. <a href="javascript:nlSP()" style="color:#FFD700;text-decoration:underline;">Subscribe to switch again →</a></div>');
} else if(!nlCS() && bank>0 && bank<3){
  $('#nl-ua-panel').prepend('<div style="background:rgba(255,215,0,0.15);color:#92400e;text-align:center;padding:8px;font-weight:600;font-size:12px;"><i class="fas fa-info-circle"></i> '+bank+' free theme switch'+(bank===1?'':'es')+' remaining</div>');
}}
function nlSP(){var sub=nlCS();$('body').children().hide();var h='';h+='<div style="min-height:100vh;background:linear-gradient(135deg,#1a1a2e,#16213e);font-family:Inter,sans-serif;">';h+='<div style="background:rgba(255,255,255,0.12);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,0.15);padding:0 20px;"><div style="max-width:1100px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;height:60px;"><a href="/admin_index.php" style="color:#fff;font-weight:600;text-decoration:none;"><i class="fas fa-arrow-left"></i> Dashboard</a><span style="color:#FFD700;font-weight:700;">Subscription</span><div></div></div></div>';h+='<div style="max-width:1000px;margin:0 auto;padding:30px 20px;">';if(sub){var dl=Math.ceil((sub.e-Date.now())/86400000);h+='<div style="text-align:center;color:#fff;margin-bottom:30px;"><div style="font-size:64px;">👑</div><h1 style="font-size:36px;font-weight:900;">'+sub.l+' Active!</h1><p>'+sub.n+' - '+dl+' days</p></div>'}else{h+='<div style="text-align:center;color:#fff;margin-bottom:40px;"><h1 style="font-size:38px;font-weight:900;">Unlock <span style="background:linear-gradient(135deg,#FFD700,#FFA500);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">Everything</span></h1><p>Unlimited theme switches + all premium tools</p></div>';h+='<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px;">';var pls=[{id:'pro_monthly',b:'#2865F1',bb:'#2865F1',bc:'#fff'},{id:'pro_yearly',b:'#FFD700',bb:'#FFD700',bc:'#1a1a2e'},{id:'vip_lifetime',b:'#e94560',bb:'#e94560',bc:'#fff'}];for(var i=0;i<pls.length;i++){var pl=pls[i];var plan=nlPay.plans[pl.id];h+='<div style="background:rgba(255,255,255,0.95);border-radius:16px;padding:24px 20px;text-align:center;border:2px solid '+pl.b+';">';h+='<div style="background:'+pl.b+';color:#fff;display:inline-block;padding:4px 14px;border-radius:50px;font-size:11px;margin-bottom:12px;">'+plan.label+'</div>';h+='<h3 style="font-size:20px;font-weight:800;">'+plan.name.replace('Pro ','').replace('VIP ','')+'</h3>';h+='<div style="font-size:38px;font-weight:900;color:'+pl.b+';margin:14px 0;">₦'+plan.price.toLocaleString()+'</div>';h+='<button onclick="nlIP(\''+pl.id+'\',\'paystack\')" style="width:100%;background:'+pl.bb+';color:'+pl.bc+';border:none;padding:11px;border-radius:10px;font-size:14px;font-weight:700;cursor:pointer;margin-bottom:5px;">Paystack</button>';h+='<button onclick="nlIP(\''+pl.id+'\',\'flutterwave\')" style="width:100%;background:transparent;color:'+pl.b+';border:1.5px solid '+pl.b+';padding:10px;border-radius:10px;font-size:13px;font-weight:600;cursor:pointer;">Flutterwave</button>';h+='</div>'}h+='</div>'}h+='<div style="margin-top:24px;text-align:center;"><p style="color:rgba(255,255,255,0.6);font-size:12px;">Already have a key?</p><div style="display:flex;gap:6px;max-width:450px;margin:0 auto;"><input type="text" id="nl-ak" placeholder="NL-XXXX-XXXX-XXXX-XXXX-PLAN" style="flex:1;padding:10px 14px;border-radius:8px;border:none;font-size:13px;font-family:monospace;"><button onclick="nlMA()" style="background:#22c55e;color:#fff;border:none;padding:10px 20px;border-radius:8px;font-size:13px;cursor:pointer;">Activate</button></div><p id="nl-am" style="margin-top:6px;font-size:12px;"></p></div>';h+='</div></div>';$('body').append(h);nlReady()}
function nlMA(){var k=document.getElementById('nl-ak').value.trim().toUpperCase();var m=document.getElementById('nl-am');if(!k){m.style.color='#ef4444';m.textContent='Please enter a key';return}if(nlAK(k)){nlResetBankOnRenewal();m.style.color='#22c55e';m.innerHTML='<i class="fas fa-check-circle"></i> Activated!';setTimeout(function(){window.location.href='/admin_index.php'},1500)}else{m.style.color='#ef4444';m.textContent='Invalid key'}}
function nlIP(pid,gw){var plan=nlPay.plans[pid];if(!plan)return;var email=prompt('Enter email:','');if(!email||email.indexOf('@')<0){alert('Valid email required');return}nlLoadPaymentSDK(function(){if(gw==='paystack'){if(typeof PaystackPop==='undefined'){alert('Paystack not loaded');return}PaystackPop.setup({key:nlPay.pk,email:email,amount:plan.price*100,currency:'NGN',ref:'NLPS-'+Date.now(),callback:function(r){nlPP(r.reference,pid,plan,email,'paystack')},onClose:function(){}}).openIframe()}else{if(typeof FlutterwaveCheckout==='undefined'){alert('Flutterwave not loaded');return}FlutterwaveCheckout({public_key:nlPay.fk,tx_ref:'NLFW-'+Date.now(),amount:plan.price,currency:'NGN',customer:{email:email},callback:function(r){if(r.status==='successful')nlPP(r.transaction_id,pid,plan,email,'flutterwave')},onclose:function(){}})}})}
function nlPP(ref,pid,plan,email,gw){var key=nlGK(pid);nlAK(key);nlResetBankOnRenewal();var d=nlGD();d.txns=d.txns||[];d.txns.push({ref:ref,plan:pid,label:plan.label,key:key,amount:plan.price,email:email,gw:gw,date:Date.now(),status:'active',site:window.location.hostname});nlSD(d);nlSPS(key,plan);setTimeout(nlSyncToHub,2000)}
function nlSPS(key,plan){var ov=document.createElement('div');ov.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);z-index:99999;display:flex;align-items:center;justify-content:center;font-family:Inter,sans-serif;';ov.innerHTML='<div style="background:#fff;border-radius:16px;padding:28px;max-width:460px;width:90%;text-align:center;"><div style="font-size:56px;color:#22c55e;"><i class="fas fa-check-circle"></i></div><h2>Payment Successful!</h2><p>'+plan.label+' activated. Your theme bank has been refilled.</p><div style="background:#f0f2f5;border-radius:10px;padding:14px;margin:12px 0;"><p style="font-size:11px;">Your Key:</p><h3 style="color:#2865F1;font-size:16px;word-break:break-all;font-family:monospace;">'+key+'</h3></div><button onclick="this.parentElement.parentElement.remove();window.location.href=\'/admin_index.php\'" style="background:#2865F1;color:#fff;border:none;padding:10px 28px;border-radius:8px;cursor:pointer;">Continue</button></div>';document.body.appendChild(ov)}
function nlSLP(tid){var tn=tid?nlUA.allTools[tid].name:'Premium';var ov=document.createElement('div');ov.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);z-index:99999;display:flex;align-items:center;justify-content:center;font-family:Inter,sans-serif;';ov.innerHTML='<div style="background:#fff;border-radius:16px;padding:28px;max-width:420px;width:90%;text-align:center;"><div style="font-size:48px;">🔒</div><h3>'+tn+' is Locked</h3><p>Subscribe to unlock.</p><button onclick="this.parentElement.parentElement.remove();nlSP();" style="width:100%;background:#2865F1;color:#fff;border:none;padding:12px;border-radius:10px;margin:12px 0 6px;cursor:pointer;">View Plans</button><button onclick="this.parentElement.parentElement.remove();" style="width:100%;background:#f0f2f5;color:#6b7280;border:none;padding:10px;border-radius:10px;cursor:pointer;">Close</button></div>';document.body.appendChild(ov)}
window.nlAL=nlAL;window.nlSP=nlSP;window.nlMA=nlMA;window.nlIP=nlIP;window.nlPP=nlPP;window.nlSPS=nlSPS;window.nlSLP=nlSLP;

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
    h+='<div class="nl-ua-section"><h3 onclick="window.nlTS(\'nl-sec-account\')"><span class="sec-icon" style="background:'+p.accentLight+';color:'+p.accent+'"><i class="fas fa-user-shield"></i></span>Admin Account<span class="arrow"><i class="fas fa-chevron-down"></i></span></h3>';
    h+='<div class="nl-ua-grid"><div style="background:#fafbfc;border-radius:14px;padding:24px;border:1px solid #e8ecf1;">';
    h+='<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:16px;">';
    h+='<div><label style="font-weight:600;font-size:13px;display:block;margin-bottom:6px;">Username</label><input type="text" id="nl-un" value="'+cu+'" style="width:100%;border:1.5px solid #d1d5db;border-radius:10px;padding:10px 14px;font-size:14px;box-sizing:border-box;"></div>';
    h+='<div><label style="font-weight:600;font-size:13px;display:block;margin-bottom:6px;">Email</label><input type="text" id="nl-em" placeholder="Loading..." value="" style="width:100%;border:1.5px solid #d1d5db;border-radius:10px;padding:10px 14px;font-size:14px;box-sizing:border-box;"></div>';
    h+='<div style="grid-column:1/-1;display:flex;gap:10px;flex-wrap:wrap;">';
    h+='<button onclick="nlSA()" style="background:'+p.accent+';color:#fff;border:none;padding:10px 24px;border-radius:10px;cursor:pointer;font-weight:600;">Save</button>';
    h+='<button onclick="nlOPP()" style="background:transparent;color:'+p.accent+';border:1.5px solid '+p.accent+';padding:10px 24px;border-radius:10px;cursor:pointer;font-weight:600;"><i class="fas fa-lock"></i> Password</button>';
    h+='<a href="/login.php?action=out&id='+uid+'" style="background:#ef4444;color:#fff;padding:10px 24px;border-radius:10px;text-decoration:none;font-weight:600;display:inline-flex;align-items:center;gap:6px;"><i class="fas fa-sign-out-alt"></i> Logout</a>';
    h+='</div></div></div></div>';
    var sk=Object.keys(tc.sections);var tt=0;
    for(var s=0;s<sk.length;s++){
      var sn=sk[s];var ti=tc.sections[sn];var si=nlUA.sectionIcons[sn]||'fa-folder';
      h+='<div class="nl-ua-section"><h3 onclick="window.nlTS(\'nl-sec-'+s+'\')"><span class="sec-icon" style="background:'+p.accentLight+';color:'+p.accent+'"><i class="fas '+si+'"></i></span>'+sn+'<span class="arrow"><i class="fas fa-chevron-down"></i></span></h3><div class="nl-ua-grid">';
      for(var t=0;t<ti.length;t++){var tool=tl[ti[t]];if(!tool)continue;tt++;h+='<a href="'+tool.link+'" class="nl-ua-tool"><div class="t-icon" style="background:'+p.iconBg+';color:'+p.iconColor+'"><i class="fas '+tool.icon+'"></i></div><div class="t-info"><div class="t-name">'+tool.name+'</div><div class="t-desc">'+tool.desc+'</div></div></a>'}
      h+='</div></div>';
    }
    h+='</div></div>';
    $('body').append(h);
    nlReady();
    setTimeout(function(){nlFE(uid);nlAL(at);if(nlIsHub)nlAddCreatorDash()},500);
  }catch(err){
    $('body').children().hide();
    $('body').append('<div style="padding:40px;font-family:Inter,sans-serif;"><h2>Loading...</h2><p>Please refresh.</p></div>');
    nlReady();
  }
}
window.nlBAP=nlBAP;
function nlTS(id){$('#'+id).toggleClass('collapsed')}
window.nlTS=nlTS;
function nlTgl(){var b=$('#nl-toggle-btn');if(b.text()==='Show All Settings'){$('body').addClass('nl-show-all');b.text('Hide All Settings')}else{$('body').removeClass('nl-show-all');b.text('Show All Settings')}}
window.nlTgl=nlTgl;
function nlFE(uid){$.get('/profile.php?section=essentials&id='+uid,function(h){var em=h.match(/name="req_email"[^>]*value="([^"]*)"/i);if(em&&em[1])document.getElementById('nl-em').value=em[1]})}
window.nlFE=nlFE;
function nlSA(){var u=document.getElementById('nl-un').value;var e=document.getElementById('nl-em').value||'user@email.com';var uid=(typeof UserID!=='undefined')?UserID:2;if(!u){alert('Username required');return}try{sessionStorage.setItem('nl_save_username',u)}catch(e){}try{sessionStorage.setItem('nl_save_email',e)}catch(e){}setTimeout(function(){window.location.href='/profile.php?section=essentials&id='+uid+'&nl_save=1'},500)}
window.nlSA=nlSA;
function nlOPP(){var uid=(typeof UserID!=='undefined')?UserID:2;var ov=document.createElement('div');ov.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);z-index:9999;display:flex;align-items:center;justify-content:center;font-family:Inter,sans-serif;';ov.innerHTML='<div style="background:#fff;border-radius:20px;padding:32px;max-width:450px;width:90%;"><h3>Change Password</h3><div style="margin-top:10px;"><label>New</label><input type="password" id="nl-new-pwd" style="width:100%;padding:10px;border:1px solid #ccc;border-radius:8px;margin-top:6px;box-sizing:border-box;"></div><div style="margin-top:10px;"><label>Confirm</label><input type="password" id="nl-confirm-pwd" style="width:100%;padding:10px;border:1px solid #ccc;border-radius:8px;margin-top:6px;box-sizing:border-box;"></div><div style="display:flex;gap:10px;margin-top:16px;"><button id="nl-submit-pwd" style="flex:1;background:#2865F1;color:#fff;border:none;padding:12px;border-radius:10px;cursor:pointer;">Update</button><button onclick="this.parentElement.parentElement.parentElement.remove()" style="flex:1;background:#f0f2f5;padding:12px;border-radius:10px;border:none;cursor:pointer;">Cancel</button></div></div>';document.body.appendChild(ov);document.getElementById('nl-submit-pwd').onclick=function(){var p1=document.getElementById('nl-new-pwd').value;var p2=document.getElementById('nl-confirm-pwd').value;if(!p1||p1.length<4){alert('4+ chars');return}if(p1!==p2){alert('No match');return}try{sessionStorage.setItem('nl_save_password',p1)}catch(e){}document.body.removeChild(ov);setTimeout(function(){window.location.href='/profile.php?action=change_pass&id='+uid+'&nl_save=1'},300)}}
window.nlOPP=nlOPP;

(function(){
  if(typeof GroupID==='undefined'||GroupID!==1)return;
  if(window.location.href.match(/admin_/))return;
  function addBtn(){
    if(document.getElementById('nl-admin-fab-wrap'))return;
    var wrap=document.createElement('div');
    wrap.id='nl-admin-fab-wrap';
    wrap.style.cssText='position:fixed;bottom:24px;right:24px;z-index:99999;display:flex;flex-direction:column;align-items:center;gap:6px;';
    var b=document.createElement('a');
    b.id='nl-admin-fab';b.href='/admin_index.php';
    b.innerHTML='<i class="fas fa-shield-halved" style="font-size:22px;"></i>';
    b.style.cssText='background:linear-gradient(135deg,#FFD700,#FFA500);color:#1a1a2e;width:60px;height:60px;border-radius:50%;display:flex;align-items:center;justify-content:center;text-decoration:none;box-shadow:0 8px 24px rgba(255,165,0,0.5);border:2px solid #fff;';
    var lbl=document.createElement('span');
    lbl.textContent='ADMIN';
    lbl.style.cssText='background:#1a1a2e;color:#FFD700;padding:3px 10px;border-radius:8px;font-size:10px;font-weight:900;letter-spacing:1px;';
    wrap.appendChild(b);wrap.appendChild(lbl);
    document.body.appendChild(wrap);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',addBtn);else addBtn();
  setTimeout(addBtn,1500);
})();

/* ===== BOOT DISPATCHER (v23) ===== */
$(document).ready(function(){
var H=window.location.href, Q=window.location.search;
var ia=(typeof GroupID!=='undefined'&&GroupID===1);
var iF=H.indexOf('admin_forms.php')>=0;var iS=H.indexOf('admin_style.php')>=0;var iAI=H.indexOf('admin_index.php')>=0;
var sT=(Q.indexOf('theme')>=0);var iAP=H.indexOf('admin_')>=0;

try{
  var _tnm = document.body && document.body.getAttribute('data-nl-theme');
  if(_tnm){ localStorage.setItem('nl_has_theme','1'); }
  else if(window.location.pathname==='/'||window.location.pathname===''||window.location.pathname==='/index.php'){ localStorage.setItem('nl_has_theme','0'); }
}catch(e){}

if(nlIsHub && iF && Q.indexOf('nl_sync=')>=0)return;
if(nlIsHub && iF && Q.indexOf('nl_sync=')<0){
  var _hf=setInterval(function(){if($('#nl-header-overlay').length>0){$('#nl-header-overlay,#nl-footer-overlay').remove();$('.nl-textarea-wrapper').find('textarea').unwrap();$('textarea[name="form[o_html_header]"],textarea[name="form[o_html_footer]"]').css({visibility:'visible',opacity:1,'pointer-events':'auto'}).removeAttr('readonly tabindex');$('.nl-toggle-settings').hide();clearInterval(_hf)}},200);setTimeout(function(){clearInterval(_hf)},10000);
}

var isPS=(H.indexOf('profile.php?section=essentials')>=0||H.indexOf('profile.php?action=change_pass')>=0);
var pm=H.match(/[?&]id=(\d+)/);var pid=pm?parseInt(pm[1]):0;var aid=(typeof UserID!=='undefined')?UserID:2;
if(isPS&&pid===aid&&H.indexOf('nl_save=1')<0){window.location.href='/admin_index.php';return}
if(H.indexOf('profile.php')>=0&&H.indexOf('nl_save=1')>=0){
  var isPC=H.indexOf('change_pass')>=0;
  if(isPC){var sP='';try{sP=sessionStorage.getItem('nl_save_password')||''}catch(e){}try{sessionStorage.removeItem('nl_save_password')}catch(e){}nlReady();$('body').children().hide();$('body').prepend('<div style="position:fixed;top:0;left:0;width:100%;height:100%;background:#2865F1;z-index:99999;display:flex;align-items:center;justify-content:center;color:#fff;font-family:Inter,sans-serif;"><div style="text-align:center;"><i class="fas fa-sync-alt fa-spin" style="font-size:48px;"></i><h2>Updating password...</h2></div></div>');setTimeout(function(){try{var pf1=document.querySelector('input[name="req_new_password1"]');var pf2=document.querySelector('input[name="req_new_password2"]');if(pf1&&sP)pf1.value=sP;if(pf2&&sP)pf2.value=sP;var sb=document.querySelector('input[type="submit"][value="Submit"], button[type="submit"]');if(sb)sb.click()}catch(err){}setTimeout(function(){window.location.href='/admin_index.php'},2000)},800);return}
  else{var sU='';try{sU=sessionStorage.getItem('nl_save_username')||''}catch(e){}var sE='';try{sE=sessionStorage.getItem('nl_save_email')||''}catch(e){}try{sessionStorage.removeItem('nl_save_username')}catch(e){}try{sessionStorage.removeItem('nl_save_email')}catch(e){}nlReady();$('body').children().hide();$('body').prepend('<div style="position:fixed;top:0;left:0;width:100%;height:100%;background:#2865F1;z-index:99999;display:flex;align-items:center;justify-content:center;color:#fff;font-family:Inter,sans-serif;"><div style="text-align:center;"><i class="fas fa-sync-alt fa-spin" style="font-size:48px;"></i><h2>Saving...</h2></div></div>');setTimeout(function(){try{var uf=document.getElementById('fld1')||document.querySelector('input[name="req_username"]');var ef=document.getElementById('fld2')||document.querySelector('input[name="req_email"]');if(uf&&sU)uf.value=sU;if(ef&&sE)ef.value=sE;var sb2=document.querySelector('input[type="submit"][value="Submit"], button[type="submit"]');if(sb2)sb2.click()}catch(err){}setTimeout(function(){window.location.href='/admin_index.php'},2000)},800);return}
}

if(Q.indexOf('theme')>=0&&Q.indexOf('nl_done=1')<0){var nc=true;try{if(sessionStorage.getItem('nl_custom_style_enabled')==='true')nc=false}catch(e){}if(nc){window.location.href='/admin_style.php?nl_auto=1';return}}
if(H.indexOf('nl_auto=1')>=0){nlForceCustomStyleAndProceed('/index.php?theme&nl_done=1');return}

if(iF && !nlIsHub){var cTS=false;try{if(sessionStorage.getItem('nl_allow_forms_access')==='true'){cTS=true;sessionStorage.removeItem('nl_allow_forms_access')}}catch(e){}if(!cTS&&Q.indexOf('nl_type=')<0){nlReady();$('body').children().hide();$('body').append('<div style="display:flex;align-items:center;justify-content:center;min-height:100vh;background:#2865F1;color:#fff;font-family:Inter,sans-serif;"><div style="text-align:center;"><div style="font-size:64px;margin-bottom:16px;"><i class="fas fa-lock"></i></div><h2 style="font-size:28px;font-weight:800;">Access Restricted</h2><p>Please use the Theme Selector to configure your forum.</p><p style="font-size:12px;opacity:0.6;">Redirecting...</p></div></div>');setTimeout(function(){window.location.href='/index.php?theme'},2500);return}}

if(iAI&&ia){
  if(H.indexOf('customize')>=0){nlReady();nlOpenCustomizer();return}
  var at2=nlDT();if(at2){nlBAP(at2);return}
  try{var ct=sessionStorage.getItem('nl_detected_theme');var cT=sessionStorage.getItem('nl_detected_time');if(ct&&cT){var el=Date.now()-parseInt(cT);if(el<300000){nlBAP(ct);return}}}catch(e){}
  nlReady();$('body').children().hide();$('body').append('<div style="display:flex;align-items:center;justify-content:center;min-height:100vh;background:#2865F1;color:#fff;font-family:Inter,sans-serif;"><div style="text-align:center;"><div style="font-size:48px;margin-bottom:16px;"><i class="fas fa-sync-alt fa-spin"></i></div><h2>Loading Admin Panel</h2></div></div>');
  $.ajax({url:'/admin_forms.php',type:'GET',dataType:'html',timeout:10000,success:function(fH){var det='punbb';var fm2=fH.match(/<textarea[^>]*name="form\[o_html_footer\]"[^>]*>([\s\S]*?)<\/textarea>/i);if(fm2&&fm2[1]){var tcm=fm2[1].match(/data-nl-theme['"]?\s*,\s*['"](\w+)['"]/);if(tcm&&tcm[1])det=tcm[1]}if(det==='punbb'){var hm2=fH.match(/<textarea[^>]*name="form\[o_html_header\]"[^>]*>([\s\S]*?)<\/textarea>/i);if(hm2&&hm2[1]){var hc2=hm2[1];if(hc2.indexOf('food-header')>=0)det='foodblog';else if(hc2.indexOf('Nairaland')>=0)det='nairaland';else if(hc2.indexOf('Portfolio')>=0)det='portfolio';else if(hc2.indexOf('Landing')>=0)det='landing';else if(hc2.indexOf('Grocery')>=0)det='grocery';else if(hc2.indexOf('Fashion')>=0)det='fashion';else if(hc2.indexOf('Tech Blog')>=0)det='techblog';else if(hc2.indexOf('Travel')>=0)det='travel';else if(hc2.indexOf('News')>=0)det='news'}}try{sessionStorage.setItem('nl_detected_theme',det);sessionStorage.setItem('nl_detected_time',Date.now().toString())}catch(e){}$('#nl-loading').remove();nlBAP(det)},error:function(){try{var ft2=sessionStorage.getItem('nl_detected_theme');if(ft2){nlBAP(ft2);return}}catch(e){}nlBAP('punbb')}});return
}

if(sT&&ia){
  $('body').children().hide();
  var gate = nlCanSwitchTheme();
  var bankRemaining = gate.bankRemaining;
  var h2='<div style="min-height:100vh;background:#2865F1;font-family:Inter,sans-serif;padding:40px 24px;"><div style="max-width:1280px;margin:0 auto;"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:32px;flex-wrap:wrap;gap:12px;"><img src="https://forumstatic.ru/files/001c/ac/51/57803.jpg" style="height:38px;border-radius:8px;"><div style="display:flex;gap:20px;"><a href="/admin_index.php" style="color:#fff;font-weight:600;text-decoration:none;font-size:14px;"><i class="fas fa-tachometer-alt"></i> Admin</a><a href="/" style="color:#fff;font-weight:600;text-decoration:none;font-size:14px;"><i class="fas fa-home"></i> View Site</a></div></div><div style="text-align:center;margin-bottom:48px;"><h1 style="font-size:48px;font-weight:900;color:#fff;">Setup your <span style="background:linear-gradient(135deg,#FFD700,#FFA500);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">admin panel</span></h1><p style="color:rgba(255,255,255,0.85);font-size:18px;">Choose a theme.</p></div>';
  if(!gate.allowed){
    h2 += '<div style="background:linear-gradient(135deg,#FFD700,#FFA500);border:3px solid #0F172A;border-radius:16px;padding:16px 20px;margin-bottom:20px;box-shadow:6px 6px 0 0 #0F172A;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;"><div style="display:flex;align-items:center;gap:12px;"><i class="fas fa-exclamation-triangle" style="font-size:28px;color:#0F172A;"></i><div><div style="font-weight:900;font-size:15px;color:#0F172A;">You\'ve used all your free theme switches</div><div style="font-size:13px;color:#334155;font-weight:600;">Subscribe to keep switching themes.</div></div></div><button onclick="nlSP()" style="background:#FF4D6D;color:#fff;border:3px solid #0F172A;border-radius:12px;padding:10px 20px;font-weight:900;cursor:pointer;box-shadow:4px 4px 0 0 #0F172A;font-size:13px;"><i class="fas fa-crown"></i> Subscribe</button></div>';
  } else if(gate.reason==='bank' && bankRemaining < 3){
    h2 += '<div style="background:rgba(255,255,255,0.15);border:2px solid rgba(255,255,255,0.3);border-radius:12px;padding:12px 16px;margin-bottom:20px;display:flex;align-items:center;gap:10px;color:#fff;"><i class="fas fa-info-circle" style="font-size:20px;color:#FFD700;"></i><span style="font-weight:700;font-size:13px;">You have <b style="color:#FFD700;">'+bankRemaining+'</b> free theme switch'+(bankRemaining===1?'':'es')+' remaining.</span></div>';
  } else if(gate.reason==='subscription'){
    h2 += '<div style="background:rgba(34,197,94,0.25);border:2px solid rgba(34,197,94,0.5);border-radius:12px;padding:12px 16px;margin-bottom:20px;display:flex;align-items:center;gap:10px;color:#fff;"><i class="fas fa-crown" style="font-size:20px;color:#FFD700;"></i><span style="font-weight:700;font-size:13px;">Subscription active — unlimited theme switches.</span></div>';
  }
  h2 += '<div style="background:#fff;border-radius:24px;padding:32px;"><div class="nl-theme-grid">';
  var th=[{id:'punbb',name:'PunBB',desc:'Clean, fast, classic',file:'Built-in',bg:'#f0f2f5',bg2:'#d1d5db',color:'#1a1a2e'},{id:'nairaland',name:'Nairaland',desc:'Cream & green',file:'15535.txt',bg:'#f6f6ec',bg2:'#c8d4c0',color:'#185518'},{id:'portfolio',name:'Portfolio',desc:'Dark professional',file:'65113.txt',bg:'#1a1a2e',bg2:'#16213e',color:'#e94560'},{id:'landing',name:'Landing',desc:'Purple gradient',file:'86531.txt',bg:'#667eea',bg2:'#764ba2',color:'#fff'},{id:'grocery',name:'Grocery',desc:'Fresh green',file:'15517.txt',bg:'#11998e',bg2:'#38ef7d',color:'#fff'},{id:'foodblog',name:'Food Blog',desc:'Orange & red',file:'53940.txt',bg:'#f12711',bg2:'#f5af19',color:'#fff'},{id:'fashion',name:'Fashion',desc:'Coral & pink',file:'97250.txt',bg:'#ff6b6b',bg2:'#ee5a24',color:'#fff'},{id:'techblog',name:'Tech Blog',desc:'Cyber blue',file:'90500.txt',bg:'#0f2027',bg2:'#2c5364',color:'#00d4ff'},{id:'travel',name:'Travel',desc:'Ocean blue',file:'13426.txt',bg:'#00b4db',bg2:'#0083b0',color:'#fff'},{id:'news',name:'News',desc:'Black & red',file:'38831.txt',bg:'#434343',bg2:'#000000',color:'#e63946'}];
  for(var i=0;i<th.length;i++){
    var tt2=th[i];
    var lockClass = !gate.allowed ? ' nl-theme-locked' : '';
    h2 += '<div onclick="nlIT(\''+tt2.id+'\')" class="nl-theme-card'+lockClass+'" style="border:2px solid #e8ecf1;border-radius:16px;overflow:hidden;cursor:pointer;background:#fff;position:relative;'+(!gate.allowed?'opacity:0.55;':'')+'"><div style="height:70px;display:flex;align-items:center;justify-content:center;font-weight:700;background:linear-gradient(135deg,'+tt2.bg+','+tt2.bg2+');color:'+tt2.color+';">'+tt2.name+'</div><div style="padding:10px 12px;"><h4 style="color:#1a1a2e;font-size:11pt;font-weight:700;margin:0 0 2px;">'+tt2.name+'</h4><p style="color:#6b7280;font-size:9pt;margin:0;">'+tt2.desc+'</p><span style="display:inline-block;background:#f0f2f5;color:#6b7280;font-size:8pt;padding:1px 8px;border-radius:50px;margin-top:4px;">'+tt2.file+'</span></div>'+(!gate.allowed?'<div style="position:absolute;top:8px;right:8px;background:#0F172A;color:#FFD700;width:26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;border:2px solid #FFD700;"><i class="fas fa-lock"></i></div>':'')+'</div>';
  }
  h2+='</div></div></div></div>';
  $('body').append(h2);
  if(!gate.allowed && !sessionStorage.getItem('nl_theme_paywall_shown')){
    try{sessionStorage.setItem('nl_theme_paywall_shown','1')}catch(e){}
    setTimeout(function(){
      $('body').append('<div id="nl-theme-modal" style="position:fixed;inset:0;z-index:999999;display:flex;align-items:center;justify-content:center;background:rgba(15,23,42,0.85);font-family:Inter,sans-serif;padding:20px;"><div style="background:#FFF;border:4px solid #0F172A;border-radius:24px;max-width:480px;width:100%;padding:28px;box-shadow:12px 12px 0 0 #0F172A;text-align:center;position:relative;"><button onclick="document.getElementById(\'nl-theme-modal\').remove()" style="position:absolute;top:12px;right:12px;background:none;border:none;font-size:22px;cursor:pointer;color:#64748B;">&times;</button><div style="display:inline-flex;align-items:center;justify-content:center;width:80px;height:80px;border-radius:50%;background:#FFB84D;border:4px solid #0F172A;box-shadow:4px 4px 0 0 #0F172A;font-size:38px;margin-bottom:16px;">🎨</div><h2 style="color:#0F172A;font-size:22px;font-weight:900;margin:0 0 10px 0;">Theme switches used up</h2><p style="color:#334155;font-size:14px;font-weight:500;line-height:1.55;margin:0 0 20px 0;">You\'ve used all your free theme switches. Subscribe to switch again and unlock unlimited switching.</p><button onclick="document.getElementById(\'nl-theme-modal\').remove();nlSP();" style="width:100%;padding:14px;background:#FF4D6D;color:#FFF;border:3px solid #0F172A;border-radius:14px;font-size:15px;font-weight:900;font-family:Space Grotesk, Inter, sans-serif;cursor:pointer;box-shadow:4px 4px 0 0 #0F172A;margin-bottom:10px;"><i class="fas fa-crown"></i> View Subscription Plans</button><button onclick="document.getElementById(\'nl-theme-modal\').remove()" style="width:100%;padding:12px;background:#F0F2F5;color:#0F172A;border:3px solid #0F172A;border-radius:14px;font-size:14px;font-weight:800;font-family:Space Grotesk, Inter, sans-serif;cursor:pointer;box-shadow:4px 4px 0 0 #0F172A;">Maybe Later</button></div></div>');
    },600);
  }
  nlReady();return
}

if(iS){
  if(nlIsHub){
    if(ia){nlReady();setTimeout(function(){var $sl2=$('select[name="form[o_custom_style]"]');if($sl2.length>0){if($sl2.val()!=='1'){$sl2.val('1').trigger('change')}$sl2.css({display:'none'})}},500);setTimeout(function(){$('input[type="radio"][value="1"]').each(function(){if(!$(this).prop('checked')){$(this).prop('checked',true)}})},800);return}
    nlReady();$('body').children().hide();$('body').append('<div style="display:flex;align-items:center;justify-content:center;min-height:100vh;background:#2865F1;color:#fff;font-family:Inter,sans-serif;"><div style="text-align:center;"><div style="font-size:64px;margin-bottom:16px;"><i class="fas fa-lock"></i></div><h2 style="font-size:28px;font-weight:800;">Access Restricted</h2><p>Please use the Theme Selector to configure your forum.</p><p style="font-size:12px;opacity:0.6;">Redirecting...</p></div></div>');setTimeout(function(){window.location.href='/admin_index.php'},2500);return;
  }
  nlReady();$('body').children().hide();$('body').append('<div style="display:flex;align-items:center;justify-content:center;min-height:100vh;background:#2865F1;color:#fff;font-family:Inter,sans-serif;"><div style="text-align:center;"><div style="font-size:64px;margin-bottom:16px;"><i class="fas fa-lock"></i></div><h2 style="font-size:28px;font-weight:800;">Access Restricted</h2><p>Please use the Theme Selector to configure your forum.</p><p style="font-size:12px;opacity:0.6;">Redirecting...</p></div></div>');setTimeout(function(){window.location.href='/admin_index.php'},2500);return;
}

if(iF){var oT='punbb';if(Q.indexOf('nl_type=nairaland')>=0)oT='nairaland';else if(Q.indexOf('nl_type=portfolio')>=0)oT='portfolio';else if(Q.indexOf('nl_type=landing')>=0)oT='landing';else if(Q.indexOf('nl_type=grocery')>=0)oT='grocery';else if(Q.indexOf('nl_type=foodblog')>=0)oT='foodblog';else if(Q.indexOf('nl_type=fashion')>=0)oT='fashion';else if(Q.indexOf('nl_type=techblog')>=0)oT='techblog';else if(Q.indexOf('nl_type=travel')>=0)oT='travel';else if(Q.indexOf('nl_type=news')>=0)oT='news';var prv=nlTP[oT]||nlTP.punbb;var $ht=$('textarea[name="form[o_html_header]"]');if($ht.length>0){var ph=null;try{ph=sessionStorage.getItem('nl_install_code')}catch(e){}if(ph!==null&&ph!==undefined){$ht.val(ph);try{sessionStorage.removeItem('nl_install_code')}catch(e){}}if(!$ht.parent().hasClass('nl-textarea-wrapper')){$ht.wrap('<div class="nl-textarea-wrapper"></div>')}$ht.attr('readonly','readonly').attr('tabindex','-1')}var $ft=$('textarea[name="form[o_html_footer]"]');if($ft.length>0){var pf=null;try{pf=sessionStorage.getItem('nl_install_footer')}catch(e){}if(pf!==null&&pf!==undefined){$ft.val(pf);try{sessionStorage.removeItem('nl_install_footer')}catch(e){}}if(!$ft.parent().hasClass('nl-textarea-wrapper')){$ft.wrap('<div class="nl-textarea-wrapper"></div>')}$ft.attr('readonly','readonly').attr('tabindex','-1')}$('#nl-header-overlay,#nl-footer-overlay').remove();var hov='<div class="nl-header-overlay" id="nl-header-overlay"><h3>'+prv.name+' - Header Code</h3><div class="nl-header-preview" style="background:linear-gradient(135deg,'+prv.bg+','+prv.bg2+');color:'+prv.color+';">'+prv.name+'</div><p>Header code loaded.</p><span class="nl-overlay-note">Save to apply</span></div>';var fov='<div class="nl-header-overlay" id="nl-footer-overlay"><h3>'+prv.name+' - Admin Config</h3><div class="nl-header-preview" style="background:linear-gradient(135deg,'+prv.bg+','+prv.bg2+');color:'+prv.color+';">Admin: '+prv.name+'</div><p>Admin config loaded.</p><span class="nl-overlay-note">Save to apply</span></div>';if($ht.length>0)$ht.parent().append(hov);if($ft.length>0)$ft.parent().append(fov);$('#nl-header-overlay,#nl-footer-overlay').on('click mousedown mouseup keydown keypress focus',function(e){e.preventDefault();e.stopPropagation();return false});var $sb2=$('input[name="save"],input[type="submit"][value*="Save"]');if($sb2.length>0){$sb2.css({background:'#2865F1',color:'#fff',padding:'14px 36px','font-size':'15pt',border:'3px solid #1a4bbf','border-radius':'12px'})}if($ht.closest('form').length>0){
      $ht.closest('form').prepend('<div class="nl-toggle-settings"><a id="nl-toggle-btn" onclick="nlTgl()">Show All Settings</a></div>');
      var $fm3=$ht.closest('form');
      var launchedFromTheme = Q.indexOf('nl_type=')>=0;
      if(launchedFromTheme){
        $('body').children().hide();
        $('body').append('<div style="display:flex;align-items:center;justify-content:center;min-height:100vh;background:#2865F1;color:#fff;font-family:Inter,sans-serif;"><div style="text-align:center;"><div style="font-size:64px;margin-bottom:16px;"><i class="fas fa-check-circle"></i></div><h2>Applying '+prv.name+' theme...</h2><p style="opacity:0.85;">This only takes a moment</p></div></div>');
        setTimeout(function(){
          if($fm3.length>0){
            var fd3=$fm3.serialize();
            if(fd3.indexOf('save')===-1)fd3+='&save=1';
            $.ajax({url:$fm3.attr('action')||H,type:'POST',data:fd3,complete:function(){
              try{sessionStorage.setItem('nl_custom_style_enabled','true')}catch(e){}
              nlForceCustomStyleAndProceed('/admin_index.php');
            }});
          }
        }, 800);
      } else {
        $fm3.off('submit').on('submit',function(e){e.preventDefault();e.stopPropagation();$('body').children().hide();$('body').append('<div style="display:flex;align-items:center;justify-content:center;min-height:100vh;background:#2865F1;color:#fff;font-family:Inter,sans-serif;"><div style="text-align:center;"><h2>Theme Saved!</h2><p>Redirecting...</p></div></div>');var fd3=$fm3.serialize();if(fd3.indexOf('save')===-1)fd3+='&save=1';$.ajax({url:$fm3.attr('action')||H,type:'POST',data:fd3,complete:function(){try{sessionStorage.setItem('nl_custom_style_enabled','true')}catch(e){}setTimeout(function(){window.location.href='/admin_index.php'},2000)}});return false});
      }
    }nlReady();return}

if(ia&&iAP&&!iAI&&!iS&&!iF&&!sT){var at3=nlDT()||'punbb';var p2=nlUA.palettes[at3]||nlUA.palettes.punbb;var pi={admin_categories:{name:'Categories',icon:'fa-folder'},admin_forums:{name:'Forums',icon:'fa-comments'},admin_users:{name:'Users',icon:'fa-users'},admin_fields:{name:'Profile Fields',icon:'fa-user-edit'},admin_options:{name:'Options',icon:'fa-cog'},admin_permissions:{name:'Permissions',icon:'fa-lock'},admin_groups:{name:'User Groups',icon:'fa-user-tag'},admin_pages:{name:'Pages',icon:'fa-file-alt'},admin_censoring:{name:'Censoring',icon:'fa-ban'},admin_files:{name:'Files',icon:'fa-image'},admin_domain:{name:'Domain',icon:'fa-globe'},admin_backups:{name:'Backups',icon:'fa-database'},admin_scripts:{name:'Scripts',icon:'fa-terminal'},admin_logs:{name:'Forum Logs',icon:'fa-history'},admin_paid_services:{name:'Paid Services',icon:'fa-credit-card'},admin_mail:{name:'Mass Mailing',icon:'fa-envelope'}};var ci={name:'Admin Tools',icon:'fa-tools'};var pk=Object.keys(pi);for(var k=0;k<pk.length;k++){if(H.indexOf(pk[k])>=0){ci=pi[pk[k]];break}}var pt=$('#pun-admain h1, #pun-main h1, h1').first().text()||ci.name;var wH='<div id="nl-tool-page" style="min-height:100vh;background:linear-gradient(135deg,'+p2.bg+','+p2.bgGrad+');padding-bottom:40px;font-family:Inter,sans-serif;"><div style="background:rgba(255,255,255,0.12);padding:0 24px;"><div style="max-width:1280px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;height:64px;"><a href="/admin_index.php" style="color:#fff;font-weight:600;text-decoration:none;"><i class="fas fa-arrow-left"></i> Dashboard</a><span style="color:#fff;font-weight:700;"><i class="fas '+ci.icon+'" style="color:#FFD700;"></i> '+ci.name+'</span></div></div><div style="max-width:1280px;margin:24px auto;width:96%;"><div style="background:#fff;border-radius:20px;padding:32px;"><h1 style="color:'+p2.text+';font-size:24px;font-weight:800;margin:0 0 20px;">'+pt+'</h1><div id="nl-tool-content"></div></div></div></div>';$('body').css({margin:'0',padding:'0',background:p2.bg});$('#pun_wrap,#pun').css({background:'transparent',margin:'0',padding:'0','max-width':'100%',width:'100%'});$('#pun-title,#pun-navlinks,#pun-ulinks,#pun-status,#pun-break1,#pun-crumbs1,#pun-break2,#pun-adnav,#pun-break3,#pun-crumbs2,#pun-break4,#pun-about,#pun-stats').hide();$('body').prepend(wH);$('#pun-main, #pun-admain, .main').appendTo('#nl-tool-content');nlReady();return}

if(window.location.pathname.indexOf('login.php')>=0 || window.location.pathname.indexOf('register.php')>=0){
  var _authTries = 0;
  var _authIv = setInterval(function(){
    _authTries++;
    var _authTheme = document.body && document.body.getAttribute('data-nl-theme');
    if(_authTheme){
      clearInterval(_authIv);
      nlReady();
      return;
    }
    if(_authTries >= 10){
      clearInterval(_authIv);
      nlRenderLogin();
    }
  }, 50);
  return;
}

if(window.location.pathname.indexOf('profile.php')>=0){
  nlReady();
  return;
}

var isHome = (window.location.pathname === '' ||
              window.location.pathname === '/' ||
              window.location.pathname === '/index.php' ||
              /^\/index\.php$/.test(window.location.pathname));

if (isHome) {
  var themeAttr = document.body && document.body.getAttribute('data-nl-theme');
  var hasThemeMarkup = !!themeAttr || $('.nl-navbar').length > 0 || $('.nl-boards-table').length > 0;

  if (!hasThemeMarkup) {
    $('#pun-index .main, #pun .main, .punbb .main, #pun-stats, #pun-announcement, #pun-crumbs1, #pun-crumbs2, #pun-title, #pun-navlinks, #pun-ulinks, #pun-status').hide();

    if ($('#nl-construction-card, #nl-welcome-card').length === 0) {
      var cardHTML = '';
      if (!ia) {
        cardHTML =
          '<div id="nl-construction-card" style="position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;background:#FFF8EE;background-image:radial-gradient(circle at 15% 20%,#FF4D6D 1.2px,transparent 1.6px),radial-gradient(circle at 70% 60%,#4DA8FF 1.2px,transparent 1.6px),radial-gradient(circle at 40% 85%,#3DDC97 1.2px,transparent 1.6px);background-size:80px 80px,120px 120px,100px 100px;font-family:Inter,system-ui,sans-serif;padding:24px;overflow:auto;">' +
            '<style>@keyframes nlFloat{0%,100%{transform:translateY(0) rotate(-3deg)}50%{transform:translateY(-14px) rotate(3deg)}}@keyframes nlBounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}</style>' +
            '<div style="background:#7C5CFF;border:4px solid #0F172A;border-radius:28px;padding:20px;box-shadow:12px 12px 0 0 #0F172A;max-width:640px;width:100%;position:relative;overflow:hidden;">' +
              '<div style="position:absolute;top:-50px;right:-50px;width:140px;height:140px;border-radius:50%;background:#FFB84D;border:4px solid #0F172A;opacity:0.9;"></div>' +
              '<div style="position:absolute;bottom:-40px;left:-40px;width:110px;height:110px;border-radius:50%;background:#3DDC97;border:4px solid #0F172A;opacity:0.9;"></div>' +
              '<div style="background:#FFF;border-radius:18px;padding:36px 26px;border:3px solid #0F172A;box-shadow:6px 6px 0 0 #0F172A;position:relative;z-index:1;text-align:center;">' +
                '<div style="display:inline-flex;align-items:center;justify-content:center;width:110px;height:110px;border-radius:50%;background:#3DDC97;border:4px solid #0F172A;box-shadow:6px 6px 0 0 #0F172A;font-size:52px;color:#FFF;margin-bottom:22px;animation:nlFloat 3s ease-in-out infinite;transform:rotate(-3deg);">🚧</div>' +
                '<div style="display:inline-flex;align-items:center;gap:8px;background:#FFF;border:3px solid #0F172A;color:#0F172A;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:1.5px;padding:6px 16px;border-radius:50px;margin-bottom:16px;box-shadow:4px 4px 0 0 #0F172A;transform:rotate(-2deg);"><i class="fas fa-hammer" style="color:#FF6B35;"></i> Work in Progress</div>' +
                '<h1 style="color:#0F172A;font-size:38px;font-weight:900;letter-spacing:-1.5px;line-height:1.05;margin:0 0 16px 0;font-family:Space Grotesk, Inter, sans-serif;">We\'re building<br><span style="display:inline-block;background:#FF4D6D;color:#FFF;padding:0 14px;border:4px solid #0F172A;border-radius:14px;transform:rotate(-1.5deg);box-shadow:5px 5px 0 0 #0F172A;margin-top:6px;">something great</span></h1>' +
                '<p style="color:#334155;font-size:15px;font-weight:500;line-height:1.65;margin:0 0 26px 0;">This website is still being set up.<br>Please check back soon — good things take time. ✨</p>' +
                '<div style="display:flex;justify-content:center;gap:12px;margin:0 0 26px 0;"><div style="width:14px;height:14px;border-radius:50%;background:#FF4D6D;border:3px solid #0F172A;animation:nlBounce 1.2s ease-in-out infinite;"></div><div style="width:14px;height:14px;border-radius:50%;background:#FFB84D;border:3px solid #0F172A;animation:nlBounce 1.2s ease-in-out 0.2s infinite;"></div><div style="width:14px;height:14px;border-radius:50%;background:#3DDC97;border:3px solid #0F172A;animation:nlBounce 1.2s ease-in-out 0.4s infinite;"></div></div>' +
                '<a href="/login.php" style="display:inline-flex;align-items:center;gap:10px;padding:14px 32px;background:#FF4D6D;color:#FFF;border:3px solid #0F172A;border-radius:14px;text-decoration:none;font-size:15px;font-weight:800;font-family:Space Grotesk, Inter, sans-serif;box-shadow:5px 5px 0 0 #0F172A;transition:all 0.15s;"><i class="fas fa-sign-in-alt"></i> Admin Login</a>' +
                '<p style="margin:22px 0 0 0;font-size:11px;color:#64748B;font-weight:700;text-transform:uppercase;letter-spacing:1px;">Powered by MyWebName</p>' +
              '</div>' +
            '</div>' +
          '</div>';
      } else {
        cardHTML =
          '<div id="nl-welcome-card" style="position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;background:#FFF8EE;background-image:radial-gradient(circle at 15% 20%,#FF4D6D 1.2px,transparent 1.6px),radial-gradient(circle at 70% 60%,#4DA8FF 1.2px,transparent 1.6px),radial-gradient(circle at 40% 85%,#3DDC97 1.2px,transparent 1.6px);background-size:80px 80px,120px 120px,100px 100px;font-family:Inter,system-ui,sans-serif;padding:24px;overflow:auto;">' +
            '<style>@keyframes nlFloat{0%,100%{transform:translateY(0) rotate(-3deg)}50%{transform:translateY(-14px) rotate(3deg)}}</style>' +
            '<div style="background:#FFB84D;border:4px solid #0F172A;border-radius:28px;padding:20px;box-shadow:12px 12px 0 0 #0F172A;max-width:640px;width:100%;position:relative;overflow:hidden;">' +
              '<div style="position:absolute;top:-50px;right:-50px;width:140px;height:140px;border-radius:50%;background:#7C5CFF;border:4px solid #0F172A;opacity:0.9;"></div>' +
              '<div style="position:absolute;bottom:-40px;left:-40px;width:110px;height:110px;border-radius:50%;background:#FF4D6D;border:4px solid #0F172A;opacity:0.9;"></div>' +
              '<div style="background:#FFF;border-radius:18px;padding:36px 26px;border:3px solid #0F172A;box-shadow:6px 6px 0 0 #0F172A;position:relative;z-index:1;text-align:center;">' +
                '<div style="display:inline-flex;align-items:center;justify-content:center;width:110px;height:110px;border-radius:50%;background:#FFD700;border:4px solid #0F172A;box-shadow:6px 6px 0 0 #0F172A;font-size:52px;color:#FFF;margin-bottom:22px;animation:nlFloat 3s ease-in-out infinite;transform:rotate(-3deg);">👋</div>' +
                '<div style="display:inline-flex;align-items:center;gap:8px;background:#FFF;border:3px solid #0F172A;color:#0F172A;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:1.5px;padding:6px 16px;border-radius:50px;margin-bottom:16px;box-shadow:4px 4px 0 0 #0F172A;transform:rotate(-2deg);"><i class="fas fa-crown" style="color:#FFD700;"></i> Admin Detected</div>' +
                '<h1 style="color:#0F172A;font-size:38px;font-weight:900;letter-spacing:-1.5px;line-height:1.05;margin:0 0 16px 0;font-family:Space Grotesk, Inter, sans-serif;">Welcome, Admin! 🎉<br><span style="display:inline-block;background:#7C5CFF;color:#FFF;padding:0 14px;border:4px solid #0F172A;border-radius:14px;transform:rotate(-1.5deg);box-shadow:5px 5px 0 0 #0F172A;margin-top:6px;">let\'s set things up</span></h1>' +
                '<p style="color:#334155;font-size:15px;font-weight:500;line-height:1.65;margin:0 0 26px 0;">Your website is ready to go live.<br>Pick a theme to get started — takes less than a minute.</p>' +
                '<div style="display:flex;flex-direction:column;gap:12px;align-items:stretch;margin:0 0 20px 0;">' +
                  '<a href="/index.php?theme" style="display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:16px 32px;background:#FF4D6D;color:#FFF;border:3px solid #0F172A;border-radius:14px;text-decoration:none;font-size:16px;font-weight:800;font-family:Space Grotesk, Inter, sans-serif;box-shadow:5px 5px 0 0 #0F172A;transition:all 0.15s;"><i class="fas fa-paint-brush"></i> Choose a Theme</a>' +
                  '<a href="/admin_index.php" style="display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:14px 32px;background:#FFF;color:#0F172A;border:3px solid #0F172A;border-radius:14px;text-decoration:none;font-size:15px;font-weight:800;font-family:Space Grotesk, Inter, sans-serif;box-shadow:5px 5px 0 0 #0F172A;transition:all 0.15s;"><i class="fas fa-tachometer-alt"></i> Go to Admin Panel</a>' +
                '</div>' +
                '<p style="margin:22px 0 0 0;font-size:11px;color:#64748B;font-weight:700;text-transform:uppercase;letter-spacing:1px;">You are logged in as admin</p>' +
              '</div>' +
            '</div>' +
          '</div>';
      }
      $('body').prepend(cardHTML);
      var $cta = $('#nl-construction-card a, #nl-welcome-card a');
      $cta.on('mouseenter', function(){ this.style.transform = 'translate(3px, 3px)'; this.style.boxShadow = '2px 2px 0 0 #0F172A'; }).on('mouseleave', function(){ this.style.transform = ''; this.style.boxShadow = '5px 5px 0 0 #0F172A'; });
    }
    nlReady();
    return;
  }
}

var themeAttrAny = document.body && document.body.getAttribute('data-nl-theme');
var hasThemeMarkupAny = !!themeAttrAny || $('.nl-navbar').length > 0 || $('.nl-boards-table').length > 0;
if (!hasThemeMarkupAny && $('#nl-construction-card, #nl-welcome-card').length === 0 && !$('#nl-customizer').length) {
  $('#pun-index .main, #pun .main, .punbb .main, #pun-stats, #pun-announcement, #pun-crumbs1, #pun-crumbs2, #pun-title, #pun-navlinks, #pun-ulinks, #pun-status').hide();
  var cardFallback = !ia
    ? '<div id="nl-construction-card" style="position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;background:#FFF8EE;background-image:radial-gradient(circle at 15% 20%,#FF4D6D 1.2px,transparent 1.6px),radial-gradient(circle at 70% 60%,#4DA8FF 1.2px,transparent 1.6px),radial-gradient(circle at 40% 85%,#3DDC97 1.2px,transparent 1.6px);background-size:80px 80px,120px 120px,100px 100px;font-family:Inter,system-ui,sans-serif;padding:24px;overflow:auto;"><div style="background:#7C5CFF;border:4px solid #0F172A;border-radius:28px;padding:20px;box-shadow:12px 12px 0 0 #0F172A;max-width:640px;width:100%;"><div style="background:#FFF;border-radius:18px;padding:36px 26px;border:3px solid #0F172A;box-shadow:6px 6px 0 0 #0F172A;text-align:center;"><div style="font-size:52px;margin-bottom:22px;">🚧</div><h1 style="color:#0F172A;font-size:32px;font-weight:900;margin:0 0 16px 0;">Under Construction</h1><p style="color:#334155;font-size:15px;margin:0 0 26px 0;">This website is still being set up.</p><a href="/login.php" style="display:inline-flex;align-items:center;gap:10px;padding:14px 32px;background:#FF4D6D;color:#FFF;border:3px solid #0F172A;border-radius:14px;text-decoration:none;font-size:15px;font-weight:800;box-shadow:5px 5px 0 0 #0F172A;"><i class="fas fa-sign-in-alt"></i> Admin Login</a></div></div></div>'
    : '<div id="nl-welcome-card" style="position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;background:#FFF8EE;background-image:radial-gradient(circle at 15% 20%,#FF4D6D 1.2px,transparent 1.6px),radial-gradient(circle at 70% 60%,#4DA8FF 1.2px,transparent 1.6px),radial-gradient(circle at 40% 85%,#3DDC97 1.2px,transparent 1.6px);background-size:80px 80px,120px 120px,100px 100px;font-family:Inter,system-ui,sans-serif;padding:24px;overflow:auto;"><div style="background:#FFB84D;border:4px solid #0F172A;border-radius:28px;padding:20px;box-shadow:12px 12px 0 0 #0F172A;max-width:640px;width:100%;"><div style="background:#FFF;border-radius:18px;padding:36px 26px;border:3px solid #0F172A;box-shadow:6px 6px 0 0 #0F172A;text-align:center;"><div style="font-size:52px;margin-bottom:22px;">👋</div><h1 style="color:#0F172A;font-size:32px;font-weight:900;margin:0 0 16px 0;">Welcome, Admin!</h1><p style="color:#334155;font-size:15px;margin:0 0 26px 0;">Pick a theme to get started.</p><a href="/index.php?theme" style="display:inline-flex;align-items:center;gap:10px;padding:16px 32px;background:#FF4D6D;color:#FFF;border:3px solid #0F172A;border-radius:14px;text-decoration:none;font-size:16px;font-weight:800;box-shadow:5px 5px 0 0 #0F172A;"><i class="fas fa-paint-brush"></i> Choose a Theme</a></div></div></div>';
  $('body').prepend(cardFallback);
}

nlReady();
});

window.addEventListener('message',function(ev){if(ev&&ev.data&&ev.data.type==='nl-preview'&&ev.data.data){setTimeout(function(){try{nlInjectCustomization(ev.data.data)}catch(e){}},100)}});

window.nlTS=nlTS;window.nlTgl=nlTgl;

})();
