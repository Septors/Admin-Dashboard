import { useState, useEffect } from "react";
import type{ StockProps } from "./StockList";

interface Props {
  product: StockProps | null;
  onClose: () => void;
  onSave: (product: StockProps) => void;
}

const EditProductModal = ({ product, onClose, onSave }: Props) => {
  const [form, setForm] = useState<StockProps | null>(null);

  useEffect(() => {
    setForm(product);
  }, [product]);

  if (!form) return null;

  const handleChange = (field: keyof StockProps, value: any) => {
    setForm(prev => prev ? { ...prev, [field]: value } : prev);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <div className="bg-white p-8 rounded-2xl w-[400px] space-y-4">
        <h2 className="text-xl font-bold">Edit Product</h2>

        <input
          className="w-full border p-2 rounded"
          value={form.name}
          onChange={e => handleChange("name", e.target.value)}
        />

        <input
          className="w-full border p-2 rounded"
          type="number"
          value={form.price}
          onChange={e => handleChange("price", +e.target.value)}
        />

        <input
          className="w-full border p-2 rounded"
          type="number"
          value={form.piece}
          onChange={e => handleChange("piece", +e.target.value)}
        />

        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 border rounded">
            Cancel
          </button>
          <button
            onClick={() => onSave(form)}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProductModal;
