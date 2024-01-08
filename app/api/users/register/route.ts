import dbConnect from "@/app/dbConnect/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {

    await dbConnect();
    
    const reqBody = await req.json();
    console.log("reqBody:", reqBody);

    return NextResponse.json({
      message: "user created successfully",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 300 });
  }
}
