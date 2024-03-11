from bs4 import BeautifulSoup
import json

xml_to_extract = """
<div class="entry-content clear" itemprop="text">

		
		
<figure class="wp-block-image size-large"><img fetchpriority="high" decoding="async" width="1024" height="576" src="https://www.color-meanings.com/wp-content/uploads/2022/10/list-colors-names-hex-codes-1024x576.png" alt="List of colors with color names and hex codes" class="wp-image-27672 entered lazyloaded" data-lazy-srcset="https://www.color-meanings.com/wp-content/uploads/2022/10/list-colors-names-hex-codes-1024x576.png 1024w, https://www.color-meanings.com/wp-content/uploads/2022/10/list-colors-names-hex-codes-300x169.png 300w, https://www.color-meanings.com/wp-content/uploads/2022/10/list-colors-names-hex-codes-768x432.png 768w, https://www.color-meanings.com/wp-content/uploads/2022/10/list-colors-names-hex-codes-1536x864.png 1536w, https://www.color-meanings.com/wp-content/uploads/2022/10/list-colors-names-hex-codes-2048x1152.png 2048w" data-lazy-sizes="(max-width: 1024px) 100vw, 1024px" data-lazy-src="https://www.color-meanings.com/wp-content/uploads/2022/10/list-colors-names-hex-codes-1024x576.png" data-ll-status="loaded" sizes="(max-width: 1024px) 100vw, 1024px" srcset="https://www.color-meanings.com/wp-content/uploads/2022/10/list-colors-names-hex-codes-1024x576.png 1024w, https://www.color-meanings.com/wp-content/uploads/2022/10/list-colors-names-hex-codes-300x169.png 300w, https://www.color-meanings.com/wp-content/uploads/2022/10/list-colors-names-hex-codes-768x432.png 768w, https://www.color-meanings.com/wp-content/uploads/2022/10/list-colors-names-hex-codes-1536x864.png 1536w, https://www.color-meanings.com/wp-content/uploads/2022/10/list-colors-names-hex-codes-2048x1152.png 2048w"><noscript><img fetchpriority="high" decoding="async" width="1024" height="576" src="https://www.color-meanings.com/wp-content/uploads/2022/10/list-colors-names-hex-codes-1024x576.png" alt="List of colors with color names and hex codes" class="wp-image-27672" srcset="https://www.color-meanings.com/wp-content/uploads/2022/10/list-colors-names-hex-codes-1024x576.png 1024w, https://www.color-meanings.com/wp-content/uploads/2022/10/list-colors-names-hex-codes-300x169.png 300w, https://www.color-meanings.com/wp-content/uploads/2022/10/list-colors-names-hex-codes-768x432.png 768w, https://www.color-meanings.com/wp-content/uploads/2022/10/list-colors-names-hex-codes-1536x864.png 1536w, https://www.color-meanings.com/wp-content/uploads/2022/10/list-colors-names-hex-codes-2048x1152.png 2048w" sizes="(max-width: 1024px) 100vw, 1024px" /></noscript></figure>



<p>Here is a useful list of colors with color names and hex codes – the color dictionary!</p>



<p>The list is divided into color categories for quick navigation. These are: red, orange, yellow, green, blue, purple, pink, brown, black, gray, and white.</p><div id="AdThrive_Content_1_desktop" class="adthrive-ad adthrive-content adthrive-content-1 adthrive-ad-cls" style="min-height: 250px;" data-google-query-id="CL-MpMWoqYMDFfySgwcdP4sCCQ"><div id="google_ads_iframe_/18190176,102666410/AdThrive_Content_1/6076f3f65b19ff345e93d01b_0__container__" style="border: 0pt;"><iframe id="google_ads_iframe_/18190176,102666410/AdThrive_Content_1/6076f3f65b19ff345e93d01b_0" name="google_ads_iframe_/18190176,102666410/AdThrive_Content_1/6076f3f65b19ff345e93d01b_0" title="3rd party ad content" width="1" height="1" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" style="border: 0px; vertical-align: bottom; width: 300px; height: 250px;" role="region" aria-label="Advertisement" tabindex="0" data-google-container-id="9" data-load-complete="true"></iframe></div></div>



<p>We have also added an alphabetical list of colors from A to Z if you are looking for specific color names.</p>



<p><strong>Click the links below to jump straight to each category:</strong></p>



<ul><li><a href="#red">Red Colors</a></li><li><a href="#orange">Orange Colors</a></li><li><a href="#yellow">Yellow Colors</a></li><li><a href="#green">Green Colors</a></li><li><a href="#blue">Blue Colors</a></li><li><a href="#purple">Purple Colors</a></li><li><a href="#pink">Pink Colors</a></li><li><a href="#brown">Brown Colors</a></li><li><a href="#black">Black Colors</a></li><li><a href="#gray">Gray Colors</a></li><li><a href="#white">White Colors</a></li><li><a href="#alphabetical-list-of-colors">Alphabetical List of Colors</a></li></ul>



<h2 class="wp-block-heading" id="red">Red Color Names</h2>



<figure class="wp-block-image size-large"><img decoding="async" width="940" height="788" src="https://www.color-meanings.com/wp-content/uploads/shades-of-red-color-names.png" alt="Shades of Red Color with Names and Hex Codes" class="wp-image-3205 entered lazyloaded" data-lazy-srcset="https://www.color-meanings.com/wp-content/uploads/shades-of-red-color-names.png 940w, https://www.color-meanings.com/wp-content/uploads/shades-of-red-color-names-300x251.png 300w, https://www.color-meanings.com/wp-content/uploads/shades-of-red-color-names-768x644.png 768w" data-lazy-sizes="(max-width: 940px) 100vw, 940px" data-lazy-src="https://www.color-meanings.com/wp-content/uploads/shades-of-red-color-names.png" data-ll-status="loaded" sizes="(max-width: 940px) 100vw, 940px" srcset="https://www.color-meanings.com/wp-content/uploads/shades-of-red-color-names.png 940w, https://www.color-meanings.com/wp-content/uploads/shades-of-red-color-names-300x251.png 300w, https://www.color-meanings.com/wp-content/uploads/shades-of-red-color-names-768x644.png 768w"><noscript><img decoding="async" width="940" height="788" src="https://www.color-meanings.com/wp-content/uploads/shades-of-red-color-names.png" alt="Shades of Red Color with Names and Hex Codes" class="wp-image-3205" srcset="https://www.color-meanings.com/wp-content/uploads/shades-of-red-color-names.png 940w, https://www.color-meanings.com/wp-content/uploads/shades-of-red-color-names-300x251.png 300w, https://www.color-meanings.com/wp-content/uploads/shades-of-red-color-names-768x644.png 768w" sizes="(max-width: 940px) 100vw, 940px" /></noscript></figure><div id="AdThrive_Content_2_desktop" class="adthrive-ad adthrive-content adthrive-content-2 adthrive-ad-cls" style="min-height: 250px;" data-google-query-id="CMz44tSoqYMDFVibgwcdc4EChA"><div id="google_ads_iframe_/18190176,102666410/AdThrive_Content_2/6076f3f65b19ff345e93d01b_0__container__" style="border: 0pt;"><iframe id="google_ads_iframe_/18190176,102666410/AdThrive_Content_2/6076f3f65b19ff345e93d01b_0" name="google_ads_iframe_/18190176,102666410/AdThrive_Content_2/6076f3f65b19ff345e93d01b_0" title="3rd party ad content" width="1" height="1" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" style="border: 0px; vertical-align: bottom; width: 728px; height: 90px;" role="region" aria-label="Advertisement" tabindex="0" data-google-container-id="7" data-load-complete="true"></iframe></div></div>



<p><a href="https://www.color-meanings.com/red-color-meaning-the-color-red/" data-type="post" data-id="168">The color red</a> symbolizes action, strength, energy, and passion.</p>



<p><strong>Here are 50 red color names with hex codes:</strong></p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#d0312d"><strong>RED</strong> #D0312D</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#990f02"><strong>CHERRY RED</strong> #990F02</p>



<p class="has-text-align-left has-white-color has-text-color has-background has-medium-font-size" style="background-color:#e3242b"><strong>ROSE</strong> #E3242B</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#60100b"><strong>JAM</strong> #60100B</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#541e1b"><strong>MERLOT</strong> #541E1B</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#610c04"><strong>GARNET</strong> #610C04</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#b90e0a"><strong>CRIMSON</strong> #B90E0A</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#900603"><strong>RUBY</strong> #900603</p><div id="AdThrive_Content_3_desktop" class="adthrive-ad adthrive-content adthrive-content-3 adthrive-ad-cls" style="min-height: 250px;" data-google-query-id="CJef-MSoqYMDFTyagwcdtMYDUA"><div id="google_ads_iframe_/18190176,102666410/AdThrive_Content_3/6076f3f65b19ff345e93d01b_0__container__" style="border: 0pt;"><iframe id="google_ads_iframe_/18190176,102666410/AdThrive_Content_3/6076f3f65b19ff345e93d01b_0" name="google_ads_iframe_/18190176,102666410/AdThrive_Content_3/6076f3f65b19ff345e93d01b_0" title="3rd party ad content" width="1" height="1" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" style="border: 0px; vertical-align: bottom;" role="region" aria-label="Advertisement" tabindex="0" data-google-container-id="8" data-load-complete="true"></iframe></div></div>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#900d09"><strong>SCARLET</strong> #900D09</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#4e0707"><strong>WINE</strong> #4E0707</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#7e2811"><strong>BRICK</strong> #7E2811</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#a91b0d"><strong>APPLE</strong> #A91B0D</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#420c09"><strong>MAHOGANY</strong> #420C09</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#710c04"><strong>BLOOD</strong> #710C04</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#5e1916"><strong>SANGRIA RED</strong> #5E1916</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#7a1712"><strong>BERRY</strong> #7A1712</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#680c07"><strong>CURRANT</strong> #680C07</p><div id="AdThrive_Content_4_desktop" class="adthrive-ad adthrive-content adthrive-content-4 adthrive-ad-cls" style="min-height: 250px;" data-google-query-id="CP3Uu8SoqYMDFYusgwcd1EkCZQ"><div id="google_ads_iframe_/18190176,102666410/AdThrive_Content_4/6076f3f65b19ff345e93d01b_0__container__" style="border: 0pt;"><iframe id="google_ads_iframe_/18190176,102666410/AdThrive_Content_4/6076f3f65b19ff345e93d01b_0" name="google_ads_iframe_/18190176,102666410/AdThrive_Content_4/6076f3f65b19ff345e93d01b_0" title="3rd party ad content" width="1" height="1" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" style="border: 0px; vertical-align: bottom;" role="region" aria-label="Advertisement" tabindex="0" data-google-container-id="4" data-load-complete="true"></iframe></div></div>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#bc544b"><strong>BLUSH RED</strong> #BC544B</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#d21404"><strong>CANDY</strong> #D21404</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#9b1003"><strong>LIPSTICK</strong> #9B1003</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#960018"><strong>CARMINE</strong> #960018</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#ca3433"><strong>PERSIAN RED</strong> #CA3433</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#7e191b"><strong>VERMILION</strong> #7E191B</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#ed2939;text-transform:uppercase"><strong>Imperial Red</strong> #ED2939</p>



<p class="has-ast-global-color-7-color has-text-color has-background has-medium-font-size" style="background-color:#cd5c5c;text-transform:uppercase"><strong>Indian Red</strong> #CD5C5C</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#c21807;text-transform:uppercase"><strong>Chili Red</strong> #C21807</p><div id="AdThrive_Content_5_desktop" class="adthrive-ad adthrive-content adthrive-content-5 adthrive-ad-cls" style="min-height: 250px;" data-google-query-id="CI-C3cWoqYMDFcuTdwodBOIKig"><div id="google_ads_iframe_/18190176,102666410/AdThrive_Content_5/6076f3f65b19ff345e93d01b_0__container__" style="border: 0pt;"><iframe id="google_ads_iframe_/18190176,102666410/AdThrive_Content_5/6076f3f65b19ff345e93d01b_0" name="google_ads_iframe_/18190176,102666410/AdThrive_Content_5/6076f3f65b19ff345e93d01b_0" title="3rd party ad content" width="1" height="1" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" style="border: 0px; vertical-align: bottom; width: 300px; height: 250px;" role="region" aria-label="Advertisement" tabindex="0" data-google-container-id="a" data-load-complete="true"></iframe></div></div>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#800000;text-transform:uppercase"><strong>Maroon</strong> #800000</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#b22222;text-transform:uppercase"><strong>Fire Brick</strong> #B22222</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#ea3c53;text-transform:uppercase"><strong>Desire</strong> #EA3C53</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#d21f3c;text-transform:uppercase"><strong>Raspberry</strong> #D21F3C</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#ff0800;text-transform:uppercase"><strong>Candy Apple</strong> #FF0800</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#b43757;text-transform:uppercase"><strong>Hibiscus</strong> #B43757</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#bf0a30;text-transform:uppercase"><strong>U.S. Flag</strong> #BF0A30</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#ff2800;text-transform:uppercase"><strong>Ferrari</strong> #FF2800</p>



<p class="has-ast-global-color-7-color has-text-color has-background has-medium-font-size" style="background-color:#8d021f;text-transform:uppercase"><strong>Burgundy</strong> #8D021F</p><div id="AdThrive_Content_6_desktop" class="adthrive-ad adthrive-content adthrive-content-6 adthrive-ad-cls" style="min-height: 250px;" data-google-query-id="CIaivMuoqYMDFV2ZgwcdFskLrA"><div id="google_ads_iframe_/18190176,102666410/AdThrive_Content_6/6076f3f65b19ff345e93d01b_0__container__" style="border: 0pt;"><iframe id="google_ads_iframe_/18190176,102666410/AdThrive_Content_6/6076f3f65b19ff345e93d01b_0" name="google_ads_iframe_/18190176,102666410/AdThrive_Content_6/6076f3f65b19ff345e93d01b_0" title="3rd party ad content" width="1" height="1" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" style="border: 0px; vertical-align: bottom;" role="region" aria-label="Advertisement" tabindex="0" data-google-container-id="h" data-load-complete="true"></iframe></div></div>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#8b0000;text-transform:uppercase"><strong>Dark Red</strong> #8B0000</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#d03d33;text-transform:uppercase"><strong>Prismatic Red</strong> #D03D33</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#aa0000;text-transform:uppercase"><strong>49ers Red</strong> #AA0000</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#bd2031;text-transform:uppercase"><strong>Cardinals Red</strong> #BD2031</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#d2122e;text-transform:uppercase"><strong>Ajax Red</strong> #D2122E</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#9e1b32;text-transform:uppercase"><strong>Alabama Crimson</strong> #9E1B32</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#e32636;text-transform:uppercase"><strong>Alizarin Crimson</strong> #E32636</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#f4364c;text-transform:uppercase"><strong>Amaranth Red</strong> #F4364C</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#ff033e;text-transform:uppercase"><strong>American Rose</strong> #FF033E</p><div id="AdThrive_Content_7_desktop" class="adthrive-ad adthrive-content adthrive-content-7 adthrive-ad-cls" style="min-height: 250px;"><div id="google_ads_iframe_/18190176,102666410/AdThrive_Content_7/6076f3f65b19ff345e93d01b_0__container__" style="border: 0pt;"></div></div>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#ba0021;text-transform:uppercase"><strong>Angels Red</strong> #BA0021</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#db0007;text-transform:uppercase"><strong>Arsenal Red</strong> #DB0007</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#a52a2a;text-transform:uppercase"><strong>Auburn Red</strong> #A52A2A</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#cc0000;text-transform:uppercase"><strong>BU Scarlet</strong> #CC0000</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#c60c30;text-transform:uppercase"><strong>Bills Red</strong> #C60C30</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#bf4f51;text-transform:uppercase"><strong>Bittersweet Shimmer</strong> #BF4F51</p>



<p><strong>Want more?</strong> Here is a list of 100+ <a href="https://www.color-meanings.com/shades-of-red-color-names-html-hex-rgb-codes/">red colors</a>.</p>



<h2 class="wp-block-heading" id="orange">Orange Color Names</h2>



<figure class="wp-block-image size-large"><img decoding="async" width="940" height="788" src="https://www.color-meanings.com/wp-content/uploads/shades-orange-color-names.png" alt="Shades of Orange Color with Names and Hex Codes" class="wp-image-3199 entered lazyloaded" data-lazy-srcset="https://www.color-meanings.com/wp-content/uploads/shades-orange-color-names.png 940w, https://www.color-meanings.com/wp-content/uploads/shades-orange-color-names-300x251.png 300w, https://www.color-meanings.com/wp-content/uploads/shades-orange-color-names-768x644.png 768w" data-lazy-sizes="(max-width: 940px) 100vw, 940px" data-lazy-src="https://www.color-meanings.com/wp-content/uploads/shades-orange-color-names.png" data-ll-status="loaded" sizes="(max-width: 940px) 100vw, 940px" srcset="https://www.color-meanings.com/wp-content/uploads/shades-orange-color-names.png 940w, https://www.color-meanings.com/wp-content/uploads/shades-orange-color-names-300x251.png 300w, https://www.color-meanings.com/wp-content/uploads/shades-orange-color-names-768x644.png 768w"><noscript><img decoding="async" width="940" height="788" src="https://www.color-meanings.com/wp-content/uploads/shades-orange-color-names.png" alt="Shades of Orange Color with Names and Hex Codes" class="wp-image-3199" srcset="https://www.color-meanings.com/wp-content/uploads/shades-orange-color-names.png 940w, https://www.color-meanings.com/wp-content/uploads/shades-orange-color-names-300x251.png 300w, https://www.color-meanings.com/wp-content/uploads/shades-orange-color-names-768x644.png 768w" sizes="(max-width: 940px) 100vw, 940px" /></noscript></figure><div id="AdThrive_Content_8_desktop" class="adthrive-ad adthrive-content adthrive-content-8 adthrive-ad-cls" style="min-height: 250px;" data-google-query-id="CPWv48qoqYMDFROkgwcdGHgE7A"><div id="google_ads_iframe_/18190176,102666410/AdThrive_Content_8/6076f3f65b19ff345e93d01b_0__container__" style="border: 0pt;"><iframe id="google_ads_iframe_/18190176,102666410/AdThrive_Content_8/6076f3f65b19ff345e93d01b_0" name="google_ads_iframe_/18190176,102666410/AdThrive_Content_8/6076f3f65b19ff345e93d01b_0" title="3rd party ad content" width="1" height="1" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" style="border: 0px; vertical-align: bottom;" role="region" aria-label="Advertisement" tabindex="0" data-google-container-id="g" data-load-complete="true"></iframe></div></div>



<p><a href="https://www.color-meanings.com/orange-color-meaning-the-color-orange/" data-type="post" data-id="147">The color orange</a> symbolizes emotion, youth, optimism, and enthusiasm.</p>



<p><strong>Here are 50 orange color names with hex codes:</strong></p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#ed7014"><strong>ORANGE</strong> #ED7014</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#fa8128"><strong>TANGERINE</strong> #FA8128</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#fcae1e"><strong>MERIGOLD</strong> #FCAE1E</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#b56727"><strong>CIDER</strong> #B56727</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#8d4004"><strong>RUST</strong> #8D4004</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#be5504"><strong>GINGER</strong> #BE5504</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#fc6a03"><strong>TIGER</strong> #FC6A03</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#dd571c"><strong>FIRE</strong> #DD571C</p><div id="AdThrive_Content_9_desktop" class="adthrive-ad adthrive-content adthrive-content-9 adthrive-ad-cls" style="min-height: 250px;" data-google-query-id="CJ6Gu8qoqYMDFS-fgwcdPpMLRA"><div id="google_ads_iframe_/18190176,102666410/AdThrive_Content_9/6076f3f65b19ff345e93d01b_0__container__" style="border: 0pt;"><iframe id="google_ads_iframe_/18190176,102666410/AdThrive_Content_9/6076f3f65b19ff345e93d01b_0" name="google_ads_iframe_/18190176,102666410/AdThrive_Content_9/6076f3f65b19ff345e93d01b_0" title="3rd party ad content" width="1" height="1" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" style="border: 0px; vertical-align: bottom;" role="region" aria-label="Advertisement" tabindex="0" data-google-container-id="f" data-load-complete="true"></iframe></div></div>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#b2560d"><strong>BRONZE</strong> #B2560D</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#fda172"><strong>CANTALOUPE</strong> #FDA172</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#ed820e"><strong>APRICOT</strong> #ED820E</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#80400b"><strong>CLAY</strong> #80400B</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#ec9706"><strong>HONEY</strong> #EC9706</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#ed7117"><strong>CARROT</strong> #ED7117</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#c95b0c"><strong>SQUASH</strong> #C95B0C</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#7a3803"><strong>SPICE</strong> #7A3803</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#d16002"><strong>MARMALADE</strong> #D16002</p><div id="AdThrive_Content_10_desktop" class="adthrive-ad adthrive-content adthrive-content-10 adthrive-ad-cls" style="min-height: 250px;" data-google-query-id="CNnBusqoqYMDFaKDgwcdHBQEJQ"><div id="google_ads_iframe_/18190176,102666410/AdThrive_Content/6076f3f65b19ff345e93d01b_0__container__" style="border: 0pt;"><iframe id="google_ads_iframe_/18190176,102666410/AdThrive_Content/6076f3f65b19ff345e93d01b_0" name="google_ads_iframe_/18190176,102666410/AdThrive_Content/6076f3f65b19ff345e93d01b_0" title="3rd party ad content" width="1" height="1" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" style="border: 0px; vertical-align: bottom;" role="region" aria-label="Advertisement" tabindex="0" data-google-container-id="e" data-load-complete="true"></iframe></div></div>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#893101"><strong>AMBER</strong> #893101</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#d67229"><strong>SANDSTONE</strong> #D67229</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#cc5801"><strong>YAM</strong> #CC5801</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#fc4c02"><strong>TANGELO</strong> #FC4C02</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#e34a27"><strong>FLAME</strong> #E34A27</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#e68000"><strong>FULVOUS</strong> #E68000</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#ff8c00;text-transform:uppercase"><strong>Dark Orange</strong> #FF8C00</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#ff5e0e;text-transform:uppercase"><strong>Vivid Orange</strong> #FF5E0E</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#ff4500;text-transform:uppercase"><strong>Orange-Red</strong> #FF4500</p><div id="AdThrive_Content_11_desktop" class="adthrive-ad adthrive-content adthrive-content-11 adthrive-ad-cls" style="min-height: 250px;"><div id="google_ads_iframe_/18190176,102666410/AdThrive_Content/6076f3f65b19ff345e93d01b_1__container__" style="border: 0pt;"></div></div>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#e26310;text-transform:uppercase"><strong>Metallic Orange</strong> #E26310</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#f5761a;text-transform:uppercase"><strong>Pumpkin</strong> #F5761A</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#fd673a;text-transform:uppercase"><strong>Smashed Pumpkin</strong> #FD673A</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#ff4f00;text-transform:uppercase"><strong>International Orange</strong> #FF4F00</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#f06105;text-transform:uppercase"><strong>Spanish Orange</strong> #F06105</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#ff8f00;text-transform:uppercase"><strong>Princeton Orange</strong> #FF8F00</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#ffa52c;text-transform:uppercase"><strong>Deep Saffron</strong> #FFA52C</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#c35214;text-transform:uppercase"><strong>Alloy Orange</strong> #C35214</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#ee5921;text-transform:uppercase"><strong>Halloween Orange</strong> #EE5921</p><div id="AdThrive_Content_12_desktop" class="adthrive-ad adthrive-content adthrive-content-12 adthrive-ad-cls" style="min-height: 250px;" data-google-query-id="CK-MucmoqYMDFS6JgwcduPkDVw"><div id="google_ads_iframe_/18190176,102666410/AdThrive_Content/6076f3f65b19ff345e93d01b_2__container__" style="border: 0pt;"><iframe id="google_ads_iframe_/18190176,102666410/AdThrive_Content/6076f3f65b19ff345e93d01b_2" name="google_ads_iframe_/18190176,102666410/AdThrive_Content/6076f3f65b19ff345e93d01b_2" title="3rd party ad content" width="1" height="1" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" style="border: 0px; vertical-align: bottom; width: 300px; height: 250px;" role="region" aria-label="Advertisement" tabindex="0" data-google-container-id="d" data-load-complete="true"></iframe></div></div>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#e89611;text-transform:uppercase"><strong>Gamboge</strong> #E89611</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#cf5b2e;text-transform:uppercase"><strong>Medium Vermilion</strong> #CF5B2E</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#feba4f;text-transform:uppercase"><strong>Pastel Orange</strong> #FEBA4F</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#f26e01;text-transform:uppercase"><strong>Philippine Orange</strong> #F26E01</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#ff9944;text-transform:uppercase"><strong>Royal Orange</strong> #FF9944</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#ff7f50;text-transform:uppercase"><strong>Coral</strong> #FF7F50</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#d75341;text-transform:uppercase"><strong>Dark Coral</strong> #D75341</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#e6812f;text-transform:uppercase"><strong>Cadmium Orange</strong> #E6812F</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#faba5f;text-transform:uppercase"><strong>Rajah</strong> #FABA5F</p><div id="AdThrive_Content_13_desktop" class="adthrive-ad adthrive-content adthrive-content-13 adthrive-ad-cls" style="min-height: 250px;"><div id="google_ads_iframe_/18190176,102666410/AdThrive_Content/6076f3f65b19ff345e93d01b_3__container__" style="border: 0pt;"></div></div>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#fb8842;text-transform:uppercase"><strong>Mango Tango</strong> #FB8842</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#ff9f00;text-transform:uppercase"><strong>Orange Peel</strong> #FF9F00</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#ec7625;text-transform:uppercase"><strong>Vivid Tangelo</strong> #EC7625</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#ec5800;text-transform:uppercase"><strong>Persimmon</strong> #EC5800</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#ff3c00;text-transform:uppercase"><strong>Browns Orange</strong> #FF3C00</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#cc5500;text-transform:uppercase"><strong>Burnt Orange</strong> #CC5500</p>



<p><strong>Want more?</strong> Here is a list of 100+ <a href="https://www.color-meanings.com/shades-of-orange-color-names-html-hex-rgb-codes/">orange colors</a>.</p>



<h2 class="wp-block-heading" id="yellow">Yellow Color Names</h2>



<figure class="wp-block-image size-large"><img decoding="async" width="940" height="788" src="https://www.color-meanings.com/wp-content/uploads/shades-yellow-color-names.png" alt="Shades of Yellow Color with Names and Hex Codes" class="wp-image-3283 entered lazyloaded" data-lazy-srcset="https://www.color-meanings.com/wp-content/uploads/shades-yellow-color-names.png 940w, https://www.color-meanings.com/wp-content/uploads/shades-yellow-color-names-300x251.png 300w, https://www.color-meanings.com/wp-content/uploads/shades-yellow-color-names-768x644.png 768w" data-lazy-sizes="(max-width: 940px) 100vw, 940px" data-lazy-src="https://www.color-meanings.com/wp-content/uploads/shades-yellow-color-names.png" data-ll-status="loaded" sizes="(max-width: 940px) 100vw, 940px" srcset="https://www.color-meanings.com/wp-content/uploads/shades-yellow-color-names.png 940w, https://www.color-meanings.com/wp-content/uploads/shades-yellow-color-names-300x251.png 300w, https://www.color-meanings.com/wp-content/uploads/shades-yellow-color-names-768x644.png 768w"><noscript><img decoding="async" width="940" height="788" src="https://www.color-meanings.com/wp-content/uploads/shades-yellow-color-names.png" alt="Shades of Yellow Color with Names and Hex Codes" class="wp-image-3283" srcset="https://www.color-meanings.com/wp-content/uploads/shades-yellow-color-names.png 940w, https://www.color-meanings.com/wp-content/uploads/shades-yellow-color-names-300x251.png 300w, https://www.color-meanings.com/wp-content/uploads/shades-yellow-color-names-768x644.png 768w" sizes="(max-width: 940px) 100vw, 940px" /></noscript></figure><div id="AdThrive_Content_14_desktop" class="adthrive-ad adthrive-content adthrive-content-14 adthrive-ad-cls" style="min-height: 250px;"></div>



<p><a href="https://www.color-meanings.com/yellow-color-meaning-the-color-yellow/" data-type="post" data-id="119">The color yellow</a> symbolizes happiness, optimism, positivity, and intellect.</p>



<p><strong>Here are 50 yellow color names with hex codes:</strong></p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#e6dbac"><strong>TAN</strong> #E6DBAC</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#eedc9a"><strong>BEIGE</strong> #EEDC9A</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#f9e076"><strong>MACAROON</strong> #F9E076</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#c9bb8e"><strong>HAZEL WOOD</strong> #C9BB8E</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#d6b85a"><strong>GRANOLA</strong> #D6B85A</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#dfc98a"><strong>OAT</strong> #DFC98A</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#fae29c"><strong>EGG NOG</strong> #FAE29C</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#c8a951"><strong>FAWN</strong> #C8A951</p><div id="AdThrive_Content_15_desktop" class="adthrive-ad adthrive-content adthrive-content-15 adthrive-ad-cls" style="min-height: 250px;"></div>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#f3eaaf"><strong>SUGAR COOKIE</strong> #F3EAAF</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#d8b863"><strong>SAND</strong> #D8B863</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#e3b778"><strong>SEPIA</strong> #E3B778</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#e7c27d"><strong>LATTE</strong> #E7C27D</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#dcd7a0"><strong>OYSTER</strong> #DCD7A0</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#e3c565"><strong>BISCOTTI</strong> #E3C565</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#fde992"><strong>PARMESAN</strong> #FDE992</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#bda55d"><strong>HAZELNUT</strong> #BDA55D</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#dac17c"><strong>SANDCASTLE</strong> #DAC17C</p><div id="AdThrive_Content_16_desktop" class="adthrive-ad adthrive-content adthrive-content-16 adthrive-ad-cls" style="min-height: 250px;" data-google-query-id="CIqhz8ioqYMDFdyDgwcdWiMPKA"><div id="google_ads_iframe_/18190176,102666410/AdThrive_Content/6076f3f65b19ff345e93d01b_6__container__" style="border: 0pt;"><iframe id="google_ads_iframe_/18190176,102666410/AdThrive_Content/6076f3f65b19ff345e93d01b_6" name="google_ads_iframe_/18190176,102666410/AdThrive_Content/6076f3f65b19ff345e93d01b_6" title="3rd party ad content" width="1" height="1" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" style="border: 0px; vertical-align: bottom;" role="region" aria-label="Advertisement" tabindex="0" data-google-container-id="b" data-load-complete="true"></iframe></div></div>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#fdefb2"><strong>BUTTERMILK</strong> #FDEFB2</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#ede8ba"><strong>SAND DOLLAR</strong> #EDE8BA</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#fbe790"><strong>SHORTBREAD</strong> #FBE790</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#e4d00a"><strong>CITRINE</strong> #E4D00A</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#eedc82"><strong>FLAX</strong> #EEDC82</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#eeed09"><strong>XANTHIC</strong> #EEED09</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#fffd37;text-transform:uppercase"><strong>Sunshine Yellow</strong> #FFFD37</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#ffef00;text-transform:uppercase"><strong>Canary Yellow</strong> #FFEF00</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#fdff00;text-transform:uppercase"><strong>Lemon Yellow</strong> #FDFF00</p><div id="AdThrive_Content_17_desktop" class="adthrive-ad adthrive-content adthrive-content-17 adthrive-ad-cls" style="min-height: 250px;" data-google-query-id="CP-C0MioqYMDFeSMgwcdw9AA_w"><div id="google_ads_iframe_/18190176,102666410/AdThrive_Content/6076f3f65b19ff345e93d01b_7__container__" style="border: 0pt;"><iframe id="google_ads_iframe_/18190176,102666410/AdThrive_Content/6076f3f65b19ff345e93d01b_7" name="google_ads_iframe_/18190176,102666410/AdThrive_Content/6076f3f65b19ff345e93d01b_7" title="3rd party ad content" width="1" height="1" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" style="border: 0px; vertical-align: bottom; width: 300px; height: 250px;" role="region" aria-label="Advertisement" tabindex="0" data-google-container-id="c" data-load-complete="true"></iframe></div></div>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#eee8aa;text-transform:uppercase"><strong>Pale Goldenrod</strong> #EEE8AA</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#f0e68c;text-transform:uppercase"><strong>Light Khaki</strong> #F0E68C</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#fce883;text-transform:uppercase"><strong>Clover Lime</strong> #FCE883</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#fada5e;text-transform:uppercase"><strong>Royal Yellow</strong> #FADA5E</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#ffd700;text-transform:uppercase"><strong>Gold</strong> #FFD700</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#eed202;text-transform:uppercase"><strong>Safety Yellow</strong> #EED202</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#f8e473;text-transform:uppercase"><strong>Laguna</strong> #F8E473</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#fffd01;text-transform:uppercase"><strong>Bright Yellow</strong> #FFFD01</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#eeea62;text-transform:uppercase"><strong>Greenish Yellow</strong> #EEEA62</p><div id="AdThrive_Content_18_desktop" class="adthrive-ad adthrive-content adthrive-content-18 adthrive-ad-cls" style="min-height: 250px;"></div>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#ffda03;text-transform:uppercase"><strong>Sunflower</strong> #FFDA03</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#fce205;text-transform:uppercase"><strong>Bumblebee</strong> #FCE205</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#fffd74;text-transform:uppercase"><strong>Butter</strong> #FFFD74</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#ffe36e;text-transform:uppercase"><strong>Yellow Tan</strong> #FFE36E</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#ffe135;text-transform:uppercase"><strong>Banana</strong> #FFE135</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#fcd12a;text-transform:uppercase"><strong>Tuscany</strong> #FCD12A</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#c49102;text-transform:uppercase"><strong>Dijon</strong> #C49102</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#fedc56;text-transform:uppercase"><strong>Mustard</strong> #FEDC56</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#fafa37;text-transform:uppercase"><strong>Maximum Yellow</strong> #FAFA37</p><div id="AdThrive_Content_19_desktop" class="adthrive-ad adthrive-content adthrive-content-19 adthrive-ad-cls" style="min-height: 250px;"></div>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#f8de7e;text-transform:uppercase"><strong>Mellow Yellow</strong> #F8DE7E</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#ffff66;text-transform:uppercase"><strong>Unmellow Yellow</strong> #FFFF66</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#cca01d;text-transform:uppercase"><strong>Lemon Curry</strong> #CCA01D</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#fdee00;text-transform:uppercase"><strong>Aureolin</strong> #FDEE00</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#ffff33;text-transform:uppercase"><strong>Electric Yellow</strong> #FFFF33</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#fffe71;text-transform:uppercase"><strong>Pastel Yellow</strong> #FFFE71</p>



<p><strong>Want more?</strong> Here is a list of 100+ <a href="https://www.color-meanings.com/shades-of-yellow-color-names-html-hex-rgb-codes/">yellow colors</a>.</p>



<h2 class="wp-block-heading" id="green">Green Color Names</h2>



<figure class="wp-block-image size-large"><img decoding="async" width="940" height="788" src="https://www.color-meanings.com/wp-content/uploads/shades-of-green-color-names.png" alt="Shades of Green Color with Names and Hex Codes" class="wp-image-3207 entered lazyloaded" data-lazy-srcset="https://www.color-meanings.com/wp-content/uploads/shades-of-green-color-names.png 940w, https://www.color-meanings.com/wp-content/uploads/shades-of-green-color-names-300x251.png 300w, https://www.color-meanings.com/wp-content/uploads/shades-of-green-color-names-768x644.png 768w" data-lazy-sizes="(max-width: 940px) 100vw, 940px" data-lazy-src="https://www.color-meanings.com/wp-content/uploads/shades-of-green-color-names.png" data-ll-status="loaded" sizes="(max-width: 940px) 100vw, 940px" srcset="https://www.color-meanings.com/wp-content/uploads/shades-of-green-color-names.png 940w, https://www.color-meanings.com/wp-content/uploads/shades-of-green-color-names-300x251.png 300w, https://www.color-meanings.com/wp-content/uploads/shades-of-green-color-names-768x644.png 768w"><noscript><img decoding="async" width="940" height="788" src="https://www.color-meanings.com/wp-content/uploads/shades-of-green-color-names.png" alt="Shades of Green Color with Names and Hex Codes" class="wp-image-3207" srcset="https://www.color-meanings.com/wp-content/uploads/shades-of-green-color-names.png 940w, https://www.color-meanings.com/wp-content/uploads/shades-of-green-color-names-300x251.png 300w, https://www.color-meanings.com/wp-content/uploads/shades-of-green-color-names-768x644.png 768w" sizes="(max-width: 940px) 100vw, 940px" /></noscript></figure><div id="AdThrive_Content_20_desktop" class="adthrive-ad adthrive-content adthrive-content-20 adthrive-ad-cls" style="min-height: 250px;"></div>



<p><a href="https://www.color-meanings.com/green-color-meaning-the-color-green/" data-type="post" data-id="109">The color green</a> symbolizes harmony, safety, growth, and health.</p>



<p><strong>Here are 50 green color names with hex codes:</strong></p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#3cb043"><strong>GREEN</strong> #3CB043</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#b0fc38"><strong>CHARTREUSE</strong> #B0FC38</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#3a5311"><strong>JUNIPER</strong> #3A5311</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#728c69"><strong>SAGE</strong> #728C69</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#aef359"><strong>LIME</strong> #AEF359</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#5dbb63"><strong>FERN</strong> #5DBB63</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#98bf64"><strong>OLIVE</strong> #98BF64</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#028a0f"><strong>EMERALD</strong> #028A0F</p><div id="AdThrive_Content_21_desktop" class="adthrive-ad adthrive-content adthrive-content-21 adthrive-ad-cls" style="min-height: 250px;"></div>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#74b72e"><strong>PEAR</strong> #74B72E</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#466d1d"><strong>MOSS</strong> #466D1D</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#03ac13"><strong>SHAMROCK</strong> #03AC13</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#3ded97"><strong>SEAFOAM</strong> #3DED97</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#234f1e"><strong>PINE</strong> #234F1E</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#03c04a"><strong>PARAKEET</strong> #03C04A</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#99edc3"><strong>MINT</strong> #99EDC3</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#354a21"><strong>SEAWEED</strong> #354A21</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#597d35"><strong>PICKLE</strong> #597D35</p><div id="AdThrive_Content_22_desktop" class="adthrive-ad adthrive-content adthrive-content-22 adthrive-ad-cls" style="min-height: 250px;"></div>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#b2d3c2"><strong>PISTACHIO</strong> #B2D3C2</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#32612d"><strong>BASIL</strong> #32612D</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#607d3b"><strong>CROCODILE</strong> #607D3B</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#3b7a57"><strong>AMAZON</strong> #3B7A57</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#568203"><strong>AVOCADO</strong> #568203</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#ace1af"><strong>CELADON</strong> #ACE1AF</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#0b6623;text-transform:uppercase"><strong>Forest green</strong> #0B6623</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#3f704d;text-transform:uppercase"><strong>Hunter green</strong> #3F704D</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#8f9779;text-transform:uppercase"><strong>Artichoke green</strong> #8F9779</p><div id="AdThrive_Content_23_desktop" class="adthrive-ad adthrive-content adthrive-content-23 adthrive-ad-cls" style="min-height: 250px;"></div>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#29ab87;text-transform:uppercase"><strong>Jungle green</strong> #29AB87</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#00755e;text-transform:uppercase"><strong>Tropical Rainforest</strong> #00755E</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#00a693;text-transform:uppercase"><strong>Persian green</strong> #00A693</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#2e8b57;text-transform:uppercase"><strong>Sea green</strong> #2E8B57</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#00a86b;text-transform:uppercase"><strong>Jade green</strong> #00A86B</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#a9ba9d;text-transform:uppercase"><strong>Laurel green</strong> #A9BA9D</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#4b5320;text-transform:uppercase"><strong>Army green</strong> #4B5320</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#4cbb17;text-transform:uppercase"><strong>Kelly green</strong> #4CBB17</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#50c878;text-transform:uppercase"><strong>Paris green</strong> #50C878</p><div id="AdThrive_Content_24_desktop" class="adthrive-ad adthrive-content adthrive-content-24 adthrive-ad-cls" style="min-height: 250px;"></div>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#006600;text-transform:uppercase"><strong>Pakistan green</strong> #006600</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#00f0a8;text-transform:uppercase"><strong>Spring</strong> #00F0A8</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#48a860;text-transform:uppercase"><strong>Chateau</strong> #48A860</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#a8c090;text-transform:uppercase"><strong>Swamp</strong> #A8C090</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#74c365;text-transform:uppercase"><strong>Mantis</strong> #74C365</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#007848;text-transform:uppercase"><strong>Fun</strong> #007848</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#609078;text-transform:uppercase"><strong>Viridian</strong> #609078</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#6c7c59;text-transform:uppercase"><strong>Reseda Green</strong> #6C7C59</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#487800;text-transform:uppercase"><strong>Verdun</strong> #487800</p><div id="AdThrive_Content_25_desktop" class="adthrive-ad adthrive-content adthrive-content-25 adthrive-ad-cls" style="min-height: 250px;"></div>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#00563b;text-transform:uppercase"><strong>Castleton Green</strong> #00563B</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#006a4e;text-transform:uppercase"><strong>Bottle Green</strong> #006A4E</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#006b3c;text-transform:uppercase"><strong>Cadmium Green</strong> #006B3C</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#78866b;text-transform:uppercase"><strong>Camouflage Green</strong> #78866B</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#85bb65;text-transform:uppercase"><strong>Dollar Bill</strong> #85BB65</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#b2ec5d;text-transform:uppercase"><strong>Inchworm</strong> #B2EC5D</p>



<p><strong>Want more?</strong> Here is a list of 100+ <a href="https://www.color-meanings.com/shades-of-green-color-names-html-hex-rgb-codes/">green colors</a>.</p>



<h2 class="wp-block-heading" id="blue">Blue Color Names</h2>



<figure class="wp-block-image size-large"><img decoding="async" width="940" height="788" src="https://www.color-meanings.com/wp-content/uploads/shades-of-blue-color-names.png" alt="Shades of Blue Color with Names and Hex Codes" class="wp-image-3209 entered lazyloaded" data-lazy-srcset="https://www.color-meanings.com/wp-content/uploads/shades-of-blue-color-names.png 940w, https://www.color-meanings.com/wp-content/uploads/shades-of-blue-color-names-300x251.png 300w, https://www.color-meanings.com/wp-content/uploads/shades-of-blue-color-names-768x644.png 768w" data-lazy-sizes="(max-width: 940px) 100vw, 940px" data-lazy-src="https://www.color-meanings.com/wp-content/uploads/shades-of-blue-color-names.png" data-ll-status="loaded" sizes="(max-width: 940px) 100vw, 940px" srcset="https://www.color-meanings.com/wp-content/uploads/shades-of-blue-color-names.png 940w, https://www.color-meanings.com/wp-content/uploads/shades-of-blue-color-names-300x251.png 300w, https://www.color-meanings.com/wp-content/uploads/shades-of-blue-color-names-768x644.png 768w"><noscript><img decoding="async" width="940" height="788" src="https://www.color-meanings.com/wp-content/uploads/shades-of-blue-color-names.png" alt="Shades of Blue Color with Names and Hex Codes" class="wp-image-3209" srcset="https://www.color-meanings.com/wp-content/uploads/shades-of-blue-color-names.png 940w, https://www.color-meanings.com/wp-content/uploads/shades-of-blue-color-names-300x251.png 300w, https://www.color-meanings.com/wp-content/uploads/shades-of-blue-color-names-768x644.png 768w" sizes="(max-width: 940px) 100vw, 940px" /></noscript></figure><div id="AdThrive_Content_26_desktop" class="adthrive-ad adthrive-content adthrive-content-26 adthrive-ad-cls" style="min-height: 250px;"></div>



<p><a href="https://www.color-meanings.com/blue-color-meaning-the-color-blue/" data-type="post" data-id="42">The color blue</a> symbolizes security, trust, loyalty, and responsibility.</p>



<p><strong>Here are 50 blue color names with hex codes:</strong></p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#3944bc"><strong>BLUE</strong> #3944BC</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#757c88"><strong>SLATE</strong> #757C88</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#63c5da"><strong>SKY</strong> #63C5DA</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#0a1172"><strong>NAVY</strong> #0A1172</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#281e5d"><strong>INDIGO</strong> #281E5D</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#1338be"><strong>COBALT</strong> #1338BE</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#48aaad"><strong>TEAL</strong> #48AAAD</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#016064"><strong>OCEAN</strong> #016064</p><div id="AdThrive_Content_27_desktop" class="adthrive-ad adthrive-content adthrive-content-27 adthrive-ad-cls" style="min-height: 250px;"></div>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#022d36"><strong>PEACOCK</strong> #022D36</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#1520a6"><strong>AZURE</strong> #1520A6</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#0492c2"><strong>CERULEAN</strong> #0492C2</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#2832c2"><strong>LAPIS</strong> #2832C2</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#2c3e4c"><strong>SPRUCE</strong> #2C3E4C</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#59788e"><strong>STONE</strong> #59788E</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#1f456e"><strong>AEGEAN</strong> #1F456E</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#241571"><strong>BLUEBERRY</strong> #241571</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#151e3d"><strong>DENIM</strong> #151E3D</p><div id="AdThrive_Content_28_desktop" class="adthrive-ad adthrive-content adthrive-content-28 adthrive-ad-cls" style="min-height: 250px;"></div>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#051094"><strong>ADMIRAL</strong> #051094</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#52b2bf"><strong>SAPPHIRE</strong> #52B2BF</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#82eefd"><strong>ARCTIC</strong> #82EEFD</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#40e0d0"><strong>TURQUOISE</strong> #40E0D0</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#4682b4"><strong>STEEL</strong> #4682B4</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#2e5894"><strong>B’DAZZLED</strong> #2E5894</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#b0e0e6;text-transform:uppercase"><strong>Powder blue</strong> #B0E0E6</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#004f98;text-transform:uppercase"><strong>US Air Force Academy blue</strong> #004F98</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#89cff0;text-transform:uppercase"><strong>Baby blue</strong> #89CFF0</p><div id="AdThrive_Content_29_desktop" class="adthrive-ad adthrive-content adthrive-content-29 adthrive-ad-cls" style="min-height: 250px;"></div>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#bcd4e6;text-transform:uppercase"><strong>Beau blue</strong> #BCD4E6</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#6ca0dc;text-transform:uppercase"><strong>Little Boy blue</strong> #6CA0DC</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#81d8d0;text-transform:uppercase"><strong>Tiffany blue</strong> #81D8D0</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#4b9cd3;text-transform:uppercase"><strong>Carolina blue</strong> #4B9CD3</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#4f97a3;text-transform:uppercase"><strong>Turkish blue</strong> #4F97A3</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#73c2fb;text-transform:uppercase"><strong>Maya blue</strong> #73C2FB</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#6495ed;text-transform:uppercase"><strong>Cornflower blue</strong> #6495ED</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#126180;text-transform:uppercase"><strong>Blue Sapphire</strong> #126180</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#1034a6;text-transform:uppercase"><strong>Egyptian blue</strong> #1034A6</p><div id="AdThrive_Content_30_desktop" class="adthrive-ad adthrive-content adthrive-content-30 adthrive-ad-cls" style="min-height: 250px;"></div>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#00356b;text-transform:uppercase"><strong>Yale blue</strong> #00356B</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#1d2951;text-transform:uppercase"><strong>Space Cadet</strong> #1D2951</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#005a92;text-transform:uppercase"><strong>Imperial blue</strong> #005A92</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#76abdf;text-transform:uppercase"><strong>Ruddy blue</strong> #76ABDF</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#72a0c1;text-transform:uppercase"><strong>Air Superiority Blue</strong> #72A0C1</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#6bcae2;text-transform:uppercase"><strong>Aquamarine Blue</strong> #6BCAE2</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#6cb4ee;text-transform:uppercase"><strong>Argentina Blue</strong> #6CB4EE</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#002d62;text-transform:uppercase"><strong>Astros Navy</strong> #002D62</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#0066b2;text-transform:uppercase"><strong>Bayern Blue</strong> #0066B2</p><div id="AdThrive_Content_31_desktop" class="adthrive-ad adthrive-content adthrive-content-31 adthrive-ad-cls" style="min-height: 250px;"></div>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#4f86f7;text-transform:uppercase"><strong>Berry Blue</strong> #4F86F7</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#5072a7;text-transform:uppercase"><strong>Blue Yonder</strong> #5072A7</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#318ce7;text-transform:uppercase"><strong>Bleu de France</strong> #318CE7</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#6699cc;text-transform:uppercase"><strong>Blue-Gray</strong> #6699CC</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#0039a6;text-transform:uppercase"><strong>Boeing Blue</strong> #0039A6</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#13274f;text-transform:uppercase"><strong>Braves Navy</strong> #13274F</p>



<p><strong>Want more?</strong> Here is a list of 100+ <a href="https://www.color-meanings.com/shades-of-blue-color-names-html-hex-rgb-codes/">blue colors</a>.</p>



<h2 class="wp-block-heading" id="purple">Purple Color Names</h2>



<figure class="wp-block-image size-large"><img decoding="async" width="940" height="788" src="https://www.color-meanings.com/wp-content/uploads/shades-purple-color-names.png" alt="Shades of Purple Color with Names and Hex Codes" class="wp-image-3804 entered lazyloaded" data-lazy-srcset="https://www.color-meanings.com/wp-content/uploads/shades-purple-color-names.png 940w, https://www.color-meanings.com/wp-content/uploads/shades-purple-color-names-300x251.png 300w, https://www.color-meanings.com/wp-content/uploads/shades-purple-color-names-768x644.png 768w" data-lazy-sizes="(max-width: 940px) 100vw, 940px" data-lazy-src="https://www.color-meanings.com/wp-content/uploads/shades-purple-color-names.png" data-ll-status="loaded" sizes="(max-width: 940px) 100vw, 940px" srcset="https://www.color-meanings.com/wp-content/uploads/shades-purple-color-names.png 940w, https://www.color-meanings.com/wp-content/uploads/shades-purple-color-names-300x251.png 300w, https://www.color-meanings.com/wp-content/uploads/shades-purple-color-names-768x644.png 768w"><noscript><img decoding="async" width="940" height="788" src="https://www.color-meanings.com/wp-content/uploads/shades-purple-color-names.png" alt="Shades of Purple Color with Names and Hex Codes" class="wp-image-3804" srcset="https://www.color-meanings.com/wp-content/uploads/shades-purple-color-names.png 940w, https://www.color-meanings.com/wp-content/uploads/shades-purple-color-names-300x251.png 300w, https://www.color-meanings.com/wp-content/uploads/shades-purple-color-names-768x644.png 768w" sizes="(max-width: 940px) 100vw, 940px" /></noscript></figure><div id="AdThrive_Content_32_desktop" class="adthrive-ad adthrive-content adthrive-content-32 adthrive-ad-cls" style="min-height: 250px;"></div>



<p><a href="https://www.color-meanings.com/purple-color-meaning-the-color-purple/" data-type="post" data-id="138">The color purple</a> symbolizes spirituality, mystery, royalty, and imagination.</p>



<p><strong>Here are 50 purple color names with hex codes:</strong></p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#a32cc4"><strong>PURPLE</strong> #A32CC4</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#7a4988"><strong>MAUVE</strong> #7A4988</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#710193"><strong>DARK VIOLET</strong> #710193</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#630436"><strong>BOYSENBERRY</strong> #630436</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#e39ff6"><strong>ELECTRIC LAVENDER</strong> #E39FF6</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#601a35"><strong>PLUM</strong> #601A35</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#a1045a"><strong>STRONG MAGENTA</strong> #A1045A</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#b65fcf"><strong>DEEP LILAC</strong> #B65FCF</p><div id="AdThrive_Content_33_desktop" class="adthrive-ad adthrive-content adthrive-content-33 adthrive-ad-cls" style="min-height: 250px;"></div>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#663046"><strong>GRAPE</strong> #663046</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#be93d4"><strong>ROYAL PERIWINKLE</strong> #BE93D4</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#4d0f28"><strong>SANGRIA PURPLE</strong> #4D0F28</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#311432"><strong>EGGPLANT</strong> #311432</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#67032f"><strong>JAZZBERRY JAM</strong> #67032F</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#9867c6"><strong>IRIS</strong> #9867C5</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#9e7bb5"><strong>HEATHER</strong> #9E7BB5</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#a45ee5"><strong>AMETHYST</strong> #A45EE5</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#290916"><strong>RAISIN</strong> #290916</p><div id="AdThrive_Content_34_desktop" class="adthrive-ad adthrive-content adthrive-content-34 adthrive-ad-cls" style="min-height: 250px;"></div>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#af69ef"><strong>MEDIUM ORCHID</strong> #AF69EF</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#4c0121"><strong>DARK MULBERRY</strong> #4C0121</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#2c041c"><strong>DEEP WINE</strong> #2C041C</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#d8bfd8"><strong>THISTLE</strong> #D8BFD8</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#da70d6"><strong>ORCHID</strong> #DA70D6</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#8f00ff"><strong>ELECTRIC VIOLET</strong> #8F00FF</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#9370db;text-transform:uppercase"><strong>Medium Purple</strong> #9370DB</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#9932cc;text-transform:uppercase"><strong>Dark Orchid</strong> #9932CC</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#8b008b;text-transform:uppercase"><strong>Dark Magenta</strong> #8B008B</p><div id="AdThrive_Content_35_desktop" class="adthrive-ad adthrive-content adthrive-content-35 adthrive-ad-cls" style="min-height: 250px;"></div>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#a020f0;text-transform:uppercase"><strong>Veronica</strong> #A020F0</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#df73ff;text-transform:uppercase"><strong>Heliotrope</strong> #DF73FF</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#9a4eae;text-transform:uppercase"><strong>Purpureus</strong> #9A4EAE</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#4e2a84;text-transform:uppercase"><strong>Northwestern Purple</strong> #4E2A84</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#512888;text-transform:uppercase"><strong>KSU Purple</strong> #512888</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#86608e;text-transform:uppercase"><strong>Pomp and Power</strong> #86608E</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#880085;text-transform:uppercase"><strong>Mardi Gras</strong> #880085</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#6c3082;text-transform:uppercase"><strong>Eminence</strong> #6C3082</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#78184a;text-transform:uppercase"><strong>Pansy Purple</strong> #78184A</p><div id="AdThrive_Content_36_desktop" class="adthrive-ad adthrive-content adthrive-content-36 adthrive-ad-cls" style="min-height: 250px;"></div>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#72246c;text-transform:uppercase"><strong>Palatinate</strong> #72246C</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#301934;text-transform:uppercase"><strong>Dark Purple</strong> #301934</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#702963;text-transform:uppercase"><strong>Byzantium</strong> #702963</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#563c5c;text-transform:uppercase"><strong>English Violet</strong> #563C5C</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#6f4685;text-transform:uppercase"><strong>Affair</strong> #6F4685</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#6f456e;text-transform:uppercase"><strong>Long Distance</strong> #6F456E</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#493f5e;text-transform:uppercase"><strong>Prince Charming</strong> #493F5E</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#8e4785;text-transform:uppercase"><strong>Lipstick Stain</strong> #8E4785</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#720058;text-transform:uppercase"><strong>Pompadour</strong> #720058</p><div id="AdThrive_Content_37_desktop" class="adthrive-ad adthrive-content adthrive-content-37 adthrive-ad-cls" style="min-height: 250px;"></div>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#6f2da8;text-transform:uppercase"><strong>Grape Color</strong> #6F2DA8</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#9a2ca0;text-transform:uppercase"><strong>Pizza Edge</strong> #9A2CA0</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#66023c;text-transform:uppercase"><strong>Tyrian Purple</strong> #66023C</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#645394;text-transform:uppercase"><strong>Ultra Violet</strong> #645394</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#bf00ff;text-transform:uppercase"><strong>Electric Purple</strong> #BF00FF</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#7851a9;text-transform:uppercase"><strong>Studio</strong> #7851A9</p>



<p><strong>Want more?</strong> Here is a list of 100+ <a href="https://www.color-meanings.com/shades-of-purple-color-names-html-hex-rgb-codes/">purple colors</a>.</p>



<h2 class="wp-block-heading" id="pink">Pink Color Names</h2>



<figure class="wp-block-image size-large"><img decoding="async" width="940" height="788" alt="Shades of Pink Color with Names and Hex Codes" class="wp-image-4664 entered exited" data-lazy-srcset="https://www.color-meanings.com/wp-content/uploads/shades-of-pink-color-names.png 940w, https://www.color-meanings.com/wp-content/uploads/shades-of-pink-color-names-300x251.png 300w, https://www.color-meanings.com/wp-content/uploads/shades-of-pink-color-names-768x644.png 768w" data-lazy-sizes="(max-width: 940px) 100vw, 940px" data-lazy-src="https://www.color-meanings.com/wp-content/uploads/shades-of-pink-color-names.png" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20940%20788'%3E%3C/svg%3E"><noscript><img decoding="async" width="940" height="788" src="https://www.color-meanings.com/wp-content/uploads/shades-of-pink-color-names.png" alt="Shades of Pink Color with Names and Hex Codes" class="wp-image-4664" srcset="https://www.color-meanings.com/wp-content/uploads/shades-of-pink-color-names.png 940w, https://www.color-meanings.com/wp-content/uploads/shades-of-pink-color-names-300x251.png 300w, https://www.color-meanings.com/wp-content/uploads/shades-of-pink-color-names-768x644.png 768w" sizes="(max-width: 940px) 100vw, 940px" /></noscript></figure><div id="AdThrive_Content_38_desktop" class="adthrive-ad adthrive-content adthrive-content-38 adthrive-ad-cls" style="min-height: 250px;"></div>



<p><a href="https://www.color-meanings.com/pink-color-meaning-the-color-pink/" data-type="post" data-id="162">The color pink</a> symbolizes compassion, love, femininity, and playfulness.</p>



<p><strong>Here are 50 pink color names with hex codes:</strong></p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#f699cd"><strong>PINK</strong> #F699CD</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#fc94af"><strong>ROSE</strong> #FC94AF</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#fc46aa"><strong>FRENCH FUCHSIA</strong> #FC46AA</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#f25278"><strong>PUNCH</strong> #F25278</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#fec5e5"><strong>BLUSH PINK</strong> #FEC5E5</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#fe7f9c"><strong>WATERMELON</strong> #FE7F9C</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#fda4ba"><strong>FLAMINGO</strong> #FDA4BA</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#f26b8a"><strong>ROUGE</strong> #F26B8A</p><div id="AdThrive_Content_39_desktop" class="adthrive-ad adthrive-content adthrive-content-39 adthrive-ad-cls" style="min-height: 250px;"></div>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#fdab9f"><strong>LIGHT SALMON</strong> #FDAB9F</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#fe7d6a"><strong>CORAL PINK</strong> #FE7D6A</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#fc9483"><strong>PEACH</strong> #FC9483</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#fc4c4e"><strong>STRAWBERRY</strong> #FC4C4E</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#9e4244"><strong>ROSEWOOD</strong> #9E4244</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#fcbacb"><strong>LEMONADE</strong> #FCBACB</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#fa86c4"><strong>TAFFY</strong> #FA86C4</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#fd5da8"><strong>BUBBLEGUM</strong> #FD5DA8</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#f79ac0"><strong>BALLET SLIPPER</strong> #F79AC0</p><div id="AdThrive_Content_40_desktop" class="adthrive-ad adthrive-content adthrive-content-40 adthrive-ad-cls" style="min-height: 250px;"></div>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#f2b8c6"><strong>LEMONADE CREPE</strong> #F2B8C6</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#e11584"><strong>MAGENTA PROCESS</strong> #E11584</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#ff1694"><strong>HOT PINK</strong> #FF1694</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#e52b50"><strong>AMARANTH PINK</strong> #E52B50</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#e3256b"><strong>RAZZMATAZZ</strong> #E3256B</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#ffa6c9"><strong>CARNATION</strong> #FFA6C9</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#ff9999;text-transform:uppercase"><strong>Salmon</strong> #FF9999</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#ffb6c1;text-transform:uppercase"><strong>Light pink</strong>&nbsp;#FFB6C1</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#ffd1dc;text-transform:uppercase"><strong>Pastel pink</strong> #FFD1DC</p><div id="AdThrive_Content_41_desktop" class="adthrive-ad adthrive-content adthrive-content-41 adthrive-ad-cls" style="min-height: 250px;"></div>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#ffb7c5;text-transform:uppercase"><strong>Cherry blossom</strong> #FFB7C5</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#f4c2c2;text-transform:uppercase"><strong>Baby pink</strong>&nbsp;#F4C2C2</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#e75480;text-transform:uppercase"><strong>Dark pink</strong>&nbsp;#E75480</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#ff007f;text-transform:uppercase"><strong>Bright pink</strong>&nbsp;#FF007F</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#ff6ec7;text-transform:uppercase"><strong>Neon pink</strong> #FF6EC7</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#ff00ff;text-transform:uppercase"><strong>Magenta</strong> #FF00FF</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#ff8e8e;text-transform:uppercase"><strong>Tulip pink</strong> #FF8E8E</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#fddde6;text-transform:uppercase"><strong>Piggy Pink</strong> #FDDDE6</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#ffbcd9;text-transform:uppercase"><strong>Cotton Candy</strong> #FFBCD9</p><div id="AdThrive_Content_42_desktop" class="adthrive-ad adthrive-content adthrive-content-42 adthrive-ad-cls" style="min-height: 250px;"></div>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#efbbcc;text-transform:uppercase"><strong>Cameo pink</strong> #EFBBCC</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#f64a8a;text-transform:uppercase"><strong>French pink</strong> #F64A8A</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#f77fbe;text-transform:uppercase"><strong>Persian pink</strong> #F77FBE</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#e4717a;text-transform:uppercase"><strong>Candy pink</strong> #E4717A</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#de3163;text-transform:uppercase"><strong>Cherry pink</strong> #DE3163</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#cc4e5c;text-transform:uppercase"><strong>Dark Terra cotta</strong> #CC4E5C</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#ff1493;text-transform:uppercase"><strong>Deep Pink</strong> #FF1493</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#e5ccc9;text-transform:uppercase"><strong>Dust Storm</strong> #E5CCC9</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#f6adc6;text-transform:uppercase"><strong>Nadeshiko Pink</strong> #F6ADC6</p><div id="AdThrive_Content_43_desktop" class="adthrive-ad adthrive-content adthrive-content-43 adthrive-ad-cls" style="min-height: 250px;"></div>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#ff43a4;text-transform:uppercase"><strong>Wild Strawberry</strong> #FF43A4</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#d10056;text-transform:uppercase"><strong>Rubine Red</strong> #D10056</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#f400a1;text-transform:uppercase"><strong>Hollywood Cerise</strong> #F400A1</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#e4007c;text-transform:uppercase"><strong>Mexican Pink</strong> #E4007C</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#cc3366;text-transform:uppercase"><strong>Steel Pink</strong> #CC3366</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#f9429e;text-transform:uppercase"><strong>Rose Bonbon</strong> #F9429E</p>



<p><strong>Want more?</strong> Here is a list of 100+ <a href="https://www.color-meanings.com/shades-of-pink-color-names-html-hex-rgb-codes/">pink colors</a>.</p>



<h2 class="wp-block-heading" id="brown">Brown Color Names</h2>



<figure class="wp-block-image size-large"><img decoding="async" width="940" height="788" alt="Shades of Brown Color with Names and Hex Codes" class="wp-image-4823 entered exited" data-lazy-srcset="https://www.color-meanings.com/wp-content/uploads/shades-of-brown-color-names.png 940w, https://www.color-meanings.com/wp-content/uploads/shades-of-brown-color-names-300x251.png 300w, https://www.color-meanings.com/wp-content/uploads/shades-of-brown-color-names-768x644.png 768w" data-lazy-sizes="(max-width: 940px) 100vw, 940px" data-lazy-src="https://www.color-meanings.com/wp-content/uploads/shades-of-brown-color-names.png" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20940%20788'%3E%3C/svg%3E"><noscript><img decoding="async" width="940" height="788" src="https://www.color-meanings.com/wp-content/uploads/shades-of-brown-color-names.png" alt="Shades of Brown Color with Names and Hex Codes" class="wp-image-4823" srcset="https://www.color-meanings.com/wp-content/uploads/shades-of-brown-color-names.png 940w, https://www.color-meanings.com/wp-content/uploads/shades-of-brown-color-names-300x251.png 300w, https://www.color-meanings.com/wp-content/uploads/shades-of-brown-color-names-768x644.png 768w" sizes="(max-width: 940px) 100vw, 940px" /></noscript></figure><div id="AdThrive_Content_44_desktop" class="adthrive-ad adthrive-content adthrive-content-44 adthrive-ad-cls" style="min-height: 250px;"></div>



<p><a href="https://www.color-meanings.com/brown-color-meaning-the-color-brown/" data-type="post" data-id="68">The color brown</a> symbolizes reliability, stability, honesty, and comfort.</p>



<p><strong>Here are 50 brown color names with hex codes:</strong></p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#231709"><strong>BROWN OIL</strong> #231709</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#4b371c"><strong>ROASTED COFFEE</strong> #4B371C</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#3c280d"><strong>MOCHA</strong> #3C280D</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#795c34"><strong>PEANUT BROWN</strong> #795C34</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#362511"><strong>CAROB</strong> #362511</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#371d10"><strong>HICKORY</strong> #371D10</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#3f301d"><strong>WOOD</strong> #3F301D</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#4a2511"><strong>PECAN</strong> #4A2511</p><div id="AdThrive_Content_45_desktop" class="adthrive-ad adthrive-content adthrive-content-45 adthrive-ad-cls" style="min-height: 250px;"></div>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#432616"><strong>WALNUT</strong> #432616</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#65350f"><strong>CARAMEL</strong> #65350F</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#5e2c04"><strong>GINGERBREAD</strong> #5E2C04</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#481f01"><strong>SYRUP</strong> #481F01</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#2e1503"><strong>DARK CHOCOLATE</strong> #2E1503</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#9a7b4f"><strong>TORTILLA</strong> #9A7B4F</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#352315"><strong>UMBER</strong> #352315</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#80471c"><strong>TAWNY</strong> #80471C</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#3b1e08"><strong>BRUNETTE</strong> #3B1E08</p><div id="AdThrive_Content_46_desktop" class="adthrive-ad adthrive-content adthrive-content-46 adthrive-ad-cls" style="min-height: 250px;"></div>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#652a0e"><strong>CINNAMON BROWN</strong> #652A0E</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#532915"><strong>PENNY</strong> #532915</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#4a3728"><strong>CEDAR BROWN</strong> #4A3728</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#9f8170"><strong>BEAVER</strong> #9F8170</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#3d2b1f"><strong>BISTRE</strong> #3D2B1F</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#79443b"><strong>BOLE</strong> #79443B</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#8a3324;text-transform:uppercase"><strong>Burnt umber</strong> #8A3324</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#a67b5b;text-transform:uppercase"><strong>Cafe au lait</strong> #A67B5B</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#4b3621;text-transform:uppercase"><strong>Cafe noir</strong> #4B3621</p><div id="AdThrive_Content_47_desktop" class="adthrive-ad adthrive-content adthrive-content-47 adthrive-ad-cls" style="min-height: 250px;"></div>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#6f4e37;text-transform:uppercase"><strong>Coffee</strong> #6F4E37</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#704241;text-transform:uppercase"><strong>Deep coffee</strong> #704241</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#b87333;text-transform:uppercase"><strong>Copper</strong> #B87333</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#654321;text-transform:uppercase"><strong>Dark brown</strong> #654321</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#483c32;text-transform:uppercase"><strong>Taupe</strong> #483C32</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#c2b280;text-transform:uppercase"><strong>Ecru</strong> #C2B280</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#996515;text-transform:uppercase"><strong>Golden brown</strong> #996515</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#c3b091;text-transform:uppercase"><strong>Khaki</strong> #C3B091</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#cc7722;text-transform:uppercase"><strong>Ochre</strong> #CC7722</p><div id="AdThrive_Content_48_desktop" class="adthrive-ad adthrive-content adthrive-content-48 adthrive-ad-cls" style="min-height: 250px;"></div>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#b5651d;text-transform:uppercase"><strong>Light brown</strong> #B5651D</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#8b4513;text-transform:uppercase"><strong>Saddle brown</strong> #8B4513</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#80461b;text-transform:uppercase"><strong>Russet</strong> #80461B</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#a0522d;text-transform:uppercase"><strong>Sienna</strong> #A0522D</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#cd9575;text-transform:uppercase"><strong>Antique brass</strong> #CD9575</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#deb887;text-transform:uppercase"><strong>Burlywood</strong> #DEB887</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#cd853f;text-transform:uppercase"><strong>Peru</strong> #CD853F</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#deaa88;text-transform:uppercase"><strong>Tumbleweed</strong> #DEAA88</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#d1bea8;text-transform:uppercase"><strong>Dark vanilla</strong> #D1BEA8</p><div id="AdThrive_Content_49_desktop" class="adthrive-ad adthrive-content adthrive-content-49 adthrive-ad-cls" style="min-height: 250px;"></div>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#c19a6b;text-transform:uppercase"><strong>Wood brown</strong> #C19A6B</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#a0785a;text-transform:uppercase"><strong>Chamoisee</strong> #A0785A</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#ba8759;text-transform:uppercase"><strong>Deer</strong> #BA8759</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#9b7653;text-transform:uppercase"><strong>Dirt</strong> #9B7653</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#965a3e;text-transform:uppercase"><strong>Coconut</strong> #965A3E</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#a75502;text-transform:uppercase"><strong>Windsor tan</strong> #A75502</p>



<p><strong>Want more?</strong> Here is a list of 100+ <a href="https://www.color-meanings.com/shades-of-brown-color-names-html-hex-rgb-codes/">brown colors</a>.</p>



<h2 class="wp-block-heading" id="black">Black Color Names</h2>



<figure class="wp-block-image size-large"><img decoding="async" width="940" height="788" src="https://www.color-meanings.com/wp-content/uploads/shades-black-color-names-1.png" alt="Shades of Black Color with Names and Hex Codes" class="wp-image-5036 entered lazyloaded" data-lazy-srcset="https://www.color-meanings.com/wp-content/uploads/shades-black-color-names-1.png 940w, https://www.color-meanings.com/wp-content/uploads/shades-black-color-names-1-300x251.png 300w, https://www.color-meanings.com/wp-content/uploads/shades-black-color-names-1-768x644.png 768w" data-lazy-sizes="(max-width: 940px) 100vw, 940px" data-lazy-src="https://www.color-meanings.com/wp-content/uploads/shades-black-color-names-1.png" data-ll-status="loaded" sizes="(max-width: 940px) 100vw, 940px" srcset="https://www.color-meanings.com/wp-content/uploads/shades-black-color-names-1.png 940w, https://www.color-meanings.com/wp-content/uploads/shades-black-color-names-1-300x251.png 300w, https://www.color-meanings.com/wp-content/uploads/shades-black-color-names-1-768x644.png 768w"><noscript><img decoding="async" width="940" height="788" src="https://www.color-meanings.com/wp-content/uploads/shades-black-color-names-1.png" alt="Shades of Black Color with Names and Hex Codes" class="wp-image-5036" srcset="https://www.color-meanings.com/wp-content/uploads/shades-black-color-names-1.png 940w, https://www.color-meanings.com/wp-content/uploads/shades-black-color-names-1-300x251.png 300w, https://www.color-meanings.com/wp-content/uploads/shades-black-color-names-1-768x644.png 768w" sizes="(max-width: 940px) 100vw, 940px" /></noscript></figure><div id="AdThrive_Content_50_desktop" class="adthrive-ad adthrive-content adthrive-content-50 adthrive-ad-cls" style="min-height: 250px;"></div>



<p><a href="https://www.color-meanings.com/black-color-meaning-the-color-black/" data-type="post" data-id="176">The color black</a> symbolizes protection, power, elegance, and sophistication.</p>



<p><strong>Here are 50 black color names with hex codes:</strong></p>



<p class="has-white-color has-black-background-color has-text-color has-background has-medium-font-size"><strong>BLACK</strong> #000000</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#080402"><strong>EBONY</strong> #080402</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#0d0907"><strong>CROW</strong> #0D0907</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#28231d"><strong>CHARCOAL</strong> #28231D</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#040406"><strong>MIDNIGHT</strong> #040406</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#070504"><strong>INK</strong> #070504</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#050301"><strong>RAVEN</strong> #050301</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#050100"><strong>OIL</strong> #050100</p><div id="AdThrive_Content_51_desktop" class="adthrive-ad adthrive-content adthrive-content-51 adthrive-ad-cls" style="min-height: 250px;"></div>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#0a0806"><strong>GREASE</strong> #0A0806</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#030104"><strong>ONYX</strong> #030104</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#030001"><strong>PITCH</strong> #030001</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#160d08"><strong>SOOT</strong> #160D08</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#060606"><strong>SABLE</strong> #060606</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#030303"><strong>JET BLACK</strong> #030303</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#0c0908"><strong>COAL</strong> #0C0908</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#0e0c0a"><strong>METAL</strong> #0E0C0A</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#020403"><strong>OBSIDIAN</strong> #020403</p><div id="AdThrive_Content_52_desktop" class="adthrive-ad adthrive-content adthrive-content-52 adthrive-ad-cls" style="min-height: 250px;"></div>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#000302"><strong>JADE</strong> #000302</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#040200"><strong>SPIDER</strong> #040200</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#0b0705"><strong>LEATHER</strong> #0B0705</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#0c0404"><strong>ASPHALT</strong> #0C0404</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#1a1110"><strong>LICORICE</strong> #1A1110</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#0c090a"><strong>NIGHT</strong> #0C090A</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#232b2b;text-transform:uppercase"><strong>Charleston green</strong> #232B2B</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#1a2421;text-transform:uppercase"><strong>Dark jungle green</strong> #1A2421</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#1b1b1b;text-transform:uppercase"><strong>Eerie black</strong> #1B1B1B</p><div id="AdThrive_Content_53_desktop" class="adthrive-ad adthrive-content adthrive-content-53 adthrive-ad-cls" style="min-height: 250px;"></div>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#242124;text-transform:uppercase"><strong>Raisin black</strong> #242124</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#100c08;text-transform:uppercase"><strong>Smoky black</strong> #100C08</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#010127;text-transform:uppercase"><strong>Black Rock</strong> #010127</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#0b0b0b;text-transform:uppercase"><strong>Neutral Black</strong> #0B0B0B</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#191c27;text-transform:uppercase"><strong>Black Denim</strong> #191C27</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#0f0404;text-transform:uppercase"><strong>Vampire Black</strong> #0F0404</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#151922;text-transform:uppercase"><strong>Cool Black</strong> #151922</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#191c20;text-transform:uppercase"><strong>Frost Black</strong> #191C20</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#0e0c01;text-transform:uppercase"><strong>Power Black</strong> #0E0C01</p><div id="AdThrive_Content_54_desktop" class="adthrive-ad adthrive-content adthrive-content-54 adthrive-ad-cls" style="min-height: 250px;"></div>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#100e09;text-transform:uppercase"><strong>Premium Black</strong> #100E09</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#0b0510;text-transform:uppercase"><strong>Black Magic</strong> #0B0510</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#1a2228;text-transform:uppercase"><strong>Alien Black</strong> #1A2228</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#1b1811;text-transform:uppercase"><strong>Black Chocolate</strong> #1B1811</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#120321;text-transform:uppercase"><strong>Gothic Grape</strong> #120321</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#1a1a1a;text-transform:uppercase"><strong>Metropolis</strong> #1A1A1A</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#1c1c1c;text-transform:uppercase"><strong>Night Shadow</strong> #1C1C1C</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#1a0f0f;text-transform:uppercase"><strong>Dark Raisin</strong> #1A0F0F</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#161311;text-transform:uppercase"><strong>Tea Bag</strong> #161311</p><div id="AdThrive_Content_55_desktop" class="adthrive-ad adthrive-content adthrive-content-55 adthrive-ad-cls" style="min-height: 250px;"></div>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#0d0e0e;text-transform:uppercase"><strong>Tech Black</strong> #0D0E0E</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#161616;text-transform:uppercase"><strong>Dull Black</strong> #161616</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#010203;text-transform:uppercase"><strong>Dark Black</strong> #010203</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#07000b;text-transform:uppercase"><strong>Natural Black</strong> #07000B</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#1f201f;text-transform:uppercase"><strong>Retro Black</strong> #1F201F</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#050203;text-transform:uppercase"><strong>Deep Black</strong> #050203</p>



<p><strong>Want more?</strong> Here is a list of 100+ <a href="https://www.color-meanings.com/shades-of-black-color-names-html-hex-rgb-codes/">black colors</a>.</p>



<h2 class="wp-block-heading" id="gray">Gray Color Names</h2>



<figure class="wp-block-image size-large"><img decoding="async" width="940" height="788" src="https://www.color-meanings.com/wp-content/uploads/shades-of-gray-color-names.png" alt="Shades of Gray Color with Names and Hex Codes" class="wp-image-5062 entered lazyloaded" data-lazy-srcset="https://www.color-meanings.com/wp-content/uploads/shades-of-gray-color-names.png 940w, https://www.color-meanings.com/wp-content/uploads/shades-of-gray-color-names-300x251.png 300w, https://www.color-meanings.com/wp-content/uploads/shades-of-gray-color-names-768x644.png 768w" data-lazy-sizes="(max-width: 940px) 100vw, 940px" data-lazy-src="https://www.color-meanings.com/wp-content/uploads/shades-of-gray-color-names.png" data-ll-status="loaded" sizes="(max-width: 940px) 100vw, 940px" srcset="https://www.color-meanings.com/wp-content/uploads/shades-of-gray-color-names.png 940w, https://www.color-meanings.com/wp-content/uploads/shades-of-gray-color-names-300x251.png 300w, https://www.color-meanings.com/wp-content/uploads/shades-of-gray-color-names-768x644.png 768w"><noscript><img decoding="async" width="940" height="788" src="https://www.color-meanings.com/wp-content/uploads/shades-of-gray-color-names.png" alt="Shades of Gray Color with Names and Hex Codes" class="wp-image-5062" srcset="https://www.color-meanings.com/wp-content/uploads/shades-of-gray-color-names.png 940w, https://www.color-meanings.com/wp-content/uploads/shades-of-gray-color-names-300x251.png 300w, https://www.color-meanings.com/wp-content/uploads/shades-of-gray-color-names-768x644.png 768w" sizes="(max-width: 940px) 100vw, 940px" /></noscript></figure><div id="AdThrive_Content_56_desktop" class="adthrive-ad adthrive-content adthrive-content-56 adthrive-ad-cls" style="min-height: 250px;"></div>



<p><a href="https://www.color-meanings.com/gray-color-meaning-the-color-gray/" data-type="post" data-id="84">The color gray</a> symbolizes compromise, neutrality, control, and practicality.</p>



<p><strong>Here are 50 gray color names with hex codes:</strong></p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#808080"><strong>GRAY</strong> #808080</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#373737"><strong>SHADOW</strong> #373737</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#594d5b"><strong>GRAPHITE</strong> #594D5B</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#322d31"><strong>IRON</strong> #322D31</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#696880"><strong>PEWTER</strong> #696880</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#c5c6d0"><strong>CLOUD</strong> #C5C6D0</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#adadc9"><strong>SILVER</strong> #ADADC9</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#59515e"><strong>SMOKE</strong> #59515E</p><div id="AdThrive_Content_57_desktop" class="adthrive-ad adthrive-content adthrive-content-57 adthrive-ad-cls" style="min-height: 250px;" data-google-query-id="COfUpMSoqYMDFVuWgwcduR0CaA"><div id="google_ads_iframe_/18190176,102666410/AdThrive_Content/6076f3f65b19ff345e93d01b_47__container__" style="border: 0pt;"><iframe id="google_ads_iframe_/18190176,102666410/AdThrive_Content/6076f3f65b19ff345e93d01b_47" name="google_ads_iframe_/18190176,102666410/AdThrive_Content/6076f3f65b19ff345e93d01b_47" title="3rd party ad content" width="1" height="1" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" style="border: 0px; vertical-align: bottom;" role="region" aria-label="Advertisement" tabindex="0" data-google-container-id="1" data-load-complete="true"></iframe></div></div>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#3e3d53"><strong>DARK SLATE</strong> #3E3D53</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#41424c"><strong>ANCHOR</strong> #41424C</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#564c4d"><strong>ASH</strong> #564C4D</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#4d4c5c"><strong>PORPOISE</strong> #4D4C5C</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#7c6e7f"><strong>DOVE</strong> #7C6E7F</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#655967"><strong>FOG</strong> #655967</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#7f7d9c"><strong>FLINT</strong> #7F7D9C</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#232023"><strong>CHARCOAL GRAY</strong> #232023</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#333333"><strong>PEBBLE</strong> #333333</p><div id="AdThrive_Content_58_desktop" class="adthrive-ad adthrive-content adthrive-content-58 adthrive-ad-cls" style="min-height: 250px;"></div>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#3f3f4e"><strong>LEAD</strong> #3F3F4E</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#9897a9"><strong>COIN</strong> #9897A9</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#787276"><strong>FOSSIL</strong> #787276</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#3b444b"><strong>ARSENIC</strong> #3B444B</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#666a6d"><strong>NEVADA</strong> #666A6D</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#5e5e5e"><strong>SCORPION</strong> #5E5E5E</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#848482;text-transform:uppercase"><strong>Battleship Gray</strong> #848482</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#625d5d;text-transform:uppercase"><strong>Carbon Gray</strong> #625D5D</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#555555;text-transform:uppercase"><strong>Davy’s Gray</strong> #555555</p><div id="AdThrive_Content_59_desktop" class="adthrive-ad adthrive-content adthrive-content-59 adthrive-ad-cls" style="min-height: 250px;"></div>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#696969;text-transform:uppercase"><strong>Dim Gray</strong> #696969</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#b6b6b4;text-transform:uppercase"><strong>Gray Cloud</strong> #B6B6B4</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#5c5858;text-transform:uppercase"><strong>Gray Dolphin</strong> #5C5858</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#504a4b;text-transform:uppercase"><strong>Gray Wolf</strong> #504A4B</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#2a3439;text-transform:uppercase"><strong>Gunmetal</strong> #2A3439</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#4c5866;text-transform:uppercase"><strong>Marengo</strong> #4C5866</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#bebebe;text-transform:uppercase"><strong>Medium Gray</strong> #BEBEBE</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#727472;text-transform:uppercase"><strong>Nickel</strong> #727472</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#928e85;text-transform:uppercase"><strong>Stone Gray</strong> #928E85</p><div id="AdThrive_Content_60_desktop" class="adthrive-ad adthrive-content adthrive-content-60 adthrive-ad-cls" style="min-height: 250px;"></div>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#414a4c;text-transform:uppercase"><strong>Outer Space</strong> #414A4C</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#8a7f8d;text-transform:uppercase"><strong>Rocket Metallic</strong> #8A7F8D</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#acacac;text-transform:uppercase"><strong>Silver Chalice</strong> #ACACAC</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#726e6d;text-transform:uppercase"><strong>Smokey Gray</strong> #726E6D</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#757575;text-transform:uppercase"><strong>Sonic Gray</strong> #757575</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#989898;text-transform:uppercase"><strong>Spanish Gray</strong> #989898</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#8b8589;text-transform:uppercase"><strong>Taupe Gray</strong> #8B8589</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#565051;text-transform:uppercase"><strong>Vampire Gray</strong> #565051</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#bbbcb6;text-transform:uppercase"><strong>X11 Gray</strong> #BBBCB6</p><div id="AdThrive_Content_61_desktop" class="adthrive-ad adthrive-content adthrive-content-61 adthrive-ad-cls" style="min-height: 250px;"></div>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#746d69;text-transform:uppercase"><strong>Dark Silver</strong> #746D69</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#cccdc6;text-transform:uppercase"><strong>Pastel Gray</strong> #CCCDC6</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#bcc2c2;text-transform:uppercase"><strong>Misty Gray</strong> #BCC2C2</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#989692;text-transform:uppercase"><strong>Vintage Gray</strong> #989692</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#63645e;text-transform:uppercase"><strong>Zombie Gray</strong> #63645E</p>



<p class="has-white-color has-text-color has-background has-medium-font-size" style="background-color:#a1a1a1;text-transform:uppercase"><strong>Perfect Gray</strong> #A1A1A1</p>



<p><strong>Want more?</strong> Here is a list of 100+ <a href="https://www.color-meanings.com/shades-of-gray-color-names-html-hex-rgb-codes/">gray colors</a>.</p>



<h2 class="wp-block-heading" id="white">White Color Names</h2>



<figure class="wp-block-image size-large"><img decoding="async" width="940" height="788" alt="Shades of White Color with Names and Hex Codes" class="wp-image-5164 entered exited" data-lazy-srcset="https://www.color-meanings.com/wp-content/uploads/shades-of-white-color-names-1.png 940w, https://www.color-meanings.com/wp-content/uploads/shades-of-white-color-names-1-300x251.png 300w, https://www.color-meanings.com/wp-content/uploads/shades-of-white-color-names-1-768x644.png 768w" data-lazy-sizes="(max-width: 940px) 100vw, 940px" data-lazy-src="https://www.color-meanings.com/wp-content/uploads/shades-of-white-color-names-1.png" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20940%20788'%3E%3C/svg%3E"><noscript><img decoding="async" width="940" height="788" src="https://www.color-meanings.com/wp-content/uploads/shades-of-white-color-names-1.png" alt="Shades of White Color with Names and Hex Codes" class="wp-image-5164" srcset="https://www.color-meanings.com/wp-content/uploads/shades-of-white-color-names-1.png 940w, https://www.color-meanings.com/wp-content/uploads/shades-of-white-color-names-1-300x251.png 300w, https://www.color-meanings.com/wp-content/uploads/shades-of-white-color-names-1-768x644.png 768w" sizes="(max-width: 940px) 100vw, 940px" /></noscript></figure><div id="AdThrive_Content_62_desktop" class="adthrive-ad adthrive-content adthrive-content-62 adthrive-ad-cls" style="min-height: 250px;"></div>



<p><a href="https://www.color-meanings.com/white-color-meaning-the-color-white/" data-type="post" data-id="132">The color white</a> symbolizes cleanliness, purity, innocence, and perfection.</p>



<p><strong>Here are 50 white color names with hex codes:</strong></p>



<p class="has-black-color has-white-background-color has-text-color has-background has-medium-font-size"><strong>WHITE</strong> #FFFFFF</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#fbfcf8"><strong>PEARL</strong> #FBFCF8</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#fef9f3"><strong>ALABASTER</strong> #FEF9F3</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#f5fefd"><strong>SNOW</strong> #F5FEFD</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#fdf6e4"><strong>PALE IVORY</strong> #FDF6E4</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#fffada"><strong>CREAM</strong> #FFFADA</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#fff9e3"><strong>EGGSHELL</strong> #FFF9E3</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#fbfbf9"><strong>COTTON</strong> #FBFBF9</p><div id="AdThrive_Content_63_desktop" class="adthrive-ad adthrive-content adthrive-content-63 adthrive-ad-cls" style="min-height: 250px;"></div>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#fbfaf2"><strong>CHIFFON</strong> #FBFAF2</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#f8eeec"><strong>PINK SALT</strong> #F8EEEC</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#f8f2ed"><strong>LACE</strong> #F8F2ED</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#fff1e6"><strong>COCONUT MILK</strong> #FFF1E6</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#f3ead3"><strong>LINEN</strong> #F3EAD3</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#e7decc"><strong>BONE</strong> #E7DECC</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#fafafa"><strong>DAISY</strong> #FAFAFA</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#fbfcfa"><strong>POWDER</strong> #FBFCFA</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#ecfbfc"><strong>FROST</strong> #ECFBFC</p><div id="AdThrive_Content_64_desktop" class="adthrive-ad adthrive-content adthrive-content-64 adthrive-ad-cls" style="min-height: 250px;"></div>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#fffefc"><strong>PORCELAIN</strong> #FFFEFC</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#fbf5df"><strong>PARCHMENT</strong> #FBF5DF</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#faf5ef"><strong>RICE</strong> #FAF5EF</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#fff5ee"><strong>SEASHELL</strong> #FFF5EE</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#f1f9ec"><strong>PEPPERMINT</strong> #F1F9EC</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#fdfff5"><strong>MILK</strong> #FDFFF5</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#f8f8ff;text-transform:uppercase"><strong>Ghost white</strong> #F8F8FF</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#f5f5f5;text-transform:uppercase"><strong>White smoke</strong> #F5F5F5</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#fefefa;text-transform:uppercase"><strong>Baby powder</strong> #FEFEFA</p><div id="AdThrive_Content_65_desktop" class="adthrive-ad adthrive-content adthrive-content-65 adthrive-ad-cls" style="min-height: 250px;"></div>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#fffff0;text-transform:uppercase"><strong>Ivory</strong> #FFFFF0</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#fffaf0;text-transform:uppercase"><strong>Floral white</strong> #FFFAF0</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#ecf3f9;text-transform:uppercase"><strong>Link White</strong> #ECF3F9</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#fffafa;text-transform:uppercase"><strong>Rose White</strong> #FFFAFA</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#fdfcfa;text-transform:uppercase"><strong>Vista White</strong> #FDFCFA</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#f8fbf8;text-transform:uppercase"><strong>Snow Drift</strong> #F8FBF8</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#fffcec;text-transform:uppercase"><strong>Island Spice</strong> #FFFCEC</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#f6f1f4;text-transform:uppercase"><strong>Soft Peach</strong> #F6F1F4</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#ebf5f0;text-transform:uppercase"><strong>Harp</strong> #EBF5F0</p><div id="AdThrive_Content_66_desktop" class="adthrive-ad adthrive-content adthrive-content-66 adthrive-ad-cls" style="min-height: 250px;"></div>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#f6f4f1;text-transform:uppercase"><strong>Cough Mixture</strong> #F6F4F1</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#ebf6f7;text-transform:uppercase"><strong>Cup Cake</strong> #EBF6F7</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#f8f4ff;text-transform:uppercase"><strong>Magnolia</strong> #F8F4FF</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#f2f3f4;text-transform:uppercase"><strong>Anti-Flash White</strong> #F2F3F4</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#f7f5f6;text-transform:uppercase"><strong>Cascading White</strong> #F7F5F6</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#f2f7fd;text-transform:uppercase"><strong>Cotton Ball</strong> #F2F7FD</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#f8f8e8;text-transform:uppercase"><strong>Photon White</strong> #F8F8E8</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#fdf9ef;text-transform:uppercase"><strong>White Heat</strong> #FDF9EF</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#fefffc;text-transform:uppercase"><strong>Whitewash</strong> #FEFFFC</p><div id="AdThrive_Content_67_desktop" class="adthrive-ad adthrive-content adthrive-content-67 adthrive-ad-cls" style="min-height: 250px;"></div>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#eef1ea;text-transform:uppercase"><strong>Shadow White</strong> #EEF1EA</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#efece1;text-transform:uppercase"><strong>Acoustic White</strong> #EFECE1</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#edf2f8;text-transform:uppercase"><strong>Aircraft White</strong> #EDF2F8</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#fcfff9;text-transform:uppercase"><strong>Ceramic</strong> #FCFFF9</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#f4f5f0;text-transform:uppercase"><strong>Bright White</strong> #F4F5F0</p>



<p class="has-black-color has-text-color has-background has-medium-font-size" style="background-color:#edf1fe;text-transform:uppercase"><strong>Brilliant White</strong> #EDF1FE</p>



<p><strong>Want more?</strong> Here is a list of 100+ <a href="https://www.color-meanings.com/shades-of-white-color-names-html-hex-rgb-codes/">white colors</a>.</p>



<h2 class="wp-block-heading" id="alphabetical-list-of-colors">Alphabetical List of Colors From A to Z</h2>



<p>If you are looking for an alphabetical list of colors, look no further:</p>



<ul><li><a href="https://www.color-meanings.com/colors-that-start-with-a/" data-type="post" data-id="18346">Colors that start with A</a></li><li><a href="https://www.color-meanings.com/colors-that-start-with-b/" data-type="post" data-id="18494">Colors that start with B</a></li><div id="AdThrive_Content_68_desktop" class="adthrive-ad adthrive-content adthrive-content-68 adthrive-ad-cls" style="min-height: 250px;"></div><li><a href="https://www.color-meanings.com/colors-that-start-with-c/" data-type="post">Colors that start with C</a></li><li><a href="https://www.color-meanings.com/colors-that-start-with-d/" data-type="post">Colors that start with D</a></li><li><a href="https://www.color-meanings.com/colors-that-start-with-e/" data-type="post">Colors that start with E</a></li><li><a href="https://www.color-meanings.com/colors-that-start-with-f/">Colors that start with F</a></li><li><a href="https://www.color-meanings.com/colors-that-start-with-g/">Colors that start with G</a></li><li><a href="https://www.color-meanings.com/colors-that-start-with-h/">Colors that start with H</a></li><li><a href="https://www.color-meanings.com/colors-that-start-with-i/">Colors that start with I</a></li><li><a href="https://www.color-meanings.com/colors-that-start-with-j/">Colors that start with J</a></li><li><a href="https://www.color-meanings.com/colors-that-start-with-k/">Colors that start with K</a></li><li><a href="https://www.color-meanings.com/colors-that-start-with-l/">Colors that start with L</a></li><li><a href="https://www.color-meanings.com/colors-that-start-with-m/">Colors that start with M</a></li><li><a href="https://www.color-meanings.com/colors-that-start-with-n/">Colors that start with N</a></li><li><a href="https://www.color-meanings.com/colors-that-start-with-o/">Colors that start with O</a></li><li><a href="https://www.color-meanings.com/colors-that-start-with-p/">Colors that start with P</a></li><li><a href="https://www.color-meanings.com/colors-that-start-with-q/">Colors that start with Q</a></li><li><a href="https://www.color-meanings.com/colors-that-start-with-r/">Colors that start with R</a></li><li><a href="https://www.color-meanings.com/colors-that-start-with-s/">Colors that start with S</a></li><li><a href="https://www.color-meanings.com/colors-that-start-with-t/">Colors that start with T</a></li><li><a href="https://www.color-meanings.com/colors-that-start-with-u/">Colors that start with U</a></li><li><a href="https://www.color-meanings.com/colors-that-start-with-v/">Colors that start with V</a></li><li><a href="https://www.color-meanings.com/colors-that-start-with-w/">Colors that start with W</a></li><li><a href="https://www.color-meanings.com/colors-that-start-with-x/">Colors that start with X</a></li><li><a href="https://www.color-meanings.com/colors-that-start-with-y/" data-type="post" data-id="26204">Colors that start with Y</a></li><li><a href="https://www.color-meanings.com/colors-that-start-with-z/">Colors that start with Z</a></li></ul>

		
		
<div id="AdThrive_Below_Post_1_desktop" class="adthrive-ad adthrive-below-post adthrive-below-post-1 adthrive-ad-cls" style="min-height: 250px;"></div></div>
"""

