import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.redirect("https://raw.githubusercontent.com/sammmms/hoyolab-checkin/main/install.sh", 302);
}
