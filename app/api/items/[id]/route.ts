import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { Item } from "@/types/item";

const filePath = path.join(process.cwd(), "data", "items.json");

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  const updatedItem = await req.json();

  const data = fs.readFileSync(filePath, "utf-8");
  let items: Item[] = JSON.parse(data);

  items = items.map((item) =>
    item.id === id ? { ...item, ...updatedItem } : item
  );
  fs.writeFileSync(filePath, JSON.stringify(items, null, 2));

  return NextResponse.json({ message: "Updated" });
}

export async function DELETE(
  _: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);

  const data = fs.readFileSync(filePath, "utf-8");
  let items: Item[] = JSON.parse(data);
  items = items.filter((item) => item.id !== id);

  fs.writeFileSync(filePath, JSON.stringify(items, null, 2));

  return NextResponse.json({ message: "Deleted" });
}
