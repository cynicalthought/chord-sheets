/**
 * Song Database
 * -------------
 * Edit this file to add / remove / reorder songs.
 *
 * Each entry needs:
 *   value   – the option value used in the <select>
 *   label   – the text shown in the dropdown
 *   script  – path to the song’s .js data file (relative to index.html)
 *   dataKey – the global variable name that the song’s .js file defines
 *
 * After editing, just refresh the page. No changes to index.html are required.
 */

const SONGS_DB = {
  greek: [
    {
      category: "Άκης Πάνου",
      songs: [
        {
          value: "tha_kleiso_ta_matia",
          label: "Θα Κλείσω Τα Μάτια - Γρηγόρης Μπιθικώτσης",
          script: "Songs/Akis Panou/Tha Kliso Ta Matia.js",
          dataKey: "thaKleisoTaMatiaData"
        }
      ]
    },
    {
      category: "Αλέκος Χρυσοβέργης",
      songs: [
        {
          value: "enaDakri",
          label: "Ένα Δάκρυ - Κατερίνα Στανίση",
          script: "Songs/Alekos Chrysovergis/Ena Dakri.js",
          dataKey: "enaDakriData"
        },
        {
          value: "o_aetos",
          label: "Ο Αετός - Νότης Σφακιανάκης",
          script: "Songs/Alekos Chrysovergis/O Aetos.js",
          dataKey: "oAetosData"
        },
        {
          value: "iSkies",
          label: "Οι Σκιές - Νότης Σφακιανάκης",
          script: "Songs/Alekos Chrysovergis/I Skies.js",
          dataKey: "iSkiesData"
        },
        {
          value: "somaMou",
          label: "Σώμα Μου - Νότης Σφακιανάκης",
          script: "Songs/Alekos Chrysovergis/Soma Mou.js",
          dataKey: "somaMouData"
        }
      ]
    },
    {
      category: "Αντώνης Βαρδής",
      songs: [
        {
          value: "apopseTheloNaPio",
          label: "Απόψε Θέλω Να Πιω - Χάρις Αλεξίου",
          script: "Songs/Antonis Vardis/Apopse Thelo Na Pio.js",
          dataKey: "apopseTheloNaPioData"
        },
        {
          value: "dio_psemmata",
          label: "Δυο Ψέμματα - Αντώνης Ρέμος",
          script: "Songs/Antonis Vardis/Dio Psemmata.js",
          dataKey: "dioPsemmataData"
        }
      ]
    },
    {
      category: "Απόστολος Καλδάρας",
      songs: [
        {
          value: "nihtoseHorisFeggariData",
          label: "Νύχτωσε Χωρίς Φεγγάρι - Στέλλα Χασκίλ",
          script: "Songs/Apostolos Kaldaras/Nihtose Horis Feggari.js",
          dataKey: "nihtoseHorisFeggariData"
        }
      ]
    },
    {
      category: "Βαγγέλης Βασιλείου",
      songs: [
        {
          value: "treno",
          label: "Τρένο - Άννα Βίσση",
          script: "Songs/Vaggelis Vasiliou/Treno.js",
          dataKey: "trenoData"
        }
      ]
    },
    {
      category: "Βασίλης Γαβριηλίδης",
      songs: [
        {
          value: "kleistaTaStomata",
          label: "Κλειστά Τα Στόματα - Αντώνης Ρέμος",
          script: "Songs/Vasilis Gavriilidis/Kleista Ta Stomata.js",
          dataKey: "kleistaTaStomataData"
        }
      ]
    },
    {
      category: "Βασίλης Δήμας",
      songs: [
        {
          value: "maZWAkomaOlaMouTaThelo",
          label: "Μα Ζω Ακόμα (Όλα Μου Τα Θέλω) - Γιώργος Μαζωνάκης",
          script: "Songs/Vasilis Dimas/maZW Akoma (Ola Mou Ta Thelo).js",
          dataKey: "maZWAkomaOlaMouTaTheloData"
        }
      ]
    },
    {
      category: "Βασίλης Τσιτσάνης",
      songs: [
        {
          value: "san_apokliros_girizo",
          label: "Σαν Απόκληρος Γυρίζω - Σωτηρία Μπέλλου",
          script: "Songs/Vassilis Tsitsanis/San Apokliros Girizo.js",
          dataKey: "sanApoklirosGirizoData"
        },
        {
          value: "sinnefiasmeni_kiriaki",
          label: "Συννεφιασμένη Κυριακή - Πρόδρομος Τσαουσάκης",
          script: "Songs/Vassilis Tsitsanis/Sinnefiasmeni Kiriaki.js",
          dataKey: "sinnefiasmeniKiriakiData"
        },
        {
          value: "ferteMouNaPio",
          label: "Φέρτε Μου Να Πιω - Στέλιος Καζαντζίδης",
          script: "Songs/Vassilis Tsitsanis/Ferte Mou Na Pio.js",
          dataKey: "ferteMouNaPioData"
        }
      ]
    },
    {
      category: "Γιάννης Μαρκόπουλος",
      songs: [
        {
          value: "i_fabrika",
          label: "Η Φάμπρικα - Λάκης Χαλκιάς",
          script: "Songs/Giannis Markopoulos/I Fabrika.js",
          dataKey: "iFabrikaData"
        },
        {
          value: "malamateniaLogia",
          label: "Μαλαματένια Λόγια - Λάκης Χαλκιάς",
          script: "Songs/Giannis Markopoulos/Malamatenia Logia.js",
          dataKey: "malamateniaLogiaData"
        },
        {
          value: "paraponemenaLogia",
          label: "Παραπονεμένα Λόγια - Γιώργος Νταλάρας",
          script: "Songs/Giannis Markopoulos/Paraponemena Logia.js",
          dataKey: "paraponemenaLogiaData"
        }
      ]
    },
    {
      category: "Γιάννης Παπαϊωάννου",
      songs: [
        {
          value: "prin_to_xarama",
          label: "Πριν Το Χάραμα - Οδυσσέας Μοσχονάς",
          script: "Songs/Giannis Papaioannou/Prin To Harama.js",
          dataKey: "prinToXaramaData"
        }
      ]
    },
    {
      category: "Γιάννης Πετρίδης",
      songs: [
        {
          value: "psemata",
          label: "Ψέματα - Κωνσταντίνος Αργυρός",
          script: "Songs/Giannis Petridis/Psemata.js",
          dataKey: "psemataData"
        }
      ]
    },
    {
      category: "Γιάννης Σπανός",
      songs: [
        {
          value: "deSouGyrepsaMachairi",
          label: "Δε Σου Γύρεψα Μαχαίρι - Γιάννης Πουλόπουλος",
          script: "Songs/Giannis Spanos/De Sou Gyrepsa Machairi.js",
          dataKey: "deSouGyrepsaMachairiData"
        },
        {
          value: "esiVarethikesNoris",
          label: "Εσύ Βαρέθηκες Νωρίς - Δημήτρης Μητροπάνος",
          script: "Songs/Giannis Spanos/Esi Varethikes Noris.js",
          dataKey: "esiVarethikesNorisData"
        }
      ]
    },
    {
      category: "Γιώργος Ζαμπέτας",
      songs: [
        {
          value: "me_to_voria",
          label: "Με Το Βοριά - Στέλιος Καζαντζίδης & Μαρινέλλα",
          script: "Songs/Giorgos Zampetas/Me To Voria.js",
          dataKey: "meToVoriaData"
        },
        {
          value: "oPenintaris",
          label: "Ο Πενηντάρης - Γιώργος Ζαμπέτας",
          script: "Songs/Giorgos Zampetas/O Penintaris.js",
          dataKey: "oPenintarisData"
        },
        {
          value: "taDilina",
          label: "Τα Δειλινά - Βίκυ Μοσχολιού",
          script: "Songs/Giorgos Zampetas/Ta Dilina.js",
          dataKey: "taDilinaData"
        },
        {
          value: "to_adiexodo",
          label: "Το Αδιέξοδο - Βίκυ Μοσχολιού",
          script: "Songs/Giorgos Zampetas/To Adiexodo.js",
          dataKey: "toAdiexodoData"
        }
      ]
    },
    {
      category: "Γιώργος Θεοφάνους",
      songs: [
        {
          value: "ehoMiaAgapi",
          label: "Έχω Μια Αγάπη - Πασχάλης Τερζής",
          script: "Songs/Giorgos Theofanous/Eho Mia Agapi.js",
          dataKey: "ehoMiaAgapiData"
        },
        {
          value: "miaKokkiniGrammi",
          label: "Μια Κόκκινη Γραμμή - Νατάσα Θεοδωρίδου",
          script: "Songs/Giorgos Theofanous/Mia Kokkini Grammi.js",
          dataKey: "miaKokkiniGrammiData"
        },
        {
          value: "mirotate",
          label: "Μη Ρωτάτε - Πέγκυ Ζήνα",
          script: "Songs/Giorgos Theofanous/Mi Rotate.js",
          dataKey: "miRotateData"
        },
        {
          value: "rixe_nihta",
          label: "Ρίξε Νύχτα - Νατάσα Θεοδωρίδου",
          script: "Songs/Giorgos Theofanous/Rixe Nihta.js",
          dataKey: "rixeNihtaData"
        },
        {
          value: "skoupidiariko",
          label: "Σκουπιδιάρικο - Νατάσα Θεοδωρίδου",
          script: "Songs/Giorgos Theofanous/Skoupidiariko.js",
          dataKey: "skoupidiarikoData"
        },
        { 
          value: "sta_ipogeia_einai_i_thea",
          label: "Στα Υπόγεια Είναι Η Θέα - Πασχάλης Τερζής",
          script: "Songs/Giorgos Theofanous/Sta Ιpogeia Einai i Thea.js",
          dataKey: "staIpogeiaEinaiITheaData"
        }
      ]
    },
    {
      category: "Γιώργος Μανισαλής",
      songs: [
        {
          value: "istoriaMou",
          label: "Ιστορία Μου - Ρίτα Σακελλαρίου",
          script: "Songs/Giorgos Manisalis/Istoria Mou.js",
          dataKey: "istoriaMouData"
        }
      ]
    },
    {
      category: "Γιώργος Μητσάκης",
      songs: [
        {
          value: "sinnefies",
          label: "Συννεφιές - Λίτσα Διαμάντη",
          script: "Songs/Giorgos Mitsakis/Sinnefies.js",
          dataKey: "sinnefiesData"
        },
        {
          value: "toKapilio",
          label: "Το Καπηλειό - Γιώργος Μητσάκης",
          script: "Songs/Giorgos Mitsakis/To Kapilio.js",
          dataKey: "toKapilioData"
        }
      ]
    },
    {
      category: "Γιώργος Μουκίδης",
      songs: [
        {
          value: "iStellaISmirnia",
          label: "Η Στέλλα Η Σμυρνιά - Νότης Σφακιανάκης",
          script: "Songs/Giorgos Moukidis/I Stella I Smirnia.js",
          dataKey: "iStellaISmirniaData"
        }
      ]
    },
    {
      category: "Γιώργος Σαμπάνης",
      songs: [
        {
         value: "apo_erota",
         label: "Από Έρωτα... - Νίκος Οικονομόπουλος",
         script: "Songs/Giorgos Sabanis/Apo Erota....js",
         dataKey: "apoErotaData"
        },
        {
         value: "dianikterevo",
         label: "Διανυκτερεύω - Γιώργος Μαζωνάκης",
         script: "Songs/Giorgos Sabanis/Dianikterevo.js",
         dataKey: "dianikterevoData"
        },
        {
         value: "ineKatiLaika",
         label: "Είναι Κάτι Λαϊκά - Νίκος Οικονομόπουλος",
         script: "Songs/Giorgos Sabanis/Ine Kati Laika.js",
         dataKey: "ineKatiLaikaData"
        },
        {
          value: "isitirio_ena",
          label: "Εισιτήριο Ένα - Νίκος Οικονομόπουλος",
          script: "Songs/Giorgos Sabanis/Isitirio Ena.js",
          dataKey: "isitirioEnaData"
        },
        {
          value: "ekptotosAggelos",
          label: "Έκπτωτος Άγγελος - Νίκος Οικονομόπουλος",
          script: "Songs/Giorgos Sabanis/Ekptotos Aggelos.js",
          dataKey: "ekptotosAggelosData"
        },
        {
          value: "likena",
          label: "Λύκαινα - Βασίλης Καρράς",
          script: "Songs/Giorgos Sabanis/Likena.js",
          dataKey: "likenaData"
        },
        {
          value: "hartopolemos",
          label: "Χαρτοπόλεμος - Νατάσα Θεοδωρίδου",
          script: "Songs/Giorgos Sabanis/Hartopolemos.js",
          dataKey: "hartopolemosData"
        },
        {
          value: "ores_mikres",
          label: "Ωρές Μικρές - Γιώργος Μαζωνάκης",
          script: "Songs/Giorgos Sabanis/Ores Mikres.js",
          dataKey: "OresMikresData"
        }
      ]
    },
    {
      category: "Γιώργος Χατζηνάσιος",
      songs: [
        {
          value: "giaremGiarem",
          label: "Γιαρέμ-Γιαρέμ - Χριστιάνα",
          script: "Songs/Giorgos Hatzinasios/Giarem Giarem.js",
          dataKey: "giaremGiaremData"
        },
        {
          value: "i_endekati_entoli",
          label: "Η Ενδεκάτη Εντολή - Νάνα Μούσχουρη",
          script: "Songs/Giorgos Hatzinasios/I Endekati Entoli.js",
          dataKey: "iEndekatiEntoliData"
        },
        {
          value: "meLeneGiorgo",
          label: "Με Λένε Γιώργο - Μανώλης Μητσιάς",
          script: "Songs/Giorgos Hatzinasios/Me Lene Giorgo.js",
          dataKey: "meLeneGiorgoData"
        }
      ]
    },
    {
      category: "Δημήτρης Παρασκευόπουλος",
      songs: [
        {
          value: "erotaMou",
          label: "Έρωτα Μου - Νίνο Ξυπολιτάς",
          script: "Songs/Dimitris Paraskevopoulos/Erota Mou.js",
          dataKey: "erotaMouData"
        },
        {
          value: "poutanaStinPsihi",
          label: "Πουτάνα Στην Ψυχή - Νίκος Οικονομόπουλος",
          script: "Songs/Dimitris Paraskevopoulos/Poutana Stin Psihi.js",
          dataKey: "poutanaStinPsihiData"
        }
      ]
    },
    {
      category: "Διονύσης Σαββόπουλος",
      songs: [
        {
          value: "as_kratisoun_oi_horoi",
          label: "Ας Κρατήσουν Οι Χοροί - Διονύσης Σαββόπουλος",
          script: "Songs/Dionysis Savvopoulos/As Kratisoun Oi Horoi.js",
          dataKey: "asKratisounOiHoroiData"
        },
        {
          value: "zeibekiko",
          label: "Ζεϊμπέκικο - Διονύσης Σαββόπουλος",
          script: "Songs/Dionysis Savvopoulos/Zeibekiko.js",
          dataKey: "zeibekikoData"
        },
        {
          value: "tiEpaixaStoLavrio",
          label: "Τι Έπαιξα Στο Λαύριο - Διονύσης Σαββόπουλος",
          script: "Songs/Dionysis Savvopoulos/Ti Epaixa Sto Lavrio.js",
          dataKey: "tiEpaixaStoLavrioData"
        }
      ]
    },
    {
      category: "Διονύσης Σαββόπουλος",
      songs: [
        {
          value: "as_kratisoun_oi_horoi",
          label: "Ας Κρατήσουν Οι Χοροί - Διονύσης Σαββόπουλος",
          script: "Songs/Dionysis Savvopoulos/As Kratisoun Oi Horoi.js",
          dataKey: "asKratisounOiHoroiData"
        },
        {
          value: "zeibekiko",
          label: "Ζεϊμπέκικο - Διονύσης Σαββόπουλος",
          script: "Songs/Dionysis Savvopoulos/Zeibekiko.js",
          dataKey: "zeibekikoData"
        },
        {
          value: "tiEpaixaStoLavrio",
          label: "Τι Έπαιξα Στο Λαύριο - Διονύσης Σαββόπουλος",
          script: "Songs/Dionysis Savvopoulos/Ti Epaixa Sto Lavrio.js",
          dataKey: "tiEpaixaStoLavrioData"
        }
      ]
    },
    {
      category: "Ελένη Βιτάλη",
      songs: [
        {
          value: "enaHimoniatikoProi",
          label: "Ένα Χειμωνιάτικο Πρωί - Ελένη Βιτάλη",
          script: "Songs/Eleni Vitali/Ena Himoniatiko Proi.js",
          dataKey: "enaHimoniatikoProiData"
        }
      ]
    },
    {
      category: "Θανάσης Παπακωνσταντίνου",
      songs: [
        {
          value: "miloGiaSena",
          label: "Μιλώ Για 'σένα - Μελίνα Κανά",
          script: "Songs/Thanasis Papakonstantinou/Milo Gia Sena.js",
          dataKey: "song"
        }
      ]
    },
    {
      category: "Θάνος Μικρούτσικος",
      songs: [
        {
          value: "erotiko",
          label: "Ερωτικό - Μανώλης Μητσιάς",
          script: "Songs/Thanos Mikroutsikos/Erotiko.js",
          dataKey: "erotikoData"
        },
        {
          value: "oTimvorihos",
          label: "Ο Τυμβωρύχος - Δήμητρα Γαλάνη",
          script: "Songs/Thanos Mikroutsikos/O Timvorihos.js",
          dataKey: "oTimvorihosData"
        },
        {
          value: "roza",
          label: "Ρόζα - Δημήτρης Μητροπάνος",
          script: "Songs/Thanos Mikroutsikos/Roza.js",
          dataKey: "rozaData"
        }
      ]
    },
    {
      category: "Θεόδωρος Δερβενιώτης",
      songs: [
        {
          value: "enaSfalmaEkana",
          label: "Ένα Σφάλμα Έκανα - Πόλυ Πάνου",
          script: "Songs/Theodoros Derveniotis/Ena Sfalma Ekana.js",
          dataKey: "enaSfalmaEkanaData"
        },
        {
          value: "pareTaChnariaMou",
          label: "Πάρε Τ’ Αχνάρια Μου - Στέλιος Καζαντζίδης",
          script: "Songs/Theodoros Derveniotis/Pare Ta Chnaria Mou.js",
          dataKey: "pareTaChnariaMouData"
        }
      ]
    },
    {
      category: "Θοδωρής Κοτονιάς",
      songs: [
        {
          value: "taKleidia",
          label: "Τα Κλειδιά - Μακρινά Ξαδέρφια",
          script: "Songs/Thodoris Kotonias/Ta Kleidia.js",
          dataKey: "taKleidiaData"
        }
      ]
    },
    {
      category: "Κώστας Γιαννίδης",
      songs: [
        {
          value: "toTavliTaNeaTisAlexandras",
          label: "Το Τάβλι (Τα Νέα Της Αλεξάνδρας) - Βαγγέλης Περπινιάδης",
          script: "Songs/Kostas Giannidis/To Tavli (Ta Nea Tis Alexandras).js",
          dataKey: "toTavliTaNeaTisAlexandrasData"
        }
      ]
    },
    {
      category: "Κώστας Μηλιωτάκης",
      songs: [
        {
          value: "paralliliAgapi",
          label: "Παράλληλη Αγάπη - Άντζυ Σαμίου",
          script: "Songs/Kostas Miliotakis/Parallili Agapi.js",
          dataKey: "paralliliAgapiData"
        }
      ]
    },
    {
      category: "Κώστας Μουντάκης",
      songs: [
        {
          value: "apohairetismos1968",
          label: "Αποχαιρετισμός - Κώστας Μουντάκης",
          script: "Songs/Kostas Mountakis/Apohairetismos.js",
          dataKey: "apohairetismos1968Data"
        }
      ]
    },
    {
      category: "Κωνσταντίνος Παντζής",
      songs: [
        {
          value: "mouEleipses",
          label: "Μου Έλειψες - Αποστολία Ζώη",
          script: "Songs/Konstantinos Pantzis/Mou Eleipses.js",
          dataKey: "mouEleipsesData"
        }
      ]
    },
    {
      category: "Λευτέρης Κιντάτος",
      songs: [
        {
          value: "athinamou",
          label: "Αθήνα Μου - Κωνσταντίνος Αργυρός",
          script: "Songs/Lefteris Kintatos/Athina Mou.js",
          dataKey: "athinaMouData"
        },
        {
          value: "eimaiEdoGiaSena",
          label: "Είμαι 'δώ Για 'σένα - Θοδωρής Φέρρης",
          script: "Songs/Lefteris Kintatos/Eimai Edo Gia Sena.js",
          dataKey: "eimaiEdoGiaSenaData"
        },
        {
          value: "katamata",
          label: "Κατάματα - Θοδωρής Φέρρης",
          script: "Songs/Lefteris Kintatos/Katamata.js",
          dataKey: "katamataData"
        },
        {
          value: "paraskevi_proi",
          label: "Παρασκευή Πρωί - Κωνσταντίνος Αργυρός",
          script: "Songs/Lefteris Kintatos/Paraskevi Proi.js",
          dataKey: "paraskeviProiData"
        }
      ]
    },
    {
      category: "Λίνος Κοκότος",
      songs: [
        {
          value: "geitonaki_mou",
          label: "Γειτονάκι Μου - Γιάννης Πουλόπουλος",
          script: "Songs/Linos Kokotos/Geitonaki Mou.js",
          dataKey: "geitonakiMouData"
        }
      ]
    },
    {
      category: "Λουκάς Θάνος",
      songs: [
        {
          value: "iBalantaTouKirMentiou",
          label: "Η Μπαλάντα Του Κύρ' Μέντιου - Νίκος Ξυλούρης",
          script: "Songs/Loukas Thanos/I Balanta Tou Kir Mentiou.js",
          dataKey: "iBalantaTouKirMentiouData"
        }
      ]
    },
    {
      category: "Μάνος Λοΐζος",
      songs: [
        {
          value: "de_tha_xanagapiso",
          label: "Δεν Θα Ξαναγαπήσω - Στέλιος Καζαντζίδης",
          script: "Songs/Manos Loizos/De Tha Xanagapiso.js",
          dataKey: "deThaXanagapisoData"
        },
        {
          value: "ehoEnanKafene",
          label: "Έχω Έναν Καφενέ - Γιώργος Νταλάρας",
          script: "Songs/Manos Loizos/Eho Enan Kafene.js",
          dataKey: "ehoEnanKafeneData"
        },
        {
          value: "paramithakiMou",
          label: "Παραμυθάκι Μου - Γιάννης Καλατζής",
          script: "Songs/Manos Loizos/Paramithaki Mou.js",
          dataKey: "paramithakiMouData"
        },
        {
          value: "toZeibekikoTisEvdokias",
          label: "Το Ζεϊμπέκικο Της Ευδοκίας - Ορχήστρα",
          script: "Songs/Manos Loizos/To Zeibekiko Tis Evdokias.js",
          dataKey: "toZeibekikoTisEvdokiasData"
        }
      ]
    },
    {
      category: "Μάνος Χατζιδάκις",
      songs: [
        {
          value: "im_aitos_horis_ftera",
          label: "Είμ' Αητός Χωρίς Φτερά - Διαμαντής Πανάρετος",
          script: "Songs/Manos Hadjidakis/Im_ Aitos Horis Ftera.js",
          dataKey: "imAitosHorisFteraData"
        },
        {
          value: "miliseMou",
          label: "Μίλησέ Μου - Γρηγόρης Μπιθικώτσης",
          script: "Songs/Manos Hadjidakis/Milise Mou.js",
          dataKey: "miliseMouData"
        },
        {
          value: "oKyrAntonis",
          label: "Ο Κύρ’ Αντώνης - Στέλιος Καζαντζίδης",
          script: "Songs/Manos Hadjidakis/O Kyr Antonis.js",
          dataKey: "oKyrAntonisData"
        }
      ]
    },
    {
      category: "Μάριος Τόκας",
      songs: [
        {
          value: "iNihtaMiriziGiasemi",
          label: "Η Νύχτα Μυρίζει Γιασεμί - Θέμης Αδαμαντίδης",
          script: "Songs/Marios Tokas/I Nihta Mirizi Giasemi.js",
          dataKey: "iNihtaMiriziGiasemiData"
        },
        {
          value: "miaStasiEdo",
          label: "Μια Στάση Εδώ - Δημήτρης Μητροπάνος",
          script: "Songs/Marios Tokas/Mia Stasi Edo.js",
          dataKey: "miaStasiEdoData"
        },
        {
          value: "sAnazitoStiSaloniki",
          label: "Σ' Αναζητώ Στη Σαλονίκη - Δημήτρης Μητροπάνος",
          script: "Songs/Marios Tokas/S_ Anazito Sti Saloniki.js",
          dataKey: "sAnazitoStiSalonikiData"
        },
        {
          value: "ta_ladadika",
          label: "Τα Λαδάδικα - Δημήτρης Μητροπάνος",
          script: "Songs/Marios Tokas/Ta Ladadika.js",
          dataKey: "taLadadikaData"
        }
      ]
    },
    {
      category: "Μάρκος Βαμβακάρης",
      songs: [
        {
          value: "mikros_arravoniastika",
          label: "Μικρός Αρραβωνιάστηκα - Μάρκος Βαμβακάρης",
          script: "Songs/Markos Vamvakaris/Mikros Arravoniastika.js",
          dataKey: "mikrosArravoniastikaData"
        },
        {
          value: "oliIRebetesTouDounia",
          label: "Όλοι Οι Ρεμπέτες Του Ντουνιά - Μάρκος Βαμβακάρης",
          script: "Songs/Markos Vamvakaris/Oli I Rebetes Tou Dounia.js",
          dataKey: "oliIRebetesTouDouniaData"
        },
        {
          value: "taMatokladaSouLamboun",
          label: "Τα Ματόκλαδά Σου Λάμπουν - Γρηγόρης Μπιθικώτσης",
          script: "Songs/Markos Vamvakaris/Ta Matoklada Sou Lamboun.js",
          dataKey: "taMatokladaSouLambounData"
        }
      ]
    },
    {
      category: "Μίκης Θεοδωράκης",
      songs: [
        {
          value: "apones_exousies",
          label: "Άπονες Εξουσίες - Στέλιος Καζαντζίδης",
          script: "Songs/Mikis Theodorakis/Apones Exousies.js",
          dataKey: "aponesExousiesData"
        },
        {
          value: "varka_sto_gialo",
          label: "Βάρκα Στο Γιαλό - Αντώνης Κλειδωνιάρης & Γρηγόρης Μπιθικώτσης",
          script: "Songs/Mikis Theodorakis/Varka Sto Gialo.js",
          dataKey: "varkaStoGialoData"
        },
        {
          value: "vraho_vraho_ton_kaimo_mou",
          label: "Βράχο Βράχο Τον Καϋμό Μου - Στέλιος Καζαντζίδης & Μαρινέλλα",
          script: "Songs/Mikis Theodorakis/Vraho Vraho Ton Kaimo Mou.js",
          dataKey: "vrahoVrahoTonKaimoMouData"
        },
        {
          value: "vrehi_sti_ftohogitonia",
          label: "Βρέχει Στη Φτωχογειτονιά - Γρηγόρης Μπιθικώτσης",
          script: "Songs/Mikis Theodorakis/Vrehi Sti Ftohogitonia.js",
          dataKey: "vrehiStiFtohogitoniaData"
        },
        {
          value: "gonia_gonia",
          label: "Γωνιά-Γωνιά - Γρηγόρης Μπιθικώτσης",
          script: "Songs/Mikis Theodorakis/Gonia Gonia.js",
          dataKey: "goniaGoniaData"
        },
        {
          value: "drapetsona",
          label: "Δραπετσώνα - Γρηγόρης Μπιθικώτσης",
          script: "Songs/Mikis Theodorakis/Drapetsona.js",
          dataKey: "drapetsonaData"
        },
        {
          value: "ena_to_helidoni",
          label: "Ένα Το Χελιδόνι - Γρηγόρης Μπιθικώτσης",
          script: "Songs/Mikis Theodorakis/Ena to Helidoni.js",
          dataKey: "enaToHelidoniData"
        },
        {
          value: "kapote_tha_rthoun",
          label: "Κάποτε Θα 'ρθουν - Παύλος Σιδηρόπουλος",
          script: "Songs/Mikis Theodorakis/Kapote Tha _rthoun.js",
          dataKey: "kapoteThaRthounData"
        },
        {
          value: "se_potisa_rodostamo",
          label: "Σε Πότισα Ροδόσταμο - Μαίρη Λίντα",
          script: "Songs/Mikis Theodorakis/Se Potisa Rodostamo.js",
          dataKey: "sePotisaRodostamoData"
        },
        {
          value: "stoPerigialiToKryfo",
          label: "Στο Περιγιάλι Το Κρυφό - Γρηγόρης Μπιθικώτσης",
          script: "Songs/Mikis Theodorakis/Sto Perigiali To Kryfo.js",
          dataKey: "stoPerigialiToKryfoData"
        },
        {
          value: "to_palikari_ehi_kaimo",
          label: "Το Παλληκάρι Έχει Καϋμό - Γιώργος Καπερνάρος",
          script: "Songs/Mikis Theodorakis/To Palikari Ehi Kaimo.js",
          dataKey: "toPalikariEhiKaimoData"
        }
      ]
    },
    {
      category: "Μίλτος Πασχαλίδης",
      songs: [
        {
          value: "apousia",
          label: "Απουσία - Λαυρέντης Μαχαιρίτσας",
          script: "Songs/Miltos Pashalidis/Apousia.js",
          dataKey: "apousiaData"
        },
        {
          value: "kakesSinithies",
          label: "Κακές Συνήθειες - Μίλτος Πασχαλίδη",
          script: "Songs/Miltos Pashalidis/Kakes Sinithies.js",
          dataKey: "kakesSinithiesData"
        },
        {
          value: "kapote",
          label: "Κάποτε - Δημήτρης Μητροπάνος",
          script: "Songs/Miltos Pashalidis/Kapote.js",
          dataKey: "kapoteData"
        },
        {
          value: "pethamenes_kalisperes",
          label: "Πεθαμένες Καλησπέρες - Μίλτος Πασχαλίδης",
          script: "Songs/Miltos Pashalidis/Pethamenes Kalisperes.js",
          dataKey: "pethamenesKalisperesData"
        },
        {
          value: "stiChoraTonAthoon",
          label: "Στη Χώρα Των Αθώων - Μίλτος Πασχαλίδης",
          script: "Songs/Miltos Pashalidis/Sti Chora Ton Athoon.js",
          dataKey: "stiChoraTonAthoonData"
        }
      ]
    },
    {
      category: "Μίμης Πλέσσας",
      songs: [
        {
          value: "ama_deite_to_feggari",
          label: "Άμα Δείτε Το Φεγγάρι - Μαρινέλλα",
          script: "Songs/Mimis Plessas/Ama Deite To Feggari.js",
          dataKey: "amaDeiteToFeggariData"
        },
        {
          value: "anIneIAgapiAmartia",
          label: "Αν Είναι Η Αγάπη Αμαρτία - Τζένη Βάνου",
          script: "Songs/Mimis Plessas/An Ine I Agapi Amartia.js",
          dataKey: "anIneIAgapiAmartiaData"
        },
        {
          value: "apopseAntamosaTonHaro",
          label: "Απόψε Αντάμωσα Τον Χάρο - Σταύρος Πασπαράκης",
          script: "Songs/Mimis Plessas/Apopse Antamosa Ton Haro.js",
          dataKey: "apopseAntamosaTonHaroData"
        },
        {
          value: "vrehi_fotia_sti_strata_mou",
          label: "Βρέχει Φωτιά Στη Στράτα Μου - Στράτος Διονυσίου",
          script: "Songs/Mimis Plessas/Vrehi Fotia Sti Strata Mou.js",
          dataKey: "vrehiFotiaStiStrataMouData"
        },
        {
          value: "thaPioApopseToFengari",
          label: "Θα Πιώ Απόψε Το Φεγγάρι - Γιάννης Πουλόπουλος",
          script: "Songs/Mimis Plessas/Tha Pio Apopse To Fengari.js",
          dataKey: "thaPioApopseToFengariData"
        },
        {
          value: "methis_apopse_to_koritsi_mou",
          label: "Μέθυσ' Απόψε Το Κορίτσι Μου - Γιάννης Πουλόπουλος",
          script: "Songs/Mimis Plessas/Methis_ Apopse To Koritsi Mou.js",
          dataKey: "methisApopseToKoritsiMouData"
        },
        {
          value: "ximeroniKiriaki",
          label: "Ξημερώνει Κυριακή - Γιάννης Πουλόπουλος",
          script: "Songs/Mimis Plessas/Ximeroni Kiriaki.js",
          dataKey: "ximeroniKiriakiData"
        },
        {
          value: "proti_fora",
          label: "Πρώτη Φορά - Ρένα Κουμιώτη",
          script: "Songs/Mimis Plessas/Proti Fora.js",
          dataKey: "protiForaData"
        },
        {
          value: "ti_sou_kana_kai_pineis",
          label: "Τί Σου 'κανα Και Πίνεις; - Πόλυ Πάνου",
          script: "Songs/Mimis Plessas/Ti Sou _Kana Kai Pineis.js",
          dataKey: "tiSouKanaKaiPineisData"
        },
        {
          value: "to_agalma",
          label: "Τό Ἄγαλμα - Γιάννης Πουλόπουλος",
          script: "Songs/Mimis Plessas/To Agalma.js",
          dataKey: "toAgalmaData"
        },
        {
          value: "tou_agoriou_apenanti",
          label: "Του Αγοριού Απέναντι - Μαίρη Χρονοπούλου",
          script: "Songs/Mimis Plessas/Tou Agoriou Apenanti.js",
          dataKey: "touAgoriouApenantiData"
        }
      ]
    },
    {
      category: "Μιχάλης Χατζηγιάννης",
      songs: [
        {
          value: "miMAgapas",
          label: "Μη Μ' Αγαπάς - Βασίλης Καρράς",
          script: "Songs/Michalis Hatzigiannis/Mi M_ Agapas.js",
          dataKey: "miMAgapasData"
        },
        {
          value: "horisAnapnoi",
          label: "Χωρίς Αναπνοή - Μιχάλης Χατζηγιάννης",
          script: "Songs/Michalis Hatzigiannis/Horis Anapnoi.js",
          dataKey: "horisAnapnoiData"
        }
      ]
    },
    {
      category: "Νίκος Γούναρης",
      songs: [
        {
          value: "ena_vradi_pou_vreche",
          label: "Ένα Βράδυ Που 'βρεχε - Νίκος Γούναρης",
          script: "Songs/Nikos Gounaris/Ena Vradi Pou _vrehe.js",
          dataKey: "enaVradiPouVrecheData"
        }
      ]
    },
    {
      category: "Νίκος Καρβέλας",
      songs: [
        {
          value: "methismeni_mou_kardia",
          label: "Μεθυσμένη Μου Καρδιά - Άννα Βίσση",
          script: "Songs/Nikos Karvelas/Methismeni Mou Kardia.js",
          dataKey: "methismeniMouKardiaData"
        }
      ]
    },
    {
      category: "Νίκος Τερζής",
      songs: [
        {
          value: "anikoSeMena",
          label: "Ανήκω Σ' Εμένα - Γιώργος Μαζωνάκης",
          script: "Songs/Nikos Terzis/Aniko Se Mena.js",
          dataKey: "anikoSeMenaData"
        }
      ]
    },
    {
      category: "Νίκος Πορτοκάλογλου",
      songs: [
        {
          value: "deMasSighoro",
          label: "Δεν Μας Συγχωρώ - Νίκος Πορτοκάλογλου",
          script: "Songs/Nikos Portokaloglou/De Mas Sighoro.js",
          dataKey: "deMasSighoroData"
        }
      ]
    },
    {
      category: "Παντελής Παντελίδης",
      songs: [
        {
          value: "LiomaSeGremo",
          label: "Λιώμα Σε Γκρεμό - Παντελής Παντελίδης",
          script: "Songs/Pantelis Pantelidis/Lioma Se Gremo.js",
          dataKey: "liomaSeGremoData"
        },
        {
          value: "paramithiazome",
          label: "Παραμυθιάζομαι - Παντελής Παντελίδης",
          script: "Songs/Pantelis Pantelidis/Paramithiazome.js",
          dataKey: "paramithiazomeData"
        }
      ]
    },
    {
      category: "Παραδοσιακά / Traditional",
      songs: [
        {
          value: "thalassaki_mou",
          label: "Θαλασσάκι Μου - Άννα & Αιμιλία Χατζηδάκη",
          script: "Songs/Traditional/Thalassaki Mou.js",
          dataKey: "thalassakiMouData"
        }
      ]
    },
    {
      category: "Πέτρος Δουρδουμπάκης",
      songs: [
        {
          value: "tifles_elpides",
          label: "Τυφλές Ελπίδες - Μελίνα Κανά",
          script: "Songs/Petros Dourdoubakis/Tifles Elpides.js",
          dataKey: "tiflesElpidesData"
        }
      ]
    },
    {
      category: "Παρθένα Ζεμανίδου",
      songs: [
        {
          value: "epsahna_adika_na_vro",
          label: "Έψαχνα Άδικα Να Βρω - Στέλιος Καζαντζίδης",
          script: "Songs/Parthena Zemanidou/Epsahna Adika Na Vro.js",
          dataKey: "epsahnaAdikaNaVroData"
        }
      ]
    },
    {
      category: "Σοφία Βόσσου",
      songs: [
        {
          value: "tokalopousouthelo",
          label: "Το Καλό Που Σου Θέλω - Γιάννης Πάριος",
          script: "Songs/Sofia Vossou/To Kalo Pou Sou Thelo.js",
          dataKey: "toKaloPouSouTheloData"
        }
      ]
    },
    {
      category: "Σπύρος Περιστέρης",
      songs: [
        {
          value: "toMinoreTisAvgis",
          label: "Το Μινόρε Της Αυγής - Απόστολος Χατζηχρήστος",
          script: "Songs/Spyros Peristeris/To Minore Tis Avgis.js",
          dataKey: "toMinoreTisAvgisData"
        }
      ]
    },
    {
      category: "Σταμάτης Κραουνάκης",
      songs: [
        {
          value: "autiINyhtaMenei",
          label: "Αυτή Η Νύχτα Μένει - Δήμητρα Παπίου",
          script: "Songs/Stamatis Kraounakis/Auti I Nyhta Menei.js",
          dataKey: "autiINyhtaMeneiData"
        }
      ]
    },
    {
      category: "Σταύρος Κουγιουμτζής",
      songs: [
        {
          value: "kapouNihtoni",
          label: "Κάπου Νυχτώνει - Γιώργος Νταλάρας",
          script: "Songs/Stavros Kougioumtzis/Kapou Nihtoni.js",
          dataKey: "kapouNihtoniData"
        },
        {
          value: "miMouThimonisMatiaMou",
          label: "Μη Μου Θυμώνεις Μάτια Μου - Χορωδία των Φίλων της Ελληνικής Μουσικής",
          script: "Songs/Stavros Kougioumtzis/Mi Mou Thimonis Matia Mou.js",
          dataKey: "miMouThimonisMatiaMouData"
        },
        {
          value: "natane_τo_21",
          label: "Να 'τανε Το 21 - Γιώργος Νταλάρας",
          script: "Songs/Stavros Kougioumtzis/Natane To 21.js",
          dataKey: "nataneTo21Data"
        },
        {
          value: "paraponoMou",
          label: "Παράπονό Μου - Δημήτρης Μητροπάνος",
          script: "Songs/Stavros Kougioumtzis/Parapono Mou.js",
          dataKey: "paraponoMouData"
        },
        {
          value: "touKatoKosmouTaPoulia",
          label: "Του Κάτω Κόσμου Τα Πουλιά - Γιώργος Νταλάρας",
          script: "Songs/Stavros Kougioumtzis/Tou Kato Kosmou Ta Poulia.js",
          dataKey: "touKatoKosmouTaPouliaData"
        }
      ]
    },
    {
      category: "Σταύρος Ξαρχάκος",
      songs: [
        {
          value: "apohairetismos1966",
          label: "Αποχαιρετισμός - Βίκυ Μοσχολιού",
          script: "Songs/Stavros Xarchakos/Apohairetismos.js",
          dataKey: "apohairetismos1966Data"
        },
        {
          value: "geiaSouHaraSouVenetia",
          label: "Γειά Σου Χαρά Σου Βενετιά - Νίκος Ξυλούρης",
          script: "Songs/Stavros Xarchakos/Geia Sou Hara Sou Venetia.js",
          dataKey: "geiaSouHaraSouVenetiaData"
        },
        {
          value: "itaneMiaFora",
          label: "Ήτανε Μια Φορά - Νίκος Ξυλούρης",
          script: "Songs/Stavros Xarchakos/Itane Mia Fora.js",
          dataKey: "itaneMiaForaData"
        },
        {
          value: "matiaVourkomena",
          label: "Μάτια Βουρκωμένα - Δημήτρης Παπαμιχαήλ",
          script: "Songs/Stavros Xarchakos/Matia Vourkomena.js",
          dataKey: "matiaVourkomenaData"
        }
      ]
    },
    {
      category: "Στέλιος Μπικάκης",
      songs: [
        {
          value: "genethlia",
          label: "Γενέθλια - Στέλιος Μπικάκης",
          script: "Songs/Stelios Bikakis/Genethlia.js",
          dataKey: "genethliaData"
        }
      ]
    },
    {
      category: "Στέφανος Κορκολής",
      songs: [
        {
          value: "sviseToFeggari",
          label: "Σβήσε Το Φεγγάρι - Δημήτρης Μητροπάνος",
          script: "Songs/Stefanos Korkolis/Svise To Feggari.js",
          dataKey: "sviseToFeggariData"
        }
      ]
    },
    {
      category: "Στρατής Καλογερίδης",
      songs: [
        {
          value: "astraMiMeMalonete",
          label: "Άστρα Μη Με Μαλώνετε - Στρατής Καλογερίδης",
          script: "Songs/Stratis Kalogeridis/Astra Mi Me Malonete.js",
          dataKey: "astraMiMeMaloneteData"
        }
      ]
    },
    {
      category: "Τάκης Μουσαφίρης",
      songs: [
        {
          value: "laikaTragoudiaThaLeoMiaZoi",
          label: "Λαϊκά Τραγούδια Θα Λέω Μια Ζωή - Δημήτρης Μητροπάνος",
          script: "Songs/Takis Mousafiris/Laika Tragoudia Tha Leo Mia Zoi.js",
          dataKey: "laikaTragoudiaThaLeoMiaZoiData"
        },
        {
          value: "o_taxitzis",
          label: "Ο Ταξιτζής - Στράτος Διονυσίου",
          script: "Songs/Takis Mousafiris/O Taxitzis.js",
          dataKey: "oTaxitzisData"
        },
        {
          value: "se_mia_stiva_kalamies",
          label: "Σε Μια Στοίβα Καλαμιές - Δημήτρης Μητροπάνος",
          script: "Songs/Takis Mousafiris/Se Mia Stiva Kalamies.js",
          dataKey: "seMiaStivaKalamiesData"
        }
      ]
    },
    {
      category: "Τάκης Σούκας",
      songs: [
        {
          value: "akouVreFilε",
          label: "Άκου Βρε Φίλε - Στράτος Διονυσίου",
          script: "Songs/Takis Soukas/Akou Vre File.js",
          dataKey: "akouVreFileData"
        },
        {
          value: "miaZoiMesaStousDromous",
          label: "Μια Ζωή Μέσα Στους Δρόμους - Χάρις Αλεξίου",
          script: "Songs/Takis Soukas/Mia Zoi Mesa Stous Dromous.js",
          dataKey: "miaZoiMesaStousDromousData"
        }
      ]
    },
{
      category: "Τόλης Βοσκόπουλος",
      songs: [
        {
          value: "prinHathiToOniroMas",
          label: "Πριν Χαθεί Το Όνειρο Μας - Τόλης Βοσκόπουλος",
          script: "Songs/Tolis Voskopoulos/Prin Hathi To Oniro Mas.js",
          dataKey: "prinHathiToOniroMasData"
        }
      ]
    },
    {
      category: "Φίλιππος Πλιάτσικας",
      songs: [
        {
          value: "den_tha_dakriso_pia_gia_sena",
          label: "Δεν Θα Δακρύσω Πια Για 'σένα - Πυξ Λαξ",
          script: "Songs/Filippos Pliatsikas/Den Tha Dakriso Pia Gia Sena.js",
          dataKey: "denThaDakrisoPiaGiaSenaData"
        }
      ]
    },
    {
      category: "Φοίβος",
      songs: [
        {
          value: "astatos",
          label: "Άστατος - Πασχάλης Τερζής",
          script: "Songs/Phoebus/Astatos.js",
          dataKey: "astatosData"
        },
        {
          value: "girismata",
          label: "Γυρίσματα - Δέσποινα Βανδή",
          script: "Songs/Phoebus/Girismata.js",
          dataKey: "girismataData"
        },
        {
          value: "ores_ores",
          label: "Ώρες Ώρες - Αντύπας",
          script: "Songs/Phoebus/Ores Ores.js",
          dataKey: "oresOresData"
        },
        {
          value: "tesseris",
          label: "Τέσσερις - Γιώργος Μαζωνάκης",
          script: "Songs/Phoebus/Tesseris.js",
          dataKey: "tesserisData"
        }
      ]
    },
    {
      category: "Χάρης Γαλανός",
      songs: [
        {
          value: "kopikaStaDio",
          label: "Κόπηκα Στα Δυο - Νίκος Μακρόπουλος",
          script: "Songs/Haris Galanos/Kopika Sta Dio.js",
          dataKey: "kopikaStaDioData"
        }
      ]
    },
    {
      category: "Χάρης Μαυρομμάτης",
      songs: [
        {
          value: "anemos",
          label: "Άνεμος - Χάρης Μαυρομμάτης",
          script: "Songs/Harry Mavrommatis/Anemos.js",
          dataKey: "anemosData"
        },
        {
          value: "PrinRagisoXana",
          label: "Πριν Ραγίσω Ξανά - Χάρης Μαυρομμάτης",
          script: "Songs/Harry Mavrommatis/Prin Ragiso Xana.js",
          dataKey: "prinRagisoXanaData"
        },
        {
          value: "topalati",
          label: "Το Παλάτι - Χρόνης Χρηματόπουλος",
          script: "Songs/Harry Mavrommatis/To Palati.js",
          dataKey: "toPalatiData"
        },
        {
          value: "hiliogkremismeniPoli",
          label: "Χιλιογκρεμισμένη Πόλη - Κωσταντίνος Ρήγκος",
          script: "Songs/Harry Mavrommatis/Hiliogkremismeni Poli.js",
          dataKey: "hiliogkremismeniPoliData"
        }
      ]
    },
    {
      category: "Χρήστος Λεοντής",
      songs: [
        {
          value: "erotasArchaggelos",
          label: "Έρωτας Αρχάγγελος - Δημήτρης Μητροπάνος",
          script: "Songs/Christos Leontis/Erotas Archaggelos.js",
          dataKey: "erotasArchaggelosData"
        }
      ]
    },
    {
      category: "Χρήστος Νικολόπουλος",
      songs: [
        {
          value: "vradiazei",
          label: "Βραδιάζει - Στέλιος Καζαντζίδης",
          script: "Songs/Christos Nikolopoulos/Vradiazei.js",
          dataKey: "vradiazeiData"
        },
        {
          value: "ziliaMou",
          label: "Ζήλια Μου - Χάρις Αλεξίου",
          script: "Songs/Christos Nikolopoulos/Zilia Mou.js",
          dataKey: "ziliaMouData"
        },
        {
          value: "meSkotoseGiatiTinAgapousa",
          label: "Με Σκότωσε Γιατί Την Αγαπούσα - Στράτος Διονυσίου",
          script: "Songs/Christos Nikolopoulos/Me Skotose Giati Tin Agapousa.js",
          dataKey: "meSkotoseGiatiTinAgapousaData"
        },
        {
          value: "toAgriolouloudo",
          label: "To Αγριολούλουδο - Στέλιος Καζαντζίδης",
          script: "Songs/Christos Nikolopoulos/To Agriolouloudo.js",
          dataKey: "toAgriolouloudoData"
        },
        {
          value: "toraMinKles",
          label: "Τώρα Μην Κλαις - Στέλιος Καζαντζίδης",
          script: "Songs/Christos Nikolopoulos/Tora Min Kles.js",
          dataKey: "toraMinKlesData"
        }
      ]
    },
    {
      category: "Χρήστος Παπαδόπουλος",
      songs: [
        {
          value: "egoGiortazoPantaOtanPonao",
          label: "Εγώ Γιορτάζω Πάντα Όταν Πονάω - Δημήτρης Μητροπάνος",
          script: "Songs/Christos Papadopoulos/Ego Giortazo Panta Otan Ponao.js",
          dataKey: "egoGiortazoPantaOtanPonaoData"
        }
      ]
    },
    {
      category: "Arcade",
      songs: [
        {
          value: "asteromata",
          label: "Αστερομάτα - Κλαυδία Παπαδοπούλου",
          script: "Songs/Arcade/Asteromata.js",
          dataKey: "asteromataData"
        }
      ]
    },
    {
      category: "Energee",
      songs: [
        {
          value: "egoLeoNaPigaino",
          label: "Εγώ Λέω Να Πηγαίνω - Γιάννης Πάριος",
          script: "Songs/Energee/Ego Leo Na Pigaino.js",
          dataKey: "egoLeoNaPigainoData"
        }
      ]
    },
    {
      category: "Kiki Lesendrić",
      songs: [
        {
          value: "toParti",
          label: "Το Πάρτι - Μανώλης Μητσιάς",
          script: "Songs/Kiki Lesendric/To Parti.js",
          dataKey: "toPartiData"
        }
      ]
    },
    {
      category: "Mario Panas",
      songs: [
        {
          value: "anamniseis",
          label: "Αναμνήσεις - Βίκυ Λέανδρος",
          script: "Songs/Mario Panas/Anamniseis.js",
          dataKey: "anamniseisData"
        }
      ]
    },
    {
      category: "Mohamed Abdel Wahab",
      songs: [
        {
          value: "mesa_sto_erimo_spitaki",
          label: "Μέσα Στο Έρημο Σπιτάκι - Στέλιος Καζαντζίδης",
          script: "Songs/Mohamed Abdel Wahab/Mesa Sto Erimo Spitaki.js",
          dataKey: "mesaStoErimoSpitakiData"
        }
      ]
    }
  ],

  english: [
    {
      category: "ABBA",
      songs: [
        {
          value: "sos",
          label: "SOS - ABBA",
          script: "Songs/ABBA/SOS.js",
          dataKey: "sosData"
        }
      ]
    },
    {
      category: "Adele",
      songs: [
        {
          value: "rollingInTheDeep",
          label: "Rolling In The Deep - Adele",
          script: "Songs/Adele/Rolling In The Deep.js",
          dataKey: "rollingInTheDeepData"
        }
      ]
    },
    {
      category: "Bob Dylan",
      songs: [
        {
          value: "blowinInTheWind",
          label: "Blowin' In The Wind - Bob Dylan",
          script: "Songs/Bob Dylan/Blowin_ In The Wind.js",
          dataKey: "blowinInTheWindData"
        },
        {
          value: "theTimesTheyAreAChanging",
          label: "The Times They Are A-Changing - Bob Dylan",
          script: "Songs/Bob Dylan/The Times They Are A-Changing.js",
          dataKey: "theTimesTheyAreAChangingData"
        }
      ]
    },
    {
      category: "Britney Spears",
      songs: [
        {
          value: "everytime",
          label: "Everytime - Britney Spears",
          script: "Songs/Britney Spears/Everytime.js",
          dataKey: "everytimeData"
        }
      ]
    },
    {
      category: "Goldfinger",
      songs: [
        {
          value: "Superman",
          label: "Superman - Goldfinger",
          script: "Songs/Goldfinger/Superman.js",
          dataKey: "supermanData"
        }
      ]
    },
    {
      category: "John Legend",
      songs: [
        {
          value: "all_of_me",
          label: "All Of Me - John Legend",
          script: "Songs/John Legend/All of Me.js",
          dataKey: "allOfMeData"
        }
      ]
    },
    {
      category: "Keren Peles",
      songs: [
        {
          value: "new_day_will_rise",
          label: "New Day Will Rise - Yuval Raphael",
          script: "Songs/Keren Peles/New Day Will Rise.js",
          dataKey: "newDayWillRiseData"
        }
      ]
    },
    {
      category: "Linkin Park",
      songs: [
        {
          value: "breakingTheHabit",
          label: "Breaking The Habit - Linkin Park",
          script: "Songs/Linkin Park/Breaking The Habit.js",
          dataKey: "breakingTheHabitData"
        },
        {
          value: "roads_untraveled",
          label: "Roads Untraveled - Linkin Park",
          script: "Songs/Linkin Park/Roads Untraveled.js",
          dataKey: "roadsUntraveledData"
        },
        {
          value: "whatIveDone",
          label: "What I 've Done - Linkin Park",
          script: "Songs/Linkin Park/What I _ve Done.js",
          dataKey: "whatIveDoneData"
        }
      ]
    },
    {
      category: "Queen",
      songs: [
        {
          value: "dontStopMeNow",
          label: "Don't Stop Me Now - Queen",
          script: "Songs/Queen/Don_t Stop Me Now.js",
          dataKey: "dontStopMeNowData"
        }
      ]
    },
    {
      category: "Roger Whittaker",
      songs: [
        {
          value: "windBeneathMyWings",
          label: "Wind Beneath My Wings - Roger Whittaker",
          script: "Songs/Roger Whittaker/Wind Beneath My Wings.js",
          dataKey: "windBeneathMyWingsData"
        }
      ]
    },
    {
      category: "Simple Plan",
      songs: [
        {
          value: "mychristmaslist",
          label: "My Christmas List - Simple Plan",
          script: "Songs/Simple Plan/My Christmas List.js",
          dataKey: "myChristmasListData"
        },
        {
          value: "thisSongSavedMyLife",
          label: "This Song Saved My Life - Simple Plan",
          script: "Songs/Simple Plan/This Song Saved My Life.js",
          dataKey: "thisSongSavedMyLifeData"
        }
      ]
    },
    {
      category: "Soundtrack",
      songs: [
        {
          value: "go_the_distance",
          label: "Go the Distance - Roger Bart",
          script: "Songs/Soundtrack/Go The Distance.js",
          dataKey: "goTheDistanceData"
        },
        {
          value: "feed_the_birds",
          label: "Feed the Birds - Julie Andrews",
          script: "Songs/Soundtrack/Feed the Birds.js",
          dataKey: "feedTheBirdsData"
        },
        {
          value: "if_I_only_had_a_brain",
          label: "If I Only Had A Brain - Harold Arlen",
          script: "Songs/Soundtrack/If I Only Had A Brain.js",
          dataKey: "ifIOnlyHadABrainData"
        },
        {
          value: "ive_told_evry_little_star",
          label: "I've Told Ev'ry Little Star - Karl Reder",
          script: "Songs/Soundtrack/I_ve Told Ev_ry Little Star.js",
          dataKey: "iveToldEvryLittleStarData"
        },
        {
          value: "pokemon_theme",
          label: "Pokémon Theme - Jason Paige",
          script: "Songs/Soundtrack/Pokemon Theme.js",
          dataKey: "pokemonThemeData"
        }
      ]
    },
    {
      category: "Traditional",
      songs: [
        {
          value: "rising_sun_blues",
          label: "Rising Sun Blues - Clarence \"Tom\" Ashley & Gwen Foster",
          script: "Songs/Traditional/Rising Sun Blues.js",
          dataKey: "risingSunBluesData"
        }
      ]
    }
  ]
};

