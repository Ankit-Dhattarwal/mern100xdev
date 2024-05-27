import { useEffect } from "react";

export function FunctionEvents() {
  useEffect(() => {
    // Perform setup or data fetching here
    console.log("component mounted");
    return () => {
      // Cleanup code (similar to componentWillUnmount)
      console.log("component unmounted");
    };
  }, []);

  // Render UI
  return <div>This is about FunctionLifeCycle Events.</div>;
}
