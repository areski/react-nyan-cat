/**
 * Default CSS definition for typescript,
 * will be overridden with file-specific definitions by rollup
 */
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}
declare module '*.scss';

declare module '*.mp3' {
  const src: string;
  export default src;
}


declare module '*.gif' {
  const src: string;
  export default src;
}
