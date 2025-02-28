import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { DialogComponent } from "@/components/dialog/Dialog";
import { useCalendar } from "../view-model/useCalendar";
import "./calendar.css";
import EventForm from "../components/EventForm";

export default function Calendario() {
  const { localizer, messages, formats, events } = useCalendar();

  return (
    <div className="flex flex-col gap-4 w-full h-[80vh]">
      <h1 className="text-center text-2xl font-bold">Calendario</h1>
      <div className="flex gap-[20px] w-full h-full">
        <div className="grow">
          <Calendar
            localizer={localizer}
            messages={messages}
            formats={formats}
            culture="es"
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 450 }}
          />
        </div>
        <div className="w-64 border-l border-gray-200 h-full p-2">
          <div className="flex flex-col gap-4">
            <h2 className="text-center text-2xl font-bold">Eventos</h2>
            <div className="flex flex-col gap-2 overflow-y-auto h-full">
              <DialogComponent
                btnText="Crear evento"
                title="Crear evento"
                description="Complete los campos para crear un evento"
                // buttonText="Crear"
                buttonOnClick={() => {}}
              >
                <EventForm/>
              </DialogComponent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
