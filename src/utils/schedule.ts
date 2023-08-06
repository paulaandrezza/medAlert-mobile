export const getSchedule = (firstSchedule, frequency) => {
  const interval = 24 / frequency;
  let schedule = [];
  for (let i = 0; i < frequency; i++) {
    if (firstSchedule) {
      const time = new Date(
        firstSchedule.getTime() + i * interval * 60 * 60 * 1000
      );
      schedule.push(time);
    }
  }
  return schedule;
};

export const formatTime = (time: Date) => {
  const formatedTime =
    String(time.getHours()).padStart(2, "0") +
    ":" +
    String(time.getMinutes()).padStart(2, "0");
  return formatedTime;
};