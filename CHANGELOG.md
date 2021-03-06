# [35.1.0](https://github.com/dhis2/data-visualizer-app/compare/v35.0.5...v35.1.0) (2020-06-09)


### Features

* implements latest Dynamic Dimension selector from Analytics ([#1046](https://github.com/dhis2/data-visualizer-app/issues/1046)) ([8582d09](https://github.com/dhis2/data-visualizer-app/commit/8582d09b29d32002c04ac88a4007b51691c16cd3))

## [35.0.5](https://github.com/dhis2/data-visualizer-app/compare/v35.0.4...v35.0.5) (2020-06-07)


### Bug Fixes

* **translations:** sync translations from transifex (master) ([669b40b](https://github.com/dhis2/data-visualizer-app/commit/669b40b94e91504c561f85439918fdee3e19ebb4))

## [35.0.4](https://github.com/dhis2/data-visualizer-app/compare/v35.0.3...v35.0.4) (2020-06-04)


### Bug Fixes

* **translations:** sync translations from transifex (master) ([a608cdd](https://github.com/dhis2/data-visualizer-app/commit/a608cddf72ee5edb361cb40e3905eea547b94dd3))

## [35.0.3](https://github.com/dhis2/data-visualizer-app/compare/v35.0.2...v35.0.3) (2020-06-03)


### Bug Fixes

* **translations:** sync translations from transifex (master) ([f399b38](https://github.com/dhis2/data-visualizer-app/commit/f399b38994f50c06f984eea0200b07c21910b2be))

## [35.0.2](https://github.com/dhis2/data-visualizer-app/compare/v35.0.1...v35.0.2) (2020-06-03)


### Bug Fixes

* complete translations master ([#1031](https://github.com/dhis2/data-visualizer-app/issues/1031)) ([d8ba752](https://github.com/dhis2/data-visualizer-app/commit/d8ba75229dc09c6cc15e3b3005660566ae42bcd1))

## [35.0.1](https://github.com/dhis2/data-visualizer-app/compare/v35.0.0...v35.0.1) (2020-06-02)


### Bug Fixes

* **translations:** sync translations from transifex (master) ([86d75e9](https://github.com/dhis2/data-visualizer-app/commit/86d75e975c7efd11ac48e0c0b294284bf3804f8c))

# [35.0.0](https://github.com/dhis2/data-visualizer-app/compare/v34.5.0...v35.0.0) (2020-05-28)


### Bug Fixes

* yarn-deduplicate and remove unused d2-analysis ([#1027](https://github.com/dhis2/data-visualizer-app/issues/1027)) ([a48dd02](https://github.com/dhis2/data-visualizer-app/commit/a48dd02ca082daa6c882789f0fa9a093404c6d88))


### BREAKING CHANGES

* - Marked as a breaking change because we need to move to version 35 to follow the convention of major version matching DHIS2 version
- removed d2-analysis from plugin dependencies since it is not in use
- yarn-deduplicate

# [34.5.0](https://github.com/dhis2/data-visualizer-app/compare/v34.4.1...v34.5.0) (2020-05-28)


### Features

* implement latest Period Selector from Analytics (DHIS2-8807) ([#1026](https://github.com/dhis2/data-visualizer-app/issues/1026)) ([ee0cb75](https://github.com/dhis2/data-visualizer-app/commit/ee0cb7505b19b6c1af203ebf8feb912490e455a8))

## [34.4.1](https://github.com/dhis2/data-visualizer-app/compare/v34.4.0...v34.4.1) (2020-05-26)


### Bug Fixes

* **translations:** sync translations from transifex (master) ([b0006e2](https://github.com/dhis2/data-visualizer-app/commit/b0006e250ae239ec8e51003d4a01a399649a8fb1))

# [34.4.0](https://github.com/dhis2/data-visualizer-app/compare/v34.3.49...v34.4.0) (2020-05-26)


### Features

* drill down/up for pivot tables ([#999](https://github.com/dhis2/data-visualizer-app/issues/999)) ([747e6f7](https://github.com/dhis2/data-visualizer-app/commit/747e6f74f6dd0a973ff2d1bef03ff6b26cd10cba))

## [34.3.49](https://github.com/dhis2/data-visualizer-app/compare/v34.3.48...v34.3.49) (2020-05-20)


### Bug Fixes

* **translations:** sync translations from transifex (master) ([4266e2a](https://github.com/dhis2/data-visualizer-app/commit/4266e2a076e626e944bf0abe647d650ed9fe22cb))

## [34.3.48](https://github.com/dhis2/data-visualizer-app/compare/v34.3.47...v34.3.48) (2020-05-06)


### Bug Fixes

* dimension panel search field is missing the 'x' to clear (DHIS2-8790) ([#948](https://github.com/dhis2/data-visualizer-app/issues/948)) ([d8881aa](https://github.com/dhis2/data-visualizer-app/commit/d8881aa2be62e19af7d729355e7f99ed2125333d))

## [34.3.47](https://github.com/dhis2/data-visualizer-app/compare/v34.3.46...v34.3.47) (2020-04-30)


### Bug Fixes

* remove @material-ui/core dep ([#935](https://github.com/dhis2/data-visualizer-app/issues/935)) ([17d34a4](https://github.com/dhis2/data-visualizer-app/commit/17d34a4d1a946947f3547c75c815d281176865f9))

## [34.3.46](https://github.com/dhis2/data-visualizer-app/compare/v34.3.45...v34.3.46) (2020-04-29)


### Bug Fixes

* display 'and x others...' on tooltip (DHIS2-8753) ([#925](https://github.com/dhis2/data-visualizer-app/issues/925)) ([adaa485](https://github.com/dhis2/data-visualizer-app/commit/adaa4854fc00f76f0d413cab186b865293ebb6e2))

## [34.3.45](https://github.com/dhis2/data-visualizer-app/compare/v34.3.44...v34.3.45) (2020-04-27)


### Bug Fixes

* remove ui prop in axis setup ([#886](https://github.com/dhis2/data-visualizer-app/issues/886)) ([f68b9a6](https://github.com/dhis2/data-visualizer-app/commit/f68b9a609eacd4acf75d8e17ba715094b3ba5920))

## [34.3.44](https://github.com/dhis2/data-visualizer-app/compare/v34.3.43...v34.3.44) (2020-04-27)


### Bug Fixes

* auto merge semver:minor ([#903](https://github.com/dhis2/data-visualizer-app/issues/903)) ([1c68594](https://github.com/dhis2/data-visualizer-app/commit/1c685945f87e5e77875dc577bcacd6fb692d7dfa))

## [34.3.43](https://github.com/dhis2/data-visualizer-app/compare/v34.3.42...v34.3.43) (2020-04-23)


### Bug Fixes

* temporary fix for orgunit and period selector modals not showing ([#872](https://github.com/dhis2/data-visualizer-app/issues/872)) ([594e27e](https://github.com/dhis2/data-visualizer-app/commit/594e27e350b2aeae2b5f38dc5c751231f33ab5bb))

## [34.3.42](https://github.com/dhis2/data-visualizer-app/compare/v34.3.41...v34.3.42) (2020-04-22)


### Bug Fixes

* AxisSetup MUI -> ui-core (TECH-359) ([#876](https://github.com/dhis2/data-visualizer-app/issues/876)) ([36e4a79](https://github.com/dhis2/data-visualizer-app/commit/36e4a79c9d6135db4e4f5871adf066c3296a780f))

## [34.3.41](https://github.com/dhis2/data-visualizer-app/compare/v34.3.40...v34.3.41) (2020-04-21)


### Bug Fixes

* rewrite MenuBar buttons (TECH-320) ([#879](https://github.com/dhis2/data-visualizer-app/issues/879)) ([45b3adb](https://github.com/dhis2/data-visualizer-app/commit/45b3adb6b01b8ac95761650d603ff92cfda410d7))

## [34.3.40](https://github.com/dhis2/data-visualizer-app/compare/v34.3.39...v34.3.40) (2020-04-20)


### Bug Fixes

* consistent scrollbar style ([#877](https://github.com/dhis2/data-visualizer-app/issues/877)) ([622a6d8](https://github.com/dhis2/data-visualizer-app/commit/622a6d8921fa99c2cdd8344226857646a9c4f54a))

## [34.3.39](https://github.com/dhis2/data-visualizer-app/compare/v34.3.38...v34.3.39) (2020-04-20)


### Bug Fixes

* changed the text for a legend option to suit all vis types ([#873](https://github.com/dhis2/data-visualizer-app/issues/873)) ([92df843](https://github.com/dhis2/data-visualizer-app/commit/92df84385807d58249b358b41e7fac9143408aa2))

## [34.3.38](https://github.com/dhis2/data-visualizer-app/compare/v34.3.37...v34.3.38) (2020-04-15)


### Bug Fixes

* replace MUI with ui-core for dimension modals (TECH-318, TECH-319) ([#849](https://github.com/dhis2/data-visualizer-app/issues/849)) ([da42529](https://github.com/dhis2/data-visualizer-app/commit/da4252977e89618f966086992339efad43f1a137))

## [34.3.37](https://github.com/dhis2/data-visualizer-app/compare/v34.3.36...v34.3.37) (2020-04-14)


### Bug Fixes

* fix axes options for line and area vis types ([#857](https://github.com/dhis2/data-visualizer-app/issues/857)) ([9463ea3](https://github.com/dhis2/data-visualizer-app/commit/9463ea31d7c9ca941edf77a736307fb85a39936e))

## [34.3.36](https://github.com/dhis2/data-visualizer-app/compare/v34.3.35...v34.3.36) (2020-04-09)


### Bug Fixes

* display loading spinner on save (DHIS2-8434) ([#811](https://github.com/dhis2/data-visualizer-app/issues/811)) ([c287eee](https://github.com/dhis2/data-visualizer-app/commit/c287eee1a426e6d72b1bf6bb8e7da8dc12a23fe7))

## [34.3.35](https://github.com/dhis2/data-visualizer-app/compare/v34.3.34...v34.3.35) (2020-04-06)


### Bug Fixes

* pass dimensionItemType in current AO (DHIS2-8577) ([#859](https://github.com/dhis2/data-visualizer-app/issues/859)) ([a5e1430](https://github.com/dhis2/data-visualizer-app/commit/a5e1430c89922021686419aec191f92f110b4470))

## [34.3.34](https://github.com/dhis2/data-visualizer-app/compare/v34.3.33...v34.3.34) (2020-03-31)


### Bug Fixes

* @dhis2/analytics@4.3.25 ([#837](https://github.com/dhis2/data-visualizer-app/issues/837)) ([856fa8a](https://github.com/dhis2/data-visualizer-app/commit/856fa8ae145bfd700cb085dd094ed831753c6e85))

## [34.3.33](https://github.com/dhis2/data-visualizer-app/compare/v34.3.32...v34.3.33) (2020-03-31)


### Bug Fixes

* replace MUI with ui-core components - loading spinner (TECH-324) ([#814](https://github.com/dhis2/data-visualizer-app/issues/814)) ([8eeb16a](https://github.com/dhis2/data-visualizer-app/commit/8eeb16a59edd8cdb562797ddb0c380e04d99033c))

## [34.3.32](https://github.com/dhis2/data-visualizer-app/compare/v34.3.31...v34.3.32) (2020-03-20)


### Bug Fixes

* upgrade analytics for chart title fix [DHIS2-8473] ([#807](https://github.com/dhis2/data-visualizer-app/issues/807)) ([1a4955d](https://github.com/dhis2/data-visualizer-app/commit/1a4955d38bca6badd5a44815675c8a45dc188a93))

## [34.3.31](https://github.com/dhis2/data-visualizer-app/compare/v34.3.30...v34.3.31) (2020-03-18)


### Bug Fixes

* analytics@4.3.22 (DHIS2-8486) ([#805](https://github.com/dhis2/data-visualizer-app/issues/805)) ([490d8c7](https://github.com/dhis2/data-visualizer-app/commit/490d8c76af857b09ab51a84fa43069678bd9d3b9))

## [34.3.30](https://github.com/dhis2/data-visualizer-app/compare/v34.3.29...v34.3.30) (2020-03-16)


### Bug Fixes

* update analytics dep ([#802](https://github.com/dhis2/data-visualizer-app/issues/802)) ([1df988f](https://github.com/dhis2/data-visualizer-app/commit/1df988f9278ba3d2359af33e531bf5dcc3c63c58))

## [34.3.29](https://github.com/dhis2/data-visualizer-app/compare/v34.3.28...v34.3.29) (2020-03-16)


### Bug Fixes

* analytics@4.3.20 ([#801](https://github.com/dhis2/data-visualizer-app/issues/801)) ([87c6ca0](https://github.com/dhis2/data-visualizer-app/commit/87c6ca04ed02ef95f1c2c43e6d597f62c75d5e2f))

## [34.3.28](https://github.com/dhis2/data-visualizer-app/compare/v34.3.27...v34.3.28) (2020-03-11)


### Bug Fixes

* pivot table fixes, upgrade analytics, and fix en.pot ([#796](https://github.com/dhis2/data-visualizer-app/issues/796)) ([71c10ed](https://github.com/dhis2/data-visualizer-app/commit/71c10ed9c9fa4df02bd87ad76d36c806b2b5fac9))

## [34.3.27](https://github.com/dhis2/data-visualizer-app/compare/v34.3.26...v34.3.27) (2020-03-11)


### Bug Fixes

* only request numDen for pivot tables ([#793](https://github.com/dhis2/data-visualizer-app/issues/793)) [skip ci] ([83fd843](https://github.com/dhis2/data-visualizer-app/commit/83fd8438afbecedf5966510e58dbbff81aa79db0))
* upgrade d2 to latest ([#794](https://github.com/dhis2/data-visualizer-app/issues/794)) ([4cd9caf](https://github.com/dhis2/data-visualizer-app/commit/4cd9caf51ed0e60e1daeff546398d51d1433540e))

## [34.3.26](https://github.com/dhis2/data-visualizer-app/compare/v34.3.25...v34.3.26) (2020-03-10)


### Bug Fixes

* upgrade analytics 4.3.11 -> 4.3.15 ([c6ed440](https://github.com/dhis2/data-visualizer-app/commit/c6ed440bdb9d7ee05ceabea2d9297c47d9976861))

## [34.3.25](https://github.com/dhis2/data-visualizer-app/compare/v34.3.24...v34.3.25) (2020-03-10)


### Bug Fixes

* include numerator and denominator in analytics requests ([#787](https://github.com/dhis2/data-visualizer-app/issues/787)) ([56ee4e8](https://github.com/dhis2/data-visualizer-app/commit/56ee4e86dab56c4d89e0be2b8621a3625b0aead5))

## [34.3.24](https://github.com/dhis2/data-visualizer-app/compare/v34.3.23...v34.3.24) (2020-03-10)


### Bug Fixes

* show names for levels and groups in dimension chip tooltip ([#792](https://github.com/dhis2/data-visualizer-app/issues/792)) ([0e91268](https://github.com/dhis2/data-visualizer-app/commit/0e912686d64709f680520755ea573c283e363628))

## [34.3.23](https://github.com/dhis2/data-visualizer-app/compare/v34.3.22...v34.3.23) (2020-03-10)


### Bug Fixes

* saving incorrectly shows the confirmation  ([#791](https://github.com/dhis2/data-visualizer-app/issues/791)) ([b1d91ee](https://github.com/dhis2/data-visualizer-app/commit/b1d91ee04dac020aaa251f6918adf3b51b6e9b78))

## [34.3.22](https://github.com/dhis2/data-visualizer-app/compare/v34.3.21...v34.3.22) (2020-03-10)


### Bug Fixes

* Pivot Table allow empty col or row ([#789](https://github.com/dhis2/data-visualizer-app/issues/789)) ([ee337a5](https://github.com/dhis2/data-visualizer-app/commit/ee337a5181cd201d81c455734c826058bde2db13))

## [34.3.21](https://github.com/dhis2/data-visualizer-app/compare/v34.3.20...v34.3.21) (2020-03-10)


### Bug Fixes

* missing translation in sharing dialog (DHIS2-8249) ([#790](https://github.com/dhis2/data-visualizer-app/issues/790)) ([23a3cac](https://github.com/dhis2/data-visualizer-app/commit/23a3cacfa3844b1e212e89156774f80339ea7b16))

## [34.3.20](https://github.com/dhis2/data-visualizer-app/compare/v34.3.19...v34.3.20) (2020-03-10)


### Bug Fixes

* confirmation before navigating away from unsaved state (DHIS2-8432) ([#788](https://github.com/dhis2/data-visualizer-app/issues/788)) ([66e1dbc](https://github.com/dhis2/data-visualizer-app/commit/66e1dbc345d0681fd2512d82606b67199762e223))

## [34.3.19](https://github.com/dhis2/data-visualizer-app/compare/v34.3.18...v34.3.19) (2020-03-10)


### Bug Fixes

* fix loading translations for share/translate dialogs (DHIS2-8249) ([#785](https://github.com/dhis2/data-visualizer-app/issues/785)) ([6184770](https://github.com/dhis2/data-visualizer-app/commit/618477081c8c011165cdfd92c73d7639bb855274))

## [34.3.18](https://github.com/dhis2/data-visualizer-app/compare/v34.3.17...v34.3.18) (2020-03-06)


### Bug Fixes

* upgraded to d2-ui-file-menu v6.5.10, improved open dialog vis types ([#786](https://github.com/dhis2/data-visualizer-app/issues/786)) ([3c8f80c](https://github.com/dhis2/data-visualizer-app/commit/3c8f80c9e0922388efe9113d79a616ac65c52008)), closes [dhis2/d2-ui#574](https://github.com/dhis2/d2-ui/issues/574)

## [34.3.17](https://github.com/dhis2/data-visualizer-app/compare/v34.3.16...v34.3.17) (2020-03-06)


### Bug Fixes

* upgraded to Analytics v4.3.8 for title ellipsis ([#784](https://github.com/dhis2/data-visualizer-app/issues/784)) ([92fcbf5](https://github.com/dhis2/data-visualizer-app/commit/92fcbf56ec6ea26818816c97c8434140a95626ad))

## [34.3.16](https://github.com/dhis2/data-visualizer-app/compare/v34.3.15...v34.3.16) (2020-03-05)


### Bug Fixes

* do not pass options intended for download request DHIS2-8401 ([#783](https://github.com/dhis2/data-visualizer-app/issues/783)) ([a223011](https://github.com/dhis2/data-visualizer-app/commit/a2230119dd2a20e2c3cb9a176646af43122b7878))

## [34.3.15](https://github.com/dhis2/data-visualizer-app/compare/v34.3.14...v34.3.15) (2020-03-05)


### Bug Fixes

* updated the error and start page texts based on user feedback ([#781](https://github.com/dhis2/data-visualizer-app/issues/781)) ([a51b9e0](https://github.com/dhis2/data-visualizer-app/commit/a51b9e0100a2867ab7940e2e2a3d4fe642bea6fd))

## [34.3.14](https://github.com/dhis2/data-visualizer-app/compare/v34.3.13...v34.3.14) (2020-03-04)


### Bug Fixes

* support adaptive clipping for pivot tables ([#782](https://github.com/dhis2/data-visualizer-app/issues/782)) ([2b0cfa8](https://github.com/dhis2/data-visualizer-app/commit/2b0cfa81a8fc0befd9264ea48f7599d3af2c211b))

## [34.3.13](https://github.com/dhis2/data-visualizer-app/compare/v34.3.12...v34.3.13) (2020-03-04)


### Bug Fixes

* bump @dhis2/analytics@4.3.4 to fix DHIS2-6562 ([#780](https://github.com/dhis2/data-visualizer-app/issues/780)) ([c586e40](https://github.com/dhis2/data-visualizer-app/commit/c586e408f4414f759ad5706aff8c95f60fc53d2f))

## [34.3.12](https://github.com/dhis2/data-visualizer-app/compare/v34.3.11...v34.3.12) (2020-03-04)


### Bug Fixes

* load /#/currentAnalyticalObject crash ([#779](https://github.com/dhis2/data-visualizer-app/issues/779)) ([472dd54](https://github.com/dhis2/data-visualizer-app/commit/472dd54db3e2d9eb74e78ad9205e368fc521ef9e))

## [34.3.11](https://github.com/dhis2/data-visualizer-app/compare/v34.3.10...v34.3.11) (2020-03-04)


### Bug Fixes

* DEGS and RR combination error ([#758](https://github.com/dhis2/data-visualizer-app/issues/758)) ([8c4f11b](https://github.com/dhis2/data-visualizer-app/commit/8c4f11b2c797e7d928fb1c50873181f7bba026c5))

## [34.3.10](https://github.com/dhis2/data-visualizer-app/compare/v34.3.9...v34.3.10) (2020-03-03)


### Bug Fixes

* interpretations panel show for PT visualization type DHIS2-8300 ([#778](https://github.com/dhis2/data-visualizer-app/issues/778)) ([8cc1643](https://github.com/dhis2/data-visualizer-app/commit/8cc1643007a1cc847057ce1689a3f8e9b58bf3c0))

## [34.3.9](https://github.com/dhis2/data-visualizer-app/compare/v34.3.8...v34.3.9) (2020-03-02)


### Bug Fixes

* @dhis2/analytics@4.3.1 ([#759](https://github.com/dhis2/data-visualizer-app/issues/759)) ([9277236](https://github.com/dhis2/data-visualizer-app/commit/9277236d3a6cab7d10a78dc9dbe0f2e91bf8c61b))

## [34.3.8](https://github.com/dhis2/data-visualizer-app/compare/v34.3.7...v34.3.8) (2020-02-27)


### Bug Fixes

* remove data dimension validation ([#738](https://github.com/dhis2/data-visualizer-app/issues/738)) ([b26bb27](https://github.com/dhis2/data-visualizer-app/commit/b26bb27d2ab397cec4c3f54f35ea2be40c4013f9))

## [34.3.7](https://github.com/dhis2/data-visualizer-app/compare/v34.3.6...v34.3.7) (2020-02-27)


### Bug Fixes

* rephrase legend display strategy option ([#735](https://github.com/dhis2/data-visualizer-app/issues/735)) ([31a75fa](https://github.com/dhis2/data-visualizer-app/commit/31a75fa845788470748a467d413b8d62cb46f3d6))

## [34.3.6](https://github.com/dhis2/data-visualizer-app/compare/v34.3.5...v34.3.6) (2020-02-27)


### Bug Fixes

* avoid casting undefined to Number -> NaN ([#737](https://github.com/dhis2/data-visualizer-app/issues/737)) ([37120b3](https://github.com/dhis2/data-visualizer-app/commit/37120b34d3a40b9745ca6cd112e54fd793afc4a1))

## [34.3.5](https://github.com/dhis2/data-visualizer-app/compare/v34.3.4...v34.3.5) (2020-02-27)


### Bug Fixes

* support more pivot table features ([#739](https://github.com/dhis2/data-visualizer-app/issues/739)) ([c6f09a1](https://github.com/dhis2/data-visualizer-app/commit/c6f09a1e6039be1a47c1c8ac4cb582344a6d027e))

## [34.3.4](https://github.com/dhis2/data-visualizer-app/compare/v34.3.3...v34.3.4) (2020-02-26)


### Bug Fixes

* completed only all vis types ([#734](https://github.com/dhis2/data-visualizer-app/issues/734)) ([0dc37ce](https://github.com/dhis2/data-visualizer-app/commit/0dc37cea617b0c23a6bc5212790a4b838a3c5fe0))

## [34.3.3](https://github.com/dhis2/data-visualizer-app/compare/v34.3.2...v34.3.3) (2020-02-25)


### Bug Fixes

* gauge range bug ([#724](https://github.com/dhis2/data-visualizer-app/issues/724)) ([19a3983](https://github.com/dhis2/data-visualizer-app/commit/19a39836b606c81851f371c1edacdec2cc11528c)), closes [dhis2/analytics#321](https://github.com/dhis2/analytics/issues/321)

## [34.3.2](https://github.com/dhis2/data-visualizer-app/compare/v34.3.1...v34.3.2) (2020-02-25)


### Bug Fixes

* crash and warnings with empty db DHIS2-8335 ([#723](https://github.com/dhis2/data-visualizer-app/issues/723)) ([ec52553](https://github.com/dhis2/data-visualizer-app/commit/ec525532d17fb75040ac7507da5fe6280b1f39f0))

## [34.3.1](https://github.com/dhis2/data-visualizer-app/compare/v34.3.0...v34.3.1) (2020-02-25)


### Bug Fixes

* single value legend (DHIS2-8348) ([#722](https://github.com/dhis2/data-visualizer-app/issues/722)) ([ec78234](https://github.com/dhis2/data-visualizer-app/commit/ec78234470f7dd89613cc10b77d52fd52e12ff42))

# [34.3.0](https://github.com/dhis2/data-visualizer-app/compare/v34.2.7...v34.3.0) (2020-02-24)


### Features

* fetch all legend definitions for data items ([#703](https://github.com/dhis2/data-visualizer-app/issues/703)) ([64e6861](https://github.com/dhis2/data-visualizer-app/commit/64e6861432661c75390223d62864d3bae3bad1f4))

## [34.2.7](https://github.com/dhis2/data-visualizer-app/compare/v34.2.6...v34.2.7) (2020-02-24)


### Bug Fixes

* legends for gauge ([#702](https://github.com/dhis2/data-visualizer-app/issues/702)) ([7c29e47](https://github.com/dhis2/data-visualizer-app/commit/7c29e4793b0c1a553bdbc54d83e36bc5a3c8aa7e))

## [34.2.6](https://github.com/dhis2/data-visualizer-app/compare/v34.2.5...v34.2.6) (2020-02-21)


### Bug Fixes

* height in safari (DHIS2-8277) ([#704](https://github.com/dhis2/data-visualizer-app/issues/704)) ([75994b3](https://github.com/dhis2/data-visualizer-app/commit/75994b38cc70747869fe98dccc36f7167c0325c5)), closes [dhis2/app-platform#303](https://github.com/dhis2/app-platform/issues/303)

## [34.2.5](https://github.com/dhis2/data-visualizer-app/compare/v34.2.4...v34.2.5) (2020-02-20)


### Bug Fixes

* add pivot table legend support, upgrade to @dhis2/analytics@4.1.0 ([#701](https://github.com/dhis2/data-visualizer-app/issues/701)) ([cdf5934](https://github.com/dhis2/data-visualizer-app/commit/cdf593425baee8383a064af10ba871474a1687f3))

## [34.2.4](https://github.com/dhis2/data-visualizer-app/compare/v34.2.3...v34.2.4) (2020-02-20)


### Bug Fixes

* checks for data in all responses instead of in each individual one ([#699](https://github.com/dhis2/data-visualizer-app/issues/699)) ([ffbb54e](https://github.com/dhis2/data-visualizer-app/commit/ffbb54ea619674eb2a6adf154931c3e46e87aeb8))

## [34.2.3](https://github.com/dhis2/data-visualizer-app/compare/v34.2.2...v34.2.3) (2020-02-20)


### Bug Fixes

* fix filtering of non savable options ([#700](https://github.com/dhis2/data-visualizer-app/issues/700)) ([51138bb](https://github.com/dhis2/data-visualizer-app/commit/51138bbd0b5dafd44260fc4e422957ced866c55d))

## [34.2.2](https://github.com/dhis2/data-visualizer-app/compare/v34.2.1...v34.2.2) (2020-02-20)


### Bug Fixes

* missing PT download params ([#671](https://github.com/dhis2/data-visualizer-app/issues/671)) ([49669f0](https://github.com/dhis2/data-visualizer-app/commit/49669f0743fbe62324240c06a5485e07a5c11243))

## [34.2.1](https://github.com/dhis2/data-visualizer-app/compare/v34.2.0...v34.2.1) (2020-02-18)


### Bug Fixes

* dimensions modal to show only when dimension is added ([#655](https://github.com/dhis2/data-visualizer-app/issues/655)) ([b199e6e](https://github.com/dhis2/data-visualizer-app/commit/b199e6eab08de87f2b09429d9ac9329d8a091e68)), closes [dhis2/analytics#294](https://github.com/dhis2/analytics/issues/294)

# [34.2.0](https://github.com/dhis2/data-visualizer-app/compare/v34.1.0...v34.2.0) (2020-02-17)


### Features

* option for data approval level ([#657](https://github.com/dhis2/data-visualizer-app/issues/657)) ([3b7d274](https://github.com/dhis2/data-visualizer-app/commit/3b7d2744884c26ee7a21fbb88cb6a6ffc24a1f6e))

# [34.1.0](https://github.com/dhis2/data-visualizer-app/compare/v34.0.7...v34.1.0) (2020-02-17)


### Features

* fetch legendSet and pass as prop to plugins ([#666](https://github.com/dhis2/data-visualizer-app/issues/666)) ([180a82c](https://github.com/dhis2/data-visualizer-app/commit/180a82c2fd0b8a564e406f2c369827f03431c18e))

## [34.0.7](https://github.com/dhis2/data-visualizer-app/compare/v34.0.6...v34.0.7) (2020-02-17)


### Bug Fixes

* fix default state for LegendSet option ([#668](https://github.com/dhis2/data-visualizer-app/issues/668)) ([3bfda8c](https://github.com/dhis2/data-visualizer-app/commit/3bfda8cfbb4632c1ef93c56c553f56b9a928c741))

## [34.0.6](https://github.com/dhis2/data-visualizer-app/compare/v34.0.5...v34.0.6) (2020-02-17)


### Bug Fixes

* correct number parsing and rendering with @dhis2/analytics@3.3.3 ([#669](https://github.com/dhis2/data-visualizer-app/issues/669)) ([6943361](https://github.com/dhis2/data-visualizer-app/commit/69433610a84a6cbf5441e198bc880ad706fd1f0e))

## [34.0.5](https://github.com/dhis2/data-visualizer-app/compare/v34.0.4...v34.0.5) (2020-02-14)


### Bug Fixes

* minor ui glitches ([#667](https://github.com/dhis2/data-visualizer-app/issues/667)) ([d8e8e9e](https://github.com/dhis2/data-visualizer-app/commit/d8e8e9ef3492b7d070a74a6a2867e1afe1e9ad15))

## [34.0.4](https://github.com/dhis2/data-visualizer-app/compare/v34.0.3...v34.0.4) (2020-02-14)


### Bug Fixes

* owner filter label (DHIS2-8263) ([#659](https://github.com/dhis2/data-visualizer-app/issues/659)) ([591bbe5](https://github.com/dhis2/data-visualizer-app/commit/591bbe5474a118db27a9b45174dbc87a692f2df8))

## [34.0.3](https://github.com/dhis2/data-visualizer-app/compare/v34.0.2...v34.0.3) (2020-02-14)


### Bug Fixes

* data with multiple indicators error message ([#658](https://github.com/dhis2/data-visualizer-app/issues/658)) ([f200787](https://github.com/dhis2/data-visualizer-app/commit/f2007875125986c29c908c28b6b50c6f84c72852))

## [34.0.2](https://github.com/dhis2/data-visualizer-app/compare/v34.0.1...v34.0.2) (2020-02-13)


### Bug Fixes

* missing Pivot options ([#665](https://github.com/dhis2/data-visualizer-app/issues/665)) ([6aea633](https://github.com/dhis2/data-visualizer-app/commit/6aea6330ae370697a4c30418a50777d14c31e40f))

## [34.0.1](https://github.com/dhis2/data-visualizer-app/compare/v34.0.0...v34.0.1) (2020-02-13)


### Bug Fixes

* upgrade @dhis2/analytics for latest pivot table features ([#663](https://github.com/dhis2/data-visualizer-app/issues/663)) ([d35ddd9](https://github.com/dhis2/data-visualizer-app/commit/d35ddd9a9e452c9730a5d5c34f978e405bcb9b89))

# [34.0.0](https://github.com/dhis2/data-visualizer-app/compare/v33.0.0...v34.0.0) (2020-02-12)


### Bug Fixes

* correctly specify runtime and peer dependencieis ([#662](https://github.com/dhis2/data-visualizer-app/issues/662)) ([a2e3f60](https://github.com/dhis2/data-visualizer-app/commit/a2e3f60c5fc911f32f6a2e7576950a24df81c499))


### BREAKING CHANGES

* The Data Visualizer Plugin now requires react and react-dom to be provided by the consumer.

# [33.0.0](https://github.com/dhis2/data-visualizer-app/compare/v32.0.3...v33.0.0) (2020-02-12)


### Bug Fixes

* @dhis2/analytics 2.6.11 ([#448](https://github.com/dhis2/data-visualizer-app/issues/448)) ([231bcd8](https://github.com/dhis2/data-visualizer-app/commit/231bcd8af542e13a343f07886b2b675c6c997523))
* added icons to tooltip for warning and locked ([#447](https://github.com/dhis2/data-visualizer-app/issues/447)) ([26a95e8](https://github.com/dhis2/data-visualizer-app/commit/26a95e8fe73bdc20c45bd22394069214f723c9fa))
* added lint, commit message and test commit/push hooks ([#526](https://github.com/dhis2/data-visualizer-app/issues/526)) ([0292a63](https://github.com/dhis2/data-visualizer-app/commit/0292a63c5552349f77844e14c431ea8d9735d32d))
* adjust options dialog for easier scanning ([#580](https://github.com/dhis2/data-visualizer-app/issues/580)) ([b0393ff](https://github.com/dhis2/data-visualizer-app/commit/b0393ff2528fc38142fec7e2fadfd0fa64d402ba))
* assigned categories and new dimension types ([#576](https://github.com/dhis2/data-visualizer-app/issues/576)) ([2faae50](https://github.com/dhis2/data-visualizer-app/commit/2faae50e9d23494cdad8268e986c20890b20deca))
* avoid infinite loading and make chart plugin use hooks (DHIS2-8290) ([#653](https://github.com/dhis2/data-visualizer-app/issues/653)) ([9de60dd](https://github.com/dhis2/data-visualizer-app/commit/9de60dd2bea0f6fad1e2c4c32586f75782944dcf))
* avoid React warning about required proptype ([#311](https://github.com/dhis2/data-visualizer-app/issues/311)) ([5dda862](https://github.com/dhis2/data-visualizer-app/commit/5dda862cc28a9a0b0bdbb33a91c941cbe446e380))
* changed height to min-height for the axes area ([#361](https://github.com/dhis2/data-visualizer-app/issues/361)) ([8c0ed13](https://github.com/dhis2/data-visualizer-app/commit/8c0ed1324275082b7c171104196524f236bf5696))
* changed incorrect prop types and tests ([#372](https://github.com/dhis2/data-visualizer-app/issues/372)) ([c96ac09](https://github.com/dhis2/data-visualizer-app/commit/c96ac099af5854a1e8dd4c194a5c1c8be78b87cb))
* chip cursor ([#566](https://github.com/dhis2/data-visualizer-app/issues/566)) ([8701256](https://github.com/dhis2/data-visualizer-app/commit/8701256b69cb39a98ca3d14182c71585b531ac2d))
* convert numeric options to strings to silence ui-core warnings ([#617](https://github.com/dhis2/data-visualizer-app/issues/617)) ([c3fe18d](https://github.com/dhis2/data-visualizer-app/commit/c3fe18d169c66a81d51e9adb10e45cb1db690e44))
* correctly set showDimensionLabels option ([#621](https://github.com/dhis2/data-visualizer-app/issues/621)) ([01427ac](https://github.com/dhis2/data-visualizer-app/commit/01427acd1787bdbd190f32b043bada9e8a5d7f30))
* d2-ui-analytics 1.0.2 ([#277](https://github.com/dhis2/data-visualizer-app/issues/277)) ([62241f8](https://github.com/dhis2/data-visualizer-app/commit/62241f85c2c2cbf6f66df42927240b5fd82d18f4))
* dashboard items resize should trigger chart reload ([#282](https://github.com/dhis2/data-visualizer-app/issues/282)) ([86070ae](https://github.com/dhis2/data-visualizer-app/commit/86070ae9debd5abca40c023690df80cdda2aee9f))
* dimension dialog update validation ([#486](https://github.com/dhis2/data-visualizer-app/issues/486)) ([429c51e](https://github.com/dhis2/data-visualizer-app/commit/429c51eadb4927322b07a66974229722156e6e6d))
* dimensions panel divided in to sections ([#581](https://github.com/dhis2/data-visualizer-app/issues/581)) ([3a9627a](https://github.com/dhis2/data-visualizer-app/commit/3a9627a65ac730d000eb9727cd383f8e23e0e649))
* do not run default adapter for pivot tables ([#616](https://github.com/dhis2/data-visualizer-app/issues/616)) ([27d8ab7](https://github.com/dhis2/data-visualizer-app/commit/27d8ab7e2d08ebac5b084038674a5c28b9ee62da))
* don't render pivot table before data has loaded ([#635](https://github.com/dhis2/data-visualizer-app/issues/635)) ([844d989](https://github.com/dhis2/data-visualizer-app/commit/844d98973a77639c756f1bfdf61011dfdda559e5))
* download menu options for PT ([#624](https://github.com/dhis2/data-visualizer-app/issues/624)) ([c131970](https://github.com/dhis2/data-visualizer-app/commit/c1319705b6b817988840c5c2719f7198533d9fb2))
* dynamic axis names based on vis type ([#623](https://github.com/dhis2/data-visualizer-app/issues/623)) ([24510e0](https://github.com/dhis2/data-visualizer-app/commit/24510e0fcadf1a4f81e3532566b3df1811182446))
* equal padding for the AO title bar ([#567](https://github.com/dhis2/data-visualizer-app/issues/567)) ([17238ed](https://github.com/dhis2/data-visualizer-app/commit/17238ed30449b5aa7d7f6989602df96bc10585c5))
* Fetching analytics for analytical object with undefined aggregationType in plugin ([#232](https://github.com/dhis2/data-visualizer-app/issues/232)) ([bfe41b4](https://github.com/dhis2/data-visualizer-app/commit/bfe41b4eb2784bc2a5d854833510ad41e1ce0b14))
* Fetching analytics for year over year charts in plugin ([#231](https://github.com/dhis2/data-visualizer-app/issues/231)) ([16853ef](https://github.com/dhis2/data-visualizer-app/commit/16853ef7e205b89eb2072e860b1124ececdaa4c3))
* fix prop type for value in SortOrder option component ([#568](https://github.com/dhis2/data-visualizer-app/issues/568)) ([8379621](https://github.com/dhis2/data-visualizer-app/commit/8379621a179ce72c922c259beac5463f0a6529ac))
* fix styling issues in options ([#585](https://github.com/dhis2/data-visualizer-app/issues/585)) ([d4c5bc6](https://github.com/dhis2/data-visualizer-app/commit/d4c5bc674ec8b07208694ffd227f98ff3326d38d))
* fix values for topLimit option ([#579](https://github.com/dhis2/data-visualizer-app/issues/579)) ([3d249a6](https://github.com/dhis2/data-visualizer-app/commit/3d249a6e52348a06604a2b5b57df8f7dadf51f2e))
* fixes for DND between axes ([#554](https://github.com/dhis2/data-visualizer-app/issues/554)) ([886de23](https://github.com/dhis2/data-visualizer-app/commit/886de23efdb0d2b84043707d16316e38f813c945))
* fixes for options with numeric values and toggleable Select ([#583](https://github.com/dhis2/data-visualizer-app/issues/583)) ([8a40296](https://github.com/dhis2/data-visualizer-app/commit/8a40296e2d4e85e6af594989ba6869285bc32bb0))
* gauge now follows the behaviour of single value instead of pie ([#489](https://github.com/dhis2/data-visualizer-app/issues/489)) ([9969e61](https://github.com/dhis2/data-visualizer-app/commit/9969e61d806780724dce7804922c93ddb3d33552))
* gauge plot lines and range values in options ([#654](https://github.com/dhis2/data-visualizer-app/issues/654)) ([7736b29](https://github.com/dhis2/data-visualizer-app/commit/7736b2964eb6b460a51e19b0fde8ac5ff5786a2b))
* i18n merge conflict ([ac8c383](https://github.com/dhis2/data-visualizer-app/commit/ac8c383090975bfe8081b1109bcda7ec7d2b7758))
* impl max dims rule ([#517](https://github.com/dhis2/data-visualizer-app/issues/517)) ([241de69](https://github.com/dhis2/data-visualizer-app/commit/241de69704fffac551d902838986f1f0da9ed592))
* implemented the error code for assigned categories ([#557](https://github.com/dhis2/data-visualizer-app/issues/557)) ([7b9f52b](https://github.com/dhis2/data-visualizer-app/commit/7b9f52b96cd569e291a56c813d263674d6666b2a))
* layout for pivot tables ([#577](https://github.com/dhis2/data-visualizer-app/issues/577)) ([033be21](https://github.com/dhis2/data-visualizer-app/commit/033be21e108c7e80cfb0bd9e8258a339066bd8a5))
* loading spinner for plugins (DHIS2-8117) ([#587](https://github.com/dhis2/data-visualizer-app/issues/587)) ([f8be30b](https://github.com/dhis2/data-visualizer-app/commit/f8be30bfb59cee3f10ceb591311052134042b3d6))
* locked dims not array ([#491](https://github.com/dhis2/data-visualizer-app/issues/491)) ([15ae8a8](https://github.com/dhis2/data-visualizer-app/commit/15ae8a819604b3cc8acf8b66e9f824a962255673))
* long names for dimensions, chip and tooltip (DHIS2-7932) ([#556](https://github.com/dhis2/data-visualizer-app/issues/556)) ([2212398](https://github.com/dhis2/data-visualizer-app/commit/221239844319d2dc7ba3aa98636b057ebfef4ef2))
* manifest credentials bug in chrome ([#233](https://github.com/dhis2/data-visualizer-app/issues/233)) ([a0032e0](https://github.com/dhis2/data-visualizer-app/commit/a0032e00e1adbc597969a40d0d0c4184681e6f8e))
* map is not vis type ([#371](https://github.com/dhis2/data-visualizer-app/issues/371)) ([22c36e2](https://github.com/dhis2/data-visualizer-app/commit/22c36e27bc963ea13b6cc2af9765806ff14b339f))
* merge conflicts ([3eb1c77](https://github.com/dhis2/data-visualizer-app/commit/3eb1c77977b386bff1c55d6124b30c6dbb3258d6))
* only point series to axes for certain types ([#264](https://github.com/dhis2/data-visualizer-app/issues/264)) ([24b6ac0](https://github.com/dhis2/data-visualizer-app/commit/24b6ac0c3fa2086429d51bce3495c7cb728b559b))
* only run empty check after all values have been added ([#627](https://github.com/dhis2/data-visualizer-app/issues/627)) ([75b6ae4](https://github.com/dhis2/data-visualizer-app/commit/75b6ae4261fab93a9def58e248489dbe67174c4b))
* open modal for empty dims ([#625](https://github.com/dhis2/data-visualizer-app/issues/625)) ([e07d786](https://github.com/dhis2/data-visualizer-app/commit/e07d786b20a64dd88e1c96c6d8519044e4f56dec))
* options with numeric values (sortOrder) ([#564](https://github.com/dhis2/data-visualizer-app/issues/564)) ([94ad11d](https://github.com/dhis2/data-visualizer-app/commit/94ad11d642244cec1902c84df5cd0ec89e988bd4))
* org unit selector - only act on path if it exists ([#276](https://github.com/dhis2/data-visualizer-app/issues/276)) ([9299038](https://github.com/dhis2/data-visualizer-app/commit/92990383e69e6765c3eab8d8e0aa20c8e4c651b8))
* pie tooltip DHIS2-7532 ([#330](https://github.com/dhis2/data-visualizer-app/issues/330)) ([72eb5db](https://github.com/dhis2/data-visualizer-app/commit/72eb5db4d9f0ab2953ef7ee3ff71511622f454f4))
* pin to analytics@2.6.11 ([#495](https://github.com/dhis2/data-visualizer-app/issues/495)) ([5f21406](https://github.com/dhis2/data-visualizer-app/commit/5f21406aa3430c4db4e375bd28d18cd90797e022))
* pin to analytics@2.6.11 ([#495](https://github.com/dhis2/data-visualizer-app/issues/495)) ([25b4545](https://github.com/dhis2/data-visualizer-app/commit/25b454541658e69ca9ed197699f53bc811de5ad5))
* properly set layout on vis type change for all vis types ([#586](https://github.com/dhis2/data-visualizer-app/issues/586)) ([489fbf9](https://github.com/dhis2/data-visualizer-app/commit/489fbf923d38f95f2739927ffe545161fa04d13a))
* provide useful error messages (DHIS2-5029) ([#552](https://github.com/dhis2/data-visualizer-app/issues/552)) ([ef16c68](https://github.com/dhis2/data-visualizer-app/commit/ef16c687d02a8733a6a1768198a1879793fcd64a))
* remove api.baseUrl duplicate ([#573](https://github.com/dhis2/data-visualizer-app/issues/573)) ([ac05af6](https://github.com/dhis2/data-visualizer-app/commit/ac05af6c896b92e274fe0c35bfba0a55459734f9))
* remove code climate config for now ([80c891a](https://github.com/dhis2/data-visualizer-app/commit/80c891a852b756d230cdd114533e4e10f1756136))
* remove colon from chip if no selection ([#312](https://github.com/dhis2/data-visualizer-app/issues/312)) ([e667134](https://github.com/dhis2/data-visualizer-app/commit/e667134f73e858f379968e82b34321a3f88b2c6a))
* remove custom title when Auto is selected (DHIS2-8252) ([#636](https://github.com/dhis2/data-visualizer-app/issues/636)) ([44ed1a5](https://github.com/dhis2/data-visualizer-app/commit/44ed1a58513439dafbad51f0977b260a22b9c2f0))
* remove ripple effect in dimension list when drag starts/ends ([#584](https://github.com/dhis2/data-visualizer-app/issues/584)) ([c91ed3b](https://github.com/dhis2/data-visualizer-app/commit/c91ed3b85676291d3be13bc46d8ff07d6f2f7388))
* rename axis name constants ([#445](https://github.com/dhis2/data-visualizer-app/issues/445)) ([b75967a](https://github.com/dhis2/data-visualizer-app/commit/b75967a8fb5bd056ad6ebc0983ef422f6eefdcc3))
* rules dim handling ([#446](https://github.com/dhis2/data-visualizer-app/issues/446)) ([445f1d8](https://github.com/dhis2/data-visualizer-app/commit/445f1d840d3d5f8e7764869eb29c27a237ad30c7))
* single value without dx items ([#313](https://github.com/dhis2/data-visualizer-app/issues/313)) ([f1fbe22](https://github.com/dhis2/data-visualizer-app/commit/f1fbe22398e35210e0852e9a16424f9967794e72))
* start screen icons ([#558](https://github.com/dhis2/data-visualizer-app/issues/558)) ([841c9c7](https://github.com/dhis2/data-visualizer-app/commit/841c9c716ef361f42cbc4d49784483f0141d5ff6))
* swap full axis dims to filter ([#518](https://github.com/dhis2/data-visualizer-app/issues/518)) ([a79e329](https://github.com/dhis2/data-visualizer-app/commit/a79e3296c3adead801a22a437c76b2240a5ff3ab))
* tooltip message ([#449](https://github.com/dhis2/data-visualizer-app/issues/449)) ([ca55b7e](https://github.com/dhis2/data-visualizer-app/commit/ca55b7e7afc590f65229f23a9af01f617c04644f))
* turn class vars into functions ([#569](https://github.com/dhis2/data-visualizer-app/issues/569)) ([236885b](https://github.com/dhis2/data-visualizer-app/commit/236885bebfc96e85ac179418268cdce057684d7f))
* ui glitches ([#618](https://github.com/dhis2/data-visualizer-app/issues/618)) ([2788daf](https://github.com/dhis2/data-visualizer-app/commit/2788daf2e57968ceed670946cfa61361c956912d))
* ui updates to the start screen ([#548](https://github.com/dhis2/data-visualizer-app/issues/548)) ([20dd6ca](https://github.com/dhis2/data-visualizer-app/commit/20dd6ca4b1001a7b225205738ba74644af549ee9))
* ui updates to the start screen ([#548](https://github.com/dhis2/data-visualizer-app/issues/548)) ([fee2153](https://github.com/dhis2/data-visualizer-app/commit/fee2153fecdac157fdcefb6b5152bbaf0f3a9003))
* update @dhis2/analytics dependency ([#319](https://github.com/dhis2/data-visualizer-app/issues/319)) ([5752bea](https://github.com/dhis2/data-visualizer-app/commit/5752beab4290effd685cb661bc0d570db54d0a4d))
* update analytics and plugin dep ([#324](https://github.com/dhis2/data-visualizer-app/issues/324)) ([8bb0202](https://github.com/dhis2/data-visualizer-app/commit/8bb02023ede17970015f28eddb254ab73715a9be))
* update charts api dep ([#297](https://github.com/dhis2/data-visualizer-app/issues/297)) ([ab13e1c](https://github.com/dhis2/data-visualizer-app/commit/ab13e1c3177331f948a90f3eb5d4817ac989a57a))
* update gradient colors check ([#261](https://github.com/dhis2/data-visualizer-app/issues/261)) ([b39cec2](https://github.com/dhis2/data-visualizer-app/commit/b39cec22e96eef53dc122b19b8bad117fd6e93ba))
* update plugin dependency ([#318](https://github.com/dhis2/data-visualizer-app/issues/318)) ([452a287](https://github.com/dhis2/data-visualizer-app/commit/452a28775aa2d124afb9f453df24cace02ec68a2))
* update plugin version ([#320](https://github.com/dhis2/data-visualizer-app/issues/320)) ([3921334](https://github.com/dhis2/data-visualizer-app/commit/392133404d21d56704282f591e88d2edc1d8023e))
* update recuder to handle empty axes ([#630](https://github.com/dhis2/data-visualizer-app/issues/630)) ([077dd68](https://github.com/dhis2/data-visualizer-app/commit/077dd68229ac5166c8ae75a7912983c8649fe262))
* updated proptype for error ([#553](https://github.com/dhis2/data-visualizer-app/issues/553)) ([21a9b4a](https://github.com/dhis2/data-visualizer-app/commit/21a9b4a47b96baecd6273c72ebd92dcdf1770d8c))
* upgrade @dhis2/analytics to fix dimension dialog styling ([#551](https://github.com/dhis2/data-visualizer-app/issues/551)) ([c90f2b8](https://github.com/dhis2/data-visualizer-app/commit/c90f2b8556a9d4c05a6202430d81acad98db0d3e))
* upgrade @dhis2/cli-app-scripts and use platform-provided height ([#550](https://github.com/dhis2/data-visualizer-app/issues/550)) ([b6ffdfb](https://github.com/dhis2/data-visualizer-app/commit/b6ffdfb0bf754f2255312524dcbac911dd5c5351))
* upgrade cli-app-scripts to fix package resolution ([#540](https://github.com/dhis2/data-visualizer-app/issues/540)) ([a52f7f3](https://github.com/dhis2/data-visualizer-app/commit/a52f7f3df2af63cc67d1245e2a4e55a3f0b80eba))
* use a doc-like icon for PT downloads ([#626](https://github.com/dhis2/data-visualizer-app/issues/626)) ([a407372](https://github.com/dhis2/data-visualizer-app/commit/a4073729aab3a99980aab8957136a3412c032a4e))
* use axisName instead of axisKey ([204fe7a](https://github.com/dhis2/data-visualizer-app/commit/204fe7abc0b505ff0ff5a3de1368744cbecaf8f6))
* use layout type to get the right layout comp ([#563](https://github.com/dhis2/data-visualizer-app/issues/563)) ([17c26ba](https://github.com/dhis2/data-visualizer-app/commit/17c26bae480b59d0a76b9165e5fe5a71ac3d619d))
* use locked dimensions rule from analytics ([#444](https://github.com/dhis2/data-visualizer-app/issues/444)) ([883304f](https://github.com/dhis2/data-visualizer-app/commit/883304f7b8e83570c2ba7cfa97129c85d39fe835))
* use max items rule ([#373](https://github.com/dhis2/data-visualizer-app/issues/373)) ([ded0ee9](https://github.com/dhis2/data-visualizer-app/commit/ded0ee9836c98bdb7565c909a57aa0faa1d63c28))
* use shared vis types ([#368](https://github.com/dhis2/data-visualizer-app/issues/368)) ([26d12c6](https://github.com/dhis2/data-visualizer-app/commit/26d12c61d35feb148c65cc67b4bb3250d35b3c79))
* viewport layout with visible interpretations panel ([#323](https://github.com/dhis2/data-visualizer-app/issues/323)) ([2e2803b](https://github.com/dhis2/data-visualizer-app/commit/2e2803b7e26880e97b3ea9cf67b48fe8582900ff))
* vis type imports ([#496](https://github.com/dhis2/data-visualizer-app/issues/496)) ([2a1daaf](https://github.com/dhis2/data-visualizer-app/commit/2a1daaf0fbadfe2dbd7896db6f273e07bb63cc91))


### chore

* **github-actions:** add workflows for lint and publish ([#638](https://github.com/dhis2/data-visualizer-app/issues/638)) ([739bb13](https://github.com/dhis2/data-visualizer-app/commit/739bb132cd4e58505d13fbfda045f9d69f9feed5))


### Features

* add dnd from dimensions to specific position in layout axis ([#575](https://github.com/dhis2/data-visualizer-app/issues/575)) ([7c573b7](https://github.com/dhis2/data-visualizer-app/commit/7c573b7d8e9fced8b97c86f6c8167a424f10ab4d))
* assigned categories DHIS2-7701 ([#539](https://github.com/dhis2/data-visualizer-app/issues/539)) ([636b365](https://github.com/dhis2/data-visualizer-app/commit/636b36597aeff3ad037ffca687d7bfce5473b762))
* drag 'n drop for reordering dimension items in layout ([#519](https://github.com/dhis2/data-visualizer-app/issues/519)) ([efd4acb](https://github.com/dhis2/data-visualizer-app/commit/efd4acbf6d6d3c1a5e19c4aa6e8d7b99417cc308))
* dual axis support ([#239](https://github.com/dhis2/data-visualizer-app/issues/239)) ([a50075c](https://github.com/dhis2/data-visualizer-app/commit/a50075c70540fa5167f4b39dfced7e4a233e0f51))
* multiple orgunit roots support ([#328](https://github.com/dhis2/data-visualizer-app/issues/328)) ([e85668f](https://github.com/dhis2/data-visualizer-app/commit/e85668ff7c24bff00e26b20107211cccd9f73666))
* show most viewed saved AO (DHIS2-7835) ([#547](https://github.com/dhis2/data-visualizer-app/issues/547)) ([97b0622](https://github.com/dhis2/data-visualizer-app/commit/97b06221e606b683d8a36e86bbd30226f05e44c9))
* summarize chart filters that have orgunit levels and/or groups ([#298](https://github.com/dhis2/data-visualizer-app/issues/298)) ([e5e0a7b](https://github.com/dhis2/data-visualizer-app/commit/e5e0a7bba3b718a1d5adf8607a86009e7dc462be))
* use layout rules for add-to-layout ui ([#362](https://github.com/dhis2/data-visualizer-app/issues/362)) ([a3dbb9f](https://github.com/dhis2/data-visualizer-app/commit/a3dbb9fb20356b3aa303155de98e16795dcffaf6))
* use new pivot engine ([#574](https://github.com/dhis2/data-visualizer-app/issues/574)) ([f4ccef1](https://github.com/dhis2/data-visualizer-app/commit/f4ccef104605eb7ae91a87ef57604fdc1664ff3e))
* WIP pivot table type ([#335](https://github.com/dhis2/data-visualizer-app/issues/335)) ([626f447](https://github.com/dhis2/data-visualizer-app/commit/626f447cf99ee47ee76ccf4f8938cc96efb4f641))


### Reverts

* Revert "fix: use lerna to share code instead of copying resources (#214)" (#216) ([de00b4f](https://github.com/dhis2/data-visualizer-app/commit/de00b4fad47369e396ca0c1d43fe5bbf138ed59f)), closes [#214](https://github.com/dhis2/data-visualizer-app/issues/214) [#216](https://github.com/dhis2/data-visualizer-app/issues/216)


### BREAKING CHANGES

* **github-actions:** Ensure that the plugin and app versions are locked to each other.
