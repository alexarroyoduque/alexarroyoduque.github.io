(function () {
    'use strict';

    angular.module('informations', [])
        .service('infoService', InfoDataService);

    function InfoDataService($q) {
        var skills,
            personal,
            secrets,
            professional,
            socials,
            educations;
        skills = [{
            what: 'HTML5',
            image: 'src/images/skills/html5.jpg'
        }, {
            what: 'CSS3',
            image: 'src/images/skills/css3.jpg'
        }, {
            what: 'JavaScript',
            image: 'src/images/skills/javascript.png'
        }, {
            what: 'Lit',
            image: 'src/images/skills/lit.jpg',
            notes: 'Librería para el desarrollo de web components.'
        }, {
            what: 'Polymer',
            image: 'src/images/skills/polymer.jpg',
            notes: 'Framework de desarrollo para crear web components.'
        }, {
            what: 'AngularJS',
            image: 'src/images/skills/angular.jpg',
            notes: 'HTML mejorado para aplicaciones web alucinantes'
        }, {
            what: 'PhaserJS',
            image: 'src/images/skills/phaser.jpg',
            notes: 'Framework rápido y divertido para hacer juegos HTML5 para escritorio y móviles'
        }, {
            what: 'Git',
            image: 'src/images/skills/git.jpg',
            notes: 'Software de control de versiones'
        }, {
            what: 'NodeJS',
            image: 'src/images/skills/node.jpg',
            notes: 'Entorno de programación en la capa de servidor basado en ECMAScript'
        }, {
            what: 'GruntJS',
            image: 'src/images/skills/grunt.jpg',
            notes: 'Librería JavaScript para realizar tareas automáticas'
        }, {
            what: 'Gulp',
            image: 'src/images/skills/gulp.jpg',
            notes: 'Librería JavaScript para realizar tareas automáticas basada en streams'
        }, {
            what: 'Bower',
            image: 'src/images/skills/bower.png',
            notes: 'Manejador para instalar dependencias'
        }, {
            what: 'Yeoman',
            image: 'src/images/skills/yeoman.png',
            notes: 'Generador de esqueletos de aplicación'
        }, {
            what: 'Sass',
            image: 'src/images/skills/sass.jpg',
            notes: 'Vitamina tus hojas de estilo extendiendo sus características'
        }, {
            what: 'Jade',
            image: 'src/images/skills/jade.jpg',
            notes: 'Genera plantillas HTML con una sintaxis más sencilla y mucho más'
        }, {
            what: 'jQuery',
            image: 'src/images/skills/jquery.gif',
            notes: 'Escribe menos código para manejar el DOM, eventos, etc, ...'
        }, {
            what: 'Bootstrap',
            image: 'src/images/skills/bootstrap.jpg',
            notes: 'Framework de HTML, CSS y JS para crear páginas web'
        }, {
            what: 'Lodash',
            image: 'src/images/skills/lodash.png',
            notes: 'Librería javascript con gran cantidad de métodos para manejar objetos y arrays'
        }, {
            what: 'Raphael',
            image: 'src/images/skills/raphael.png',
            notes: 'Librería para dibujar gráficos vectoriales en la web de forma sencilla'
        }, {
            what: 'D3',
            image: 'src/images/skills/d3.png',
            notes: 'Crea gráficos alucinantes con esta librería'
        }];

        educations = [{
            image: 'src/images/education/psm1.png',
            what: 'Profesional Scrum Master I',
            where: 'scrum.org',
            notes: '2018'
        }, {
            image: 'src/images/education/gamificacion-intro-docentes.png',
            what: 'Introducción a la gamificación para docentes',
            href: 'https://goo.gl/rDzPXK',
            where: 'Telefónica scolarTIC',
            notes: '2016'
        },{
            image: 'src/images/education/carlosIII.gif',
            what: 'Grado en ingeniería informática',
            where: 'CarlosIII',
            notes: '2013'
        }, {
            image: 'src/images/education/mongo.png',
            what: 'M101JS: MongoDB for Node.js Developers',
            href: 'https://s3.amazonaws.com/edu-cert.10gen.com/downloads/03820222566b45cabdc47bbb8d23b3fb/Certificate.pdf',
            where: 'MongoDB',
            notes: '2013'
        }];

        personal = [
        {
            title: 'Orlog',
            image: 'src/images/personal/orlog.jpg',
            detail: '2021',
            notes: 'Adaptación web del juego de dados Orlog de Assassins´s Creed Valhalla.',
            dialogTemplate: 'views/personal/orlog.html'
        },
        {
            title: 'Peteypedia',
            image: 'src/images/personal/peteypedia.jpg',
            detail: '2020',
            notes: 'Réplica en español de la Peteypedia de Watchmen de la serie de HBO.',
            dialogTemplate: 'views/personal/peteypedia.html'
        },
        {
            title: 'amiibum',
            image: 'src/images/personal/amiibum.jpg',
            detail: '2019',
            notes: 'Marca tus amiibos de Nintendo en esta app hecha con lit-html.',
            dialogTemplate: 'views/personal/amiibum.html'
        }, {
            title: 'Galaxia oculta',
            image: 'src/images/personal/galaxia-oculta.jpg',
            detail: '2016 - Actualmente',
            notes: 'Canal de podcast. Programa principal sobre videojuegos #pixelOculto y #cantinaOculta para otros contenidos.',
            dialogTemplate: 'views/personal/galaxia-oculta.html'
        },
        {
            title: 'Colaborador VGA',
            image: 'src/images/personal/vga.jpg',
            detail: '2014 - Actualmente',
            notes: 'He participado impartiendo charlas sobre videojuegos en el meetup VGA.',
            dialogTemplate: 'views/personal/vga.html'
        }, {
            title: 'Project Black',
            image: 'src/images/personal/project-black.png',
            detail: '2017',
            notes: 'Desarrollado junto a Samuel Dorado Rodríguez dentro de la iniciativa "Hacking the game" de s|ngular.',
            dialogTemplate: 'views/personal/project-black.html'
        }, {
            title: 'Where is it?',
            image: 'src/images/personal/where-is-it.jpg',
            detail: '2016',
            notes: 'Un juego muy sencillo que ocupa menos de 1 kb.',
            dialogTemplate: 'views/personal/where-is-it.html'
        }, {
            title: 'Master Wars',
            image: 'src/images/personal/master-wars.jpg',
            detail: '2016',
            notes: 'Experimento con React y la Api de Marvel.',
            dialogTemplate: 'views/personal/master-wars.html'
        }, {
            title: 'Shootem Totem',
            image: 'src/images/personal/shootem-totem.jpg',
            detail: '2016',
            notes: 'Shoot´em up frenético. Se puede usar el móvil para manejar la nave mandando ordenes por websockets.',
            dialogTemplate: 'views/personal/shootem-totem.html'
        }, {
            title: 'Master Gun',
            image: 'src/images/personal/master-gun.jpg',
            detail: '2015',
            notes: 'Shooter al estilo western hecho con Polymer.',
            dialogTemplate: 'views/personal/master-gun.html'
        }, {
            title: 'Gau el experto',
            image: 'src/images/personal/gau.jpg',
            detail: '2015',
            notes: 'Aventura interactiva donde el protagonista es un experto en tecnología.',
            dialogTemplate: 'views/personal/gau.html'
        }, {
            title: 'Egypt Adventure',
            image: 'src/images/personal/egypt-adventure.jpg',
            detail: '2014 - 2015',
            notes: 'Juego de plataformas con toques RPG. Desarrollado en HTML5 con PhaserJS. Disponible para PC y OSX.',
            dialogTemplate: 'views/personal/egypt-adventure.html'
        }, {
            title: 'Arcade Pi',
            image: 'src/images/personal/raspberry-pi.jpg',
            detail: '2014',
            notes: 'Usando el sistema operativo PiMame monté una consola arcade para emular sistemas clásicos.',
            dialogTemplate: 'views/personal/arcade-pi.html'
        }, {
            title: 'Click Master',
            image: 'src/images/personal/click-master.jpg',
            detail: '2013',
            notes: 'Cuánto tardas en hacer 211 clicks sin pasarte? Mini juego hecho con AngularJS.',
            dialogTemplate: 'views/personal/click-master.html'
        }];

        secrets = [{
            title: 'Trainvial',
            image: 'src/images/personal/trainvial.jpg',
            detail: '2012',
            notes: 'Mi primer experimento con AngularJS. Demo de un trivial compatible con las plataformas móviles y escritorio.',
            dialogTemplate: 'views/personal/trainvial.html'
        }, {
            title: 'Battleship - Hundir la flota',
            image: 'src/images/personal/battleship.jpg',
            detail: '2016',
            notes: 'Experimento con Angular 2.',
            dialogTemplate: 'views/personal/battleship.html'
        }, {
            title: 'Invitado a Radio GameOn',
            image: 'src/images/personal/game-on.png',
            detail: '13/07/2016',
            notes: 'Mi primera colaboración en radio.',
            dialogTemplate: 'views/personal/game-on.html'
        }, {
            title: 'Cromos de Egypt Adventure',
            image: 'src/images/personal/egypt-adventure-cards.jpg',
            detail: '2015',
            notes: 'Explora detalles de Egypt Adventure con los cromos promocionales realizados para la campaña de marketing.',
            dialogTemplate: 'views/personal/egypt-adventure-cards.html'
        }, {
            title: 'Portafolio',
            image: 'src/images/personal/portfolio.jpg',
            detail: '2015',
            notes: 'Descubre las tecnologías y motivaciones que han llevado a cabo este proyecto.',
            dialogTemplate: 'views/personal/portfolio.html'
        }];

        professional = [{
            title: 'BBVA - Cells Apps',
            company: 's|ngular, 2016',
            image: 'src/images/professional/bbva-cells.jpg',
            notes: 'Cells es la propuesta de BBVA para el desarrollo front basada en webcomponents.',
            dialogTemplate: 'views/professional/bbva-cells-apps.html'
        }, {
            title: 'Bankia - Arquitectura front',
            company: 'Adesis Netlife, GFT 2013 - 2016',
            image: 'src/images/professional/bankia.jpg',
            notes: 'Sentar las bases de una arquitectura web moderna que permita crear aplicaciones agilmente',
            dialogTemplate: 'views/professional/bankia.html'
        }, {
            title: 'Mapfre GAIA',
            company: 'Adesis Netlife, 2013',
            image: 'src/images/professional/mapfre.jpg',
            notes: 'El framework GAIA agilizará el desarrollo web arrastrando componentes',
            dialogTemplate: 'views/professional/gaia.html'
        }, {
            title: 'Seguros Bancomer',
            company: 'Adesis Netlife, 2012',
            image: 'src/images/professional/bancomer.jpg',
            notes: 'Renovación de la presencia digital de Seguros Bancomer (BBVA)',
            dialogTemplate: 'views/professional/bancomer-seguros.html'
        }, {
            title: 'Plantillas XSLT-FO',
            company: 'Adesis Netlife, 2012',
            image: 'src/images/professional/bancomer.jpg',
            notes: 'Generación de plantillas XSLT-FO que alimentadas de archivos XML permitiesen la generación de documentos PDF dinámicos.',
            dialogTemplate: 'views/professional/xslt.html'
        }];

        socials = [{
            name: 'Twitter',
            image: 'src/images/social/twitter.png',
            icon: 'icon-twitter',
            href: 'https://twitter.com/alexarroyoduque',
            contact: '@AlexArroyoDuque'
        }, {
            name: 'Github',
            image: 'src/images/social/github.png',
            icon: 'icon-github-circled',
            href: 'https://github.com/alexarroyoduque',
            contact: 'AlexArroyoDuque'
        }, {
            name: 'CV',
            icon: 'icon-doc-text-inv',
            href: 'https://docs.google.com/document/d/13RB4YZKHHN0AC8j_bDa7oLzwMvFWHs6U7m7y7GptPOU',
            contact: 'Alejandro Arroyo Duque'
        }, {
            name: 'Correo',
            image: 'src/images/social/email.png',
            icon: 'icon-mail',
            href: 'mailto:alexarroyoduque@gmail.com?Subject=Saludos',
            contact: 'alexarroyoduque@gmail.com'
        }, {
            name: 'Linkedin',
            image: 'src/images/social/linkedin.png',
            icon: 'icon-linkedin-squared',
            href: 'https://www.linkedin.com/profile/public-profile-settings?trk=prof-edit-edit-public_profile',
            contact: 'Alejandro Arroyo Duque'
        }];

        return {
            loadSkills: function () {
                return $q.when(skills);
            },
            loadPersonal: function () {
                return $q.when(personal);
            },
            loadSecrets: function () {
                return $q.when(secrets);
            },
            loadProfessional: function () {
                return $q.when(professional);
            },
            loadSocials: function () {
                return $q.when(socials);
            },
            loadEducations: function () {
                return $q.when(educations);
            }

        };
    }
})();
