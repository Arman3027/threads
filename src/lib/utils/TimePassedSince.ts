"use client";
export function TimePassedSince(timestamp: string): string {
  const pastDate = new Date(timestamp);
  const now = new Date();
  const diffMs = now.getTime() - pastDate.getTime();

  if (diffMs < 0) return "Date is in the future";

  const seconds = Math.floor(diffMs / 1000);
  if (seconds < 60) return `${seconds}s`;

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h`;

  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d`;

  const months = Math.floor(days / 30);
  if (months < 12) return `${months}M`;

  const years = Math.floor(months / 12);
  return `${years}y`;
}
