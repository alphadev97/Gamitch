"use server";

import {
  IngressAudioEncodingPreset,
  IngressInput,
  IngressClient,
  IngressVideoEncodingPreset,
  RoomServiceClient,
  TrackSource,
  CreateIngressOptions,
} from "livekit-server-sdk";

import { db } from "@/lib/db";
import { getSelf } from "@/lib/auth-service";

const roomService = new RoomServiceClient(
  process.env.LIVEKIT_API_URL!,
  process.env.LIVEKIT_API_KEY!,
  process.env.LIVEKIT_API_SECRET!
);

export const createIngress = async (ingressType: IngressInput) => {
  const self = await getSelf();

  // TODO: Reset previous ingress

  const options: CreateIngressOptions = {
    name: self.username,
    roomName: self.id,
    participantName: self.username,
    participantIdentity: self.id,
  };
};
