/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
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
                            id: 'logo-SENA-bgl',
                            display: 'block',
                            type: 'image',
                            rect: ['-128px', '0px', '106px', '600px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"logo-SENA-bgl.svg",'0px','0px']
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
                            id: 'mm-mc',
                            symbolName: 'mm-mc',
                            display: 'none',
                            type: 'rect',
                            rect: ['-249px', '0px', '234', '600', 'auto', 'auto']
                        },
                        {
                            id: 'logoSENA1',
                            type: 'image',
                            rect: ['-114px', '499px', '77px', '75px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"logoSENA1.svg",'0px','0px']
                        },
                        {
                            id: 'titulo-main',
                            display: 'block',
                            type: 'image',
                            rect: ['155px', '-567px', '1026px', '544px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"titulo-main.svg",'0px','0px']
                        },
                        {
                            id: 'gif1',
                            display: 'none',
                            type: 'group',
                            rect: ['246', '81', '845', '463', 'auto', 'auto'],
                            opacity: '1',
                            c: [
                            {
                                id: 'engranaje-gris',
                                type: 'image',
                                rect: ['0px', '0px', '97px', '97px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"engranaje-gris.gif",'0px','0px']
                            },
                            {
                                id: 'engranaje-grisCopy',
                                type: 'image',
                                rect: ['749px', '0px', '97px', '97px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"engranaje-gris.gif",'0px','0px']
                            }]
                        },
                        {
                            id: 'btn-intro',
                            display: 'block',
                            type: 'image',
                            rect: ['573px', '613px', '189px', '45px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"btn-intro.svg",'0px','0px'],
                            userClass: "btn-intro"
                        },
                        {
                            id: 'intro-mc',
                            symbolName: 'intro-mc',
                            display: 'none',
                            type: 'rect',
                            rect: ['287px', '610px', '460', '36', 'auto', 'auto']
                        },
                        {
                            id: 'definicion-mc',
                            symbolName: 'definicion-mc',
                            display: 'none',
                            type: 'rect',
                            rect: ['287px', '630px', '926', '36', 'auto', 'auto']
                        },
                        {
                            id: 'clases-mc',
                            symbolName: 'clases-mc',
                            display: 'none',
                            type: 'rect',
                            rect: ['287px', '614px', '461', '37', 'auto', 'auto']
                        },
                        {
                            id: 'etapas-mc',
                            symbolName: 'etapas-mc',
                            display: 'none',
                            type: 'rect',
                            rect: ['287', '613px', '926', '37', 'auto', 'auto']
                        },
                        {
                            id: 'comentarios-mc',
                            symbolName: 'comentarios-mc',
                            display: 'none',
                            type: 'rect',
                            rect: ['286', '618px', '926', '37', 'auto', 'auto']
                        },
                        {
                            id: 'ejemplos-mc',
                            symbolName: 'ejemplos-mc',
                            display: 'none',
                            type: 'rect',
                            rect: ['286', '632px', '459', '37', 'auto', 'auto']
                        },
                        {
                            id: 'tm-breadcrumb',
                            symbolName: 'tm-breadcrumb',
                            display: 'none',
                            type: 'rect',
                            rect: ['233px', '-47px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'opciones-mc',
                            symbolName: 'opciones-mc',
                            type: 'rect',
                            rect: ['1240px', '0px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'clases-popups',
                            symbolName: 'clases-popups',
                            type: 'rect',
                            rect: ['0', '0', '27', '25', 'auto', 'auto']
                        },
                        {
                            id: 'etapas-popup',
                            symbolName: 'etapas-popup',
                            type: 'rect',
                            rect: ['0', '0', '27', '25', 'auto', 'auto']
                        },
                        {
                            id: 'ejemplos-popup',
                            symbolName: 'ejemplos-popup',
                            type: 'rect',
                            rect: ['0', '0', '27', '25', 'auto', 'auto']
                        },
                        {
                            id: 'titulo',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['272', '611', '320px', '45px', 'auto', 'auto'],
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
                    duration: 84500,
                    autoPlay: true,
                    labels: {
                        "inicio": 1000,
                        "puntos": 1750,
                        "intro": 2000,
                        "definicion": 3000,
                        "clases": 4000,
                        "etapas": 5000,
                        "comentarios": 6000,
                        "ejemplos": 7000
                    },
                    data: [
                        [
                            "eid292",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${etapas-mc}",
                            'none',
                            'block'
                        ],
                        [
                            "eid295",
                            "display",
                            5800,
                            0,
                            "linear",
                            "${etapas-mc}",
                            'block',
                            'none'
                        ],
                        [
                            "eid891",
                            "opacity",
                            1250,
                            250,
                            "linear",
                            "${gif1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid50",
                            "left",
                            3750,
                            0,
                            "linear",
                            "${definicion-mc}",
                            '287px',
                            '287px'
                        ],
                        [
                            "eid890",
                            "display",
                            750,
                            0,
                            "linear",
                            "${gif1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid892",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${gif1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid37",
                            "left",
                            2750,
                            0,
                            "linear",
                            "${intro-mc}",
                            '287px',
                            '287px'
                        ],
                        [
                            "eid768",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${ejemplos-mc}",
                            'none',
                            'block'
                        ],
                        [
                            "eid62",
                            "top",
                            4000,
                            750,
                            "linear",
                            "${clases-mc}",
                            '614px',
                            '83px'
                        ],
                        [
                            "eid28",
                            "top",
                            1000,
                            250,
                            "linear",
                            "${logoSENA1}",
                            '262px',
                            '499px'
                        ],
                        [
                            "eid41",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${bg2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17",
                            "top",
                            1250,
                            250,
                            "linear",
                            "${tm-breadcrumb}",
                            '-47px',
                            '0px'
                        ],
                        [
                            "eid571",
                            "top",
                            6000,
                            750,
                            "linear",
                            "${comentarios-mc}",
                            '618px',
                            '83px'
                        ],
                        [
                            "eid36",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${btn-intro}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11",
                            "left",
                            100,
                            300,
                            "linear",
                            "${logoSENA1}",
                            '-114px',
                            '14px'
                        ],
                        [
                            "eid27",
                            "left",
                            1000,
                            250,
                            "linear",
                            "${logoSENA1}",
                            '14px',
                            '79px'
                        ],
                        [
                            "eid32",
                            "scaleX",
                            1250,
                            250,
                            "linear",
                            "${titulo-main}",
                            '1',
                            '0'
                        ],
                        [
                            "eid24",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${mm-mc}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid21",
                            "top",
                            1250,
                            0,
                            "linear",
                            "${mm-mc}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid34",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${titulo-main}",
                            'block',
                            'none'
                        ],
                        [
                            "eid22",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${mm-mc}",
                            'none',
                            'block'
                        ],
                        [
                            "eid570",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${comentarios-mc}",
                            'none',
                            'block'
                        ],
                        [
                            "eid572",
                            "display",
                            6800,
                            0,
                            "linear",
                            "${comentarios-mc}",
                            'block',
                            'none'
                        ],
                        [
                            "eid770",
                            "top",
                            7000,
                            750,
                            "linear",
                            "${ejemplos-mc}",
                            '632px',
                            '83px'
                        ],
                        [
                            "eid63",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${clases-mc}",
                            'none',
                            'block'
                        ],
                        [
                            "eid220",
                            "display",
                            4800,
                            0,
                            "linear",
                            "${clases-mc}",
                            'block',
                            'none'
                        ],
                        [
                            "eid294",
                            "top",
                            5000,
                            750,
                            "linear",
                            "${etapas-mc}",
                            '613px',
                            '83px'
                        ],
                        [
                            "eid33",
                            "scaleY",
                            1250,
                            250,
                            "linear",
                            "${titulo-main}",
                            '1',
                            '0'
                        ],
                        [
                            "eid43",
                            "top",
                            2000,
                            750,
                            "linear",
                            "${intro-mc}",
                            '610px',
                            '83px'
                        ],
                        [
                            "eid16",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${tm-breadcrumb}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13",
                            "top",
                            700,
                            300,
                            "linear",
                            "${btn-intro}",
                            '613px',
                            '450px'
                        ],
                        [
                            "eid35",
                            "top",
                            1000,
                            500,
                            "linear",
                            "${btn-intro}",
                            '450px',
                            '628px'
                        ],
                        [
                            "eid52",
                            "top",
                            3000,
                            750,
                            "linear",
                            "${definicion-mc}",
                            '630px',
                            '83px'
                        ],
                        [
                            "eid42",
                            "opacity",
                            1000,
                            500,
                            "linear",
                            "${bg2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid23",
                            "left",
                            1000,
                            250,
                            "linear",
                            "${mm-mc}",
                            '-249px',
                            '0px'
                        ],
                        [
                            "eid44",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${intro-mc}",
                            'none',
                            'block'
                        ],
                        [
                            "eid45",
                            "display",
                            2800,
                            0,
                            "linear",
                            "${intro-mc}",
                            'block',
                            'none'
                        ],
                        [
                            "eid29",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${logo-SENA-bgl}",
                            'block',
                            'none'
                        ],
                        [
                            "eid7",
                            "top",
                            400,
                            300,
                            "linear",
                            "${titulo-main}",
                            '-567px',
                            '0px'
                        ],
                        [
                            "eid53",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${definicion-mc}",
                            'none',
                            'block'
                        ],
                        [
                            "eid54",
                            "display",
                            3800,
                            0,
                            "linear",
                            "${definicion-mc}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10",
                            "left",
                            0,
                            400,
                            "linear",
                            "${logo-SENA-bgl}",
                            '-128px',
                            '0px'
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
                            rect: ['-1240px', '0px', '1280px', '600px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            opacity: '0',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            userClass: 'op-trigger',
                            type: 'image',
                            id: 'op_op-trigger',
                            display: 'block',
                            rect: ['0px', '0px', '40px', '600px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/op_op-trigger.svg', '0px', '0px']
                        },
                        {
                            userClass: 'op-trigger',
                            type: 'image',
                            id: 'op_op-trigger-a',
                            display: 'none',
                            rect: ['-502px', '0', '40px', '600px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/op_op-trigger-a.svg', '0px', '0px']
                        },
                        {
                            rect: ['51px', '497px', '478px', '93px', 'auto', 'auto'],
                            id: 'opciones_cc',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/opciones_cc.svg', '0px', '0px']
                        },
                        {
                            rect: ['50px', '178px', '480px', '309px', 'auto', 'auto'],
                            id: 'opciones_creditos',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/opciones_creditos.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'opciones_oa',
                            rect: ['374px', '95px', '156px', '75px', 'auto', 'auto'],
                            userClass: 'op-oa',
                            fill: ['rgba(0,0,0,0)', 'images/opciones_oa.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'opciones_pdf',
                            rect: ['212px', '95px', '156px', '75px', 'auto', 'auto'],
                            userClass: 'op-pdf',
                            fill: ['rgba(0,0,0,0)', 'images/opciones_pdf.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'opciones_bibliografia',
                            rect: ['51px', '95px', '155px', '75px', 'auto', 'auto'],
                            userClass: 'op-bi',
                            fill: ['rgba(0,0,0,0)', 'images/opciones_bibliografia.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'opciones_glosario',
                            rect: ['374px', '13px', '156px', '75px', 'auto', 'auto'],
                            userClass: 'op-glo',
                            fill: ['rgba(0,0,0,0)', 'images/opciones_glosario.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'opciones_ad',
                            rect: ['212px', '13px', '156px', '75px', 'auto', 'auto'],
                            userClass: 'op-ad',
                            fill: ['rgba(0,0,0,0)', 'images/opciones_ad.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'opciones_mapa',
                            rect: ['51px', '13px', '155px', '75px', 'auto', 'auto'],
                            userClass: 'op-map',
                            fill: ['rgba(0,0,0,0)', 'images/opciones_mapa.svg', '0px', '0px']
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
                            200,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3856",
                            "left",
                            900,
                            100,
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
                            "eid3858",
                            "left",
                            700,
                            100,
                            "linear",
                            "${opciones_oa}",
                            '374px',
                            '-128px'
                        ],
                        [
                            "eid3831",
                            "opacity",
                            200,
                            800,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0.75'
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
                            "eid3854",
                            "left",
                            400,
                            100,
                            "linear",
                            "${opciones_glosario}",
                            '374px',
                            '-128px'
                        ],
                        [
                            "eid3859",
                            "left",
                            300,
                            100,
                            "linear",
                            "${opciones_ad}",
                            '212px',
                            '-290px'
                        ],
                        [
                            "eid3853",
                            "left",
                            800,
                            100,
                            "linear",
                            "${opciones_creditos}",
                            '50px',
                            '-452px'
                        ],
                        [
                            "eid3857",
                            "left",
                            500,
                            100,
                            "linear",
                            "${opciones_bibliografia}",
                            '51px',
                            '-451px'
                        ],
                        [
                            "eid3860",
                            "left",
                            200,
                            100,
                            "linear",
                            "${opciones_mapa}",
                            '51px',
                            '-451px'
                        ],
                        [
                            "eid3861",
                            "left",
                            600,
                            100,
                            "linear",
                            "${opciones_pdf}",
                            '212px',
                            '-290px'
                        ],
                        [
                            "eid3855",
                            "left",
                            0,
                            200,
                            "linear",
                            "${op_op-trigger}",
                            '0px',
                            '-502px'
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
                            rect: ['40px', '0px', '967px', '40px', 'auto', 'auto'],
                            id: 'breadcrumb-bar',
                            type: 'image',
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
                            rect: ['54px', '12px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'inicio',
                            text: '<p style=\"margin: 0px;\">Inicio &gt;</p>'
                        },
                        {
                            type: 'text',
                            id: 'intro',
                            text: '<p style=\"margin: 0px;\">Introducción</p>',
                            cursor: 'pointer',
                            rect: ['105px', '12px', 'auto', 'auto', 'auto', 'auto'],
                            display: 'none',
                            align: 'justify',
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            textStyle: ['', '', '', '', 'none']
                        },
                        {
                            type: 'text',
                            id: 'definicion',
                            text: '<p style=\"margin: 0px;\">Definición</p>',
                            cursor: 'pointer',
                            rect: ['105px', '12px', 'auto', 'auto', 'auto', 'auto'],
                            display: 'none',
                            align: 'justify',
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            textStyle: ['', '', '', '', 'none']
                        },
                        {
                            type: 'text',
                            id: 'clases',
                            text: '<p style=\"margin: 0px;\">Clases</p>',
                            cursor: 'pointer',
                            rect: ['105px', '12px', 'auto', 'auto', 'auto', 'auto'],
                            display: 'none',
                            align: 'justify',
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            textStyle: ['', '', '', '', 'none']
                        },
                        {
                            type: 'text',
                            id: 'etapas',
                            text: '<p style=\"margin: 0px;\">Etapas</p>',
                            cursor: 'pointer',
                            rect: ['105px', '12px', 'auto', 'auto', 'auto', 'auto'],
                            display: 'none',
                            align: 'justify',
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            textStyle: ['', '', '', '', 'none']
                        },
                        {
                            type: 'text',
                            id: 'comentarios',
                            text: '<p style=\"margin: 0px;\">Comentarios</p>',
                            cursor: 'pointer',
                            rect: ['105px', '12px', 'auto', 'auto', 'auto', 'auto'],
                            display: 'none',
                            align: 'justify',
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            textStyle: ['', '', '', '', 'none']
                        },
                        {
                            type: 'text',
                            id: 'ejemplos',
                            text: '<p style=\"margin: 0px;\">Ejemplos</p>',
                            cursor: 'pointer',
                            rect: ['105px', '12px', 'auto', 'auto', 'auto', 'auto'],
                            display: 'none',
                            align: 'justify',
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            textStyle: ['', '', '', '', 'none']
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
                        "definicion": 500,
                        "clases": 750,
                        "etapas": 1000,
                        "comentarios": 1250,
                        "ejemplos": 1500
                    },
                    data: [
                        [
                            "eid3747",
                            "display",
                            1384,
                            0,
                            "linear",
                            "${ejemplos}",
                            'none',
                            'block'
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
                            "eid3739",
                            "display",
                            631,
                            0,
                            "linear",
                            "${clases}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3740",
                            "display",
                            851,
                            0,
                            "linear",
                            "${clases}",
                            'block',
                            'none'
                        ],
                        [
                            "eid3745",
                            "display",
                            1112,
                            0,
                            "linear",
                            "${comentarios}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3746",
                            "display",
                            1384,
                            0,
                            "linear",
                            "${comentarios}",
                            'block',
                            'none'
                        ],
                        [
                            "eid3743",
                            "display",
                            851,
                            0,
                            "linear",
                            "${etapas}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3744",
                            "display",
                            1112,
                            0,
                            "linear",
                            "${etapas}",
                            'block',
                            'none'
                        ],
                        [
                            "eid3741",
                            "display",
                            411,
                            0,
                            "linear",
                            "${definicion}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3742",
                            "display",
                            631,
                            0,
                            "linear",
                            "${definicion}",
                            'block',
                            'none'
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
                            id: 'mm-bg',
                            type: 'image',
                            rect: ['0px', '0px', '234px', '600px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/mm-bg.svg', '0px', '0px']
                        },
                        {
                            id: 'mm-titulo',
                            type: 'image',
                            rect: ['14px', '-87px', '205px', '68px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/mm-titulo.svg', '0px', '0px']
                        },
                        {
                            rect: ['264px', '120px', '248px', '59px', 'auto', 'auto'],
                            userClass: 'mm-intro',
                            type: 'image',
                            id: 'mm_intro',
                            opacity: '0',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/mm_intro.svg', '0px', '0px']
                        },
                        {
                            rect: ['0', '120', '248px', '59px', 'auto', 'auto'],
                            id: 'mm_intro-a',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/mm_intro-a.svg', '0px', '0px']
                        },
                        {
                            rect: ['264px', '179px', '248px', '59px', 'auto', 'auto'],
                            userClass: 'mm-definicion',
                            type: 'image',
                            id: 'mm_definicion',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/mm_definicion.svg', '0px', '0px']
                        },
                        {
                            rect: ['0', '179', '248px', '59px', 'auto', 'auto'],
                            id: 'mm_definicion-a',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/mm_definicion-a.svg', '0px', '0px']
                        },
                        {
                            rect: ['264px', '238px', '248px', '59px', 'auto', 'auto'],
                            userClass: 'mm-clases',
                            type: 'image',
                            id: 'mm_clases',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/mm_clases.svg', '0px', '0px']
                        },
                        {
                            rect: ['0', '238', '248px', '59px', 'auto', 'auto'],
                            id: 'mm_clases-a',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/mm_clases-a.svg', '0px', '0px']
                        },
                        {
                            rect: ['264px', '297px', '248px', '59px', 'auto', 'auto'],
                            userClass: 'mm-etapas',
                            type: 'image',
                            id: 'mm_etapas',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/mm_etapas.svg', '0px', '0px']
                        },
                        {
                            rect: ['0', '297', '248px', '59px', 'auto', 'auto'],
                            id: 'mm_etapas-a',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/mm_etapas-a.svg', '0px', '0px']
                        },
                        {
                            rect: ['264px', '356px', '248px', '59px', 'auto', 'auto'],
                            userClass: 'mm-comentarios',
                            type: 'image',
                            id: 'mm_comentarios',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/mm_comentarios.svg', '0px', '0px']
                        },
                        {
                            rect: ['0', '356', '248px', '59px', 'auto', 'auto'],
                            id: 'mm_comentarios-a',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/mm_comentarios-a.svg', '0px', '0px']
                        },
                        {
                            rect: ['264px', '415px', '248px', '59px', 'auto', 'auto'],
                            userClass: 'mm-ejemplos',
                            type: 'image',
                            id: 'mm_ejemplos',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/mm_ejemplos.svg', '0px', '0px']
                        },
                        {
                            rect: ['0', '415', '248px', '59px', 'auto', 'auto'],
                            id: 'mm_ejemplos-a',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/mm_ejemplos-a.svg', '0px', '0px']
                        },
                        {
                            id: 'logoSENA1BG2',
                            type: 'image',
                            rect: ['0px', '474px', '234px', '126px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/logoSENA1BG.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '234px', '600px']
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: true,
                    labels: {
                        "intro": 1250,
                        "definicion": 1500,
                        "clases": 1750,
                        "etapas": 2000,
                        "comentarios": 2250,
                        "ejemplos": 2500
                    },
                    data: [
                        [
                            "eid197",
                            "opacity",
                            820,
                            180,
                            "linear",
                            "${mm_ejemplos}",
                            '0',
                            '1'
                        ],
                        [
                            "eid182",
                            "opacity",
                            0,
                            180,
                            "linear",
                            "${mm_intro}",
                            '0',
                            '1'
                        ],
                        [
                            "eid192",
                            "display",
                            652,
                            0,
                            "linear",
                            "${mm_comentarios}",
                            'none',
                            'block'
                        ],
                        [
                            "eid200",
                            "display",
                            1367,
                            0,
                            "linear",
                            "${mm_definicion-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid201",
                            "display",
                            1609,
                            0,
                            "linear",
                            "${mm_definicion-a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid180",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mm_intro}",
                            'block',
                            'block'
                        ],
                        [
                            "eid168",
                            "left",
                            320,
                            180,
                            "linear",
                            "${mm_clases}",
                            '264px',
                            '0px'
                        ],
                        [
                            "eid188",
                            "opacity",
                            320,
                            180,
                            "linear",
                            "${mm_clases}",
                            '0',
                            '1'
                        ],
                        [
                            "eid208",
                            "display",
                            2372,
                            0,
                            "linear",
                            "${mm_ejemplos-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid183",
                            "display",
                            158,
                            0,
                            "linear",
                            "${mm_definicion}",
                            'none',
                            'block'
                        ],
                        [
                            "eid204",
                            "display",
                            1874,
                            0,
                            "linear",
                            "${mm_etapas-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid205",
                            "display",
                            2106,
                            0,
                            "linear",
                            "${mm_etapas-a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid170",
                            "left",
                            820,
                            180,
                            "linear",
                            "${mm_ejemplos}",
                            '264px',
                            '0px'
                        ],
                        [
                            "eid164",
                            "left",
                            158,
                            180,
                            "linear",
                            "${mm_definicion}",
                            '264px',
                            '0px'
                        ],
                        [
                            "eid172",
                            "left",
                            0,
                            180,
                            "linear",
                            "${mm_intro}",
                            '264px',
                            '0px'
                        ],
                        [
                            "eid191",
                            "opacity",
                            486,
                            180,
                            "linear",
                            "${mm_etapas}",
                            '0',
                            '1'
                        ],
                        [
                            "eid185",
                            "opacity",
                            158,
                            180,
                            "linear",
                            "${mm_definicion}",
                            '0',
                            '1'
                        ],
                        [
                            "eid206",
                            "display",
                            2106,
                            0,
                            "linear",
                            "${mm_comentarios-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid207",
                            "display",
                            2372,
                            0,
                            "linear",
                            "${mm_comentarios-a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid189",
                            "display",
                            486,
                            0,
                            "linear",
                            "${mm_etapas}",
                            'none',
                            'block'
                        ],
                        [
                            "eid202",
                            "display",
                            1609,
                            0,
                            "linear",
                            "${mm_clases-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid203",
                            "display",
                            1874,
                            0,
                            "linear",
                            "${mm_clases-a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid195",
                            "display",
                            820,
                            0,
                            "linear",
                            "${mm_ejemplos}",
                            'none',
                            'block'
                        ],
                        [
                            "eid179",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${mm-titulo}",
                            '-87px',
                            '27px'
                        ],
                        [
                            "eid174",
                            "left",
                            652,
                            180,
                            "linear",
                            "${mm_comentarios}",
                            '264px',
                            '0px'
                        ],
                        [
                            "eid194",
                            "opacity",
                            652,
                            180,
                            "linear",
                            "${mm_comentarios}",
                            '0',
                            '1'
                        ],
                        [
                            "eid186",
                            "display",
                            320,
                            0,
                            "linear",
                            "${mm_clases}",
                            'none',
                            'block'
                        ],
                        [
                            "eid176",
                            "left",
                            486,
                            180,
                            "linear",
                            "${mm_etapas}",
                            '264px',
                            '0px'
                        ],
                        [
                            "eid198",
                            "display",
                            1200,
                            0,
                            "linear",
                            "${mm_intro-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid199",
                            "display",
                            1367,
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
                            id: 'intro-titulo2',
                            type: 'image',
                            rect: ['0px', '0px', '460px', '36px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/intro-titulo.svg', '0px', '0px']
                        },
                        {
                            rect: ['-766px', '44px', '460px', '423px', 'auto', 'auto'],
                            textStyle: ['', '', '15px', '', ''],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​La ingeniería de requerimientos es una labor fundamental para el éxito de cualquier proyecto de desarrollo de software. A través de un proceso sistemático, cuantificable y medible se determinan los servicios que el software como producto deberá cumplir para satisfacer a todos los interesados o “stakeholders” del proyecto.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Hoy en día los proyectos de software se están apoyando cada vez más en los conceptos y técnicas provistos por el Project Management Body of Knowledge (PMBOK) del Project Management Institute (PMI). Bajo este enfoque la especificación de requerimientos sería el “alcance” o trabajo a realizar del proyecto.&nbsp;</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">La especificación de requerimientos también puede ser vista como el “Qué” o razón de ser del proyecto.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Es muy importante que el analista tenga presente las limitaciones de recursos de todo proyecto al momento de especificar los requerimientos de lo contrario puede estar ofreciendo un producto inalcanzable o inviable.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">A pesar del enfoque sistémico que aporta la ingeniería de requerimientos esta labor no está exenta de problemas tales como: que el cliente no tiene claro los requerimientos, fallas al momento de comunicar los mismos, entre otros.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">En esta ayuda didáctica se suministrarán al aprendiz conceptos y técnicas usadas para la especificación de requerimientos que lo guiarán y apoyarán en el  desarrollo del sistema de información en curso.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin:0px\">​</p>',
                            align: 'justify',
                            type: 'text'
                        },
                        {
                            id: 'intro-ill',
                            type: 'image',
                            rect: ['1039px', '0px', '457px', '414px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/intro-ill.svg', '0px', '0px']
                        },
                        {
                            rect: ['641px', '309px', '140px', '140px', 'auto', 'auto'],
                            id: 'cruz-negra2',
                            transform: [[], [], [], ['0.2', '0.2']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cruz-negra.gif', '0px', '0px']
                        },
                        {
                            rect: ['824px', '-34px', '140px', '140px', 'auto', 'auto'],
                            id: 'cruz-negra2Copy3',
                            transform: [[], [], [], ['0.25', '0.25']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cruz-negra.gif', '0px', '0px']
                        },
                        {
                            rect: ['517px', '-19px', '140px', '140px', 'auto', 'auto'],
                            id: 'cruz-negra2Copy',
                            transform: [[], [], [], ['0.25', '0.25']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cruz-negra.gif', '0px', '0px']
                        },
                        {
                            rect: ['852px', '187px', '140px', '140px', 'auto', 'auto'],
                            id: 'cruz-negra2Copy2',
                            transform: [[], [], [], ['0.25', '0.25']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cruz-negra.gif', '0px', '0px']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/introduccion.mp3'],
                            userClass: 'pista-audio',
                            id: 'introduccion',
                            rect: ['70px', '460px', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '460px', '36px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid49",
                            "left",
                            500,
                            500,
                            "linear",
                            "${Text}",
                            '-766px',
                            '0px'
                        ],
                        [
                            "eid5",
                            "line-height",
                            500,
                            0,
                            "linear",
                            "${Text}",
                            '15px',
                            '15px'
                        ],
                        [
                            "eid4",
                            "line-height",
                            1000,
                            0,
                            "linear",
                            "${Text}",
                            '15px',
                            '15px'
                        ],
                        [
                            "eid48",
                            "left",
                            0,
                            500,
                            "linear",
                            "${intro-ill}",
                            '1039px',
                            '483px'
                        ],
                        [
                            "eid893",
                            "display",
                            750,
                            0,
                            "linear",
                            "${introduccion}",
                            'none',
                            'block'
                        ],
                        [
                            "eid897",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${Text}",
                            '44px',
                            '44px'
                        ],
                        [
                            "eid894",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${introduccion}",
                            '70px',
                            '70px'
                        ],
                        [
                            "eid898",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${introduccion}",
                            '460px',
                            '460px'
                        ]
                    ]
                }
            },
            "definicion-mc": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '926px', '36px', 'auto', 'auto'],
                            id: 'definicion-titulo',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/definicion-titulo.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['1049px', '53px', '926px', '71px', 'auto', 'auto'],
                            align: 'justify',
                            id: 'Text2',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​“La ingeniería de requerimientos es un proceso sistemático mediante el cual se determinan los servicios que el software como producto debe suministrar y las restricciones sobre las cuales operará”. (BOURQUE, 2014)</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Aquí se introduce el término “servicio” que en algunos casos es una forma más descriptiva de llamar a los requerimientos&nbsp;</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p>',
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            rect: ['292px', '554px', '342px', '341px', 'auto', 'auto'],
                            id: 'definicion-ill1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/definicion-ill1.svg', '0px', '0px']
                        },
                        {
                            rect: ['0', '145', '279', '417', 'auto', 'auto'],
                            id: 'dp1mc',
                            symbolName: 'dp1mc',
                            type: 'rect'
                        },
                        {
                            rect: ['583', '124', '343', '459', 'auto', 'auto'],
                            id: 'dp2mc',
                            symbolName: 'dp2mc',
                            type: 'rect'
                        },
                        {
                            type: 'image',
                            id: 'engranaje-gris2',
                            rect: ['529px', '276px', '97px', '97px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.6', '0.6']],
                            fill: ['rgba(0,0,0,0)', 'images/engranaje-gris.gif', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'cruz-negra2',
                            rect: ['249px', '183px', '140px', '140px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.2', '0.2']],
                            fill: ['rgba(0,0,0,0)', 'images/cruz-negra.gif', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'cruz-negra2Copy',
                            rect: ['537px', '183px', '140px', '140px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.2', '0.2']],
                            fill: ['rgba(0,0,0,0)', 'images/cruz-negra.gif', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'cruz-negra2Copy2',
                            rect: ['393px', '378px', '140px', '140px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.2', '0.2']],
                            fill: ['rgba(0,0,0,0)', 'images/cruz-negra.gif', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '926px', '36px']
                        }
                    }
                },
                timeline: {
                    duration: 4750,
                    autoPlay: true,
                    data: [
                        [
                            "eid56",
                            "top",
                            750,
                            250,
                            "linear",
                            "${definicion-ill1}",
                            '554px',
                            '136px'
                        ],
                        [
                            "eid58",
                            "left",
                            500,
                            250,
                            "linear",
                            "${Text2}",
                            '1049px',
                            '0px'
                        ],
                        [
                            "eid59",
                            "top",
                            500,
                            0,
                            "linear",
                            "${Text2}",
                            '53px',
                            '53px'
                        ]
                    ]
                }
            },
            "clases-mc": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '461px', '37px', 'auto', 'auto'],
                            id: 'clases-titulo',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/clases-titulo.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text3',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            display: 'none',
                            text: '<p style=\"margin: 0px;\">​Lo requerimientos o servicios que el software debe suministrar se pueden clasificar en:</p>',
                            rect: ['0px', '-134px', '461px', '37px', 'auto', 'auto'],
                            align: 'justify'
                        },
                        {
                            rect: ['709px', '45px', '140px', '140px', 'auto', 'auto'],
                            id: 'cruz-negra3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cruz-negra.gif', '0px', '0px']
                        },
                        {
                            rect: ['511px', '289px', '97px', '97px', 'auto', 'auto'],
                            id: 'engranaje-gris3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/engranaje-gris.gif', '0px', '0px']
                        },
                        {
                            rect: ['505', '-19', '434', '605', 'auto', 'auto'],
                            id: 'cp1-mc',
                            symbolName: 'cp1-mc',
                            type: 'rect'
                        },
                        {
                            type: 'image',
                            id: 'clases-sm-funcionales',
                            rect: ['1028px', '143px', '402px', '66px', 'auto', 'auto'],
                            userClass: 'size-opacity',
                            fill: ['rgba(0,0,0,0)', 'images/clases-sm-funcionales.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'clases-sm-no-funcionales',
                            rect: ['-710px', '224px', '402px', '66px', 'auto', 'auto'],
                            userClass: 'size-opacity',
                            fill: ['rgba(0,0,0,0)', 'images/clases-sm-no-funcionales.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'clases-sm-caracteristicas',
                            rect: ['1028px', '304px', '402px', '66px', 'auto', 'auto'],
                            userClass: 'size-opacity',
                            fill: ['rgba(0,0,0,0)', 'images/clases-sm-caracteristicas.svg', '0px', '0px']
                        },
                        {
                            rect: ['150px', '559px', '162px', '113px', 'auto', 'auto'],
                            id: 'clic-sobre',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/clic-sobre.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '461px', '37px']
                        }
                    }
                },
                timeline: {
                    duration: 4750,
                    autoPlay: true,
                    data: [
                        [
                            "eid213",
                            "left",
                            500,
                            500,
                            "linear",
                            "${clases-sm-funcionales}",
                            '1028px',
                            '30px'
                        ],
                        [
                            "eid214",
                            "left",
                            500,
                            500,
                            "linear",
                            "${clases-sm-no-funcionales}",
                            '-710px',
                            '30px'
                        ],
                        [
                            "eid212",
                            "left",
                            500,
                            500,
                            "linear",
                            "${clases-sm-caracteristicas}",
                            '1028px',
                            '30px'
                        ],
                        [
                            "eid219",
                            "display",
                            10,
                            0,
                            "linear",
                            "${Text3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid216",
                            "top",
                            250,
                            250,
                            "linear",
                            "${clic-sobre}",
                            '559px',
                            '386px'
                        ],
                        [
                            "eid218",
                            "top",
                            0,
                            250,
                            "linear",
                            "${Text3}",
                            '-134px',
                            '53px'
                        ]
                    ]
                }
            },
            "clases-popups": {
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
                            rect: ['0px', '0px', '27px', '25px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            opacity: '0',
                            fill: ['rgba(0,0,0,0.90)']
                        },
                        {
                            type: 'image',
                            rect: ['35px', '108px', '1210px', '384px', 'auto', 'auto'],
                            id: 'clases-popup-funcionales',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/clases-popup-funcionales.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['25px', '28px', '1153px', '509px', 'auto', 'auto'],
                            id: 'clases-popup-no-funcionales',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/clases-popup-no-funcionales.svg', '0px', '0px']
                        },
                        {
                            userClass: 'size-opacity',
                            type: 'image',
                            id: 'clases-popup-no-funcional-producto-btn',
                            display: 'none',
                            rect: ['1308px', '162px', '314px', '52px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/clases-popup-no-funcional-producto-btn.svg', '0px', '0px']
                        },
                        {
                            userClass: 'size-opacity',
                            type: 'image',
                            id: 'clases-popup-no-funcional-organizaciones-btn',
                            display: 'none',
                            rect: ['1308px', '222px', '314px', '52px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/clases-popup-no-funcional-organizaciones-btn.svg', '0px', '0px']
                        },
                        {
                            userClass: 'size-opacity',
                            type: 'image',
                            id: 'clases-popup-no-funcional-externos-btn',
                            display: 'none',
                            rect: ['1308px', '282px', '314px', '52px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/clases-popup-no-funcional-externos-btn.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['82px', '54px', '1115px', '491px', 'auto', 'auto'],
                            id: 'clases-popup-no-funcional-producto',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/clases-popup-no-funcional-producto.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['84px', '-224px', '206px', '206px', 'auto', 'auto'],
                            id: 'clases-popup-no-funcional-producto-desempeno',
                            fill: ['rgba(0,0,0,0)', 'images/clases-popup-no-funcional-producto-desempeno.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['378px', '-223px', '206px', '206px', 'auto', 'auto'],
                            id: 'clases-popup-no-funcional-producto-confiabilidad',
                            fill: ['rgba(0,0,0,0)', 'images/clases-popup-no-funcional-producto-confiabilidad.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['669px', '-223px', '206px', '206px', 'auto', 'auto'],
                            id: 'clases-popup-no-funcional-producto-portabilidad',
                            fill: ['rgba(0,0,0,0)', 'images/clases-popup-no-funcional-producto-portabilidad.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['961px', '-223px', '206px', '206px', 'auto', 'auto'],
                            id: 'clases-popup-no-funcional-producto-facilidad',
                            fill: ['rgba(0,0,0,0)', 'images/clases-popup-no-funcional-producto-facilidad.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['19px', '0px', '1261px', '603px', 'auto', 'auto'],
                            id: 'clases-popup-no-funcionales-organizaciones',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/clases-popup-no-funcionales-organizaciones.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['34px', '31px', '1211px', '538px', 'auto', 'auto'],
                            id: 'clases-popup-no-funcionales-externos',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/clases-popup-no-funcionales-externos.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['29px', '26px', '1222px', '548px', 'auto', 'auto'],
                            id: 'clases-popup-caracteristicas',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/clases-popup-caracteristicas.svg', '0px', '0px']
                        },
                        {
                            userClass: 'size-opacity',
                            type: 'image',
                            id: 'btn-cerrar-popup',
                            display: 'none',
                            rect: ['1300px', '-47px', '35px', '35px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/btn-cerrar-popup.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '27px', '25px']
                        }
                    }
                },
                timeline: {
                    duration: 6100,
                    autoPlay: true,
                    labels: {
                        "funcionales": 250,
                        "no-funcionales": 1250,
                        "producto": 2250,
                        "organizaciones": 3250,
                        "externos": 4250,
                        "caracteristicas": 5250
                    },
                    data: [
                        [
                            "eid76",
                            "display",
                            250,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'none',
                            'block'
                        ],
                        [
                            "eid77",
                            "display",
                            1100,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'block',
                            'none'
                        ],
                        [
                            "eid82",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'none',
                            'block'
                        ],
                        [
                            "eid83",
                            "display",
                            5100,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'block',
                            'none'
                        ],
                        [
                            "eid91",
                            "display",
                            5250,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'none',
                            'block'
                        ],
                        [
                            "eid92",
                            "display",
                            6100,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'block',
                            'none'
                        ],
                        [
                            "eid67",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid71",
                            "display",
                            1100,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid86",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid87",
                            "display",
                            5100,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid95",
                            "display",
                            5250,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid96",
                            "display",
                            6100,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid102",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${clases-popup-no-funcionales}",
                            'none',
                            'block'
                        ],
                        [
                            "eid103",
                            "display",
                            2100,
                            0,
                            "linear",
                            "${clases-popup-no-funcionales}",
                            'block',
                            'none'
                        ],
                        [
                            "eid147",
                            "opacity",
                            3250,
                            750,
                            "linear",
                            "${clases-popup-no-funcionales-organizaciones}",
                            '0',
                            '1'
                        ],
                        [
                            "eid80",
                            "display",
                            250,
                            0,
                            "linear",
                            "${clases-popup-funcionales}",
                            'none',
                            'block'
                        ],
                        [
                            "eid81",
                            "display",
                            1100,
                            0,
                            "linear",
                            "${clases-popup-funcionales}",
                            'block',
                            'none'
                        ],
                        [
                            "eid114",
                            "display",
                            1750,
                            0,
                            "linear",
                            "${clases-popup-no-funcional-externos-btn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid117",
                            "display",
                            2100,
                            0,
                            "linear",
                            "${clases-popup-no-funcional-externos-btn}",
                            'block',
                            'none'
                        ],
                        [
                            "eid69",
                            "width",
                            250,
                            750,
                            "linear",
                            "${Rectangle}",
                            '27px',
                            '1280px'
                        ],
                        [
                            "eid90",
                            "width",
                            1250,
                            750,
                            "linear",
                            "${Rectangle}",
                            '27px',
                            '1280px'
                        ],
                        [
                            "eid99",
                            "width",
                            5250,
                            750,
                            "linear",
                            "${Rectangle}",
                            '27px',
                            '1280px'
                        ],
                        [
                            "eid111",
                            "left",
                            1500,
                            250,
                            "linear",
                            "${clases-popup-no-funcional-organizaciones-btn}",
                            '1308px',
                            '941px'
                        ],
                        [
                            "eid79",
                            "opacity",
                            250,
                            750,
                            "linear",
                            "${clases-popup-funcionales}",
                            '0',
                            '1'
                        ],
                        [
                            "eid109",
                            "left",
                            1250,
                            250,
                            "linear",
                            "${clases-popup-no-funcional-producto-btn}",
                            '1308px',
                            '941px'
                        ],
                        [
                            "eid110",
                            "left",
                            1750,
                            250,
                            "linear",
                            "${clases-popup-no-funcional-externos-btn}",
                            '1308px',
                            '941px'
                        ],
                        [
                            "eid140",
                            "opacity",
                            2250,
                            750,
                            "linear",
                            "${clases-popup-no-funcional-producto}",
                            '0',
                            '1'
                        ],
                        [
                            "eid113",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${clases-popup-no-funcional-organizaciones-btn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid116",
                            "display",
                            2100,
                            0,
                            "linear",
                            "${clases-popup-no-funcional-organizaciones-btn}",
                            'block',
                            'none'
                        ],
                        [
                            "eid130",
                            "top",
                            2550,
                            150,
                            "linear",
                            "${clases-popup-no-funcional-producto-confiabilidad}",
                            '-223px',
                            '197px'
                        ],
                        [
                            "eid135",
                            "display",
                            2550,
                            0,
                            "linear",
                            "${clases-popup-no-funcional-producto-confiabilidad}",
                            'none',
                            'block'
                        ],
                        [
                            "eid144",
                            "display",
                            3100,
                            0,
                            "linear",
                            "${clases-popup-no-funcional-producto-confiabilidad}",
                            'block',
                            'none'
                        ],
                        [
                            "eid133",
                            "top",
                            2850,
                            150,
                            "linear",
                            "${clases-popup-no-funcional-producto-facilidad}",
                            '-223px',
                            '197px'
                        ],
                        [
                            "eid75",
                            "left",
                            250,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1300px',
                            '1231px'
                        ],
                        [
                            "eid84",
                            "left",
                            1250,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1300px',
                            '1231px'
                        ],
                        [
                            "eid93",
                            "left",
                            5250,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1300px',
                            '1231px'
                        ],
                        [
                            "eid134",
                            "display",
                            2400,
                            0,
                            "linear",
                            "${clases-popup-no-funcional-producto-desempeno}",
                            'none',
                            'block'
                        ],
                        [
                            "eid145",
                            "display",
                            3100,
                            0,
                            "linear",
                            "${clases-popup-no-funcional-producto-desempeno}",
                            'block',
                            'none'
                        ],
                        [
                            "eid70",
                            "height",
                            250,
                            750,
                            "linear",
                            "${Rectangle}",
                            '25px',
                            '600px'
                        ],
                        [
                            "eid89",
                            "height",
                            1250,
                            750,
                            "linear",
                            "${Rectangle}",
                            '25px',
                            '600px'
                        ],
                        [
                            "eid98",
                            "height",
                            5250,
                            750,
                            "linear",
                            "${Rectangle}",
                            '25px',
                            '600px'
                        ],
                        [
                            "eid132",
                            "top",
                            2700,
                            150,
                            "linear",
                            "${clases-popup-no-funcional-producto-portabilidad}",
                            '-223px',
                            '197px'
                        ],
                        [
                            "eid151",
                            "opacity",
                            4250,
                            750,
                            "linear",
                            "${clases-popup-no-funcionales-externos}",
                            '0',
                            '1'
                        ],
                        [
                            "eid148",
                            "display",
                            3250,
                            0,
                            "linear",
                            "${clases-popup-no-funcionales-organizaciones}",
                            'none',
                            'block'
                        ],
                        [
                            "eid149",
                            "display",
                            4100,
                            0,
                            "linear",
                            "${clases-popup-no-funcionales-organizaciones}",
                            'block',
                            'none'
                        ],
                        [
                            "eid74",
                            "top",
                            250,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '-47px',
                            '13px'
                        ],
                        [
                            "eid85",
                            "top",
                            1250,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '-47px',
                            '13px'
                        ],
                        [
                            "eid94",
                            "top",
                            5250,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '-47px',
                            '13px'
                        ],
                        [
                            "eid68",
                            "opacity",
                            250,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid88",
                            "opacity",
                            1250,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid97",
                            "opacity",
                            5250,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid156",
                            "display",
                            5250,
                            0,
                            "linear",
                            "${clases-popup-caracteristicas}",
                            'none',
                            'block'
                        ],
                        [
                            "eid101",
                            "opacity",
                            1250,
                            750,
                            "linear",
                            "${clases-popup-no-funcionales}",
                            '0',
                            '1'
                        ],
                        [
                            "eid136",
                            "display",
                            2700,
                            0,
                            "linear",
                            "${clases-popup-no-funcional-producto-portabilidad}",
                            'none',
                            'block'
                        ],
                        [
                            "eid143",
                            "display",
                            3100,
                            0,
                            "linear",
                            "${clases-popup-no-funcional-producto-portabilidad}",
                            'block',
                            'none'
                        ],
                        [
                            "eid137",
                            "display",
                            2850,
                            0,
                            "linear",
                            "${clases-popup-no-funcional-producto-facilidad}",
                            'none',
                            'block'
                        ],
                        [
                            "eid142",
                            "display",
                            3100,
                            0,
                            "linear",
                            "${clases-popup-no-funcional-producto-facilidad}",
                            'block',
                            'none'
                        ],
                        [
                            "eid131",
                            "top",
                            2400,
                            150,
                            "linear",
                            "${clases-popup-no-funcional-producto-desempeno}",
                            '-224px',
                            '196px'
                        ],
                        [
                            "eid155",
                            "opacity",
                            5250,
                            750,
                            "linear",
                            "${clases-popup-caracteristicas}",
                            '0',
                            '1'
                        ],
                        [
                            "eid138",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${clases-popup-no-funcional-producto}",
                            'none',
                            'block'
                        ],
                        [
                            "eid141",
                            "display",
                            3100,
                            0,
                            "linear",
                            "${clases-popup-no-funcional-producto}",
                            'block',
                            'none'
                        ],
                        [
                            "eid152",
                            "display",
                            4250,
                            0,
                            "linear",
                            "${clases-popup-no-funcionales-externos}",
                            'none',
                            'block'
                        ],
                        [
                            "eid153",
                            "display",
                            5100,
                            0,
                            "linear",
                            "${clases-popup-no-funcionales-externos}",
                            'block',
                            'none'
                        ],
                        [
                            "eid112",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${clases-popup-no-funcional-producto-btn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid115",
                            "display",
                            2100,
                            0,
                            "linear",
                            "${clases-popup-no-funcional-producto-btn}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "etapas-mc": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '926px', '37px', 'auto', 'auto'],
                            id: 'etapas-titulo',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/etapas-titulo.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            display: 'none',
                            text: '<p style=\"margin: 0px;\">​La ingeniería de requerimientos puede ser vista como un proceso que a través de unas actividades suministran un entregable llamado “Especificación de requerimientos”.</p>',
                            rect: ['0px', '-162px', '500px', '55px', 'auto', 'auto'],
                            align: 'justify'
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['-800px', '144px', '492px', '234px', 'auto', 'auto'],
                            id: 'etapas-ill1',
                            fill: ['rgba(0,0,0,0)', 'images/etapas-ill1.svg', '0px', '0px']
                        },
                        {
                            type: 'group',
                            display: 'none',
                            id: 'paginationmain',
                            rect: ['187px', '545px', '126', '29', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['18px', '0px', '90px', '28px', 'auto', 'auto'],
                                id: 'pagination_indicator',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/pagination_indicator.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'pagination_fw',
                                rect: ['103px', '1px', '23px', '28px', 'auto', 'auto'],
                                userClass: 'fw',
                                fill: ['rgba(0,0,0,0)', 'images/pagination_fw.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'pagination_bw',
                                rect: ['0px', '0px', '24px', '28px', 'auto', 'auto'],
                                userClass: 'bw',
                                fill: ['rgba(0,0,0,0)', 'images/pagination_bw.svg', '0px', '0px']
                            },
                            {
                                type: 'text',
                                id: 'Text6Copy',
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                                display: 'block',
                                text: '<p style=\"margin: 0px;\">1 de 2</p>',
                                rect: ['42px', '7px', 'auto', 'auto', 'auto', 'auto'],
                                align: 'justify'
                            },
                            {
                                type: 'text',
                                id: 'Text6',
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                                display: 'none',
                                text: '<p style=\"margin: 0px;\">2 de 2</p>',
                                rect: ['42px', '7px', 'auto', 'auto', 'auto', 'auto'],
                                align: 'justify'
                            }]
                        },
                        {
                            rect: ['1000px', '25px', '427', '572', 'auto', 'auto'],
                            id: 'ep2mc1',
                            symbolName: 'ep2mc1',
                            type: 'rect'
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['-657px', '115px', '340px', '340px', 'auto', 'auto'],
                            id: 'etapas-ill2',
                            fill: ['rgba(0,0,0,0)', 'images/etapas-ill2.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text2',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            display: 'none',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(0, 0, 0);\">Este proceso se da también de forma iterativa e incremental, es decir, uno o más requerimientos pueden volver a pasar por las mismas etapas hasta llegar a una definición óptima. (SOMMERVILLE, 2005)</span></p>',
                            rect: ['1044px', '60px', '500px', '43px', 'auto', 'auto'],
                            align: 'justify'
                        },
                        {
                            rect: ['1167px', '53', '485', '554', 'auto', 'auto'],
                            id: 'cp22-mc',
                            symbolName: 'cp22-mc',
                            type: 'rect'
                        },
                        {
                            userClass: 'size-opacity',
                            type: 'image',
                            id: 'etapas-2-sm-validacion',
                            display: 'none',
                            rect: ['-407px', '-165px', '108px', '42px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/etapas-2-sm-validacion.svg', '0px', '0px']
                        },
                        {
                            userClass: 'size-opacity',
                            type: 'image',
                            id: 'etapas-2-sm-levantamiento',
                            display: 'none',
                            rect: ['745px', '-158px', '108px', '42px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/etapas-2-sm-levantamiento.svg', '0px', '0px']
                        },
                        {
                            userClass: 'size-opacity',
                            type: 'image',
                            id: 'etapas-2-sm-definicion',
                            display: 'none',
                            rect: ['-293px', '607px', '108px', '42px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/etapas-2-sm-definicion.svg', '0px', '0px']
                        },
                        {
                            userClass: 'size-opacity',
                            type: 'image',
                            id: 'etapas-2-sm-analisis',
                            display: 'none',
                            rect: ['685px', '577px', '108px', '42px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/etapas-2-sm-analisis.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '926px', '37px']
                        }
                    }
                },
                timeline: {
                    duration: 3750,
                    autoPlay: true,
                    data: [
                        [
                            "eid283",
                            "top",
                            1000,
                            500,
                            "linear",
                            "${etapas-2-sm-analisis}",
                            '577px',
                            '384px'
                        ],
                        [
                            "eid277",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${etapas-2-sm-definicion}",
                            'none',
                            'block'
                        ],
                        [
                            "eid249",
                            "left",
                            250,
                            250,
                            "linear",
                            "${etapas-ill1}",
                            '-800px',
                            '4px'
                        ],
                        [
                            "eid257",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${etapas-ill1}",
                            '4px',
                            '-856px'
                        ],
                        [
                            "eid276",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${etapas-2-sm-levantamiento}",
                            'none',
                            'block'
                        ],
                        [
                            "eid290",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${etapas-ill2}",
                            '-657px',
                            '80px'
                        ],
                        [
                            "eid258",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${Text}",
                            '0px',
                            '-847px'
                        ],
                        [
                            "eid260",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${Text6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid280",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${etapas-2-sm-levantamiento}",
                            '745px',
                            '366px'
                        ],
                        [
                            "eid245",
                            "display",
                            250,
                            0,
                            "linear",
                            "${etapas-ill1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid278",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${etapas-2-sm-analisis}",
                            'none',
                            'block'
                        ],
                        [
                            "eid282",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${etapas-2-sm-analisis}",
                            '685px',
                            '366px'
                        ],
                        [
                            "eid286",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${etapas-2-sm-validacion}",
                            '-407px',
                            '26px'
                        ],
                        [
                            "eid917",
                            "left",
                            500,
                            250,
                            "linear",
                            "${ep2mc1}",
                            '1000px',
                            '500px'
                        ],
                        [
                            "eid920",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${ep2mc1}",
                            '500px',
                            '1260px'
                        ],
                        [
                            "eid275",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${etapas-2-sm-validacion}",
                            'none',
                            'block'
                        ],
                        [
                            "eid248",
                            "top",
                            750,
                            250,
                            "linear",
                            "${paginationmain}",
                            '545px',
                            '465px'
                        ],
                        [
                            "eid259",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${Text6Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid251",
                            "top",
                            55,
                            250,
                            "linear",
                            "${Text}",
                            '-162px',
                            '60px'
                        ],
                        [
                            "eid252",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${Text}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid288",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${Text2}",
                            '1044px',
                            '0px'
                        ],
                        [
                            "eid284",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${etapas-2-sm-definicion}",
                            '-293px',
                            '26px'
                        ],
                        [
                            "eid267",
                            "top",
                            1500,
                            0,
                            "linear",
                            "${Text2}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid281",
                            "top",
                            1000,
                            500,
                            "linear",
                            "${etapas-2-sm-levantamiento}",
                            '-158px',
                            '137px'
                        ],
                        [
                            "eid239",
                            "display",
                            750,
                            0,
                            "linear",
                            "${paginationmain}",
                            'none',
                            'block'
                        ],
                        [
                            "eid246",
                            "display",
                            55,
                            0,
                            "linear",
                            "${Text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid933",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${cp22-mc}",
                            '1167px',
                            '463px'
                        ],
                        [
                            "eid291",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${etapas-ill2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid285",
                            "top",
                            1000,
                            500,
                            "linear",
                            "${etapas-2-sm-definicion}",
                            '607px',
                            '384px'
                        ],
                        [
                            "eid273",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${Text2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid287",
                            "top",
                            1000,
                            500,
                            "linear",
                            "${etapas-2-sm-validacion}",
                            '-165px',
                            '137px'
                        ]
                    ]
                }
            },
            "etapas-popup": {
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
                            rect: ['0px', '0px', '27px', '25px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            display: 'none',
                            fill: ['rgba(0,0,0,0.90)']
                        },
                        {
                            type: 'image',
                            rect: ['47px', '55px', '1186px', '490px', 'auto', 'auto'],
                            id: 'etapas-popup-levantamiento',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/etapas-popup-levantamiento.svg', '0px', '0px']
                        },
                        {
                            userClass: 'size-opacity',
                            type: 'image',
                            id: 'etapas-popup-levantamiento-identificacion-but',
                            display: 'none',
                            rect: ['1309px', '280px', '314px', '52px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/etapas-popup-levantamiento-identificacion-but.svg', '0px', '0px']
                        },
                        {
                            userClass: 'size-opacity',
                            type: 'image',
                            id: 'etapas-popup-levantamiento-tecnicas-but',
                            display: 'none',
                            rect: ['-333px', '349px', '314px', '52px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/etapas-popup-levantamiento-tecnicas-but.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['-1254px', '13px', '1223px', '562px', 'auto', 'auto'],
                            id: 'etapas-popup-levantamiento-identificacion-1',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/etapas-popup-levantamiento-identificacion-1.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['1313px', '30px', '1239px', '528px', 'auto', 'auto'],
                            id: 'etapas-popup-levantamiento-identificacion-2',
                            fill: ['rgba(0,0,0,0)', 'images/etapas-popup-levantamiento-identificacion-2.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['34px', '17px', '1213px', '542px', 'auto', 'auto'],
                            id: 'etapas-popup-levantamiento-tecnicas-2',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/etapas-popup-levantamiento-tecnicas-2.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['130px', '17px', '1020px', '561px', 'auto', 'auto'],
                            id: 'etapas-popup-levantamiento-tecnicas',
                            opacity: '1',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/etapas-popup-levantamiento-tecnicas.svg', '0px', '0px']
                        },
                        {
                            type: 'group',
                            display: 'none',
                            id: 'tecnicas-txt',
                            rect: ['137', '228', '952', '320', 'auto', 'auto'],
                            c: [
                            {
                                type: 'text',
                                id: 'Text',
                                textStyle: ['', '', '18px', '', ''],
                                font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', '700', 'none', '', 'break-word', 'normal'],
                                display: 'none',
                                rect: ['55px', '171px', '897px', '149px', 'auto', 'auto'],
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 22px; color: rgb(20, 74, 139);\">Entrevistas.</span></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Es la manera más directa de llegar a los requerimientos del software ya que son planteados por las personas que directamente interactuarán con el sistema.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\">El analista en la entrevista debe indagar al entrevistado cuál es la razón de ser del requerimiento y como éste contribuirá con las metas de la empresa o a resolver un problema o situación del modelo de negocios.</p>',
                                align: 'justify'
                            },
                            {
                                type: 'text',
                                id: 'TextCopy',
                                textStyle: ['', '', '18px', '', ''],
                                font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', '700', 'none', '', 'break-word', 'normal'],
                                display: 'none',
                                rect: ['55px', '171px', '897px', '149px', 'auto', 'auto'],
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 22px; color: rgb(20, 74, 139);\">Prototipos.</span></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">El analista se puede apoyar en unos modelos que pueden ser dibujos, diagramas, diseños de pantalla para eliminar ambigüedades, imprecisiones y demás dudas que le puedan surgir a los usuarios. Otro ejemplo son los “mockups”, o dibujos a mano alzada que apoyan en hacer más claras y precisas las descripciones de los usuarios.</p><p style=\"margin: 0px;\"></p>',
                                align: 'justify'
                            },
                            {
                                type: 'text',
                                id: 'TextCopy2',
                                textStyle: ['', '', '18px', '', ''],
                                font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', '700', 'none', '', 'break-word', 'normal'],
                                display: 'none',
                                rect: ['55px', '165px', '900px', '149px', 'auto', 'auto'],
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 22px; color: rgb(20, 74, 139);\">Reuniones dirigidas.</span></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px; line-height: 17px;\">Esta técnica permite unificar los puntos de vista de diferentes participantes del proyecto (stakeholders). Es normal que varios usuarios del sistema tengan visiones diferentes de los servicios que debe suministrar el software.&nbsp;</p><p style=\"margin: 0px; line-height: 17px;\">​</p><p style=\"margin: 0px; line-height: 17px;\">El analista debe permitir el debate de ideas y lograr consensos usando técnicas de negociación. En estas reuniones es importante que participe el dueño del proceso quien apoyará la discusión de ideas  y podrá aprobar o rechazar los requerimientos propuestos.</p><p style=\"margin: 0px; line-height: 17px;\">​</p><p style=\"margin: 0px; line-height: 17px;\">​</p><p style=\"margin:0px\">​</p>',
                                align: 'justify'
                            },
                            {
                                type: 'text',
                                id: 'TextCopy3',
                                textStyle: ['', '', '18px', '', ''],
                                font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', '700', 'none', '', 'break-word', 'normal'],
                                display: 'none',
                                rect: ['55px', '183px', '897px', '137px', 'auto', 'auto'],
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 22px; color: rgb(20, 74, 139);\">Visitas de campo.</span></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">La observación directa o la visita de campo son fundamentales para entender los requerimientos realizados por los usuarios. Es a través de esta técnica que el analista puede corroborar la información suministrada por el usuario y profundizar el conocimiento del contexto que dio origen al requerimiento.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"></p>',
                                align: 'justify'
                            },
                            {
                                type: 'text',
                                id: 'TextCopy4',
                                textStyle: ['', '', '18px', '', ''],
                                font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', '700', 'none', '', 'break-word', 'normal'],
                                display: 'none',
                                rect: ['55px', '183px', '897px', '137px', 'auto', 'auto'],
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 22px; color: rgb(20, 74, 139);\">Narrativa por parte del usuario (user stories).</span></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">El usuario puede describir el servicio que el software debe suministrar narrando los beneficios que espera del sistema. Esta narración es del tipo : “yo espero que el sistema me permita hacer “x” para alcanzar el objetivo “y” de la empresa”. (BOURQUE, 2014)</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"></p>',
                                align: 'justify'
                            }]
                        },
                        {
                            type: 'group',
                            display: 'none',
                            id: 'tecnicas-sm',
                            rect: ['383px', '223px', '188', '188', 'auto', 'auto'],
                            c: [
                            {
                                userClass: 'size-opacity',
                                id: 'etapas-popup-levantamiento-tecnicas-but_vistas',
                                type: 'image',
                                rect: ['897px', '-438px', '188px', '188px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/etapas-popup-levantamiento-tecnicas-but_vistas.svg', '0px', '0px']
                            },
                            {
                                userClass: 'size-opacity',
                                id: 'etapas-popup-levantamiento-tecnicas-but_reuniones',
                                type: 'image',
                                rect: ['-369px', '390px', '188px', '188px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/etapas-popup-levantamiento-tecnicas-but_reuniones.svg', '0px', '0px']
                            },
                            {
                                userClass: 'size-opacity',
                                id: 'etapas-popup-levantamiento-tecnicas-but_prototipos',
                                type: 'image',
                                rect: ['163px', '-438px', '188px', '188px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/etapas-popup-levantamiento-tecnicas-but_prototipos.svg', '0px', '0px']
                            },
                            {
                                userClass: 'size-opacity',
                                id: 'etapas-popup-levantamiento-tecnicas-but_narrativa',
                                type: 'image',
                                rect: ['654px', '439px', '188px', '188px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/etapas-popup-levantamiento-tecnicas-but_narrativa.svg', '0px', '0px']
                            },
                            {
                                userClass: 'size-opacity',
                                id: 'etapas-popup-levantamiento-tecnicas-but_entrevistas',
                                type: 'image',
                                rect: ['-607px', '-485px', '188px', '188px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/etapas-popup-levantamiento-tecnicas-but_entrevistas.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['577px', '-90px', '188px', '188px', 'auto', 'auto'],
                                id: 'etapas-popup-levantamiento-tecnicas-but_narrativa-a',
                                fill: ['rgba(0,0,0,0)', 'images/etapas-popup-levantamiento-tecnicas-but_narrativa-a.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['370px', '-90px', '188px', '188px', 'auto', 'auto'],
                                id: 'etapas-popup-levantamiento-tecnicas-but_reuniones-a',
                                fill: ['rgba(0,0,0,0)', 'images/etapas-popup-levantamiento-tecnicas-but_reuniones-a.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['163px', '-90px', '188px', '188px', 'auto', 'auto'],
                                id: 'etapas-popup-levantamiento-tecnicas-but_vistas-a',
                                fill: ['rgba(0,0,0,0)', 'images/etapas-popup-levantamiento-tecnicas-but_vistas-a.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['-43px', '-90px', '188px', '188px', 'auto', 'auto'],
                                id: 'etapas-popup-levantamiento-tecnicas-but_prototipos-a',
                                fill: ['rgba(0,0,0,0)', 'images/etapas-popup-levantamiento-tecnicas-but_prototipos-a.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['-253px', '-90px', '188px', '188px', 'auto', 'auto'],
                                id: 'etapas-popup-levantamiento-tecnicas-but_entrevistas-a',
                                fill: ['rgba(0,0,0,0)', 'images/etapas-popup-levantamiento-tecnicas-but_entrevistas-a.svg', '0px', '0px']
                            }]
                        },
                        {
                            type: 'image',
                            rect: ['18px', '10px', '1207px', '580px', 'auto', 'auto'],
                            id: 'etapas-popup-analisis',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/etapas-popup-analisis.svg', '0px', '0px']
                        },
                        {
                            type: 'group',
                            display: 'none',
                            id: 'analisis-sm-c',
                            rect: ['-43', '-24', '0', '0', 'auto', 'auto'],
                            c: [
                            {
                                userClass: 'size-opacity',
                                type: 'image',
                                id: 'etapas-popup-analisis-clasificacion-but',
                                display: 'none',
                                rect: ['129px', '298px', '314px', '52px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/etapas-popup-analisis-clasificacion-but.svg', '0px', '0px']
                            },
                            {
                                userClass: 'size-opacity',
                                type: 'image',
                                id: 'etapas-popup-analisis-modelado-but',
                                display: 'none',
                                rect: ['129px', '352px', '314px', '52px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/etapas-popup-analisis-modelado-but.svg', '0px', '0px']
                            },
                            {
                                userClass: 'size-opacity',
                                type: 'image',
                                id: 'etapas-popup-analisis-diseno-but',
                                display: 'none',
                                rect: ['129px', '410px', '314px', '52px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/etapas-popup-analisis-diseno-but.svg', '0px', '0px']
                            },
                            {
                                userClass: 'size-opacity',
                                type: 'image',
                                id: 'etapas-popup-analisis-negociacion-but',
                                display: 'none',
                                rect: ['129px', '467px', '314px', '52px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/etapas-popup-analisis-negociacion-but.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['96px', '88px', '1195px', '475px', 'auto', 'auto'],
                                id: 'etapas-popup-analisis-clasificacion',
                                fill: ['rgba(0,0,0,0)', 'images/etapas-popup-analisis-clasificacion.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['77px', '90px', '1212px', '433px', 'auto', 'auto'],
                                id: 'etapas-popup-analisis-modelado',
                                fill: ['rgba(0,0,0,0)', 'images/etapas-popup-analisis-modelado.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['66px', '123px', '1230px', '384px', 'auto', 'auto'],
                                id: 'etapas-popup-analisis-diseno',
                                fill: ['rgba(0,0,0,0)', 'images/etapas-popup-analisis-diseno.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['80px', '131px', '1210px', '384px', 'auto', 'auto'],
                                id: 'etapas-popup-analisis-negociacion',
                                fill: ['rgba(0,0,0,0)', 'images/etapas-popup-analisis-negociacion.svg', '0px', '0px']
                            }]
                        },
                        {
                            rect: ['-43', '-24', '0', '0', 'auto', 'auto'],
                            id: 'definicion-sm-c',
                            type: 'group',
                            c: [
                            {
                                type: 'image',
                                rect: ['88px', '120px', '1055px', '407px', 'auto', 'auto'],
                                id: 'etapas-popup-definicion',
                                opacity: '0',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/etapas-popup-definicion.svg', '0px', '0px']
                            },
                            {
                                userClass: 'size-opacity',
                                type: 'image',
                                id: 'etapas-popup-definicion-documento-but',
                                display: 'none',
                                rect: ['856px', '141px', '402px', '66px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/etapas-popup-definicion-documento-but.svg', '0px', '0px']
                            },
                            {
                                userClass: 'size-opacity',
                                type: 'image',
                                id: 'etapas-popup-definicion-formatoe-but',
                                display: 'none',
                                rect: ['856px', '224px', '402px', '66px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/etapas-popup-definicion-formatoe-but.svg', '0px', '0px']
                            },
                            {
                                userClass: 'size-opacity',
                                type: 'image',
                                id: 'etapas-popup-definicion-formatoc-but',
                                display: 'none',
                                rect: ['856px', '308px', '402px', '66px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/etapas-popup-definicion-formatoc-but.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['96px', '58px', '1174px', '534px', 'auto', 'auto'],
                                id: 'etapas-popup-definicion-documento',
                                fill: ['rgba(0,0,0,0)', 'images/etapas-popup-definicion-documento.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['76px', '86px', '1212px', '481px', 'auto', 'auto'],
                                id: 'etapas-popup-definicion-formatoe',
                                fill: ['rgba(0,0,0,0)', 'images/etapas-popup-definicion-formatoe.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['1340px', '42px', '1215px', '526px', 'auto', 'auto'],
                                id: 'etapas-popup-definicion-formatoe2',
                                fill: ['rgba(0,0,0,0)', 'images/etapas-popup-definicion-formatoe2.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['81px', '49px', '1177px', '550px', 'auto', 'auto'],
                                id: 'etapas-popup-definicion-formatoc',
                                fill: ['rgba(0,0,0,0)', 'images/etapas-popup-definicion-formatoc.svg', '0px', '0px']
                            }]
                        },
                        {
                            type: 'group',
                            display: 'none',
                            id: 'validacion-sm-c',
                            rect: ['-43', '-24', '1285', '614', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['610px', '442px', '162px', '113px', 'auto', 'auto'],
                                id: 'clic-mas-info',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/clic-mas-info.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'etapas-popup-validacion',
                                opacity: '0',
                                rect: ['77px', '46px', '1208px', '221px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/etapas-popup-validacion.svg', '0px', '0px']
                            },
                            {
                                userClass: 'size-opacity',
                                id: 'etapas-popup-validacion-but_criterios',
                                type: 'image',
                                rect: ['911px', '-63px', '314px', '52px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/etapas-popup-validacion-but_criterios.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['909px', '332px', '314px', '52px', 'auto', 'auto'],
                                id: 'etapas-popup-validacion-but_criterios-a',
                                fill: ['rgba(0,0,0,0)', 'images/etapas-popup-validacion-but_criterios-a.svg', '0px', '0px']
                            },
                            {
                                userClass: 'size-opacity',
                                id: 'etapas-popup-validacion-but_revision',
                                type: 'image',
                                rect: ['137px', '-63px', '314px', '52px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/etapas-popup-validacion-but_revision.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['135px', '332px', '314px', '52px', 'auto', 'auto'],
                                id: 'etapas-popup-validacion-but_revision-a',
                                fill: ['rgba(0,0,0,0)', 'images/etapas-popup-validacion-but_revision-a.svg', '0px', '0px']
                            },
                            {
                                userClass: 'size-opacity',
                                id: 'etapas-popup-validacion-but_validaciones',
                                type: 'image',
                                rect: ['526px', '-63px', '314px', '52px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/etapas-popup-validacion-but_validaciones.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['526px', '332px', '314px', '52px', 'auto', 'auto'],
                                id: 'etapas-popup-validacion-but_validaciones-a',
                                fill: ['rgba(0,0,0,0)', 'images/etapas-popup-validacion-but_validaciones-a.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['126px', '384px', '1119px', '228px', 'auto', 'auto'],
                                id: 'etapas-popup-validacion-revision',
                                fill: ['rgba(0,0,0,0)', 'images/etapas-popup-validacion-revision.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['123px', '385px', '1119px', '228px', 'auto', 'auto'],
                                id: 'etapas-popup-validacion-validaciones',
                                fill: ['rgba(0,0,0,0)', 'images/etapas-popup-validacion-validaciones.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['128px', '386px', '1119px', '228px', 'auto', 'auto'],
                                id: 'etapas-popup-validacion-criterios',
                                fill: ['rgba(0,0,0,0)', 'images/etapas-popup-validacion-criterios.svg', '0px', '0px']
                            }]
                        },
                        {
                            userClass: 'size-opacity',
                            type: 'image',
                            id: 'btn-cerrar-popup',
                            display: 'none',
                            rect: ['1302px', '-57px', '35px', '35px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/btn-cerrar-popup.svg', '0px', '0px']
                        },
                        {
                            type: 'group',
                            display: 'none',
                            id: 'paginationmainCopy',
                            rect: ['575px', '612px', '126', '29', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['18px', '0px', '90px', '28px', 'auto', 'auto'],
                                id: 'pagination_indicatorCopy',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/pagination_indicator.svg', '0px', '0px']
                            },
                            {
                                userClass: 'fw',
                                id: 'pagination_fwCopy',
                                type: 'image',
                                rect: ['103px', '1px', '23px', '28px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/pagination_fw.svg', '0px', '0px']
                            },
                            {
                                userClass: 'bw',
                                id: 'pagination_bwCopy',
                                type: 'image',
                                rect: ['0px', '0px', '24px', '28px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/pagination_bw.svg', '0px', '0px']
                            },
                            {
                                type: 'text',
                                id: 'Text6Copy3',
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                                display: 'block',
                                rect: ['42px', '7px', 'auto', 'auto', 'auto', 'auto'],
                                text: '<p style=\"margin: 0px;\">1 de 2</p>',
                                align: 'justify'
                            },
                            {
                                type: 'text',
                                id: 'Text6Copy2',
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                                display: 'none',
                                rect: ['42px', '7px', 'auto', 'auto', 'auto', 'auto'],
                                text: '<p style=\"margin: 0px;\">2 de 2</p>',
                                align: 'justify'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '27px', '25px']
                        }
                    }
                },
                timeline: {
                    duration: 10000,
                    autoPlay: true,
                    labels: {
                        "levantamiento": 250,
                        "identificacion": 1250,
                        "tecnicas": 2000,
                        "tp": 2617,
                        "entrevistas": 2750,
                        "prototipos": 3000,
                        "vistas": 3250,
                        "reuniones": 3500,
                        "narrativa": 3750,
                        "analisis": 4000,
                        "clasificacion": 5000,
                        "modelado": 5250,
                        "diseno": 5500,
                        "negociacion": 5750,
                        "definicion": 6250,
                        "documento": 7250,
                        "formatoe": 7500,
                        "formatoc": 8000,
                        "validacion": 8500,
                        "revision": 9500,
                        "validaciones": 9750,
                        "criterios": 10000
                    },
                    data: [
                        [
                            "eid311",
                            "display",
                            250,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'none',
                            'block'
                        ],
                        [
                            "eid312",
                            "display",
                            3800,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'block',
                            'none'
                        ],
                        [
                            "eid341",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'none',
                            'block'
                        ],
                        [
                            "eid342",
                            "display",
                            5868,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'block',
                            'none'
                        ],
                        [
                            "eid345",
                            "display",
                            6250,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'none',
                            'block'
                        ],
                        [
                            "eid346",
                            "display",
                            8371,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'block',
                            'none'
                        ],
                        [
                            "eid349",
                            "display",
                            8500,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'none',
                            'block'
                        ],
                        [
                            "eid296",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid302",
                            "display",
                            3800,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid358",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid359",
                            "display",
                            5868,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid362",
                            "display",
                            6250,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid363",
                            "display",
                            8121,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid366",
                            "display",
                            8500,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid446",
                            "display",
                            3354,
                            0,
                            "linear",
                            "${TextCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid447",
                            "display",
                            3638,
                            0,
                            "linear",
                            "${TextCopy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid330",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${etapas-popup-levantamiento-identificacion-2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid331",
                            "display",
                            1800,
                            0,
                            "linear",
                            "${etapas-popup-levantamiento-identificacion-2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid305",
                            "display",
                            250,
                            0,
                            "linear",
                            "${etapas-popup-levantamiento}",
                            'none',
                            'block'
                        ],
                        [
                            "eid306",
                            "display",
                            1100,
                            0,
                            "linear",
                            "${etapas-popup-levantamiento}",
                            'block',
                            'none'
                        ],
                        [
                            "eid485",
                            "display",
                            5140,
                            0,
                            "linear",
                            "${etapas-popup-analisis-modelado}",
                            'none',
                            'block'
                        ],
                        [
                            "eid486",
                            "display",
                            5374,
                            0,
                            "linear",
                            "${etapas-popup-analisis-modelado}",
                            'block',
                            'none'
                        ],
                        [
                            "eid568",
                            "top",
                            8500,
                            250,
                            "linear",
                            "${etapas-popup-validacion-but_criterios}",
                            '-63px',
                            '332px'
                        ],
                        [
                            "eid300",
                            "width",
                            250,
                            750,
                            "linear",
                            "${Rectangle}",
                            '27px',
                            '1280px'
                        ],
                        [
                            "eid371",
                            "width",
                            1500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '1280px',
                            '1280px'
                        ],
                        [
                            "eid373",
                            "width",
                            1750,
                            0,
                            "linear",
                            "${Rectangle}",
                            '1280px',
                            '1280px'
                        ],
                        [
                            "eid438",
                            "width",
                            3750,
                            0,
                            "linear",
                            "${Rectangle}",
                            '1280px',
                            '1280px'
                        ],
                        [
                            "eid360",
                            "width",
                            4000,
                            750,
                            "linear",
                            "${Rectangle}",
                            '27px',
                            '1280px'
                        ],
                        [
                            "eid493",
                            "width",
                            5750,
                            0,
                            "linear",
                            "${Rectangle}",
                            '1280px',
                            '1280px'
                        ],
                        [
                            "eid364",
                            "width",
                            6250,
                            750,
                            "linear",
                            "${Rectangle}",
                            '27px',
                            '1280px'
                        ],
                        [
                            "eid516",
                            "width",
                            8000,
                            0,
                            "linear",
                            "${Rectangle}",
                            '1280px',
                            '1280px'
                        ],
                        [
                            "eid368",
                            "width",
                            8500,
                            750,
                            "linear",
                            "${Rectangle}",
                            '27px',
                            '1280px'
                        ],
                        [
                            "eid556",
                            "display",
                            8500,
                            0,
                            "linear",
                            "${validacion-sm-c}",
                            'none',
                            'block'
                        ],
                        [
                            "eid513",
                            "opacity",
                            6250,
                            750,
                            "linear",
                            "${etapas-popup-definicion}",
                            '0',
                            '1'
                        ],
                        [
                            "eid392",
                            "left",
                            2000,
                            250,
                            "linear",
                            "${etapas-popup-levantamiento-tecnicas-but_reuniones}",
                            '-369px',
                            '51px'
                        ],
                        [
                            "eid402",
                            "left",
                            2250,
                            250,
                            "linear",
                            "${etapas-popup-levantamiento-tecnicas-but_reuniones}",
                            '51px',
                            '370px'
                        ],
                        [
                            "eid502",
                            "left",
                            6250,
                            250,
                            "linear",
                            "${etapas-popup-definicion-documento-but}",
                            '1366px',
                            '856px'
                        ],
                        [
                            "eid564",
                            "top",
                            9000,
                            250,
                            "linear",
                            "${etapas-popup-validacion-but_validaciones}",
                            '-63px',
                            '332px'
                        ],
                        [
                            "eid450",
                            "width",
                            3250,
                            0,
                            "linear",
                            "${TextCopy2}",
                            '900px',
                            '900px'
                        ],
                        [
                            "eid541",
                            "display",
                            9350,
                            0,
                            "linear",
                            "${etapas-popup-validacion-but_revision-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid542",
                            "display",
                            9625,
                            0,
                            "linear",
                            "${etapas-popup-validacion-but_revision-a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid548",
                            "display",
                            9625,
                            0,
                            "linear",
                            "${etapas-popup-validacion-validaciones}",
                            'none',
                            'block'
                        ],
                        [
                            "eid554",
                            "display",
                            9876,
                            0,
                            "linear",
                            "${etapas-popup-validacion-validaciones}",
                            'block',
                            'none'
                        ],
                        [
                            "eid546",
                            "display",
                            9350,
                            0,
                            "linear",
                            "${etapas-popup-validacion-revision}",
                            'none',
                            'block'
                        ],
                        [
                            "eid547",
                            "display",
                            9625,
                            0,
                            "linear",
                            "${etapas-popup-validacion-revision}",
                            'block',
                            'none'
                        ],
                        [
                            "eid453",
                            "height",
                            3750,
                            0,
                            "linear",
                            "${TextCopy4}",
                            '137px',
                            '137px'
                        ],
                        [
                            "eid451",
                            "height",
                            3500,
                            0,
                            "linear",
                            "${TextCopy3}",
                            '137px',
                            '137px'
                        ],
                        [
                            "eid413",
                            "display",
                            2687,
                            0,
                            "linear",
                            "${etapas-popup-levantamiento-tecnicas-but_entrevistas-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid414",
                            "display",
                            2855,
                            0,
                            "linear",
                            "${etapas-popup-levantamiento-tecnicas-but_entrevistas-a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid449",
                            "top",
                            3250,
                            0,
                            "linear",
                            "${TextCopy2}",
                            '165px',
                            '165px'
                        ],
                        [
                            "eid333",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${paginationmainCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid340",
                            "display",
                            1800,
                            0,
                            "linear",
                            "${paginationmainCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid521",
                            "display",
                            7381,
                            0,
                            "linear",
                            "${paginationmainCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid522",
                            "display",
                            7871,
                            0,
                            "linear",
                            "${paginationmainCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid448",
                            "display",
                            3638,
                            0,
                            "linear",
                            "${TextCopy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid460",
                            "opacity",
                            4000,
                            750,
                            "linear",
                            "${etapas-popup-analisis}",
                            '0',
                            '1'
                        ],
                        [
                            "eid501",
                            "left",
                            6750,
                            250,
                            "linear",
                            "${etapas-popup-definicion-formatoc-but}",
                            '1366px',
                            '856px'
                        ],
                        [
                            "eid310",
                            "top",
                            250,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '-57px',
                            '20px'
                        ],
                        [
                            "eid370",
                            "top",
                            1500,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            '20px',
                            '20px'
                        ],
                        [
                            "eid376",
                            "top",
                            1750,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            '20px',
                            '20px'
                        ],
                        [
                            "eid429",
                            "top",
                            2750,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            '20px',
                            '20px'
                        ],
                        [
                            "eid431",
                            "top",
                            3000,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            '20px',
                            '20px'
                        ],
                        [
                            "eid433",
                            "top",
                            3250,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            '20px',
                            '20px'
                        ],
                        [
                            "eid435",
                            "top",
                            3500,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            '20px',
                            '20px'
                        ],
                        [
                            "eid437",
                            "top",
                            3750,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            '20px',
                            '20px'
                        ],
                        [
                            "eid344",
                            "top",
                            4000,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '-57px',
                            '20px'
                        ],
                        [
                            "eid496",
                            "top",
                            5750,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            '20px',
                            '20px'
                        ],
                        [
                            "eid348",
                            "top",
                            6250,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '-57px',
                            '20px'
                        ],
                        [
                            "eid519",
                            "top",
                            8250,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            '20px',
                            '20px'
                        ],
                        [
                            "eid352",
                            "top",
                            8500,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '-57px',
                            '20px'
                        ],
                        [
                            "eid456",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${tecnicas-txt}",
                            'none',
                            'block'
                        ],
                        [
                            "eid457",
                            "display",
                            3800,
                            0,
                            "linear",
                            "${tecnicas-txt}",
                            'block',
                            'none'
                        ],
                        [
                            "eid411",
                            "opacity",
                            2250,
                            250,
                            "linear",
                            "${etapas-popup-levantamiento-tecnicas}",
                            '1',
                            '0'
                        ],
                        [
                            "eid387",
                            "left",
                            2000,
                            250,
                            "linear",
                            "${etapas-popup-levantamiento-tecnicas-but_entrevistas}",
                            '-607px',
                            '-60px'
                        ],
                        [
                            "eid396",
                            "left",
                            2250,
                            250,
                            "linear",
                            "${etapas-popup-levantamiento-tecnicas-but_entrevistas}",
                            '-60px',
                            '-253px'
                        ],
                        [
                            "eid326",
                            "top",
                            1750,
                            0,
                            "linear",
                            "${etapas-popup-levantamiento-identificacion-1}",
                            '13px',
                            '13px'
                        ],
                        [
                            "eid322",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${etapas-popup-levantamiento-identificacion-1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid332",
                            "display",
                            1800,
                            0,
                            "linear",
                            "${etapas-popup-levantamiento-identificacion-1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid318",
                            "left",
                            750,
                            250,
                            "linear",
                            "${etapas-popup-levantamiento-tecnicas-but}",
                            '-333px',
                            '114px'
                        ],
                        [
                            "eid334",
                            "top",
                            1250,
                            250,
                            "linear",
                            "${paginationmainCopy}",
                            '612px',
                            '558px'
                        ],
                        [
                            "eid567",
                            "left",
                            8500,
                            0,
                            "linear",
                            "${etapas-popup-validacion-but_criterios}",
                            '911px',
                            '911px'
                        ],
                        [
                            "eid400",
                            "left",
                            2250,
                            250,
                            "linear",
                            "${etapas-popup-levantamiento-tecnicas-but_prototipos}",
                            '163px',
                            '-43px'
                        ],
                        [
                            "eid335",
                            "display",
                            1678,
                            0,
                            "linear",
                            "${Text6Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid980",
                            "display",
                            7381,
                            0,
                            "linear",
                            "${Text6Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid983",
                            "display",
                            7633,
                            0,
                            "linear",
                            "${Text6Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid511",
                            "display",
                            0,
                            0,
                            "linear",
                            "${etapas-popup-definicion}",
                            'none',
                            'none'
                        ],
                        [
                            "eid510",
                            "display",
                            6250,
                            0,
                            "linear",
                            "${etapas-popup-definicion}",
                            'none',
                            'block'
                        ],
                        [
                            "eid506",
                            "display",
                            7100,
                            0,
                            "linear",
                            "${etapas-popup-definicion}",
                            'block',
                            'none'
                        ],
                        [
                            "eid545",
                            "display",
                            9885,
                            0,
                            "linear",
                            "${etapas-popup-validacion-but_criterios-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid304",
                            "opacity",
                            250,
                            750,
                            "linear",
                            "${etapas-popup-levantamiento}",
                            '0',
                            '1'
                        ],
                        [
                            "eid408",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${etapas-popup-levantamiento-tecnicas-2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid427",
                            "display",
                            3800,
                            0,
                            "linear",
                            "${etapas-popup-levantamiento-tecnicas-2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid473",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${etapas-popup-analisis-modelado-but}",
                            'none',
                            'block'
                        ],
                        [
                            "eid477",
                            "display",
                            4850,
                            0,
                            "linear",
                            "${etapas-popup-analisis-modelado-but}",
                            'block',
                            'none'
                        ],
                        [
                            "eid530",
                            "left",
                            7500,
                            250,
                            "linear",
                            "${etapas-popup-definicion-formatoe}",
                            '76px',
                            '-1189px'
                        ],
                        [
                            "eid469",
                            "left",
                            4000,
                            200,
                            "linear",
                            "${etapas-popup-analisis-clasificacion-but}",
                            '-316px',
                            '129px'
                        ],
                        [
                            "eid316",
                            "display",
                            500,
                            0,
                            "linear",
                            "${etapas-popup-levantamiento-identificacion-but}",
                            'none',
                            'block'
                        ],
                        [
                            "eid319",
                            "display",
                            1100,
                            0,
                            "linear",
                            "${etapas-popup-levantamiento-identificacion-but}",
                            'block',
                            'none'
                        ],
                        [
                            "eid555",
                            "display",
                            9876,
                            0,
                            "linear",
                            "${etapas-popup-validacion-criterios}",
                            'none',
                            'block'
                        ],
                        [
                            "eid946",
                            "top",
                            7500,
                            0,
                            "linear",
                            "${etapas-popup-definicion-formatoe}",
                            '86px',
                            '86px'
                        ],
                        [
                            "eid452",
                            "top",
                            3500,
                            0,
                            "linear",
                            "${TextCopy3}",
                            '183px',
                            '183px'
                        ],
                        [
                            "eid563",
                            "left",
                            9000,
                            0,
                            "linear",
                            "${etapas-popup-validacion-but_validaciones}",
                            '526px',
                            '526px'
                        ],
                        [
                            "eid514",
                            "display",
                            7100,
                            0,
                            "linear",
                            "${etapas-popup-definicion-documento}",
                            'none',
                            'block'
                        ],
                        [
                            "eid515",
                            "display",
                            7381,
                            0,
                            "linear",
                            "${etapas-popup-definicion-documento}",
                            'block',
                            'none'
                        ],
                        [
                            "eid565",
                            "left",
                            8750,
                            0,
                            "linear",
                            "${etapas-popup-validacion-but_revision}",
                            '137px',
                            '137px'
                        ],
                        [
                            "eid323",
                            "opacity",
                            1250,
                            250,
                            "linear",
                            "${etapas-popup-levantamiento-identificacion-1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid317",
                            "left",
                            500,
                            250,
                            "linear",
                            "${etapas-popup-levantamiento-identificacion-but}",
                            '1309px',
                            '114px'
                        ],
                        [
                            "eid419",
                            "display",
                            3139,
                            0,
                            "linear",
                            "${etapas-popup-levantamiento-tecnicas-but_vistas-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid420",
                            "display",
                            3354,
                            0,
                            "linear",
                            "${etapas-popup-levantamiento-tecnicas-but_vistas-a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid468",
                            "left",
                            4550,
                            200,
                            "linear",
                            "${etapas-popup-analisis-negociacion-but}",
                            '-316px',
                            '129px'
                        ],
                        [
                            "eid425",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${tecnicas-sm}",
                            'none',
                            'block'
                        ],
                        [
                            "eid426",
                            "display",
                            3800,
                            0,
                            "linear",
                            "${tecnicas-sm}",
                            'block',
                            'none'
                        ],
                        [
                            "eid407",
                            "opacity",
                            2250,
                            250,
                            "linear",
                            "${etapas-popup-levantamiento-tecnicas-2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid328",
                            "left",
                            1500,
                            250,
                            "linear",
                            "${etapas-popup-levantamiento-identificacion-2}",
                            '1313px',
                            '22px'
                        ],
                        [
                            "eid505",
                            "display",
                            6250,
                            0,
                            "linear",
                            "${etapas-popup-definicion-documento-but}",
                            'none',
                            'block'
                        ],
                        [
                            "eid507",
                            "display",
                            7100,
                            0,
                            "linear",
                            "${etapas-popup-definicion-documento-but}",
                            'block',
                            'none'
                        ],
                        [
                            "eid945",
                            "top",
                            7500,
                            250,
                            "linear",
                            "${etapas-popup-definicion-formatoe2}",
                            '42px',
                            '47px'
                        ],
                        [
                            "eid442",
                            "display",
                            2855,
                            0,
                            "linear",
                            "${TextCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid443",
                            "display",
                            3139,
                            0,
                            "linear",
                            "${TextCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid315",
                            "display",
                            750,
                            0,
                            "linear",
                            "${etapas-popup-levantamiento-tecnicas-but}",
                            'none',
                            'block'
                        ],
                        [
                            "eid320",
                            "display",
                            1100,
                            0,
                            "linear",
                            "${etapas-popup-levantamiento-tecnicas-but}",
                            'block',
                            'none'
                        ],
                        [
                            "eid394",
                            "left",
                            2000,
                            250,
                            "linear",
                            "${etapas-popup-levantamiento-tecnicas-but_vistas}",
                            '897px',
                            '379px'
                        ],
                        [
                            "eid404",
                            "left",
                            2250,
                            250,
                            "linear",
                            "${etapas-popup-levantamiento-tecnicas-but_vistas}",
                            '379px',
                            '163px'
                        ],
                        [
                            "eid440",
                            "display",
                            2687,
                            0,
                            "linear",
                            "${Text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid441",
                            "display",
                            2855,
                            0,
                            "linear",
                            "${Text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid531",
                            "display",
                            7871,
                            0,
                            "linear",
                            "${etapas-popup-definicion-formatoc}",
                            'none',
                            'block'
                        ],
                        [
                            "eid532",
                            "display",
                            8087,
                            0,
                            "linear",
                            "${etapas-popup-definicion-formatoc}",
                            'block',
                            'none'
                        ],
                        [
                            "eid458",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${etapas-popup-analisis}",
                            'none',
                            'block'
                        ],
                        [
                            "eid461",
                            "display",
                            4850,
                            0,
                            "linear",
                            "${etapas-popup-analisis}",
                            'block',
                            'none'
                        ],
                        [
                            "eid388",
                            "top",
                            2000,
                            250,
                            "linear",
                            "${etapas-popup-levantamiento-tecnicas-but_entrevistas}",
                            '-485px',
                            '-87px'
                        ],
                        [
                            "eid397",
                            "top",
                            2250,
                            250,
                            "linear",
                            "${etapas-popup-levantamiento-tecnicas-but_entrevistas}",
                            '-87px',
                            '-90px'
                        ],
                        [
                            "eid421",
                            "display",
                            3354,
                            0,
                            "linear",
                            "${etapas-popup-levantamiento-tecnicas-but_reuniones-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid422",
                            "display",
                            3638,
                            0,
                            "linear",
                            "${etapas-popup-levantamiento-tecnicas-but_reuniones-a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid417",
                            "display",
                            2855,
                            0,
                            "linear",
                            "${etapas-popup-levantamiento-tecnicas-but_prototipos-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid418",
                            "display",
                            3139,
                            0,
                            "linear",
                            "${etapas-popup-levantamiento-tecnicas-but_prototipos-a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid329",
                            "top",
                            1500,
                            0,
                            "linear",
                            "${etapas-popup-levantamiento-identificacion-2}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid309",
                            "left",
                            250,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1302px',
                            '1225px'
                        ],
                        [
                            "eid369",
                            "left",
                            1500,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1225px',
                            '1225px'
                        ],
                        [
                            "eid375",
                            "left",
                            1750,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1225px',
                            '1225px'
                        ],
                        [
                            "eid428",
                            "left",
                            2750,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1225px',
                            '1225px'
                        ],
                        [
                            "eid430",
                            "left",
                            3000,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1225px',
                            '1225px'
                        ],
                        [
                            "eid432",
                            "left",
                            3250,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1225px',
                            '1225px'
                        ],
                        [
                            "eid434",
                            "left",
                            3500,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1225px',
                            '1225px'
                        ],
                        [
                            "eid436",
                            "left",
                            3750,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1225px',
                            '1225px'
                        ],
                        [
                            "eid343",
                            "left",
                            4000,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1302px',
                            '1225px'
                        ],
                        [
                            "eid495",
                            "left",
                            5750,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1225px',
                            '1225px'
                        ],
                        [
                            "eid347",
                            "left",
                            6250,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1302px',
                            '1225px'
                        ],
                        [
                            "eid518",
                            "left",
                            8250,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1225px',
                            '1225px'
                        ],
                        [
                            "eid351",
                            "left",
                            8500,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1302px',
                            '1225px'
                        ],
                        [
                            "eid474",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${etapas-popup-analisis-clasificacion-but}",
                            'none',
                            'block'
                        ],
                        [
                            "eid478",
                            "display",
                            4850,
                            0,
                            "linear",
                            "${etapas-popup-analisis-clasificacion-but}",
                            'block',
                            'none'
                        ],
                        [
                            "eid390",
                            "top",
                            2000,
                            250,
                            "linear",
                            "${etapas-popup-levantamiento-tecnicas-but_narrativa}",
                            '439px',
                            '81px'
                        ],
                        [
                            "eid399",
                            "top",
                            2250,
                            250,
                            "linear",
                            "${etapas-popup-levantamiento-tecnicas-but_narrativa}",
                            '81px',
                            '-90px'
                        ],
                        [
                            "eid520",
                            "display",
                            7381,
                            0,
                            "linear",
                            "${etapas-popup-definicion-formatoe}",
                            'none',
                            'block'
                        ],
                        [
                            "eid523",
                            "display",
                            7871,
                            0,
                            "linear",
                            "${etapas-popup-definicion-formatoe}",
                            'block',
                            'none'
                        ],
                        [
                            "eid336",
                            "display",
                            1678,
                            0,
                            "linear",
                            "${Text6Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid981",
                            "display",
                            7381,
                            0,
                            "linear",
                            "${Text6Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid982",
                            "display",
                            7633,
                            0,
                            "linear",
                            "${Text6Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid301",
                            "height",
                            250,
                            750,
                            "linear",
                            "${Rectangle}",
                            '25px',
                            '600px'
                        ],
                        [
                            "eid372",
                            "height",
                            1500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '600px',
                            '600px'
                        ],
                        [
                            "eid374",
                            "height",
                            1750,
                            0,
                            "linear",
                            "${Rectangle}",
                            '600px',
                            '600px'
                        ],
                        [
                            "eid439",
                            "height",
                            3750,
                            0,
                            "linear",
                            "${Rectangle}",
                            '600px',
                            '600px'
                        ],
                        [
                            "eid357",
                            "height",
                            4000,
                            750,
                            "linear",
                            "${Rectangle}",
                            '25px',
                            '600px'
                        ],
                        [
                            "eid494",
                            "height",
                            5750,
                            0,
                            "linear",
                            "${Rectangle}",
                            '600px',
                            '600px'
                        ],
                        [
                            "eid361",
                            "height",
                            6250,
                            750,
                            "linear",
                            "${Rectangle}",
                            '25px',
                            '600px'
                        ],
                        [
                            "eid517",
                            "height",
                            8000,
                            0,
                            "linear",
                            "${Rectangle}",
                            '600px',
                            '600px'
                        ],
                        [
                            "eid365",
                            "height",
                            8500,
                            750,
                            "linear",
                            "${Rectangle}",
                            '25px',
                            '600px'
                        ],
                        [
                            "eid479",
                            "display",
                            4950,
                            0,
                            "linear",
                            "${etapas-popup-analisis-clasificacion}",
                            'none',
                            'block'
                        ],
                        [
                            "eid484",
                            "display",
                            5140,
                            0,
                            "linear",
                            "${etapas-popup-analisis-clasificacion}",
                            'block',
                            'none'
                        ],
                        [
                            "eid487",
                            "display",
                            5374,
                            0,
                            "linear",
                            "${etapas-popup-analisis-diseno}",
                            'none',
                            'block'
                        ],
                        [
                            "eid488",
                            "display",
                            5626,
                            0,
                            "linear",
                            "${etapas-popup-analisis-diseno}",
                            'block',
                            'none'
                        ],
                        [
                            "eid409",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${etapas-popup-levantamiento-tecnicas}",
                            'none',
                            'block'
                        ],
                        [
                            "eid412",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${etapas-popup-levantamiento-tecnicas}",
                            'block',
                            'none'
                        ],
                        [
                            "eid503",
                            "display",
                            6750,
                            0,
                            "linear",
                            "${etapas-popup-definicion-formatoc-but}",
                            'none',
                            'block'
                        ],
                        [
                            "eid509",
                            "display",
                            7100,
                            0,
                            "linear",
                            "${etapas-popup-definicion-formatoc-but}",
                            'block',
                            'none'
                        ],
                        [
                            "eid489",
                            "display",
                            5626,
                            0,
                            "linear",
                            "${etapas-popup-analisis-negociacion}",
                            'none',
                            'block'
                        ],
                        [
                            "eid490",
                            "display",
                            5868,
                            0,
                            "linear",
                            "${etapas-popup-analisis-negociacion}",
                            'block',
                            'none'
                        ],
                        [
                            "eid471",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${etapas-popup-analisis-negociacion-but}",
                            'none',
                            'block'
                        ],
                        [
                            "eid475",
                            "display",
                            4850,
                            0,
                            "linear",
                            "${etapas-popup-analisis-negociacion-but}",
                            'block',
                            'none'
                        ],
                        [
                            "eid500",
                            "left",
                            6500,
                            250,
                            "linear",
                            "${etapas-popup-definicion-formatoe-but}",
                            '1366px',
                            '856px'
                        ],
                        [
                            "eid466",
                            "left",
                            4192,
                            200,
                            "linear",
                            "${etapas-popup-analisis-modelado-but}",
                            '-316px',
                            '129px'
                        ],
                        [
                            "eid393",
                            "top",
                            2000,
                            250,
                            "linear",
                            "${etapas-popup-levantamiento-tecnicas-but_reuniones}",
                            '390px',
                            '81px'
                        ],
                        [
                            "eid403",
                            "top",
                            2250,
                            250,
                            "linear",
                            "${etapas-popup-levantamiento-tecnicas-but_reuniones}",
                            '81px',
                            '-90px'
                        ],
                        [
                            "eid504",
                            "display",
                            6500,
                            0,
                            "linear",
                            "${etapas-popup-definicion-formatoe-but}",
                            'none',
                            'block'
                        ],
                        [
                            "eid508",
                            "display",
                            7100,
                            0,
                            "linear",
                            "${etapas-popup-definicion-formatoe-but}",
                            'block',
                            'none'
                        ],
                        [
                            "eid566",
                            "top",
                            8750,
                            250,
                            "linear",
                            "${etapas-popup-validacion-but_revision}",
                            '-63px',
                            '332px'
                        ],
                        [
                            "eid524",
                            "display",
                            7381,
                            0,
                            "linear",
                            "${etapas-popup-definicion-formatoe2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid525",
                            "display",
                            7871,
                            0,
                            "linear",
                            "${etapas-popup-definicion-formatoe2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid395",
                            "top",
                            2000,
                            250,
                            "linear",
                            "${etapas-popup-levantamiento-tecnicas-but_vistas}",
                            '-438px',
                            '-87px'
                        ],
                        [
                            "eid405",
                            "top",
                            2250,
                            250,
                            "linear",
                            "${etapas-popup-levantamiento-tecnicas-but_vistas}",
                            '-87px',
                            '-90px'
                        ],
                        [
                            "eid455",
                            "top",
                            3750,
                            0,
                            "linear",
                            "${TextCopy4}",
                            '183px',
                            '183px'
                        ],
                        [
                            "eid325",
                            "left",
                            1500,
                            250,
                            "linear",
                            "${etapas-popup-levantamiento-identificacion-1}",
                            '27px',
                            '-1254px'
                        ],
                        [
                            "eid391",
                            "top",
                            2000,
                            250,
                            "linear",
                            "${etapas-popup-levantamiento-tecnicas-but_prototipos}",
                            '-438px',
                            '-87px'
                        ],
                        [
                            "eid401",
                            "top",
                            2250,
                            250,
                            "linear",
                            "${etapas-popup-levantamiento-tecnicas-but_prototipos}",
                            '-87px',
                            '-90px'
                        ],
                        [
                            "eid472",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${etapas-popup-analisis-diseno-but}",
                            'none',
                            'block'
                        ],
                        [
                            "eid476",
                            "display",
                            4850,
                            0,
                            "linear",
                            "${etapas-popup-analisis-diseno-but}",
                            'block',
                            'none'
                        ],
                        [
                            "eid467",
                            "left",
                            4364,
                            200,
                            "linear",
                            "${etapas-popup-analisis-diseno-but}",
                            '-316px',
                            '129px'
                        ],
                        [
                            "eid389",
                            "left",
                            2000,
                            250,
                            "linear",
                            "${etapas-popup-levantamiento-tecnicas-but_narrativa}",
                            '654px',
                            '272px'
                        ],
                        [
                            "eid398",
                            "left",
                            2250,
                            250,
                            "linear",
                            "${etapas-popup-levantamiento-tecnicas-but_narrativa}",
                            '272px',
                            '577px'
                        ],
                        [
                            "eid535",
                            "opacity",
                            8500,
                            750,
                            "linear",
                            "${etapas-popup-validacion}",
                            '0',
                            '1'
                        ],
                        [
                            "eid423",
                            "display",
                            3638,
                            0,
                            "linear",
                            "${etapas-popup-levantamiento-tecnicas-but_narrativa-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid444",
                            "display",
                            3139,
                            0,
                            "linear",
                            "${TextCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid445",
                            "display",
                            3354,
                            0,
                            "linear",
                            "${TextCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid527",
                            "left",
                            7500,
                            250,
                            "linear",
                            "${etapas-popup-definicion-formatoe2}",
                            '1340px',
                            '73px'
                        ],
                        [
                            "eid491",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${analisis-sm-c}",
                            'none',
                            'block'
                        ],
                        [
                            "eid492",
                            "display",
                            5868,
                            0,
                            "linear",
                            "${analisis-sm-c}",
                            'block',
                            'none'
                        ],
                        [
                            "eid543",
                            "display",
                            9625,
                            0,
                            "linear",
                            "${etapas-popup-validacion-but_validaciones-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid544",
                            "display",
                            9885,
                            0,
                            "linear",
                            "${etapas-popup-validacion-but_validaciones-a}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "comentarios-mc": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '926px', '37px', 'auto', 'auto'],
                            id: 'comentarios-titulo',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/comentarios-titulo.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['-788px', '58px', '450px', '405px', 'auto', 'auto'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​La especificación de requerimientos en la vida real no termina con la aprobación y la validación del documento. Es un proceso que se expande a través de todo el ciclo de vida del software.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Con frecuencia los requerimientos sufren cambios a lo largo de las demás etapas del proyecto por razones tan diversas como :  mala especificación por parte del cliente,  mala comunicación entre los stakeholders, cambios normativos o de ley, cambios en el mercado, etc.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Por tanto el cambio es inevitable y lo que se debe hacer es minimizar el impacto sobre el proyecto. En estos casos los interesados del proyecto deben llegar a un acuerdo que permita la continuidad del mismo.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Es de crucial importancia que se tenga trazabilidad, es decir, evidencias de la forma como se llegó a la definición de cada requerimiento ya que estos cambios implican costos que deberá asumir el cliente, el contratista o ambos. (BOURQUE, 2014)</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Es importante también que tanto cliente como el contratista acepten formalmente los compromisos en actas, memorandos, y demás instrumentos para que en etapas posteriores se puedan asignar las responsabilidades de manera más fácil y evitar conflictos por este motivo.</p>',
                            align: 'justify',
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
                        },
                        {
                            rect: ['1030px', '46px', '460px', '417px', 'auto', 'auto'],
                            id: 'comentarios-ill',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/comentarios-ill.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'cruz-negra5',
                            rect: ['423px', '369px', '140px', '140px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.25', '0.25']],
                            fill: ['rgba(0,0,0,0)', 'images/cruz-negra.gif', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'cruz-negra5Copy',
                            rect: ['680px', '370px', '140px', '140px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.2', '0.2']],
                            fill: ['rgba(0,0,0,0)', 'images/cruz-negra.gif', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'cruz-negra5Copy2',
                            rect: ['680px', '155px', '140px', '140px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.2', '0.2']],
                            fill: ['rgba(0,0,0,0)', 'images/cruz-negra.gif', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'cruz-negra5Copy3',
                            rect: ['547px', '-12px', '140px', '140px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.25', '0.25']],
                            fill: ['rgba(0,0,0,0)', 'images/cruz-negra.gif', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '926px', '37px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid575",
                            "left",
                            500,
                            500,
                            "linear",
                            "${comentarios-ill}",
                            '1030px',
                            '481px'
                        ],
                        [
                            "eid576",
                            "left",
                            0,
                            500,
                            "linear",
                            "${Text}",
                            '-788px',
                            '0px'
                        ]
                    ]
                }
            },
            "ejemplos-mc": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '459px', '37px', 'auto', 'auto'],
                            id: 'ejemplos-titulo',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ejemplos-titulo.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'ejemplos-funcionales-but',
                            rect: ['29px', '95px', '402px', '66px', 'auto', 'auto'],
                            userClass: 'size-opacity',
                            fill: ['rgba(0,0,0,0)', 'images/ejemplos-funcionales-but.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'ejemplos-control-but',
                            rect: ['29px', '188px', '402px', '66px', 'auto', 'auto'],
                            userClass: 'size-opacity',
                            fill: ['rgba(0,0,0,0)', 'images/ejemplos-control-but.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'ejemplos-consultorio-but',
                            rect: ['29px', '281px', '402px', '66px', 'auto', 'auto'],
                            userClass: 'size-opacity',
                            fill: ['rgba(0,0,0,0)', 'images/ejemplos-consultorio-but.svg', '0px', '0px']
                        },
                        {
                            rect: ['147px', '376px', '167px', '113px', 'auto', 'auto'],
                            id: 'clic-sobre-2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/clic-sobre-2.svg', '0px', '0px']
                        },
                        {
                            rect: ['505px', '-22px', null, null, 'auto', 'auto'],
                            id: 'cp1-mc3',
                            symbolName: 'cp1-mc',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '459px', '37px']
                        }
                    }
                },
                timeline: {
                    duration: 4750,
                    autoPlay: true,
                    data: [
                        [
                            "eid942",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${ejemplos-consultorio-but}",
                            '29px',
                            '29px'
                        ],
                        [
                            "eid943",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${ejemplos-control-but}",
                            '29px',
                            '29px'
                        ],
                        [
                            "eid944",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${ejemplos-funcionales-but}",
                            '29px',
                            '29px'
                        ]
                    ]
                }
            },
            "ejemplos-popup": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '0px', '0px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            id: 'Rectangle',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0.90)']
                        },
                        {
                            rect: ['53px', '108px', '518px', '384px', 'auto', 'auto'],
                            type: 'image',
                            id: 'ejemplos-popup-funcionales-l',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/ejemplos-popup-funcionales-l.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'funcionales-container',
                            opacity: '0',
                            rect: ['602px', '73px', '634px', '465px', 'auto', 'auto'],
                            overflow: 'auto',
                            display: 'none',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(0,0,0,0.851)'],
                            c: [
                            {
                                id: 'ejemplos-popup-funcionales-r',
                                type: 'image',
                                rect: ['0px', '0px', '612px', '937px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/ejemplos-popup-funcionales-r.svg', '0px', '0px']
                            }]
                        },
                        {
                            rect: ['51px', '25px', '1148px', '553px', 'auto', 'auto'],
                            type: 'image',
                            id: 'ejemplos-popup-control',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/ejemplos-popup-control.svg', '0px', '0px']
                        },
                        {
                            rect: ['30px', '-259px', '394px', '224px', 'auto', 'auto'],
                            id: 'ejemplos-popup-consultorio-1-enunciado',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/ejemplos-popup-consultorio-1-enunciado.svg', '0px', '0px']
                        },
                        {
                            rect: ['70px', '615px', '314px', '52px', 'auto', 'auto'],
                            userClass: 'size-opacity',
                            id: 'ejemplos-popup-consultorio-c2-but',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/ejemplos-popup-consultorio-c2-but.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            overflow: 'visible',
                            id: 'ej3-mc',
                            symbolName: 'ej3-mc',
                            rect: ['1309px', '0', '27', '25', 'auto', 'auto'],
                            sizeRange: ['0px', '', '', '']
                        },
                        {
                            rect: ['0px', '0px', '1289px', '601px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            id: 'Rectangle2',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0.85)']
                        },
                        {
                            rect: ['0px', '0px', '1280px', '601px', 'auto', 'auto'],
                            type: 'image',
                            id: 'ejemplos-popup-consultorio-2',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/ejemplos-popup-consultorio-2.svg', '0px', '0px']
                        },
                        {
                            rect: ['1301px', '-47px', '35px', '35px', 'auto', 'auto'],
                            userClass: 'size-opacity',
                            id: 'btn-cerrar-popup',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/btn-cerrar-popup.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '27px', '25px']
                        }
                    }
                },
                timeline: {
                    duration: 84500,
                    autoPlay: true,
                    labels: {
                        "funcionales": 250,
                        "control": 1250,
                        "consultorio": 2250,
                        "c2": 3250
                    },
                    data: [
                        [
                            "eid588",
                            "display",
                            250,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'none',
                            'block'
                        ],
                        [
                            "eid589",
                            "display",
                            1050,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'block',
                            'none'
                        ],
                        [
                            "eid610",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'none',
                            'block'
                        ],
                        [
                            "eid611",
                            "display",
                            2050,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'block',
                            'none'
                        ],
                        [
                            "eid621",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'none',
                            'block'
                        ],
                        [
                            "eid639",
                            "display",
                            3569,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'block',
                            'none'
                        ],
                        [
                            "eid577",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid590",
                            "display",
                            1050,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid605",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid606",
                            "display",
                            2050,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid629",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid630",
                            "display",
                            3569,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid620",
                            "opacity",
                            3250,
                            250,
                            "linear",
                            "${ejemplos-popup-consultorio-2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid586",
                            "left",
                            250,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1301px',
                            '1220px'
                        ],
                        [
                            "eid612",
                            "left",
                            1250,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1301px',
                            '1220px'
                        ],
                        [
                            "eid625",
                            "left",
                            2250,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1301px',
                            '1220px'
                        ],
                        [
                            "eid616",
                            "opacity",
                            1250,
                            750,
                            "linear",
                            "${ejemplos-popup-control}",
                            '0',
                            '1'
                        ],
                        [
                            "eid647",
                            "top",
                            2250,
                            750,
                            "linear",
                            "${ejemplos-popup-consultorio-1-enunciado}",
                            '-259px',
                            '101px'
                        ],
                        [
                            "eid582",
                            "width",
                            250,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '1280px'
                        ],
                        [
                            "eid609",
                            "width",
                            1250,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '1280px'
                        ],
                        [
                            "eid637",
                            "width",
                            2250,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '1280px'
                        ],
                        [
                            "eid595",
                            "display",
                            250,
                            0,
                            "linear",
                            "${funcionales-container}",
                            'none',
                            'block'
                        ],
                        [
                            "eid597",
                            "display",
                            1050,
                            0,
                            "linear",
                            "${funcionales-container}",
                            'block',
                            'none'
                        ],
                        [
                            "eid587",
                            "top",
                            250,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '-47px',
                            '25px'
                        ],
                        [
                            "eid613",
                            "top",
                            1250,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '-47px',
                            '25px'
                        ],
                        [
                            "eid627",
                            "top",
                            2250,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '-47px',
                            '25px'
                        ],
                        [
                            "eid593",
                            "opacity",
                            250,
                            750,
                            "linear",
                            "${funcionales-container}",
                            '0',
                            '1'
                        ],
                        [
                            "eid645",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${ejemplos-popup-consultorio-1-enunciado}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2",
                            "opacity",
                            3250,
                            250,
                            "linear",
                            "${Rectangle2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid648",
                            "top",
                            2250,
                            750,
                            "linear",
                            "${ejemplos-popup-consultorio-c2-but}",
                            '615px',
                            '375px'
                        ],
                        [
                            "eid596",
                            "display",
                            250,
                            0,
                            "linear",
                            "${ejemplos-popup-funcionales-l}",
                            'none',
                            'block'
                        ],
                        [
                            "eid598",
                            "display",
                            1050,
                            0,
                            "linear",
                            "${ejemplos-popup-funcionales-l}",
                            'block',
                            'none'
                        ],
                        [
                            "eid583",
                            "height",
                            250,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '600px'
                        ],
                        [
                            "eid608",
                            "height",
                            1250,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '600px'
                        ],
                        [
                            "eid635",
                            "height",
                            2250,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '600px'
                        ],
                        [
                            "eid646",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${ejemplos-popup-consultorio-c2-but}",
                            'none',
                            'block'
                        ],
                        [
                            "eid615",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${ejemplos-popup-control}",
                            'none',
                            'block'
                        ],
                        [
                            "eid617",
                            "display",
                            2050,
                            0,
                            "linear",
                            "${ejemplos-popup-control}",
                            'block',
                            'none'
                        ],
                        [
                            "eid3",
                            "display",
                            3250,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid579",
                            "opacity",
                            250,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid607",
                            "opacity",
                            1250,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid633",
                            "opacity",
                            2250,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid594",
                            "opacity",
                            250,
                            750,
                            "linear",
                            "${ejemplos-popup-funcionales-l}",
                            '0',
                            '1'
                        ],
                        [
                            "eid649",
                            "left",
                            2250,
                            750,
                            "linear",
                            "${ej3-mc}",
                            '1309px',
                            '454px'
                        ],
                        [
                            "eid619",
                            "display",
                            3250,
                            0,
                            "linear",
                            "${ejemplos-popup-consultorio-2}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "ej3-mc": {
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
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '830px', '600px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ['rgba(0,0,0,0.902)'],
                            c: [
                            {
                                type: 'image',
                                transform: [[], [], [], ['0.67', '0.67']],
                                rect: ['-251px', '-148px', '1524px', '897px', 'auto', 'auto'],
                                id: 'ejemplos-3-bg',
                                opacity: '1',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/ejemplos-3-bg.svg', '0px', '0px']
                            },
                            {
                                rect: ['391px', '169px', '430', '549', 'auto', 'auto'],
                                type: 'rect',
                                symbolName: 'p3mc',
                                display: 'none',
                                opacity: '1',
                                id: 'p3mc',
                                transform: [[], [], [], ['0.75', '0.75']]
                            },
                            {
                                rect: ['394px', '22px', '260px', '148px', 'auto', 'auto'],
                                type: 'image',
                                id: 'p3g1',
                                opacity: '0',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/p3g1.svg', '0px', '0px']
                            },
                            {
                                rect: ['131px', '288px', '365', '489', 'auto', 'auto'],
                                type: 'rect',
                                id: 'p4-mc',
                                symbolName: 'p4-mc',
                                opacity: '1',
                                transform: [[], [], [], ['1.5', '1.5']]
                            },
                            {
                                type: 'group',
                                id: 'globitos',
                                rect: ['-198', '-68', '0', '0', 'auto', 'auto'],
                                c: [
                                {
                                    rect: ['670px', '199px', '200px', '113px', 'auto', 'auto'],
                                    type: 'image',
                                    id: 'p3g3',
                                    opacity: '0',
                                    display: 'none',
                                    fill: ['rgba(0,0,0,0)', 'images/p3g3.svg', '0px', '0px']
                                },
                                {
                                    rect: ['300px', '162px', '290px', '103px', 'auto', 'auto'],
                                    type: 'image',
                                    id: 'p4g4',
                                    opacity: '0',
                                    display: 'none',
                                    fill: ['rgba(0,0,0,0)', 'images/p4g4.svg', '0px', '0px']
                                },
                                {
                                    rect: ['691px', '198px', '200px', '113px', 'auto', 'auto'],
                                    type: 'image',
                                    id: 'p3g4',
                                    opacity: '0',
                                    display: 'none',
                                    fill: ['rgba(0,0,0,0)', 'images/p3g4.svg', '0px', '0px']
                                },
                                {
                                    rect: ['275px', '167px', '290px', '103px', 'auto', 'auto'],
                                    type: 'image',
                                    id: 'p4g5',
                                    opacity: '0',
                                    display: 'none',
                                    fill: ['rgba(0,0,0,0)', 'images/p4g5.svg', '0px', '0px']
                                },
                                {
                                    rect: ['613px', '198px', '290px', '113px', 'auto', 'auto'],
                                    type: 'image',
                                    id: 'p3g5',
                                    opacity: '0',
                                    display: 'none',
                                    fill: ['rgba(0,0,0,0)', 'images/p3g5.svg', '0px', '0px']
                                },
                                {
                                    rect: ['305px', '152px', '210px', '103px', 'auto', 'auto'],
                                    type: 'image',
                                    id: 'p4g6',
                                    opacity: '0.99',
                                    display: 'none',
                                    fill: ['rgba(0,0,0,0)', 'images/p4g6.svg', '0px', '0px']
                                },
                                {
                                    rect: ['593px', '218px', '323px', '113px', 'auto', 'auto'],
                                    type: 'image',
                                    id: 'p3g6',
                                    opacity: '0',
                                    display: 'none',
                                    fill: ['rgba(0,0,0,0)', 'images/p3g6.svg', '0px', '0px']
                                },
                                {
                                    rect: ['275px', '166px', '290px', '103px', 'auto', 'auto'],
                                    type: 'image',
                                    id: 'p4g7',
                                    opacity: '0',
                                    display: 'none',
                                    fill: ['rgba(0,0,0,0)', 'images/p4g7.svg', '0px', '0px']
                                },
                                {
                                    rect: ['683px', '213px', '200px', '113px', 'auto', 'auto'],
                                    type: 'image',
                                    id: 'p3g7',
                                    opacity: '0',
                                    display: 'none',
                                    fill: ['rgba(0,0,0,0)', 'images/p3g7.svg', '0px', '0px']
                                },
                                {
                                    rect: ['283px', '152px', '210px', '103px', 'auto', 'auto'],
                                    type: 'image',
                                    id: 'p4g8',
                                    opacity: '0',
                                    display: 'none',
                                    fill: ['rgba(0,0,0,0)', 'images/p4g8.svg', '0px', '0px']
                                },
                                {
                                    rect: ['693px', '203px', '200px', '113px', 'auto', 'auto'],
                                    type: 'image',
                                    id: 'p3g8',
                                    opacity: '0',
                                    display: 'none',
                                    fill: ['rgba(0,0,0,0)', 'images/p3g8.svg', '0px', '0px']
                                },
                                {
                                    rect: ['275px', '165px', '290px', '103px', 'auto', 'auto'],
                                    type: 'image',
                                    id: 'p4g9',
                                    opacity: '0',
                                    display: 'none',
                                    fill: ['rgba(0,0,0,0)', 'images/p4g9.svg', '0px', '0px']
                                },
                                {
                                    rect: ['704px', '216px', '200px', '113px', 'auto', 'auto'],
                                    type: 'image',
                                    id: 'p3g9',
                                    opacity: '0',
                                    display: 'none',
                                    fill: ['rgba(0,0,0,0)', 'images/p3g9.svg', '0px', '0px']
                                },
                                {
                                    rect: ['197px', '95px', '268px', '152px', 'auto', 'auto'],
                                    type: 'image',
                                    id: 'p4g1',
                                    opacity: '0',
                                    display: 'none',
                                    fill: ['rgba(0,0,0,0)', 'images/p4g1.svg', '0px', '0px']
                                },
                                {
                                    rect: ['704px', '206px', '200px', '113px', 'auto', 'auto'],
                                    type: 'image',
                                    id: 'p3g2',
                                    opacity: '0',
                                    display: 'none',
                                    fill: ['rgba(0,0,0,0)', 'images/p3g2.svg', '0px', '0px']
                                },
                                {
                                    rect: ['304px', '160px', '290px', '103px', 'auto', 'auto'],
                                    type: 'image',
                                    id: 'p4g2',
                                    opacity: '0',
                                    display: 'none',
                                    fill: ['rgba(0,0,0,0)', 'images/p4g2.svg', '0px', '0px']
                                }]
                            },
                            {
                                type: 'image',
                                transform: [[], [], [], ['1.5', '1.5']],
                                rect: ['-14px', '-119px', '837px', '837px', 'auto', 'auto'],
                                id: 'hosp-ill',
                                opacity: '0',
                                display: 'block',
                                fill: ['rgba(0,0,0,0)', 'images/hosp-ill.svg', '0px', '0px']
                            },
                            {
                                rect: ['22px', '3px', '762', '133', 'auto', 'auto'],
                                id: 'bubesloop',
                                symbolName: 'bubesloop',
                                type: 'rect',
                                display: 'none'
                            },
                            {
                                rect: ['643', '75', '44', '77', 'auto', 'auto'],
                                id: 'globo-loop2',
                                symbolName: 'globo-loop',
                                type: 'rect',
                                display: 'none'
                            },
                            {
                                rect: ['10px', '22px', '65', '34', 'auto', 'auto'],
                                id: 'heli-loop',
                                symbolName: 'heli-loop',
                                type: 'rect',
                                display: 'none'
                            }]
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Ketsa_-_02_-_solid.mp3'],
                            id: 'ketsa',
                            rect: ['-326', '490', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            type: 'image',
                            id: 'btn-play',
                            rect: ['777px', '545px', '25px', '28px', 'auto', 'auto'],
                            userClass: 'size-opacity',
                            fill: ['rgba(0,0,0,0)', 'images/btn-play.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'btn-pause',
                            rect: ['717px', '545px', '28px', '28px', 'auto', 'auto'],
                            userClass: 'size-opacity',
                            fill: ['rgba(0,0,0,0)', 'images/btn-pause.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'btn-stop',
                            rect: ['658px', '546px', '24px', '24px', 'auto', 'auto'],
                            userClass: 'size-opacity',
                            fill: ['rgba(0,0,0,0)', 'images/btn-stop.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '830px', '600px']
                        }
                    }
                },
                timeline: {
                    duration: 84500,
                    autoPlay: true,
                    data: [
                        [
                            "eid677",
                            "left",
                            6500,
                            1500,
                            "easeInOutElastic",
                            "${p3mc}",
                            '369px',
                            '909px'
                        ],
                        [
                            "eid715",
                            "left",
                            11000,
                            1000,
                            "easeInOutElastic",
                            "${p3mc}",
                            '909px',
                            '391px'
                        ],
                        [
                            "eid675",
                            "scaleX",
                            6500,
                            0,
                            "linear",
                            "${p3mc}",
                            '1',
                            '1'
                        ],
                        [
                            "eid713",
                            "scaleX",
                            11000,
                            1000,
                            "easeInOutElastic",
                            "${p3mc}",
                            '1',
                            '0.75'
                        ],
                        [
                            "eid758",
                            "top",
                            80000,
                            0,
                            "linear",
                            "${heli-loop}",
                            '22px',
                            '22px'
                        ],
                        [
                            "eid949",
                            "top",
                            1786,
                            214,
                            "linear",
                            "${hosp-ill}",
                            '-119px',
                            '89px'
                        ],
                        [
                            "eid744",
                            "top",
                            78750,
                            1250,
                            "easeOutBack",
                            "${hosp-ill}",
                            '89px',
                            '-27px'
                        ],
                        [
                            "eid661",
                            "scaleY",
                            2000,
                            0,
                            "linear",
                            "${p4-mc}",
                            '1.5',
                            '1.5'
                        ],
                        [
                            "eid681",
                            "scaleY",
                            6500,
                            0,
                            "easeInOutElastic",
                            "${p4-mc}",
                            '1.5',
                            '1.5'
                        ],
                        [
                            "eid706",
                            "scaleY",
                            11000,
                            1000,
                            "easeInOutElastic",
                            "${p4-mc}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid674",
                            "top",
                            6500,
                            0,
                            "linear",
                            "${p3mc}",
                            '157px',
                            '157px'
                        ],
                        [
                            "eid716",
                            "top",
                            11000,
                            1000,
                            "easeInOutElastic",
                            "${p3mc}",
                            '157px',
                            '169px'
                        ],
                        [
                            "eid814",
                            "opacity",
                            28372,
                            500,
                            "easeInOutElastic",
                            "${p3g4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid818",
                            "opacity",
                            33000,
                            250,
                            "easeInOutElastic",
                            "${p3g4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid697",
                            "scaleX",
                            11000,
                            1000,
                            "easeInOutElastic",
                            "${ejemplos-3-bg}",
                            '1',
                            '0.67'
                        ],
                        [
                            "eid854",
                            "opacity",
                            52000,
                            500,
                            "easeOutBack",
                            "${p4g7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid856",
                            "opacity",
                            56870,
                            250,
                            "easeOutBack",
                            "${p4g7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid826",
                            "opacity",
                            33000,
                            487,
                            "easeOutBack",
                            "${p4g5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid828",
                            "opacity",
                            36750,
                            250,
                            "easeOutBack",
                            "${p4g5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid833",
                            "opacity",
                            37000,
                            500,
                            "easeOutBack",
                            "${p3g5}",
                            '0',
                            '0.99'
                        ],
                        [
                            "eid835",
                            "opacity",
                            41500,
                            250,
                            "easeOutBack",
                            "${p3g5}",
                            '0.9900000095367432',
                            '0'
                        ],
                        [
                            "eid686",
                            "display",
                            9000,
                            0,
                            "easeInOutElastic",
                            "${p4g1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid692",
                            "display",
                            11000,
                            0,
                            "easeInOutElastic",
                            "${p4g1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid660",
                            "scaleX",
                            2000,
                            0,
                            "linear",
                            "${p4-mc}",
                            '1.5',
                            '1.5'
                        ],
                        [
                            "eid680",
                            "scaleX",
                            6500,
                            0,
                            "easeInOutElastic",
                            "${p4-mc}",
                            '1.5',
                            '1.5'
                        ],
                        [
                            "eid705",
                            "scaleX",
                            11000,
                            1000,
                            "easeInOutElastic",
                            "${p4-mc}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid794",
                            "scaleY",
                            0,
                            1786,
                            "easeOutBack",
                            "${hosp-ill}",
                            '1',
                            '2.5'
                        ],
                        [
                            "eid742",
                            "scaleY",
                            78750,
                            1250,
                            "easeOutBack",
                            "${hosp-ill}",
                            '2.5',
                            '1'
                        ],
                        [
                            "eid848",
                            "opacity",
                            46000,
                            500,
                            "easeOutBack",
                            "${p3g6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid850",
                            "opacity",
                            52000,
                            250,
                            "easeOutBack",
                            "${p3g6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid796",
                            "display",
                            2000,
                            0,
                            "easeOutBack",
                            "${ejemplos-3-bg}",
                            'none',
                            'block'
                        ],
                        [
                            "eid765",
                            "display",
                            79750,
                            0,
                            "linear",
                            "${heli-loop}",
                            'none',
                            'block'
                        ],
                        [
                            "eid837",
                            "display",
                            41500,
                            0,
                            "easeOutBack",
                            "${p4g6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid842",
                            "display",
                            46250,
                            0,
                            "easeOutBack",
                            "${p4g6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid786",
                            "opacity",
                            0,
                            500,
                            "easeOutBack",
                            "${hosp-ill}",
                            '0',
                            '1'
                        ],
                        [
                            "eid790",
                            "opacity",
                            1786,
                            714,
                            "easeOutBack",
                            "${hosp-ill}",
                            '1',
                            '0'
                        ],
                        [
                            "eid740",
                            "opacity",
                            78750,
                            500,
                            "easeOutBack",
                            "${hosp-ill}",
                            '0',
                            '1'
                        ],
                        [
                            "eid670",
                            "opacity",
                            4500,
                            500,
                            "linear",
                            "${p3g1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid672",
                            "opacity",
                            6250,
                            250,
                            "linear",
                            "${p3g1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid725",
                            "opacity",
                            15750,
                            500,
                            "easeInOutElastic",
                            "${p4g2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid727",
                            "opacity",
                            20250,
                            250,
                            "easeInOutElastic",
                            "${p4g2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid757",
                            "left",
                            80000,
                            0,
                            "linear",
                            "${heli-loop}",
                            '10px',
                            '10px'
                        ],
                        [
                            "eid663",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${p4-mc}",
                            '248px',
                            '248px'
                        ],
                        [
                            "eid685",
                            "top",
                            6500,
                            1500,
                            "easeInOutElastic",
                            "${p4-mc}",
                            '248px',
                            '288px'
                        ],
                        [
                            "eid708",
                            "top",
                            11000,
                            1000,
                            "easeInOutElastic",
                            "${p4-mc}",
                            '288px',
                            '187px'
                        ],
                        [
                            "eid824",
                            "display",
                            33000,
                            0,
                            "easeOutBack",
                            "${p4g5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid829",
                            "display",
                            37000,
                            0,
                            "easeOutBack",
                            "${p4g5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid872",
                            "opacity",
                            66249,
                            501,
                            "easeOutBack",
                            "${p3g8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid874",
                            "opacity",
                            70250,
                            250,
                            "easeOutBack",
                            "${p3g8}",
                            '1',
                            '0'
                        ],
                        [
                            "eid676",
                            "scaleY",
                            6500,
                            0,
                            "linear",
                            "${p3mc}",
                            '1',
                            '1'
                        ],
                        [
                            "eid714",
                            "scaleY",
                            11000,
                            1000,
                            "easeInOutElastic",
                            "${p3mc}",
                            '1',
                            '0.75'
                        ],
                        [
                            "eid797",
                            "display",
                            20250,
                            0,
                            "easeInOutElastic",
                            "${p3g3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid803",
                            "display",
                            24000,
                            0,
                            "easeInOutElastic",
                            "${p3g3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid876",
                            "display",
                            70250,
                            0,
                            "easeOutBack",
                            "${p4g9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid881",
                            "display",
                            75116,
                            0,
                            "easeOutBack",
                            "${p4g9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid723",
                            "display",
                            15750,
                            0,
                            "easeInOutElastic",
                            "${p4g2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid728",
                            "display",
                            20500,
                            0,
                            "easeInOutElastic",
                            "${p4g2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid766",
                            "display",
                            79750,
                            0,
                            "linear",
                            "${globo-loop2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid698",
                            "scaleY",
                            11000,
                            1000,
                            "easeInOutElastic",
                            "${ejemplos-3-bg}",
                            '1',
                            '0.67'
                        ],
                        [
                            "eid667",
                            "display",
                            4500,
                            0,
                            "linear",
                            "${p3g1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid669",
                            "display",
                            6500,
                            0,
                            "linear",
                            "${p3g1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid883",
                            "display",
                            74866,
                            0,
                            "easeOutBack",
                            "${p3g9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid887",
                            "display",
                            78750,
                            0,
                            "easeOutBack",
                            "${p3g9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid812",
                            "display",
                            28372,
                            0,
                            "easeInOutElastic",
                            "${p3g4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid819",
                            "display",
                            33250,
                            0,
                            "easeInOutElastic",
                            "${p3g4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid682",
                            "left",
                            6500,
                            1500,
                            "easeInOutElastic",
                            "${ejemplos-3-bg}",
                            '-590px',
                            '0px'
                        ],
                        [
                            "eid699",
                            "left",
                            11000,
                            1000,
                            "easeInOutElastic",
                            "${ejemplos-3-bg}",
                            '0px',
                            '-251px'
                        ],
                        [
                            "eid784",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${hosp-ill}",
                            'block',
                            'block'
                        ],
                        [
                            "eid792",
                            "display",
                            2500,
                            0,
                            "easeOutBack",
                            "${hosp-ill}",
                            'block',
                            'none'
                        ],
                        [
                            "eid745",
                            "display",
                            78750,
                            0,
                            "easeInOutElastic",
                            "${hosp-ill}",
                            'none',
                            'block'
                        ],
                        [
                            "eid860",
                            "opacity",
                            56870,
                            500,
                            "easeOutBack",
                            "${p3g7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid862",
                            "opacity",
                            61250,
                            250,
                            "easeOutBack",
                            "${p3g7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid767",
                            "display",
                            79750,
                            0,
                            "linear",
                            "${bubesloop}",
                            'none',
                            'block'
                        ],
                        [
                            "eid804",
                            "display",
                            23750,
                            0,
                            "easeInOutElastic",
                            "${p4g4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid811",
                            "display",
                            28622,
                            0,
                            "easeInOutElastic",
                            "${p4g4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid746",
                            "left",
                            80000,
                            0,
                            "easeOutBack",
                            "${bubesloop}",
                            '22px',
                            '22px'
                        ],
                        [
                            "eid664",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${p4-mc}",
                            '-413px',
                            '-413px'
                        ],
                        [
                            "eid684",
                            "left",
                            6500,
                            1500,
                            "easeInOutElastic",
                            "${p4-mc}",
                            '-413px',
                            '131px'
                        ],
                        [
                            "eid707",
                            "left",
                            11000,
                            1000,
                            "easeInOutElastic",
                            "${p4-mc}",
                            '131px',
                            '40px'
                        ],
                        [
                            "eid878",
                            "opacity",
                            70250,
                            500,
                            "easeOutBack",
                            "${p4g9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid880",
                            "opacity",
                            74866,
                            250,
                            "easeOutBack",
                            "${p4g9}",
                            '1',
                            '0'
                        ],
                        [
                            "eid852",
                            "display",
                            52000,
                            0,
                            "easeOutBack",
                            "${p4g7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid857",
                            "display",
                            57120,
                            0,
                            "easeOutBack",
                            "${p4g7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid948",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${hosp-ill}",
                            '-14px',
                            '-14px'
                        ],
                        [
                            "eid743",
                            "left",
                            78750,
                            1250,
                            "easeOutBack",
                            "${hosp-ill}",
                            '-14px',
                            '-3px'
                        ],
                        [
                            "eid683",
                            "top",
                            6500,
                            1500,
                            "easeInOutElastic",
                            "${ejemplos-3-bg}",
                            '-82px',
                            '-59px'
                        ],
                        [
                            "eid700",
                            "top",
                            11000,
                            1000,
                            "easeInOutElastic",
                            "${ejemplos-3-bg}",
                            '-59px',
                            '-148px'
                        ],
                        [
                            "eid689",
                            "opacity",
                            9000,
                            500,
                            "easeInOutElastic",
                            "${p4g1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid691",
                            "opacity",
                            10750,
                            250,
                            "easeInOutElastic",
                            "${p4g1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid782",
                            "left",
                            9000,
                            500,
                            "linear",
                            "${p4g1}",
                            '197px',
                            '162px'
                        ],
                        [
                            "eid955",
                            "left",
                            9500,
                            240,
                            "linear",
                            "${p4g1}",
                            '162px',
                            '272px'
                        ],
                        [
                            "eid866",
                            "opacity",
                            61250,
                            500,
                            "easeOutBack",
                            "${p4g8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid869",
                            "opacity",
                            66249,
                            251,
                            "easeOutBack",
                            "${p4g8}",
                            '1',
                            '0'
                        ],
                        [
                            "eid858",
                            "display",
                            56870,
                            0,
                            "easeOutBack",
                            "${p3g7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid863",
                            "display",
                            61500,
                            0,
                            "easeOutBack",
                            "${p3g7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid830",
                            "display",
                            37000,
                            0,
                            "easeOutBack",
                            "${p3g5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid836",
                            "display",
                            41750,
                            0,
                            "easeOutBack",
                            "${p3g5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid884",
                            "opacity",
                            74866,
                            500,
                            "easeOutBack",
                            "${p3g9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid886",
                            "opacity",
                            78500,
                            250,
                            "easeOutBack",
                            "${p3g9}",
                            '1',
                            '0'
                        ],
                        [
                            "eid747",
                            "top",
                            80000,
                            0,
                            "easeOutBack",
                            "${bubesloop}",
                            '3px',
                            '3px'
                        ],
                        [
                            "eid717",
                            "display",
                            12500,
                            0,
                            "easeInOutElastic",
                            "${p3g2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid722",
                            "display",
                            16000,
                            0,
                            "easeInOutElastic",
                            "${p3g2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid808",
                            "opacity",
                            23750,
                            500,
                            "easeInOutElastic",
                            "${p4g4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid810",
                            "opacity",
                            28372,
                            250,
                            "easeInOutElastic",
                            "${p4g4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid793",
                            "scaleX",
                            0,
                            1786,
                            "easeOutBack",
                            "${hosp-ill}",
                            '1',
                            '2.5'
                        ],
                        [
                            "eid741",
                            "scaleX",
                            78750,
                            1250,
                            "easeOutBack",
                            "${hosp-ill}",
                            '2.5',
                            '1'
                        ],
                        [
                            "eid800",
                            "opacity",
                            20250,
                            500,
                            "easeInOutElastic",
                            "${p3g3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid802",
                            "opacity",
                            23750,
                            250,
                            "easeInOutElastic",
                            "${p3g3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid870",
                            "display",
                            66249,
                            0,
                            "easeOutBack",
                            "${p3g8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid875",
                            "display",
                            70500,
                            0,
                            "easeOutBack",
                            "${p3g8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid719",
                            "opacity",
                            12500,
                            500,
                            "easeInOutElastic",
                            "${p3g2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid721",
                            "opacity",
                            15750,
                            250,
                            "easeInOutElastic",
                            "${p3g2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid795",
                            "display",
                            2000,
                            0,
                            "easeOutBack",
                            "${p3mc}",
                            'none',
                            'block'
                        ],
                        [
                            "eid843",
                            "display",
                            46000,
                            0,
                            "easeOutBack",
                            "${p3g6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid851",
                            "display",
                            52250,
                            0,
                            "easeOutBack",
                            "${p3g6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid864",
                            "display",
                            61250,
                            0,
                            "easeOutBack",
                            "${p4g8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid868",
                            "display",
                            66500,
                            0,
                            "easeOutBack",
                            "${p4g8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid839",
                            "opacity",
                            41500,
                            500,
                            "easeOutBack",
                            "${p4g6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid841",
                            "opacity",
                            46000,
                            250,
                            "easeOutBack",
                            "${p4g6}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "p3mc": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '430px', '549px', 'auto', 'auto'],
                            id: 'pe3-1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/pe3-1.svg', '0px', '0px']
                        },
                        {
                            rect: ['157px', '127px', null, null, 'auto', 'auto'],
                            id: 'dp1ojos-loop3',
                            symbolName: 'dp1ojos-loop',
                            type: 'rect',
                            transform: [[], [], [], ['1.3', '1.3']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '430px', '549px']
                        }
                    }
                },
                timeline: {
                    duration: 4750,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "p4-mc": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '365px', '489px', 'auto', 'auto'],
                            id: 'p4mc',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/p4mc.svg', '0px', '0px']
                        },
                        {
                            rect: ['107px', '98px', null, null, 'auto', 'auto'],
                            id: 'dp2mc-ojosloop4',
                            symbolName: 'dp2mc-ojosloop',
                            type: 'rect',
                            transform: [[], ['-3'], [], ['1.11', '1.11']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '365px', '489px']
                        }
                    }
                },
                timeline: {
                    duration: 3750,
                    autoPlay: true,
                    data: [
                        [
                            "eid975",
                            "top",
                            272,
                            0,
                            "easeOutBack",
                            "${dp2mc-ojosloop4}",
                            '98px',
                            '98px'
                        ],
                        [
                            "eid977",
                            "left",
                            272,
                            0,
                            "easeOutBack",
                            "${dp2mc-ojosloop4}",
                            '107px',
                            '107px'
                        ]
                    ]
                }
            },
            "bubesloop": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-26px', '0px', '762px', '133px', 'auto', 'auto'],
                            id: 'nubes',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/nubes.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '762px', '133px']
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    data: [
                        [
                            "eid749",
                            "left",
                            0,
                            5000,
                            "easeInOutQuad",
                            "${nubes}",
                            '-26px',
                            '91px'
                        ]
                    ]
                }
            },
            "globo-loop": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-102px', '28px', '44px', '77px', 'auto', 'auto'],
                            id: 'globo',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/globo.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '44px', '77px']
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    data: [
                        [
                            "eid753",
                            "top",
                            0,
                            4000,
                            "linear",
                            "${globo}",
                            '28px',
                            '-67px'
                        ],
                        [
                            "eid752",
                            "left",
                            0,
                            4000,
                            "linear",
                            "${globo}",
                            '-102px',
                            '0px'
                        ]
                    ]
                }
            },
            "heli-loop": {
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
                            id: 'helicoptero',
                            rect: ['-93px', '23px', '65px', '34px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/helicoptero.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '65px', '34px']
                        }
                    }
                },
                timeline: {
                    duration: 15000,
                    autoPlay: true,
                    data: [
                        [
                            "eid763",
                            "left",
                            0,
                            15000,
                            "linear",
                            "${helicoptero}",
                            '-93px',
                            '849px'
                        ],
                        [
                            "eid764",
                            "top",
                            0,
                            15000,
                            "linear",
                            "${helicoptero}",
                            '23px',
                            '0px'
                        ]
                    ]
                }
            },
            "dp1mc": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '279px', '417px', 'auto', 'auto'],
                            id: 'definicion-p1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/definicion-p1.svg', '0px', '0px']
                        },
                        {
                            rect: ['126', '142', '61', '5', 'auto', 'auto'],
                            id: 'dp1ojos-loop',
                            symbolName: 'dp1ojos-loop',
                            type: 'rect',
                            transform: [[], [], [], ['0.95', '0.95']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '279px', '417px']
                        }
                    }
                },
                timeline: {
                    duration: 4750,
                    autoPlay: true,
                    data: [
                        [
                            "eid906",
                            "scaleY",
                            3750,
                            0,
                            "linear",
                            "${dp1ojos-loop}",
                            '0.95',
                            '0.95'
                        ],
                        [
                            "eid905",
                            "scaleX",
                            3750,
                            0,
                            "linear",
                            "${dp1ojos-loop}",
                            '0.95',
                            '0.95'
                        ]
                    ]
                }
            },
            "dp2mc": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '343px', '459px', 'auto', 'auto'],
                            id: 'definicion-p2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/definicion-p2.svg', '0px', '0px']
                        },
                        {
                            rect: ['192', '92', '54', '4', 'auto', 'auto'],
                            id: 'dp2mc-ojosloop',
                            symbolName: 'dp2mc-ojosloop',
                            type: 'rect',
                            transform: [[], ['10'], [0, 0, 0], [1, 1, 1]]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '343px', '459px']
                        }
                    }
                },
                timeline: {
                    duration: 3750,
                    autoPlay: true,
                    data: [
                        [
                            "eid909",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${dp2mc-ojosloop}",
                            '10deg',
                            '10deg'
                        ]
                    ]
                }
            },
            "dp1ojos-loop": {
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
                            display: 'none',
                            rect: ['0px', '0px', '61px', '5px', 'auto', 'auto'],
                            id: 'dp1mc-ojosc',
                            fill: ['rgba(0,0,0,0)', 'images/dp1mc-ojosc.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'block',
                            rect: ['2px', '-5px', '57px', '15px', 'auto', 'auto'],
                            id: 'dp1mc-ojosa',
                            fill: ['rgba(0,0,0,0)', 'images/dp1mc-ojosa.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '61px', '5px']
                        }
                    }
                },
                timeline: {
                    duration: 4750,
                    autoPlay: true,
                    data: [
                        [
                            "eid899",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${dp1mc-ojosc}",
                            'none',
                            'block'
                        ],
                        [
                            "eid900",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${dp1mc-ojosa}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "dp2mc-ojosloop": {
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
                            display: 'none',
                            rect: ['0px', '0px', '54px', '4px', 'auto', 'auto'],
                            id: 'dp2mc-ojosc',
                            fill: ['rgba(0,0,0,0)', 'images/dp2mc-ojosc.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'block',
                            rect: ['0px', '-5px', '54px', '14px', 'auto', 'auto'],
                            id: 'dp2mc-ojosa',
                            fill: ['rgba(0,0,0,0)', 'images/dp2mc-ojosa.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '54px', '4px']
                        }
                    }
                },
                timeline: {
                    duration: 3750,
                    autoPlay: true,
                    data: [
                        [
                            "eid908",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${dp2mc-ojosa}",
                            'block',
                            'none'
                        ],
                        [
                            "eid907",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${dp2mc-ojosc}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "cp1-mc": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '434px', '605px', 'auto', 'auto'],
                            id: 'p1-no-face',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/p1-no-face.svg', '0px', '0px']
                        },
                        {
                            rect: ['161', '139px', null, null, 'auto', 'auto'],
                            id: 'dp1ojos-loop2',
                            symbolName: 'dp1ojos-loop',
                            type: 'rect',
                            transform: [[], [], [], ['1.5', '1.5']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '434px', '605px']
                        }
                    }
                },
                timeline: {
                    duration: 4750,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "ep2mc1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '427px', '572px', 'auto', 'auto'],
                            id: 'p2-no-face',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/p2-no-face.svg', '0px', '0px']
                        },
                        {
                            rect: ['245px', '115px', null, null, 'auto', 'auto'],
                            id: 'dp2mc-ojosloop2',
                            symbolName: 'dp2mc-ojosloop',
                            type: 'rect',
                            transform: [[], ['8'], [], ['1.3', '1.3']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '427px', '572px']
                        }
                    }
                },
                timeline: {
                    duration: 3750,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "cp22-mc": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '485px', '554px', 'auto', 'auto'],
                            id: 'p2-2-no-face',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/p2-2-no-face.svg', '0px', '0px']
                        },
                        {
                            rect: ['315px', '97px', null, null, 'auto', 'auto'],
                            id: 'dp2mc-ojosloop3',
                            symbolName: 'dp2mc-ojosloop',
                            type: 'rect',
                            transform: [[], ['9'], [], ['1.3', '1.3']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '485px', '554px']
                        }
                    }
                },
                timeline: {
                    duration: 3750,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-196247413");
