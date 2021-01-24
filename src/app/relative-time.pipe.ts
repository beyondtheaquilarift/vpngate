import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'relativeTime'
})
export class RelativeTimePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerDay * 365;

    if (value < msPerMinute) {
      return Math.round(value / 1000) + ' 秒前';
    } else if (value < msPerHour) {
      return Math.round(value / msPerMinute) + ' 分钟前';
    } else if (value < msPerDay) {
      return Math.round(value / msPerHour) + ' 小时前';
    } else if (value < msPerMonth) {
      return Math.round(value / msPerDay) + ' 天前';
    } else if (value < msPerYear) {
      return Math.round(value / msPerMonth) + ' 月前';
    } else {
      return Math.round(value / msPerYear) + ' 年前';
    }

  }

}
