import React from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Clock } from "lucide-react";

interface TimePickerProps {
  onChange: (time: string) => void;
}

export default function TimePicker({ onChange }: TimePickerProps) {
  const [hora, setHora] = React.useState<string>();
  const [minuto, setMinuto] = React.useState<string>();
  const [ampm, setAmpm] = React.useState<string>();

  const [timeValue, setTimeValue] = React.useState<string>("00:00");

  React.useEffect(() => {
    if (hora) {
      setTimeValue(`${hora}: 00 `);
    }
    if (minuto) {
      setTimeValue(`${hora}:${minuto}`);
    }
    if (ampm) {
      setTimeValue(`${hora}:${minuto} ${ampm}`);
    }
    if (hora && minuto && ampm) {
      const time = `${hora}:${minuto} ${ampm}`;
      set24Hours(time);
      onChange(`${hora}:${minuto} ${ampm}`);
    }
  }, [hora, minuto, ampm, onChange]);

  const set24Hours = (time: string) => {
    
    if (time.includes("PM")) {
      const h = time.split(":")[0];
      console.log(h);        
    }
    console.log(time);
  };
  const hours = Array.from({ length: 12 }, (_, i) => {
    const index = i + 1;
    return index.toString().padStart(2, "0");
  });

  const minutes = Array.from({ length: 60 }, (_, i) =>
    i.toString().padStart(2, "0")
  );
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] justify-start text-left font-normal",
            "text-muted-foreground"
          )}
        >
          <Clock />
          <span>{timeValue ? timeValue : "00:00 AM"}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full h-40 p-0" align="start">
        <div className="flex flex-row overflow-hidden h-36 px-2">
          <ul className="mx-2 overflow-y-auto scrollbar-hidden">
            <li className="text-center">Horas</li>
            {hours.map((h) => (
              <li
                key={h}
                onClick={() => {
                  setHora(h);
                }}
                className="hover:bg-primary-foreground px-2 py-1 rounded cursor-pointer overflow-auto"
              >
                {h}
              </li>
            ))}
          </ul>
          <ul className="mx-2 overflow-y-auto scrollbar-hidden">
            <li className="text-center">Minutos</li>
            {minutes.map((m) => (
              <li
                key={m}
                onClick={() => {
                  setMinuto(m);
                }}
                className="hover:bg-primary-foreground hover:text-current px-2 py-1 rounded cursor-pointer"
              >
                {m}
              </li>
            ))}
          </ul>
          <ul className="mx-2 overflow-hidden">
            <li className="text-center">AM/PM</li>
            <li
              onClick={() => setAmpm("AM")}
              className="hover:bg-primary-foreground  px-2 py-1 rounded cursor-pointer overflow-hidden"
            >
              AM
            </li>
            <li
              onClick={() => setAmpm("PM")}
              className="hover:bg-primary-foreground hover:text-current px-2 py-1 rounded cursor-pointer"
            >
              PM
            </li>
          </ul>
        </div>
      </PopoverContent>
    </Popover>
  );
}
