//<![CDATA[
function removeHtmlTag(e,t){for(var s=e.split("<"),r=0;r<s.length;r++)-1!=s[r].indexOf(">")&&(s[r]=s[r].substring(s[r].indexOf(">")+1,s[r].length));return s=s.join(""),s=s.substring(0,t-1)}function sliderposts(e){j=showRandomImg?Math.floor((imgr.length+1)*Math.random()):0,img=new Array,numposts1<=e.feed.entry.length?maxpost=numposts1:maxpost=e.feed.entry.length;for(var t=0;t<maxpost;t++){var r,i,n=e.feed.entry[t],l=n.category[0].term,o=n.title.$t;if(t==e.feed.entry.length)break;for(var m=0;m<n.link.length;m++)if("alternate"==n.link[m].rel){i=n.link[m].href;break}for(var m=0;m<n.link.length;m++)if("replies"==n.link[m].rel&&"text/html"==n.link[m].type){r=n.link[m].title.split(" ")[0];break}if("content"in n)var g=n.content.$t;else if("summary"in n)var g=n.summary.$t;else var g="";postdate=n.published.$t,j>imgr.length-1&&(j=0),img[t]=imgr[j],s=g,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),-1!=a&&-1!=b&&-1!=c&&""!=d&&(img[t]=d);for(var h=[1,2,3,4,5,6,7,8,9,10,11,12],p=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],f=(postdate.split("-")[2].substring(0,2),postdate.split("-")[1]),u=(postdate.split("-")[0],0);u<h.length;u++)if(parseInt(f)==h[u]){f=p[u];break}if(0==t){var v='<div class="main-post col-post"><a href="'+i+'"><span class="blue">'+l+'</span><img src="'+img[t]+'" height="350" width="640" alt=""></img></a><header><h3 class="entry-title"><a href="'+i+'" title="">'+o+"</a></h3></header></div>";document.write(v)}else{var v='<div class="secondary-post col-post" style="margin-right:0"><span class="blue">'+l+'</span><a class="hover_play_small" href="'+i+'"><img src="'+img[t]+'" height="200" width="320"></img></a><header><h4><a href="'+i+'">'+o+"</a></h4></header></div>";document.write(v)}j++}}imgr=new Array,imgr[0]="http://sites.google.com/site/fdblogsite/Home/nothumbnail.gif",showRandomImg=!0,aBold=!0,summaryPost=150,summaryTitle=50,numposts1=10,featured_numposts="3";
//Label Badge

//]]>