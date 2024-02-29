# Semester project

## Description
This is our template for the semester project. It contains a basic structure for the project and a few examples of how to use the different parts of the project. You must expand upon the project, refactor when nessasary and make it your own.

## Projectmanagment
We use [Trello](https://trello.com/b/FHCiBdTb/demo) for projectmanagment. You can find the board [here](https://trello.com/b/FHCiBdTb/demo).
Note that you should create your own board for your project.

## Getting started
To get started with the project you need to clone the repository and open it in your favorite IDE. We recommend using VS Code.
Once you have cloned the repository you need to install the dependencies. This is done by running the following command in the terminal:
```
npm install
```
Once the dependencies are installed you can run the project by running the following command in the terminal:
```
node server.js
```
This will start the server and you can now access the project on http://localhost:8080 in your browser.
```
myBoard
├─ .DS_Store
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ ORIG_HEAD
│  ├─ config
│  ├─ description
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  └─ main
│  │     └─ remotes
│  │        └─ origin
│  │           ├─ HEAD
│  │           └─ main
│  ├─ objects
│  │  ├─ 00
│  │  │  └─ 7d2f0428ed969a54e9f81c40b2883c1f44cde2
│  │  ├─ 03
│  │  │  └─ 353a4185cd2c366e52b8b88c017f651bb00488
│  │  ├─ 0a
│  │  │  └─ 37427ecc17c2e12ac5d237bdf041c5c80898c1
│  │  ├─ 0e
│  │  │  └─ e91c9f38ca1b03db4d925d864ef1f37783baa0
│  │  ├─ 17
│  │  │  └─ 1ba52a2832ecac46a19b7fdef06b9fe1026fc4
│  │  ├─ 1b
│  │  │  ├─ 9786c694a58735f91a316e22a6d43ff9ef400e
│  │  │  └─ e8318f67ad89851292adabd3ca6db1e7104f9c
│  │  ├─ 1d
│  │  │  └─ a4b390bee83f2c257b1734fc1fa764a25fc5c7
│  │  ├─ 1f
│  │  │  └─ b31709353263d7adbe73d82ac2028584deb509
│  │  ├─ 25
│  │  │  └─ 25b1a151d2ac565d63e802c4a4286d920f73e9
│  │  ├─ 2c
│  │  │  └─ efd8471d8e478887e897ea50834f5ce7245330
│  │  ├─ 31
│  │  │  ├─ 87e0ac00d342a9eaece8a371bdfbf8cd62408c
│  │  │  └─ 991208107eb8d77dcd85931cbd38621ef5a6bf
│  │  ├─ 37
│  │  │  └─ 4ee84bf3921980b897b2fbbd4caf9656998ecc
│  │  ├─ 38
│  │  │  └─ 073ea2893507824920207a9e0c7ed107627954
│  │  ├─ 3a
│  │  │  └─ 7ab5495ed84ec780f4da2a8f89d614fd36becb
│  │  ├─ 3e
│  │  │  ├─ 61db71f06b76d4c8a6ad60e9741c752e2f6898
│  │  │  └─ f5b590492f85d83c9e7e6acdbba4abac106c7e
│  │  ├─ 3f
│  │  │  └─ 07de9988ad507decdd83b25391ddc7a395e715
│  │  ├─ 40
│  │  │  └─ fb8212932e03d4f7f601eb2cf8f2484f61704b
│  │  ├─ 46
│  │  │  └─ f2f74ada2b181189ccf7050031c21dfcb9f0af
│  │  ├─ 49
│  │  │  └─ 7d6dd78a33ffadfdacdbc81a9b09b74d887ed3
│  │  ├─ 4b
│  │  │  └─ 5b3b614e0d3b2f9ec295a11ca3bf7c3ddd4d97
│  │  ├─ 4d
│  │  │  └─ cc6b5336556ef2dc20fd522ca44b1c3cb5b53d
│  │  ├─ 50
│  │  │  └─ 08ddfcf53c02e82d7eee2e57c38e5672ef89f6
│  │  ├─ 54
│  │  │  └─ f38f1ef17f776e5f4ce26e1573291d0c132665
│  │  ├─ 55
│  │  │  └─ fdb27e686b248d8e023c72f4b1ea9879990b43
│  │  ├─ 58
│  │  │  └─ 20e6743e400343011c15655d3b3e0042f4ba04
│  │  ├─ 5a
│  │  │  └─ 8ef0577035a86c2544abdbf3b5b47aa7496a71
│  │  ├─ 5d
│  │  │  └─ b0d371a13f4d0d7ff4753e7ccef34def9bd32f
│  │  ├─ 60
│  │  │  └─ f821b8c9026ce70b20dbd50007a3cb45fe0eb4
│  │  ├─ 68
│  │  │  └─ 04b034fb770b62802f89d6ab03cd31264aa799
│  │  ├─ 70
│  │  │  └─ 7e1c61dc2ba618af4a28a8154d20e5b9bdfd9f
│  │  ├─ 73
│  │  │  └─ 20eb28d482826e7fcdbbc6591751a124186638
│  │  ├─ 75
│  │  │  └─ 8639ad357bbd3c609c3bfe372310577af0a4e1
│  │  ├─ 78
│  │  │  └─ f3c21a4480a896d57236bab0a53b867cb4e011
│  │  ├─ 79
│  │  │  └─ 2a0e3906e545ff6be55c04b8567238e05ca620
│  │  ├─ 7d
│  │  │  ├─ 111cad4a4ea3a3dd0d3421af77f2bfd485f4cf
│  │  │  └─ bbb8c6aec91abd3d85cef67c40b2eeda98b4c8
│  │  ├─ 7f
│  │  │  └─ e530307fe9af18941e46a76a1520f74fc0a520
│  │  ├─ 80
│  │  │  └─ 4ba4ef4295a48305b9d6612ba0a59095eec382
│  │  ├─ 81
│  │  │  └─ 8fac96f3db4a4e68fa678dea6ba1ff31e39b46
│  │  ├─ 83
│  │  │  └─ 0eab16ade8f33a05331679e1f36162b468641e
│  │  ├─ 89
│  │  │  └─ f8cf002ee1c65f3ac5bf9fbd14d31d880707af
│  │  ├─ 8d
│  │  │  └─ 66008c37b77bc8f0a8450883bc65ebc7327317
│  │  ├─ 92
│  │  │  └─ 78b1e77e180f3f5a73ee85975996648d15943c
│  │  ├─ 98
│  │  │  ├─ 67c0aefcf61242cfdc663b038d4f595b956fe6
│  │  │  └─ 6f516f142026bdfdf39a62eb7e211c8fd15631
│  │  ├─ 9e
│  │  │  └─ 259a23595ca9b0d1bb538d11f6e2352b79fe18
│  │  ├─ a1
│  │  │  └─ 12ad0d3d34f54325af9308044e574c5f827da4
│  │  ├─ a4
│  │  │  └─ 2ea3da3b1cbe5f52e2c028152545a4c4dc2ce5
│  │  ├─ a5
│  │  │  └─ 2a8d818801e6b7db891b69d0c3d1e8316ae809
│  │  ├─ a6
│  │  │  └─ add1cbbaafca95a1b74fd285c65506659c3f3b
│  │  ├─ ad
│  │  │  └─ 71cb766dac6067cb10527e6c2af06869780830
│  │  ├─ b0
│  │  │  └─ 5d937cc030062f3e8b92e436680db8e7d6681a
│  │  ├─ b9
│  │  │  └─ 3018e8a52d87af89e54525252e207e45d95678
│  │  ├─ bb
│  │  │  ├─ 0a2c3ae6aa0075735cb9228345a6dea16a4676
│  │  │  └─ 27bbbb107a0e3060896643c072e50c49fbc379
│  │  ├─ bc
│  │  │  └─ a7f4b5f50fd7093884a3569cb760f1064f478e
│  │  ├─ be
│  │  │  ├─ 727c60e73d4022b81260ccc3b46bd7d7f4ab18
│  │  │  ├─ df1e3cff99bcf3d9d30ac0d6bad0b5d2853bbe
│  │  │  └─ e602e03f199574ec2453931129dc5df51cbb18
│  │  ├─ bf
│  │  │  └─ fd7ac3721d9373caaf245ea275c650b3d2cbb6
│  │  ├─ c4
│  │  │  └─ 3673f0387462c345ed48bb6224857124d84084
│  │  ├─ c5
│  │  │  ├─ 504b9557555ba79134cb6e292b485187f8b04e
│  │  │  └─ c1125e27f1e92240dd0fc54848c51fb535dcb5
│  │  ├─ ca
│  │  │  └─ 442d0d387728450fc0d3c684358856160ab899
│  │  ├─ cc
│  │  │  └─ e3db3bb0aa4fed5813e58582a0b73a5fae01cd
│  │  ├─ cd
│  │  │  ├─ 576501bebe92bbede7b301c167925147168830
│  │  │  └─ eea507bce8acec554cb376ffcb27f3e40292fe
│  │  ├─ d7
│  │  │  └─ 0e04b5223acca0902672fc9fa8368d516f3e31
│  │  ├─ d8
│  │  │  └─ a6c3be57b7005df13b69a7109a2a071e62ec91
│  │  ├─ e1
│  │  │  └─ ee4b4db2c0271ea054dc5278a038ec488ee03c
│  │  ├─ e2
│  │  │  └─ aff6274df855d5774001a315dde8b89598dc45
│  │  ├─ f3
│  │  │  └─ 17786920b055c2e4100ce61adba2d02a93d73f
│  │  ├─ f5
│  │  │  └─ 1a4ecfd8220708768cca985f5fd1287194a5f3
│  │  ├─ f6
│  │  │  └─ 5774e59b749419b6a8ba8a8e5d9bcf91b16f6b
│  │  ├─ fb
│  │  │  └─ a9e7a5dea46bbe9007c09694ff01b18ff1da82
│  │  ├─ fc
│  │  │  └─ 5c731ba4303bdf517cb6ae9edb9eae6e46b16d
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-d924ae5760a7a83cc2e25db37dd016a745eea758.idx
│  │     └─ pack-d924ae5760a7a83cc2e25db37dd016a745eea758.pack
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     ├─ HEAD
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ log.txt
├─ modules
│  ├─ SuperLogger.mjs
│  ├─ app.mjs
│  ├─ db.mjs
│  ├─ httpConstants.mjs
│  ├─ login.mjs
│  ├─ register.mjs
│  └─ user.mjs
├─ package-lock.json
├─ package.json
├─ public
│  ├─ index.html
│  ├─ login.html
│  ├─ login_register.css
│  ├─ my_board.js
│  ├─ my_board_style.css
│  ├─ register.html
│  └─ register.js
├─ readme.md
├─ routes
│  └─ usersRoute.mjs
├─ server.mjs
└─ views
   ├─ dashboard.ejs
   ├─ login.ejs
   └─ register.ejs

```
```
myBoard
├─ .DS_Store
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ ORIG_HEAD
│  ├─ config
│  ├─ description
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  └─ main
│  │     └─ remotes
│  │        └─ origin
│  │           ├─ HEAD
│  │           └─ main
│  ├─ objects
│  │  ├─ 00
│  │  │  └─ 7d2f0428ed969a54e9f81c40b2883c1f44cde2
│  │  ├─ 03
│  │  │  └─ 353a4185cd2c366e52b8b88c017f651bb00488
│  │  ├─ 0a
│  │  │  └─ 37427ecc17c2e12ac5d237bdf041c5c80898c1
│  │  ├─ 0e
│  │  │  └─ e91c9f38ca1b03db4d925d864ef1f37783baa0
│  │  ├─ 17
│  │  │  └─ 1ba52a2832ecac46a19b7fdef06b9fe1026fc4
│  │  ├─ 1b
│  │  │  ├─ 9786c694a58735f91a316e22a6d43ff9ef400e
│  │  │  └─ e8318f67ad89851292adabd3ca6db1e7104f9c
│  │  ├─ 1d
│  │  │  └─ a4b390bee83f2c257b1734fc1fa764a25fc5c7
│  │  ├─ 1f
│  │  │  └─ b31709353263d7adbe73d82ac2028584deb509
│  │  ├─ 25
│  │  │  └─ 25b1a151d2ac565d63e802c4a4286d920f73e9
│  │  ├─ 2c
│  │  │  └─ efd8471d8e478887e897ea50834f5ce7245330
│  │  ├─ 31
│  │  │  ├─ 87e0ac00d342a9eaece8a371bdfbf8cd62408c
│  │  │  └─ 991208107eb8d77dcd85931cbd38621ef5a6bf
│  │  ├─ 37
│  │  │  └─ 4ee84bf3921980b897b2fbbd4caf9656998ecc
│  │  ├─ 38
│  │  │  └─ 073ea2893507824920207a9e0c7ed107627954
│  │  ├─ 3a
│  │  │  └─ 7ab5495ed84ec780f4da2a8f89d614fd36becb
│  │  ├─ 3e
│  │  │  ├─ 61db71f06b76d4c8a6ad60e9741c752e2f6898
│  │  │  └─ f5b590492f85d83c9e7e6acdbba4abac106c7e
│  │  ├─ 3f
│  │  │  └─ 07de9988ad507decdd83b25391ddc7a395e715
│  │  ├─ 40
│  │  │  └─ fb8212932e03d4f7f601eb2cf8f2484f61704b
│  │  ├─ 46
│  │  │  └─ f2f74ada2b181189ccf7050031c21dfcb9f0af
│  │  ├─ 49
│  │  │  └─ 7d6dd78a33ffadfdacdbc81a9b09b74d887ed3
│  │  ├─ 4b
│  │  │  └─ 5b3b614e0d3b2f9ec295a11ca3bf7c3ddd4d97
│  │  ├─ 4d
│  │  │  └─ cc6b5336556ef2dc20fd522ca44b1c3cb5b53d
│  │  ├─ 50
│  │  │  └─ 08ddfcf53c02e82d7eee2e57c38e5672ef89f6
│  │  ├─ 54
│  │  │  └─ f38f1ef17f776e5f4ce26e1573291d0c132665
│  │  ├─ 55
│  │  │  └─ fdb27e686b248d8e023c72f4b1ea9879990b43
│  │  ├─ 58
│  │  │  └─ 20e6743e400343011c15655d3b3e0042f4ba04
│  │  ├─ 5a
│  │  │  └─ 8ef0577035a86c2544abdbf3b5b47aa7496a71
│  │  ├─ 5d
│  │  │  └─ b0d371a13f4d0d7ff4753e7ccef34def9bd32f
│  │  ├─ 60
│  │  │  └─ f821b8c9026ce70b20dbd50007a3cb45fe0eb4
│  │  ├─ 68
│  │  │  └─ 04b034fb770b62802f89d6ab03cd31264aa799
│  │  ├─ 70
│  │  │  └─ 7e1c61dc2ba618af4a28a8154d20e5b9bdfd9f
│  │  ├─ 73
│  │  │  └─ 20eb28d482826e7fcdbbc6591751a124186638
│  │  ├─ 75
│  │  │  └─ 8639ad357bbd3c609c3bfe372310577af0a4e1
│  │  ├─ 78
│  │  │  └─ f3c21a4480a896d57236bab0a53b867cb4e011
│  │  ├─ 79
│  │  │  └─ 2a0e3906e545ff6be55c04b8567238e05ca620
│  │  ├─ 7d
│  │  │  ├─ 111cad4a4ea3a3dd0d3421af77f2bfd485f4cf
│  │  │  └─ bbb8c6aec91abd3d85cef67c40b2eeda98b4c8
│  │  ├─ 7f
│  │  │  └─ e530307fe9af18941e46a76a1520f74fc0a520
│  │  ├─ 80
│  │  │  └─ 4ba4ef4295a48305b9d6612ba0a59095eec382
│  │  ├─ 81
│  │  │  └─ 8fac96f3db4a4e68fa678dea6ba1ff31e39b46
│  │  ├─ 83
│  │  │  └─ 0eab16ade8f33a05331679e1f36162b468641e
│  │  ├─ 89
│  │  │  └─ f8cf002ee1c65f3ac5bf9fbd14d31d880707af
│  │  ├─ 8d
│  │  │  └─ 66008c37b77bc8f0a8450883bc65ebc7327317
│  │  ├─ 92
│  │  │  └─ 78b1e77e180f3f5a73ee85975996648d15943c
│  │  ├─ 98
│  │  │  ├─ 67c0aefcf61242cfdc663b038d4f595b956fe6
│  │  │  └─ 6f516f142026bdfdf39a62eb7e211c8fd15631
│  │  ├─ 9e
│  │  │  └─ 259a23595ca9b0d1bb538d11f6e2352b79fe18
│  │  ├─ a1
│  │  │  └─ 12ad0d3d34f54325af9308044e574c5f827da4
│  │  ├─ a4
│  │  │  └─ 2ea3da3b1cbe5f52e2c028152545a4c4dc2ce5
│  │  ├─ a5
│  │  │  └─ 2a8d818801e6b7db891b69d0c3d1e8316ae809
│  │  ├─ a6
│  │  │  └─ add1cbbaafca95a1b74fd285c65506659c3f3b
│  │  ├─ ad
│  │  │  └─ 71cb766dac6067cb10527e6c2af06869780830
│  │  ├─ b0
│  │  │  └─ 5d937cc030062f3e8b92e436680db8e7d6681a
│  │  ├─ b9
│  │  │  └─ 3018e8a52d87af89e54525252e207e45d95678
│  │  ├─ bb
│  │  │  ├─ 0a2c3ae6aa0075735cb9228345a6dea16a4676
│  │  │  └─ 27bbbb107a0e3060896643c072e50c49fbc379
│  │  ├─ bc
│  │  │  └─ a7f4b5f50fd7093884a3569cb760f1064f478e
│  │  ├─ be
│  │  │  ├─ 727c60e73d4022b81260ccc3b46bd7d7f4ab18
│  │  │  ├─ df1e3cff99bcf3d9d30ac0d6bad0b5d2853bbe
│  │  │  └─ e602e03f199574ec2453931129dc5df51cbb18
│  │  ├─ bf
│  │  │  └─ fd7ac3721d9373caaf245ea275c650b3d2cbb6
│  │  ├─ c4
│  │  │  └─ 3673f0387462c345ed48bb6224857124d84084
│  │  ├─ c5
│  │  │  ├─ 504b9557555ba79134cb6e292b485187f8b04e
│  │  │  └─ c1125e27f1e92240dd0fc54848c51fb535dcb5
│  │  ├─ ca
│  │  │  └─ 442d0d387728450fc0d3c684358856160ab899
│  │  ├─ cc
│  │  │  └─ e3db3bb0aa4fed5813e58582a0b73a5fae01cd
│  │  ├─ cd
│  │  │  ├─ 576501bebe92bbede7b301c167925147168830
│  │  │  └─ eea507bce8acec554cb376ffcb27f3e40292fe
│  │  ├─ d7
│  │  │  └─ 0e04b5223acca0902672fc9fa8368d516f3e31
│  │  ├─ d8
│  │  │  └─ a6c3be57b7005df13b69a7109a2a071e62ec91
│  │  ├─ e1
│  │  │  └─ ee4b4db2c0271ea054dc5278a038ec488ee03c
│  │  ├─ e2
│  │  │  └─ aff6274df855d5774001a315dde8b89598dc45
│  │  ├─ f3
│  │  │  └─ 17786920b055c2e4100ce61adba2d02a93d73f
│  │  ├─ f5
│  │  │  └─ 1a4ecfd8220708768cca985f5fd1287194a5f3
│  │  ├─ f6
│  │  │  └─ 5774e59b749419b6a8ba8a8e5d9bcf91b16f6b
│  │  ├─ fb
│  │  │  └─ a9e7a5dea46bbe9007c09694ff01b18ff1da82
│  │  ├─ fc
│  │  │  └─ 5c731ba4303bdf517cb6ae9edb9eae6e46b16d
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-d924ae5760a7a83cc2e25db37dd016a745eea758.idx
│  │     └─ pack-d924ae5760a7a83cc2e25db37dd016a745eea758.pack
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     ├─ HEAD
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ log.txt
├─ modules
│  ├─ SuperLogger.mjs
│  ├─ app.mjs
│  ├─ db.mjs
│  ├─ httpConstants.mjs
│  ├─ login.mjs
│  ├─ register.mjs
│  └─ user.mjs
├─ package-lock.json
├─ package.json
├─ public
│  ├─ index.html
│  ├─ login.html
│  ├─ login_register.css
│  ├─ my_board.js
│  ├─ my_board_style.css
│  ├─ register.html
│  └─ register.js
├─ readme.md
├─ routes
│  └─ usersRoute.mjs
├─ server.mjs
└─ views
   ├─ dashboard.ejs
   ├─ login.ejs
   └─ register.ejs

```