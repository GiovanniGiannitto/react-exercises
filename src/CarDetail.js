import React from "react";
import { useRef } from "react";

export function CarDetail( {initialData} ) {
  const modelDetail = useRef(initialData.model);
  const dataDetail = useRef(initialData.year);
  const colorDetail = useRef(initialData.color);

  return (
    <div>
      <form>
        <input placeholder="Model..." ref={modelDetail} defaultValue={modelDetail.current} name="model" />
        <input placeholder="Year..." ref={dataDetail} defaultValue={dataDetail.current} name="year" />
        <input placeholder="Color..." ref={colorDetail} defaultValue={colorDetail.current} name="color" />
      </form>
    </div>
  );
}
