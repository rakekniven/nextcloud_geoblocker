OC.L10N.register(
    "geoblocker",
    {
    "The user \"%s\" logged in with IP address \"%s\" from blocked country \"%s\"." : "Der Benutzer \"%s\" hat sich mit der IP-Adresse \"%s\"  aus dem gesperrten Land \"%s\" angemeldet.",
    "The login of user \"%s\" with IP address \"%s\" could not be checked due to problems with location service." : "Die Anmeldung des Benutzers \"%s\" mit der IP-Adresse \"%s\" kann wegen Problemen mit dem  Geolokalisierungsdienst nicht geprüft werden.",
    "The user \"%s\" logged in with an invalid IP address \"%s\"." : "Der Benutzer \"%s\" hat sich mit der ungültigen IP-Adresse \"%s\" angemeldet.",
    "OK.  (Please make sure the databases are up to date. This is currently not checked here.)" : "OK. (Bitte sicherstellen, dass alle Datenbanken aktuell sind. Dies wird bislang hier nicht überprüft.)",
    "ERROR: \"geoiplookup\" seem to be not installed on the host of the Nextcloud server or not reachable for the web server or is wrongly configured (is the database for IPv4 and IPv6 available?!). Maybe the use of the php function exec() is disabled in the php.ini." : "FEHLER: \"geoiplookup\" scheint auf dem Host des Nextcloud-Servers nicht installiert oder für den Webserver nicht erreichbar zu sein oder ist falsch konfiguriert (ist die Datenbank für IPv4 und IPv6 verfügbar ?!). Möglicherweise ist die Verwendung der PHP-Funktion exec () in der php.ini deaktiviert.",
    "GeoBlocker" : "GeoBlocker",
    "Blocks user depending on the estimated country of thier IP address." : "Blockt Benutzer abhängig von dem ungefähren Standort seiner IP-Adresse.",
    "This is a front end to geo localization services, that allows blocking (currently only logging!) of login attempts from specified countries. (Early Version)" : "Dies ist ein Front-End für Geolokalisierungsdienste, mit dem Anmeldeversuche aus bestimmten Ländern blockiert werden können (derzeit nur Protokollierung!). (Frühe Version)",
    "This is a front end to geo localization services, that allows blocking (currently only logging!) of login attempts from specified countries. " : "Hierbei handelt es sich um ein Front-End für Geo-Lokalisierungsdienste, das die Blockierung (derzeit nur Protokollierung!) von Anmeldeversuchen aus bestimmten Ländern ermöglicht. ",
    "Login attempts from local network IP addresses are not blocked (or logged)." : "Anmeldeversuche von IP-Adressen im lokalen Netzwerk werden nicht blockiert (oder protokolliert).",
    "Wrong Nextcloud configuration (especially in container) can lead to all accesses seem to come from a local network IP address." : "Falsche Konfiguration der Nextcloud (insbesondere in Containern) kann dazu führen, dass alle Zugriffe scheinbar von der IP-Adresse des lokalen Netzwerks kommen.",
    "If you are accessing from external network, this should be an external IP address: " : "Wenn Sie von einem externen Netzwerk aus zugreifen, sollte dies eine externe Adresse sein: ",
    "is local." : "ist lokal.",
    "is external." : "ist extern.",
    "Determination of the country from IP address is only as good as the chosen service." : "Die Bestimmung des Landes aus der IP-Adresse ist nur so gut wie der gewählte Dienst.",
    "Service" : "Dienst",
    "Choose the service you want to use to determine the country from the IP Address:" : "Wählen Sie den Dienst, mit dem Sie das Land aus der IP-Adresse ermitteln möchten:",
    "local" : "Lokal",
    "default" : "Standard",
    "Status of the chosen service: " : "Status des ausgewählten Dienstes: ",
    "Country Selection" : "Länderauswahl",
    "Choose the selection mode" : "Auswahlmethode wählen",
    "No country is blocked but the selected ones" : "Kein Land außer den ausgewählten Ländern ist blockiert",
    "All countries are blocked but the selected ones" : "Alle Länder außer den ausgewählten Ländern sind blockiert",
    "Select countries from list" : "Länder aus Liste auswählen",
    "The following countries were selected in the list above: " : "Die folgenden Länder wurden in der obigen Liste ausgewählt: ",
    "Reaction" : "Reaktion",
    "If a login attempt is detected from the chosen countries, the attempt is logged with the following information" : "Wenn ein Anmeldeversuch aus den ausgewählten Ländern erkannt wird, wird der Versuch mit den folgenden Informationen protokolliert",
    "( be aware of data protection issues depending on your logging strategy)" : "(Datenschutzprobleme abhängig von der Protokollierungsstrategie beachten) ",
    "with IP Address" : "mit IP-Adresse",
    "with Country Code" : "mit Länderkennung",
    "with username" : "mit Benutzername",
    "In addition, the login attempt can also be blocked" : "Darüber hinaus kann auch der Anmeldeversuch blockiert werden",
    "(in a future version)" : "(in einer zukünftigen Version)",
    "Activate blocking of the login attempt from IP addresses of the specified countries." : "Sperrung der Anmeldung von IP-Adressen der angegebenen Länder aktivieren.",
    "Test" : "Test",
    "Next login attempt of user \"%s\" will be simulated to come from the following IP address:" : "Der nächste Login-Versuch des Benutzers \"%s\" wird so simuliert, dass er von der folgenden IP-Adresse kommt:",
    "COUNTRY NOT FOUND" : "LAND NICHT GEFUNDEN",
    "Andorra" : "Andorra",
    "United Arab Emirates" : "Vereinigte Arabische Emirate",
    "Afghanistan" : "Afghanistan",
    "Antigua and Barbuda" : "Antigua und Barbuda",
    "Anguilla" : "Anguilla",
    "Albania" : "Albanien",
    "Armenia" : "Armenien",
    "Angola" : "Angola",
    "Antarctica" : "Antarktis",
    "Argentina" : "Argentinien",
    "American Samoa" : "Amerikanisch-Samoa",
    "Austria" : "Österreich",
    "Australia" : "Australien",
    "Aruba" : "Aruba",
    "Åland Islands" : "Åland Inseln",
    "Azerbaijan" : "Aserbaidschan",
    "Bosnia and Herzegovina" : "Bosnien und Herzegowina",
    "Barbados" : "Barbados",
    "Bangladesh" : "Bangladesch",
    "Belgium" : "Belgien",
    "Burkina Faso" : "Burkina Faso",
    "Bulgaria" : "Bulgarien",
    "Bahrain" : "Bahrain",
    "Burundi" : "Burundi",
    "Benin" : "Benin",
    "Saint Barthélemy" : "Saint Barthélemy",
    "Bermuda" : "Bermuda",
    "Brunei Darussalam" : "Brunei",
    "Bolivia (Plurinational State of)" : "Bolivien",
    "Bonaire, Sint Eustatius and Saba" : "Bonaire, Saba und Sint Eustatius",
    "Brazil" : "Brasilien",
    "Bahamas" : "Bahamas",
    "Bhutan" : "Bhutan",
    "Bouvet Island" : "Bouvetinsel",
    "Botswana" : "Botswana",
    "Belarus" : "Weißrussland",
    "Belize" : "Belize",
    "Canada" : "Kanada",
    "Cocos (Keeling) Islands" : "Kokosinseln",
    "Congo, Democratic Republic of the" : "Kongo (Demokratische Republik)",
    "Central African Republic" : "Zentralafrikanische Republik",
    "Congo" : "Kongo",
    "Switzerland" : "Schweiz",
    "Côte d'Ivoire" : "Elfenbeinküste",
    "Cook Islands" : "Cookinseln",
    "Chile" : "Chile",
    "Cameroon" : "Kamerun",
    "China" : "China",
    "Colombia" : "Kolumbien",
    "Costa Rica" : "Costa Rica",
    "Cuba" : "Kuba",
    "Cabo Verde" : "Kap Verde",
    "Curaçao" : "Curaçao",
    "Christmas Island" : "Weihnachtsinsel",
    "Cyprus" : "Zypern",
    "Czechia" : "Tschechien",
    "Germany" : "Deutschland",
    "Djibouti" : "Dschibuti",
    "Denmark" : "Dänemark",
    "Dominica" : "Dominica",
    "Dominican Republic" : "Dominikanische Republik",
    "Algeria" : "Algerien",
    "Ecuador" : "Ekuador",
    "Estonia" : "Estland",
    "Egypt" : "Ägypten",
    "Western Sahara" : "Westsahara",
    "Eritrea" : "Eritrea",
    "Spain" : "Spanien",
    "Ethiopia" : "Äthiopien",
    "Finland" : "Finnland",
    "Fiji" : "Fidschi",
    "Falkland Islands (Malvinas)" : "Falklandinseln",
    "Micronesia (Federated States of)" : "Mikronesien (Föderierte Staaten)",
    "Faroe Islands" : "Färöer",
    "France" : "Frankreich",
    "Gabon" : "Gabun",
    "United Kingdom of Great Britain and Northern Ireland" : "Vereinigtes Königreich Großbritannien und Nordirland",
    "Grenada" : "Grenada",
    "Georgia" : "Georgien",
    "French Guiana" : "Französisch-Guinea",
    "Guernsey" : "Guernsey",
    "Ghana" : "Ghana",
    "Gibraltar" : "Gibraltar",
    "Greenland" : "Grönland",
    "Gambia" : "Gambia",
    "Guinea" : "Guinea",
    "Guadeloupe" : "Guadeloupe",
    "Equatorial Guinea" : "Äquatorialguinea",
    "Greece" : "Griechenland",
    "South Georgia and the South Sandwich Islands" : "Südgeorgien und die Südlichen Sandwichinseln",
    "Guatemala" : "Guatemala",
    "Guam" : "Guam",
    "Guinea-Bissau" : "Guinea-Bissau",
    "Guyana" : "Guyana",
    "Hong Kong" : "Hongkong",
    "Heard Island and McDonald Islands" : "Heard und die McDonaldinseln",
    "Honduras" : "Honduras",
    "Croatia" : "Kroatien",
    "Haiti" : "Haiti",
    "Hungary" : "Ungarn",
    "Indonesia" : "Indonesien",
    "Ireland" : "Irland",
    "Israel" : "Israel",
    "Isle of Man" : "Isle of Man",
    "India" : "Indien",
    "British Indian Ocean Territory" : "Britisches Territorium im Indischen Ozean",
    "Iraq" : "Irak",
    "Iran (Islamic Republic of)" : "Iran",
    "Iceland" : "Island",
    "Italy" : "Italien",
    "Jersey" : "Jersey",
    "Jamaica" : "Jamaika",
    "Jordan" : "Jordanien",
    "Japan" : "Japan",
    "Kenya" : "Kenia",
    "Kyrgyzstan" : "Kirgistan",
    "Cambodia" : "Kambodscha",
    "Kiribati" : "Kiribati",
    "Comoros" : "Komoren",
    "Saint Kitts and Nevis" : "St. Kitts und Nevis",
    "Korea (Democratic People's Republic of)" : "Nordkorea",
    "Korea, Republic of" : "Korea, Republik",
    "Kuwait" : "Kuwait",
    "Cayman Islands" : "Kaimaninseln",
    "Kazakhstan" : "Kasachstan",
    "Lao People's Democratic Republic" : "Laos",
    "Lebanon" : "Libanon",
    "Saint Lucia" : "St. Lucia",
    "Liechtenstein" : "Liechtenstein",
    "Sri Lanka" : "Sri Lanka",
    "Liberia" : "Liberia",
    "Lesotho" : "Lesotho",
    "Lithuania" : "Litauen",
    "Luxembourg" : "Luxemburg",
    "Latvia" : "Lettland",
    "Libya" : "Libyen",
    "Morocco" : "Marokko",
    "Monaco" : "Monaco",
    "Moldova, Republic of" : "Moldawien (Republik)",
    "Montenegro" : "Montenegro",
    "Saint Martin (French part)" : "St. Martin",
    "Madagascar" : "Madagaskar",
    "Marshall Islands" : "Marshallinseln",
    "North Macedonia" : "Nordmazedonien",
    "Mali" : "Mali",
    "Myanmar" : "Myanmar",
    "Mongolia" : "Mongolei",
    "Macao" : "Macau",
    "Northern Mariana Islands" : "Nördliche Marianen",
    "Martinique" : "Martinique",
    "Mauritania" : "Mauretanien",
    "Montserrat" : "Montserrat",
    "Malta" : "Malta",
    "Mauritius" : "Mauritius",
    "Maldives" : "Malediven",
    "Malawi" : "Malawi",
    "Mexico" : "Mexiko",
    "Malaysia" : "Malaysia",
    "Mozambique" : "Mosambik",
    "Namibia" : "Namibia",
    "New Caledonia" : "Neukaledonien",
    "Niger" : "Niger",
    "Norfolk Island" : "Norfolkinsel",
    "Nigeria" : "Nigeria",
    "Nicaragua" : "Nicaragua",
    "Netherlands" : "Niederlande",
    "Norway" : "Norwegen",
    "Nepal" : "Nepal",
    "Nauru" : "Nauru",
    "Niue" : "Niue",
    "New Zealand" : "Neuseeland",
    "Oman" : "Oman",
    "Panama" : "Panama",
    "Peru" : "Peru",
    "French Polynesia" : "Französisch-Polynesien",
    "Papua New Guinea" : "Papua-Neuguinea",
    "Philippines" : "Philippinen",
    "Pakistan" : "Pakistan",
    "Poland" : "Polen",
    "Saint Pierre and Miquelon" : "Saint-Pierre und Miquelon",
    "Pitcairn" : "Pitcairninseln",
    "Puerto Rico" : "Puerto Rico",
    "Palestine, State of" : "Palästina",
    "Portugal" : "Portugal",
    "Palau" : "Palau",
    "Paraguay" : "Paraguay",
    "Qatar" : "Katar",
    "Réunion" : "Réunion",
    "Romania" : "Rumänien",
    "Serbia" : "Serbien",
    "Russian Federation" : "Russland",
    "Rwanda" : "Ruanda",
    "Saudi Arabia" : "Saudiarabien",
    "Solomon Islands" : "Salomonen",
    "Seychelles" : "Seychellen",
    "Sudan" : "Sudan",
    "Sweden" : "Schweden",
    "Singapore" : "Singapur",
    "Saint Helena, Ascension and Tristan da Cunha" : "St. Helena, Ascension und Tristan da Cunha",
    "Slovenia" : "Slowenien",
    "Svalbard and Jan Mayen" : "Spitzbergen und Jan Mayen",
    "Slovakia" : "Slowakei",
    "Sierra Leone" : "Sierra Leone",
    "San Marino" : "San Marino",
    "Senegal" : "Senegal",
    "Somalia" : "Somalia",
    "Suriname" : "Surinam",
    "South Sudan" : "Südsudan",
    "Sao Tome and Principe" : "São Tomé und Príncipe",
    "El Salvador" : "El Salvador",
    "Sint Maarten (Dutch part)" : "Sint Maarten",
    "Syrian Arab Republic" : "Syrien",
    "Eswatini" : "Eswatini",
    "Turks and Caicos Islands" : "Turks- und Caicosinseln",
    "Chad" : "Tschad",
    "French Southern Territories" : "Französische Süd- und Antarktisgebiete",
    "Togo" : "Togo",
    "Thailand" : "Thailand",
    "Tajikistan" : "Tadschikistan",
    "Tokelau" : "Tokelau",
    "Timor-Leste" : "Osttimor",
    "Turkmenistan" : "Turkmenistan",
    "Tunisia" : "Tunesien",
    "Tonga" : "Tonga",
    "Turkey" : "Türkei",
    "Trinidad and Tobago" : "Trinidad und Tobago",
    "Tuvalu" : "Tuvalu",
    "Taiwan, Province of China" : "Taiwan, Provinz von China",
    "Tanzania, United Republic of" : "Tansania",
    "Ukraine" : "Ukraine",
    "Uganda" : "Uganda",
    "United States Minor Outlying Islands" : "United States Minor Outlying Islands",
    "United States of America" : "Vereinigte Staaten von Amerika",
    "Uruguay" : "Uruguay",
    "Uzbekistan" : "Usbekistan",
    "Holy See" : "Vatikanstadt",
    "Saint Vincent and the Grenadines" : "St. Vincent und die Grenadinen",
    "Venezuela (Bolivarian Republic of)" : "Venezuela",
    "Virgin Islands (British)" : "Jungferninseln (Britisch)",
    "Virgin Islands (U.S.)" : "Jungferninseln (U.S.)",
    "Viet Nam" : "Vietnam",
    "Vanuatu" : "Vanuatu",
    "Wallis and Futuna" : "Wallis und Futuna",
    "Samoa" : "Samoa",
    "Yemen" : "Jemen",
    "Mayotte" : "Mayotte",
    "South Africa" : "Südafrika",
    "Zambia" : "Sambia",
    "Zimbabwe" : "Simbabwe"
},
"nplurals=2; plural=(n != 1);");