const EXTRA_SCRIPTS = [
  "Songs/Giorgos Theofanous/Skoupidiariko.js",
  "Songs/Giorgos Zampetas/To Adiexodo.js"
];

function getSongData(value) {
  const allGroups = [...SONGS_DB.greek, ...SONGS_DB.english];
  let foundEntry = null;
  allGroups.forEach(group => {
    const match = group.songs.find(s => s.value === value);
    if (match) foundEntry = match;
  });
  if (!foundEntry) return null;
  try {
    const data = (0, eval)(foundEntry.dataKey);
    return data != null ? data : null;
  } catch (e) {
    return null;
  }
}

function loadAllSongScripts() {
  const paths = new Set();
  SONGS_DB.greek.forEach(group => group.songs.forEach(s => paths.add(s.script)));
  SONGS_DB.english.forEach(group => group.songs.forEach(s => paths.add(s.script)));
  EXTRA_SCRIPTS.forEach(p => paths.add(p));

  const promises = Array.from(paths).map(src => {
    return new Promise(resolve => {
      if (document.querySelector(`script[src="${src}"]`)) {
        resolve();
        return;
      }
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve();
      script.onerror = () => {
        console.warn("Could not load song script:", src);
        resolve();
      };
      document.head.appendChild(script);
    });
  });

  return Promise.all(promises);
}