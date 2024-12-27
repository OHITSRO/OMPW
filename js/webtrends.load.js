// WebTrends SmartSource Data Collector Tag v10.3.7
// Copyright (c) 2013 Webtrends Inc.  All rights reserved.
// Tag Builder Version: 4.1.1.4
// Created: 2013.07.24
window.webtrendsAsyncInit=function(){
    var dcs=new Webtrends.dcs().init({
        dcsid:"dcs5b735f00000w4hplieh7ax_3i9h",
        domain:"statistics.umc.edu",
        timezone:-6,
        i18n:true,
        offsite:true,
        download:true,
        downloadtypes:"xls,doc,pdf,txt,csv,zip,docx,xlsx,rar,gzip",
        onsitedoms:"umc.edu",
        fpcdom:".umc.edu",
        plugins:{
            //hm:{src:"//s.webtrends.com/js/webtrends.hm.js"}
        }
        }).track();
};
(function(){
    var s=document.createElement("script"); s.async=true; s.src="/js/webtrends.min.js";    
    var s2=document.getElementsByTagName("script")[0]; s2.parentNode.insertBefore(s,s2);
}());
