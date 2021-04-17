OC.L10N.register(
    "geoblocker",
    {
    "Update not possible. " : "Posodobitev ni mogoča.",
    "Update possible. " : "Posodobitev je mogoča.",
    "Update running. " : "Poteka posodabljanje ...",
    "Update undefined. " : "Posodobitev ni določena.",
    "Status of the service cannot be determined." : "Stanja storitve ni mogoče določiti.",
    "No database date available." : "Datum podatkovne zbirke ni na voljo.",
    "Database file location not available!" : "Mesto datoteke podatkovne zbirke ni na voljo!",
    "Update Status not available!" : "Stanje posodobitve ni na voljo!",
    "Your attempt to login from country \"%s\" is blocked by the Nextcloud GeoBlocker App. If this is a problem for you, please contact your administrator." : "Prijave iz države »%s« so v programu Nextcloud GeoBlocker onemogočene. Če je to za vas težava, stopite v stik s skrbnikom sistema.",
    "OK. This service always returns \"%s\" for \"Country not found\"." : "Storitev vedno vrne odziv »%s« za »Države ni mogoče najti«.",
    "OK." : "V redu",
    "ERROR: Service seem to be not installed on the host of the Nextcloud server or not reachable for the web server or is wrongly configured (is the database for IPv4 and IPv6 available?!). Maybe the use of the php function exec() is disabled in the php.ini." : "NAPAKA: Kaže, da storitev ni nameščena na gostiteljskem strežniku Nextcloud, ta ni dosegljiv za spletni strežnik, ali pa je napačno nastavljen (ali je podatkovna zbirka za IPv4 in ipV6 na voljo?). Napaka je lahko tudi v onemogočeni funkciji php exec() v datoteki php.ini.",
    "Date of the database cannot be determined!" : "Datuma podatkovne zbirke ni mogoče določiti!",
    "local" : "krajevno",
    "default" : "privzeto",
    "ERROR: There is an unknown problem with the service." : "Napaka: prišlo je do neznane napake z izvajanjem storitve.",
    "ERROR: Country cannot be found." : "Napaka: države ni mogoče najti",
    "ERROR: Database is not valid, does not have the correct access rights or is not placed at %s." : "Napaka: podatkovna zbirka ni veljavna, ni navedenih ustreznih dovoljen, ali pa ni na naslovu %s.",
    "ERROR: Invalid Argument." : "Napaka: neveljaven argument",
    "ERROR: \"geoip2.phar\" does not seem to be place correctly or do not have the correct access rights." : "Napaka: kaže, da datoteka »geoip2.phar« ni pravilno nameščena, ali pa ni ustreznih dovoljenj.",
    "No entries in the database. Please run update." : "V podatkovni zbirki ni vpisov. Zaženite posodobitev.",
    "ERROR:" : "NAPAKA:",
    "OK" : "V redu",
    "PHP GMP Extension needs to be installed." : "Nameščena mora biti razširitev PHP GMP.",
    "The database is not initialized. Please run update." : "Podatkovna zbirka še ni pripravljena. Zaženite posodobitev.",
    "The database is currently initializing. Please wait until update is finished. This may take several minutes." : "Poteka pripravljanje podatkovne zbirke. Počakajte, da se postopek konča. Običajno traja nekaj minut.",
    "The database is corrupted. Please run update again." : "Podatkovna zbirka je okvarjena. Ponovno zaženite posodobitev.",
    "Last error message:" : "Zadnje sporočilo o napaki:",
    "The database is currently updating, but the service can be used during the update." : "Trenutno poteka posodabljanje podatkovne zbirke, a je storitve kljub temu mogoče uporabljati.",
    "Something is missing." : "Nekaj manjka ...",
    "No database available!" : "Na voljo ni nobena podatkovna zbirka!",
    "RIR seems to have changed the file format." : "Kaže, da je na vpisniku RIR spremenjen zapis datoteke.",
    "Exception caught during Update:" : "Med posodabljanjem je bila zaznana izjemna napaka:",
    "Invalid file handle. Probably the internet connection got lost during the update." : "Neveljaven ročnik datoteke. Najverjetneje je bila spletna povezava med posodabljanjem prekinjena.",
    "Database contains old version information. Reset the database using the command line tool." : "Podatkovna zbirka vsebuje stare podrobnosti različice. Ponastavite podatkovno zbirko z uporabo ukazne vrstice.",
    "\"allow_url_fopen\" needs to be allowed in php.ini." : "Ukaz »allow_url_fopen« mora biti v datoteke php.ini omogočen.",
    "Internet connection needs to be available." : "Na voljo mora biti spletna povezava.",
    "Current number of entries:" : "Trenutno število vnosov:",
    "Update in undefined state. Please complain to the developer." : "Posodobitev je v nedoločljivem stanju. Pošljite razvijalcem poročilo o napaki.",
    "GeoBlocker" : "GeoBlocker",
    "Blocks user depending on the estimated country of thier IP address." : "Prepreči prijavo glede na ocenjeno državo oziroma zaznan IP naslov.",
    "This is a front end to geo localization services, that allows blocking (beta), delaying (beta) and logging of login attempts from specified countries.\n\nCountries can be specified using allowlisting or blocklisting.\n\nCurrently available localization services are:\n- Geoiplookup (local programm on the host)\n- MaxMind GeoLite2 (local database accessed via PHP API)\n- Data from Regional Internet Registries (Nextcloud SQL database build up with data downloaded from the RIRs FTP servers)\n\nFor help how to set up the localization services please have a look at the GitHub repository (homepage on the right side)." : "Program za prilagajanje geolokacijskih storitev, s katerim je mogoče preprečiti (preizkusno), časovno zamikati (preizkusno) in beležiti poskuse prijav iz določenih držav.\n\nDržave je mogoče razvrstiti na seznam dovoljenih ali zavrnjenih.\n\nTrenutno razpoložljive geolokacijske storitve so:\n- Geoiplookup (krajevni program na gostitelju),\n- MaxMind GeoLite2 (dostop do krajevne podatkovne zbirke prek vmesnika API PHP),\n- Podatki Regijskih Internetnih Registrov (podatkovna zbirka Nextcloud SQL, zgrajena s podatki, prejetimi prek vpisnikov RIR za strežnike FTP)\n\nZa pomoč pri nastavitvah lokalizacijskih storitev si oglejte skladišče Github (spletišče na desni strani).",
    "Loading" : "Poteka nalaganje ...",
    "This is a front end to geo localization services, that allows blocking (beta), delaying (beta) and logging of login attempts from specified countries. " : "To je vmesnik za prikazovanje geolokacijskih storitev, ki mogoča zavračanje (preizkusno), odlašanje (preizkusno) in beleženje poskusov prijav iz določenih držav.",
    "Login attempts from local network IP addresses are not reacted on at all." : "Poskusi prijave iz naslovov krajevnega omrežja IP ne sprožijo nobenega odziva.",
    "Wrong Nextcloud configuration (especially in container) can lead to all accesses seem to come from a local network IP address." : "Napačne nastavitve Nextcloud (zlasti v vsebniku) lahko povzročijo, da so dostopi zaznani, ko da izvirajo vsi z naslova IP krajevnega omrežja.",
    "If you are accessing from external network, this should be an external IP address: " : "Če poteka dostop prek zunanjega omrežja, mora biti to zunanji naslov IP:",
    "is local." : "je krajeven naslov.",
    "is external." : "je zunanji naslov.",
    "Determination of the country from IP address is only as good as the chosen service." : "Določanje države prek naslova IP je tako dobro, kot je dobra storitev v uporabi.",
    "For help how to setup the localization services, have a look into the Readme in the" : "Za pomoč, kako nastaviti geolokacijske storitve, si oglejte datoteko Readme v",
    "repository" : "skladišče",
    "Service" : "Storitev",
    "Choose the service you want to use to determine the country from the IP Address:" : "Izberite storitev, s katero želite določiti državo prek naslova IP:",
    "Status of the chosen service: " : "Stanje izbrane storitve:",
    "Date of the database: " : "Datum podatkovne zbirke:",
    "Configuration of the chosen service: " : "Nastavitev izbrane storitve:",
    "Location of the database: " : "Mesto podatkovne zbirke:",
    "Update Database" : "Posodobi podatkovno zbirko",
    "Country Selection" : "Izbor države",
    "Choose the selection mode" : "Določitev načina izbire",
    "No country is blocked but the selected ones (blocklist)" : "Blokirane so le izbrane države (črni seznam)",
    "All countries are blocked but the selected ones (allowlist)" : "Blokirane so vse, razen iz branih držav (beli seznam).",
    "Select countries from list" : "Izbor držav s seznama",
    "The following countries were selected in the list above: " : "Na seznamu zgoraj so bile izbrane navedene države:",
    "Reaction" : "Odziv",
    "If a login attempt is detected from the chosen countries, the attempt is logged with the following information" : "Če je zaznan poskus prijave iz določenih držav, se poskus zabeleži z naslednjimi podrobnostmi",
    "( be aware of data protection issues depending on your logging strategy)" : "(bodite pozorni na določila zaščite podatkov, odvisne od izbrane strategije beleženja)",
    "with IP Address" : "z naslovom IP",
    "with Country Code" : "s kodo države",
    "with username" : "z uporabniškim imenom",
    "In addition, the login attempt can also be delayed and blocked." : "Ob tem je poskus prijave lahko tudi zadržan ali zavrnjen.",
    "(beta version)" : "(različica beta)",
    "Activate delaying of login attempts from IP addresses of the specified countries." : "Omogočite zamikanje poskusov prijav z naslovov IP navedenih držav.",
    "(30 seconds)" : "(30 sekund)",
    "Activate blocking of login attempts from IP addresses of the specified countries." : "Omogoči zavračanje poskusov prijav z naslovov IP navedenih držav.",
    "Test" : "Preizkus",
    "Possibilities to test if the Geoblocker is working as expected:" : "Možnosti za preverjanje, ali program Geoblocker deluje po pričakovanjih:",
    "Next login attempt of user \"%s\" will be simulated to come from the following IP address:" : "Naslednji poskus prijave uporabnika »%s« bo navidezno poslan iz naslova IP:",
    "COUNTRY NOT FOUND" : "DRŽAVE NI MOGOČE NAJTI",
    "Andorra" : "Andora",
    "United Arab Emirates" : "Združeni Arabski Emirati",
    "Afghanistan" : "Afganistan",
    "Antigua and Barbuda" : "Antigva in Barbuda",
    "Anguilla" : "Anguilla",
    "Albania" : "Albanija",
    "Armenia" : "Armenija",
    "Angola" : "Angola",
    "Antarctica" : "Antarktika",
    "Argentina" : "Argentina",
    "American Samoa" : "Ameriška Samoa",
    "Austria" : "Avstrija",
    "Australia" : "Australija",
    "Aruba" : "Aruba",
    "Åland Islands" : "Otočje Åland",
    "Azerbaijan" : "Azerbajdžan",
    "Bosnia and Herzegovina" : "Bosna in Hercegovina",
    "Barbados" : "Barbados",
    "Bangladesh" : "Bangladeš",
    "Belgium" : "Belgija",
    "Burkina Faso" : "Burkina Faso",
    "Bulgaria" : "Bolgarija",
    "Bahrain" : "Bahrain",
    "Burundi" : "Burundi",
    "Benin" : "Benin",
    "Saint Barthélemy" : "Saint Barthélemy",
    "Bermuda" : "Bermuda",
    "Brunei Darussalam" : "Brunej Darussalam",
    "Bolivia (Plurinational State of)" : "Bolivija",
    "Bonaire, Sint Eustatius and Saba" : "Bonaire, Sint Eustatius in Saba",
    "Brazil" : "Brazilija",
    "Bahamas" : "Bahami",
    "Bhutan" : "Butan",
    "Bouvet Island" : "Otok Bouvet",
    "Botswana" : "Botsvana",
    "Belarus" : "Belorusija",
    "Belize" : "Belize",
    "Canada" : "Kanada",
    "Cocos (Keeling) Islands" : "Kokosovi otoki (Keeling)",
    "Congo, Democratic Republic of the" : "Kongo, Demokratična republika",
    "Central African Republic" : "Centralno Afriška Republika",
    "Congo" : "Kongo",
    "Switzerland" : "Švica",
    "Côte d'Ivoire" : "Slonokoščeni otoki",
    "Cook Islands" : "Cookovi otoki",
    "Chile" : "Čile",
    "Cameroon" : "Kamerun",
    "China" : "Kitajska",
    "Colombia" : "Kolumbija",
    "Costa Rica" : "Kostarika",
    "Cuba" : "Kuba",
    "Cabo Verde" : "Cabo Verde",
    "Curaçao" : "Curaçao",
    "Christmas Island" : "Božični otoki",
    "Cyprus" : "Ciper",
    "Czechia" : "Češka",
    "Germany" : "Nemčija",
    "Djibouti" : "Džibuti",
    "Denmark" : "Danska",
    "Dominica" : "Dominika",
    "Dominican Republic" : "Dominikanska republika",
    "Algeria" : "Alžirija",
    "Ecuador" : "Ekvador",
    "Estonia" : "Estonija",
    "Egypt" : "Egipt",
    "Western Sahara" : "Severna Sahara",
    "Eritrea" : "Eritreja",
    "Spain" : "Španija",
    "Ethiopia" : "Etiopija",
    "Finland" : "Finska",
    "Fiji" : "Fiji",
    "Falkland Islands (Malvinas)" : "Falklandski otoki",
    "Micronesia (Federated States of)" : "Micronezija (Federativne države)",
    "Faroe Islands" : "Farski otoki",
    "France" : "Francija",
    "Gabon" : "Gabon",
    "United Kingdom of Great Britain and Northern Ireland" : "Združeno kraljestvo Velike Britanije in Severne Irske",
    "Grenada" : "Grenada",
    "Georgia" : "Gruzija",
    "French Guiana" : "Francoska Gvajana",
    "Guernsey" : "Guernsey",
    "Ghana" : "Gana",
    "Gibraltar" : "Gibraltar",
    "Greenland" : "Grenlandija",
    "Gambia" : "Gambija",
    "Guinea" : "Gvineja",
    "Guadeloupe" : "Guadeloupe",
    "Equatorial Guinea" : "Ekvatorialna Gvineja",
    "Greece" : "Grčija",
    "South Georgia and the South Sandwich Islands" : "Južna Georgija in Južni Sandwichevi otoki",
    "Guatemala" : "Gvatemala",
    "Guam" : "Gvam",
    "Guinea-Bissau" : "Gvineja-Bissau",
    "Guyana" : "Gvajana",
    "Hong Kong" : "Hong Kong",
    "Heard Island and McDonald Islands" : "Otoka Heard in McDonald",
    "Honduras" : "Honduras",
    "Croatia" : "Hrvaška",
    "Haiti" : "Haiti",
    "Hungary" : "Madžarska",
    "Indonesia" : "Indonezija",
    "Ireland" : "Irska",
    "Israel" : "Izrael",
    "Isle of Man" : "Otok Man",
    "India" : "Indija",
    "British Indian Ocean Territory" : "Britanski teritorij v Indijskem oceanu",
    "Iraq" : "Irak",
    "Iran (Islamic Republic of)" : "Iran",
    "Iceland" : "Islandija",
    "Italy" : "Italija",
    "Jersey" : "Jersey",
    "Jamaica" : "Jamajka",
    "Jordan" : "Jordanija",
    "Japan" : "Japonska",
    "Kenya" : "Kenija",
    "Kyrgyzstan" : "Kirgizistan",
    "Cambodia" : "Kambodža",
    "Kiribati" : "Kiribati",
    "Comoros" : "Komori",
    "Saint Kitts and Nevis" : "Sveti Krištof in Nevis",
    "Korea (Democratic People's Republic of)" : "Koreja (Demokratična ljudska republika)",
    "Korea, Republic of" : "Koreja, republika",
    "Kuwait" : "Kuvajt",
    "Cayman Islands" : "Kajmansko otočje",
    "Kazakhstan" : "Kazahstan",
    "Lao People's Democratic Republic" : "Laos (Ljudska demokratična republika)",
    "Lebanon" : "Libanon",
    "Saint Lucia" : "Sveta Lucija",
    "Liechtenstein" : "Lihtenštajn",
    "Sri Lanka" : "Šrilanka",
    "Liberia" : "Liberija",
    "Lesotho" : "Lesoto",
    "Lithuania" : "Litva",
    "Luxembourg" : "Luksemburg",
    "Latvia" : "Latvija",
    "Libya" : "Libija",
    "Morocco" : "Maroko",
    "Monaco" : "Monako",
    "Moldova, Republic of" : "Moldavija, republika",
    "Montenegro" : "Črna Gora",
    "Saint Martin (French part)" : "Sveti Martin (francoski del)",
    "Madagascar" : "Madagaskar",
    "Marshall Islands" : "Maršalovi otoki",
    "North Macedonia" : "Severna Makedonija",
    "Mali" : "Mali",
    "Myanmar" : "Mjanmar",
    "Mongolia" : "Mongolija",
    "Macao" : "Makao",
    "Northern Mariana Islands" : "Severni Marijanski otoki",
    "Martinique" : "Martinik",
    "Mauritania" : "Mavretanija",
    "Montserrat" : "Montserrat",
    "Malta" : "Malta",
    "Mauritius" : "Mavricijus",
    "Maldives" : "Maldivi",
    "Malawi" : "Malavi",
    "Mexico" : "Mehika",
    "Malaysia" : "Malezija",
    "Mozambique" : "Mozambik",
    "Namibia" : "Namibija",
    "New Caledonia" : "Nova Kaledonija",
    "Niger" : "Niger",
    "Norfolk Island" : "Otok Norfolk",
    "Nigeria" : "Nigerija",
    "Nicaragua" : "Nikaragva",
    "Netherlands" : "Nizozemska",
    "Norway" : "Norveška",
    "Nepal" : "Nepal",
    "Nauru" : "Nauru",
    "Niue" : "Niue",
    "New Zealand" : "Nova Zelandija",
    "Oman" : "Oman",
    "Panama" : "Panama",
    "Peru" : "Peru",
    "French Polynesia" : "Francoska polinezija",
    "Papua New Guinea" : "Papua Nova Gvineja",
    "Philippines" : "Filipini",
    "Pakistan" : "Pakistan",
    "Poland" : "Poljska",
    "Saint Pierre and Miquelon" : "Saint Pierre in Miquelon",
    "Pitcairn" : "Pitcairn",
    "Puerto Rico" : "Portoriko",
    "Palestine, State of" : "Palestina",
    "Portugal" : "Portugalska",
    "Palau" : "Palau",
    "Paraguay" : "Paragvaj",
    "Qatar" : "Katar",
    "Réunion" : "Réunion",
    "Romania" : "Romunija",
    "Serbia" : "Srbija",
    "Russian Federation" : "Ruska federacija",
    "Rwanda" : "Ruanda",
    "Saudi Arabia" : "Savdova Arabija",
    "Solomon Islands" : "Solomonovi otoki",
    "Seychelles" : "Sejšeli",
    "Sudan" : "Sudan",
    "Sweden" : "Švedska",
    "Singapore" : "Singapur",
    "Saint Helena, Ascension and Tristan da Cunha" : "Sveta Helena, Ascension in Tristan da Cunha",
    "Slovenia" : "Slovenija",
    "Svalbard and Jan Mayen" : "Svalbard in Jan Mayen",
    "Slovakia" : "Slovaška",
    "Sierra Leone" : "Sierra Leone",
    "San Marino" : "San Marino",
    "Senegal" : "Senegal",
    "Somalia" : "Somalija",
    "Suriname" : "Surinam",
    "South Sudan" : "Južni Sudan",
    "Sao Tome and Principe" : "Sao Tome in Principe",
    "El Salvador" : "El Salvador",
    "Sint Maarten (Dutch part)" : "Sveti Martin (nizozemski del)",
    "Syrian Arab Republic" : "Sirska arabska republika",
    "Eswatini" : "Esvatini",
    "Turks and Caicos Islands" : "Otoki Turks in Caicos",
    "Chad" : "Čad",
    "French Southern Territories" : "Francoski južni teritorij",
    "Togo" : "Togo",
    "Thailand" : "Tajska",
    "Tajikistan" : "Tadžikistan",
    "Tokelau" : "Tokelau",
    "Timor-Leste" : "Timor-Leste",
    "Turkmenistan" : "Turkmenistan",
    "Tunisia" : "Tunizija",
    "Tonga" : "Tonga",
    "Turkey" : "Turčija",
    "Trinidad and Tobago" : "Trinidad in Tobago",
    "Tuvalu" : "Tuvalu",
    "Taiwan, Province of China" : "Tajvan, provinca Kitajske",
    "Tanzania, United Republic of" : "Tanzania",
    "Ukraine" : "Ukrajina",
    "Uganda" : "Uganda",
    "United States Minor Outlying Islands" : "Ameriški mali oddaljeni otoki",
    "United States of America" : "Združene države Amerike",
    "Uruguay" : "Urugvaj",
    "Uzbekistan" : "Uzbekistan",
    "Holy See" : "Sveti sedež",
    "Saint Vincent and the Grenadines" : "Sveti Vincencij in Grenadine",
    "Venezuela (Bolivarian Republic of)" : "Venezuela (Bolivarska Republika)",
    "Virgin Islands (British)" : "Deviški otoki (Britanski)",
    "Virgin Islands (U.S.)" : "Deviški otoki (ZDA)",
    "Viet Nam" : "Vijetnam",
    "Vanuatu" : "Vanuatu",
    "Wallis and Futuna" : "Wallis in Futuna",
    "Samoa" : "Samoa",
    "Yemen" : "Jemen",
    "Mayotte" : "Mayotte",
    "South Africa" : "Južna Afrika",
    "Zambia" : "Zambija",
    "Zimbabwe" : "Zimbabve"
},
"nplurals=4; plural=(n%100==1 ? 0 : n%100==2 ? 1 : n%100==3 || n%100==4 ? 2 : 3);");