soup = BeautifulSoup(xml_to_extract, "html.parser")

# Find the <strong> element
strong_element = soup.find(
    "strong", string="Here are 50 red color names with hex codes:"
)

# Find the <p> element containing the <strong> element
p_element = strong_element.find_parent("p")

# Get the siblings of the <p> element
siblings = p_element.find_next_siblings()

# Print the text content of each sibling
# for sibling in siblings:
#     print(sibling.get_text(strip=True))

red_colors = """
RED#D0312D
CHERRY RED#990F02
ROSE RED#E3242B
JAM RED#60100B
MERLOT RED#541E1B
GARNET RED#610C04
CRIMSON RED#B90E0A
RUBY#900603

SCARLET RED#900D09
WINE RED#4E0707
MAHOGANY#420C09
SANGRIA RED#5E1916
CURRANT RED#680C07

BLUSH RED#BC544B
CARMINE REF#960018
VERMILION RED#7E191B

Maroon red#800000
Hibiscus red#B43757
Burgundy red#8D021F

Dark Red#8B0000
Prismatic Red#D03D33
Ajax Red#D2122E
"""

orange_colors = """
ORANGE#ED7014
MERIGOLD ORANGE#FCAE1E
RUST orange#8D4004
GINGER orange#BE5504

BRONZE orange#B2560D
CLAY orange#80400B
SPICE ORANGE#7A3803
MARMALADE orange#D16002

AMBER orange#893101
SANDSTONE orange#D67229
YAM orange#CC5801
TANGELO orange#FC4C02
FULVOUS orange#E68000
Dark Orange orange#FF8C00
Vivid Orange orange#FF5E0E
Orange-Red#FF4500

Metallic Orange#E26310
Halloween Orange#EE5921

Vivid Tangelo orange#EC7625
Burnt Orange#CC5500
"""

