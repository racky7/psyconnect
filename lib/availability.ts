import daysjs from "@/lib/dayjs";

export type TimeString = `${number | ""}${number}:${number}${number}`;

export const timeStringToMin = (timeString: TimeString) => {
  const [hourString, minuteString] = timeString.split(":");

  const hours = parseInt(hourString);
  const minutes = parseInt(minuteString);

  return hours * 60 + minutes;
};

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

export const minToDate = (
  minutes: number,
  date: Date | undefined = undefined
) => {
  return daysjs(date).startOf("day").add(minutes, "minutes").toISOString();
};
