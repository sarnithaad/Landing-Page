// types/aos.d.ts
declare module 'aos' {
  const AOS: {
    init: (options?: any) => void;
    refresh: () => void;
    refreshHard: () => void;
  };
  export default AOS;
}
