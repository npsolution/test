## Changes from 0.6.7 to 0.6.8

* Fix probing RTSP sources

## Changes from 0.6.6 to 0.6.7

* Fix error checking after probing (#200)
* Fix restarting without SSL option set
* Upgrade ffmpeg to version 4.3.1
* Upgrade various node dependencies
* Add RS_OUTPUTSTREAM (#195) (thanks to @jairbj)
* Bind to IPv6 addresses (#198, #201) (thanks to @database64128) 

## Changes from 0.6.5 to 0.6.6

* Fix hanging ffprobe (#180) (thanks to Scott Robinson @scottgrobinson)
* Fix node.js dependencies

## Changes from 0.6.4 to 0.6.5

* Upgrade base Docker image to Debian "buster" 10.4
* Upgrade node.js to 12.16.3
* Upgrade nginx to 1.18.0
* Upgrade arm32v6 Dockerfile (thanks to @rossbachp)
* Add audio channels, layout, and sampling environment variables for RaspiCam and USB cameras
* Add automatic HTTPS support with Docker Compose (pull request #161, thanks to @wdalmijn)

## Changes from 0.6.3 to 0.6.4

* Fix compatibility of stream from USB camera

## Changes from 0.6.2 to 0.6.3

* Fix timeout for RTSP streams

## Changes from 0.6.1 to 0.6.2

* Fix audio stream mappings
* Fix audio "auto" setting

## Changes from 0.6.0 to 0.6.1

* Fix occasional reset of configuration
* Fix pushing to external HLS server

## Changes from 0.5.0 to 0.6.0

* Upgrade base Docker image to Debian "buster"
* Upgrade node.js to 12.14.1 (LTS)
* Upgrade nginx to 1.16.1
* Upgrade x264 to stable branch
* Optimize ffmpeg commands
* Add locale sl_SI (Slovenian) to UI
* Add support for pushing the stream to an external HLS server

## Changes from 0.4.0 to 0.5.0

* Upgrade ffmpeg to 4.1.5
* Upgrade node.js dependencies
* Add locales fr_FR, it_IT, pt_PT
* Customize player

## Changes from 0.3.0 to 0.4.0

* Allow audio for raspicam from alsa audio device
* Optionally (re-)encode the source stream to H.264
* Handle multi-bitrate source streams
* Add Twitch streaming guide
* Introduce RS_INPUTSTREAM environment variable

## Changes from 0.2.0 to 0.3.0

* Use relative paths for loading all assets in the GUI
* Update FFmpeg to 4.1.3
* Update NGINX to 1.14.2
* Update node.js to 10.15.3
* Update nasm to 2.14.02

## Changes from 0.1.3 to 0.2.0

* Add HTTPS support
  https://datarhei.github.io/restreamer/docs/guides-https.html

## Changes from 0.1.2 to 0.1.3

* Add stats switch to embeddable player
* Remove bower and add dist files of required JS libraries
* Add mute switch to the embeddable player
* Add Slovenian translation (thanks to Sebastjan)

## Changes from 0.1.1 to 0.1.2

* Improve stale stream check
* Add Polish translations (thanks to Emil)
* Add sample docker-compose.yml

## Changes from 0.1.0 to 0.1.1

* Fix respecting the deprecated environment variables RESTREAMER_USERNAME and RESTREAMER_PASSWORD
* Fix links to Github pages
* Fix snapshot drift
* Fix initialization of environment variables
* Minor fixes in logging output
* Improve RS_AUDIO setting handling
* Rename misleading armhf Dockerfile to arm32v7
* Add Dockerfile for arm32v6

## Changes from 0.1.0-rc7 to 0.1.0

* Update FFmpeg to 4.1
* Update NGINX to 1.14.1
* Update NGINXRTMP module to 1.2.1
* Update node.js to 10.13.0
* Update NPM packages
* Fix detection of public IP
* Disable FFmpeg error detection for a VLC-like behaviour
* Add optional RTMP (RS_TOKEN environment variable) token authentification
* Add health check to NGINX
* Allow HTTP/HTTPS (HLS) and RTMPT/RTMPS addresses as video source
* Add optional autostart for the player
* Add Spanish translation for the GUI
* Add aarch64/arm64v8 Dockerfile
* Reduce docker image size
* Fix snapshot interval parsing
* Allow to disable snapshot
* Remove stream connection retry limits
* Add stale stream detection with automatic restart
* Add RS_DEBUG environment variable to store debug output to /debug
* Add RS_AUDIO environment variable to control audio processing
* Redesign logging output and logging messages
* Rename environment variables (old environment variables are still supported but will be deprecated in the future)
  * RS_NODE_PORT to RS_NODEJS_PORT
  * RS_NODE_ENV to RS_NODEJS_ENV
  * RS_LOGGER_LEVEL to RS_LOGLEVEL
  * MODE to RS_MDOE
  * RS_SNAPSHOT_REFRESH_INTERVAL to RS_SNAPSHOT_INTERVAL
* Add options to control Raspberry Pi cameras (RS_MODE=RASPICAM)
* Add options to control USB cameras (RS_MODE=USBCAM)

## Changes from 0.1.0-rc7 to 0.1.0-rc.7.1

* fixed Kitematic auth failure

## Changes from 0.1.0-RC6.1 to 0.1.0-rc.7

* security improvements
* FFmpeg and NGINX optimizations
* fixed update check
* added semantic versioning 
* several small bugfixes and improvements
* updated dependencies
* added Aarch64 Docker image and reduced Docker layers

## Changes from 0.1.0-RC6 to 0.1.0-RC6.1

* fixed external streaming with RTSP over TCP input option

## Changes from 0.1.0-RC5 to 0.1.0-RC6

* updated NPM/Bower packages
* updated FFmpeg to 2.8.6
* switched to a NGINX-RTMP fork of [Sergey Dryabzhinsky](https://github.com/sergey-dryabzhinsky/nginx-rtmp-module)
* added ECMA6 development mode (RS_NODE_ENV=dev) and updated NodeJS to 5.7
* refactored frontend structure
* finished ECMA6 frontend remodeling
* started backend refactoring
* optimized fake audio process (resolved NGINX error "hls: force fragment split")
* added FFmpeg patch of [Andrew Shulgin](https://github.com/andrew-shulgin) (Ignore invalid sprop-parameter-sets missing PPS)
* renamed environment variables (old environment variables are still supported but will be deprecated in the future)
  * RS_NODE_PORT
  * RS_NODE_ENV
  * RS_LOGGER_LEVEL
  * RS_TIMEZONE
  * RS_SNAPSHOT_REFRESH_INTERVAL
  * RS_CREATE_HEAPDUMPS
  * RS_USERNAME
  * RS_PASSWORD
* several small bugfixes and improvements 

#### Team enlargement

* [Andrew Shulgin](https://github.com/andrew-shulgin) - Many thanks for your support and welcome to our team!

## Changes from 0.1.0-RC4.1 to 0.1.0-RC5

* updated NPM packages, NGINX to 1.9.9 and FFmpeg to 2.8.5
* restructed frontend (WebsocketService, more ECMA6, ServiceFactory, logger as Angular-Service)
* cleanup NPM dep.
* expanded ESLint ruleset and first code optimizations
* added NGINX process monitoring
* cleanup JSONDB
* implemented input-field validation for RTSP/RTMP addresses

## Changes from 0.1.0-RC4 to 0.1.0-RC4.1

* added missing config of v0.1.0-RC4

## Changes from 0.1.0-RC3 to 0.1.0-RC4

* added https sources to Dockerfiles (thx @ [nodiscc](https://github.com/nodiscc))
* fixed visualisation problem of new RTMP/RTSP endpoint (JSONDB processing)
* optimized input-process (removed generateOutputRTMPPath)
* cleaned up NPM packages
* added ESLint insteed of JSHint+ first ruleset
* first code optimizations (ecma5 -> ecma6)
* optimized RaspiCam-Hack for Raspberry Pi 1
* updated NPM packages and node
* refactored FFmpeg-Fluent integration by own fork (reduces process-output)
* fixed output-process (generated high CPU load on arm)
* fixed preview player (no play-icon, didn't stop when the modalbox is closed)

##### Merged pull requests:

* Fixed ARM typo @ [Vyacheslav Shevchenko](https://github.com/bliz937)

## Changes from 0.1.0-RC2 to 0.1.0-RC3

* fixed links to docs
* updated NPM & Bower dependencies

## Changes from 0.1.0-RC1 to 0.1.0-RC2

* use branch FIX_stderr-variable_of_infinite_growth
* more jshint stylecheck rules and fix problems
* renamed ReStreamer to Restreamer
* refactored docs and wiki
