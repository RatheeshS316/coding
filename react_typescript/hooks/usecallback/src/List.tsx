import { useState, useEffect } from "react";

interface ListProps {
  getItems: (valueno: number) => number[];
}

const List: React.FC<ListProps> = ({ getItems }) => {
  const [items, setItems] = useState<number[]>([]);

  useEffect(() => {
    setItems(getItems(10));
  }, [getItems]);

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

export default List;
