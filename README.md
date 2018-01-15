# Ionic Image Loader Benchmark

Legacy branch uses Angular 4.4 and Ionic Image Loader 4.2.1 with Cordova Plugin File Tranfser 1.7.0.

Master branch uses Angular 5 with Ionic Image Loader 4.2.2 (westphalen fork) and XHR2 (Angular HttpClient) instead of the File Transfer plugin.

## What it does  

Loads 50 differently sized photos from the web through Ionic Image Loader, and times the preload action independently and then displaying an average. This indicates how long each photo took to load through the Ionic Image Loader, with the respective backends (xhr2 vs file-transfer plugin).

## Results

Results will vary greatly on the internet connection, so run a few tests to get indicative results.

My results were (rounded to nearest 500 ms):

* legacy (file-transfer plugin)
    * Average load time: 7400 ms
        * 7000 ms
        * 7000 ms
        * 7000 ms
        * 9000 ms
        * 7000 ms
    * Total load time: 14200 ms
        * 12500 ms
        * 14500 ms
        * 13000 ms
        * 17000 ms
        * 14000 ms 
    
* master (xhr2 HttpClient) 
    * Average load time: 17300 ms
        * 12000 ms
        * 20000 ms
        * 21000 ms
        * 19500 ms
        * 14000 ms
    * Total load time: 33000 ms
        * 24500 ms
        * 39500 ms
        * 37500 ms
        * 37500 ms
        * 26000 ms


## How to run

Run the tests on a real device. Use pull-to-refresh as needed.
