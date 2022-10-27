import { ReactElement } from "react";

export interface WeekDayPanelProps {
  weekday: string;
  temperature: string;
  icon: ReactElement;
  border?: boolean;
}
