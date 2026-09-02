import type { ReactNode } from "react";

export const TableItem = ({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) => (
  <td
    className="max-w-[100px] overflow-hidden text-ellipsis py-4 pr-2"
    title={title}
  >
    {children}
  </td>
);
