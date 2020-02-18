export const getPositions = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  duration: number,
  bounds: any
) => {
  const pos = event.clientX - bounds.left;
  const percentage = pos / bounds.width;
  const seconds = duration * percentage;

  return { pos, seconds };
};
