export interface SearchEngineTypes {
    id: string;
    gallery: string;
    src: string;
    srcSmall: string;
    prompt: string;
    width: number;
    height: number;
    seed: string;
    grid: boolean;
    model: Model;
    guidance: number;
    promptid: string;
    nsfw: boolean;
  }
  
  export enum Model {
    StableDiffusion = "stable-diffusion",
  }
  


  