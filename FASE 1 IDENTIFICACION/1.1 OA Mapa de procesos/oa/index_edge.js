/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'Arial': ''        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "both",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'bg-frame1',
                            display: 'block',
                            type: 'image',
                            rect: ['0px', '0px', '1280px', '600px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"bg-frame1.svg",'0px','0px']
                        },
                        {
                            id: 'bg2',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '0px', '1280px', '600px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"bg2.svg",'0px','0px']
                        },
                        {
                            id: 'bg2-frame',
                            display: 'none',
                            type: 'image',
                            rect: ['239px', '48px', '993px', '542px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"bg2-frame.svg",'0px','0px']
                        },
                        {
                            id: 'logoSENA1BG',
                            type: 'image',
                            rect: ['-203px', '214px', '234px', '126px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"logoSENA1BG.svg",'0px','0px'],
                            transform: [[],['90']]
                        },
                        {
                            id: 'logoSENA1',
                            type: 'image',
                            rect: ['-109px', '239px', '77px', '75px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"logoSENA1.svg",'0px','0px']
                        },
                        {
                            id: 'bg-vectores1',
                            display: 'block',
                            type: 'image',
                            rect: ['718px', '612px', '514px', '450px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bg-vectores1.svg",'0px','0px']
                        },
                        {
                            id: 'bg-vectores1Copy',
                            display: 'block',
                            type: 'image',
                            rect: ['252px', '651px', '514px', '450px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bg-vectores1.svg",'0px','0px'],
                            transform: [[],['180']]
                        },
                        {
                            id: 'circles-loop',
                            symbolName: 'circles-loop',
                            display: 'block',
                            type: 'rect',
                            rect: ['-552px', '-269', '1822', '1456', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'titulo-main',
                            display: 'block',
                            type: 'image',
                            rect: ['538px', '122px', '352px', '352px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"titulo-main.svg",'0px','0px'],
                            transform: [[],['360'],[],['0','0']]
                        },
                        {
                            id: 'p0',
                            display: 'block',
                            type: 'image',
                            rect: ['-395px', '0px', '372px', '600px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"p0.svg",'0px','0px']
                        },
                        {
                            id: 'btn_intro',
                            display: 'block',
                            type: 'image',
                            rect: ['638px', '355px', '152px', '35px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"btn_intro.svg",'0px','0px'],
                            userClass: "btn-intro",
                            transform: [[],[],[],['1.5','1.5']]
                        },
                        {
                            id: 'stitulo',
                            display: 'none',
                            type: 'image',
                            rect: ['-202px', '36px', '158px', '53px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"stitulo.svg",'0px','0px']
                        },
                        {
                            id: 'mm-mc',
                            symbolName: 'mm-mc',
                            display: 'none',
                            type: 'rect',
                            rect: ['-1px', '-355px', '248', '59', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'tm-breadcrumb',
                            symbolName: 'tm-breadcrumb',
                            display: 'none',
                            type: 'rect',
                            rect: ['234px', '-56px', '1007', '40', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'intro-mc',
                            symbolName: 'intro-mc',
                            display: 'none',
                            type: 'rect',
                            rect: ['312px', '652px', '431', '22', 'auto', 'auto'],
                            transform: [[],['360']]
                        },
                        {
                            id: 'funcional-mc',
                            symbolName: 'funcional-mc',
                            display: 'none',
                            type: 'rect',
                            rect: ['1306px', '81px', '431', '64', 'auto', 'auto'],
                            transform: [[],['-360']]
                        },
                        {
                            id: 'mapa-mc',
                            symbolName: 'mapa-mc',
                            display: 'none',
                            type: 'rect',
                            rect: ['312px', '-71px', '430', '28', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'identificar-mc',
                            symbolName: 'identificar-mc',
                            display: 'none',
                            type: 'rect',
                            rect: ['1529px', '80px', '431', '58', 'auto', 'auto']
                        },
                        {
                            id: 'caracterizar-mc',
                            symbolName: 'caracterizar-mc',
                            display: 'none',
                            type: 'rect',
                            rect: ['312px', '669px', '431', '58', 'auto', 'auto'],
                            transform: [[],['360']]
                        },
                        {
                            id: 'elab-mc',
                            symbolName: 'elab-mc',
                            display: 'none',
                            type: 'rect',
                            rect: ['312px', '660px', '431', '64', 'auto', 'auto'],
                            transform: [[],['-360']]
                        },
                        {
                            id: 'opciones-mc',
                            symbolName: 'opciones-mc',
                            type: 'rect',
                            rect: ['1240', '0', '40', '600', 'auto', 'auto']
                        },
                        {
                            id: 'popups-mc',
                            symbolName: 'popups-mc',
                            type: 'rect',
                            rect: ['0', '0', '24', '24', 'auto', 'auto']
                        },
                        {
                            id: 'titulo',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['402', '-90', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"titulo.mp3"],
                            preload: 'auto'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1280px', '600px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 10750,
                    autoPlay: true,
                    labels: {
                        "inicio": 2000,
                        "puntos": 3500,
                        "intro": 5000,
                        "funcional": 6000,
                        "mapa": 7000,
                        "identificar": 8000,
                        "caracterizar": 9000,
                        "elab": 10000
                    },
                    data: [
                        [
                            "eid117",
                            "opacity",
                            3750,
                            0,
                            "linear",
                            "${bg2-frame}",
                            '1',
                            '1'
                        ],
                        [
                            "eid108",
                            "top",
                            1500,
                            500,
                            "linear",
                            "${bg-vectores1Copy}",
                            '628px',
                            '75px'
                        ],
                        [
                            "eid132",
                            "top",
                            2000,
                            250,
                            "linear",
                            "${bg-vectores1Copy}",
                            '75px',
                            '651px'
                        ],
                        [
                            "eid3",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${p0}",
                            'block',
                            'none'
                        ],
                        [
                            "eid37",
                            "display",
                            6893,
                            0,
                            "linear",
                            "${mapa-mc}",
                            'none',
                            'block'
                        ],
                        [
                            "eid38",
                            "display",
                            7802,
                            0,
                            "linear",
                            "${mapa-mc}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2",
                            "display",
                            2750,
                            0,
                            "linear",
                            "${btn_intro}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${bg2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid126",
                            "top",
                            2750,
                            750,
                            "linear",
                            "${tm-breadcrumb}",
                            '-56px',
                            '0px'
                        ],
                        [
                            "eid121",
                            "left",
                            3750,
                            0,
                            "linear",
                            "${bg2-frame}",
                            '239px',
                            '239px'
                        ],
                        [
                            "eid97",
                            "scaleX",
                            0,
                            2000,
                            "linear",
                            "${titulo-main}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1462",
                            "scaleX",
                            2000,
                            1500,
                            "linear",
                            "${titulo-main}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2909",
                            "left",
                            10750,
                            0,
                            "linear",
                            "${elab-mc}",
                            '312px',
                            '312px'
                        ],
                        [
                            "eid111",
                            "top",
                            1500,
                            500,
                            "linear",
                            "${bg-vectores1}",
                            '626px',
                            '75px'
                        ],
                        [
                            "eid131",
                            "top",
                            2000,
                            250,
                            "linear",
                            "${bg-vectores1}",
                            '75px',
                            '612px'
                        ],
                        [
                            "eid9",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${bg-frame1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1886",
                            "opacity",
                            2750,
                            750,
                            "linear",
                            "${bg-frame1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid127",
                            "top",
                            2750,
                            750,
                            "linear",
                            "${mm-mc}",
                            '-355px',
                            '118px'
                        ],
                        [
                            "eid1698",
                            "opacity",
                            1000,
                            1000,
                            "linear",
                            "${btn_intro}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1699",
                            "opacity",
                            2000,
                            750,
                            "linear",
                            "${btn_intro}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2409",
                            "left",
                            8000,
                            750,
                            "linear",
                            "${identificar-mc}",
                            '1529px',
                            '310px'
                        ],
                        [
                            "eid85",
                            "scaleY",
                            2000,
                            0,
                            "linear",
                            "${bg-vectores1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid112",
                            "left",
                            1000,
                            1000,
                            "linear",
                            "${p0}",
                            '-395px',
                            '81px'
                        ],
                        [
                            "eid134",
                            "left",
                            2000,
                            250,
                            "linear",
                            "${p0}",
                            '81px',
                            '78px'
                        ],
                        [
                            "eid2443",
                            "opacity",
                            7000,
                            750,
                            "linear",
                            "${mapa-mc}",
                            '0',
                            '1'
                        ],
                        [
                            "eid98",
                            "scaleY",
                            0,
                            2000,
                            "linear",
                            "${titulo-main}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1463",
                            "scaleY",
                            2000,
                            1500,
                            "linear",
                            "${titulo-main}",
                            '1',
                            '0'
                        ],
                        [
                            "eid8",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${bg-vectores1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid47",
                            "display",
                            2750,
                            0,
                            "linear",
                            "${tm-breadcrumb}",
                            'none',
                            'block'
                        ],
                        [
                            "eid95",
                            "rotateZ",
                            2000,
                            0,
                            "linear",
                            "${bg-vectores1}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid2911",
                            "top",
                            10000,
                            750,
                            "linear",
                            "${elab-mc}",
                            '660px',
                            '81px'
                        ],
                        [
                            "eid1421",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${circles2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid74",
                            "scaleX",
                            2000,
                            0,
                            "linear",
                            "${bg-vectores1Copy}",
                            '1',
                            '1'
                        ],
                        [
                            "eid109",
                            "left",
                            1500,
                            500,
                            "linear",
                            "${bg-vectores1Copy}",
                            '252px',
                            '250px'
                        ],
                        [
                            "eid1696",
                            "scaleX",
                            1000,
                            1000,
                            "linear",
                            "${btn_intro}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid39",
                            "display",
                            7876,
                            0,
                            "linear",
                            "${identificar-mc}",
                            'none',
                            'block'
                        ],
                        [
                            "eid40",
                            "display",
                            8815,
                            0,
                            "linear",
                            "${identificar-mc}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1792",
                            "display",
                            2750,
                            0,
                            "linear",
                            "${stitulo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid120",
                            "left",
                            3500,
                            0,
                            "linear",
                            "${tm-breadcrumb}",
                            '234px',
                            '234px'
                        ],
                        [
                            "eid138",
                            "left",
                            5750,
                            0,
                            "linear",
                            "${intro-mc}",
                            '312px',
                            '312px'
                        ],
                        [
                            "eid94",
                            "rotateZ",
                            2000,
                            0,
                            "linear",
                            "${bg-vectores1Copy}",
                            '180deg',
                            '180deg'
                        ],
                        [
                            "eid51",
                            "display",
                            9892,
                            0,
                            "linear",
                            "${elab-mc}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1460",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${circles-loop}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1456",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${logoSENA1}",
                            '239px',
                            '235px'
                        ],
                        [
                            "eid1457",
                            "top",
                            2000,
                            750,
                            "linear",
                            "${logoSENA1}",
                            '235px',
                            '239px'
                        ],
                        [
                            "eid20",
                            "top",
                            2750,
                            500,
                            "linear",
                            "${logoSENA1}",
                            '239px',
                            '499px'
                        ],
                        [
                            "eid35",
                            "display",
                            5905,
                            0,
                            "linear",
                            "${funcional-mc}",
                            'none',
                            'block'
                        ],
                        [
                            "eid36",
                            "display",
                            6840,
                            0,
                            "linear",
                            "${funcional-mc}",
                            'block',
                            'none'
                        ],
                        [
                            "eid133",
                            "top",
                            2000,
                            1250,
                            "linear",
                            "${p0}",
                            '0px',
                            '615px'
                        ],
                        [
                            "eid7",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${bg-vectores1Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1422",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${circles2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid45",
                            "display",
                            4888,
                            0,
                            "linear",
                            "${intro-mc}",
                            'none',
                            'block'
                        ],
                        [
                            "eid46",
                            "display",
                            5882,
                            0,
                            "linear",
                            "${intro-mc}",
                            'block',
                            'none'
                        ],
                        [
                            "eid110",
                            "left",
                            1500,
                            500,
                            "linear",
                            "${bg-vectores1}",
                            '718px',
                            '716px'
                        ],
                        [
                            "eid2408",
                            "top",
                            8750,
                            0,
                            "linear",
                            "${identificar-mc}",
                            '80px',
                            '80px'
                        ],
                        [
                            "eid1459",
                            "opacity",
                            2000,
                            1000,
                            "linear",
                            "${circles-loop}",
                            '1',
                            '0'
                        ],
                        [
                            "eid4",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${titulo-main}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2840",
                            "left",
                            9000,
                            0,
                            "linear",
                            "${caracterizar-mc}",
                            '312px',
                            '312px'
                        ],
                        [
                            "eid2809",
                            "left",
                            9750,
                            0,
                            "linear",
                            "${caracterizar-mc}",
                            '312px',
                            '312px'
                        ],
                        [
                            "eid153",
                            "left",
                            6000,
                            750,
                            "linear",
                            "${funcional-mc}",
                            '1306px',
                            '312px'
                        ],
                        [
                            "eid48",
                            "display",
                            3750,
                            0,
                            "linear",
                            "${bg2-frame}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2067",
                            "top",
                            2000,
                            750,
                            "linear",
                            "${logoSENA1BG}",
                            '214px',
                            '224px'
                        ],
                        [
                            "eid50",
                            "top",
                            2750,
                            500,
                            "linear",
                            "${logoSENA1BG}",
                            '224px',
                            '474px'
                        ],
                        [
                            "eid84",
                            "scaleY",
                            2000,
                            0,
                            "linear",
                            "${bg-vectores1Copy}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1420",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${circles2}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid41",
                            "display",
                            8891,
                            0,
                            "linear",
                            "${caracterizar-mc}",
                            'none',
                            'block'
                        ],
                        [
                            "eid42",
                            "display",
                            9849,
                            0,
                            "linear",
                            "${caracterizar-mc}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1524",
                            "opacity",
                            2750,
                            750,
                            "linear",
                            "${tm-breadcrumb}",
                            '0',
                            '1'
                        ],
                        [
                            "eid136",
                            "opacity",
                            3500,
                            250,
                            "linear",
                            "${bg2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid75",
                            "scaleX",
                            2000,
                            0,
                            "linear",
                            "${bg-vectores1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid44",
                            "display",
                            2750,
                            0,
                            "linear",
                            "${mm-mc}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1793",
                            "left",
                            2750,
                            750,
                            "linear",
                            "${stitulo}",
                            '-202px',
                            '38px'
                        ],
                        [
                            "eid96",
                            "rotateZ",
                            0,
                            2000,
                            "linear",
                            "${titulo-main}",
                            '360deg',
                            '0deg'
                        ],
                        [
                            "eid1461",
                            "rotateZ",
                            2000,
                            1500,
                            "linear",
                            "${titulo-main}",
                            '0deg',
                            '-360deg'
                        ],
                        [
                            "eid2098",
                            "top",
                            5000,
                            750,
                            "linear",
                            "${intro-mc}",
                            '652px',
                            '117px'
                        ],
                        [
                            "eid1455",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${logoSENA1BG}",
                            '-203px',
                            '-54px'
                        ],
                        [
                            "eid18",
                            "left",
                            2000,
                            750,
                            "linear",
                            "${logoSENA1BG}",
                            '-54px',
                            '0px'
                        ],
                        [
                            "eid2320",
                            "top",
                            7000,
                            750,
                            "linear",
                            "${mapa-mc}",
                            '-71px',
                            '117px'
                        ],
                        [
                            "eid2568",
                            "top",
                            9000,
                            750,
                            "linear",
                            "${caracterizar-mc}",
                            '669px',
                            '81px'
                        ],
                        [
                            "eid26",
                            "left",
                            2750,
                            0,
                            "linear",
                            "${mm-mc}",
                            '-1px',
                            '-1px'
                        ],
                        [
                            "eid17",
                            "rotateZ",
                            2000,
                            750,
                            "linear",
                            "${logoSENA1BG}",
                            '90deg',
                            '0deg'
                        ],
                        [
                            "eid125",
                            "top",
                            3750,
                            0,
                            "linear",
                            "${bg2-frame}",
                            '48px',
                            '48px'
                        ],
                        [
                            "eid1423",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${logoSENA1}",
                            '-109px',
                            '23px'
                        ],
                        [
                            "eid19",
                            "left",
                            2000,
                            750,
                            "linear",
                            "${logoSENA1}",
                            '23px',
                            '78px'
                        ],
                        [
                            "eid1700",
                            "top",
                            2000,
                            750,
                            "linear",
                            "${btn_intro}",
                            '355px',
                            '-65px'
                        ],
                        [
                            "eid1697",
                            "scaleY",
                            1000,
                            1000,
                            "linear",
                            "${btn_intro}",
                            '1.5',
                            '1'
                        ]
                    ]
                }
            },
            "mm-mc": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['259px', '295px', '248px', '59px', 'auto', 'auto'],
                            userClass: 'mm-elab',
                            id: 'mm_elab',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/mm_elab.svg', '0px', '0px']
                        },
                        {
                            rect: ['259px', '236px', '248px', '59px', 'auto', 'auto'],
                            userClass: 'mm-caracterizar',
                            id: 'mm_caracterizar',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/mm_caracterizar.svg', '0px', '0px']
                        },
                        {
                            rect: ['259px', '177px', '248px', '59px', 'auto', 'auto'],
                            userClass: 'mm-identificar',
                            id: 'mm_identificar',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/mm_identificar.svg', '0px', '0px']
                        },
                        {
                            rect: ['259px', '118px', '248px', '59px', 'auto', 'auto'],
                            userClass: 'mm-mapa',
                            id: 'mm_mapa',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/mm_mapa.svg', '0px', '0px']
                        },
                        {
                            rect: ['259px', '59px', '248px', '59px', 'auto', 'auto'],
                            userClass: 'mm-funcional',
                            id: 'mm_funcional',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/mm_funcional.svg', '0px', '0px']
                        },
                        {
                            rect: ['259px', '0px', '248px', '59px', 'auto', 'auto'],
                            userClass: 'mm-intro',
                            id: 'mm_intro',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/mm_intro.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '248px', '59px', 'auto', 'auto'],
                            id: 'mm_intro-a',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/mm_intro-a.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '59px', '248px', '59px', 'auto', 'auto'],
                            id: 'mm_funcional-a',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/mm_funcional-a.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '118px', '248px', '59px', 'auto', 'auto'],
                            id: 'mm_mapa-a',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/mm_mapa-a.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '177px', '248px', '59px', 'auto', 'auto'],
                            id: 'mm_identificar-a',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/mm_identificar-a.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '236px', '248px', '59px', 'auto', 'auto'],
                            id: 'mm_caracterizar-a',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/mm_caracterizar-a.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '295px', '248px', '59px', 'auto', 'auto'],
                            id: 'mm_elab-a',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/mm_elab-a.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '248px', '59px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    labels: {
                        "intro": 1800,
                        "funcional": 2000,
                        "mapa": 2250,
                        "identificar": 2500,
                        "caracterizar": 2750,
                        "elab": 3000
                    },
                    data: [
                        [
                            "eid1576",
                            "opacity",
                            0,
                            300,
                            "linear",
                            "${mm_intro}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1620",
                            "display",
                            2869,
                            0,
                            "linear",
                            "${mm_elab-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1571",
                            "left",
                            1200,
                            300,
                            "linear",
                            "${mm_caracterizar}",
                            '259px',
                            '0px'
                        ],
                        [
                            "eid1575",
                            "opacity",
                            900,
                            300,
                            "linear",
                            "${mm_identificar}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1568",
                            "left",
                            600,
                            300,
                            "linear",
                            "${mm_mapa}",
                            '259px',
                            '0px'
                        ],
                        [
                            "eid1569",
                            "left",
                            900,
                            300,
                            "linear",
                            "${mm_identificar}",
                            '259px',
                            '0px'
                        ],
                        [
                            "eid1570",
                            "left",
                            0,
                            300,
                            "linear",
                            "${mm_intro}",
                            '259px',
                            '0px'
                        ],
                        [
                            "eid1577",
                            "opacity",
                            1200,
                            300,
                            "linear",
                            "${mm_caracterizar}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1618",
                            "display",
                            2632,
                            0,
                            "linear",
                            "${mm_caracterizar-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1619",
                            "display",
                            2869,
                            0,
                            "linear",
                            "${mm_caracterizar-a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1573",
                            "opacity",
                            1500,
                            300,
                            "linear",
                            "${mm_elab}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1614",
                            "display",
                            2147,
                            0,
                            "linear",
                            "${mm_mapa-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1615",
                            "display",
                            2394,
                            0,
                            "linear",
                            "${mm_mapa-a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1572",
                            "left",
                            300,
                            300,
                            "linear",
                            "${mm_funcional}",
                            '259px',
                            '0px'
                        ],
                        [
                            "eid1616",
                            "display",
                            2394,
                            0,
                            "linear",
                            "${mm_identificar-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1617",
                            "display",
                            2632,
                            0,
                            "linear",
                            "${mm_identificar-a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1578",
                            "opacity",
                            300,
                            300,
                            "linear",
                            "${mm_funcional}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1574",
                            "opacity",
                            600,
                            300,
                            "linear",
                            "${mm_mapa}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1567",
                            "left",
                            1500,
                            300,
                            "linear",
                            "${mm_elab}",
                            '259px',
                            '0px'
                        ],
                        [
                            "eid1612",
                            "display",
                            1937,
                            0,
                            "linear",
                            "${mm_funcional-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1613",
                            "display",
                            2147,
                            0,
                            "linear",
                            "${mm_funcional-a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1609",
                            "display",
                            1750,
                            0,
                            "linear",
                            "${mm_intro-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1610",
                            "display",
                            1937,
                            0,
                            "linear",
                            "${mm_intro-a}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "intro-mc": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '431px', '22px', 'auto', 'auto'],
                            id: 'intro-titulo',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/intro-titulo.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '49px', '431px', '349px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​El diagnóstico (del griego diagnostikós, a su vez del prefijo día, \"a través\", y gnosis, \"conocimiento\" o \"apto para conocer\") hace referencia al análisis que se aplica para determinar cualquier situación, su estado actual y cuáles son las tendencias o posibles soluciones si se requieren.&nbsp;</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Determinar el estado actual de la gestión de la información en una organización o en un punto específico de esta, requiere conocer previamente  la forma en que esta organización está estructurada y la forma como funciona, esto con el fin de  tener una visión sistémica y juzgar mejor lo que está sucediendo.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Para lo anterior dos son los enfoques organizacionales que se pueden considerar: enfoque de estructura funcional y enfoque por procesos.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Tomando el enfoque de procesos se debe modelar la organización mediante un Mapa de Procesos que permita ubicar todos los elementos identificados dentro de esta, para  luego caracterizarlos y así determinar su situación actual.​</p>',
                            align: 'justify',
                            type: 'text'
                        },
                        {
                            rect: ['1014px', '-51px', '474px', '511px', 'auto', 'auto'],
                            id: 'p1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/p1.svg', '0px', '0px']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/introduccion.mp3'],
                            id: 'introduccion',
                            rect: ['55px', '503px', '320px', '45px', 'auto', 'auto'],
                            display: 'block',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '431px', '22px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid2100",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${Text}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid2111",
                            "top",
                            0,
                            500,
                            "linear",
                            "${introduccion}",
                            '503px',
                            '415px'
                        ],
                        [
                            "eid2104",
                            "top",
                            750,
                            0,
                            "linear",
                            "${p1}",
                            '-51px',
                            '-51px'
                        ],
                        [
                            "eid2108",
                            "top",
                            750,
                            250,
                            "linear",
                            "${Text}",
                            '576px',
                            '49px'
                        ],
                        [
                            "eid4324",
                            "font-size",
                            1000,
                            0,
                            "linear",
                            "${Text}",
                            '15px',
                            '15px'
                        ],
                        [
                            "eid2106",
                            "left",
                            500,
                            250,
                            "linear",
                            "${p1}",
                            '1014px',
                            '444px'
                        ],
                        [
                            "eid4327",
                            "height",
                            1000,
                            0,
                            "linear",
                            "${Text}",
                            '349px',
                            '349px'
                        ],
                        [
                            "eid2112",
                            "display",
                            0,
                            0,
                            "linear",
                            "${introduccion}",
                            'block',
                            'block'
                        ]
                    ]
                }
            },
            "funcional-mc": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'funcionnal-titulo',
                            rect: ['0px', '0px', '431px', '64px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/funcionnal-titulo.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text2',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['0px', '547px', '431px', '398px', 'auto', 'auto'],
                            display: 'block',
                            align: 'justify',
                            font: ['Arial', [15, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​Dentro de las estructuras organizacionales dos de los enfoques organizacionales que se pueden considerar son: el enfoque de estructura Funcional y el Enfoque de Procesos.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">El enfoque de estructura Funcional es el que reúne, en un departamento, a todos los que se dedican a una actividad o a varias relacionadas, que se denominan funciones. Es el tipo de estructura organizacional que aplica el principio funcional o principio de la especialización de las funciones para cada tarea.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">El Enfoque por Procesos no deja de lado la estructura, sólo que ésta se vuelve más flexible y se adapta a las nuevas circunstancias. La gestión se realiza de forma horizontal, es decir, en un mismo proceso pueden intervenir personas de diferentes departamentos.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p>'
                        },
                        {
                            type: 'image',
                            userClass: 'funcional-h',
                            display: 'block',
                            rect: ['279px', '152px', '140px', '98px', 'auto', 'auto'],
                            id: 'funcionnal-1-btn_horizontal',
                            fill: ['rgba(0,0,0,0)', 'images/funcionnal-1-btn_horizontal.gif', '0px', '0px']
                        },
                        {
                            rect: ['171px', '170px', '90px', '63px', 'auto', 'auto'],
                            id: 'clic-sobre',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/clic-sobre.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'p2',
                            rect: ['997px', '-16px', '452px', '502px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/p2.svg', '0px', '0px']
                        },
                        {
                            type: 'group',
                            id: 'pagination',
                            rect: ['152px', '949px', '126', '29', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'pagination_indicator',
                                rect: ['18px', '0px', '90px', '28px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/pagination_indicator.svg', '0px', '0px']
                            },
                            {
                                rect: ['103px', '1px', '23px', '28px', 'auto', 'auto'],
                                id: 'pagination_fw',
                                userClass: 'fw',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/pagination_fw.svg', '0px', '0px']
                            },
                            {
                                rect: ['0px', '0px', '24px', '28px', 'auto', 'auto'],
                                id: 'pagination_bw',
                                userClass: 'bw',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/pagination_bw.svg', '0px', '0px']
                            },
                            {
                                type: 'text',
                                id: 'Text6',
                                textStyle: ['', '', '', '', 'none'],
                                rect: ['42px', '7px', 'auto', 'auto', 'auto', 'auto'],
                                display: 'block',
                                align: 'justify',
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                                text: '<p style=\"margin: 0px;\">​1 de 2</p>'
                            },
                            {
                                type: 'text',
                                id: 'Text6Copy',
                                textStyle: ['', '', '', '', 'none'],
                                rect: ['42px', '7px', 'auto', 'auto', 'auto', 'auto'],
                                display: 'none',
                                align: 'justify',
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                                text: '<p style=\"margin: 0px;\">2 de 2</p>'
                            }]
                        },
                        {
                            type: 'image',
                            userClass: 'funcional-v',
                            display: 'block',
                            rect: ['15px', '152px', '140px', '98px', 'auto', 'auto'],
                            id: 'funcionnal-1-btn_vertical',
                            fill: ['rgba(0,0,0,0)', 'images/funcionnal-1-btn_vertical.gif', '0px', '0px']
                        },
                        {
                            rect: ['-72px', '-33px', '526px', '541px', 'auto', 'auto'],
                            id: 'funcional-1-popup-horizontal',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/funcional-1-popup-horizontal.svg', '0px', '0px']
                        },
                        {
                            rect: ['-72', '-33', '526px', '541px', 'auto', 'auto'],
                            id: 'funcional-1-popup-vertical',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/funcional-1-popup-vertical.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '101px', '261px', '184px', 'auto', 'auto'],
                            id: 'funcionnal-1-btn_vertical2',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/funcionnal-1-btn_vertical.gif', '0px', '0px']
                        },
                        {
                            rect: ['-4px', '94px', '264px', '185px', 'auto', 'auto'],
                            id: 'funcionnal-1-btn_horizontal2',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/funcionnal-1-btn_horizontal.gif', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text8',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['0px', '80px', '431px', '118px', 'auto', 'auto'],
                            display: 'none',
                            align: 'justify',
                            font: ['Arial', [15, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​Se gestiona, además, a partir de indicadores, de tal modo que se está en sintonía con lo que necesita el cliente, ya sea éste interno o externo.  El proceso agrega valor y transforma. Todos reciben algo y lo transforman para entregárselo a la tarea siguiente. Los procesos consumen recursos, es decir que para poder ejecutar las tareas necesitan insumos, que pueden ser desde datos para generar información hasta la infraestructura necesaria para trabajar.&nbsp;</p>'
                        },
                        {
                            type: 'image',
                            userClass: 'size-opacity',
                            display: 'none',
                            rect: ['20px', '245px', '393px', '97px', 'auto', 'auto'],
                            id: 'funcional-2-popup-btn',
                            fill: ['rgba(0,0,0,0)', 'images/funcional-2-popup-btn.svg', '0px', '0px']
                        },
                        {
                            rect: ['94px', '363px', '244px', '32px', 'auto', 'auto'],
                            id: 'clic-sobre2',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/clic-sobre2.svg', '0px', '0px']
                        },
                        {
                            rect: ['-72px', '239px', '526px', '269px', 'auto', 'auto'],
                            id: 'funcional-2-popup',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/funcional-2-popup.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text9',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['4px', '294px', '420px', '192px', 'auto', 'auto'],
                            display: 'none',
                            align: 'justify',
                            font: ['Arial', [14, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​Porque en la estructura Funcional las áreas o departamentos son relativamente autónomos y poseen un enfoque interno más que externo, lo cual propicia que el departamento realice muy bien su trabajo específico, pero esto no necesariamente significa que los miembros del departamento se percaten de la forma en que sus actividades repercuten en la organización en su conjunto.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Contrario a lo anterior, el Enfoque por Procesos, permite una visión sistémica, que impacta positivamente toda la organización, a la hora de plantear la mejora o desarrollo de un sistema de información como solución a una necesidad.</p>'
                        },
                        {
                            type: 'image',
                            userClass: 'size-opacity',
                            display: 'none',
                            rect: ['415px', '-21px', '31px', '31px', 'auto', 'auto'],
                            id: 'btn-cerrar-popup',
                            fill: ['rgba(0,0,0,0)', 'images/btn-cerrar-popup.svg', '0px', '0px']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/organizacionfuncionalvsprocesos.mp3'],
                            id: 'organizacionfuncionalvsprocesos',
                            rect: ['510px', '10', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '431px', '64px']
                        }
                    }
                },
                timeline: {
                    duration: 1651,
                    autoPlay: true,
                    labels: {
                        "1": 0,
                        "vertical": 500,
                        "horizontal": 750,
                        "2": 1000,
                        "2-popup": 1500
                    },
                    data: [
                        [
                            "eid472",
                            "display",
                            410,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'none',
                            'block'
                        ],
                        [
                            "eid473",
                            "display",
                            899,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'block',
                            'none'
                        ],
                        [
                            "eid474",
                            "display",
                            1424,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2163",
                            "left",
                            0,
                            250,
                            "linear",
                            "${p2}",
                            '997px',
                            '464px'
                        ],
                        [
                            "eid4329",
                            "font-size",
                            899,
                            0,
                            "linear",
                            "${Text8}",
                            '15px',
                            '15px'
                        ],
                        [
                            "eid155",
                            "display",
                            410,
                            0,
                            "linear",
                            "${funcional-1-popup-vertical}",
                            'none',
                            'block'
                        ],
                        [
                            "eid156",
                            "display",
                            666,
                            0,
                            "linear",
                            "${funcional-1-popup-vertical}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2148",
                            "left",
                            250,
                            0,
                            "linear",
                            "${funcionnal-1-btn_vertical}",
                            '15px',
                            '15px'
                        ],
                        [
                            "eid157",
                            "display",
                            666,
                            0,
                            "linear",
                            "${funcional-1-popup-horizontal}",
                            'none',
                            'block'
                        ],
                        [
                            "eid158",
                            "display",
                            899,
                            0,
                            "linear",
                            "${funcional-1-popup-horizontal}",
                            'block',
                            'none'
                        ],
                        [
                            "eid163",
                            "display",
                            1424,
                            0,
                            "linear",
                            "${Text9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid165",
                            "display",
                            1651,
                            0,
                            "linear",
                            "${Text9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2162",
                            "top",
                            0,
                            250,
                            "linear",
                            "${funcionnal-1-btn_horizontal}",
                            '610px',
                            '152px'
                        ],
                        [
                            "eid164",
                            "display",
                            1424,
                            0,
                            "linear",
                            "${funcional-2-popup}",
                            'none',
                            'block'
                        ],
                        [
                            "eid166",
                            "display",
                            1651,
                            0,
                            "linear",
                            "${funcional-2-popup}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4330",
                            "font-size",
                            250,
                            0,
                            "linear",
                            "${Text2}",
                            '15px',
                            '15px'
                        ],
                        [
                            "eid453",
                            "display",
                            0,
                            0,
                            "linear",
                            "${funcional-2-popup-btn}",
                            'block',
                            'none'
                        ],
                        [
                            "eid449",
                            "display",
                            899,
                            0,
                            "linear",
                            "${funcional-2-popup-btn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2159",
                            "top",
                            0,
                            250,
                            "linear",
                            "${clic-sobre}",
                            '630px',
                            '170px'
                        ],
                        [
                            "eid160",
                            "display",
                            899,
                            0,
                            "linear",
                            "${funcionnal-1-btn_vertical}",
                            'block',
                            'none'
                        ],
                        [
                            "eid454",
                            "display",
                            0,
                            0,
                            "linear",
                            "${clic-sobre2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid448",
                            "display",
                            899,
                            0,
                            "linear",
                            "${clic-sobre2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid7676",
                            "top",
                            410,
                            0,
                            "linear",
                            "${funcionnal-1-btn_vertical2}",
                            '101px',
                            '101px'
                        ],
                        [
                            "eid3527",
                            "display",
                            250,
                            0,
                            "linear",
                            "${organizacionfuncionalvsprocesos}",
                            'none',
                            'block'
                        ],
                        [
                            "eid6821",
                            "display",
                            899,
                            0,
                            "linear",
                            "${organizacionfuncionalvsprocesos}",
                            'block',
                            'none'
                        ],
                        [
                            "eid455",
                            "display",
                            899,
                            0,
                            "linear",
                            "${Text6Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid452",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid451",
                            "display",
                            899,
                            0,
                            "linear",
                            "${Text8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4343",
                            "height",
                            250,
                            0,
                            "linear",
                            "${clic-sobre}",
                            '63px',
                            '63px'
                        ],
                        [
                            "eid2156",
                            "top",
                            250,
                            0,
                            "linear",
                            "${p2}",
                            '-16px',
                            '-16px'
                        ],
                        [
                            "eid4344",
                            "width",
                            250,
                            0,
                            "linear",
                            "${clic-sobre}",
                            '90px',
                            '90px'
                        ],
                        [
                            "eid2146",
                            "left",
                            250,
                            0,
                            "linear",
                            "${funcionnal-1-btn_horizontal}",
                            '279px',
                            '279px'
                        ],
                        [
                            "eid477",
                            "top",
                            899,
                            525,
                            "linear",
                            "${btn-cerrar-popup}",
                            '-21px',
                            '250px'
                        ],
                        [
                            "eid3147",
                            "display",
                            410,
                            0,
                            "linear",
                            "${funcionnal-1-btn_vertical2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3148",
                            "display",
                            666,
                            0,
                            "linear",
                            "${funcionnal-1-btn_vertical2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2161",
                            "top",
                            0,
                            250,
                            "linear",
                            "${funcionnal-1-btn_vertical}",
                            '610px',
                            '152px'
                        ],
                        [
                            "eid162",
                            "display",
                            899,
                            0,
                            "linear",
                            "${clic-sobre}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2149",
                            "left",
                            250,
                            0,
                            "linear",
                            "${Text2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid159",
                            "display",
                            899,
                            0,
                            "linear",
                            "${Text2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2160",
                            "top",
                            0,
                            250,
                            "linear",
                            "${pagination}",
                            '949px',
                            '479px'
                        ],
                        [
                            "eid2158",
                            "top",
                            0,
                            250,
                            "linear",
                            "${Text2}",
                            '547px',
                            '77px'
                        ],
                        [
                            "eid2151",
                            "left",
                            250,
                            0,
                            "linear",
                            "${pagination}",
                            '152px',
                            '152px'
                        ],
                        [
                            "eid456",
                            "display",
                            899,
                            0,
                            "linear",
                            "${Text6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4346",
                            "left",
                            250,
                            0,
                            "linear",
                            "${clic-sobre}",
                            '171px',
                            '171px'
                        ],
                        [
                            "eid475",
                            "left",
                            899,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            '415px',
                            '415px'
                        ],
                        [
                            "eid3149",
                            "display",
                            666,
                            0,
                            "linear",
                            "${funcionnal-1-btn_horizontal2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3150",
                            "display",
                            899,
                            0,
                            "linear",
                            "${funcionnal-1-btn_horizontal2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid161",
                            "display",
                            899,
                            0,
                            "linear",
                            "${funcionnal-1-btn_horizontal}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "mapa-mc": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'mapa-titulo',
                            rect: ['0px', '0px', '430px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/mapa-titulo.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['0px', '863px', '430px', '394px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\">​Tomando el enfoque por procesos se debe entonces modelar la organización mediante un Mapa de Procesos que permita ubicar todos los elementos identificados dentro de esta, para  luego caracterizarlos y así determinar su situación actual. La construcción del Mapa de Procesos se encuentra dentro de la Gestión por procesos.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Sin embargo, como notamos en la gráfica anterior, previo a la realización del Mapa de Procesos, estos se deben haber identificado y caracterizado, para lo cual existen diferentes técnicas.</p>',
                            align: 'justify',
                            font: ['Arial', [15, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['1200px', '175px', '430px', '46px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text4',
                            text: '<p style=\"margin: 0px;\">​La gestión de procesos se construye sobre 5 etapas consecutivas:</p>',
                            align: 'justify',
                            font: ['Arial', [15, 'px'], 'rgba(44,104,130,1.00)', '700', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'group',
                            id: 'Group',
                            rect: ['1200px', '232px', '412', '52', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'mapa_seleccion',
                                rect: ['323px', '0px', '89px', '52px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/mapa_seleccion.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'mapa_mapa',
                                rect: ['243px', '0px', '89px', '52px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/mapa_mapa.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'mapa_inventario',
                                rect: ['82px', '0px', '89px', '52px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/mapa_inventario.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'mapa_identificacion',
                                rect: ['0', '0px', '89px', '52px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/mapa_identificacion.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'mapa_clasificacion',
                                rect: ['163px', '0px', '89px', '52px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/mapa_clasificacion.svg', '0px', '0px']
                            }]
                        },
                        {
                            type: 'image',
                            id: 'p12',
                            rect: ['1040px', '-50px', '474px', '511px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/p1.svg', '0px', '0px']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/mapadeprocesos.mp3'],
                            id: 'mapadeprocesos',
                            rect: ['55px', '400', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '430px', '28px']
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: true,
                    data: [
                        [
                            "eid2321",
                            "left",
                            250,
                            0,
                            "linear",
                            "${Text3}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid4437",
                            "font-size",
                            500,
                            0,
                            "linear",
                            "${Text4}",
                            '15px',
                            '15px'
                        ],
                        [
                            "eid2330",
                            "top",
                            500,
                            250,
                            "linear",
                            "${p12}",
                            '-50px',
                            '-51px'
                        ],
                        [
                            "eid2332",
                            "left",
                            250,
                            250,
                            "linear",
                            "${Group}",
                            '1200px',
                            '0px'
                        ],
                        [
                            "eid4446",
                            "top",
                            500,
                            0,
                            "linear",
                            "${Group}",
                            '232px',
                            '232px'
                        ],
                        [
                            "eid4444",
                            "top",
                            500,
                            0,
                            "linear",
                            "${Text4}",
                            '175px',
                            '175px'
                        ],
                        [
                            "eid2329",
                            "left",
                            500,
                            250,
                            "linear",
                            "${p12}",
                            '1040px',
                            '444px'
                        ],
                        [
                            "eid2333",
                            "left",
                            250,
                            250,
                            "linear",
                            "${Text4}",
                            '1200px',
                            '0px'
                        ],
                        [
                            "eid3548",
                            "display",
                            750,
                            0,
                            "linear",
                            "${mapadeprocesos}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4435",
                            "font-size",
                            500,
                            0,
                            "linear",
                            "${Text3}",
                            '15px',
                            '15px'
                        ],
                        [
                            "eid2331",
                            "top",
                            0,
                            250,
                            "linear",
                            "${Text3}",
                            '863px',
                            '51px'
                        ]
                    ]
                }
            },
            "identificar-mc": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'identificar-titulo',
                            rect: ['0px', '0px', '431px', '58px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/identificar-titulo.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'identificar_popup-container',
                            rect: ['-71px', '176px', '526px', '333px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/identificar_popup-container.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '75px', '431px', '88px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(0,0,0,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​Determinar cuáles son los procesos en una organización, e identificarlos, permite dar gestión, administración y control, eficaz y eficiente, sobre la información que fluye a través de ellos, de tal forma que la toma de decisiones tenga un soporte sólido.</p>',
                            id: 'Text5',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'justify',
                            type: 'text'
                        },
                        {
                            type: 'image',
                            id: 'p32',
                            rect: ['466px', '9px', '452px', '500px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/p3.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'identificar-sm',
                            symbolName: 'identificar-sm',
                            rect: ['482', '3', '392', '191', 'auto', 'auto']
                        },
                        {
                            type: 'text',
                            id: 'Text6',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['0px', '331px', '431px', '158px', 'auto', 'auto'],
                            display: 'block',
                            align: 'justify',
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​Un diagrama de bloques es una representación gráfica y abreviada de la relación de causa y efecto entre la entrada y la salida de un sistema. Proporciona un método útil y conveniente para caracterizar las relaciones funcionales entre diversos componentes de un sistema.&nbsp;&nbsp;</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">El interior del rectángulo, que representa el bloque, usualmente contiene la descripción o el nombre del elemento.</p><p style=\"margin: 0px;\">​</p>'
                        },
                        {
                            type: 'text',
                            id: 'Text10',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['0', '205px', 'auto', 'auto', 'auto', 'auto'],
                            display: 'block',
                            align: 'justify',
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(44,104,130,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            text: '<p style=\"margin: 0px;\">​Diagrama de bloques.</p>'
                        },
                        {
                            type: 'text',
                            id: 'Text10Copy',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['0', '205px', 'auto', 'auto', 'auto', 'auto'],
                            display: 'none',
                            align: 'justify',
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(44,104,130,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            text: '<p style=\"margin: 0px;\">​Modelo integrado.</p>'
                        },
                        {
                            type: 'text',
                            id: 'Text11',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['0px', '374px', '431px', '88px', 'auto', 'auto'],
                            display: 'none',
                            align: 'justify',
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(0,0,0,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​El modelo Integrado busca lograr una representación gráfica de la forma como se agrupan y se relacionan las funciones en las diferentes secciones del sistema (áreas, departamentos, etc.), según su naturaleza.</p>'
                        },
                        {
                            type: 'text',
                            id: 'Text10Copy2',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['0', '201px', 'auto', 'auto', 'auto', 'auto'],
                            display: 'none',
                            align: 'justify',
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(44,104,130,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            text: '<p style=\"margin: 0px;\">​Cadena de valor.</p>'
                        },
                        {
                            type: 'text',
                            id: 'Text11Copy',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['0px', '374px', '431px', '113px', 'auto', 'auto'],
                            display: 'none',
                            align: 'justify',
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(0,0,0,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​La cadena de valor es una herramienta de análisis, que facilita la comprensión de algo tan dinámico e interactivo como es la estrategia de una empresa. Es esencialmente una forma de análisis de la actividad empresarial mediante la cual se descompone una empresa en sus partes constitutivas, buscando identificar fuentes de ventaja competitiva en aquellas actividades generadoras de valor.</p>'
                        },
                        {
                            type: 'text',
                            id: 'Text10Copy3',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['0', '195px', 'auto', 'auto', 'auto', 'auto'],
                            display: 'none',
                            align: 'justify',
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(44,104,130,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            text: '<p style=\"margin: 0px;\">​Modelo alemán (Icontec).</p>'
                        },
                        {
                            type: 'text',
                            id: 'Text11Copy2',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['0px', '433px', '431px', '68px', 'auto', 'auto'],
                            display: 'none',
                            align: 'justify',
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(0,0,0,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​Entre otros rasgos este modelo presenta una descomposición de una empresa en sus partes (procesos) constitutivas, agrupándolas en macro procesos denominados Estratégicos, Misionales o de realización y de Apoyo.</p>'
                        },
                        {
                            rect: ['778px', '63px', '96px', '95px', 'auto', 'auto'],
                            id: 'identificar-sm_aleman-a',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/identificar-sm_aleman-a.svg', '0px', '0px']
                        },
                        {
                            rect: ['678px', '3', '96px', '95px', 'auto', 'auto'],
                            id: 'identificar-sm_cadena-a',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/identificar-sm_cadena-a.svg', '0px', '0px']
                        },
                        {
                            rect: ['482px', '99px', '96px', '95px', 'auto', 'auto'],
                            id: 'identificar-sm_bloques-a',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/identificar-sm_bloques-a.svg', '0px', '0px']
                        },
                        {
                            rect: ['558px', '3px', '96px', '95px', 'auto', 'auto'],
                            id: 'identificar-sm_integrado-a',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/identificar-sm_integrado-a.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'clic-sobre3',
                            rect: ['552px', '227px', '126px', '32px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/clic-sobre3.svg', '0px', '0px']
                        },
                        /*{
                            rect: ['569px', '118px', '221px', '36px', 'auto', 'auto'],
                            id: 'identificar-mencion',
                            transform: [[], [], [], ['0.8', '0.8']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/identificar-mencion.svg', '0px', '0px']
                        },*/
                        {
                            rect: ['14', '243', '381', '59', 'auto', 'auto'],
                            id: 'bloques-smc',
                            symbolName: 'bloques-smc',
                            type: 'rect',
                            display: 'block'
                        },
                        {
                            rect: ['0', '241', '383', '115', 'auto', 'auto'],
                            id: 'integrado-smc',
                            symbolName: 'integrado-smc',
                            type: 'rect',
                            display: 'none'
                        },
                        {
                            rect: ['0', '225', '411', '148', 'auto', 'auto'],
                            id: 'cadena-smc',
                            symbolName: 'cadena-smc',
                            type: 'rect',
                            display: 'none'
                        },
                        {
                            rect: ['36', '222', '327', '199', 'auto', 'auto'],
                            id: 'aleman-smc',
                            symbolName: 'aleman-smc',
                            type: 'rect',
                            display: 'none'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '431px', '58px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    labels: {
                        "bloques": 250,
                        "integrado": 750,
                        "cadena": 1250,
                        "aleman": 1750
                    },
                    data: [
                        [
                            "eid3370",
                            "display",
                            1657,
                            0,
                            "linear",
                            "${aleman-smc}",
                            'none',
                            'block'
                        ],
                        [
                            "eid229",
                            "display",
                            1657,
                            0,
                            "linear",
                            "${identificar-sm_aleman-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid189",
                            "display",
                            679,
                            0,
                            "linear",
                            "${Text10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid195",
                            "display",
                            679,
                            0,
                            "linear",
                            "${Text10Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid206",
                            "display",
                            1186,
                            0,
                            "linear",
                            "${Text10Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid231",
                            "display",
                            1186,
                            0,
                            "linear",
                            "${identificar-sm_cadena-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid230",
                            "display",
                            1657,
                            0,
                            "linear",
                            "${identificar-sm_cadena-a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid211",
                            "display",
                            1186,
                            0,
                            "linear",
                            "${Text10Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid214",
                            "display",
                            1657,
                            0,
                            "linear",
                            "${Text10Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid198",
                            "display",
                            679,
                            0,
                            "linear",
                            "${Text11}",
                            'none',
                            'block'
                        ],
                        [
                            "eid205",
                            "display",
                            1186,
                            0,
                            "linear",
                            "${Text11}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4895",
                            "top",
                            1338,
                            0,
                            "linear",
                            "${Text11Copy}",
                            '374px',
                            '374px'
                        ],
                        [
                            "eid233",
                            "display",
                            679,
                            0,
                            "linear",
                            "${identificar-sm_integrado-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid232",
                            "display",
                            1186,
                            0,
                            "linear",
                            "${identificar-sm_integrado-a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4472",
                            "font-size",
                            1186,
                            0,
                            "linear",
                            "${Text11Copy}",
                            '15px',
                            '15px'
                        ],
                        [
                            "eid4470",
                            "font-size",
                            679,
                            0,
                            "linear",
                            "${Text11}",
                            '15px',
                            '15px'
                        ],
                        [
                            "eid234",
                            "display",
                            679,
                            0,
                            "linear",
                            "${identificar-sm_bloques-a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4467",
                            "font-size",
                            0,
                            0,
                            "linear",
                            "${Text6}",
                            '15px',
                            '15px'
                        ],
                        [
                            "eid3589",
                            "display",
                            250,
                            0,
                            "linear",
                            "${bloques-smc}",
                            'block',
                            'block'
                        ],
                        [
                            "eid3311",
                            "display",
                            679,
                            0,
                            "linear",
                            "${bloques-smc}",
                            'block',
                            'none'
                        ],
                        [
                            "eid226",
                            "display",
                            1657,
                            0,
                            "linear",
                            "${Text10Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid212",
                            "display",
                            1186,
                            0,
                            "linear",
                            "${Text11Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid215",
                            "display",
                            1657,
                            0,
                            "linear",
                            "${Text11Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4897",
                            "top",
                            1338,
                            0,
                            "linear",
                            "${Text10Copy2}",
                            '201px',
                            '201px'
                        ],
                        [
                            "eid194",
                            "display",
                            679,
                            0,
                            "linear",
                            "${Text6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid228",
                            "display",
                            1657,
                            0,
                            "linear",
                            "${Text11Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid209",
                            "height",
                            1500,
                            0,
                            "linear",
                            "${Text11Copy}",
                            '113px',
                            '113px'
                        ],
                        [
                            "eid3340",
                            "display",
                            679,
                            0,
                            "linear",
                            "${integrado-smc}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3341",
                            "display",
                            1186,
                            0,
                            "linear",
                            "${integrado-smc}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4473",
                            "font-size",
                            1657,
                            0,
                            "linear",
                            "${Text11Copy2}",
                            '15px',
                            '15px'
                        ],
                        [
                            "eid3342",
                            "display",
                            1186,
                            0,
                            "linear",
                            "${cadena-smc}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3343",
                            "display",
                            1657,
                            0,
                            "linear",
                            "${cadena-smc}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "identificar-sm": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'identificar-sm_aleman',
                            rect: ['296px', '60px', '96px', '95px', 'auto', 'auto'],
                            userClass: 'sm-aleman',
                            fill: ['rgba(0,0,0,0)', 'images/identificar-sm_aleman.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'identificar-sm_bloques',
                            rect: ['0px', '96px', '96px', '95px', 'auto', 'auto'],
                            userClass: 'sm-bloque',
                            fill: ['rgba(0,0,0,0)', 'images/identificar-sm_bloques.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'identificar-sm_cadena',
                            rect: ['196px', '0px', '96px', '95px', 'auto', 'auto'],
                            userClass: 'sm-cadena',
                            fill: ['rgba(0,0,0,0)', 'images/identificar-sm_cadena.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'identificar-sm_integrado',
                            rect: ['76px', '0px', '96px', '95px', 'auto', 'auto'],
                            userClass: 'sm-integrado',
                            fill: ['rgba(0,0,0,0)', 'images/identificar-sm_integrado.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '392px', '191px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "caracterizar-mc": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'caracterizar-titulo',
                            type: 'image',
                            rect: ['0px', '0px', '431px', '58px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/caracterizar-titulo.svg', '0px', '0px']
                        },
                        {
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['0px', '377px', '431px', '46px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'justify',
                            id: 'Text7',
                            text: '<p style=\"margin: 0px;\">​El siguiente cuadro resume parte de la información que se debe suministrar en la caracterización de un proceso:</p>',
                            display: 'block',
                            type: 'text'
                        },
                        {
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['0', '107px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(44,104,130,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'justify',
                            id: 'Text12',
                            text: '<p style=\"margin: 0px;\">​Caracterizar un proceso es identificar...</p>',
                            display: 'block',
                            type: 'text'
                        },
                        {
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['0', '75px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(0,0,0,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'justify',
                            id: 'Text12Copy',
                            text: '<p style=\"margin: 0px;\">​¿Qué es caracterizar un proceso?</p>',
                            display: 'block',
                            type: 'text'
                        },
                        {
                            id: 'p4',
                            type: 'image',
                            rect: ['399px', '-65px', '528px', '586px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/p4.svg', '0px', '0px']
                        },
                        {
                            rect: ['-1', '85px', '432', '207', 'auto', 'auto'],
                            id: 'Group',
                            display: 'none',
                            type: 'group',
                            c: [
                            {
                                textStyle: ['', '', '', '', 'none'],
                                rect: ['1px', '0px', '431px', '58px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(0,0,0,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                                align: 'justify',
                                id: 'Text13',
                                text: '<p style=\"margin: 0px;\">​Una vez identificados los procesos se debe caracterizar, es decir  se pasa a describir sus rasgos o características, esto se logra a<span style=\"font-size: 15px;\">​</span> través de alguna o varias de diferentes técnicas.</p>',
                                display: 'none',
                                type: 'text'
                            },
                            {
                                rect: ['1px', '69px', '150px', '51px', 'auto', 'auto'],
                                userClass: 'size-opacity',
                                id: 'caracterizar-3-sm_ficha',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/caracterizar-3-sm_ficha.svg', '0px', '0px']
                            },
                            {
                                rect: ['136px', '69px', '150px', '51px', 'auto', 'auto'],
                                userClass: 'size-opacity',
                                id: 'caracterizar-3-sm_flujograma',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/caracterizar-3-sm_flujograma.svg', '0px', '0px']
                            },
                            {
                                rect: ['135px', '125px', '150px', '51px', 'auto', 'auto'],
                                userClass: 'size-opacity',
                                id: 'caracterizar-3-sm_modeloa',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/caracterizar-3-sm_modeloa.svg', '0px', '0px']
                            },
                            {
                                rect: ['0px', '125px', '150px', '51px', 'auto', 'auto'],
                                userClass: 'size-opacity',
                                id: 'caracterizar-3-sm_modeloc',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/caracterizar-3-sm_modeloc.svg', '0px', '0px']
                            },
                            {
                                rect: ['271px', '69px', '150px', '51px', 'auto', 'auto'],
                                userClass: 'size-opacity',
                                id: 'caracterizar-3-sm_modelop',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/caracterizar-3-sm_modelop.svg', '0px', '0px']
                            },
                            {
                                rect: ['270px', '125px', '150px', '51px', 'auto', 'auto'],
                                userClass: 'size-opacity',
                                id: 'caracterizar-3-sm_modelos',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/caracterizar-3-sm_modelos.svg', '0px', '0px']
                            },
                            {
                                rect: ['88px', '186px', '244px', '32px', 'auto', 'auto'],
                                id: 'clic-sobre22',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/clic-sobre2.svg', '0px', '0px']
                            }]
                        },
                        {
                            id: 'pagination',
                            type: 'group',
                            rect: ['152', '479', '126', '29', 'auto', 'auto'],
                            c: [
                            {
                                id: 'pagination_indicator',
                                type: 'image',
                                rect: ['18px', '0px', '90px', '28px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/pagination_indicator.svg', '0px', '0px']
                            },
                            {
                                rect: ['103px', '1px', '23px', '28px', 'auto', 'auto'],
                                id: 'pagination_fw',
                                userClass: 'fw',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/pagination_fw.svg', '0px', '0px']
                            },
                            {
                                rect: ['0px', '0px', '24px', '28px', 'auto', 'auto'],
                                id: 'pagination_bw',
                                userClass: 'bw',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/pagination_bw.svg', '0px', '0px']
                            },
                            {
                                textStyle: ['', '', '', '', 'none'],
                                rect: ['42px', '7px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                                align: 'justify',
                                id: 'Text6Copy3',
                                text: '<p style=\"margin: 0px;\">​1 de 3</p>',
                                display: 'block',
                                type: 'text'
                            },
                            {
                                textStyle: ['', '', '', '', 'none'],
                                rect: ['42px', '7px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                                align: 'justify',
                                id: 'Text6Copy4',
                                text: '<p style=\"margin: 0px;\">​2 de 3</p>',
                                display: 'none',
                                type: 'text'
                            },
                            {
                                textStyle: ['', '', '', '', 'none'],
                                rect: ['42px', '7px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                                align: 'justify',
                                id: 'Text6Copy2',
                                text: '<p style=\"margin: 0px;\">3 de 3</p>',
                                display: 'none',
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['-73px', '152px', '527px', '358px', 'auto', 'auto'],
                            id: 'caracterizar-popup-container',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/caracterizar-popup-container.svg', '0px', '0px']
                        },
                        {
                            rect: ['-1', '170', '433', '316', 'auto', 'auto'],
                            userClass: '',
                            id: 'ficha-de-procesos',
                            display: 'none',
                            cursor: 'pointer',
                            type: 'group',
                            c: [
                            {
                                id: 'caracterizar-popup-3-ficha2',
                                type: 'image',
                                rect: ['34px', '31px', '298px', '182px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/caracterizar-popup-3-ficha.svg', '0px', '0px']
                            },
                            {
                                rect: ['1px', '265px', '432px', '51px', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(0,0,0,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                                id: 'Text15',
                                text: '<p style=\"margin: 0px;\">​Modelos normalizados de fichas, que incluyen información relativa a los procesos. De este modo <span style=\"font-size: 15px;\">​</span>se intenta dar una homogeneidad a los documentos de toda la organización.</p><p style=\"margin: 0px;\">​</p>',
                                align: 'justify',
                                type: 'text'
                            },
                            {
                                rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(44,104,130,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                                id: 'Text14',
                                text: '<p style=\"margin: 0px;\">​Ficha de procesos.</p>',
                                align: 'justify',
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['0', '173', '432', '320', 'auto', 'auto'],
                            id: 'flujograma-integrado',
                            display: 'none',
                            type: 'group',
                            c: [
                            {
                                rect: ['33px', '24px', '323px', '203px', 'auto', 'auto'],
                                userClass: '',
                                id: 'caracterizar-popup-3-flujograma',
                                type: 'image',
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/caracterizar-popup-3-flujograma.svg', '0px', '0px']
                            },
                            {
                                rect: ['0px', '272px', '432px', '48px', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(0,0,0,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                                id: 'Text17',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 15px;\">​</span>Este tipo de flujograma presenta de forma gráfica el modelo del procedimiento, adicionando,  a cada paso de la secuencia, información relevante como el responsable, la descripción, etc.</p><p style=\"margin: 0px;\">​</p>',
                                align: 'justify',
                                type: 'text'
                            },
                            {
                                rect: ['0', '0px', 'auto', 'auto', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(44,104,130,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                                id: 'Text16',
                                text: '<p style=\"margin: 0px;\">​Flujograma integrado.</p>',
                                align: 'justify',
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['-1', '171', '420', '325', 'auto', 'auto'],
                            id: 'modelop',
                            display: 'none',
                            type: 'group',
                            c: [
                            {
                                rect: ['41px', '29px', '313px', '198px', 'auto', 'auto'],
                                userClass: '',
                                id: 'caracterizar-popup-3-modelop',
                                type: 'image',
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/caracterizar-popup-3-modelop.svg', '0px', '0px']
                            },
                            {
                                rect: ['1px', '261px', '419px', '64px', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                id: 'Text19',
                                text: '<p style=\"margin: 0px;\"><span style=\"font-size: 15px;\">​</span>El modelo de procesos en su representación sencilla muestra una descripción de los elementos básicos de un proceso como son: insumo (entrada), Proveedor, Actividad (procedimiento), salida, Cliente.​</p>',
                                align: 'justify',
                                type: 'text'
                            },
                            {
                                rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(44,104,130,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                                id: 'Text18',
                                text: '<p style=\"margin: 0px;\">​Modelo de procesos.</p>',
                                align: 'justify',
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['0', '170', '432', '310', 'auto', 'auto'],
                            id: 'modeloc',
                            display: 'none',
                            type: 'group',
                            c: [
                            {
                                rect: ['33px', '26px', '323px', '183px', 'auto', 'auto'],
                                userClass: '',
                                id: 'caracterizar-popup-3-modeloc',
                                type: 'image',
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/caracterizar-popup-3-modeloc.svg', '0px', '0px']
                            },
                            {
                                rect: ['1px', '259px', '431px', '51px', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(0,0,0,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                                id: 'Text21',
                                text: '<p style=\"margin: 0px;\">​El modelo crosby agrega información adicional sobre la gestión y control del proceso.</p>',
                                align: 'justify',
                                type: 'text'
                            },
                            {
                                rect: ['0', '0px', 'auto', 'auto', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(44,104,130,1)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                                id: 'Text20',
                                text: '<p style=\"margin: 0px;\">​Modelo crosby.</p>',
                                align: 'justify',
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['0', '169', '431', '306', 'auto', 'auto'],
                            id: 'modeloa',
                            display: 'none',
                            type: 'group',
                            c: [
                            {
                                rect: ['39px', '62px', '304px', '187px', 'auto', 'auto'],
                                userClass: '',
                                id: 'caracterizar-popup-3-modeloa',
                                type: 'image',
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/caracterizar-popup-3-modeloa.svg', '0px', '0px']
                            },
                            {
                                rect: ['0', '0px', 'auto', 'auto', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(44,104,130,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                                id: 'Text22',
                                text: '<p style=\"margin: 0px;\">​Modelo alemán (Icontec).</p>',
                                align: 'justify',
                                type: 'text'
                            },
                            {
                                rect: ['0px', '288px', '431px', '38px', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                id: 'Text23',
                                text: '<p style=\"margin: 0px;\">​El modelo Alemán, al igual que el modelo Crosby, contiene información que permite medir indicadores de gestión del proceso.</p>',
                                align: 'justify',
                                type: 'text'
                            },
                            {
                                rect: ['0px', '24px', '431px', '38px', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                id: 'Text23Copy',
                                text: '<p style=\"margin: 0px;\">​1.Contenido, 2. Flujograma, 3.Control de Registros, 5.Definiciones, 6.Acciones Correctivas, Preventivas y de Mejora, 7.Anexo</p>',
                                align: 'justify',
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['-1', '169', '432', '328', 'auto', 'auto'],
                            id: 'modelos',
                            userClass: '',
                            display: 'none',
                            type: 'group',
                            c: [
                            {
                                rect: ['75px', '49px', '257px', '169px', 'auto', 'auto'],
                                userClass: '',
                                id: 'caracterizar-popup-3-modelos',
                                type: 'image',
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/caracterizar-popup-3-modelos.svg', '0px', '0px']
                            },
                            {
                                rect: ['1px', '259px', '431px', '69px', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(0,0,0,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                                id: 'Text26',
                                text: '<p style=\"margin: 0px;\">​El modelo a seguir para la caracterización del proyecto de formación es el presentado en la anterior gráfica cuya plantilla encontrará disponible en los materiales bajo el nombre de “plantilla_caracterizacion_de_procesos.xls”.&nbsp;</p>',
                                align: 'justify',
                                type: 'text'
                            },
                            {
                                rect: ['0px', '0px', '409px', '39px', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(44,104,130,1.00)', '700', 'none', 'normal', 'break-word', 'normal'],
                                id: 'Text25',
                                text: '<p style=\"margin: 0px;\">​Modelo a seguir para la caracterización del proyecto     de Formación.</p>',
                                align: 'justify',
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['419', '155px', '31px', '31px', 'auto', 'auto'],
                            userClass: 'size-opacity',
                            id: 'btn-cerrar-popup2',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/btn-cerrar-popup.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'caracterizar2-smc',
                            rect: ['13', '80', '405', '349', 'auto', 'auto'],
                            id: 'caracterizar2-smc'
                        },
                        {
                            type: 'rect',
                            display: 'block',
                            symbolName: 'caracterizarill1-smc',
                            rect: ['0px', '137px', '406', '224', 'auto', 'auto'],
                            id: 'caracterizarill1-smc'
                        },
                        {
                            rect: ['135px', '420px', '119px', '28px', 'auto', 'auto'],
                            id: 'clic-ampliar',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/clic-ampliar.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '431px', '58px']
                        }
                    }
                },
                timeline: {
                    duration: 3087,
                    autoPlay: true,
                    labels: {
                        "1": 250,
                        "2": 750,
                        "3": 1250,
                        "3-1": 1750,
                        "3-2": 2000,
                        "3-3": 2250,
                        "3-4": 2500,
                        "3-5": 2750,
                        "3-6": 3000
                    },
                    data: [
                        [
                            "eid287",
                            "top",
                            1137,
                            0,
                            "linear",
                            "${caracterizar-3-sm_modeloc}",
                            '125px',
                            '125px'
                        ],
                        [
                            "eid7010",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Text12Copy}",
                            '75px',
                            '75px'
                        ],
                        [
                            "eid291",
                            "top",
                            1137,
                            0,
                            "linear",
                            "${caracterizar-3-sm_flujograma}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid250",
                            "display",
                            630,
                            0,
                            "linear",
                            "${Text12}",
                            'block',
                            'none'
                        ],
                        [
                            "eid7053",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Text12}",
                            '107px',
                            '107px'
                        ],
                        [
                            "eid259",
                            "display",
                            1137,
                            0,
                            "linear",
                            "${caracterizar-3-sm_modeloc}",
                            'none',
                            'block'
                        ],
                        [
                            "eid263",
                            "display",
                            1137,
                            0,
                            "linear",
                            "${Text13}",
                            'none',
                            'block'
                        ],
                        [
                            "eid6939",
                            "font-size",
                            0,
                            0,
                            "linear",
                            "${Text12Copy}",
                            '15px',
                            '15px'
                        ],
                        [
                            "eid303",
                            "display",
                            2926,
                            0,
                            "linear",
                            "${modelos}",
                            'none',
                            'block'
                        ],
                        [
                            "eid262",
                            "display",
                            1137,
                            0,
                            "linear",
                            "${caracterizar-3-sm_ficha}",
                            'none',
                            'block'
                        ],
                        [
                            "eid260",
                            "display",
                            1137,
                            0,
                            "linear",
                            "${caracterizar-3-sm_modeloa}",
                            'none',
                            'block'
                        ],
                        [
                            "eid301",
                            "display",
                            2669,
                            0,
                            "linear",
                            "${modeloa}",
                            'none',
                            'block'
                        ],
                        [
                            "eid302",
                            "display",
                            2926,
                            0,
                            "linear",
                            "${modeloa}",
                            'block',
                            'none'
                        ],
                        [
                            "eid292",
                            "top",
                            1137,
                            0,
                            "linear",
                            "${caracterizar-3-sm_modelos}",
                            '125px',
                            '125px'
                        ],
                        [
                            "eid255",
                            "display",
                            1137,
                            0,
                            "linear",
                            "${Group}",
                            'none',
                            'block'
                        ],
                        [
                            "eid251",
                            "display",
                            630,
                            0,
                            "linear",
                            "${Text7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid295",
                            "display",
                            1920,
                            0,
                            "linear",
                            "${flujograma-integrado}",
                            'none',
                            'block'
                        ],
                        [
                            "eid296",
                            "display",
                            2158,
                            0,
                            "linear",
                            "${flujograma-integrado}",
                            'block',
                            'none'
                        ],
                        [
                            "eid6938",
                            "color",
                            0,
                            0,
                            "linear",
                            "${Text12Copy}",
                            'rgba(0,0,0,1.00)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid3465",
                            "display",
                            630,
                            0,
                            "linear",
                            "${caracterizarill1-smc}",
                            'block',
                            'none'
                        ],
                        [
                            "eid297",
                            "display",
                            2158,
                            0,
                            "linear",
                            "${modelop}",
                            'none',
                            'block'
                        ],
                        [
                            "eid298",
                            "display",
                            2427,
                            0,
                            "linear",
                            "${modelop}",
                            'block',
                            'none'
                        ],
                        [
                            "eid564",
                            "display",
                            1675,
                            0,
                            "linear",
                            "${caracterizar-popup-container}",
                            'none',
                            'block'
                        ],
                        [
                            "eid290",
                            "top",
                            1137,
                            0,
                            "linear",
                            "${clic-sobre22}",
                            '186px',
                            '186px'
                        ],
                        [
                            "eid257",
                            "display",
                            1137,
                            0,
                            "linear",
                            "${caracterizar-3-sm_modelos}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3466",
                            "display",
                            750,
                            0,
                            "linear",
                            "${caracterizar2-smc}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3467",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${caracterizar2-smc}",
                            'block',
                            'none'
                        ],
                        [
                            "eid710",
                            "display",
                            1675,
                            0,
                            "linear",
                            "${btn-cerrar-popup2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid7009",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Text7}",
                            '377px',
                            '377px'
                        ],
                        [
                            "eid299",
                            "display",
                            2427,
                            0,
                            "linear",
                            "${modeloc}",
                            'none',
                            'block'
                        ],
                        [
                            "eid300",
                            "display",
                            2669,
                            0,
                            "linear",
                            "${modeloc}",
                            'block',
                            'none'
                        ],
                        [
                            "eid7008",
                            "top",
                            0,
                            0,
                            "linear",
                            "${caracterizarill1-smc}",
                            '137px',
                            '137px'
                        ],
                        [
                            "eid4603",
                            "display",
                            1675,
                            0,
                            "linear",
                            "${clic-ampliar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid286",
                            "top",
                            1137,
                            0,
                            "linear",
                            "${caracterizar-3-sm_ficha}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid289",
                            "top",
                            1137,
                            0,
                            "linear",
                            "${caracterizar-3-sm_modelop}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid4637",
                            "font-size",
                            1500,
                            0,
                            "linear",
                            "${Text13}",
                            '15px',
                            '15px'
                        ],
                        [
                            "eid600",
                            "-webkit-transform-origin",
                            3087,
                            0,
                            "linear",
                            "${modelos}",
                            [12,54],
                            [12,54],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid400",
                            "-moz-transform-origin",
                            3087,
                            0,
                            "linear",
                            "${modelos}",
                            [12,54],
                            [12,54],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid401",
                            "-ms-transform-origin",
                            3087,
                            0,
                            "linear",
                            "${modelos}",
                            [12,54],
                            [12,54],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid402",
                            "msTransformOrigin",
                            3087,
                            0,
                            "linear",
                            "${modelos}",
                            [12,54],
                            [12,54],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid403",
                            "-o-transform-origin",
                            3087,
                            0,
                            "linear",
                            "${modelos}",
                            [12,54],
                            [12,54],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid404",
                            "transform-origin",
                            3087,
                            0,
                            "linear",
                            "${modelos}",
                            [12,54],
                            [12,54],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4635",
                            "font-size",
                            0,
                            0,
                            "linear",
                            "${Text7}",
                            '15px',
                            '15px'
                        ],
                        [
                            "eid6933",
                            "display",
                            630,
                            0,
                            "linear",
                            "${Text12Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid256",
                            "display",
                            1137,
                            0,
                            "linear",
                            "${clic-sobre22}",
                            'none',
                            'block'
                        ],
                        [
                            "eid258",
                            "display",
                            1137,
                            0,
                            "linear",
                            "${caracterizar-3-sm_modelop}",
                            'none',
                            'block'
                        ],
                        [
                            "eid293",
                            "display",
                            1675,
                            0,
                            "linear",
                            "${ficha-de-procesos}",
                            'none',
                            'block'
                        ],
                        [
                            "eid294",
                            "display",
                            1920,
                            0,
                            "linear",
                            "${ficha-de-procesos}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4607",
                            "top",
                            1750,
                            250,
                            "linear",
                            "${clic-ampliar}",
                            '391px',
                            '407px'
                        ],
                        [
                            "eid4611",
                            "top",
                            2250,
                            250,
                            "linear",
                            "${clic-ampliar}",
                            '407px',
                            '389px'
                        ],
                        [
                            "eid4613",
                            "top",
                            2500,
                            250,
                            "linear",
                            "${clic-ampliar}",
                            '389px',
                            '420px'
                        ],
                        [
                            "eid4614",
                            "top",
                            2750,
                            250,
                            "linear",
                            "${clic-ampliar}",
                            '420px',
                            '393px'
                        ],
                        [
                            "eid637",
                            "display",
                            750,
                            0,
                            "linear",
                            "${Text6Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid638",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${Text6Copy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid264",
                            "top",
                            1137,
                            0,
                            "linear",
                            "${Group}",
                            '85px',
                            '85px'
                        ],
                        [
                            "eid4640",
                            "top",
                            1750,
                            0,
                            "linear",
                            "${btn-cerrar-popup2}",
                            '155px',
                            '155px'
                        ],
                        [
                            "eid288",
                            "top",
                            1137,
                            0,
                            "linear",
                            "${caracterizar-3-sm_modeloa}",
                            '125px',
                            '125px'
                        ],
                        [
                            "eid4606",
                            "left",
                            1750,
                            250,
                            "linear",
                            "${clic-ampliar}",
                            '130px',
                            '135px'
                        ],
                        [
                            "eid4610",
                            "left",
                            2250,
                            250,
                            "linear",
                            "${clic-ampliar}",
                            '135px',
                            '149px'
                        ],
                        [
                            "eid4612",
                            "left",
                            2500,
                            250,
                            "linear",
                            "${clic-ampliar}",
                            '149px',
                            '135px'
                        ],
                        [
                            "eid261",
                            "display",
                            1137,
                            0,
                            "linear",
                            "${caracterizar-3-sm_flujograma}",
                            'none',
                            'block'
                        ],
                        [
                            "eid636",
                            "display",
                            750,
                            0,
                            "linear",
                            "${Text6Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid639",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${Text6Copy2}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "elab-mc": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'elab-titulo',
                            type: 'image',
                            rect: ['0px', '0px', '431px', '64px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/elab-titulo.svg', '0px', '0px']
                        },
                        {
                            id: 'p5',
                            type: 'image',
                            rect: ['441px', '0px', '477px', '499px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/p5.svg', '0px', '0px']
                        },
                        {
                            rect: ['0', '87', '431', '348', 'auto', 'auto'],
                            id: 'g1',
                            display: 'block',
                            type: 'group',
                            c: [
                            {
                                rect: ['0px', '0px', '431px', '46px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(44,104,130,1.00)', '700', 'none', '', 'break-word', 'normal'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​La gestión de procesos se construye sobre 5 etapas consecutivas:</p>',
                                align: 'justify',
                                type: 'text'
                            },
                            {
                                id: 'elab-img1',
                                type: 'image',
                                rect: ['3px', '54px', '424px', '52px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/elab-img1.svg', '0px', '0px']
                            },
                            {
                                rect: ['3px', '126px', '424px', '143px', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(0,0,0,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                                id: 'Text2',
                                text: '<p style=\"margin: 0px;\">​Antes de iniciar con la elaboración de un Mapa de Procesos es necesario tener presente la diferencia entre la finalidad de un Proceso y un Procedimiento: un Proceso responde a la pregunta “¿QUÉ?” mientras que un procedimiento responde a la pregunta “¿CÓMO?”, de ahí que sea en los procedimientos donde, entre otras cosas, se solicite un Diagrama de flujo o mapa de proceso cruzado que representa el paso a paso o eventos concatenados que se realizan al interior del proceso.</p>',
                                align: 'justify',
                                type: 'text'
                            },
                            {
                                rect: ['3px', '289px', '167px', '59px', 'auto', 'auto'],
                                id: 'elab-btn_popup1',
                                userClass: 'size-opacity',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/elab-btn_popup1.svg', '0px', '0px']
                            },
                            {
                                rect: ['264px', '287px', '167px', '59px', 'auto', 'auto'],
                                id: 'elab-btn_popup2',
                                userClass: 'size-opacity',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/elab-btn_popup2.svg', '0px', '0px']
                            },
                            {
                                id: 'clic-sobre',
                                type: 'image',
                                rect: ['174px', '289px', '81px', '57px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/clic-sobre.svg', '0px', '0px']
                            }]
                        },
                        {
                            rect: ['-72px', '-33px', '526px', '541px', 'auto', 'auto'],
                            id: 'elab-popup-container',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/elab-popup-container.svg', '0px', '0px']
                        },
                        {
                            rect: ['0', '-27', '894', '505', 'auto', 'auto'],
                            id: 'popup1',
                            display: 'none',
                            type: 'group',
                            c: [
                            {
                                textStyle: ['', '', '', '', 'none'],
                                rect: ['0px', '27px', '431px', '478px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(44,104,130,1)', '700', 'none', 'normal', 'break-word', 'normal'],
                                userClass: 'lista',
                                id: 'Text3',
                                text: '<p style=\"margin: 0px;\">​Para la elaboración del Mapa de Procesos Organizacionales se debe:</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​<span style=\"font-size: 14px;\">a. Identificar procesos.</span><span style=\"font-size: 14px; color: rgb(0, 0, 0); font-weight: 400;\">  Se debe asignar un nombre identificativo a las principales actividades que realiza la organización.</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 14px; color: rgb(0, 0, 0); font-weight: 400;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 14px;\">b. Inventario de Procesos.</span><span style=\"font-size: 14px; font-weight: 400;\"></span><span style=\"font-size: 14px; color: rgb(0, 0, 0); font-weight: 400;\">  Una vez identificados los procesos se debe lograr la lista completa de estos estableciendo, si es el caso, cuales están contenidos dentro de otros o tienen dependencia directa entre si, esta lista será el insumo para el siguiente paso.</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 14px; color: rgb(0, 0, 0);\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 14px;\">c. Clasificación de Procesos.</span><span style=\"font-size: 14px; font-weight: 400;\"> </span><span style=\"font-size: 14px; color: rgb(0, 0, 0); font-weight: 400;\"> Una vez logrado el inventario de los procesos podemos clasificarlos en los siguientes Macroprocesos Organizacionales teniendo presente a que corresponde cada uno:</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 14px; color: rgb(0, 0, 0); font-weight: 400;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 14px; color: rgb(0, 0, 0); font-weight: 400;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 14px; color: rgb(0, 0, 0); font-weight: 400;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 14px; color: rgb(0, 0, 0); font-weight: 400;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 14px; color: rgb(0, 0, 0); font-weight: 400;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 14px; color: rgb(0, 0, 0); font-weight: 400;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 14px; color: rgb(0, 0, 0); font-weight: 400;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 14px; color: rgb(0, 0, 0); font-weight: 400;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 14px;\">d. Mapa de Procesos.</span><span style=\"font-size: 14px; font-weight: 400;\"> </span><span style=\"font-size: 14px; color: rgb(0, 0, 0); font-weight: 400;\">Ya identificados, inventariados (jerarquizados) y clasificados los procesos se puede dar inicio a la construcción del mapa de procesos de forma que se pueda tener una imagen global de las interrelaciones existentes entre las entradas y salidas de los grupos de procesos.&nbsp;</span></p>',
                                align: 'justify',
                                type: 'text'
                            },
                            {
                                rect: ['272px', '321px', '150px', '51px', 'auto', 'auto'],
                                id: 'elab-popup1-btn_apoyo',
                                userClass: 'size-opacity',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/elab-popup1-btn_apoyo.svg', '0px', '0px']
                            },
                            {
                                rect: ['0', '321px', '150px', '51px', 'auto', 'auto'],
                                id: 'elab-popup1-btn_estrategicos',
                                userClass: 'size-opacity',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/elab-popup1-btn_estrategicos.svg', '0px', '0px']
                            },
                            {
                                rect: ['137px', '321px', '150px', '51px', 'auto', 'auto'],
                                id: 'elab-popup1-btn_misionales',
                                userClass: 'size-opacity',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/elab-popup1-btn_misionales.svg', '0px', '0px']
                            },
                            {
                                id: 'clic-sobre2',
                                type: 'image',
                                rect: ['75', '382px', '244px', '32px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/clic-sobre2.svg', '0px', '0px']
                            },
                            {
                                id: 'elab-popup1-globo_apoyo',
                                type: 'image',
                                rect: ['497px', '0px', '397px', '161px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/elab-popup1-globo_apoyo.svg', '0px', '0px']
                            },
                            {
                                id: 'elab-popup1-globo_estrategicos',
                                type: 'image',
                                rect: ['497px', '0px', '397px', '161px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/elab-popup1-globo_estrategicos.svg', '0px', '0px']
                            },
                            {
                                id: 'elab-popup1-globo_misionales',
                                type: 'image',
                                rect: ['497px', '0px', '397px', '161px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/elab-popup1-globo_misionales.svg', '0px', '0px']
                            }]
                        },
                        {
                            rect: ['-43px', '-20', '451', '468', 'auto', 'auto'],
                            id: 'popup2-1',
                            display: 'none',
                            type: 'group',
                            c: [
                            {
                                rect: ['0px', '0px', '451px', '468px', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(44,104,130,1)', '700', 'none', 'normal', 'break-word', 'normal'],
                                id: 'Text4',
                                text: '<p style=\"margin: 0px;\">​Aun cuando existen diversos diagramas para elaborar un mapa de procesos, se sugiere seguir la siguiente forma:</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​A continuación se presenta un ejemplo sencillo, a partir de un enunciado para dar inicio a la elaboración de un mapa de proceso:</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​<span style=\"font-size: 14px; font-weight: 400; color: rgb(0, 0, 0);\">La universidad XYZ, a través de su área de planeación institucional y la de gestión de control,  ha identificado que en su entorno, existe la necesidad de formación, investigación y generación de conocimiento, extensión y proyección social, desarrollo humano para el progreso de la comunidad.&nbsp;&nbsp;</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 14px; font-weight: 400; color: rgb(0, 0, 0);\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 14px; font-weight: 400; color: rgb(0, 0, 0);\">Por tal razón a decidido suplir estos servicios a la comunidad mediante su organización, comprendiendo que para ello debe soportarse en la gestión financiera, en una gestión de recursos tecnológicos y de recursos humanos entre otros.</span></p>',
                                align: 'justify',
                                type: 'text'
                            },
                            {
                                rect: ['76px', '45px', '300px', '138px', 'auto', 'auto'],
                                userClass: '',
                                id: 'elab-popup2-ill1',
                                type: 'image',
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/elab-popup2-ill1.svg', '0px', '0px']
                            }]
                        },
                        {
                            rect: ['-134px', '-69px', '545', '435', 'auto', 'auto'],
                            id: 'popup2-2',
                            display: 'none',
                            type: 'group',
                            c: [
                            {
                                rect: ['90px', '49px', '455px', '64px', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(44,104,130,1)', '700', 'none', 'normal', 'break-word', 'normal'],
                                id: 'Text5',
                                text: '<p style=\"margin: 0px;\">​A partir del anterior enunciado podemos identificar varias actividades que están implicadas dentro de la misión de la universidad, estas son:</p>',
                                align: 'justify',
                                type: 'text'
                            },
                            {
                                rect: ['91px', '114px', '78px', '77px', 'auto', 'auto'],
                                id: 'elab-popup2-btn_1',
                                userClass: 'rotate360',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/elab-popup2-btn_1.svg', '0px', '0px']
                            },
                            {
                                rect: ['181px', '114px', '78px', '77px', 'auto', 'auto'],
                                id: 'elab-popup2-btn_2',
                                userClass: 'rotate360',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/elab-popup2-btn_2.svg', '0px', '0px']
                            },
                            {
                                rect: ['269px', '114px', '78px', '77px', 'auto', 'auto'],
                                id: 'elab-popup2-btn_3',
                                userClass: 'rotate360',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/elab-popup2-btn_3.svg', '0px', '0px']
                            },
                            {
                                rect: ['357px', '114px', '78px', '77px', 'auto', 'auto'],
                                id: 'elab-popup2-btn_4',
                                userClass: 'rotate360',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/elab-popup2-btn_4.svg', '0px', '0px']
                            },
                            {
                                rect: ['446px', '114px', '78px', '77px', 'auto', 'auto'],
                                id: 'elab-popup2-btn_5',
                                userClass: 'rotate360',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/elab-popup2-btn_5.svg', '0px', '0px']
                            },
                            {
                                rect: ['82px', '216px', '448px', '219px', 'auto', 'auto'],
                                id: 'elab-popup2-glb_1',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/elab-popup2-glb_1.svg', '0px', '0px']
                            },
                            {
                                rect: ['82px', '216px', '448px', '290px', 'auto', 'auto'],
                                id: 'elab-popup2-glb_2',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/elab-popup2-glb_2.svg', '0px', '0px']
                            },
                            {
                                rect: ['82px', '216px', '448px', '290px', 'auto', 'auto'],
                                id: 'elab-popup2-glb_3',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/elab-popup2-glb_3.svg', '0px', '0px']
                            },
                            {
                                rect: ['92px', '198px', '448px', '340px', 'auto', 'auto'],
                                id: 'elab-popup2-glb_4',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/elab-popup2-glb_4.svg', '0px', '0px']
                            },
                            {
                                rect: ['222px', '296px', '206px', '169px', 'auto', 'auto'],
                                userClass: '',
                                type: 'image',
                                id: 'elab-popup2-glb_4-1',
                                display: 'none',
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/elab-popup2-glb_4-1.svg', '0px', '0px']
                            },
                            {
                                rect: ['82px', '198px', '448px', '340px', 'auto', 'auto'],
                                id: 'elab-popup2-glb_4-2',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/elab-popup2-glb_4-2.svg', '0px', '0px']
                            },
                            {
                                rect: ['82px', '197px', '448px', '340px', 'auto', 'auto'],
                                id: 'elab-popup2-glb_5',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/elab-popup2-glb_5.svg', '0px', '0px']
                            },
                            {
                                rect: ['204px', '290px', '232px', '171px', 'auto', 'auto'],
                                userClass: '',
                                type: 'image',
                                id: 'elab-popup2-glb_5-1',
                                display: 'none',
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/elab-popup2-glb_5-1.svg', '0px', '0px']
                            },
                            {
                                rect: ['457px', '456px', '27px', '28px', 'auto', 'auto'],
                                id: 'lupita1',
                                type: 'image',
                                display: 'block',
                                fill: ['rgba(0,0,0,0)', 'images/lupita1.svg', '0px', '0px']
                            },
                            {
                                rect: ['82px', '201px', '448px', '340px', 'auto', 'auto'],
                                id: 'elab-popup2-glb_5-2',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/elab-popup2-glb_5-2.svg', '0px', '0px']
                            },
                            {
                                rect: ['82px', '201px', '448px', '340px', 'auto', 'auto'],
                                id: 'elab-popup2-glb_5-3',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/elab-popup2-glb_5-3.svg', '0px', '0px']
                            },
                            {
                                rect: ['205px', '228px', '240px', '228px', 'auto', 'auto'],
                                userClass: '',
                                type: 'image',
                                id: 'elab-popup2-glb_5-3ill',
                                display: 'none',
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/elab-popup2-glb_5-3ill.svg', '0px', '0px']
                            },
                            /*{
                                rect: ['259px', '482px', '123px', '31px', 'auto', 'auto'],
                                id: 'xlsdescargar',
                                type: 'image',
                                display: 'block',
                                fill: ['rgba(0,0,0,0)', 'images/xlsdescargar.svg', '0px', '0px']
                            }*/]
                        },
                        {
                            rect: ['126px', '479px', '126', '29', 'auto', 'auto'],
                            id: 'paginationmain',
                            display: 'none',
                            type: 'group',
                            c: [
                            {
                                id: 'pagination_indicatorCopy',
                                type: 'image',
                                rect: ['18px', '0px', '90px', '28px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/pagination_indicator.svg', '0px', '0px']
                            },
                            {
                                rect: ['103px', '1px', '23px', '28px', 'auto', 'auto'],
                                id: 'pagination_fwCopy',
                                userClass: 'fw',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/pagination_fw.svg', '0px', '0px']
                            },
                            {
                                rect: ['0px', '0px', '24px', '28px', 'auto', 'auto'],
                                id: 'pagination_bwCopy',
                                userClass: 'bw',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/pagination_bw.svg', '0px', '0px']
                            },
                            {
                                textStyle: ['', '', '', '', 'none'],
                                rect: ['42px', '7px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                                align: 'justify',
                                id: 'Text6Copy6',
                                text: '<p style=\"margin: 0px;\">​1 de 2</p>',
                                display: 'block',
                                type: 'text'
                            },
                            {
                                textStyle: ['', '', '', '', 'none'],
                                rect: ['42px', '7px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                                align: 'justify',
                                id: 'Text6Copy5',
                                text: '<p style=\"margin: 0px;\">2 de 2</p>',
                                display: 'none',
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['132px', '441px', '126', '29', 'auto', 'auto'],
                            id: 'pagination',
                            transform: [[], [], [], ['0.75', '0.75']],
                            display: 'none',
                            type: 'group',
                            c: [
                            {
                                id: 'pagination_indicator',
                                type: 'image',
                                rect: ['18px', '0px', '90px', '28px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/pagination_indicator.svg', '0px', '0px']
                            },
                            {
                                rect: ['103px', '1px', '23px', '28px', 'auto', 'auto'],
                                id: 'pagination_fw',
                                userClass: 'fw',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/pagination_fw.svg', '0px', '0px']
                            },
                            {
                                rect: ['0px', '0px', '24px', '28px', 'auto', 'auto'],
                                id: 'pagination_bw',
                                userClass: 'bw',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/pagination_bw.svg', '0px', '0px']
                            },
                            {
                                textStyle: ['', '', '', '', 'none'],
                                rect: ['42px', '7px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                                align: 'justify',
                                id: 'Text6Copy',
                                text: '<p style=\"margin: 0px;\">​1 de 2</p>',
                                display: 'none',
                                type: 'text'
                            },
                            {
                                textStyle: ['', '', '', '', 'none'],
                                rect: ['42px', '7px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                                align: 'justify',
                                id: 'Text6',
                                text: '<p style=\"margin: 0px;\">2 de 2</p>',
                                display: 'none',
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['126px', '445px', '126', '29', 'auto', 'auto'],
                            id: 'paginationCopy2',
                            transform: [[], [], [], ['0.75', '0.75']],
                            display: 'none',
                            type: 'group',
                            c: [
                            {
                                id: 'pagination_indicatorCopy2',
                                type: 'image',
                                rect: ['18px', '0px', '90px', '28px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/pagination_indicator.svg', '0px', '0px']
                            },
                            {
                                rect: ['103px', '1px', '23px', '28px', 'auto', 'auto'],
                                id: 'pagination_fwCopy2',
                                userClass: 'fw',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/pagination_fw.svg', '0px', '0px']
                            },
                            {
                                rect: ['0px', '0px', '24px', '28px', 'auto', 'auto'],
                                id: 'pagination_bwCopy2',
                                userClass: 'bw',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/pagination_bw.svg', '0px', '0px']
                            },
                            {
                                textStyle: ['', '', '', '', 'none'],
                                rect: ['42px', '7px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                                align: 'justify',
                                id: 'Text6Copy4',
                                text: '<p style=\"margin: 0px;\">1 de 3</p>',
                                display: 'none',
                                type: 'text'
                            },
                            {
                                textStyle: ['', '', '', '', 'none'],
                                rect: ['42px', '7px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                                align: 'justify',
                                id: 'Text6Copy3',
                                text: '<p style=\"margin: 0px;\">​2 de 3</p>',
                                display: 'none',
                                type: 'text'
                            },
                            {
                                textStyle: ['', '', '', '', 'none'],
                                rect: ['42px', '6px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                                align: 'justify',
                                id: 'Text6Copy2',
                                text: '<p style=\"margin: 0px;\">3 de 3</p>',
                                display: 'none',
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['417px', '-27px', '31px', '31px', 'auto', 'auto'],
                            userClass: 'size-opacity',
                            id: 'btn-cerrar-popup',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/btn-cerrar-popup.svg', '0px', '0px']
                        },
                        {
                            rect: ['138px', '174px', '119px', '28px', 'auto', 'auto'],
                            id: 'clic-ampliar2',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/clic-ampliar.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '431px', '64px']
                        }
                    }
                },
                timeline: {
                    duration: 3500,
                    autoPlay: true,
                    labels: {
                        "1": 750,
                        "2": 1250,
                        "2-2": 1750,
                        "2-2-2": 2000,
                        "2-2-3": 2250,
                        "2-2-4-1": 2500,
                        "2-2-4-2": 2750,
                        "2-2-5-1": 3000,
                        "2-2-5-2": 3250,
                        "2-2-5-3": 3500
                    },
                    data: [
                        [
                            "eid3710",
                            "display",
                            654,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4632",
                            "width",
                            3000,
                            0,
                            "linear",
                            "${elab-popup2-glb_5-1}",
                            '232px',
                            '232px'
                        ],
                        [
                            "eid314",
                            "display",
                            500,
                            0,
                            "linear",
                            "${g1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid323",
                            "display",
                            2415,
                            0,
                            "linear",
                            "${elab-popup2-glb_4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid328",
                            "display",
                            2690,
                            0,
                            "linear",
                            "${elab-popup2-glb_4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4636",
                            "height",
                            3500,
                            0,
                            "linear",
                            "${elab-popup2-glb_5-3ill}",
                            '228px',
                            '228px'
                        ],
                        [
                            "eid4623",
                            "left",
                            1500,
                            996,
                            "linear",
                            "${clic-ampliar2}",
                            '138px',
                            '129px'
                        ],
                        [
                            "eid331",
                            "display",
                            3154,
                            0,
                            "linear",
                            "${elab-popup2-glb_5-2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid332",
                            "display",
                            3368,
                            0,
                            "linear",
                            "${elab-popup2-glb_5-2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4615",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${clic-ampliar2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4616",
                            "display",
                            1681,
                            0,
                            "linear",
                            "${clic-ampliar2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4619",
                            "display",
                            2496,
                            0,
                            "linear",
                            "${clic-ampliar2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4625",
                            "display",
                            2690,
                            0,
                            "linear",
                            "${clic-ampliar2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4626",
                            "display",
                            2965,
                            0,
                            "linear",
                            "${clic-ampliar2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4687",
                            "display",
                            3154,
                            0,
                            "linear",
                            "${clic-ampliar2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4688",
                            "display",
                            3368,
                            0,
                            "linear",
                            "${clic-ampliar2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid329",
                            "display",
                            2892,
                            0,
                            "linear",
                            "${elab-popup2-glb_5-1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid330",
                            "display",
                            3154,
                            0,
                            "linear",
                            "${elab-popup2-glb_5-1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4638",
                            "width",
                            3500,
                            0,
                            "linear",
                            "${elab-popup2-glb_5-3ill}",
                            '240px',
                            '240px'
                        ],
                        [
                            "eid321",
                            "display",
                            1920,
                            0,
                            "linear",
                            "${elab-popup2-glb_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid322",
                            "display",
                            2170,
                            0,
                            "linear",
                            "${elab-popup2-glb_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4620",
                            "height",
                            2496,
                            0,
                            "linear",
                            "${elab-popup2-glb_4-1}",
                            '169px',
                            '169px'
                        ],
                        [
                            "eid357",
                            "display",
                            500,
                            0,
                            "linear",
                            "${elab-popup-container}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4639",
                            "left",
                            3500,
                            0,
                            "linear",
                            "${elab-popup2-glb_5-3ill}",
                            '205px',
                            '205px'
                        ],
                        [
                            "eid7878",
                            "top",
                            3000,
                            0,
                            "linear",
                            "${paginationmain}",
                            '479px',
                            '479px'
                        ],
                        [
                            "eid335",
                            "display",
                            3368,
                            0,
                            "linear",
                            "${elab-popup2-glb_5-3ill}",
                            'none',
                            'block'
                        ],
                        [
                            "eid783",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${paginationmain}",
                            'none',
                            'block'
                        ],
                        [
                            "eid8020",
                            "left",
                            1750,
                            0,
                            "linear",
                            "${paginationmain}",
                            '126px',
                            '126px'
                        ],
                        [
                            "eid8021",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${paginationmain}",
                            '126px',
                            '126px'
                        ],
                        [
                            "eid8019",
                            "left",
                            2250,
                            0,
                            "linear",
                            "${paginationmain}",
                            '126px',
                            '126px'
                        ],
                        [
                            "eid8018",
                            "left",
                            2500,
                            0,
                            "linear",
                            "${paginationmain}",
                            '126px',
                            '126px'
                        ],
                        [
                            "eid8013",
                            "left",
                            2750,
                            0,
                            "linear",
                            "${paginationmain}",
                            '126px',
                            '126px'
                        ],
                        [
                            "eid8009",
                            "left",
                            3000,
                            0,
                            "linear",
                            "${paginationmain}",
                            '126px',
                            '126px'
                        ],
                        [
                            "eid4621",
                            "width",
                            2496,
                            0,
                            "linear",
                            "${elab-popup2-glb_4-1}",
                            '206px',
                            '206px'
                        ],
                        [
                            "eid8204",
                            "height",
                            3000,
                            0,
                            "linear",
                            "${xlsdescargar}",
                            '31px',
                            '31px'
                        ],
                        [
                            "eid8210",
                            "top",
                            3000,
                            0,
                            "linear",
                            "${xlsdescargar}",
                            '482px',
                            '482px'
                        ],
                        [
                            "eid2945",
                            "display",
                            3154,
                            0,
                            "linear",
                            "${Text6Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2946",
                            "display",
                            3416,
                            0,
                            "linear",
                            "${Text6Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid355",
                            "-webkit-transform-origin",
                            2415,
                            0,
                            "linear",
                            "${elab-popup2-glb_4-1}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid405",
                            "-moz-transform-origin",
                            2415,
                            0,
                            "linear",
                            "${elab-popup2-glb_4-1}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid406",
                            "-ms-transform-origin",
                            2415,
                            0,
                            "linear",
                            "${elab-popup2-glb_4-1}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid407",
                            "msTransformOrigin",
                            2415,
                            0,
                            "linear",
                            "${elab-popup2-glb_4-1}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid408",
                            "-o-transform-origin",
                            2415,
                            0,
                            "linear",
                            "${elab-popup2-glb_4-1}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid409",
                            "transform-origin",
                            2415,
                            0,
                            "linear",
                            "${elab-popup2-glb_4-1}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid2935",
                            "display",
                            2965,
                            0,
                            "linear",
                            "${paginationCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4634",
                            "left",
                            3000,
                            0,
                            "linear",
                            "${elab-popup2-glb_5-1}",
                            '204px',
                            '204px'
                        ],
                        [
                            "eid2951",
                            "display",
                            2457,
                            0,
                            "linear",
                            "${Text6Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2952",
                            "display",
                            2690,
                            0,
                            "linear",
                            "${Text6Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid336",
                            "display",
                            2892,
                            0,
                            "linear",
                            "${elab-popup2-glb_5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid339",
                            "display",
                            3154,
                            0,
                            "linear",
                            "${elab-popup2-glb_5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid342",
                            "display",
                            2170,
                            0,
                            "linear",
                            "${elab-popup2-glb_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid343",
                            "display",
                            2415,
                            0,
                            "linear",
                            "${elab-popup2-glb_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4663",
                            "top",
                            3000,
                            154,
                            "linear",
                            "${paginationCopy2}",
                            '442px',
                            '445px'
                        ],
                        [
                            "eid8022",
                            "top",
                            3296,
                            0,
                            "linear",
                            "${paginationCopy2}",
                            '445px',
                            '445px'
                        ],
                        [
                            "eid8014",
                            "left",
                            2496,
                            0,
                            "linear",
                            "${pagination}",
                            '126px',
                            '126px'
                        ],
                        [
                            "eid8015",
                            "left",
                            2750,
                            0,
                            "linear",
                            "${pagination}",
                            '126px',
                            '126px'
                        ],
                        [
                            "eid317",
                            "display",
                            1168,
                            0,
                            "linear",
                            "${popup2-1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid318",
                            "display",
                            1681,
                            0,
                            "linear",
                            "${popup2-1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2954",
                            "display",
                            2690,
                            0,
                            "linear",
                            "${Text6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2955",
                            "display",
                            2965,
                            0,
                            "linear",
                            "${Text6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid353",
                            "-webkit-transform-origin",
                            2892,
                            0,
                            "linear",
                            "${elab-popup2-glb_5-1}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid410",
                            "-moz-transform-origin",
                            2892,
                            0,
                            "linear",
                            "${elab-popup2-glb_5-1}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid411",
                            "-ms-transform-origin",
                            2892,
                            0,
                            "linear",
                            "${elab-popup2-glb_5-1}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid412",
                            "msTransformOrigin",
                            2892,
                            0,
                            "linear",
                            "${elab-popup2-glb_5-1}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid413",
                            "-o-transform-origin",
                            2892,
                            0,
                            "linear",
                            "${elab-popup2-glb_5-1}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid414",
                            "transform-origin",
                            2892,
                            0,
                            "linear",
                            "${elab-popup2-glb_5-1}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid324",
                            "display",
                            2415,
                            0,
                            "linear",
                            "${elab-popup2-glb_4-1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid325",
                            "display",
                            2690,
                            0,
                            "linear",
                            "${elab-popup2-glb_4-1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid315",
                            "display",
                            654,
                            0,
                            "linear",
                            "${popup1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid316",
                            "display",
                            1168,
                            0,
                            "linear",
                            "${popup1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid790",
                            "display",
                            1681,
                            0,
                            "linear",
                            "${Text6Copy6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid319",
                            "display",
                            1681,
                            0,
                            "linear",
                            "${elab-popup2-glb_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid320",
                            "display",
                            1920,
                            0,
                            "linear",
                            "${elab-popup2-glb_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid7876",
                            "left",
                            3000,
                            0,
                            "linear",
                            "${paginationCopy2}",
                            '126px',
                            '126px'
                        ],
                        [
                            "eid8016",
                            "top",
                            2496,
                            0,
                            "linear",
                            "${pagination}",
                            '442px',
                            '442px'
                        ],
                        [
                            "eid8017",
                            "top",
                            2750,
                            0,
                            "linear",
                            "${pagination}",
                            '442px',
                            '442px'
                        ],
                        [
                            "eid7953",
                            "display",
                            1681,
                            0,
                            "linear",
                            "${lupita1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid7951",
                            "display",
                            1750,
                            0,
                            "linear",
                            "${lupita1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid7949",
                            "display",
                            1920,
                            0,
                            "linear",
                            "${lupita1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid7947",
                            "display",
                            2170,
                            0,
                            "linear",
                            "${lupita1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid7945",
                            "display",
                            2457,
                            0,
                            "linear",
                            "${lupita1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid7899",
                            "display",
                            2690,
                            0,
                            "linear",
                            "${lupita1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid2925",
                            "display",
                            2457,
                            0,
                            "linear",
                            "${pagination}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2934",
                            "display",
                            2965,
                            0,
                            "linear",
                            "${pagination}",
                            'block',
                            'none'
                        ],
                        [
                            "eid326",
                            "display",
                            2690,
                            0,
                            "linear",
                            "${elab-popup2-glb_4-2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid327",
                            "display",
                            2892,
                            0,
                            "linear",
                            "${elab-popup2-glb_4-2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid356",
                            "display",
                            1681,
                            0,
                            "linear",
                            "${popup2-2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4629",
                            "height",
                            3000,
                            0,
                            "linear",
                            "${elab-popup2-glb_5-1}",
                            '171px',
                            '171px'
                        ],
                        [
                            "eid7954",
                            "display",
                            1681,
                            0,
                            "linear",
                            "${xlsdescargar}",
                            'block',
                            'none'
                        ],
                        [
                            "eid7952",
                            "display",
                            1750,
                            0,
                            "linear",
                            "${xlsdescargar}",
                            'none',
                            'none'
                        ],
                        [
                            "eid7950",
                            "display",
                            1920,
                            0,
                            "linear",
                            "${xlsdescargar}",
                            'none',
                            'none'
                        ],
                        [
                            "eid7948",
                            "display",
                            2170,
                            0,
                            "linear",
                            "${xlsdescargar}",
                            'none',
                            'none'
                        ],
                        [
                            "eid7946",
                            "display",
                            2457,
                            0,
                            "linear",
                            "${xlsdescargar}",
                            'none',
                            'none'
                        ],
                        [
                            "eid7901",
                            "display",
                            2690,
                            0,
                            "linear",
                            "${xlsdescargar}",
                            'none',
                            'none'
                        ],
                        [
                            "eid7902",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${xlsdescargar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid7903",
                            "display",
                            3250,
                            0,
                            "linear",
                            "${xlsdescargar}",
                            'block',
                            'none'
                        ],
                        [
                            "eid333",
                            "display",
                            3368,
                            0,
                            "linear",
                            "${elab-popup2-glb_5-3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2943",
                            "display",
                            2965,
                            0,
                            "linear",
                            "${Text6Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2944",
                            "display",
                            3154,
                            0,
                            "linear",
                            "${Text6Copy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid789",
                            "display",
                            1681,
                            0,
                            "linear",
                            "${Text6Copy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4633",
                            "top",
                            3000,
                            0,
                            "linear",
                            "${elab-popup2-glb_5-1}",
                            '290px',
                            '290px'
                        ],
                        [
                            "eid8205",
                            "width",
                            3000,
                            0,
                            "linear",
                            "${xlsdescargar}",
                            '123px',
                            '123px'
                        ],
                        [
                            "eid4622",
                            "left",
                            2496,
                            0,
                            "linear",
                            "${elab-popup2-glb_4-1}",
                            '222px',
                            '222px'
                        ],
                        [
                            "eid8293",
                            "left",
                            3000,
                            0,
                            "linear",
                            "${xlsdescargar}",
                            '259px',
                            '259px'
                        ],
                        [
                            "eid4624",
                            "top",
                            1500,
                            996,
                            "linear",
                            "${clic-ampliar2}",
                            '174px',
                            '403px'
                        ],
                        [
                            "eid2947",
                            "display",
                            3416,
                            0,
                            "linear",
                            "${Text6Copy2}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "tm-breadcrumb": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'breadcrumb-bar',
                            rect: ['40px', '0px', '967px', '40px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/breadcrumb-bar.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'btn-home',
                            rect: ['0px', '0px', '40px', '40px', 'auto', 'auto'],
                            userClass: 'size-opacity',
                            fill: ['rgba(0,0,0,0)', 'images/btn-home.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            align: 'justify',
                            textStyle: ['', '', '', '', 'none'],
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            text: '<p style=\"margin: 0px;\">Inicio &gt;</p>',
                            id: 'inicio',
                            rect: ['54px', '12px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            type: 'text',
                            id: 'intro',
                            text: '<p style=\"margin: 0px;\">Introducción</p>',
                            cursor: 'pointer',
                            rect: ['105px', '12px', 'auto', 'auto', 'auto', 'auto'],
                            display: 'none',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'justify'
                        },
                        {
                            type: 'text',
                            id: 'funcional',
                            text: '<p style=\"margin: 0px;\">Organización funcional vs organización por procesos​</p>',
                            cursor: 'pointer',
                            rect: ['105px', '12px', 'auto', 'auto', 'auto', 'auto'],
                            display: 'none',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'justify'
                        },
                        {
                            type: 'text',
                            id: 'mapa',
                            text: '<p style=\"margin: 0px;\">Mapa de procesos</p>',
                            cursor: 'pointer',
                            rect: ['105px', '12px', 'auto', 'auto', 'auto', 'auto'],
                            display: 'none',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'justify'
                        },
                        {
                            type: 'text',
                            id: 'identificar',
                            text: '<p style=\"margin: 0px;\">Técnicas para identificar procesos​</p>',
                            cursor: 'pointer',
                            rect: ['105px', '12px', 'auto', 'auto', 'auto', 'auto'],
                            display: 'none',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'justify'
                        },
                        {
                            type: 'text',
                            id: 'caracterizar',
                            text: '<p style=\"margin: 0px;\">Técnicas para caracterizar procesos​</p>',
                            cursor: 'pointer',
                            rect: ['105px', '12px', 'auto', 'auto', 'auto', 'auto'],
                            display: 'none',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'justify'
                        },
                        {
                            type: 'text',
                            id: 'elab',
                            text: '<p style=\"margin: 0px;\">Elaboración del mapa de proceso​</p>',
                            cursor: 'pointer',
                            rect: ['105px', '12px', 'auto', 'auto', 'auto', 'auto'],
                            display: 'none',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'justify'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1007px', '40px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: true,
                    labels: {
                        "puntos": 0,
                        "intro": 250,
                        "funcional": 500,
                        "mapa": 750,
                        "identificar": 1000,
                        "caracterizar": 1250,
                        "elab": 1500
                    },
                    data: [
                        [
                            "eid3739",
                            "display",
                            411,
                            0,
                            "linear",
                            "${funcional}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3740",
                            "display",
                            631,
                            0,
                            "linear",
                            "${funcional}",
                            'block',
                            'none'
                        ],
                        [
                            "eid3737",
                            "display",
                            197,
                            0,
                            "linear",
                            "${intro}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3738",
                            "display",
                            411,
                            0,
                            "linear",
                            "${intro}",
                            'block',
                            'none'
                        ],
                        [
                            "eid3741",
                            "display",
                            631,
                            0,
                            "linear",
                            "${mapa}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3742",
                            "display",
                            851,
                            0,
                            "linear",
                            "${mapa}",
                            'block',
                            'none'
                        ],
                        [
                            "eid3747",
                            "display",
                            1384,
                            0,
                            "linear",
                            "${elab}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3745",
                            "display",
                            1112,
                            0,
                            "linear",
                            "${caracterizar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3746",
                            "display",
                            1384,
                            0,
                            "linear",
                            "${caracterizar}",
                            'block',
                            'none'
                        ],
                        [
                            "eid3743",
                            "display",
                            851,
                            0,
                            "linear",
                            "${identificar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3744",
                            "display",
                            1112,
                            0,
                            "linear",
                            "${identificar}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "circles-loop": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['1001px', '285px', '528px', '561px', 'auto', 'auto'],
                            id: 'circles1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/circles1.svg', '0px', '0px']
                        },
                        {
                            rect: ['1006px', '336px', '496px', '467px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.45', '1.45']],
                            id: 'circles2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/circles2.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1822px', '1456px']
                        }
                    }
                },
                timeline: {
                    duration: 4500,
                    autoPlay: true,
                    data: [
                        [
                            "eid1199",
                            "rotateZ",
                            500,
                            4000,
                            "linear",
                            "${circles1}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid1220",
                            "top",
                            500,
                            1000,
                            "linear",
                            "${circles1}",
                            '288px',
                            '279px'
                        ],
                        [
                            "eid1222",
                            "top",
                            1500,
                            1000,
                            "linear",
                            "${circles1}",
                            '279px',
                            '285px'
                        ],
                        [
                            "eid1225",
                            "top",
                            2500,
                            1000,
                            "linear",
                            "${circles1}",
                            '285px',
                            '294px'
                        ],
                        [
                            "eid1227",
                            "top",
                            3500,
                            1000,
                            "linear",
                            "${circles1}",
                            '294px',
                            '287px'
                        ],
                        [
                            "eid1208",
                            "top",
                            500,
                            1000,
                            "linear",
                            "${circles2}",
                            '348px',
                            '334px'
                        ],
                        [
                            "eid1209",
                            "top",
                            1500,
                            1000,
                            "linear",
                            "${circles2}",
                            '334px',
                            '319px'
                        ],
                        [
                            "eid1211",
                            "top",
                            2500,
                            1000,
                            "linear",
                            "${circles2}",
                            '319px',
                            '336px'
                        ],
                        [
                            "eid1214",
                            "top",
                            3500,
                            1000,
                            "linear",
                            "${circles2}",
                            '336px',
                            '348px'
                        ],
                        [
                            "eid1200",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${circles2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1267",
                            "scaleY",
                            500,
                            4000,
                            "linear",
                            "${circles2}",
                            '1',
                            '1.45'
                        ],
                        [
                            "eid1266",
                            "scaleX",
                            500,
                            4000,
                            "linear",
                            "${circles2}",
                            '1',
                            '1.45'
                        ],
                        [
                            "eid1221",
                            "left",
                            500,
                            1000,
                            "linear",
                            "${circles1}",
                            '994px',
                            '1001px'
                        ],
                        [
                            "eid1223",
                            "left",
                            1500,
                            1000,
                            "linear",
                            "${circles1}",
                            '1001px',
                            '1011px'
                        ],
                        [
                            "eid1224",
                            "left",
                            2500,
                            1000,
                            "linear",
                            "${circles1}",
                            '1011px',
                            '1005px'
                        ],
                        [
                            "eid1226",
                            "left",
                            3500,
                            1000,
                            "linear",
                            "${circles1}",
                            '1005px',
                            '995px'
                        ],
                        [
                            "eid1198",
                            "rotateZ",
                            500,
                            4000,
                            "linear",
                            "${circles2}",
                            '0deg',
                            '-360deg'
                        ],
                        [
                            "eid1201",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${circles1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1207",
                            "left",
                            500,
                            1000,
                            "linear",
                            "${circles2}",
                            '1019px',
                            '1031px'
                        ],
                        [
                            "eid1210",
                            "left",
                            1500,
                            1000,
                            "linear",
                            "${circles2}",
                            '1031px',
                            '1020px'
                        ],
                        [
                            "eid1212",
                            "left",
                            2500,
                            1000,
                            "linear",
                            "${circles2}",
                            '1020px',
                            '1006px'
                        ],
                        [
                            "eid1213",
                            "left",
                            3500,
                            1000,
                            "linear",
                            "${circles2}",
                            '1006px',
                            '1019px'
                        ]
                    ]
                }
            },
            "bloques-smc": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['91px', '-294px', '1500px', '700px', 'auto', 'auto'],
                            type: 'rect',
                            opacity: '0',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            transform: [[], [], [], ['2.5', '2.5']],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            userClass: '',
                            type: 'image',
                            id: 'identificar-bloques_calificar',
                            rect: ['677px', '0px', '102px', '59px', 'auto', 'auto'],
                            transform: [[], [], [], ['3', '3']],
                            fill: ['rgba(0,0,0,0)', 'images/identificar-bloques_calificar.svg', '0px', '0px']
                        },
                        {
                            userClass: '',
                            type: 'image',
                            id: 'identificar-bloques_consignar',
                            rect: ['-165px', '0px', '102px', '59px', 'auto', 'auto'],
                            transform: [[], [], [], ['3', '3']],
                            fill: ['rgba(0,0,0,0)', 'images/identificar-bloques_consignar.svg', '0px', '0px']
                        },
                        {
                            userClass: '',
                            type: 'image',
                            id: 'identificar-bloques_evaluar',
                            rect: ['395px', '0px', '102px', '59px', 'auto', 'auto'],
                            transform: [[], [], [], ['3', '3']],
                            fill: ['rgba(0,0,0,0)', 'images/identificar-bloques_evaluar.svg', '0px', '0px']
                        },
                        {
                            userClass: '',
                            type: 'image',
                            id: 'identificar-bloques_inscribir',
                            rect: ['112px', '0px', '102px', '59px', 'auto', 'auto'],
                            transform: [[], [], [], ['3', '3']],
                            fill: ['rgba(0,0,0,0)', 'images/identificar-bloques_inscribir.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            userClass: 'size-opacity',
                            rect: ['392px', '16px', '27px', '28px', 'auto', 'auto'],
                            id: 'lupita1',
                            opacity: '1',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/lupita1.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            userClass: 'size-opacity',
                            display: 'none',
                            rect: ['855px', '-268px', '31px', '31px', 'auto', 'auto'],
                            id: 'btn-cerrar-popup',
                            fill: ['rgba(0,0,0,0)', 'images/btn-cerrar-popup.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '381px', '59px']
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: true,
                    data: [
                        [
                            "eid3183",
                            "display",
                            750,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3223",
                            "scaleX",
                            0,
                            750,
                            "linear",
                            "${identificar-bloques_inscribir}",
                            '1',
                            '3'
                        ],
                        [
                            "eid3250",
                            "display",
                            750,
                            0,
                            "linear",
                            "${lupita1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid3232",
                            "top",
                            0,
                            750,
                            "linear",
                            "${identificar-bloques_evaluar}",
                            '0px',
                            '-60px'
                        ],
                        [
                            "eid3242",
                            "height",
                            0,
                            750,
                            "linear",
                            "${Rectangle}",
                            '70px',
                            '700px'
                        ],
                        [
                            "eid3235",
                            "left",
                            0,
                            750,
                            "linear",
                            "${identificar-bloques_consignar}",
                            '0px',
                            '-165px'
                        ],
                        [
                            "eid3234",
                            "top",
                            0,
                            750,
                            "linear",
                            "${identificar-bloques_inscribir}",
                            '0px',
                            '-60px'
                        ],
                        [
                            "eid3241",
                            "width",
                            0,
                            750,
                            "linear",
                            "${Rectangle}",
                            '183px',
                            '1500px'
                        ],
                        [
                            "eid3233",
                            "left",
                            0,
                            750,
                            "linear",
                            "${identificar-bloques_inscribir}",
                            '94px',
                            '112px'
                        ],
                        [
                            "eid3227",
                            "scaleX",
                            0,
                            750,
                            "linear",
                            "${identificar-bloques_calificar}",
                            '1',
                            '3'
                        ],
                        [
                            "eid3238",
                            "top",
                            0,
                            750,
                            "linear",
                            "${identificar-bloques_calificar}",
                            '0px',
                            '-60px'
                        ],
                        [
                            "eid3243",
                            "opacity",
                            0,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0.75'
                        ],
                        [
                            "eid3222",
                            "scaleY",
                            0,
                            750,
                            "linear",
                            "${identificar-bloques_evaluar}",
                            '1',
                            '3'
                        ],
                        [
                            "eid3236",
                            "top",
                            0,
                            750,
                            "linear",
                            "${identificar-bloques_consignar}",
                            '0px',
                            '-60px'
                        ],
                        [
                            "eid3228",
                            "scaleY",
                            0,
                            750,
                            "linear",
                            "${identificar-bloques_calificar}",
                            '1',
                            '3'
                        ],
                        [
                            "eid3237",
                            "left",
                            0,
                            750,
                            "linear",
                            "${identificar-bloques_calificar}",
                            '279px',
                            '677px'
                        ],
                        [
                            "eid3225",
                            "scaleX",
                            0,
                            750,
                            "linear",
                            "${identificar-bloques_consignar}",
                            '1',
                            '3'
                        ],
                        [
                            "eid3221",
                            "scaleX",
                            0,
                            750,
                            "linear",
                            "${identificar-bloques_evaluar}",
                            '1',
                            '3'
                        ],
                        [
                            "eid3224",
                            "scaleY",
                            0,
                            750,
                            "linear",
                            "${identificar-bloques_inscribir}",
                            '1',
                            '3'
                        ],
                        [
                            "eid3230",
                            "top",
                            0,
                            750,
                            "linear",
                            "${Rectangle}",
                            '-6px',
                            '-294px'
                        ],
                        [
                            "eid3226",
                            "scaleY",
                            0,
                            750,
                            "linear",
                            "${identificar-bloques_consignar}",
                            '1',
                            '3'
                        ],
                        [
                            "eid3229",
                            "left",
                            0,
                            750,
                            "linear",
                            "${Rectangle}",
                            '91px',
                            '-284px'
                        ],
                        [
                            "eid3247",
                            "opacity",
                            0,
                            750,
                            "linear",
                            "${lupita1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3231",
                            "left",
                            0,
                            750,
                            "linear",
                            "${identificar-bloques_evaluar}",
                            '187px',
                            '395px'
                        ]
                    ]
                }
            },
            "integrado-smc": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['-272px', '-14px', '402px', '142px', 'auto', 'auto'],
                            display: 'none',
                            transform: [[], [], [], ['1.5', '1.5']],
                            opacity: '0.75',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            transform: [[], [], [], ['2.5', '2.5']],
                            userClass: '',
                            id: 'identificar-integrado_administrativa',
                            type: 'image',
                            rect: ['-23px', '0px', '189px', '115px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/identificar-integrado_administrativa.svg', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['2.5', '2.5']],
                            userClass: '',
                            id: 'identificar-integrado_docente',
                            type: 'image',
                            rect: ['488px', '0px', '189px', '115px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/identificar-integrado_docente.svg', '0px', '0px']
                        },
                        {
                            userClass: 'size-opacity',
                            type: 'image',
                            id: 'lupita12',
                            display: 'block',
                            rect: ['401', '40', '27px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lupita1.svg', '0px', '0px']
                        },
                        {
                            userClass: 'size-opacity',
                            type: 'image',
                            id: 'btn-cerrar-popup2',
                            display: 'none',
                            rect: ['869', '-270', '31px', '31px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/btn-cerrar-popup.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '383px', '115px']
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: true,
                    data: [
                        [
                            "eid3418",
                            "display",
                            750,
                            0,
                            "linear",
                            "${lupita12}",
                            'block',
                            'none'
                        ],
                        [
                            "eid3334",
                            "scaleX",
                            0,
                            750,
                            "linear",
                            "${identificar-integrado_administrativa}",
                            '1',
                            '2.5'
                        ],
                        [
                            "eid3336",
                            "left",
                            0,
                            750,
                            "linear",
                            "${identificar-integrado_docente}",
                            '194px',
                            '488px'
                        ],
                        [
                            "eid3321",
                            "height",
                            0,
                            750,
                            "linear",
                            "${Rectangle2}",
                            '142px',
                            '550px'
                        ],
                        [
                            "eid4184",
                            "scaleY",
                            750,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '1.5',
                            '1.5'
                        ],
                        [
                            "eid4183",
                            "scaleX",
                            750,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '1.5',
                            '1.5'
                        ],
                        [
                            "eid3323",
                            "top",
                            0,
                            750,
                            "linear",
                            "${Rectangle2}",
                            '-14px',
                            '-291px'
                        ],
                        [
                            "eid3337",
                            "top",
                            0,
                            750,
                            "linear",
                            "${identificar-integrado_docente}",
                            '0px',
                            '-58px'
                        ],
                        [
                            "eid3319",
                            "opacity",
                            0,
                            750,
                            "linear",
                            "${Rectangle2}",
                            '0',
                            '0.75'
                        ],
                        [
                            "eid3320",
                            "width",
                            0,
                            750,
                            "linear",
                            "${Rectangle2}",
                            '402px',
                            '1200px'
                        ],
                        [
                            "eid3333",
                            "scaleY",
                            0,
                            750,
                            "linear",
                            "${identificar-integrado_docente}",
                            '1',
                            '2.5'
                        ],
                        [
                            "eid3419",
                            "display",
                            750,
                            0,
                            "linear",
                            "${btn-cerrar-popup2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3322",
                            "left",
                            0,
                            750,
                            "linear",
                            "${Rectangle2}",
                            '-6px',
                            '-272px'
                        ],
                        [
                            "eid4185",
                            "display",
                            41,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3332",
                            "scaleX",
                            0,
                            750,
                            "linear",
                            "${identificar-integrado_docente}",
                            '1',
                            '2.5'
                        ],
                        [
                            "eid3339",
                            "top",
                            0,
                            750,
                            "linear",
                            "${identificar-integrado_administrativa}",
                            '0px',
                            '-58px'
                        ],
                        [
                            "eid3335",
                            "scaleY",
                            0,
                            750,
                            "linear",
                            "${identificar-integrado_administrativa}",
                            '1',
                            '2.5'
                        ],
                        [
                            "eid3338",
                            "left",
                            0,
                            750,
                            "linear",
                            "${identificar-integrado_administrativa}",
                            '0px',
                            '-23px'
                        ]
                    ]
                }
            },
            "cadena-smc": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['1.5', '1.5']],
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '411px', '148px', 'auto', 'auto'],
                            display: 'none',
                            type: 'rect',
                            opacity: '0',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['107px', '-69px', '411px', '148px', 'auto', 'auto'],
                            id: 'identificar-cadena',
                            userClass: '',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/identificar-cadena.svg', '0px', '0px']
                        },
                        {
                            rect: ['420px', '68px', '27px', '28px', 'auto', 'auto'],
                            id: 'lupita13',
                            userClass: 'size-opacity',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lupita1.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            userClass: 'size-opacity',
                            display: 'none',
                            rect: ['876', '-254', '31px', '31px', 'auto', 'auto'],
                            id: 'btn-cerrar-popup3',
                            fill: ['rgba(0,0,0,0)', 'images/btn-cerrar-popup.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '411px', '148px']
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: true,
                    data: [
                        [
                            "eid3363",
                            "left",
                            0,
                            750,
                            "linear",
                            "${identificar-cadena}",
                            '0px',
                            '107px'
                        ],
                        [
                            "eid3360",
                            "opacity",
                            0,
                            750,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '0.75'
                        ],
                        [
                            "eid4188",
                            "display",
                            41,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3358",
                            "left",
                            0,
                            750,
                            "linear",
                            "${Rectangle3}",
                            '0px',
                            '-272px'
                        ],
                        [
                            "eid3368",
                            "top",
                            0,
                            750,
                            "linear",
                            "${lupita13}",
                            '68px',
                            '363px'
                        ],
                        [
                            "eid3367",
                            "left",
                            0,
                            750,
                            "linear",
                            "${lupita13}",
                            '420px',
                            '429px'
                        ],
                        [
                            "eid3361",
                            "scaleX",
                            0,
                            750,
                            "linear",
                            "${identificar-cadena}",
                            '1',
                            '2'
                        ],
                        [
                            "eid3357",
                            "height",
                            0,
                            750,
                            "linear",
                            "${Rectangle3}",
                            '148px',
                            '550px'
                        ],
                        [
                            "eid3359",
                            "top",
                            0,
                            750,
                            "linear",
                            "${Rectangle3}",
                            '0px',
                            '-270px'
                        ],
                        [
                            "eid3364",
                            "top",
                            0,
                            750,
                            "linear",
                            "${identificar-cadena}",
                            '0px',
                            '-69px'
                        ],
                        [
                            "eid4186",
                            "scaleX",
                            750,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '1.5',
                            '1.5'
                        ],
                        [
                            "eid3369",
                            "display",
                            750,
                            0,
                            "linear",
                            "${btn-cerrar-popup3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3356",
                            "width",
                            0,
                            750,
                            "linear",
                            "${Rectangle3}",
                            '411px',
                            '1200px'
                        ],
                        [
                            "eid4187",
                            "scaleY",
                            750,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '1.5',
                            '1.5'
                        ],
                        [
                            "eid3362",
                            "scaleY",
                            0,
                            750,
                            "linear",
                            "${identificar-cadena}",
                            '1',
                            '2'
                        ]
                    ]
                }
            },
            "aleman-smc": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['1.5', '1.5']],
                            id: 'Rectangle4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['-308px', '-274px', '27px', '19px', 'auto', 'auto'],
                            display: 'none',
                            type: 'rect',
                            opacity: '0',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['-16px', '-174px', '327px', '199px', 'auto', 'auto'],
                            id: 'identificar-aleman',
                            userClass: '',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/identificar-aleman.gif', '0px', '0px']
                        },
                        {
                            type: 'image',
                            userClass: 'size-opacity',
                            display: 'none',
                            rect: ['842', '-230', '31px', '31px', 'auto', 'auto'],
                            id: 'btn-cerrar-popup4',
                            fill: ['rgba(0,0,0,0)', 'images/btn-cerrar-popup.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            userClass: 'size-opacity',
                            rect: ['356', '68', '27px', '28px', 'auto', 'auto'],
                            id: 'lupita14',
                            opacity: '1',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/lupita1.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '327px', '199px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid6847",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${identificar-aleman}",
                            '1',
                            '1'
                        ],
                        [
                            "eid6848",
                            "scaleY",
                            1000,
                            0,
                            "linear",
                            "${identificar-aleman}",
                            '1',
                            '1'
                        ],
                        [
                            "eid4191",
                            "scaleY",
                            1000,
                            0,
                            "linear",
                            "${Rectangle4}",
                            '1.5',
                            '1.5'
                        ],
                        [
                            "eid3383",
                            "width",
                            0,
                            1000,
                            "linear",
                            "${Rectangle4}",
                            '27px',
                            '1200px'
                        ],
                        [
                            "eid3388",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${Rectangle4}",
                            '0',
                            '0.75'
                        ],
                        [
                            "eid3385",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${Rectangle4}",
                            '137px',
                            '-308px'
                        ],
                        [
                            "eid6845",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${identificar-aleman}",
                            '1',
                            '1'
                        ],
                        [
                            "eid6846",
                            "scaleX",
                            1000,
                            0,
                            "linear",
                            "${identificar-aleman}",
                            '1',
                            '1'
                        ],
                        [
                            "eid4190",
                            "scaleX",
                            1000,
                            0,
                            "linear",
                            "${Rectangle4}",
                            '1.5',
                            '1.5'
                        ],
                        [
                            "eid3390",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${lupita14}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3378",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${identificar-aleman}",
                            '0px',
                            '-174px'
                        ],
                        [
                            "eid6852",
                            "height",
                            0,
                            1000,
                            "linear",
                            "${identificar-aleman}",
                            '199px',
                            '400px'
                        ],
                        [
                            "eid3391",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${lupita14}",
                            'block',
                            'none'
                        ],
                        [
                            "eid3377",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${identificar-aleman}",
                            '0px',
                            '-16px'
                        ],
                        [
                            "eid6851",
                            "width",
                            0,
                            1000,
                            "linear",
                            "${identificar-aleman}",
                            '327px',
                            '700px'
                        ],
                        [
                            "eid3392",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${btn-cerrar-popup4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3386",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${Rectangle4}",
                            '89px',
                            '-274px'
                        ],
                        [
                            "eid4189",
                            "display",
                            35,
                            0,
                            "linear",
                            "${Rectangle4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3384",
                            "height",
                            0,
                            1000,
                            "linear",
                            "${Rectangle4}",
                            '19px',
                            '550px'
                        ]
                    ]
                }
            },
            "caracterizarill1-smc": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['1.5', '1.5']],
                            rect: ['208px', '112px', '28px', '22px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            id: 'Rectangle5',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['22px', '0px', '361px', '199px', 'auto', 'auto'],
                            id: 'caracterizar-1-il1',
                            userClass: 'size-opacity',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/caracterizar-1-il1.svg', '0px', '0px']
                        },
                        {
                            rect: ['155px', '204px', '119px', '28px', 'auto', 'auto'],
                            id: 'clic-ampliar3',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/clic-ampliar.svg', '0px', '0px']
                        },
                        {
                            rect: ['885', '-154', '31px', '31px', 'auto', 'auto'],
                            userClass: 'size-opacity',
                            id: 'btn-cerrar-popup5',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/btn-cerrar-popup.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '406px', '224px']
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: true,
                    data: [
                        [
                            "eid3450",
                            "scaleY",
                            0,
                            750,
                            "linear",
                            "${caracterizar-1-il1}",
                            '1',
                            '2'
                        ],
                        [
                            "eid4704",
                            "height",
                            0,
                            0,
                            "linear",
                            "${caracterizar-1-il1}",
                            '199px',
                            '199px'
                        ],
                        [
                            "eid3462",
                            "opacity",
                            0,
                            750,
                            "linear",
                            "${Rectangle5}",
                            '0',
                            '0.75'
                        ],
                        [
                            "eid4212",
                            "display",
                            69,
                            0,
                            "linear",
                            "${Rectangle5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3451",
                            "left",
                            0,
                            750,
                            "linear",
                            "${caracterizar-1-il1}",
                            '22px',
                            '98px'
                        ],
                        [
                            "eid4706",
                            "display",
                            50,
                            0,
                            "linear",
                            "${clic-ampliar3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid3460",
                            "left",
                            0,
                            750,
                            "linear",
                            "${Rectangle5}",
                            '208px',
                            '-311px'
                        ],
                        [
                            "eid4213",
                            "scaleX",
                            750,
                            0,
                            "linear",
                            "${Rectangle5}",
                            '1.5',
                            '1.5'
                        ],
                        [
                            "eid3458",
                            "width",
                            0,
                            750,
                            "linear",
                            "${Rectangle5}",
                            '28px',
                            '1280px'
                        ],
                        [
                            "eid3452",
                            "top",
                            0,
                            750,
                            "linear",
                            "${caracterizar-1-il1}",
                            '0px',
                            '-9px'
                        ],
                        [
                            "eid4214",
                            "scaleY",
                            750,
                            0,
                            "linear",
                            "${Rectangle5}",
                            '1.5',
                            '1.5'
                        ],
                        [
                            "eid3461",
                            "top",
                            0,
                            750,
                            "linear",
                            "${Rectangle5}",
                            '112px',
                            '-204px'
                        ],
                        [
                            "eid3463",
                            "display",
                            750,
                            0,
                            "linear",
                            "${btn-cerrar-popup5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3449",
                            "scaleX",
                            0,
                            750,
                            "linear",
                            "${caracterizar-1-il1}",
                            '1',
                            '2'
                        ],
                        [
                            "eid3459",
                            "height",
                            0,
                            750,
                            "linear",
                            "${Rectangle5}",
                            '22px',
                            '600px'
                        ],
                        [
                            "eid4705",
                            "width",
                            0,
                            0,
                            "linear",
                            "${caracterizar-1-il1}",
                            '361px',
                            '361px'
                        ]
                    ]
                }
            },
            "caracterizar2-smc": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-325px', '-162px', '31px', '31px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle6',
                            opacity: '0.75',
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['30px', '0px', '347px', '299px', 'auto', 'auto'],
                            id: 'caracterizar-2-t1',
                            userClass: 'size-opacity',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/caracterizar-2-t1.svg', '0px', '0px']
                        },
                        {
                            rect: ['837', '-126', '31px', '31px', 'auto', 'auto'],
                            userClass: 'size-opacity',
                            id: 'btn-cerrar-popup6',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/btn-cerrar-popup.svg', '0px', '0px']
                        },
                        {
                            rect: ['142', '315', '119px', '28px', 'auto', 'auto'],
                            id: 'clic-ampliar4',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/clic-ampliar.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '405px', '349px']
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: true,
                    data: [
                        [
                            "eid3482",
                            "width",
                            0,
                            750,
                            "linear",
                            "${Rectangle6}",
                            '31px',
                            '1280px'
                        ],
                        [
                            "eid4707",
                            "height",
                            0,
                            0,
                            "linear",
                            "${caracterizar-2-t1}",
                            '299px',
                            '299px'
                        ],
                        [
                            "eid3472",
                            "scaleX",
                            0,
                            750,
                            "linear",
                            "${caracterizar-2-t1}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid4708",
                            "width",
                            0,
                            0,
                            "linear",
                            "${caracterizar-2-t1}",
                            '347px',
                            '347px'
                        ],
                        [
                            "eid3484",
                            "left",
                            0,
                            750,
                            "linear",
                            "${Rectangle6}",
                            '226px',
                            '-325px'
                        ],
                        [
                            "eid3476",
                            "display",
                            750,
                            0,
                            "linear",
                            "${btn-cerrar-popup6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3475",
                            "top",
                            0,
                            750,
                            "linear",
                            "${caracterizar-2-t1}",
                            '0px',
                            '-26px'
                        ],
                        [
                            "eid3485",
                            "top",
                            0,
                            750,
                            "linear",
                            "${Rectangle6}",
                            '146px',
                            '-162px'
                        ],
                        [
                            "eid3486",
                            "opacity",
                            750,
                            0,
                            "linear",
                            "${Rectangle6}",
                            '0.75',
                            '0.75'
                        ],
                        [
                            "eid3474",
                            "left",
                            0,
                            750,
                            "linear",
                            "${caracterizar-2-t1}",
                            '30px',
                            '114px'
                        ],
                        [
                            "eid3483",
                            "height",
                            0,
                            750,
                            "linear",
                            "${Rectangle6}",
                            '31px',
                            '600px'
                        ],
                        [
                            "eid3473",
                            "scaleY",
                            0,
                            750,
                            "linear",
                            "${caracterizar-2-t1}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid4709",
                            "display",
                            50,
                            0,
                            "linear",
                            "${clic-ampliar4}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "opciones-mc": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            rect: ['51px', '0px', '1280px', '600px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle',
                            opacity: '0',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['0px', '0px', '40px', '600px', 'auto', 'auto'],
                            userClass: 'op-trigger',
                            type: 'image',
                            id: 'op_op-trigger',
                            display: 'block',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/op_op-trigger.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['-502px', '0', '40px', '600px', 'auto', 'auto'],
                            display: 'none',
                            id: 'op_op-trigger-a',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/op_op-trigger-a.svg', '0px', '0px']
                        },
                        {
                            rect: ['212px', '13px', '156px', '75px', 'auto', 'auto'],
                            id: 'opciones_ad',
                            userClass: 'op-ad',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/opciones/opciones_ad.svg', '0px', '0px']
                        },
                        {
                            rect: ['51px', '95px', '155px', '75px', 'auto', 'auto'],
                            id: 'opciones_bibliografia',
                            userClass: 'op-bi',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/opciones/opciones_bibliografia.svg', '0px', '0px']
                        },
                        {
                            rect: ['51px', '497px', '478px', '93px', 'auto', 'auto'],
                            id: 'opciones_cc',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/opciones/opciones_cc.svg', '0px', '0px']
                        },
                        {
                            rect: ['50px', '178px', '480px', '309px', 'auto', 'auto'],
                            id: 'opciones_creditos',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/opciones/opciones_creditos.svg', '0px', '0px']
                        },
                        {
                            rect: ['374px', '13px', '156px', '75px', 'auto', 'auto'],
                            id: 'opciones_glosario',
                            userClass: 'op-glo',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/opciones/opciones_glosario.svg', '0px', '0px']
                        },
                        {
                            rect: ['51px', '13px', '155px', '75px', 'auto', 'auto'],
                            id: 'opciones_mapa',
                            userClass: 'op-map',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/opciones/opciones_mapa.svg', '0px', '0px']
                        },
                        {
                            rect: ['374px', '95px', '156px', '75px', 'auto', 'auto'],
                            id: 'opciones_oa',
                            userClass: 'op-oa',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/opciones/opciones_oa.svg', '0px', '0px']
                        },
                        {
                            rect: ['212px', '95px', '156px', '75px', 'auto', 'auto'],
                            id: 'opciones_pdf',
                            userClass: 'op-pdf',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/opciones/opciones_pdf.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '40px', '600px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid3862",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3856",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${opciones_cc}",
                            '51px',
                            '-451px'
                        ],
                        [
                            "eid3833",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${op_op-trigger}",
                            'block',
                            'none'
                        ],
                        [
                            "eid3855",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${op_op-trigger}",
                            '0px',
                            '-502px'
                        ],
                        [
                            "eid3861",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${opciones_pdf}",
                            '212px',
                            '-290px'
                        ],
                        [
                            "eid3860",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${opciones_mapa}",
                            '51px',
                            '-451px'
                        ],
                        [
                            "eid3834",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${op_op-trigger-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3859",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${opciones_ad}",
                            '212px',
                            '-290px'
                        ],
                        [
                            "eid3858",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${opciones_oa}",
                            '374px',
                            '-128px'
                        ],
                        [
                            "eid3853",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${opciones_creditos}",
                            '50px',
                            '-452px'
                        ],
                        [
                            "eid3857",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${opciones_bibliografia}",
                            '51px',
                            '-451px'
                        ],
                        [
                            "eid3854",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${opciones_glosario}",
                            '374px',
                            '-128px'
                        ],
                        [
                            "eid3831",
                            "opacity",
                            250,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0.75'
                        ],
                        [
                            "eid3830",
                            "left",
                            250,
                            750,
                            "linear",
                            "${Rectangle}",
                            '51px',
                            '-1240px'
                        ]
                    ]
                }
            },
            "popups-mc": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [1, 'rgba(0,0,0,1)', 'solid'],
                            rect: ['0px', '0px', '0px', '0px', 'auto', 'auto'],
                            overflow: 'hidden',
                            display: 'none',
                            fill: ['rgba(255,255,255,0.85)'],
                            c: [
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['213px', '39px', '851px', '519px', 'auto', 'auto'],
                                id: 'caracterizar-popup-3-ficha',
                                fill: ['rgba(0,0,0,0)', 'images/caracterizar-popup-3-ficha.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['218px', '34px', '842px', '530px', 'auto', 'auto'],
                                id: 'caracterizar-popup-3-flujograma',
                                fill: ['rgba(0,0,0,0)', 'images/caracterizar-popup-3-flujograma.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['218px', '33px', '841px', '532px', 'auto', 'auto'],
                                id: 'caracterizar-popup-3-modelop',
                                fill: ['rgba(0,0,0,0)', 'images/caracterizar-popup-3-modelop.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['190px', '45px', '897px', '508px', 'auto', 'auto'],
                                id: 'caracterizar-popup-3-modeloc',
                                fill: ['rgba(0,0,0,0)', 'images/caracterizar-popup-3-modeloc.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['214px', '38px', '850px', '521px', 'auto', 'auto'],
                                id: 'caracterizar-popup-3-modeloa',
                                fill: ['rgba(0,0,0,0)', 'images/caracterizar-popup-3-modeloa.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                rect: ['227px', '28px', '827px', '541px', 'auto', 'auto'],
                                display: 'none',
                                id: 'caracterizar-popup-3-modelos',
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/caracterizar-popup-3-modelos.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['136px', '69px', '1007px', '463px', 'auto', 'auto'],
                                id: 'elab-popup2-ill1',
                                fill: ['rgba(0,0,0,0)', 'images/elab-popup2-ill1.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['314px', '32px', '650px', '534px', 'auto', 'auto'],
                                id: 'elab-popup2-glb_4-1',
                                fill: ['rgba(0,0,0,0)', 'images/elab-popup2-glb_4-1.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                rect: ['272px', '38px', '733px', '522px', 'auto', 'auto'],
                                display: 'none',
                                id: 'elab-popup2-glb_5-1',
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/elab-popup2-glb_5-1.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['349px', '24px', '579px', '549px', 'auto', 'auto'],
                                id: 'elab-popup2-glb_5-3ill',
                                fill: ['rgba(0,0,0,0)', 'images/elab-popup2-glb_5-3ill.svg', '0px', '0px']
                            },
                            {
                                userClass: 'size-opacity',
                                id: 'btn-cerrar-popup',
                                type: 'image',
                                rect: ['1233px', '18px', '31px', '31px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/btn-cerrar-popup.svg', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '24px', '24px']
                        }
                    }
                },
                timeline: {
                    duration: 3450,
                    autoPlay: true,
                    labels: {
                        "uno": 50,
                        "dos": 400,
                        "tres": 750,
                        "cuatro": 1100,
                        "cinco": 1450,
                        "seis": 1800,
                        "siete": 2150,
                        "ocho": 2500,
                        "nueve": 2850,
                        "diez": 3200
                    },
                    data: [
                        [
                            "eid4418",
                            "display",
                            1450,
                            0,
                            "linear",
                            "${caracterizar-popup-3-modeloa}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4419",
                            "display",
                            1700,
                            0,
                            "linear",
                            "${caracterizar-popup-3-modeloa}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4321",
                            "display",
                            50,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4322",
                            "display",
                            300,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4354",
                            "display",
                            400,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4355",
                            "display",
                            650,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4358",
                            "display",
                            750,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4359",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4362",
                            "display",
                            1100,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4363",
                            "display",
                            1350,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4366",
                            "display",
                            1450,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4367",
                            "display",
                            1700,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4370",
                            "display",
                            1800,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4371",
                            "display",
                            2050,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4372",
                            "display",
                            2150,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4373",
                            "display",
                            2400,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4374",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4375",
                            "display",
                            2750,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4376",
                            "display",
                            2850,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4377",
                            "display",
                            3100,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4378",
                            "display",
                            3200,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4379",
                            "display",
                            3450,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4420",
                            "display",
                            1800,
                            0,
                            "linear",
                            "${caracterizar-popup-3-modelos}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4421",
                            "display",
                            2050,
                            0,
                            "linear",
                            "${caracterizar-popup-3-modelos}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4328",
                            "height",
                            50,
                            200,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '598px'
                        ],
                        [
                            "eid4356",
                            "height",
                            400,
                            200,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '598px'
                        ],
                        [
                            "eid4360",
                            "height",
                            750,
                            200,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '598px'
                        ],
                        [
                            "eid4364",
                            "height",
                            1100,
                            200,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '598px'
                        ],
                        [
                            "eid4368",
                            "height",
                            1450,
                            200,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '598px'
                        ],
                        [
                            "eid4380",
                            "height",
                            1800,
                            200,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '598px'
                        ],
                        [
                            "eid4381",
                            "height",
                            2150,
                            200,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '598px'
                        ],
                        [
                            "eid4382",
                            "height",
                            2500,
                            200,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '598px'
                        ],
                        [
                            "eid4383",
                            "height",
                            2850,
                            200,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '598px'
                        ],
                        [
                            "eid4384",
                            "height",
                            3200,
                            200,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '598px'
                        ],
                        [
                            "eid4428",
                            "display",
                            3200,
                            0,
                            "linear",
                            "${elab-popup2-glb_5-3ill}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4429",
                            "display",
                            3450,
                            0,
                            "linear",
                            "${elab-popup2-glb_5-3ill}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4394",
                            "display",
                            750,
                            0,
                            "linear",
                            "${caracterizar-popup-3-modelop}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4395",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${caracterizar-popup-3-modelop}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4422",
                            "display",
                            2150,
                            0,
                            "linear",
                            "${elab-popup2-ill1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4423",
                            "display",
                            2400,
                            0,
                            "linear",
                            "${elab-popup2-ill1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4396",
                            "display",
                            1100,
                            0,
                            "linear",
                            "${caracterizar-popup-3-modeloc}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4397",
                            "display",
                            1350,
                            0,
                            "linear",
                            "${caracterizar-popup-3-modeloc}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4390",
                            "display",
                            50,
                            0,
                            "linear",
                            "${caracterizar-popup-3-ficha}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4391",
                            "display",
                            300,
                            0,
                            "linear",
                            "${caracterizar-popup-3-ficha}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4326",
                            "width",
                            50,
                            200,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '1278px'
                        ],
                        [
                            "eid4357",
                            "width",
                            400,
                            200,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '1278px'
                        ],
                        [
                            "eid4361",
                            "width",
                            750,
                            200,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '1278px'
                        ],
                        [
                            "eid4365",
                            "width",
                            1100,
                            200,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '1278px'
                        ],
                        [
                            "eid4369",
                            "width",
                            1450,
                            200,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '1278px'
                        ],
                        [
                            "eid4385",
                            "width",
                            1800,
                            200,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '1278px'
                        ],
                        [
                            "eid4386",
                            "width",
                            2150,
                            200,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '1278px'
                        ],
                        [
                            "eid4387",
                            "width",
                            2500,
                            200,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '1278px'
                        ],
                        [
                            "eid4388",
                            "width",
                            2850,
                            200,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '1278px'
                        ],
                        [
                            "eid4389",
                            "width",
                            3200,
                            200,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '1278px'
                        ],
                        [
                            "eid4392",
                            "display",
                            400,
                            0,
                            "linear",
                            "${caracterizar-popup-3-flujograma}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4393",
                            "display",
                            650,
                            0,
                            "linear",
                            "${caracterizar-popup-3-flujograma}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4426",
                            "display",
                            2850,
                            0,
                            "linear",
                            "${elab-popup2-glb_5-1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4427",
                            "display",
                            3100,
                            0,
                            "linear",
                            "${elab-popup2-glb_5-1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4424",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${elab-popup2-glb_4-1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4425",
                            "display",
                            2750,
                            0,
                            "linear",
                            "${elab-popup2-glb_4-1}",
                            'block',
                            'none'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-3282958");