yellow_colors = """
TAN yellow#E6DBAC
BEIGE yellow#EEDC9A
FAWN yellow#C8A951

SAND yellow#D8B863
SEPIA#E3B778

CITRINE yellow#E4D00A
FLAX yellow#EEDC82
XANTHIC yellow#EEED09

Pale Goldenrod yellow#EEE8AA
Light Khaki yellow#F0E68C
Clover Lime yellow#FCE883
Royal Yellow#FADA5E
Gold yellow#FFD700
Safety Yellow#EED202
Laguna yellow#F8E473
Bright Yellow#FFFD01
Maximum Yellow#FAFA37

Mellow Yellow#F8DE7E
Unmellow Yellow#FFFF66
Aureolin yellow#FDEE00
Electric Yellow#FFFF33
Pastel Yellow#FFFE71
"""

green_colors = """
GREEN#3CB043
CHARTREUSE green#B0FC38
JUNIPER green#3A5311
SAGE green#728C69
LIME green#AEF359

SEAFOAM green#3DED97
PINE green#234F1E
PARAKEET green#03C04A
MINT green#99EDC3
SEAWEED green#354A21
PICKLE green#597D35

PISTACHIO green#B2D3C2
BASIL green#32612D

CELADON green#ACE1AF

Hunter green#3F704D

Persian green#00A693
Sea green#2E8B57
Jade green#00A86B
Laurel green#A9BA9D
Army green#4B5320

Pakistan green#006600
Viridian green#609078
Reseda Green#6C7C59
Verdun green#487800

Castleton Green#00563B
Bottle Green#006A4E
Cadmium Green#006B3C
"""

