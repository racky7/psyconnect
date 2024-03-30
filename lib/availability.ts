export type TimeString = `${number | ""}${number}:${number}${number}`;

export const getTimeOptions = (
  timeString: TimeString = "00:00"
): TimeString[] => {
  const [hourString, minuteString] = timeString.split(":");

  const hours = parseInt(hourString);
  const minutes = parseInt(minuteString);

  const arr: TimeString[] = [];
  for (let i = hours; i < 24; i += 1) {
    for (let j = 0; j < 2; j += 1) {
      arr.push(`${i}:${j === 0 ? "00" : 30 * j}` as TimeString);
    }
  }

  arr.splice(0, Math.floor(minutes / 30) + 1);

  return arr;
};
