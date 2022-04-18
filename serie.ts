


export class Serie {
  number: number;
  name: string;
  channel: string;
  seasons: number;
  description: string;
  link: string;
  photo: string;
  
  constructor(number:number, name:string,channel:string ,seasons:number, description:string,link:string, photo:string) {
      this.name = name;
      this.seasons = seasons;
      this.description = description;
      this.photo = photo;
      this.number = number;
      this.channel = channel;
      this.link = link;
  }
  
}


