import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "hashLink", pure: false })
export class HashLinkPipe implements PipeTransform {
  constructor() {}

  transform(content, type: string = 'txn') {
    let url = `/chain/${type}/${content}`;

    return content === undefined
      ? "¯\\_(ツ)_/¯"
      : `<a class="lthn-brand" href="${url}">${this.cutMiddle(content, 16)}</a>`;
  }

  private cutMiddle(string, maxLength) {
    if (!string) return string;
    if (maxLength < 1) return string;
    if (string.length <= maxLength) return string;
    if (maxLength === 1) return string.substring(0, 1) + "...";

    const midpoint = Math.ceil(string.length / 2);
    const toremove = string.length - maxLength;
    const lstrip = Math.ceil(toremove / 2);
    const rstrip = toremove - lstrip;
    return `${string.substring(0, midpoint - lstrip)}...${string.substring(midpoint + rstrip)}`;
  }
}