blue_colors = """
BLUE#3944BC
SLATE blue#757C88
SKY blue#63C5DA
NAVY blue#0A1172
INDIGO blue#281E5D
COBALT blue#1338BE
TEAL blue#48AAAD
OCEAN blue#016064

PEACOCK blue#022D36
AZURE blue#1520A6
CERULEAN blue#0492C2
LAPIS blue#2832C2
SPRUCE blue#2C3E4C
AEGEAN blue#1F456E
DENIM blue#151E3D

ADMIRAL blue#051094
SAPPHIRE blue#52B2BF
ARCTIC blue#82EEFD
TURQUOISE blue#40E0D0
STEEL BLUE blue#4682B4
Baby blue#89CFF0

Beau blue#BCD4E6
Little Boy blue#6CA0DC
Tiffany blue#81D8D0
Carolina blue#4B9CD3
Turkish blue#4F97A3
Maya blue#73C2FB
Egyptian blue#1034A6

Yale blue#00356B
Imperial blue#005A92
Ruddy blue#76ABDF
Air Superiority Blue#72A0C1
Aquamarine Blue#6BCAE2
Argentina Blue#6CB4EE

Blue Yonder#5072A7
"""


purple_colors = """
PURPLE#A32CC4
MAUVE purple#7A4988
DARK VIOLET#710193
BOYSENBERRY purple#630436
ELECTRIC LAVENDER#E39FF6
PLUM purple#601A35
STRONG MAGENTA#A1045A
DEEP LILAC#B65FCF

ROYAL PERIWINKLE#BE93D4
SANGRIA PURPLE#4D0F28
JAZZBERRY JAM#67032F
IRIS purple#9867C5
HEATHER purple#9E7BB5
AMETHYST#A45EE5
RAISIN#290916

MEDIUM ORCHID#AF69EF
DARK MULBERRY#4C0121
DEEP WINE#2C041C
THISTLE#D8BFD8
ORCHID#DA70D6
ELECTRIC VIOLET#8F00FF
Medium Purple#9370DB
Dark Orchid#9932CC
Dark Magenta#8B008B

Veronica#A020F0
Heliotrope#DF73FF
Purpureus#9A4EAE
Northwestern Purple#4E2A84
KSU Purple#512888
Pomp and Power#86608E
Mardi Gras#880085
Eminence#6C3082
Pansy Purple#78184A

Palatinate#72246C
Dark Purple#301934
Byzantium#702963
English Violet#563C5C
Affair#6F4685
Long Distance#6F456E
Prince Charming#493F5E
Lipstick Stain#8E4785
Pompadour#720058

Grape Color#6F2DA8
Pizza Edge#9A2CA0
Tyrian Purple#66023C
Ultra Violet#645394
Electric Purple#BF00FF
Studio#7851A9
"""

