!function(t){t.fn.formatObjectiveC=function(){var n=t(this).text().replace(/(\w)\*/g, "$1 *").replace(/\*(\w)/g, "* $1").replace(/,(\w)/g, ", $1"),a=/^(-|\+)([ ]{0,})\([^:]+\)([^ ]+):/gi,e=/^(-|\+)([ ]{0,})\([^:]+\)(([^ ]+):\([^:]+\)([^ ]+)([ ]{0,1}))/gi,h=/(([^ ]+):\([^:]+\)([^ ]+)([ ]{0,1}))/gi,c=/([^:]+):/gi,i=/\)([^)]+)([ ]{0,1})$/gi,r=n.match(a);if(r&&1==r.length){var g=n.replace(e,"").match(h),l=r[0].length;t(g).each(function(t,n){var a=l-n.match(c)[0].length;0>=a&&(l=n.match(c)[0].length)});var m=n.match(e)[0];m=m.replace(i,")###$1###")+"\n",r[0].length<l&&(m=Array(l-r[0].length+1).join(" ")+m),t(g).each(function(t,n){var a=l-n.match(c)[0].length;m+=Array(a+1).join(" ")+n.replace(i,")###$1###")+"\n"}),m=m.replace(/</g, '&lt;'),m=m.replace(/>/g, '&gt;'),t(this).html(m)}}}(jQuery);