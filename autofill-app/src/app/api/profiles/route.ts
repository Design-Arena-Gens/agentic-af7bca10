import { NextResponse } from "next/server";
import profiles from "@/data/profiles.json";

export const dynamic = "force-static";

export async function GET() {
  return NextResponse.json({ profiles });
}