pink_colors = """
PINK#F699CD
ROSE#FC94AF
FRENCH FUCHSIA#FC46AA
PUNCH#F25278
BLUSH PINK#FEC5E5
WATERMELON#FE7F9C
FLAMINGO#FDA4BA
ROUGE#F26B8A

LIGHT SALMON#FDAB9F
CORAL PINK#FE7D6A
PEACH#FC9483
STRAWBERRY#FC4C4E
ROSEWOOD#9E4244
LEMONADE#FCBACB
TAFFY#FA86C4
BUBBLEGUM#FD5DA8
BALLET SLIPPER#F79AC0

LEMONADE CREPE#F2B8C6
MAGENTA PROCESS#E11584
HOT PINK#FF1694
AMARANTH PINK#E52B50
RAZZMATAZZ#E3256B
CARNATION#FFA6C9
Salmon#FF9999
Light pink#FFB6C1
Pastel pink#FFD1DC

Cherry blossom#FFB7C5
Baby pink#F4C2C2
Dark pink#E75480
Bright pink#FF007F
Neon pink#FF6EC7
Magenta#FF00FF
Tulip pink#FF8E8E
Piggy Pink#FDDDE6
Cotton Candy#FFBCD9

Cameo pink#EFBBCC
French pink#F64A8A
Persian pink#F77FBE
Candy pink#E4717A
Cherry pink#DE3163
Dark Terra cotta#CC4E5C
Deep Pink#FF1493
Dust Storm#E5CCC9
Nadeshiko Pink#F6ADC6

Wild Strawberry#FF43A4
Rubine Red#D10056
Hollywood Cerise#F400A1
Mexican Pink#E4007C
Steel Pink#CC3366
Rose Bonbon#F9429E
"""

