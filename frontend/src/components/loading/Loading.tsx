interface LoadingProps {
  size?: Size;
}
type Size = "sm" | "md" | "lg";

export default function Loading({ size = "md" }: LoadingProps) {
  const spinnerSizeClasses = {
    sm: "w-8 h-8",
    md: "w-16 h-16",
    lg: "w-24 h-24",
    default: "w-20 h-20",
  };

  const containerHeightClasses = {
    sm: "h-40",
    md: "h-64",
    lg: "h-80",
    default: "min-h-screen",
  };

  // Usamos el tamaño proporcionado o el valor por defecto
  const spinnerSize = spinnerSizeClasses[size || "default"];
  const containerHeight = containerHeightClasses[size || "default"];

  return (
    <>
      <div
        className={`flex items-center justify-center gap-4 ${containerHeight}`}
      >
        <div
          className={`${spinnerSize} border-4 border-solid rounded-full border-t-primary animate-spin`}
        ></div>
      </div>
    </>
  );
}
