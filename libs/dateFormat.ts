import { format } from "date-fns";

export default function dateFormat(date: Date | null): string | null {
  if (!date) return null;

  return format(date, "yyyy-MM-dd HH:mm:ss");
}