brown_colors = """
BROWN OIL#231709
ROASTED COFFEE#4B371C
MOCHA#3C280D
PEANUT BROWN#795C34
CAROB#362511
HICKORY#371D10
WOOD#3F301D
PECAN#4A2511

WALNUT#432616
CARAMEL#65350F
GINGERBREAD#5E2C04
SYRUP#481F01
DARK CHOCOLATE#2E1503
TORTILLA#9A7B4F
UMBER#352315
TAWNY#80471C
BRUNETTE#3B1E08

CINNAMON BROWN#652A0E
PENNY#532915
CEDAR BROWN#4A3728
BEAVER#9F8170
BISTRE#3D2B1F
BOLE#79443B
Burnt umber#8A3324
Cafe au lait#A67B5B
Cafe noir#4B3621

Coffee#6F4E37
Deep coffee#704241
Copper#B87333
Dark brown#654321
Taupe#483C32
Ecru#C2B280
Golden brown#996515
Khaki#C3B091
Ochre#CC7722

Light brown#B5651D
Saddle brown#8B4513
Russet#80461B
Sienna#A0522D
Antique brass#CD9575
Burlywood#DEB887
Peru#CD853F
Tumbleweed#DEAA88
Dark vanilla#D1BEA8

Wood brown#C19A6B
Chamoisee#A0785A
Deer#BA8759
Dirt#9B7653
Coconut#965A3E
Windsor tan#A75502
"""

black_colors = """
BLACK#000000
"""

gray_colors = """
GRAY#808080
"""

white_colors = """
WHITE#FFFFFF
"""


def convertStrToJson(text: str):
    lines = text.strip().split("\n")
    result = []

    for line in lines:
        parts = line.split("#")
        print(parts)
        if parts[0] and parts[1] is not None:
            obj = {"name": parts[0].title(), "hex": f"#{parts[1]}"}

            result.append(obj)
    return result


red_converted = convertStrToJson(red_colors)
orange_converted = convertStrToJson(orange_colors)
yellow_converted = convertStrToJson(yellow_colors)
green_converted = convertStrToJson(green_colors)
blue_converted = convertStrToJson(blue_colors)
purple_converted = convertStrToJson(purple_colors)
pink_converted = convertStrToJson(pink_colors)
brown_converted = convertStrToJson(brown_colors)

data = {
    "red": red_converted,
    "orange": orange_converted,
    "yellow": yellow_converted,
    "green": green_converted,
    "blue": blue_converted,
    "purple": purple_converted,
    "pink": pink_converted,
    "brown": brown_converted,
}


file_path = "./output.json"

with open(file_path, "w") as json_file:
    json.dump(data, json_file, indent=2)
