export const formatSeconds = (duration: number) => {
  const minutes = duration / 60;
  const residue = Math.floor(duration % 60);
  const seconds = residue > 0 ? `${residue < 10 ? '0' : ''}${residue}` : '00';
  return `${Math.floor(minutes)}:${seconds}`;
};
