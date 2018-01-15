import { Component } from '@angular/core';
import { ImageLoader } from 'ionic-image-loader';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public photos: Array<{
    benchmark: number;
    original: string;
    local: string;
  }> = [];

  public totalBenchmark: number = null;

  constructor(private imageLoader: ImageLoader) { }

  // noinspection JSUnusedGlobalSymbols
  ionViewWillEnter() {
    this.clearAndRetry();
  }

  public averageBenchmark(): number {
    let sum = 0;
    let photos = this.photos.filter((photo) => photo.benchmark !== null);
    if (photos.length === 0) {
      return null;
    }

    photos.forEach((photo) => sum += photo.benchmark);

    return sum / photos.length;
  }

  public clearAndRetry(refresher?): Promise<any> {
    this.photos = [];
    this.totalBenchmark = null;
    this.imageLoader.clearCache();

    return new Promise<any>(() => {
      const photos = 50;
      const beginAll = performance.now();
      let promises: Promise<any>[] = [];
      for (let i = 0; i < photos; i++) {
        const begin = performance.now();
        const src = 'https://picsum.photos/512/512?' + begin;
        const index = this.photos.push({
          benchmark: null,
          original: src,
          local: null,
        }) - 1;
        promises.push(this.imageLoader.preload(src).then((path: string) => {
          const finish = performance.now();
          this.photos[index].benchmark = finish - begin;
          this.photos[index].local = path;
        }));
      }

      return Promise.all(promises).then(() => {
        const finishAll = performance.now();
        this.totalBenchmark = finishAll - beginAll;
        if (refresher) {
          refresher.complete();
        }
      });
    });
  }

}
