"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [deviceType, setDeviceType] = useState(""); // Estado para armazenar o tipo de dispositivo

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();

    // Detectar dispositivo
    if (/android/i.test(userAgent)) {
      setDeviceType("Android"); // Define o tipo de dispositivo como "Android"
      router.push(
        "https://play.google.com/store/apps/details?id=br.com.popdez.passenger.drivermachine&pli=1"
      ); // Redireciona para o link A (exemplo)
    } else if (/iphone|ipad|ipod/i.test(userAgent)) {
      setDeviceType("iOS"); // Define o tipo de dispositivo como "iOS"
      router.replace("https://apps.apple.com/br/app/pop10-brasil/id1660040535"); // Redireciona para o link A (exemplo)
    } else {
      setDeviceType("Desktop"); // Define o tipo de dispositivo como "Desktop"
      // router.push("/link-b"); // Redireciona para o link B (exemplo)
    }
  }, [router]);

  return <div>O dispositivo é: {deviceType}</div>;
}
