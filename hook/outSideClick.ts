import React, { useEffect, useState } from "react";

export default function useOutsideClick(ref: React.MutableRefObject<any>, handler: (e: any) => void) {
  useEffect(() => {
    const proc = (e: any) => {
      if (e.path === undefined) return;
      if (ref.current && !ref.current.contains(e.target) && e.path.find((v: HTMLDivElement) => v.id === "x-portal") === undefined) {
        handler(e);
      }
    };

    document.addEventListener("mousedown", proc);
    document.addEventListener("touchstart", proc);

    return () => {
      document.removeEventListener("mousedown", proc);
      document.removeEventListener("touchstart", proc);
    };
  }, [ref, handler]);

  return [ref, handler];
}
