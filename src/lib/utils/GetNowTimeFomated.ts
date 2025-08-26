export function getNowFormatted(): string {
  const now: Date = new Date();

  const year: number = now.getFullYear();
  const month: string = String(now.getMonth() + 1).padStart(2, "0");
  const day: string = String(now.getDate()).padStart(2, "0");
  const hour: string = String(now.getHours()).padStart(2, "0");
  const minute: string = String(now.getMinutes()).padStart(2, "0");
  const second: string = String(now.getSeconds()).padStart(2, "0");

  const milliseconds: string = String(now.getMilliseconds()).padStart(3, "0");
  const microseconds: string = milliseconds + "000";

  return `${year}-${month}-${day} ${hour}:${minute}:${second}.${microseconds}`;
}
