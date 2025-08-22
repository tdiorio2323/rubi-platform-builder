"use client";
import dynamic from "next/dynamic";
const RubiPlatformBuilder = dynamic(() => import("../../components/RubiPlatformBuilder"), { ssr: false });
export default function RubiPage(){ return <RubiPlatformBuilder /> }
