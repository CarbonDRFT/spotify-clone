declare module "use-sound" {
  type PlayFunction = () => void;

  interface SoundControls {
    play: PlayFunction;
    pause: () => void;
    // Add more properties as needed
  }

  // Replace 'any' with the actual type of your options object
  type UseSoundOptions = any;

  export default function useSound(
    url: string,
    options: UseSoundOptions
  ): [PlayFunction, SoundControls];
}
