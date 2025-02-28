import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { DataTableAlumnos } from "../components/Tabla";


export default function HomePage() {
 
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Alumnos</CardTitle>
          <CardDescription> Listado de alumnos</CardDescription>
        </CardHeader>
        <CardContent>
          <DataTableAlumnos />
        </CardContent>
      </Card>
      </>
  );
}
