import { NextResponse } from "next/server";
import { readdir, stat } from "fs/promises";
import path from "path";

export async function GET() {
  const uploadDir = path.join(process.cwd(), "public", "uploads");

  try {
    // Check if the directory exists
    await stat(uploadDir);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      console.log("Uploads directory does not exist:", uploadDir);
      return NextResponse.json({ files: [] });
    }
    console.error("Error checking uploads directory:", error);
    return NextResponse.json(
      { error: "Failed to access uploads directory" },
      { status: 500 }
    );
  }

  try {
    const files = await readdir(uploadDir);
    const pdfFiles = files.filter((file) =>
      file.toLowerCase().endsWith(".pdf")
    );
    console.log("PDF files found:", pdfFiles);
    return NextResponse.json({ files: pdfFiles });
  } catch (error) {
    console.error("Error reading PDF directory:", error);
    return NextResponse.json(
      { error: "Failed to read PDF directory" },
      { status: 500 }
    );
  }
}
