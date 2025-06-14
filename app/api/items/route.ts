import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { Item } from "@/types/item";

const filePath = path.join(process.cwd(), "data", "items.json");

export async function GET() {
  const data = fs.readFileSync(filePath, "utf-8");
  const items: Item[] = JSON.parse(data);
  return NextResponse.json(items);
}

export async function POST(req: Request) {
  const newItem: Item = await req.json();
  const data = fs.readFileSync(filePath, "utf-8");
  const items: Item[] = JSON.parse(data);

  newItem.id = Date.now();
  items.push(newItem);
  fs.writeFileSync(filePath, JSON.stringify(items, null, 2));

  return NextResponse.json(newItem);
}
