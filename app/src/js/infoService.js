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
            what: 'AngularJS',
            image: 'src/images/skills/angular.jpg',
            notes: 'HTML mejorado para aplicaciones web alucinantes'
        }, {
            what: 'Polymer',
            image: 'src/images/skills/polymer.jpg',
            notes: 'Framework de desarrollo para crear web components.'
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
            title: 'Píxel oculto',
            image: 'src/images/personal/pixel-oculto.jpg',
            detail: '2016 - Actualmente',
            notes: 'Programa de podcast dirigido por mi donde se trataran diferentes temas del mundo del videojuego.',
            dialogTemplate: 'views/personal/pixel-oculto.html'
        },
        {
            title: 'Colaborador VGA',
            image: 'src/images/personal/vga.jpg',
            detail: '2014 - Actualmente',
            notes: 'He participado impartiendo charlas sobre videojuegos en el meetup VGA.',
            dialogTemplate: 'views/personal/vga.html'
        }, {
            title: 'Invitado a Radio GameOn',
            image: 'src/images/personal/game-on.png',
            detail: '13/07/2016',
            notes: 'Mi primera colaboración en radio.',
            dialogTemplate: 'views/personal/game-on.html'
        }, {
            title: 'Battleship - Hundir la flota',
            image: 'src/images/personal/battleship.jpg',
            detail: '2016',
            notes: 'Experimento con Angular 2.',
            dialogTemplate: 'views/personal/battleship.html'
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
            notes: 'Experimento con React y la Api pública de Marvel. ¿Cuánto sabes del universo Marvel?',
            dialogTemplate: 'views/personal/master-wars.html'
        }, {
            title: 'Shootem Totem',
            image: 'src/images/personal/shootem-totem.jpg',
            detail: '2016',
            notes: 'Shoot´em up frenético. Se puede usar el móvil como controlador mandando ordenes por websockets a la nave.',
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
            notes: 'Juego de plataformas con toques RPG. Ha sido desarrollado en HTML5 con PhaserJS. Disponible para PC y OSX.',
            dialogTemplate: 'views/personal/egypt-adventure.html'
        }, {
            title: 'Arcade Pi',
            image: 'src/images/personal/raspberry-pi.jpg',
            detail: '2014',
            notes: 'Con ayuda del sistema operativo PiMame monté una consola arcade capaz de emular cualquier consola clásica.',
            dialogTemplate: 'views/personal/arcade-pi.html'
        }, {
            title: 'Click Master',
            image: 'src/images/personal/click-master.jpg',
            detail: '2013',
            notes: '¿Cuánto tardas en hacer 211 clicks sin pasarte? Mini juego hecho con AngularJS y NodeJS.',
            dialogTemplate: 'views/personal/click-master.html'
        }, {
            title: 'Trainvial',
            image: 'src/images/personal/trainvial.jpg',
            detail: '2012',
            notes: 'Mi primer experimento con AngularJS. Demo de un trivial compatible con las plataformas móviles y escritorio.',
            dialogTemplate: 'views/personal/trainvial.html'
        }];

        secrets = [{
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
            notes: 'Cells es la nueva propuesta de BBVA para el desarrollo front. Soporte a las aplicaciones desarrolladas con Cells.',
            dialogTemplate: 'views/professional/bbva-cells-apps.html'
        }, {
            title: 'Bankia - Arquitectura componentes',
            company: 'Adesis Netlife, GFT 2013 - 2016',
            image: 'src/images/professional/bankia.jpg',
            notes: 'Sentar las bases de una arquitectura basada en tecnologías web modernas que permita crear aplicaciones de forma ágil',
            dialogTemplate: 'views/professional/bankia.html'
        }, {
            title: 'Mapfre GAIA',
            company: 'Adesis Netlife, 2013',
            image: 'src/images/professional/mapfre.jpg',
            notes: 'Con el framework GAIA se agilizará el proceso de desarrollo para crear aplicaciones web.',
            dialogTemplate: 'views/professional/gaia.html'
        }, {
            title: 'Seguros Bancomer',
            company: 'Adesis Netlife, 2012',
            image: 'src/images/professional/bancomer.jpg',
            notes: 'Renovación de la presencia digital de Seguros Bancomer (BBVA)',
            dialogTemplate: 'views/professional/bancomer-seguros.html'
        }, {
            title: 'Generación de plantillas XSLT-FO',
            company: 'Adesis Netlife, 2012',
            image: 'src/images/professional/bancomer.jpg',
            notes: 'Generación de plantillas XSLT-FO que alimentadas de archivos XML permitiesen la generación de documentos PDF dinámicos.',
            dialogTemplate: 'views/professional/xslt.html'
        }];

        socials = [{
            name: 'Github',
            image: 'src/images/social/github.png',
            icon: 'icon-github-circled',
            href: 'https://github.com/alexarroyoduque',
            contact: 'AlexArroyoDuque'
        }, {
            name: 'Twitter',
            image: 'src/images/social/twitter.png',
            icon: 'icon-twitter',
            href: 'https://twitter.com/alexarroyoduque',
            contact: '@AlexArroyoDuque'
        }, {
            name: 'slides',
            image: 'src/images/social/slides.png',
            icon: 'icon-slideshare',
            href: 'http://slides.com/alexarroyoduque/',
            contact: 'alexarroyoduqe'
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
