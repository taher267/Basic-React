import useWindowWidth from "./hooks/useWindowWidth";

export default function LayoutComponent() {
  const width = useWindowWidth;
  return <>{width ? "small" : "Large"} Device</>;
}
