# [Bulma](https://bulma.io)

Bulma is a **modern CSS framework** based on [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes).

![Github](https://img.shields.io/github/v/release/jgthms/bulma?logo=Bulma)
[![npm](https://img.shields.io/npm/v/bulma.svg)][npm-link]
[![npm](https://img.shields.io/npm/dm/bulma.svg)][npm-link]
[![](https://data.jsdelivr.com/v1/package/npm/bulma/badge)](https://www.jsdelivr.com/package/npm/bulma)
[![Awesome][awesome-badge]][awesome-link]
[![Join the chat at https://gitter.im/jgthms/bulma](https://badges.gitter.im/jgthms/bulma.svg)](https://gitter.im/jgthms/bulma)
[![Build Status](https://travis-ci.org/jgthms/bulma.svg?branch=master)](https://travis-ci.org/jgthms/bulma)

<a href="https://bulma.io"><img src="https://raw.githubusercontent.com/jgthms/bulma/master/docs/images/bulma-banner.png" alt="Bulma: a Flexbox CSS framework" style="max-width:100%;" width="600"></a>

## Quick install

Bulma is constantly in development! Try it out now:

### NPM

```sh
npm install bulma
```

**or**

### Yarn

```sh
yarn add bulma
```

### Bower

```sh
bower install bulma
```

### Import

After installation, you can import the CSS file into your project using this snippet:

```sh
@import 'bulma/css/bulma.css'
```

### CDN

[https://www.jsdelivr.com/package/npm/bulma](https://www.jsdelivr.com/package/npm/bulma)

Feel free to raise an issue or submit a pull request.

## CSS only

Bulma is a **CSS** framework. As such, the sole output is a single CSS file: [bulma.css](https://github.com/jgthms/bulma/blob/main/css/bulma.css)

You can either use that file, "out of the box", or download the Sass source files to customize the [variables](https://bulma.io/documentation/customize/#docsNav).

There is **no** JavaScript included. People generally want to use their own JS implementation (and usually already have one). Bulma can be considered "environment agnostic": it's just the style layer on top of the logic.

## Browser Support

Bulma uses [autoprefixer](https://github.com/postcss/autoprefixer) to make (most) Flexbox features compatible with earlier browser versions. According to [Can I use](https://caniuse.com/#feat=flexbox), Bulma is compatible with **recent** versions of:

- Chrome
- Edge
- Firefox
- Opera
- Safari

Internet Explorer (10+) is only partially supported.

## Documentation

The documentation resides in the [docs](docs) directory, and is built with the Ruby-based [Jekyll](https://jekyllrb.com/) tool.

Browse the [online documentation here.](https://bulma.io/documentation/start/overview/)

## Related projects

| Project                                                                              | Description                                                                                                      |
| ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| [Bulma with Attribute Modules](https://github.com/j5bot/bulma-attribute-selectors)   | Adds support for attribute-based selectors                                                                       |
| [Bulma with Rails](https://github.com/joshuajansen/bulma-rails)                      | Integrates Bulma with the rails asset pipeline                                                                   |
| [BulmaRazor](https://github.com/loogn/bulmarazor)                                    | A lightweight component library based on Bulma and Blazor.                                                       |
| [Vue Admin (dead)](https://github.com/vue-bulma/vue-admin)                           | Vue Admin framework powered by Bulma                                                                             |
| [Bulmaswatch](https://github.com/jenil/bulmaswatch)                                  | Free themes for Bulma                                                                                            |
| [Goldfish (read-only)](https://github.com/Caiyeon/goldfish)                          | Vault UI with Bulma, Golang, and Vue Admin                                                                       |
| [ember-bulma](https://github.com/open-tux/ember-bulma)                               | Ember addon providing a collection of UI components for Bulma                                                    |
| [Bloomer](https://bloomer.js.org)                                                    | A set of React components for Bulma                                                                              |
| [React-bulma](https://github.com/kulakowka/react-bulma)                              | React.js components for Bulma                                                                                    |
| [Buefy](https://buefy.org/)                                                          | Lightweight UI components for Vue.js based on Bulma                                                              |
| [vue-bulma-components](https://github.com/vouill/vue-bulma-components)               | Bulma components for Vue.js with straightforward syntax                                                          |
| [BulmaJS](https://github.com/VizuaaLOG/BulmaJS)                                      | Javascript integration for Bulma. Written in ES6 with a data-\* API                                              |
| [Bulma-modal-fx](https://github.com/postare/bulma-modal-fx)                          | A set of modal window effects with CSS transitions and animations for Bulma                                      |
| [Bulma Stylus](https://github.com/groenroos/bulma-stylus)                            | Up-to-date 1:1 translation to Stylus                                                                             |
| [Bulma.styl (read-only)](https://github.com/log1x/bulma.styl)                        | 1:1 Stylus translation of Bulma 0.6.11                                                                           |
| [elm-bulma](https://github.com/surprisetalk/elm-bulma)                               | Bulma + Elm                                                                                                      |
| [elm-bulma-classes](https://github.com/ahstro/elm-bulma-classes)                     | Bulma classes prepared for usage with Elm                                                                        |
| [Bulma Customizer](https://bulma-customizer.bstash.io/)                              | Bulma Customizer &#8211; Create your own **bespoke** Bulma build                                                 |
| [Fulma](https://fulma.github.io/Fulma/)                                              | Wrapper around Bulma for [fable-react](https://github.com/fable-compiler/fable-react)                            |
| [Laravel Enso](https://github.com/laravel-enso/enso)                                 | SPA Admin Panel built with Bulma, VueJS and Laravel                                                              |
| [Django Bulma](https://github.com/timonweb/django-bulma)                             | Integrates Bulma with Django                                                                                     |
| [Bulma Templates](https://github.com/dansup/bulma-templates)                         | Free Templates for Bulma                                                                                         |
| [React Bulma Components](https://github.com/couds/react-bulma-components)            | Another React wrap on React for Bulma.io                                                                         |
| [purescript-bulma](https://github.com/sectore/purescript-bulma)                      | PureScript bindings for Bulma                                                                                    |
| [Vue Datatable](https://github.com/laravel-enso/vuedatatable)                        | Bulma themed datatable based on Vue, Laravel & JSON templates                                                    |
| [bulma-fluent](https://mubaidr.github.io/bulma-fluent/)                              | Fluent Design Theme for Bulma inspired by Microsoft’s Fluent Design System                                       |
| [csskrt-csskrt](https://github.com/4d11/csskrt-csskrt)                               | Automatically add Bulma classes to HTML files                                                                    |
| [bulma-pagination-react](https://github.com/hipstersmoothie/bulma-pagination-react)  | Bulma pagination as a react component                                                                            |
| [bulma-helpers](https://github.com/jmaczan/bulma-helpers)                            | Functional / Atomic CSS classes for Bulma                                                                        |
| [bulma-swatch-hook](https://github.com/hipstersmoothie/bulma-swatch-hook)            | Bulma swatches as a react hook and a component                                                                   |
| [BulmaWP (read-only)](https://github.com/tomhrtly/BulmaWP)                           | Starter WordPress theme for Bulma                                                                                |
| [Ralma](https://github.com/aldi/ralma)                                               | Stateless Ractive.js Components for Bulma                                                                        |
| [Django Simple Bulma](https://github.com/python-discord/django-simple-bulma)         | Lightweight integration of Bulma and Bulma-Extensions for your Django app                                        |
| [rbx](https://dfee.github.io/rbx)                                                    | Comprehensive React UI Framework written in TypeScript                                                           |
| [Awesome Bulma Templates](https://github.com/aldi/awesome-bulma-templates)           | Free real-world Templates built with Bulma                                                                       |
| [Trunx](https://github.com/fibo/trunx)                                               | Super Saiyan React components, son of awesome Bulma |
| [@aybolit/bulma](https://github.com/web-padawan/aybolit/tree/master/packages/bulma)  | Web Components library inspired by Bulma and Bulma-extensions                                                    |
| [Drulma](https://www.drupal.org/project/drulma)                                      | Drupal theme for Bulma.                                                                                          |
| [Bulrush](https://github.com/textbook/bulrush)                                       | A Bulma-based Python Pelican blog theme                                                                          |
| [Bulma Variable Export](https://github.com/service-paradis/bulma-variables-export)   | Access Bulma Variables in Javascript/Typescript in project using Webpack                                         |
| [Bulmil](https://github.com/gomah/bulmil)                                            | An agnostic UI components library based on Web Components, made with Bulma & Stencil.                            |
| [Svelte Bulma Components](https://github.com/elcobvg/svelte-bulma-components)        | Library of UI components to be used in [Svelte.js](https://svelte.technology/) or standalone.                    |
| [Bulma Nunjucks Starterkit](https://github.com/benninkcorien/nunjucks-starter-kit)   | Starterkit for Nunjucks with Bulma.                                                                              |
| [Bulma-Social](https://github.com/aldi/bulma-social)                                 | Social Buttons and Colors for Bulma                                                                              |
| [Divjoy](https://divjoy.com/?kit=bulma)                                              | React codebase generator with Bulma templates                                                                    |
| [Blazorise](https://github.com/Megabit/Blazorise)                                    | Blazor component library with the support for Bulma CSS framework                                                |
| [Oruga-Bulma](https://github.com/oruga-ui/theme-bulma)                               | Bulma theme for [Oruga UI](https://oruga.io)                                                                     |
| [@bulvar/bulma](https://github.com/daniil4udo/bulvar/tree/master/packages/bulma)     | Bulma with [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) support |
| [@angular-bulma](https://quinnjr.github.io/angular-bulma)                            | [Angular](https://angular.io/) directives and components to use in your Bulma projects                           |
| [Bulma CSS Class Completion](https://github.com/eliutdev/bulma-css-class-completion) | CSS class name completion for the HTML class attribute based on Bulma CSS classes.                               |
| [Crispy-Bulma](https://github.com/ckrybus/crispy-bulma)                              | Bulma template pack for django-crispy-forms                                                                      |
| [Manifest](https://manifest.build)                                                   | Manifest is a lightweight Backend-as-a-Service with essential features: DB, Admin panel, API, JS SDK             |
| [Reactive Bulma](https://github.com/NicolasOmar/reactive-bulma)                                                             | A component library based on React, Bulma, Typescript and Rollup         |

<p>Browser testing via<br /><a href="https://www.lambdatest.com/" target="_blank"><img src="https://bulma.io/assets/images/amis/lambdatest-logo.png" width="168" height="40" /></a></p>

## Copyright and license ![Github](https://img.shields.io/github/license/jgthms/bulma?logo=Github)

Code copyright 2023 Jeremy Thomas. Code released under [the MIT license](https://github.com/jgthms/bulma/blob/main/LICENSE).

[npm-link]: https://www.npmjs.com/package/bulma
[awesome-link]: https://github.com/awesome-css-group/awesome-css
[awesome-badge]: https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg


## 🌐 Web Resources & Interactive Index
- [HEROIC KNIGHT](https://ieduquests.web.app/heroic-knight.html)
- [INDEX3](https://welearnaction.onrender.com/index3.html)
- [PIXEL FLOW](https://learnaction.netlify.app/pixel-flow.html)
- [LIFE CLICKER](https://eduquests.netlify.app/life-clicker.html)
- [SOLITAIRE EMPEROR SECRETS OF FATE](https://welearnaction.onrender.com/solitaire-emperor-secrets-of-fate.html)
- [HOSPITAL INC](https://welearnaction.onrender.com/hospital-inc.html)
- [SUDOKU PINGAMES](https://eduquests.github.io/sudoku-pingames.html)
- [PERFECT SHOT](https://welearnaction.onrender.com/perfect-shot.html)
- [ROUGH BALL](https://welearnaction.onrender.com/rough-ball.html)
- [TERMS](https://ilearnworld.github.io/terms.html)
- [BLACKRIVER MYSTERY HIDDEN OBJECTS](https://eduquests.netlify.app/blackriver-mystery-hidden-objects.html)
- [LIFE CLICKER](https://learnaction.github.io/life-clicker.html)
- [CATEGORY BUILDING](https://eduquests.netlify.app/category-building.html)
- [STICKMAN PUNISHMENT](https://welearnaction.onrender.com/stickman-punishment.html)
- [CATEGORY PUZZLE](https://eduquests.github.io/category-puzzle.html)
- [CATEGORY BOOKMARKLET](https://eduquests.github.io/category-bookmarklet.html)
- [CATEGORY MOUSE1 707](https://eduquests.github.io/category-mouse1-707.html)
- [BOMBAMAN 3D](https://welearnaction.onrender.com/bombaman-3d.html)
- [SCRAP CAR MERGE](https://eduquests.netlify.app/scrap-car-merge.html)
- [BUBBLE SHOOTER REMASTERED](https://eduquests.netlify.app/bubble-shooter-remastered.html)
- [WORLDCRAFT 3](https://learnaction.github.io/worldcraft-3.html)
- [HEDGIES](https://learnaction.netlify.app/hedgies.html)
- [CATEGORY DEFENSE174](https://welearnaction.onrender.com/category-defense174.html)
- [CATEGORY MINECRAFT 2](https://welearnaction.onrender.com/category-minecraft-2.html)
- [MAKEUP FRUITS](https://welearnaction.onrender.com/makeup-fruits.html)
- [CATEGORY SECURLY](https://eduquests.github.io/category-securly.html)
- [TERMS](https://iskillquest.pages.dev/terms.html)
- [RETRO STREET FIGHTER](https://eduquests.netlify.app/retro-street-fighter.html)
- [TERMS](https://skillplay.github.io/terms.html)
- [IDLE GAME PRISON LIFE](https://learnaction.github.io/idle-game-prison-life.html)
- [CATEGORY STICKMAN 2](https://eduquests.github.io/category-stickman-2.html)
- [PRIVACY](https://cryptotify9.onrender.com/privacy.html)
- [OBBY CARDS THE LEGEND HUNT](https://eduquests.netlify.app/obby-cards-the-legend-hunt.html)
- [GUESS THE DRAWING](https://learnaction.github.io/guess-the-drawing.html)
- [GROW A GARDEN FOR BRAINROTS](https://eduquests.netlify.app/grow-a-garden-for-brainrots.html)
- [MR DISC SLINGSHOT STRIKE](https://learnaction.github.io/mr-disc-slingshot-strike.html)
- [SUMMER CONNECT](https://welearnaction.onrender.com/summer-connect.html)
- [REMOVE THE EVIDENCE](https://learnaction.netlify.app/remove-the-evidence.html)
- [CATEGORY WAR](https://welearnaction.onrender.com/category-war.html)
- [CATEGORY UNBLOCKED GAMES](https://eduquests.github.io/category-unblocked-games.html)
- [THE SHAPE](https://eduquests.netlify.app/the-shape.html)
- [LOVE IN STYLE](https://learnaction.netlify.app/love-in-style.html)
- [SNOW RACE 3D FUN RACING](https://learnaction.github.io/snow-race-3d-fun-racing.html)
- [CATEGORY WAR137](https://eduquests.github.io/category-war137.html)
- [GANG WAR STRIKE SHOOTER](https://eduquests.netlify.app/gang-war-strike-shooter.html)
- [BENTO MATCH](https://welearnaction.onrender.com/bento-match.html)
- [NUMBER MASTER RUN AND MERGE](https://learnaction.github.io/number-master-run-and-merge.html)
- [CATEGORY MINECRAFT](https://eduquests.github.io/category-minecraft.html)
- [CATEGORY SPORTS](https://welearnaction.onrender.com/category-sports.html)
- [TIMBERLAND ARRANGE PUZZLE GAME](https://learnaction.netlify.app/timberland-arrange-puzzle-game.html)
- [ZOMBIE SURVIVAL SHOOTER](https://learnaction.github.io/zombie-survival-shooter.html)
- [BASKET CHAMPS](https://learnaction.netlify.app/basket-champs.html)
- [PERFECT TIDY](https://learnaction.netlify.app/perfect-tidy.html)
- [CATEGORY MATCH 3](https://eduquests.github.io/category-match-3.html)
- [CATEGORY FPS](https://eduquests.github.io/category-fps.html)
- [PRIVACY](https://skillcrafts.github.io/privacy.html)
- [INDEX7](https://eduquests.netlify.app/index7.html)
- [FARM BUSINESS SAGA](https://welearnaction.onrender.com/farm-business-saga.html)
- [DINOSAURS VS ASTEROIDS](https://learnaction.netlify.app/dinosaurs-vs-asteroids.html)
- [GOOSE CUP](https://learnaction.github.io/goose-cup.html)
- [DRAW BRIDGE PUZZLE](https://learnaction.github.io/draw-bridge-puzzle.html)
- [CATEGORY RACING DRIVING](https://welearnaction.onrender.com/category-racing-driving.html)
- [GOLF MINI](https://welearnaction.onrender.com/golf-mini.html)
- [ITALIAN BRAINROT PUZZLE BATTLE](https://welearnaction.onrender.com/italian-brainrot-puzzle-battle.html)
- [CATEGORY FPS 2](https://eduquests.github.io/category-fps-2.html)
- [CATEGORY COLOR197](https://welearnaction.onrender.com/category-color197.html)
- [CONNECT PUZZLE IMAGE](https://eduquests.netlify.app/connect-puzzle-image.html)
- [SITEMAP](https://iskillplay.web.app/sitemap.html)
- [GTA CAR RUSH](https://learnaction.netlify.app/gta-car-rush.html)
- [COOKING STORIES FUN CAFE GAME](https://learnaction.github.io/cooking-stories-fun-cafe-game.html)
- [TROLL THE TEACHER](https://learnaction.github.io/troll-the-teacher.html)
- [CATEGORY FOOTBALL](https://eduquests.netlify.app/category-football.html)
- [WORD OF FORTUNE](https://eduquests.netlify.app/word-of-fortune.html)
- [CATEGORY POOL](https://learnaction.netlify.app/category-pool.html)
- [PARTY GAMES MINI SHOOTER BATTLE](https://learnaction.netlify.app/party-games-mini-shooter-battle.html)
- [CATEGORY RACING DRIVING 2](https://eduquests.github.io/category-racing-driving-2.html)
- [BOLTS UNSCREW IT](https://welearnaction.onrender.com/bolts-unscrew-it.html)
- [HUNTING UNDERWATER SPEARFISHING](https://welearnaction.onrender.com/hunting-underwater-spearfishing.html)
- [US ARMY CAR GAMES TRUCK DRIVING](https://learnaction.github.io/us-army-car-games-truck-driving.html)
- [CATEGORY PHYSICS371](https://eduquests.netlify.app/category-physics371.html)
- [GUNS VS MAGIC](https://welearnaction.onrender.com/guns-vs-magic.html)
- [MATCH MASTERS](https://learnaction.github.io/match-masters.html)
- [INDEX15](https://learnaction.github.io/index15.html)
- [CATEGORY NETSUPPORT](https://eduquests.github.io/category-netsupport.html)
- [CATEGORY HORROR 2](https://eduquests.github.io/category-horror-2.html)
- [BOTTLE LOGIC](https://learnaction.github.io/bottle-logic.html)
- [WOOL SORTING](https://eduquests.netlify.app/wool-sorting.html)
- [WORD SCRAMBLE FAMILY TALES](https://eduquests.netlify.app/word-scramble-family-tales.html)
- [PORTAL MASTER](https://eduquests.netlify.app/portal-master.html)
- [CATEGORY COOKING46](https://welearnaction.onrender.com/category-cooking46.html)
- [FOONO ONLINE MULTIPLAYER CARD GAME](https://learnaction.netlify.app/foono-online-multiplayer-card-game.html)
- [CATEGORY HERO](https://eduquests.github.io/category-hero.html)
- [CATEGORY AGILITY 2](https://eduquests.netlify.app/category-agility-2.html)
- [CATEGORY BASKETBALL 2](https://learnaction.github.io/category-basketball-2.html)
- [CATEGORY MMO24](https://welearnaction.onrender.com/category-mmo24.html)
- [CATEGORY PLATFORM](https://eduquests.github.io/category-platform.html)
- [CATEGORY BRAIN261](https://learnaction.github.io/category-brain261.html)
- [WORD SEARCH UNIVERSE 2](https://eduquests.netlify.app/word-search-universe-2.html)
- [TUNNEL ROAD](https://learnaction.github.io/tunnel-road.html)
- [ASMR TATTOO TREATMENT](https://eduquests.netlify.app/asmr-tattoo-treatment.html)
- [CATEGORY SURVIVAL365](https://welearnaction.onrender.com/category-survival365.html)
- [MERGE FRUIT](https://welearnaction.onrender.com/merge-fruit.html)
- [CATEGORY MINECRAFT 2](https://eduquests.github.io/category-minecraft-2.html)
- [G WAGON CITY DRIVER](https://learnaction.github.io/g-wagon-city-driver.html)
- [CATEGORY SNAKE](https://welearnaction.onrender.com/category-snake.html)
- [CATEGORY SNAKE40](https://welearnaction.onrender.com/category-snake40.html)
- [CATEGORY MAHJONG 2](https://eduquests.github.io/category-mahjong-2.html)
- [PRISON MASTER ESCAPE JOURNEY](https://eduquests.netlify.app/prison-master-escape-journey.html)
- [PRIVACY](https://brainquests.onrender.com/privacy.html)
- [TOWER DEFENSE DRAGON MERGE](https://learnaction.netlify.app/tower-defense-dragon-merge.html)
- [CATEGORY SHOP](https://eduquests.github.io/category-shop.html)
- [CATEGORY IDLE448](https://eduquests.github.io/category-idle448.html)
- [CATEGORY STICKMAN 2](https://welearnaction.onrender.com/category-stickman-2.html)
- [CATEGORY LOL41](https://eduquests.github.io/category-lol41.html)
- [GAL SLIDING PUZZLE](https://learnaction.github.io/gal-sliding-puzzle.html)
- [MAGES SECRET](https://welearnaction.onrender.com/mages-secret.html)
- [HEADLEG DASH PARKOUR](https://welearnaction.onrender.com/headleg-dash-parkour.html)
- [WORD ART COLOR BOOK PUZZLE](https://eduquests.netlify.app/word-art-color-book-puzzle.html)
- [CATEGORY IDLE448](https://eduquests.netlify.app/category-idle448.html)
- [JOIN CLASH COLOR BUTTON](https://learnaction.github.io/join-clash-color-button.html)
- [BUNNYS FARM](https://welearnaction.onrender.com/bunnys-farm.html)
- [CATEGORY BUILDING182](https://learnaction.github.io/category-building182.html)
- [CATEGORY RUNNING](https://eduquests.github.io/category-running.html)
- [ONLINE PORTAL](https://studyquesthub.web.app/)
- [MOJICON WINTER CONNECT](https://learnaction.github.io/mojicon-winter-connect.html)
- [GRANNY RETURNS 3D EVIL DESTINY](https://welearnaction.onrender.com/granny-returns-3d-evil-destiny.html)
- [HIDDEN OBJECT ROOMS EXPLORATION](https://eduquests.netlify.app/hidden-object-rooms-exploration.html)
- [CATEGORY SHOP49](https://eduquests.github.io/category-shop49.html)
- [WONDERS OF EGYPT MAHJONG](https://eduquests.netlify.app/wonders-of-egypt-mahjong.html)
- [TOWER WARS ARENA](https://eduquests.netlify.app/tower-wars-arena.html)
