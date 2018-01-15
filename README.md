# Ionic Image Loader Benchmark

Legacy branch uses Angular 4.4 and Ionic Image Loader 4.2.1 with Cordova Plugin File Tranfser 1.7.0.

Master branch uses Angular 5 with Ionic Image Loader 4.2.2 (westphalen fork) and XHR2 (Angular HttpClient) instead of the File Transfer plugin.

## What it does  

Loads 50 differently sized photos from the web through Ionic Image Loader, and times the preload action independently and then displaying an average. This indicates how long each photo took to load through the Ionic Image Loader, with the respective backends (xhr2 vs file-transfer plugin).

## Results

Results will vary greatly on the internet connection, so run a few tests to get indicative results.

## How to run

Run the tests on a real device. Use pull-to-refresh as needed.
