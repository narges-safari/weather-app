import { ReactElement } from "react";

export interface WeekDayPanelProps {
  weekday: string;
  temperature: number;
  icon: ReactElement;
  border?: boolean;
}
