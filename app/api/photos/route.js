import { getAllPhotoMeta } from "@/lib/image-data"
import { NextResponse } from "next/server";

export  const  GET = async () =>{
    const data = await getAllPhotoMeta();
    return NextResponse.json(data)


}