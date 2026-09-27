import { useState } from "react";

import Hero from "../components/Hero";
import Countdown from "../components/Countdown";
import WeddingDay from "../components/WeddingDay";
import Reception from "../components/Reception";
import DressCode from "../components/DressCode";
import WeddingPlan from "../components/WeddingPlan";
import InvitationMessage from "../components/InvitationMessage";
import RSVP from "../components/RSVP";
import Footer from "../components/Footer";
import Photos from "../components/Photos";

export default function Invitation({data, weddingId }) {

  return (
    <main className="min-h-screen bg-[#deddd5] px-0 sm:px-5 md:px-8 lg:px-12">
      <div className="w-full overflow-hidden bg-[#f5f1e9] wedding-card sm:mx-auto sm:max-w-2xl sm:rounded-[28px] md:max-w-3xl lg:max-w-4xl">

        <Hero data={data} />

        <Countdown targetDate={data.dateISO} />

        <InvitationMessage />

        <Reception event={data.reception} />

        <WeddingDay date={data.dateISO}/>

        <Photos />

        <WeddingPlan data={data} />

        <DressCode />

        <RSVP weddingId={weddingId} deadline={data.rsvpDeadline} />

        <Footer />

      </div>
    </main>
  );
}