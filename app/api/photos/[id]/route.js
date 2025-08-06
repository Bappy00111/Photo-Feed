import { getPhotoById } from "@/lib/image-data";
import { NextResponse } from "next/server";
export const GET = async (request,{params}) => {
    const photoId = params.id;
    const photo = await getPhotoById(photoId);
    if(!photo) {
        return NextResponse.json({error: "Photo not found"}, {status: 404});
    } else{
        return NextResponse.json(photo);
    }
}