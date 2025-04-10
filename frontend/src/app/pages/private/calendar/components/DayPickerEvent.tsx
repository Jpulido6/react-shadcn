"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { es } from "date-fns/locale";
import TimePicker from "./TimePicker";

interface DatePickerProps {
  label: string;
  date: Date;
  hours: (time: string) => void;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

export function DatePicker({ label, date, setDate, hours }: DatePickerProps) {
  // const [selected, setSelected] = React.useState<Date>();
  const [horaSelected, setHoraSelected] = React.useState<string>();

  React.useEffect(() => {
    if (horaSelected) {
      // const [hora, minuto] = horaSelected
      //   .split(":")
      //   .map((str) => parseInt(str, 10));
      // const newDate = setHours(setMinutes(date, Number(minuto)), Number(hora));
      // setSelected(newDate);
      hours(horaSelected);
    }
  }, [horaSelected, date, hours]);
  const onChangeHoraSelected = (time: string) => {
    setHoraSelected(time);
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon />
          {date ? format(date, "PPP", { locale: es }) : <span>{label}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-auto h-72 scrollbar-hidden overflow-y-auto space-y-2 p-2"
        align="start"
      >
        <TimePicker onChange={onChangeHoraSelected} />
        <div className="rounded-md border">
          <Calendar
            locale={es}
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
