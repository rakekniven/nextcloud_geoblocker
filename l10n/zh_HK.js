OC.L10N.register(
    "geoblocker",
    {
    "Update not possible. " : "無法更新。",
    "Update possible. " : "可更新的。",
    "Update running. " : "正在執行更新程序。",
    "Update undefined. " : "未定義更新。",
    "Status of the service cannot be determined." : "無法識別當前服務狀態。",
    "No database date available." : "數據庫中無可用資料。",
    "Database file location not available!" : "數據庫檔案位置不可用。",
    "Update Status not available!" : "更新狀態不明。",
    "OK. This service always returns \"%s\" for \"Country not found\"." : "OK。此服務將永遠回傳「%s」意味著找不到這個國家。",
    "OK." : "OK。",
    "ERROR: Service seem to be not installed on the host of the Nextcloud server or not reachable for the web server or is wrongly configured (is the database for IPv4 and IPv6 available?!). Maybe the use of the php function exec() is disabled in the php.ini." : "錯誤：服務可能並未正確安裝於Nextcloud伺服器，或是服務無法被Web server存取，也可能是錯誤的設置（數據庫僅支援IPv4或IPv6？）；也可能是PHP的exec()函數於 PHP。ini 被禁用。",
    "Date of the database cannot be determined!" : "無法偵測數據庫的更新日期！",
    "local" : "本地",
    "default" : "默認",
    "ERROR: There is an unknown problem with the service." : "錯誤：服務存在未知問題。",
    "ERROR: Country cannot be found." : "錯誤：找不到國家/地區。",
    "ERROR: Database is not valid, does not have the correct access rights or is not placed at %s." : "錯誤：數據庫無效，沒有正確的存取權限或未放置在%s處。",
    "ERROR: Invalid Argument." : "錯誤：無效的參數。",
    "ERROR: \"geoip2.phar\" does not seem to be place correctly or do not have the correct access rights." : "錯誤：“ geoip2.phar”似乎沒有正確放置或沒有正確的存取權限。",
    "No entries in the database. Please run update." : "數據庫不存在任何實體。請執行更新程序。",
    "ERROR:" : "錯誤：",
    "OK" : "OK",
    "PHP GMP Extension needs to be installed." : "需要安裝PHP擴展：GMP",
    "The database is not initialized. Please run update." : "數據庫尚未初始化，請執行更新程序。",
    "The database is currently initializing. Please wait until update is finished. This may take several minutes." : "數據庫正在初始化，這可能會花一點時間，請耐心等待。",
    "The database is corrupted. Please run update again." : "數據庫毀損，請重新執行更新程序。",
    "Last error message:" : "最新錯誤訊息。",
    "The database is currently updating, but the service can be used during the update." : "數據庫更新中，但服務在此期間仍然可用。",
    "Something is missing." : "有什麼地方出錯了。",
    "No database available!" : "無可用數據庫！",
    "RIR seems to have changed the file format." : "RIR 似乎更改了檔案格式。",
    "Exception caught during Update:" : "在更新時偵測到錯誤：",
    "Invalid file handle. Probably the internet connection got lost during the update." : "檔案錯誤。這可能是因為在更新時的網路連線中斷造成。",
    "Database contains old version information. Reset the database using the command line tool." : "數據庫存放了舊的資料，請使用命令列指令重設數據庫。",
    "\"allow_url_fopen\" needs to be allowed in php.ini." : "在\"php.ini\"內需要允許\"allow_url_fopen\"。",
    "Internet connection needs to be available." : "需要可用的網路連線。",
    "Current number of entries:" : "當前實體數量：",
    "Update in undefined state. Please complain to the developer." : "更新處於一個未定義的狀態，請向開發人員抱怨。",
    "GeoBlocker" : "GeoBlocker",
    "Blocks user depending on the estimated country of thier IP address." : "我們使用IP位置來推測用戶的地理位置，以將其封鎖。",
    "This is a front end to geo localization services, that allows blocking (beta), delaying (beta) and logging of login attempts from specified countries.\n\nCountries can be specified using allowlisting or blocklisting.\n\nCurrently available localization services are:\n- Geoiplookup (local programm on the host)\n- MaxMind GeoLite2 (local database accessed via PHP API)\n- Data from Regional Internet Registries (Nextcloud SQL database build up with data downloaded from the RIRs FTP servers)\n\nFor help how to set up the localization services please have a look at the GitHub repository (homepage on the right side)." : "這裡是geo地理服務的前端介面，在這裡你可以封鎖(beta)、減緩（透過添加延遲，beta）與記錄來自指定區域的登入請求。\n\n可以藉由允許清單與禁止清單來指定區域。\n\n目前可用的geo服務包含：\n- Geoiplookup（本機數據庫於本機處理)\n- MaxMind GeoLite2（經由PHP API存取本機數據庫）\n- 來自RIR（Nextcloud的SQL數據庫，資料由RIRs FTP伺服器提供）\n\n為了能設定本地理服務，你可以查看我們位於GitHub的repo（首頁連結位於面右邊）。",
    "Loading" : "載入中",
    "This is a front end to geo localization services, that allows blocking (beta), delaying (beta) and logging of login attempts from specified countries. " : "這裡是geo地理服務的前端介面，在這裡你可以封鎖(beta)、減緩（透過添加延遲，beta）與記錄來自指定區域的登入請求。",
    "Login attempts from local network IP addresses are not reacted on at all." : "來自區域網路的登入請求不會被程式處理。",
    "Wrong Nextcloud configuration (especially in container) can lead to all accesses seem to come from a local network IP address." : "錯誤的Nextcloid設置（尤其是使用容器虛擬化安裝的Nextcloud）將可能造成登入請求被誤判成來自區域網路。",
    "If you are accessing from external network, this should be an external IP address: " : "如果你從網際網路從取，這裡的IP位置應該要像是外部IP位置：",
    "is local." : "為區域網路。",
    "is external." : "為網際網路。",
    "Determination of the country from IP address is only as good as the chosen service." : "將IP位置轉換成地理位置的效果將與所選服務一樣優異。",
    "For help how to setup the localization services, have a look into the Readme in the" : "若需要任何有關設置本服務的說明，請參閱關於我(readme)於",
    "repository" : "數據庫",
    "Service" : "服務",
    "Choose the service you want to use to determine the country from the IP Address:" : "請選擇你要使用何種服務來將IP位置轉換成地理位置：",
    "Status of the chosen service: " : "所選服務的狀態：",
    "Date of the database: " : "數據庫更新日期：",
    "Configuration of the chosen service: " : "設定選中的服務：",
    "Location of the database: " : "數據庫位置：",
    "Update Database" : "更新數據庫",
    "Country Selection" : "選擇城市",
    "Choose the selection mode" : "請選擇運作模式：",
    "No country is blocked but the selected ones (blocklist)" : "僅封鎖清單內的國家（黑名單）。",
    "All countries are blocked but the selected ones (allowlist)" : "僅允許清單內的國家（白名單）。",
    "Select countries from list" : "從清單中選擇國家。",
    "The following countries were selected in the list above: " : "以下是被選中的國家：",
    "Reaction" : "動作",
    "If a login attempt is detected from the chosen countries, the attempt is logged with the following information" : "若登入請求被認為來自選中的國家，將會記錄以下的資訊。",
    "( be aware of data protection issues depending on your logging strategy)" : "（請注意這些資訊可能含有需被保護的個人資料）",
    "with IP Address" : "記錄IP位置",
    "with Country Code" : "記錄國家代碼",
    "with username" : "記錄用戶名稱",
    "In addition, the login attempt can also be delayed and blocked." : "作為選項，該登入請求可以被封鎖或延後處理。",
    "(beta version)" : "（測試版本）",
    "Activate delaying of login attempts from IP addresses of the specified countries." : "若該流量的IP顯示其來自被選中的國家，延遲登入嘗試。",
    "(Delaying is enforced for 30s before password check.)" : "（在驗證密碼正確與否前，該請求將被延遲30秒）",
    "Activate blocking of login attempts from IP addresses of the specified countries." : "若該流量的IP顯示其來自被選中的國家，封鎖登入。",
    "(Blocking is enforced after password check!)" : "（在密碼驗證後將強制封鎖！）",
    "(Blocking is enforced before password check by throwing an \"login denied\" exception!)" : "（在驗證密碼是否正確之前即將其封鎖，並顯示「登入請求被拒絕」的錯誤訊息）",
    "Test" : "測試",
    "Possibilities to test if the Geoblocker is working as expected:" : "測試 Geoblocker 的運作是否如同預期。",
    "Next login attempt of user \"%s\" will be simulated to come from the following IP address:" : "%s的下次登入將會被視為來自此IP位置：",
    "COUNTRY NOT FOUND" : "查無此國家！",
    "Andorra" : "安道爾",
    "United Arab Emirates" : "阿聯酋",
    "Afghanistan" : "阿富汗",
    "Antigua and Barbuda" : "安提瓜和巴布達",
    "Anguilla" : "安圭拉",
    "Albania" : "阿爾巴尼亞",
    "Armenia" : "亞美尼亞",
    "Angola" : "安哥拉",
    "Antarctica" : "南極洲",
    "Argentina" : "阿根廷",
    "American Samoa" : "美屬薩摩亞",
    "Austria" : "奧地利",
    "Australia" : "澳洲",
    "Aruba" : "阿魯巴",
    "Åland Islands" : "奧蘭",
    "Azerbaijan" : "阿塞拜疆",
    "Bosnia and Herzegovina" : "波斯尼亞及黑塞哥維那",
    "Barbados" : "巴巴多斯",
    "Bangladesh" : "孟加拉",
    "Belgium" : "比利時",
    "Burkina Faso" : "布基納法索",
    "Bulgaria" : "保加利亞",
    "Bahrain" : "巴林",
    "Burundi" : "布隆迪",
    "Benin" : "貝寧",
    "Saint Barthélemy" : "聖巴瑟米",
    "Bermuda" : "百慕達",
    "Brunei Darussalam" : "汶萊",
    "Bolivia (Plurinational State of)" : "玻利維亞",
    "Bonaire, Sint Eustatius and Saba" : "荷蘭加勒比區",
    "Brazil" : "巴西",
    "Bahamas" : "巴哈馬",
    "Bhutan" : "不丹",
    "Bouvet Island" : "布韋島",
    "Botswana" : "博茨瓦納",
    "Belarus" : "白俄羅斯",
    "Belize" : "伯利茲",
    "Canada" : "加拿大",
    "Cocos (Keeling) Islands" : "科科斯（基林）群島",
    "Congo, Democratic Republic of the" : "剛果民主共和國",
    "Central African Republic" : "中非共和國",
    "Congo" : "剛果共和國",
    "Switzerland" : "瑞士",
    "Côte d'Ivoire" : "科特迪瓦",
    "Cook Islands" : "庫克群島",
    "Chile" : "智利",
    "Cameroon" : "喀麥隆",
    "China" : "中國大陸",
    "Colombia" : "哥倫比亞",
    "Costa Rica" : "哥斯達黎加",
    "Cuba" : "古巴",
    "Cabo Verde" : "佛得角",
    "Curaçao" : "古拉索",
    "Christmas Island" : "聖誕島領地",
    "Cyprus" : "塞浦路斯",
    "Czechia" : "捷克",
    "Germany" : "德國",
    "Djibouti" : "吉布提",
    "Denmark" : "丹麥",
    "Dominica" : "多米尼加聯邦",
    "Dominican Republic" : "多明尼加共和國",
    "Algeria" : "阿爾及利亞",
    "Ecuador" : "厄瓜多爾",
    "Estonia" : "愛沙尼亞",
    "Egypt" : "埃及",
    "Western Sahara" : "西撒哈拉",
    "Eritrea" : "厄立特里亞",
    "Spain" : "西班牙",
    "Ethiopia" : "埃塞俄比亞",
    "Finland" : "芬蘭",
    "Fiji" : "斐濟",
    "Falkland Islands (Malvinas)" : "福克蘭群島",
    "Micronesia (Federated States of)" : "密克羅尼西亞聯邦",
    "Faroe Islands" : "法羅群島",
    "France" : "法國",
    "Gabon" : "加蓬",
    "United Kingdom of Great Britain and Northern Ireland" : "英國",
    "Grenada" : "格林納達",
    "Georgia" : "格魯吉亞",
    "French Guiana" : "法屬圭亞那",
    "Guernsey" : "根西島",
    "Ghana" : "迦納",
    "Gibraltar" : "直布羅陀",
    "Greenland" : "格陵蘭",
    "Gambia" : "岡比亞",
    "Guinea" : "幾內亞",
    "Guadeloupe" : "瓜地洛普",
    "Equatorial Guinea" : "赤道幾內亞",
    "Greece" : "希臘",
    "South Georgia and the South Sandwich Islands" : "南喬治亞和南桑威奇群島",
    "Guatemala" : "危地馬拉",
    "Guam" : "關島",
    "Guinea-Bissau" : "幾內亞比紹",
    "Guyana" : "圭亞那",
    "Hong Kong" : "香港",
    "Heard Island and McDonald Islands" : "赫德島和麥克唐納群島",
    "Honduras" : "洪都拉斯",
    "Croatia" : "克羅地亞",
    "Haiti" : "海地",
    "Hungary" : "匈牙利",
    "Indonesia" : "印尼",
    "Ireland" : "愛爾蘭",
    "Israel" : "以色列",
    "Isle of Man" : "萌島",
    "India" : "印度",
    "British Indian Ocean Territory" : "英屬印度洋領地",
    "Iraq" : "伊拉克",
    "Iran (Islamic Republic of)" : "伊朗",
    "Iceland" : "冰島",
    "Italy" : "意大利",
    "Jersey" : "澤西島",
    "Jamaica" : "牙買加",
    "Jordan" : "約旦",
    "Japan" : "日本",
    "Kenya" : "肯亞",
    "Kyrgyzstan" : "吉爾吉斯斯坦",
    "Cambodia" : "柬埔寨",
    "Kiribati" : "基里巴斯",
    "Comoros" : "科摩羅",
    "Saint Kitts and Nevis" : "聖吉斯納域斯",
    "Korea (Democratic People's Republic of)" : "北韓",
    "Korea, Republic of" : "南韓",
    "Kuwait" : "科威特",
    "Cayman Islands" : "開曼群島",
    "Kazakhstan" : "哈薩克",
    "Lao People's Democratic Republic" : "老撾",
    "Lebanon" : "黎巴嫩",
    "Saint Lucia" : "聖露西亞",
    "Liechtenstein" : "列支敦士登",
    "Sri Lanka" : "斯里蘭卡",
    "Liberia" : "利比里亞",
    "Lesotho" : "萊索托",
    "Lithuania" : "立陶宛",
    "Luxembourg" : "盧森堡",
    "Latvia" : "拉脫維亞",
    "Libya" : "利比亞",
    "Morocco" : "摩洛哥",
    "Monaco" : "摩納哥",
    "Moldova, Republic of" : "摩爾多瓦共和國",
    "Montenegro" : "黑山",
    "Saint Martin (French part)" : "法屬聖馬丁島",
    "Madagascar" : "馬達加斯加",
    "Marshall Islands" : "馬紹爾群島",
    "North Macedonia" : "北馬其頓",
    "Mali" : "馬里",
    "Myanmar" : "緬甸",
    "Mongolia" : "蒙古",
    "Macao" : "澳門",
    "Northern Mariana Islands" : "北馬利安納群島",
    "Martinique" : "馬丁尼克",
    "Mauritania" : "毛里塔尼亞",
    "Montserrat" : "蒙特塞拉特",
    "Malta" : "馬爾他",
    "Mauritius" : "毛里求斯",
    "Maldives" : "馬爾代夫",
    "Malawi" : "馬拉維",
    "Mexico" : "墨西哥",
    "Malaysia" : "馬來西亞",
    "Mozambique" : "莫桑比克",
    "Namibia" : "納米比亞",
    "New Caledonia" : "新喀里多尼亞",
    "Niger" : "尼日爾",
    "Norfolk Island" : "諾福克島",
    "Nigeria" : "尼日利亞",
    "Nicaragua" : "尼加拉瓜",
    "Netherlands" : "荷蘭",
    "Norway" : "挪威",
    "Nepal" : "尼泊爾",
    "Nauru" : "瑙魯",
    "Niue" : "紐埃島",
    "New Zealand" : "紐西蘭",
    "Oman" : "阿曼",
    "Panama" : "巴拿馬",
    "Peru" : "秘魯",
    "French Polynesia" : "法屬波利尼西亞",
    "Papua New Guinea" : "巴布亞新幾內亞",
    "Philippines" : "菲律賓",
    "Pakistan" : "巴基斯坦",
    "Poland" : "波蘭",
    "Saint Pierre and Miquelon" : "聖皮埃與密克隆群島",
    "Pitcairn" : "皮特肯群島",
    "Puerto Rico" : "波多黎各",
    "Palestine, State of" : "巴勒斯坦",
    "Portugal" : "葡萄牙",
    "Palau" : "帕勞",
    "Paraguay" : "巴拉圭",
    "Qatar" : "卡塔爾",
    "Réunion" : "留尼旺島",
    "Romania" : "羅馬尼亞",
    "Serbia" : "塞爾維亞",
    "Russian Federation" : "俄羅斯",
    "Rwanda" : "盧旺達",
    "Saudi Arabia" : "沙地阿拉伯",
    "Solomon Islands" : "所羅門群島",
    "Seychelles" : "塞舌爾",
    "Sudan" : "蘇丹",
    "Sweden" : "瑞典",
    "Singapore" : "新加坡",
    "Saint Helena, Ascension and Tristan da Cunha" : "聖赫勒拿、阿森松和特里斯坦-達庫尼亞",
    "Slovenia" : "斯洛文尼亞",
    "Svalbard and Jan Mayen" : "斯瓦爾巴和揚馬延",
    "Slovakia" : "斯洛伐克",
    "Sierra Leone" : "塞拉利昂",
    "San Marino" : "聖馬力諾",
    "Senegal" : "塞內加爾",
    "Somalia" : "索馬里",
    "Suriname" : "蘇利南",
    "South Sudan" : "南蘇丹",
    "Sao Tome and Principe" : "聖多美和普林西比",
    "El Salvador" : "薩爾瓦多",
    "Sint Maarten (Dutch part)" : "荷屬聖馬丁",
    "Syrian Arab Republic" : "敘利亞",
    "Eswatini" : "史瓦濟蘭王國",
    "Turks and Caicos Islands" : "特克斯及凱科斯群島",
    "Chad" : "乍得共和國",
    "French Southern Territories" : "法屬南部和南極領地",
    "Togo" : "多哥",
    "Thailand" : "泰國",
    "Tajikistan" : "塔吉克斯坦",
    "Tokelau" : "托克勞",
    "Timor-Leste" : "東帝汶",
    "Turkmenistan" : "土庫曼",
    "Tunisia" : "突尼西亞",
    "Tonga" : "湯加",
    "Turkey" : "土耳其",
    "Trinidad and Tobago" : "千里達及多巴哥",
    "Tuvalu" : "圖瓦盧",
    "Taiwan, Province of China" : "台灣，中華民國",
    "Tanzania, United Republic of" : "坦桑尼亞",
    "Ukraine" : "烏克蘭",
    "Uganda" : "烏干達",
    "United States Minor Outlying Islands" : "美國本土外小島嶼",
    "United States of America" : "美國",
    "Uruguay" : "烏拉圭",
    "Uzbekistan" : "烏茲別克",
    "Holy See" : "梵蒂岡",
    "Saint Vincent and the Grenadines" : "聖文森特和格林納丁斯",
    "Venezuela (Bolivarian Republic of)" : "委內瑞拉",
    "Virgin Islands (British)" : "英屬處女群島",
    "Virgin Islands (U.S.)" : "美屬處女群島",
    "Viet Nam" : "越南",
    "Vanuatu" : "瓦努阿圖",
    "Wallis and Futuna" : "瓦利斯和富圖那",
    "Samoa" : "薩摩亞",
    "Yemen" : "也門",
    "Mayotte" : "馬約特",
    "South Africa" : "南非",
    "Zambia" : "贊比亞",
    "Zimbabwe" : "津巴布韋"
},
"nplurals=1; plural=0;");
