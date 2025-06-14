"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Item } from "@/types/item";
import { Pencil, Trash } from "lucide-react";
import { useEffect, useState } from "react";

export default function JsonCrudExample() {
  const [items, setItems] = useState<Item[]>([]);
  const [name, setName] = useState("");
  const [editId, setEditId] = useState<number | null>(null);

  const fetchItems = async () => {
    const res = await fetch("/portfolio/api/items");
    const data = await res.json();
    setItems(data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleAddOrUpdate = async () => {
    if (editId) {
      await fetch(`/portfolio/api/items/${editId}`, {
        method: "PUT",
        body: JSON.stringify({ name }),
      });
    } else {
      await fetch("/portfolio/api/items", {
        method: "POST",
        body: JSON.stringify({ name }),
      });
    }

    setName("");
    setEditId(null);
    fetchItems();
  };

  const handleEdit = (item: Item) => {
    setName(item.name);
    setEditId(item.id);
  };

  const handleDelete = async (id: number) => {
    await fetch(`/portfolio/api/items/${id}`, {
      method: "DELETE",
    });
    fetchItems();
  };

  return (
    <div className="p-8">
      <h1 className="text-xl font-semibold mb-4">CRUD WITH JSON File</h1>

      <div className="flex items-center justify-center space-x-2">
        <Input
          className="border p-2 mr-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Item name"
        />
        <Button onClick={handleAddOrUpdate}>{editId ? "Update" : "Add"}</Button>
      </div>

      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item.id} className="flex justify-between">
            {item.name}
            <div>
              <Button
                variant={"outline"}
                className="mr-2 rounded-full h-8 w-8"
                onClick={() => handleEdit(item)}
              >
                <Pencil />
              </Button>
              <Button
                className="rounded-full h-8 w-8"
                variant={"outline"}
                onClick={() => handleDelete(item.id)}
              >
                <Trash />
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
