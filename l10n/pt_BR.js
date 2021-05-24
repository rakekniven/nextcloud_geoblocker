OC.L10N.register(
    "geoblocker",
    {
    "Update not possible. " : "A atualização não é possível.",
    "Update possible. " : "A atualização é possível.",
    "Update running. " : "Executando atualização.",
    "Update undefined. " : "A atualização está indefinida.",
    "Status of the service cannot be determined." : "O status do serviço não pôde ser determinado.",
    "No database date available." : "Nenhuma data do banco de dados disponível.",
    "Database file location not available!" : "Localização do arquivo do banco de dados não disponível!",
    "Update Status not available!" : "Status da atualização não disponível!",
    "Your attempt to login from country \"%s\" is blocked by the Nextcloud GeoBlocker App. If this is a problem for you, please contact your administrator." : "Sua tentativa de login do país \"%s\" está bloqueada pelo aplicativo Nextcloud GeoBlocker. Se isso for um problema para você, entre em contato com o administrador. ",
    "OK. This service always returns \"%s\" for \"Country not found\"." : "OK. Este serviço sempre retorna \"%s\" para \"País não encontrado\".",
    "OK." : "OK.",
    "ERROR: Service seem to be not installed on the host of the Nextcloud server or not reachable for the web server or is wrongly configured (is the database for IPv4 and IPv6 available?!). Maybe the use of the php function exec() is disabled in the php.ini." : "ERRO: O serviço parece não estar instalado no host do servidor Nextcloud, inacessível para o servidor Web ou incorretamente configurado (o banco de dados para IPv4 e IPv6 está disponível?!). Talvez o uso da função php exec() esteja desabilitado no php.ini.",
    "Date of the database cannot be determined!" : "A data do banco de dados não pôde ser determinada!",
    "local" : "local",
    "default" : "padrão",
    "ERROR: There is an unknown problem with the service." : "ERRO: Há um problema desconhecido com o serviço.",
    "ERROR: Country cannot be found." : "ERRO: o país não foi encontrado.",
    "ERROR: Database is not valid, does not have the correct access rights or is not placed at %s." : "ERRO: O banco de dados não é válido, não possui os direitos de acesso corretos ou não foi colocado em %s.",
    "ERROR: Invalid Argument." : "ERRO: Argumento inválido.",
    "ERROR: \"geoip2.phar\" does not seem to be place correctly or do not have the correct access rights." : "ERRO: \"geoip2.phar\" não parece estar colocado corretamente ou não tem os direitos de acesso corretos.",
    "No entries in the database. Please run update." : "Sem entradas no banco de dados. Rode a atualização.",
    "ERROR:" : "ERRO:",
    "OK" : "OK",
    "Last error message:" : "Última mensagem de erro:",
    "PHP GMP Extension needs to be installed." : "A extensão PHP GMP precisa estar instalada.",
    "The database is not initialized. Please run update." : "O banco de dados não está inicializado. Rode a atualização.",
    "The database is currently initializing. Please wait until update is finished. This may take several minutes." : "O banco de dados está sendo inicializado. Aguarde a atualização terminar. Isso pode levar vários minutos.",
    "The database is corrupted. Please run update again." : "O banco de dados está corrompido. Rode a atualização novamente.",
    "Something is missing." : "Algo está faltando.",
    "No database available!" : "Nenhum banco de dados disponível!",
    "\"allow_url_fopen\" needs to be allowed in php.ini." : "\"allow_url_fopen\" precisa estar permitida em php.ini.",
    "Internet connection needs to be available." : "A conexão com a Internet precisa estar disponível.",
    "Current number of entries:" : "Número atual de entradas:",
    "Update in undefined state. Please complain to the developer." : "Atualização em estado indefinido. Verifique com o desenvolvedor.",
    "GeoBlocker" : "GeoBlocker",
    "Blocks user depending on the estimated country of thier IP address." : "Bloqueia usuários dependendo do país estimado pelo seus endereços IP.",
    "This is a front end to geo localization services, that allows blocking (beta), delaying (beta) and logging of login attempts from specified countries.\n\nCountries can be specified using allowlisting or blocklisting.\n\nCurrently available localization services are:\n- Geoiplookup (local programm on the host)\n- MaxMind GeoLite2 (local database accessed via PHP API)\n- Data from Regional Internet Registries (Nextcloud SQL database build up with data downloaded from the RIRs FTP servers)\n\nFor help how to set up the localization services please have a look at the GitHub repository (homepage on the right side)." : "Este é um primeira informação para serviços de localização geográfica, que permite bloquear (beta), atrasar (beta) e registrar as tentativas de login de países específicos.\n\nOs países podem ser especificados usando listas de permissões ou listas de bloqueio.\n\nOs serviços de localização disponíveis atualmente são:\n- Geoiplookup (programa local no host)\n- MaxMind GeoLite2 (banco de dados local acessado via API PHP)\n- Dados dos Registros Regionais da Internet (banco de dados Nextcloud SQL criado com dados baixados dos servidores FTP dos RIRs)\n\nPara obter ajuda sobre como configurar os serviços de localização, dê uma olhada no repositório GitHub (página inicial no lado direito).",
    "Loading" : "Carregando",
    "This is a front end to geo localization services, that allows blocking (beta), delaying (beta) and logging of login attempts from specified countries. " : "Este é um front-end para serviços de localização geográfica, que permite o bloqueio (atualmente apenas de log!) de tentativas de login de países especificados.",
    "Login attempts from local network IP addresses are not reacted on at all." : "As tentativas de login dos endereços IP da rede local não são bloqueadas (ou registradas).",
    "Wrong Nextcloud configuration (especially in container) can lead to all accesses seem to come from a local network IP address." : "A configuração incorreta do Nextcloud (especialmente em contêiner) pode levar a que todos os acessos pareçam vir de um endereço IP de rede local.",
    "If you are accessing from external network, this should be an external IP address: " : "Se estiver acessando da rede externa, este deve ser um endereço IP externo:",
    "is local." : "é local.",
    "is external." : "é externo.",
    "Determination of the country from IP address is only as good as the chosen service." : "A precisão ao determinar o país a partir do endereço IP depende do serviço escolhido.",
    "For help how to setup the localization services, have a look into the Readme in the" : "Para obter ajuda de como configurar os serviços de localização, consulte o Leia-me no",
    "repository" : "repositório",
    "Service" : "Serviço",
    "Choose the service you want to use to determine the country from the IP Address:" : "Escolha o serviço que deseja usar para determinar o país a partir do endereço IP:",
    "Status of the chosen service: " : "Status do serviço escolhido:",
    "Date of the database: " : "Data do banco de dados:",
    "Configuration of the chosen service: " : "Configuração do serviço escolhido:",
    "Location of the database: " : "Localização do banco de dados:",
    "Update Database" : "Atualizar Banco de Dados",
    "Country Selection" : "Seleção de País",
    "Choose the selection mode" : "Escolher o modo de seleção",
    "No country is blocked but the selected ones (blocklist)" : "Nenhum país está bloqueado, apenas os selecionados (lista de bloqueio)",
    "All countries are blocked but the selected ones (allowlist)" : "Todos os países estão bloqueados, exceto os selecionados (lista de permissões)",
    "Select countries from list" : "Selecionar países da lista",
    "The following countries were selected in the list above: " : "Os seguintes países foram selecionados na lista acima:",
    "Reaction" : "Reação",
    "If a login attempt is detected from the chosen countries, the attempt is logged with the following information" : "Se uma tentativa de login for detectada nos países escolhidos, a tentativa será registrada com a seguinte informação",
    "( be aware of data protection issues depending on your logging strategy)" : "(esteja ciente dos problemas de proteção de dados, dependendo da sua estratégia de registro em log)",
    "with IP Address" : "com Endereço IP",
    "with Country Code" : "com Código de País",
    "with username" : "com nome do usuário",
    "In addition, the login attempt can also be delayed and blocked." : "Além disso, a tentativa de login pode também ser bloqueada",
    "(beta version)" : "(Versão Beta)",
    "Activate delaying of login attempts from IP addresses of the specified countries." : "Bloqueie tentativas de login dos endereços IP dos países especificados.",
    "(30 seconds)" : "(30 segundos)",
    "Activate blocking of login attempts from IP addresses of the specified countries." : "Bloqueie tentativas de login dos endereços IP dos países especificados.",
    "Test" : "Teste",
    "Possibilities to test if the Geoblocker is working as expected:" : "Possibilidades de testar se o Geoblocker está funcionando como esperado:",
    "Next login attempt of user \"%s\" will be simulated to come from the following IP address:" : "No próximo login do usuário \"%s\", será simulado vir do seguinte endereço IP:",
    "COUNTRY NOT FOUND" : "PAÍS NÃO ENCONTRADO",
    "Andorra" : "Andorra",
    "United Arab Emirates" : "Emirados Árabes Unidos",
    "Afghanistan" : "Afeganistão",
    "Antigua and Barbuda" : "Antígua e Barbuda",
    "Anguilla" : "Anguila",
    "Albania" : "Albânia",
    "Armenia" : "Armênia",
    "Angola" : "Angola",
    "Antarctica" : "Antártica",
    "Argentina" : "Argentina",
    "American Samoa" : "Samoa Americana",
    "Austria" : "Áustria",
    "Australia" : "Austrália",
    "Aruba" : "Aruba",
    "Åland Islands" : "Ilhas Aland",
    "Azerbaijan" : "Azerbaijão",
    "Bosnia and Herzegovina" : "Bósnia e Herzegovina",
    "Barbados" : "Barbados",
    "Bangladesh" : "Bangladesh",
    "Belgium" : "Bélgica",
    "Burkina Faso" : "Burkina Faso",
    "Bulgaria" : "Bulgária",
    "Bahrain" : "Bahrain",
    "Burundi" : "Burundi",
    "Benin" : "Benin",
    "Saint Barthélemy" : "São Bartolomeu",
    "Bermuda" : "Bermudas",
    "Brunei Darussalam" : "Brunei Darussalam",
    "Bolivia (Plurinational State of)" : "Bolívia (Estado Plurinacional de)",
    "Bonaire, Sint Eustatius and Saba" : "Bonaire, Santo Eustáquio e Saba",
    "Brazil" : "Brasil",
    "Bahamas" : "Bahamas",
    "Bhutan" : "Butão",
    "Bouvet Island" : "Ilha Bouvet",
    "Botswana" : "Botsuana",
    "Belarus" : "Belarus",
    "Belize" : "Belize",
    "Canada" : "Canadá",
    "Cocos (Keeling) Islands" : "Ilhas Cocos (Keeling)",
    "Congo, Democratic Republic of the" : "Congo, República Democrática do",
    "Central African Republic" : "República Centro-Africana",
    "Congo" : "Congo",
    "Switzerland" : "Suíça",
    "Côte d'Ivoire" : "Costa do Marfim",
    "Cook Islands" : "Ilhas Cook",
    "Chile" : "Chile",
    "Cameroon" : "Camarões",
    "China" : "China",
    "Colombia" : "Colômbia",
    "Costa Rica" : "Costa Rica",
    "Cuba" : "Cuba",
    "Cabo Verde" : "Cabo Verde",
    "Curaçao" : "Curaçao",
    "Christmas Island" : "Ilha do Natal",
    "Cyprus" : "Chipre",
    "Czechia" : "República Checa",
    "Germany" : "Alemanha",
    "Djibouti" : "Djibuti",
    "Denmark" : "Dinamarca",
    "Dominica" : "Dominica",
    "Dominican Republic" : "República Dominicana",
    "Algeria" : "Algéria",
    "Ecuador" : "Equador",
    "Estonia" : "Estônia",
    "Egypt" : "Egito",
    "Western Sahara" : "Saara Ocidental",
    "Eritrea" : "Eritréia",
    "Spain" : "Espanha",
    "Ethiopia" : "Etiópia",
    "Finland" : "Finlândia",
    "Fiji" : "Fiji",
    "Falkland Islands (Malvinas)" : "Ilhas Falkland (Malvinas)",
    "Micronesia (Federated States of)" : "Micronésia (Estados Federados da)",
    "Faroe Islands" : "ilhas Faroé",
    "France" : "França",
    "Gabon" : "Gabão",
    "United Kingdom of Great Britain and Northern Ireland" : "Reino Unido da Grã-Bretanha e Irlanda do Norte",
    "Grenada" : "Granada",
    "Georgia" : "Georgia",
    "French Guiana" : "Guiana Francesa",
    "Guernsey" : "Guernsey",
    "Ghana" : "Gana",
    "Gibraltar" : "Gibraltar",
    "Greenland" : "Groenlândia",
    "Gambia" : "Gâmbia",
    "Guinea" : "Guiné",
    "Guadeloupe" : "Guadalupe",
    "Equatorial Guinea" : "Guiné Equatorial",
    "Greece" : "Grécia",
    "South Georgia and the South Sandwich Islands" : "Geórgia do Sul e Ilhas Sandwich do Sul",
    "Guatemala" : "Guatemala",
    "Guam" : "Guam",
    "Guinea-Bissau" : "Guiné-Bissau",
    "Guyana" : "Guiana",
    "Hong Kong" : "Hong Kong",
    "Heard Island and McDonald Islands" : "Ilha Heard e Ilhas McDonald",
    "Honduras" : "Honduras",
    "Croatia" : "Croácia",
    "Haiti" : "Haiti",
    "Hungary" : "Hungria",
    "Indonesia" : "Indonésia",
    "Ireland" : "Irlanda",
    "Israel" : "Israel",
    "Isle of Man" : "Ilha de Man",
    "India" : "Índia",
    "British Indian Ocean Territory" : "Território Britânico do Oceano Índico",
    "Iraq" : "Iraque",
    "Iran (Islamic Republic of)" : "Irã (Republic Islâmica do)",
    "Iceland" : "Islândia",
    "Italy" : "Itália",
    "Jersey" : "Jersey",
    "Jamaica" : "Jamaica",
    "Jordan" : "Jordânia",
    "Japan" : "Japão",
    "Kenya" : "Quênia",
    "Kyrgyzstan" : "Quirguistão",
    "Cambodia" : "Camboja",
    "Kiribati" : "Kiribati",
    "Comoros" : "Comores",
    "Saint Kitts and Nevis" : "São Cristóvão e Neves",
    "Korea (Democratic People's Republic of)" : "Coreia (República Popular Democrática da)",
    "Korea, Republic of" : "Coreia, República da",
    "Kuwait" : "Kuwait",
    "Cayman Islands" : "Ilhas Cayman",
    "Kazakhstan" : "Cazaquistão",
    "Lao People's Democratic Republic" : "República Popular Democrática do Laos",
    "Lebanon" : "Líbano",
    "Saint Lucia" : "Santa Lúcia",
    "Liechtenstein" : "Liechtenstein",
    "Sri Lanka" : "Sri Lanka",
    "Liberia" : "Libéria",
    "Lesotho" : "Lesoto",
    "Lithuania" : "Lituânia",
    "Luxembourg" : "Luxemburgo",
    "Latvia" : "Letônia",
    "Libya" : "Líbia",
    "Morocco" : "Marrocos",
    "Monaco" : "Mônaco",
    "Moldova, Republic of" : "Moldova, República da",
    "Montenegro" : "Montenegro",
    "Saint Martin (French part)" : "São Martinho (parte Francesa)",
    "Madagascar" : "Madagascar",
    "Marshall Islands" : "Ilhas Marshall",
    "North Macedonia" : "Macedônica do Norte",
    "Mali" : "Mali",
    "Myanmar" : "Myanmar",
    "Mongolia" : "Mongólia",
    "Macao" : "Macau",
    "Northern Mariana Islands" : "Ilhas Marianas do Norte",
    "Martinique" : "Martinica",
    "Mauritania" : "Mauritânia",
    "Montserrat" : "Montserrat",
    "Malta" : "Malta",
    "Mauritius" : "Maurício",
    "Maldives" : "Maldivas",
    "Malawi" : "Malawi",
    "Mexico" : "México",
    "Malaysia" : "Malásia",
    "Mozambique" : "Moçambique",
    "Namibia" : "Namíbia",
    "New Caledonia" : "Nova Caledônia",
    "Niger" : "Nigéria",
    "Norfolk Island" : "Ilha Norfolk",
    "Nigeria" : "Nigéria",
    "Nicaragua" : "Nicarágua",
    "Netherlands" : "Holanda",
    "Norway" : "Noruega",
    "Nepal" : "Nepal",
    "Nauru" : "Nauru",
    "Niue" : "Niuê",
    "New Zealand" : "Nova Zelândia",
    "Oman" : "Omã",
    "Panama" : "Panamá",
    "Peru" : "Peru",
    "French Polynesia" : "Polinésia Francesa",
    "Papua New Guinea" : "Papua Nova Guiné",
    "Philippines" : "Filipinas",
    "Pakistan" : "Paquistão",
    "Poland" : "Polônia",
    "Saint Pierre and Miquelon" : "São Pedro e Miquelão",
    "Pitcairn" : "Pitcairn",
    "Puerto Rico" : "Porto Rico",
    "Palestine, State of" : "Palestina, Estado da",
    "Portugal" : "Portugal",
    "Palau" : "Palau",
    "Paraguay" : "Paraguai",
    "Qatar" : "Catar",
    "Réunion" : "Reunião",
    "Romania" : "Romênia",
    "Serbia" : "Sérvia",
    "Russian Federation" : "Federação Russa",
    "Rwanda" : "Ruanda",
    "Saudi Arabia" : "Arábia Saudita",
    "Solomon Islands" : "Ilhas Salomão",
    "Seychelles" : "Seicheles",
    "Sudan" : "Sudão",
    "Sweden" : "Suécia",
    "Singapore" : "Cingapura",
    "Saint Helena, Ascension and Tristan da Cunha" : "Santa Helena, Ascensão e Tristão da Cunha",
    "Slovenia" : "Eslovênia",
    "Svalbard and Jan Mayen" : "Svalbard e Jan Mayen",
    "Slovakia" : "Eslováquia",
    "Sierra Leone" : "Serra Leoa",
    "San Marino" : "San Marino",
    "Senegal" : "Senegal",
    "Somalia" : "Somália",
    "Suriname" : "Suriname",
    "South Sudan" : "Sudão do Sul",
    "Sao Tome and Principe" : "São Tome e Príncipe",
    "El Salvador" : "El Salvador",
    "Sint Maarten (Dutch part)" : "São Martinho (parte Holandesa)",
    "Syrian Arab Republic" : "República Árabe da Síria",
    "Eswatini" : "Suazilândia",
    "Turks and Caicos Islands" : "Ilhas Turcas e Caicos",
    "Chad" : "Chade",
    "French Southern Territories" : "Territórios Franceses do Sul",
    "Togo" : "Togo",
    "Thailand" : "Tailândia",
    "Tajikistan" : "Tajiquistão",
    "Tokelau" : "Toquelau",
    "Timor-Leste" : "Timor-Leste",
    "Turkmenistan" : "Turcomenistão",
    "Tunisia" : "Tunísia",
    "Tonga" : "Tonganês",
    "Turkey" : "Turquia",
    "Trinidad and Tobago" : "Trinidade e Tobago",
    "Tuvalu" : "Tuvalu",
    "Taiwan, Province of China" : "Taiwan, Província da China",
    "Tanzania, United Republic of" : "Tanzânia, República Unida da",
    "Ukraine" : "Ucrânia",
    "Uganda" : "Uganda",
    "United States Minor Outlying Islands" : "Ilhas Menores Distantes dos Estados Unidos",
    "United States of America" : "Estados Unidos da America",
    "Uruguay" : "Uruguai",
    "Uzbekistan" : "Uzbequistão",
    "Holy See" : "Santa Sé",
    "Saint Vincent and the Grenadines" : "São Vicente e Granadinas",
    "Venezuela (Bolivarian Republic of)" : "Venezuela (República Bolivariana da)",
    "Virgin Islands (British)" : "Ilhas Virgens (Britânicas)",
    "Virgin Islands (U.S.)" : "Ilhas Virgens (U.S.)",
    "Viet Nam" : "Vietnã",
    "Vanuatu" : "Vanuatu",
    "Wallis and Futuna" : "Wallis e Futuna",
    "Samoa" : "Samoa",
    "Yemen" : "Iêmen",
    "Mayotte" : "Maiote",
    "South Africa" : "África do Sul",
    "Zambia" : "Zâmbia",
    "Zimbabwe" : "Zimbábue"
},
"nplurals=2; plural=(n > 1);");
