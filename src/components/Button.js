"use client";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending} = useFormStatus();
  return (
    <>
      <button
        className="mt-2 border w-max border-sky-900  rounded-md py-1 px-3 text-center text-sm font-medium text-gray-700 hover:bg-cyan-700  disabled:bg-gray-200 disabled:border-green-800 disabled:text-green-700"
        disabled={pending}
      >
        {pending ? "wait..." : "Display"}
      </button>
    </>
  );
}

export default SubmitButton;
