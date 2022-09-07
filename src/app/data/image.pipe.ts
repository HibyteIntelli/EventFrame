import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  constructor() {
  }

  async transform(imageData: any): Promise<string> {
    const reader = new FileReader();
    return new Promise((resolve) => {
      reader.onloadend = () => resolve(reader.result as string);
      reader.readAsDataURL(new Blob(imageData.data));
    });
  }

}
