declare module "*.js" {
  const content: any;
  export default content;
  export const startGame: (canvas: HTMLCanvasElement) => void;
  export const applyClass: (id: string) => void;
}
