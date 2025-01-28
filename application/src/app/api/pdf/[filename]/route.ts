import { type NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

// Define the type for params
interface Params {
  filename: string;
}

export async function GET(
  request: NextRequest,
  context: { params: Promise<Params> } // Expect params to be a Promise
) {
  // Wait for the params to resolve
  const { filename } = await context.params;

  const filePath = path.join(process.cwd(), "public", "uploads", filename);

  try {
    const fileBuffer = await readFile(filePath);

    // Log the file size for debugging
    console.log(`Serving PDF: ${filename}, Size: ${fileBuffer.length} bytes`);

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${encodeURIComponent(
          filename
        )}"`,
        "Content-Length": fileBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error(`Error reading file ${filename}:`, error);
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }
}
