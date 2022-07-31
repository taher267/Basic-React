import useWindowWidth from "./hooks/useWindowWidth";

export default function LayoutComponentTwo() {
  const width = useWindowWidth(500);
  return (
    <div className={width ? "small" : "Large"}>
      {width ? "small" : "Large"} Device, endpoint 600
    </div>
  );
}
