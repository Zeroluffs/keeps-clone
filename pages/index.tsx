import Head from "next/head";
import Image from "next/image";
import React, { FocusEventHandler, useRef, useState } from "react";
import { KeepCard } from "../components/KeepCard";
import useAutosizeTextArea from "../hooks/useAutoSizeTextArea";
import useClickOutside from "../hooks/useClickOutside";
import styles from "../styles/Home.module.css";
import { classNames } from "../utils/JoinClassName";
// import { handleSubmit } from "../handlers/handlesubmit";
export default function Home() {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const squareBoxRef = useRef<HTMLDivElement>(null);

  const [isActive, setISActive] = useState(false);
  useAutosizeTextArea(textAreaRef.current, value);

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value;

    setValue(val);
  };
  const handleTitleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const val = evt.target?.value;

    setTitle(val);
  };
  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === "Escape") {
      const element = event.target as HTMLDivElement;
      element.blur();
      setISActive(false);
      textAreaRef.current?.blur();
    }
  };

  const clickOutsideHandler = () => {
    if (title == "" || value == "") {
      setISActive(false);
    }
    if (title != "" && value != "") {
      setValue("");
      setTitle("");
      setISActive(false);
    }
  };
  useClickOutside(squareBoxRef, clickOutsideHandler);
  const onBlur = (event: any) => {
    event.preventDefault();
    if (title != "" && value != "" && event.key != null) {
      setValue("");
      setTitle("");
      setISActive(false);
    } else {
      if ((title == "" || value == "") && event.key != null) {
        setISActive(false);
      }
    }
  };
  const dataRef = useRef<HTMLInputElement>(null);
  // const submithandler = async (e: any) => {
  //   e.preventDefault();
  //   await handleSubmit(dataRef!!.current!!.value);
  //   dataRef!!.current!!.value = "";
  // };
  return (
    <div>
      <div className="">
        {/*<form onSubmit={submithandler}>*/}
        {/*  <input type="text" ref={dataRef} />*/}
        {/*  <button type="submit">Save</button>*/}
        {/*</form>*/}
        <h1 id="mainHeader">Hello</h1>
      </div>
      {/* <div
        onClick={() => {
          setISActive(true);
        }}
        className="w-[300px]   h-auto m-auto flex flex-col justify-center items-center mt-[104px] rounded-xl"
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        ref={squareBoxRef}
      >
        <input
          onChange={handleTitleChange}
          className={classNames(
            isActive ? "block" : "hidden",
            "bg-slate-500 w-[300px] text-2xl   rounded-xl px-[16px] py-[12px] resize-none overflow-x-hidden outline-none appearance-none "
          )}
          placeholder="Title"
          value={title}
        />
        <textarea
          onClick={() => {
            setISActive(true);
          }}
          ref={textAreaRef}
          onChange={handleChange}
          className="bg-slate-500 w-[300px] text-2xl  h-auto rounded-xl px-[16px] py-[12px] resize-none overflow-x-hidden outline-none appearance-none"
          placeholder="Take a note..."
          value={value}
        />
      </div>
      <KeepCard /> */}
    </div>
  );
}
